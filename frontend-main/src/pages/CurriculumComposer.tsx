import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Download, Edit3 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const originalCurriculum = `Module 1: Introduction to Programming
- Variables and Data Types
- Control Structures (if/else, loops)
- Functions and Scope

Module 2: Object-Oriented Programming
- Classes and Objects
- Inheritance
- Polymorphism

Module 3: Data Structures
- Arrays and Linked Lists
- Stacks and Queues
- Trees and Graphs

Module 4: Databases
- SQL Basics
- Normalization
- Joins and Queries`;

const enhancedCurriculum = [
  { text: "Module 1: Introduction to Programming", type: "same" },
  { text: "- Variables and Data Types", type: "same" },
  { text: "- Control Structures (if/else, loops)", type: "same" },
  { text: "- Functions and Scope", type: "same" },
  { text: "+ Type Safety & TypeScript Basics", type: "added" },
  { text: "", type: "same" },
  { text: "Module 2: Object-Oriented Programming", type: "same" },
  { text: "- Classes and Objects", type: "same" },
  { text: "- Inheritance", type: "same" },
  { text: "- Polymorphism", type: "same" },
  { text: "+ Design Patterns (Singleton, Factory, Observer)", type: "added" },
  { text: "+ SOLID Principles", type: "added" },
  { text: "", type: "same" },
  { text: "Module 3: Data Structures", type: "same" },
  { text: "- Arrays and Linked Lists", type: "same" },
  { text: "- Stacks and Queues", type: "same" },
  { text: "- Trees and Graphs", type: "same" },
  { text: "+ Hash Maps and Sets", type: "added" },
  { text: "+ Algorithm Complexity (Big O)", type: "added" },
  { text: "", type: "same" },
  { text: "Module 4: Databases", type: "same" },
  { text: "- SQL Basics", type: "same" },
  { text: "- Normalization (removed: outdated approach)", type: "removed" },
  { text: "+ NoSQL Databases (MongoDB, Firebase)", type: "added" },
  { text: "- Joins and Queries", type: "same" },
  { text: "+ ORM & Prisma Basics", type: "added" },
  { text: "", type: "same" },
  { text: "+ Module 5: Modern Web Development (NEW)", type: "added" },
  { text: "+ React & Component Architecture", type: "added" },
  { text: "+ REST APIs & GraphQL", type: "added" },
  { text: "+ CI/CD & DevOps Basics", type: "added" },
];

const CurriculumComposer = () => {
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(false);

  return (
    <DashboardLayout title="AI Curriculum Composer" onBack={() => navigate("/educator")}>
      <div className="max-w-6xl mx-auto">
        {!uploaded ? (
          <div className="max-w-lg mx-auto">
            <div onClick={() => setUploaded(true)} className="subtle-card p-12 flex flex-col items-center gap-4 cursor-pointer text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg">Upload Curriculum</h3>
              <p className="text-muted-foreground text-sm">Click to upload your curriculum file (demo)</p>
              <span className="gradient-btn px-6 py-2 rounded-lg text-sm">Upload File</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="subtle-card p-6">
              <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-primary" /> Original Curriculum
              </h3>
              <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono bg-muted/30 p-4 rounded-lg leading-relaxed">
                {originalCurriculum}
              </pre>
            </div>
            <div className="subtle-card p-6">
              <h3 className="text-foreground font-semibold mb-4">✨ AI-Enhanced Curriculum</h3>
              <div className="bg-muted/30 p-4 rounded-lg space-y-0.5 font-mono text-sm">
                {enhancedCurriculum.map((line, i) => (
                  <div
                    key={i}
                    className={`px-2 py-0.5 rounded ${
                      line.type === "added" ? "bg-green-500/10 text-green-400"
                        : line.type === "removed" ? "bg-red-500/10 text-red-400 line-through"
                        : "text-muted-foreground"
                    }`}
                  >
                    {line.text || "\u00A0"}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button className="gradient-btn px-5 py-2 rounded-lg text-sm flex items-center gap-2">
                  <Edit3 className="w-4 h-4" /> Edit
                </button>
                <button className="gradient-btn px-5 py-2 rounded-lg text-sm flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CurriculumComposer;
