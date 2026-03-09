
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { LogOut, Mail, MailOpen, Trash2, Loader2, Inbox } from 'lucide-react';
import { format } from 'date-fns';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  service_interest: string | null;
  budget: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

const CmsDashboard = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/cms/login');
        return;
      }
      fetchInquiries();
    };
    checkAuth();
  }, [navigate]);

  const fetchInquiries = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    setInquiries((data as Inquiry[]) || []);
    setLoading(false);
  };

  const toggleRead = async (inquiry: Inquiry) => {
    await supabase
      .from('contact_inquiries')
      .update({ is_read: !inquiry.is_read })
      .eq('id', inquiry.id);
    setInquiries((prev) =>
      prev.map((i) => (i.id === inquiry.id ? { ...i, is_read: !i.is_read } : i))
    );
    if (selected?.id === inquiry.id) setSelected({ ...inquiry, is_read: !inquiry.is_read });
  };

  const deleteInquiry = async (id: string) => {
    await supabase.from('contact_inquiries').delete().eq('id', id);
    setInquiries((prev) => prev.filter((i) => i.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/cms/login');
  };

  const unreadCount = inquiries.filter((i) => !i.is_read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-white font-['Space_Grotesk']">Mushbloom CMS</h1>
          {unreadCount > 0 && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount} new</span>
          )}
        </div>
        <button onClick={handleLogout} className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm">
          <LogOut className="h-4 w-4" /> Sign Out
        </button>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-65px)]">
        {/* List */}
        <div className="lg:w-96 border-r border-white/10 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          ) : inquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
              <Inbox className="h-12 w-12 mb-3" />
              <p>No inquiries yet</p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <button
                key={inq.id}
                onClick={() => {
                  setSelected(inq);
                  if (!inq.is_read) toggleRead(inq);
                }}
                className={`w-full text-left px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors ${
                  selected?.id === inq.id ? 'bg-white/10' : ''
                } ${!inq.is_read ? 'border-l-2 border-l-blue-500' : ''}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-semibold ${!inq.is_read ? 'text-white' : 'text-gray-400'}`}>
                    {inq.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {format(new Date(inq.created_at), 'MMM d')}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate">{inq.message}</p>
                {inq.service_interest && (
                  <span className="inline-block mt-1 text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                    {inq.service_interest}
                  </span>
                )}
              </button>
            ))
          )}
        </div>

        {/* Detail */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {selected ? (
            <div className="max-w-2xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">{selected.name}</h2>
                  <a href={`mailto:${selected.email}`} className="text-blue-400 hover:underline text-sm">{selected.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleRead(selected)}
                    className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    title={selected.is_read ? 'Mark as unread' : 'Mark as read'}
                  >
                    {selected.is_read ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => deleteInquiry(selected.id)}
                    className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mb-6 flex-wrap">
                {selected.service_interest && (
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                    {selected.service_interest}
                  </span>
                )}
                {selected.budget && (
                  <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                    {selected.budget}
                  </span>
                )}
                <span className="text-xs text-gray-500">
                  {format(new Date(selected.created_at), 'MMMM d, yyyy · h:mm a')}
                </span>
              </div>

              <div className="glass-effect rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{selected.message}</p>
              </div>

              <a
                href={`mailto:${selected.email}?subject=Re: Your inquiry to Mushbloom`}
                className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform"
              >
                <Mail className="h-4 w-4" /> Reply via Email
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <Inbox className="h-16 w-16 mb-4" />
              <p className="text-lg">Select an inquiry to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CmsDashboard;
