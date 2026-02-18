import { TrendingUp, AlertTriangle, ArrowDown, Sparkles, Wrench, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SkillGapAnalysis {
  missingSkills: string[];
  outdatedTechnologies: string[];
  lowDemandTopics: string[];
  trendingTechnologies: string[];
  industryRequiredTools: string[];
  emergingDomains: string[];
}

interface SkillGapPanelProps {
  skillGap: SkillGapAnalysis | null;
}

const Section = ({ icon: Icon, title, items, colorClass }: { icon: any; title: string; items: string[]; colorClass: string }) => (
  <div className="rounded-lg bg-secondary/50 border border-border p-4 space-y-3">
    <div className="flex items-center gap-2">
      <Icon className={`h-4 w-4 ${colorClass}`} />
      <h3 className="text-sm font-display font-semibold text-foreground">{title}</h3>
      <Badge variant="secondary" className="text-xs ml-auto">{items.length}</Badge>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Badge key={item} variant="outline" className={`text-xs ${colorClass} border-current/30`}>
          {item}
        </Badge>
      ))}
    </div>
  </div>
);

export const SkillGapPanel = ({ skillGap }: SkillGapPanelProps) => {
  if (!skillGap) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-3">
        <TrendingUp className="h-12 w-12 opacity-40" />
        <p className="text-sm">Job market insights will appear after analysis</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="space-y-4 pr-3">
        <h2 className="text-lg font-display font-semibold text-foreground">Job Market Insights</h2>

        <Section icon={AlertTriangle} title="Missing Skills" items={skillGap.missingSkills} colorClass="text-red-400" />
        <Section icon={ArrowDown} title="Outdated Technologies" items={skillGap.outdatedTechnologies} colorClass="text-amber-400" />
        <Section icon={ArrowDown} title="Low-Demand Topics" items={skillGap.lowDemandTopics} colorClass="text-orange-400" />
        <Section icon={TrendingUp} title="Trending Technologies" items={skillGap.trendingTechnologies} colorClass="text-emerald-400" />
        <Section icon={Wrench} title="Industry-Required Tools" items={skillGap.industryRequiredTools} colorClass="text-blue-400" />
        <Section icon={Globe} title="Emerging Domains" items={skillGap.emergingDomains} colorClass="text-purple-400" />
      </div>
    </ScrollArea>
  );
};
