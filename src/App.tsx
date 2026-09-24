
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import WebsiteComplianceTodayGuide from "./pages/guides/WebsiteComplianceTodayGuide";
import NonTechnicalFounderMvpPlaybook from "./pages/guides/NonTechnicalFounderMvpPlaybook";
import LinkedInSalesMachineGuide from "./pages/guides/LinkedInSalesMachineGuide";
import AiWorkflowsGuide from "./pages/guides/AiWorkflowsGuide";
import MushbloomLegiitPartnership from "./pages/guides/MushbloomLegiitPartnership";
import LeadGenerationDataPage from "./pages/LeadGenerationDataPage";
import AcceptableUsePolicy from "./pages/legal/AcceptableUsePolicy";
import DataProcessingAddendum from "./pages/legal/DataProcessingAddendum";
import VideoAgencyPage from "./pages/VideoAgencyPage";
import AiAutomationAgencyPage from "./pages/AiAutomationAgencyPage";
import LovableDevelopmentPage from "./pages/LovableDevelopmentPage";
import LinkedInSalesMachinePage from "./pages/services/LinkedInSalesMachinePage";
import AiWorkflowsPage from "./pages/services/AiWorkflowsPage";
import PartnersPage from "./pages/PartnersPage";
import WordPressAiPlatformPage from "./pages/platforms/WordPressAiPlatformPage";
import ReelFactoryPage from "./pages/projects/ReelFactoryPage";
import NexusTmrwPage from "./pages/projects/NexusTmrwPage";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import Terms from "./pages/legal/Terms";
import AccessibilityStatement from "./pages/legal/AccessibilityStatement";
import NotFound from "./pages/NotFound";
import CmsLogin from "./pages/CmsLogin";
import CmsDashboard from "./pages/CmsDashboard";
import MockupsIndex from "./pages/mockups/MockupsIndex";
import AtsMockup from "./pages/mockups/AtsMockup";
import Unsubscribe from "./pages/Unsubscribe";
import Analytics from "./components/Analytics";
import { ConsentProvider } from "@/lib/consent";
import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";

const queryClient = new QueryClient();

const ChromeFooter = () => {
  const { pathname } = useLocation();
  // Hide the sitewide footer on admin/CMS surfaces.
  if (pathname.startsWith('/cms')) return null;
  return <SiteFooter />;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ConsentProvider>
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
              <Route path="/services/linkedin-sales-machine" element={<LinkedInSalesMachinePage />} />
              <Route path="/services/ai-workflows" element={<AiWorkflowsPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/ai-workflows" element={<Navigate to="/services/ai-workflows" replace />} />
              <Route path="/linkedin-sales-machine" element={<Navigate to="/services/linkedin-sales-machine" replace />} />
              <Route path="/platforms/wordpress-and-ai" element={<WordPressAiPlatformPage />} />
              <Route path="/projects/reel-factory" element={<ReelFactoryPage />} />
              <Route path="/projects/nexus-tmrw-venture-network" element={<NexusTmrwPage />} />
              <Route path="/projects" element={<Navigate to="/portfolio/websites" replace />} />
              <Route path="/wiki" element={<WikiIndexPage />} />
              <Route path="/wiki/mushbloom-legiit-partnership" element={<MushbloomLegiitPartnership />} />
              <Route path="/wiki/:slug" element={<WikiArticlePage />} />
              <Route path="/guides/saas-ai-search-visibility" element={<SaasAiSearchGuide />} />
              <Route path="/guides/crypto-web3-ai-search-visibility" element={<CryptoWeb3AiSearchGuide />} />
              <Route path="/guides/web3-company-brain" element={<Web3CompanyBrainGuide />} />
              <Route path="/guides/saas-company-brain" element={<SaasCompanyBrainGuide />} />
              <Route path="/guides/website-compliance-today" element={<WebsiteComplianceTodayGuide />} />
              <Route path="/guides/website-compliance-2026" element={<Navigate to="/guides/website-compliance-today" replace />} />
              <Route path="/guides/linkedin-sales-machine" element={<LinkedInSalesMachineGuide />} />
              <Route path="/guides/ai-workflows" element={<AiWorkflowsGuide />} />
              <Route path="/guides/non-technical-founder-mvp-playbook" element={<NonTechnicalFounderMvpPlaybook />} />
              <Route path="/non-technical-founder-mvp-playbook" element={<Navigate to="/guides/non-technical-founder-mvp-playbook" replace />} />
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/accessibility" element={<AccessibilityStatement />} />
              <Route path="/legal/acceptable-use" element={<AcceptableUsePolicy />} />
              <Route path="/legal/data-processing" element={<DataProcessingAddendum />} />
              <Route path="/lead-generation-data" element={<LeadGenerationDataPage />} />
              <Route path="/lead-generation" element={<Navigate to="/lead-generation-data" replace />} />
              <Route path="/cms/login" element={<CmsLogin />} />
              <Route path="/cms" element={<CmsDashboard />} />
              <Route path="/mockups" element={<MockupsIndex />} />
              <Route path="/mockups/ats" element={<AtsMockup />} />
              <Route path="/unsubscribe" element={<Unsubscribe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChromeFooter />
            <CookieConsent />
          </Router>
        </ConsentProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
