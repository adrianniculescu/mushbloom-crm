import React from 'react';
import { Link } from 'react-router-dom';
import { useConsent } from '@/lib/consent';

const SiteFooter: React.FC = () => {
  const { openSettings } = useConsent();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm" aria-labelledby="site-footer-heading">
      <h2 id="site-footer-heading" className="sr-only">Site footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <p className="text-white font-semibold mb-2">Mushbloom</p>
          <p className="text-gray-400 max-w-md">
            AI automation, LLM SEO and creative engineering. The canonical website is{' '}
            <a href="https://mushbloom.uk" className="text-gray-300 hover:text-white underline underline-offset-2">mushbloom.uk</a>;
            mushbloom.co.uk redirects here.
          </p>
          <p className="text-gray-400 mt-3">
            <a href="mailto:office@mushbloom.co.uk" className="hover:text-white">office@mushbloom.co.uk</a>
            <span className="text-gray-600"> · </span>
            <a href="tel:+40725388605" className="hover:text-white">+40 725 388 605</a>
          </p>
        </div>
        <nav aria-label="Company">
          <p className="text-white font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/portfolio/websites" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/wiki" className="hover:text-white">Wiki</Link></li>
            <li><a href="/#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
        <nav aria-label="Legal and compliance">
          <p className="text-white font-semibold mb-3">Legal &amp; compliance</p>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/legal/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/legal/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
            <li><Link to="/legal/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link to="/legal/accessibility" className="hover:text-white">Accessibility Statement</Link></li>
            <li>
              <button
                type="button"
                onClick={openSettings}
                className="hover:text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
              >
                Privacy settings
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© 2024–{year} Mushbloom. All rights reserved.</p>
          <p>Made with care · WCAG 2.2 AA in progress</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
