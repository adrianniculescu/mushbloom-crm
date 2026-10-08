
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Lock } from 'lucide-react';
import { ADMIN_EMAIL, isCurrentUserAdmin } from '@/lib/admin';

const CmsLogin = () => {
  const [params] = useSearchParams();
  const [mode, setMode] = useState<'signin' | 'setup' | 'reset'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(params.get('denied') ? 'This area is only available to the Mushbloom admin account.' : '');
  const [info, setInfo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(''); setInfo('');
    const cleanEmail = email.trim().toLowerCase();

    if (mode !== 'signin' && cleanEmail !== ADMIN_EMAIL) {
      setError('Only the Mushbloom admin email can be used here.');
      setLoading(false); return;
    }

    if (mode === 'setup') {
      const { error: err } = await supabase.auth.signUp({ email: cleanEmail, password, options: { emailRedirectTo: `${window.location.origin}/cms/login` } });
      setLoading(false);
      if (err) setError(err.message); else setInfo('Check your inbox to confirm the email, then sign in.');
      return;
    }
    if (mode === 'reset') {
      const { error: err } = await supabase.auth.resetPasswordForEmail(cleanEmail, { redirectTo: `${window.location.origin}/cms/login` });
      setLoading(false);
      if (err) setError(err.message); else setInfo('Password reset email sent.');
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
    if (authError) { setError(authError.message); setLoading(false); return; }
    if (!(await isCurrentUserAdmin())) {
      await supabase.auth.signOut();
      setError('This area is only available to the Mushbloom admin account.');
      setLoading(false); return;
    }
    navigate('/cms');
  };

  const field = 'w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <Helmet><title>Admin | Mushbloom</title><meta name="robots" content="noindex, nofollow" /></Helmet>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-full bg-blue-500/20 mb-4"><Lock className="h-8 w-8 text-blue-400" /></div>
          <h1 className="text-3xl font-bold text-white font-['Space_Grotesk']">{mode === 'setup' ? 'Set up admin account' : mode === 'reset' ? 'Reset password' : 'Admin Login'}</h1>
          <p className="text-gray-400 mt-2">Mushbloom workspace</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 border border-white/10 space-y-5">
          {error && <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">{error}</div>}
          {info && <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-green-400 text-sm">{info}</div>}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder={ADMIN_EMAIL} />
          </div>
          {mode !== 'reset' && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input id="password" type="password" required minLength={mode === 'setup' ? 10 : undefined} value={password} onChange={(e) => setPassword(e.target.value)} className={field} placeholder="••••••••" />
            </div>
          )}
          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-60 inline-flex items-center justify-center gap-2">
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            {mode === 'setup' ? 'Create admin account' : mode === 'reset' ? 'Send reset email' : 'Sign In'}
          </button>
          <div className="flex justify-between text-xs text-gray-400">
            {mode === 'signin'
              ? <><button type="button" onClick={() => setMode('setup')} className="hover:text-white">First time? Set up account</button><button type="button" onClick={() => setMode('reset')} className="hover:text-white">Forgot password</button></>
              : <button type="button" onClick={() => setMode('signin')} className="hover:text-white">Back to sign in</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CmsLogin;
