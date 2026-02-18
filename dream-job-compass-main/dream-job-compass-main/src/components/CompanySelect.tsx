import { useState } from "react";
import { companies } from "@/data/companyData";
import { Search } from "lucide-react";

interface Props {
  onSelect: (company: string) => void;
}

const CompanySelect = ({ onSelect }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = companies.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.industry.toLowerCase().includes(search.toLowerCase());
    // Hidden companies only show when user is actively searching
    if (c.hidden && !search.trim()) return false;
    return matchesSearch;
  });

  return (
    <div>
      <h2 className="mb-2 text-center text-xl font-semibold text-foreground">
        Choose a Company
      </h2>
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Select from top MNCs to explore roles and career pathways
      </p>

      <div className="relative mx-auto mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-10 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((company) => (
          <button
            key={company.name}
            onClick={() => onSelect(company.name)}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-[0_0_20px_hsl(300_100%_50%/0.15)]"
          >
            <img src={company.logo} alt={company.name} className="h-10 w-10 rounded-lg object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="text-sm font-semibold text-foreground">
              {company.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {company.industry}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-muted-foreground">
          No companies found matching "{search}"
        </p>
      )}
    </div>
  );
};

export default CompanySelect;
