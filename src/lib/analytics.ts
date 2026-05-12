// GA4 analytics helpers.
// Debug mode: append ?ga_debug=1 to any URL once to opt in (persists in localStorage).
// Append ?ga_debug=0 to opt out. When enabled, every event is sent with debug_mode:true
// so it shows up in GA4 DebugView.

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = 'G-VZ1T4E6G5B';
const DEBUG_KEY = 'ga_debug_mode';

// Initialize debug flag from URL once on load.
if (typeof window !== 'undefined') {
  try {
    const params = new URLSearchParams(window.location.search);
    const flag = params.get('ga_debug');
    if (flag === '1') localStorage.setItem(DEBUG_KEY, '1');
    if (flag === '0') localStorage.removeItem(DEBUG_KEY);
  } catch {
    /* ignore */
  }
}

const isDebug = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(DEBUG_KEY) === '1';
  } catch {
    return false;
  }
};

const baseParams = () => ({
  page_location: typeof window !== 'undefined' ? window.location.href : undefined,
  page_title: typeof document !== 'undefined' ? document.title : undefined,
  ...(isDebug() ? { debug_mode: true } : {}),
});

export const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, { send_to: GA_ID, ...baseParams(), ...params });
};

export const trackGenerateLead = (formId = 'contact_form', extra: Record<string, unknown> = {}) => {
  trackEvent('generate_lead', { form_id: formId, ...extra });
};

export const trackBookCall = (linkText: string, linkUrl: string) => {
  trackEvent('book_call', { link_text: linkText, link_url: linkUrl });
};

export const trackCtaClick = (ctaName: string, ctaText: string, extra: Record<string, unknown> = {}) => {
  trackEvent('cta_click', { cta_name: ctaName, cta_text: ctaText, ...extra });
};

// Install a single delegated click listener that handles:
//  - any anchor pointing to tidycal.com → book_call
//  - any element (or ancestor) with [data-cta] → cta_click
export const installGlobalClickTracking = () => {
  if (typeof document === 'undefined') return;
  const handler = (e: MouseEvent) => {
    const target = e.target as Element | null;
    if (!target || !(target as any).closest) return;

    const ctaEl = (target as Element).closest('[data-cta]') as HTMLElement | null;
    if (ctaEl) {
      const ctaName = ctaEl.dataset.cta || 'unknown_cta';
      const ctaText = (ctaEl.innerText || ctaEl.textContent || '').trim().slice(0, 100);
      trackCtaClick(ctaName, ctaText);
    }

    const anchor = (target as Element).closest('a') as HTMLAnchorElement | null;
    if (anchor && anchor.href && /tidycal\.com/i.test(anchor.href)) {
      const linkText = (anchor.innerText || anchor.textContent || 'Book a call').trim().slice(0, 100);
      trackBookCall(linkText || 'Book a call', anchor.href);
    }
  };
  document.addEventListener('click', handler, { capture: true });
};
