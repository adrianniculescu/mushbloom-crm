import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Home, ArrowRight } from "lucide-react";

// 301-style client redirects for legacy WordPress URLs that Google still
// has in its index. Mapping each one to the closest current page kills the
// Soft 404 / duplicate-canonical findings in Search Console.
const REDIRECTS: Record<string, string> = {
  "/portfolio-websites": "/portfolio/websites",
  // Legacy WP marketing pages → consolidate to home / relevant service
  "/mushbloom-london-digital-marketing-agency": "/",
  "/mushbloom-london-digital-marketing-agency/": "/",
  "/how-can-we-help/social-media-marketing": "/agency",
  "/how-can-we-help/social-media-marketing/": "/agency",
  "/how-can-we-help/web-design": "/services/lovable-development",
  "/how-can-we-help/web-design/": "/services/lovable-development",
  "/how-can-we-help/marketing-technology-hub": "/agency",
  "/how-can-we-help/marketing-technology-hub/": "/agency",
  "/how-can-we-help": "/agency",
  "/how-can-we-help/": "/agency",
  "/get-in-touch": "/#contact",
  "/get-in-touch/": "/#contact",
  "/team": "/#about",
  "/team/": "/#about",
};

const NotFound = () => {
  const location = useLocation();
  const redirect = REDIRECTS[location.pathname];

  useEffect(() => {
    if (!redirect) {
      console.error("404 Error:", location.pathname);
    }
  }, [location.pathname, redirect]);

  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>404 — Page Not Found | Mushbloom</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        <link rel="canonical" href="https://mushbloom.uk/" />
      </Helmet>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-8xl font-bold text-white mb-4 font-['Space_Grotesk']">404</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          This page doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <Home className="h-5 w-5" /> Back to Home
          </Link>
          <Link
            to="/llmboost"
            className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
          >
            Explore LLMboost <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
