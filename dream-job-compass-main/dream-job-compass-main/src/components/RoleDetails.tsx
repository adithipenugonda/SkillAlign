import { CompanyInfo, RoleInfo } from "@/data/companyData";
import { Code, BookOpen, Target, DollarSign, Clock, Lightbulb } from "lucide-react";

interface Props {
  company: CompanyInfo;
  roleName: string;
  roleInfo: RoleInfo;
}

const RoleDetails = ({ company, roleName, roleInfo }: Props) => {
  return (
    <div>
      <div className="mb-8 text-center">
        <img src={company.logo} alt={company.name} className="mx-auto h-14 w-14 rounded-lg object-contain" />
        <h2 className="mt-2 text-xl font-semibold text-foreground">
          {roleName} at {company.name}
        </h2>
        <p className="text-sm text-muted-foreground">{roleInfo.title}</p>
        <div className="mt-3 flex items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-1 text-accent">
            <DollarSign size={14} /> {roleInfo.salary}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock size={14} /> {roleInfo.experience}
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Skills */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-primary/10 p-2">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-primary">Required Skills</h3>
          </div>
          <ul className="space-y-2">
            {roleInfo.skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Guidelines */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-accent/10 p-2">
              <Target className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-semibold text-accent">Interview Guidelines</h3>
          </div>
          <ul className="space-y-2">
            {roleInfo.guidelines.map((g) => (
              <li
                key={g}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="rounded-xl border border-border bg-card p-6 md:col-span-2 lg:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-primary/10 p-2">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-primary">
              Recommended Resources
            </h3>
          </div>
          <ul className="space-y-2">
            {roleInfo.resources.map((r) => (
              <li
                key={r}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoleDetails;
