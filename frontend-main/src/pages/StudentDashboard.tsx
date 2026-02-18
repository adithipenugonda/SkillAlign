import { useNavigate } from "react-router-dom";
import { Briefcase, Bot } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Student Dashboard" onBack={() => navigate("/")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="subtle-card p-8 flex flex-col gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Dream Job Pathway</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Explore top companies and discover required skills.
          </p>
          <button onClick={() => navigate("/student/dream-job")} className="gradient-btn px-6 py-3 rounded-lg mt-auto">
            Start Journey
          </button>
        </div>

        <div className="subtle-card p-8 flex flex-col gap-4">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Bot className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">AI Tool Tracker</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Discover the latest AI tools and how to use them.
          </p>
          <button onClick={() => navigate("/student/ai-tools")} className="gradient-btn px-6 py-3 rounded-lg mt-auto">
            Explore Tools
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
