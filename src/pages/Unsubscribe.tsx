import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type State = 'loading' | 'valid' | 'already' | 'invalid' | 'success' | 'error';

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get('token') || '';
  const [state, setState] = useState<State>('loading');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) { setState('invalid'); return; }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
      headers: { apikey: SUPABASE_KEY },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data?.valid) setState('valid');
        else if (data?.reason === 'already_unsubscribed') setState('already');
        else setState('invalid');
      })
      .catch(() => setState('error'));
  }, [token]);

  const confirm = async () => {
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke('handle-email-unsubscribe', { body: { token } });
    setSubmitting(false);
    if (error) setState('error');
    else if (data?.success) setState('success');
    else if (data?.reason === 'already_unsubscribed') setState('already');
    else setState('error');
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full glass-effect rounded-2xl p-8 border border-white/10 text-center">
        <h1 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Email preferences</h1>
        {state === 'loading' && <p className="text-gray-300">Checking your link…</p>}
        {state === 'valid' && (
          <>
            <p className="text-gray-300 mb-6">Click below to unsubscribe from Mushbloom emails.</p>
            <button
              onClick={confirm}
              disabled={submitting}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-60"
            >
              {submitting ? 'Unsubscribing…' : 'Confirm Unsubscribe'}
            </button>
          </>
        )}
        {state === 'already' && <p className="text-gray-300">You're already unsubscribed.</p>}
        {state === 'success' && <p className="text-green-400">You've been unsubscribed. Sorry to see you go.</p>}
        {state === 'invalid' && <p className="text-red-400">This unsubscribe link is invalid or expired.</p>}
        {state === 'error' && <p className="text-red-400">Something went wrong. Please try again later.</p>}
      </div>
    </main>
  );
}
