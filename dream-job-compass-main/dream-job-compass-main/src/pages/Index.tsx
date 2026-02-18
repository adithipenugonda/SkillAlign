import { useState } from "react";
import { companies } from "@/data/companyData";
import CompanySelect from "@/components/CompanySelect";
import RoleSelect from "@/components/RoleSelect";
import RoleDetails from "@/components/RoleDetails";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [step, setStep] = useState<"company" | "role" | "details">("company");
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");

  const company = companies.find((c) => c.name === selectedCompany);
  const roleInfo = company?.roles[selectedRole];

  const handleCompanySelect = (name: string) => {
    setSelectedCompany(name);
    setSelectedRole("");
    setStep("role");
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setStep("details");
  };

  const handleBack = () => {
    if (step === "details") {
      setStep("role");
      setSelectedRole("");
    } else if (step === "role") {
      setStep("company");
      setSelectedCompany("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          {step !== "company" && (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">Back</span>
            </button>
          )}
          <h1 className="text-2xl font-bold text-foreground">
            <span className="text-primary">Dream Job</span> Pathway
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Step indicator */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {["Select Company", "Choose Role", "Your Roadmap"].map((label, i) => {
            const stepIndex = ["company", "role", "details"].indexOf(step);
            const isActive = i <= stepIndex;
            return (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-sm ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
                {i < 2 && (
                  <div
                    className={`h-px w-8 ${
                      i < stepIndex ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {step === "company" && (
          <CompanySelect onSelect={handleCompanySelect} />
        )}
        {step === "role" && company && (
          <RoleSelect company={company} onSelect={handleRoleSelect} />
        )}
        {step === "details" && company && roleInfo && (
          <RoleDetails company={company} roleName={selectedRole} roleInfo={roleInfo} />
        )}
      </main>
    </div>
  );
};

export default Index;
