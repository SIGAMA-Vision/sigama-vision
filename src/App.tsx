import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Onboarding from "./components/Onboarding";
import Layout from "./components/Layout";
import Monitoring from "./pages/Monitoring";
import Analytics from "./pages/Analytics";
import Anomalies from "./pages/Anomalies";
import Vaqueiro from "./pages/Vaqueiro";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="sigama-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Onboarding />
          <Layout>
            <Routes>
              <Route path="/" element={<Monitoring />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/anomalies" element={<Anomalies />} />
              <Route path="/vaqueiro" element={<Vaqueiro />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
