import { useNavigate } from "react-router-dom";
import { FileText, Bot } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const EducatorDashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Educator Dashboard" onBack={() => navigate("/")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="subtle-card p-8 flex flex-col gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">AI Curriculum Composer</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Upload and enhance your curriculum with AI.
          </p>
          <button onClick={() => navigate("/educator/curriculum")} className="gradient-btn px-6 py-3 rounded-lg mt-auto">
            Start Editing
          </button>
        </div>

        <div className="subtle-card p-8 flex flex-col gap-4">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Bot className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">AI Tools for Educators</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Discover AI tools and their use cases in teaching.
          </p>
          <button onClick={() => navigate("/educator/ai-tools")} className="gradient-btn px-6 py-3 rounded-lg mt-auto">
            Explore Tools
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EducatorDashboard;
