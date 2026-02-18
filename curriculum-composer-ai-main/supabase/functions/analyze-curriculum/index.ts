import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { curriculumText } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are an expert curriculum analyst and educational technology specialist. Analyze the provided curriculum and return a JSON response using the tool provided.

Your analysis should:
1. Extract all subjects, modules, topics, and tools from the curriculum
2. Identify skills present in the curriculum
3. Compare against current industry trends and job market demands
4. Identify skill gaps: missing skills, outdated technologies, low-demand topics
5. Generate an enhanced curriculum that adds latest tools, certifications, practical labs/projects, and industry case studies
6. Clearly mark which topics were removed, added, or modified

Be specific and actionable. Use real, current technology names and certifications.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Analyze and enhance this curriculum:\n\n${curriculumText}` },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "curriculum_analysis",
              description: "Return the full curriculum analysis and enhanced curriculum",
              parameters: {
                type: "object",
                properties: {
                  originalAnalysis: {
                    type: "object",
                    properties: {
                      subjects: { type: "array", items: { type: "string" } },
                      modules: { type: "array", items: { type: "string" } },
                      topics: { type: "array", items: { type: "string" } },
                      tools: { type: "array", items: { type: "string" } },
                      detectedSkills: { type: "array", items: { type: "string" } },
                    },
                    required: ["subjects", "modules", "topics", "tools", "detectedSkills"],
                  },
                  skillGapAnalysis: {
                    type: "object",
                    properties: {
                      missingSkills: { type: "array", items: { type: "string" } },
                      outdatedTechnologies: { type: "array", items: { type: "string" } },
                      lowDemandTopics: { type: "array", items: { type: "string" } },
                      trendingTechnologies: { type: "array", items: { type: "string" } },
                      industryRequiredTools: { type: "array", items: { type: "string" } },
                      emergingDomains: { type: "array", items: { type: "string" } },
                    },
                    required: ["missingSkills", "outdatedTechnologies", "lowDemandTopics", "trendingTechnologies", "industryRequiredTools", "emergingDomains"],
                  },
                  enhancedCurriculum: {
                    type: "object",
                    properties: {
                      modules: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            name: { type: "string" },
                            topics: { type: "array", items: { type: "string" } },
                            tools: { type: "array", items: { type: "string" } },
                            certifications: { type: "array", items: { type: "string" } },
                            practicalLabs: { type: "array", items: { type: "string" } },
                            caseStudies: { type: "array", items: { type: "string" } },
                          },
                          required: ["name", "topics", "tools"],
                        },
                      },
                      removedTopics: { type: "array", items: { type: "string" } },
                      addedTopics: { type: "array", items: { type: "string" } },
                      modifiedTopics: { type: "array", items: { type: "string" } },
                    },
                    required: ["modules", "removedTopics", "addedTopics", "modifiedTopics"],
                  },
                },
                required: ["originalAnalysis", "skillGapAnalysis", "enhancedCurriculum"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "curriculum_analysis" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    let result;
    if (toolCall) {
      result = JSON.parse(toolCall.function.arguments);
    } else {
      // Fallback: try to parse JSON from the text content
      const content = data.choices?.[0]?.message?.content || "";
      const jsonMatch = content.match(/```json\s*([\s\S]*?)```/) || content.match(/(\{[\s\S]*\})/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[1]);
      } else {
        console.error("Raw response:", JSON.stringify(data));
        throw new Error("Could not extract structured data from AI response");
      }
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("analyze-curriculum error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
