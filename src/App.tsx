
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
import PortfolioCustomGPTs from "./pages/PortfolioCustomGPTs";
import WikiArticlePage from "./pages/WikiArticlePage";
import WikiIndexPage from "./pages/WikiIndexPage";
import SaasAiSearchGuide from "./pages/guides/SaasAiSearchGuide";
import CryptoWeb3AiSearchGuide from "./pages/guides/CryptoWeb3AiSearchGuide";
import Web3CompanyBrainGuide from "./pages/guides/Web3CompanyBrainGuide";
import SaasCompanyBrainGuide from "./pages/guides/SaasCompanyBrainGuide";
import VideoAgencyPage from "./pages/VideoAgencyPage";
import AiAutomationAgencyPage from "./pages/AiAutomationAgencyPage";
import LovableDevelopmentPage from "./pages/LovableDevelopmentPage";
import WordPressAiPlatformPage from "./pages/platforms/WordPressAiPlatformPage";
import ReelFactoryPage from "./pages/projects/ReelFactoryPage";
import NotFound from "./pages/NotFound";
import CmsLogin from "./pages/CmsLogin";
import CmsDashboard from "./pages/CmsDashboard";
import MockupsIndex from "./pages/mockups/MockupsIndex";
import AtsMockup from "./pages/mockups/AtsMockup";
import Unsubscribe from "./pages/Unsubscribe";
import Analytics from "./components/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Analytics />
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/websites" element={<PortfolioWebsites />} />
            <Route path="/portfolio/custom-gpts" element={<PortfolioCustomGPTs />} />
            <Route path="/llmboost" element={<LLMboostPage />} />
            <Route path="/llmboost/:slug" element={<LLMboostCaseStudy />} />
            <Route path="/newswire" element={<NewswirePage />} />
            <Route path="/newswire/crypto-blockchain" element={<CryptoBlockchainPage />} />
            <Route path="/newswire/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/newswire/finance-fintech" element={<FinanceFintechPage />} />
            <Route path="/newswire/gaming" element={<GamingPage />} />
            <Route path="/newswire/igaming" element={<IGamingPage />} />
            <Route path="/video-agency" element={<VideoAgencyPage />} />
            <Route path="/agency" element={<AiAutomationAgencyPage />} />
            <Route path="/services/lovable-development" element={<LovableDevelopmentPage />} />
            <Route path="/platforms/wordpress-and-ai" element={<WordPressAiPlatformPage />} />
            <Route path="/projects/reel-factory" element={<ReelFactoryPage />} />
            <Route path="/projects" element={<ReelFactoryPage />} />
            <Route path="/wiki" element={<WikiIndexPage />} />
            <Route path="/wiki/:slug" element={<WikiArticlePage />} />
            <Route path="/guides/saas-ai-search-visibility" element={<SaasAiSearchGuide />} />
            <Route path="/guides/crypto-web3-ai-search-visibility" element={<CryptoWeb3AiSearchGuide />} />
            <Route path="/guides/web3-company-brain" element={<Web3CompanyBrainGuide />} />
            <Route path="/guides/saas-company-brain" element={<SaasCompanyBrainGuide />} />
            <Route path="/cms/login" element={<CmsLogin />} />
            <Route path="/cms" element={<CmsDashboard />} />
            <Route path="/mockups" element={<MockupsIndex />} />
            <Route path="/mockups/ats" element={<AtsMockup />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
