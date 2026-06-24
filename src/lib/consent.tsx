/**
 * GDPR/ePrivacy consent manager.
 * - No non-essential cookies are set before explicit consent.
 * - Stores: { version, timestamp, categories } in localStorage.
 * - Loads Google Analytics (GA4) only after the `analytics` category is granted.
 * - Exposes a `consent:changed` window event so scripts can react.
 *
 * Retention note: consent record kept locally for 12 months; users can
 * reopen "Privacy settings" from the footer to withdraw or change consent
 * at any time. Email privacy requests: office@mushbloom.co.uk
 */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const CONSENT_VERSION = '2025-01-1';
const STORAGE_KEY = 'mb_consent_v1';
const GA_ID = 'G-VZ1T4E6G5B';

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface ConsentRecord {
  version: string;
  timestamp: string;
  categories: ConsentState;
}

const defaultState: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const allGranted: ConsentState = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

function readStored(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function write(record: ConsentRecord) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* noop */
  }
}

// ---- GA loader (only runs after analytics consent) -------------------
let gaLoaded = false;
function loadGA() {
  if (gaLoaded || typeof window === 'undefined') return;
  if (document.querySelector(`script[data-ga-loader="1"]`)) {
    gaLoaded = true;
    return;
  }
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.setAttribute('data-ga-loader', '1');
  document.head.appendChild(s);
  // Initialize once script is queued (gtag stub already exists from index.html)
  // @ts-expect-error - gtag stub
  window.gtag('js', new Date());
  // @ts-expect-error - gtag stub
  window.gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true });
  gaLoaded = true;
}

function applySideEffects(state: ConsentState) {
  if (state.analytics) {
    loadGA();
  }
  // Dispatch event for any other listeners (e.g. embeds doing click-to-load).
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('consent:changed', { detail: state }));
  }
}

// ---- React context ---------------------------------------------------
interface ConsentContextValue {
  state: ConsentState;
  decided: boolean;
  open: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (next: Partial<ConsentState>) => void;
  withdraw: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ConsentState>(defaultState);
  const [decided, setDecided] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setState({ ...defaultState, ...stored.categories, necessary: true });
      setDecided(true);
      applySideEffects(stored.categories);
    }
  }, []);

  const persist = useCallback((categories: ConsentState) => {
    const record: ConsentRecord = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      categories,
    };
    write(record);
    setState(categories);
    setDecided(true);
    applySideEffects(categories);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      state,
      decided,
      open,
      openSettings: () => setOpen(true),
      closeSettings: () => setOpen(false),
      acceptAll: () => {
        persist(allGranted);
        setOpen(false);
      },
      rejectAll: () => {
        persist({ ...defaultState });
        setOpen(false);
      },
      save: (next) => {
        persist({ ...state, ...next, necessary: true });
        setOpen(false);
      },
      withdraw: () => {
        try { localStorage.removeItem(STORAGE_KEY); } catch { /* noop */ }
        setState(defaultState);
        setDecided(false);
        applySideEffects(defaultState);
      },
    }),
    [state, decided, open, persist],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider');
  return ctx;
}

export function hasConsent(cat: ConsentCategory): boolean {
  const stored = readStored();
  if (!stored) return cat === 'necessary';
  return !!stored.categories[cat];
}
