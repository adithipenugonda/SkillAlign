import { useState } from "react";
import { GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UploadPanel } from "@/components/UploadPanel";
import { EnhancedPanel } from "@/components/EnhancedPanel";
import { SkillGapPanel } from "@/components/SkillGapPanel";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [curriculumText, setCurriculumText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("curriculum");
  const { toast } = useToast();

  const [originalAnalysis, setOriginalAnalysis] = useState<{
    subjects: string[];
    modules: string[];
    topics: string[];
    tools: string[];
    detectedSkills: string[];
  } | null>(null);

  const [skillGap, setSkillGap] = useState<{
    missingSkills: string[];
    outdatedTechnologies: string[];
    lowDemandTopics: string[];
    trendingTechnologies: string[];
    industryRequiredTools: string[];
    emergingDomains: string[];
  } | null>(null);

  const [enhancedCurriculum, setEnhancedCurriculum] = useState<{
    modules: { name: string; topics: string[]; tools: string[]; certifications?: string[]; practicalLabs?: string[]; caseStudies?: string[] }[];
    removedTopics: string[];
    addedTopics: string[];
    modifiedTopics: string[];
  } | null>(null);

  const handleRegenerate = async () => {
    if (!curriculumText.trim()) {
      toast({ title: "No curriculum", description: "Please paste or upload a curriculum first.", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("analyze-curriculum", {
        body: { curriculumText },
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      setOriginalAnalysis(data.originalAnalysis);
      setSkillGap(data.skillGapAnalysis);
      setEnhancedCurriculum(data.enhancedCurriculum);
      toast({ title: "Analysis complete!", description: "Your curriculum has been analyzed and enhanced." });
    } catch (e: any) {
      console.error(e);
      toast({ title: "Analysis failed", description: e.message || "Something went wrong.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-surface">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center glow-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-foreground">Curriculum Composer</h1>
              <p className="text-xs text-muted-foreground">Skill Align — Educator Dashboard</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 bg-secondary">
            <TabsTrigger value="curriculum" className="data-[state=active]:text-primary font-display">
              Curriculum
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:text-primary font-display">
              Job Market Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="curriculum">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ minHeight: "70vh" }}>
              {/* Left - Upload */}
              <div className="rounded-xl border border-border bg-card p-6 border-glow">
                <UploadPanel
                  curriculumText={curriculumText}
                  setCurriculumText={setCurriculumText}
                  detectedSkills={originalAnalysis?.detectedSkills || []}
                  originalAnalysis={originalAnalysis ? { subjects: originalAnalysis.subjects, modules: originalAnalysis.modules, topics: originalAnalysis.topics, tools: originalAnalysis.tools } : null}
                />
              </div>

              {/* Right - Enhanced */}
              <div className="rounded-xl border border-border bg-card p-6 border-glow">
                <EnhancedPanel enhancedCurriculum={enhancedCurriculum} isLoading={isLoading} />
              </div>
            </div>

            {/* Regenerate button */}
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground glow-primary px-8 font-display text-base"
                onClick={handleRegenerate}
                disabled={isLoading || !curriculumText.trim()}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                {isLoading ? "Analyzing..." : "Regenerate with AI"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="min-h-[70vh]">
            <div className="rounded-xl border border-border bg-card p-6 border-glow">
              <SkillGapPanel skillGap={skillGap} />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
