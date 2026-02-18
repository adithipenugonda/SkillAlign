import { useState, useRef } from "react";
import { Upload, FileText, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface UploadPanelProps {
  curriculumText: string;
  setCurriculumText: (text: string) => void;
  detectedSkills: string[];
  originalAnalysis: {
    subjects: string[];
    modules: string[];
    topics: string[];
    tools: string[];
  } | null;
}

export const UploadPanel = ({ curriculumText, setCurriculumText, detectedSkills, originalAnalysis }: UploadPanelProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setCurriculumText(text);
      toast({ title: "File loaded", description: `${file.name} has been loaded successfully.` });
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-display font-semibold text-foreground">Original Curriculum</h2>
        <div className="flex gap-2">
          <input ref={fileRef} type="file" accept=".txt,.md,.doc,.docx" className="hidden" onChange={handleFile} />
          <Button size="sm" className="gradient-primary text-primary-foreground" onClick={() => fileRef.current?.click()}>
            <FileText className="h-4 w-4 mr-1" /> Choose File
          </Button>
          <Button size="sm" variant="secondary" onClick={() => navigator.clipboard.readText().then(setCurriculumText)}>
            <Clipboard className="h-4 w-4 mr-1" /> Paste
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-3">
        Paste your curriculum text or upload a file (.txt, .md, .doc, .docx)
      </p>

      <Textarea
        value={curriculumText}
        onChange={(e) => setCurriculumText(e.target.value)}
        placeholder="Paste your curriculum here or upload a file..."
        className="flex-1 min-h-[300px] resize-none bg-secondary/50 border-border focus:border-glow transition-all"
      />

      {detectedSkills.length > 0 && (
        <div className="mt-4 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Detected Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {detectedSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="border border-primary/30 text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {originalAnalysis && (
        <div className="mt-4 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Extracted Structure</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-muted-foreground">Subjects:</span>
              <span className="ml-1 text-foreground">{originalAnalysis.subjects.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Modules:</span>
              <span className="ml-1 text-foreground">{originalAnalysis.modules.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Topics:</span>
              <span className="ml-1 text-foreground">{originalAnalysis.topics.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Tools:</span>
              <span className="ml-1 text-foreground">{originalAnalysis.tools.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
