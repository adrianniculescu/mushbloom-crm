import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { installGlobalClickTracking } from '@/lib/analytics';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = 'G-VZ1T4E6G5B';

const Analytics = () => {
  const location = useLocation();

  // Install delegated click tracking once.
  useEffect(() => {
    installGlobalClickTracking();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
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

  return null;
};

export default Analytics;
