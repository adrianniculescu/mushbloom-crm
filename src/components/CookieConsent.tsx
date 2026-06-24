import React, { useState } from 'react';
import { Shield, X } from 'lucide-react';
import { useConsent, ConsentState } from '@/lib/consent';

const categoryCopy = [
  {
    key: 'necessary' as const,
    title: 'Strictly necessary',
    description: 'Required for the site to function: security, load balancing, consent storage. Always active.',
    always: true,
  },
  {
    key: 'analytics' as const,
    title: 'Analytics',
    description: 'Aggregated, privacy-safe traffic analytics (Google Analytics 4) so we can improve the site.',
  },
  {
    key: 'marketing' as const,
    title: 'Marketing',
    description: 'Used to measure the effectiveness of campaigns and to show relevant content on third-party platforms.',
  },
  {
    key: 'preferences' as const,
    title: 'Preferences',
    description: 'Remembers UI choices such as language or layout so the site feels familiar on return visits.',
  },
];

const CookieConsent: React.FC = () => {
  const { state, decided, open, acceptAll, rejectAll, save, closeSettings, openSettings } = useConsent();
  const [draft, setDraft] = useState<ConsentState>(state);

  React.useEffect(() => { setDraft(state); }, [state, open]);

  // Banner: show only if no decision yet.
  const showBanner = !decided && !open;

  if (!showBanner && !open) return null;

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20 border border-white/10">
                <Shield className="h-5 w-5 text-blue-300" aria-hidden="true" />
              </div>
              <div className="flex-1 text-sm text-gray-300">
                <h2 className="text-base font-semibold text-white mb-1">We respect your privacy</h2>
                <p>
                  We use strictly necessary cookies to run mushbloom.uk. With your permission we also use analytics,
                  marketing and preference cookies. You can change or withdraw consent at any time via
                  <button type="button" onClick={openSettings} className="ml-1 underline underline-offset-2 hover:text-white">
                    Privacy settings
                  </button>{' '}
                  in the footer. See our{' '}
                  <a href="/legal/privacy-policy" className="underline underline-offset-2 hover:text-white">Privacy Policy</a>{' '}
                  and{' '}
                  <a href="/legal/cookie-policy" className="underline underline-offset-2 hover:text-white">Cookie Policy</a>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center shrink-0">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="px-4 py-2.5 rounded-lg border border-white/15 text-sm font-medium text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Reject all
                </button>
                <button
                  type="button"
                  onClick={openSettings}
                  className="px-4 py-2.5 rounded-lg border border-white/15 text-sm font-medium text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Manage preferences
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-sm font-semibold text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="consent-title"
          className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeSettings(); }}
        >
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-gray-950 shadow-2xl">
            <div className="flex items-start justify-between p-5 sm:p-6 border-b border-white/10">
              <div>
                <h2 id="consent-title" className="text-lg font-semibold text-white">Privacy preferences</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Choose which categories of cookies you allow. You can change this any time.
                </p>
              </div>
              <button
                type="button"
                onClick={closeSettings}
                aria-label="Close privacy preferences"
                className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {categoryCopy.map((cat) => {
                const checked = cat.always ? true : !!draft[cat.key];
                return (
                  <div key={cat.key} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{cat.description}</p>
                      </div>
                      <label className="inline-flex items-center cursor-pointer select-none">
                        <span className="sr-only">Toggle {cat.title}</span>
                        <input
                          type="checkbox"
                          checked={checked}
                          disabled={!!cat.always}
                          onChange={(e) => setDraft((d) => ({ ...d, [cat.key]: e.target.checked }))}
                          className="peer sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`relative h-6 w-11 rounded-full transition-colors ${
                            checked ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-white/15'
                          } ${cat.always ? 'opacity-60' : ''}`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                              checked ? 'translate-x-5' : ''
                            }`}
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                );
              })}
              <p className="text-xs text-gray-500">
                Privacy questions: <a href="mailto:office@mushbloom.co.uk" className="underline">office@mushbloom.co.uk</a>.
                Read our <a href="/legal/cookie-policy" className="underline">Cookie Policy</a>.
              </p>
            </div>

            <div className="p-5 sm:p-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2.5 rounded-lg border border-white/15 text-sm font-medium text-white hover:bg-white/5"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={() => save(draft)}
                className="px-4 py-2.5 rounded-lg border border-white/15 text-sm font-medium text-white hover:bg-white/5"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-sm font-semibold text-white hover:opacity-95"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
