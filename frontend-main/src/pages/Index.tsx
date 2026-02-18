import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl w-full">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-3">
          Skill Align
        </h1>
        <p className="text-muted-foreground text-lg mb-2">
          Industry-Connected Education Ecosystem
        </p>
        <p className="text-muted-foreground mb-12">Choose your role to continue</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg mx-auto">
          <button
            onClick={() => navigate("/auth?role=student")}
            className="subtle-card p-8 flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <span className="text-foreground font-semibold text-lg">Student</span>
            <span className="gradient-btn px-6 py-2 rounded-lg text-sm w-full text-center">
              Continue as Student
            </span>
          </button>

          <button
            onClick={() => navigate("/auth?role=educator")}
            className="subtle-card p-8 flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <BookOpen className="w-8 h-8 text-secondary" />
            </div>
            <span className="text-foreground font-semibold text-lg">Educator</span>
            <span className="gradient-btn px-6 py-2 rounded-lg text-sm w-full text-center">
              Continue as Educator
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
