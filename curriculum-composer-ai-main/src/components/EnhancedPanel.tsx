import { FileText, Download, Edit, Save, Plus, Minus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EnhancedModule {
  name: string;
  topics: string[];
  tools: string[];
  certifications?: string[];
  practicalLabs?: string[];
  caseStudies?: string[];
}

interface EnhancedCurriculum {
  modules: EnhancedModule[];
  removedTopics: string[];
  addedTopics: string[];
  modifiedTopics: string[];
}

interface EnhancedPanelProps {
  enhancedCurriculum: EnhancedCurriculum | null;
  isLoading: boolean;
}

export const EnhancedPanel = ({ enhancedCurriculum, isLoading }: EnhancedPanelProps) => {
  const handleDownload = () => {
    if (!enhancedCurriculum) return;
    let content = "# Enhanced Curriculum\n\n";
    enhancedCurriculum.modules.forEach((mod) => {
      content += `## ${mod.name}\n\n`;
      content += `### Topics\n${mod.topics.map((t) => `- ${t}`).join("\n")}\n\n`;
      content += `### Tools\n${mod.tools.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (mod.certifications?.length) content += `### Certifications\n${mod.certifications.map((c) => `- ${c}`).join("\n")}\n\n`;
      if (mod.practicalLabs?.length) content += `### Practical Labs\n${mod.practicalLabs.map((l) => `- ${l}`).join("\n")}\n\n`;
      if (mod.caseStudies?.length) content += `### Case Studies\n${mod.caseStudies.map((c) => `- ${c}`).join("\n")}\n\n`;
    });

    content += `## Changes Summary\n\n`;
    content += `### Removed Topics\n${enhancedCurriculum.removedTopics.map((t) => `- ${t}`).join("\n")}\n\n`;
    content += `### Added Topics\n${enhancedCurriculum.addedTopics.map((t) => `- ${t}`).join("\n")}\n\n`;
    content += `### Modified Topics\n${enhancedCurriculum.modifiedTopics.map((t) => `- ${t}`).join("\n")}\n\n`;

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "enhanced-curriculum.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Enhanced Curriculum</h2>
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-muted border-t-primary animate-spin" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-foreground">AI is analyzing your curriculum...</p>
            <p className="text-xs text-muted-foreground">Extracting skills, comparing with job market data</p>
          </div>
        </div>
      </div>
    );
  }

  if (!enhancedCurriculum) {
    return (
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Enhanced Curriculum</h2>
        <div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground">
          <FileText className="h-12 w-12 opacity-40" />
          <p className="text-sm">Enhanced curriculum will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-display font-semibold text-foreground">Enhanced Curriculum</h2>
        <div className="flex gap-2">
          <Button size="sm" variant="secondary" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-1" /> Export
          </Button>
        </div>
      </div>

      {/* Changes summary */}
      <div className="flex gap-3 mb-4 flex-wrap">
        {enhancedCurriculum.addedTopics.length > 0 && (
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 gap-1">
            <Plus className="h-3 w-3" /> {enhancedCurriculum.addedTopics.length} Added
          </Badge>
        )}
        {enhancedCurriculum.removedTopics.length > 0 && (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 gap-1">
            <Minus className="h-3 w-3" /> {enhancedCurriculum.removedTopics.length} Removed
          </Badge>
        )}
        {enhancedCurriculum.modifiedTopics.length > 0 && (
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 gap-1">
            <RefreshCw className="h-3 w-3" /> {enhancedCurriculum.modifiedTopics.length} Modified
          </Badge>
        )}
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-4 pr-3">
          {enhancedCurriculum.modules.map((mod, i) => (
            <div key={i} className="rounded-lg bg-secondary/50 border border-border p-4 space-y-3">
              <h3 className="font-display font-semibold text-foreground">{mod.name}</h3>

              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Topics</p>
                <div className="flex flex-wrap gap-1.5">
                  {mod.topics.map((topic) => {
                    const isAdded = enhancedCurriculum.addedTopics.includes(topic);
                    const isModified = enhancedCurriculum.modifiedTopics.includes(topic);
                    return (
                      <Badge
                        key={topic}
                        variant="outline"
                        className={
                          isAdded
                            ? "border-emerald-500/50 text-emerald-400 text-xs"
                            : isModified
                            ? "border-amber-500/50 text-amber-400 text-xs"
                            : "text-xs"
                        }
                      >
                        {topic}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {mod.tools.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs border border-primary/20">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {mod.certifications && mod.certifications.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Certifications</p>
                  <ul className="text-xs text-foreground space-y-1">
                    {mod.certifications.map((c) => (
                      <li key={c}>🏅 {c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {mod.practicalLabs && mod.practicalLabs.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Labs & Projects</p>
                  <ul className="text-xs text-foreground space-y-1">
                    {mod.practicalLabs.map((l) => (
                      <li key={l}>🔬 {l}</li>
                    ))}
                  </ul>
                </div>
              )}

              {mod.caseStudies && mod.caseStudies.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Case Studies</p>
                  <ul className="text-xs text-foreground space-y-1">
                    {mod.caseStudies.map((c) => (
                      <li key={c}>📋 {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Removed topics section */}
          {enhancedCurriculum.removedTopics.length > 0 && (
            <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-4 space-y-2">
              <h3 className="font-display font-semibold text-red-400 text-sm">Removed Topics</h3>
              <div className="flex flex-wrap gap-1.5">
                {enhancedCurriculum.removedTopics.map((t) => (
                  <Badge key={t} variant="outline" className="border-red-500/30 text-red-400 text-xs line-through">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
