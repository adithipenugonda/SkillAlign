import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

interface Tool {
  name: string;
  category: string;
  description: string;
  purpose?: string;
  useCase?: string;
}

const studentTools: Tool[] = [
  { name: "ChatGPT", category: "Language Model", description: "AI-powered conversational assistant for research and writing." },
  { name: "GitHub Copilot", category: "Code Assistant", description: "AI pair programmer that suggests code in real-time." },
  { name: "Midjourney", category: "Image Generation", description: "Create stunning visuals from text descriptions." },
  { name: "Notion AI", category: "Productivity", description: "AI-powered workspace for notes, docs, and project management." },
  { name: "Grammarly", category: "Writing", description: "AI writing assistant for grammar, clarity, and tone." },
  { name: "Perplexity", category: "Research", description: "AI-powered search engine with cited sources." },
  { name: "Cursor", category: "Code Assistant", description: "AI-first code editor for rapid development." },
  { name: "RunwayML", category: "Video", description: "AI-powered video editing and generation tool." },
];

const educatorTools: Tool[] = [
  { name: "ChatGPT", category: "Content Creation", description: "Generate lesson plans and explanations.", purpose: "Lesson planning & content generation", useCase: "Creating quiz questions, explaining concepts" },
  { name: "Gradescope", category: "Assessment", description: "AI-assisted grading platform.", purpose: "Automated grading", useCase: "Grading assignments and exams at scale" },
  { name: "Canva AI", category: "Design", description: "Create educational visuals with AI.", purpose: "Visual content creation", useCase: "Designing presentations and infographics" },
  { name: "Quillbot", category: "Writing", description: "Paraphrasing and summarization tool.", purpose: "Content refinement", useCase: "Simplifying complex texts for students" },
  { name: "Synthesia", category: "Video", description: "Create AI-generated video lectures.", purpose: "Video lecture creation", useCase: "Producing multilingual video content" },
  { name: "Socratic by Google", category: "Tutoring", description: "AI tutor for student support.", purpose: "Student assistance", useCase: "Homework help and concept explanations" },
];

const categories = (tools: Tool[]) => ["All", ...Array.from(new Set(tools.map((t) => t.category)))];

const AIToolTracker = ({ variant }: { variant: "student" | "educator" }) => {
  const navigate = useNavigate();
  const tools = variant === "student" ? studentTools : educatorTools;
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? tools : tools.filter((t) => t.category === filter);

  return (
    <DashboardLayout
      title={variant === "student" ? "AI Tool Tracker" : "AI Tools for Educators"}
      onBack={() => navigate(variant === "student" ? "/student" : "/educator")}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories(tools).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat ? "gradient-btn" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tool) => (
            <div key={tool.name} className="subtle-card p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <h3 className="text-foreground font-semibold">{tool.name}</h3>
                <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">{tool.category}</span>
              </div>
              <p className="text-muted-foreground text-sm flex-1">{tool.description}</p>
              {variant === "educator" && tool.purpose && (
                <div className="space-y-1 text-xs">
                  <p><span className="text-secondary font-medium">Purpose:</span> <span className="text-muted-foreground">{tool.purpose}</span></p>
                  <p><span className="text-secondary font-medium">Use case:</span> <span className="text-muted-foreground">{tool.useCase}</span></p>
                </div>
              )}
              <button className="gradient-btn px-4 py-2 rounded-lg text-sm mt-auto">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIToolTracker;
