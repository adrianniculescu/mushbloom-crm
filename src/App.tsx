
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import HomePage from "./pages/HomePage";
import LLMboostPage from "./pages/LLMboostPage";
import LLMboostCaseStudy from "./pages/LLMboostCaseStudy";
import NewswirePage from "./pages/NewswirePage";
import CryptoBlockchainPage from "./pages/newswire/CryptoBlockchainPage";
import CybersecurityPage from "./pages/newswire/CybersecurityPage";
import FinanceFintechPage from "./pages/newswire/FinanceFintechPage";
import GamingPage from "./pages/newswire/GamingPage";
import IGamingPage from "./pages/newswire/iGamingPage";
import PortfolioWebsites from "./pages/PortfolioWebsites";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/websites" element={<PortfolioWebsites />} />
            <Route path="/llmboost" element={<LLMboostPage />} />
            <Route path="/llmboost/:slug" element={<LLMboostCaseStudy />} />
            <Route path="/newswire" element={<NewswirePage />} />
            <Route path="/newswire/crypto-blockchain" element={<CryptoBlockchainPage />} />
            <Route path="/newswire/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/newswire/finance-fintech" element={<FinanceFintechPage />} />
            <Route path="/newswire/gaming" element={<GamingPage />} />
            <Route path="/newswire/igaming" element={<IGamingPage />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
