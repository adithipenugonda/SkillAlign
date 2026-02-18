import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const companies = [
  {
    name: "Google", logo: "🔍",
    roles: [
      { title: "Software Engineer", skills: ["Python", "Go", "System Design", "DSA"], certs: ["Google Cloud Professional"] },
      { title: "Data Scientist", skills: ["Python", "TensorFlow", "SQL", "Statistics"], certs: ["TensorFlow Developer Certificate"] },
    ],
  },
  {
    name: "Microsoft", logo: "🪟",
    roles: [
      { title: "Full Stack Developer", skills: ["C#", ".NET", "Azure", "React"], certs: ["Azure Developer Associate"] },
      { title: "AI Engineer", skills: ["Python", "PyTorch", "NLP", "MLOps"], certs: ["Azure AI Engineer Associate"] },
    ],
  },
  {
    name: "Amazon", logo: "📦",
    roles: [
      { title: "SDE", skills: ["Java", "AWS", "Distributed Systems", "DSA"], certs: ["AWS Solutions Architect"] },
      { title: "Product Manager", skills: ["Data Analysis", "SQL", "A/B Testing", "Agile"], certs: ["PMP", "CSPO"] },
    ],
  },
  {
    name: "Meta", logo: "Ⓜ️",
    roles: [
      { title: "Frontend Engineer", skills: ["React", "TypeScript", "GraphQL", "Performance"], certs: ["Meta Frontend Developer"] },
      { title: "ML Engineer", skills: ["PyTorch", "Computer Vision", "Python", "C++"], certs: ["Deep Learning Specialization"] },
    ],
  },
  {
    name: "Apple", logo: "🍎",
    roles: [
      { title: "iOS Developer", skills: ["Swift", "SwiftUI", "Objective-C", "Core Data"], certs: ["Apple Developer Certification"] },
      { title: "Hardware Engineer", skills: ["Verilog", "VLSI", "Signal Processing", "PCB Design"], certs: ["IEEE Certifications"] },
    ],
  },
];

const DreamJobPathway = () => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);

  return (
    <DashboardLayout title="Dream Job Pathway" onBack={() => navigate("/student")}>
      {!selectedCompany ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {companies.map((company) => (
            <button
              key={company.name}
              onClick={() => setSelectedCompany(company)}
              className="subtle-card p-6 flex items-center gap-4 text-left group cursor-pointer"
            >
              <span className="text-3xl">{company.logo}</span>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold">{company.name}</h3>
                <p className="text-muted-foreground text-xs">{company.roles.length} roles available</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedCompany(null)}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to companies
          </button>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="text-3xl">{selectedCompany.logo}</span>
            {selectedCompany.name}
          </h2>
          <p className="text-muted-foreground mb-8">Explore roles and required skills</p>
          <div className="space-y-6">
            {selectedCompany.roles.map((role) => (
              <div key={role.title} className="subtle-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{role.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((s) => (
                        <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.certs.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DreamJobPathway;
