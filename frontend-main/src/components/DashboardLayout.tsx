import { ArrowLeft, LogOut } from "lucide-react";
import { ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  title: string;
  onBack: () => void;
  children: ReactNode;
}

const DashboardLayout = ({ title, onBack, children }: DashboardLayoutProps) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-display text-xl font-bold text-gradient">{title}</h1>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </header>
      <main className="px-6 py-10">{children}</main>
    </div>
  );
};

export default DashboardLayout;
