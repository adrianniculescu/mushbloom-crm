
import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Home, ArrowRight } from "lucide-react";

const REDIRECTS: Record<string, string> = {
  "/portfolio-websites": "/portfolio/websites",
};

const NotFound = () => {
  const location = useLocation();

  // Handle redirects for old URLs
  const redirect = REDIRECTS[location.pathname];
  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
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
