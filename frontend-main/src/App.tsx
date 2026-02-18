import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import StudentDashboard from "./pages/StudentDashboard";
import EducatorDashboard from "./pages/EducatorDashboard";
import DreamJobPathway from "./pages/DreamJobPathway";
import AIToolTracker from "./pages/AIToolTracker";
import CurriculumComposer from "./pages/CurriculumComposer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/student" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
            <Route path="/student/dream-job" element={<ProtectedRoute><DreamJobPathway /></ProtectedRoute>} />
            <Route path="/student/ai-tools" element={<ProtectedRoute><AIToolTracker variant="student" /></ProtectedRoute>} />
            <Route path="/educator" element={<ProtectedRoute><EducatorDashboard /></ProtectedRoute>} />
            <Route path="/educator/ai-tools" element={<ProtectedRoute><AIToolTracker variant="educator" /></ProtectedRoute>} />
            <Route path="/educator/curriculum" element={<ProtectedRoute><CurriculumComposer /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
