import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { installGlobalClickTracking } from '@/lib/analytics';
import { hasConsent } from '@/lib/consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = 'G-VZ1T4E6G5B';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    installGlobalClickTracking();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    if (!hasConsent('analytics')) return;
    const page_path = location.pathname + location.search;
    const debug = (() => {
      try { return localStorage.getItem('ga_debug_mode') === '1'; } catch { return false; }
    })();
    window.gtag('event', 'page_view', {
      send_to: GA_ID,
      page_path,
      page_location: window.location.href,
      page_title: document.title,
      ...(debug ? { debug_mode: true } : {}),
    });
  }, [location.pathname, location.search]);

  // Also re-fire a page_view when consent is granted later for the current page.
  useEffect(() => {
    const handler = () => {
      if (!hasConsent('analytics') || typeof window.gtag !== 'function') return;
      window.gtag('event', 'page_view', {
        send_to: GA_ID,
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    };
    window.addEventListener('consent:changed', handler);
    return () => window.removeEventListener('consent:changed', handler);
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;
