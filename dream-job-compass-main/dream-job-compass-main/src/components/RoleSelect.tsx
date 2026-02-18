import { CompanyInfo } from "@/data/companyData";
import { Briefcase } from "lucide-react";

interface Props {
  company: CompanyInfo;
  onSelect: (role: string) => void;
}

const RoleSelect = ({ company, onSelect }: Props) => {
  const roles = Object.keys(company.roles);

  return (
    <div>
      <div className="mb-6 text-center">
        <img src={company.logo} alt={company.name} className="mx-auto h-14 w-14 rounded-lg object-contain" />
        <h2 className="mt-2 text-xl font-semibold text-foreground">
          {company.name}
        </h2>
        <p className="text-sm text-muted-foreground">
          Select a role to view the career pathway
        </p>
      </div>

      <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
        {roles.map((role) => {
          const info = company.roles[role];
          return (
            <button
              key={role}
              onClick={() => onSelect(role)}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-[0_0_20px_hsl(300_100%_50%/0.15)]"
            >
              <div className="mt-0.5 rounded-lg bg-primary/10 p-2">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{role}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {info.title}
                </p>
                <p className="mt-2 text-xs text-accent">
                  {info.salary} · {info.experience}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoleSelect;
