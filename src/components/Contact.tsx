
import React, { useState } from 'react';
import { Mail, MessageSquare, Zap, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const serviceOptions = [
  'AI Automation',
  'LLMboost SEO',
  'AI Workforce',
  'Web Development',
  'Consulting',
  'Other',
];

const budgetOptions = [
  'Under £5,000',
  '£5,000 – £15,000',
  '£15,000 – £50,000',
  '£50,000+',
  'Not sure yet',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_interest: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    const { error } = await supabase.from('contact_inquiries').insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      service_interest: formData.service_interest || null,
      budget: formData.budget || null,
      message: formData.message.trim(),
    });

    setIsSubmitting(false);

    if (error) {
      toast({ title: 'Something went wrong', description: 'Please try again or email us directly.', variant: 'destructive' });
    } else {
      setSubmitted(true);
      toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." });
    }
  };

  return (
    <section id="contact" className="py-20 relative" itemScope itemType="https://schema.org/ContactPage">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Automate Everything
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's architect your AI workforce and launch your business into the autonomous future.
            Pay for performance: <strong>37% operational cost reduction guaranteed</strong>.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-effect rounded-2xl p-6 border border-white/10" itemScope itemType="https://schema.org/ContactPoint">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Direct Contact</h3>
              <a href="mailto:office@mushbloom.co.uk" className="text-gray-300 hover:text-blue-400 transition-colors block" itemProp="email">office@mushbloom.co.uk</a>
              <a href="tel:+40725388605" className="text-gray-300 hover:text-blue-400 transition-colors block mt-1" itemProp="telephone">+40 725 388 605</a>
              <a href="https://wa.me/40725388605" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors block mt-1">
                <span className="inline-flex items-center gap-1">💬 WhatsApp</span>
              </a>
            </div>

            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">AI Consultation</h3>
              <p className="text-gray-300">Free automation assessment</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-400 to-green-400 mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Rapid Deploy</h3>
              <p className="text-gray-300"><strong>3 to 90 days</strong> AI implementation</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass-effect rounded-2xl p-10 border border-green-500/30 text-center">
                <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-6">
                  <Send className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk']">Message Received!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours with a personalised AI strategy.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 border border-white/10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                    <input
                      id="name" name="name" required maxLength={100}
                      value={formData.name} onChange={handleChange}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                    <input
                      id="email" name="email" type="email" required maxLength={255}
                      value={formData.email} onChange={handleChange}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service_interest" className="block text-sm font-medium text-gray-300 mb-1">Service Interest</label>
                    <select
                      id="service_interest" name="service_interest"
                      value={formData.service_interest} onChange={handleChange}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-gray-900">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">Budget</label>
                    <select
                      id="budget" name="budget"
                      value={formData.budget} onChange={handleChange}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select budget range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-gray-900">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
                  <textarea
                    id="message" name="message" required maxLength={2000} rows={4}
                    value={formData.message} onChange={handleChange}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-[1.02] transition-transform duration-200 inline-flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="h-5 w-5" /> Deploy Your AI Workforce</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Performance guarantee */}
        <div className="glass-effect rounded-xl p-6 mt-8 max-w-2xl mx-auto text-center" itemScope itemType="https://schema.org/Offer">
          <div className="text-sm text-gray-400 mb-2">PERFORMANCE GUARANTEE</div>
          <div className="text-lg text-white" itemProp="description">
            <strong>37% operational cost reduction</strong> in first 90 days, or we work for free until you get results.
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/10 text-center" itemScope itemType="https://schema.org/Organization">
        <p className="text-gray-400">
          © 2024–2026 <span itemProp="name">Mushbloom</span>. Architecting the autonomous business revolution.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
