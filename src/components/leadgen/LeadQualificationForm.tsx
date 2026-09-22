import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const INTENDED_CHANNELS = [
  'Email marketing',
  'SMS',
  'Calling',
  'Advertising audiences',
  'Internal research',
  'Other',
];

const FREQUENCIES = ['One-time delivery', 'Daily', 'Weekly', 'Monthly'];
const CONSENT_ANSWERS = ['Yes', 'No', 'Not sure'];

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  website: '',
  industry: '',
  channel: '',
  targetMarket: '',
  geography: '',
  vertical: '',
  volume: '',
  frequency: '',
  fields: '',
  recurring: '',
  consentFramework: '',
  description: '',
};

const labelClass = 'block text-sm font-medium text-gray-200 mb-2';
const inputClass =
  'w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

const LeadQualificationForm: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(initialState);
  const [consent, setConsent] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof typeof initialState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const buildMessage = () =>
    [
      `Company: ${form.company}`,
      `Country of operation: ${form.country}`,
      `Website: ${form.website || 'Not provided'}`,
      `Industry: ${form.industry}`,
      `Intended use / channel: ${form.channel}`,
      `Target market: ${form.targetMarket}`,
      `Target geography: ${form.geography}`,
      `Desired vertical or data type: ${form.vertical}`,
      `Estimated monthly volume: ${form.volume}`,
      `Delivery frequency: ${form.frequency}`,
      `Required data fields: ${form.fields}`,
      `One-time or recurring: ${form.recurring}`,
      `Has a compliant consent / opt-in framework: ${form.consentFramework}`,
      '',
      'Campaign description:',
      form.description,
      '',
      'Confirmed lawful, compliant use of any data supplied: Yes',
    ].join('\n');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !acknowledged) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        service_interest: 'Lead Generation & Data',
        budget: null,
        message: buildMessage(),
      });
      if (error) throw error;

      supabase.functions
        .invoke('notify-new-lead', {
          body: { name: form.name, email: form.email, service_interest: 'Lead Generation & Data' },
        })
        .catch(() => undefined);

      setSubmitted(true);
      setForm(initialState);
      setConsent(false);
      setAcknowledged(false);
    } catch {
      toast({
        title: 'We could not send your request',
        description: 'Please try again, or email office@mushbloom.co.uk directly.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk']">
          Thank you — your request has been received
        </h3>
        <p className="text-gray-300 max-w-xl mx-auto">
          Our team will review your requirements and respond with available options, indicative
          pricing and compliance requirements. If we cannot support a request, we will tell you
          clearly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate={false}>
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-white mb-4 font-['Space_Grotesk']">
          About you
        </legend>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass} htmlFor="lg-name">Full name *</label>
            <input id="lg-name" required className={inputClass} value={form.name} onChange={update('name')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-company">Company name *</label>
            <input id="lg-company" required className={inputClass} value={form.company} onChange={update('company')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-email">Work email *</label>
            <input id="lg-email" type="email" required className={inputClass} value={form.email} onChange={update('email')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-phone">Phone (optional)</label>
            <input id="lg-phone" type="tel" className={inputClass} value={form.phone} onChange={update('phone')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-country">Country of operation *</label>
            <input id="lg-country" required className={inputClass} value={form.country} onChange={update('country')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-website">Website (optional)</label>
            <input id="lg-website" className={inputClass} value={form.website} onChange={update('website')} />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-white mb-4 font-['Space_Grotesk']">
          Your requirement
        </legend>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass} htmlFor="lg-industry">Industry *</label>
            <input id="lg-industry" required className={inputClass} value={form.industry} onChange={update('industry')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-channel">Intended use / channel *</label>
            <select id="lg-channel" required className={inputClass} value={form.channel} onChange={update('channel')}>
              <option value="">Select a channel</option>
              {INTENDED_CHANNELS.map((c) => (
                <option key={c} value={c} className="bg-gray-900">{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-market">Target market (B2B or B2C) *</label>
            <input id="lg-market" required className={inputClass} value={form.targetMarket} onChange={update('targetMarket')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-geo">Target geography *</label>
            <input id="lg-geo" required className={inputClass} value={form.geography} onChange={update('geography')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-vertical">Desired vertical or data type *</label>
            <input id="lg-vertical" required className={inputClass} value={form.vertical} onChange={update('vertical')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-volume">Estimated monthly volume *</label>
            <input id="lg-volume" required className={inputClass} value={form.volume} onChange={update('volume')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-frequency">Delivery frequency *</label>
            <select id="lg-frequency" required className={inputClass} value={form.frequency} onChange={update('frequency')}>
              <option value="">Select a frequency</option>
              {FREQUENCIES.map((f) => (
                <option key={f} value={f} className="bg-gray-900">{f}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="lg-recurring">One-time or recurring *</label>
            <select id="lg-recurring" required className={inputClass} value={form.recurring} onChange={update('recurring')}>
              <option value="">Select an option</option>
              <option value="One-time" className="bg-gray-900">One-time</option>
              <option value="Recurring" className="bg-gray-900">Recurring</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="lg-fields">Required data fields *</label>
            <input
              id="lg-fields"
              required
              className={inputClass}
              placeholder="For example: name, email, phone, company, job title, location"
              value={form.fields}
              onChange={update('fields')}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="lg-consent-framework">
              Do you have a compliant consent / opt-in framework? *
            </label>
            <select
              id="lg-consent-framework"
              required
              className={inputClass}
              value={form.consentFramework}
              onChange={update('consentFramework')}
            >
              <option value="">Select an answer</option>
              {CONSENT_ANSWERS.map((a) => (
                <option key={a} value={a} className="bg-gray-900">{a}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="lg-description">
              Short description of your campaign *
            </label>
            <textarea
              id="lg-description"
              required
              rows={5}
              className={inputClass}
              value={form.description}
              onChange={update('description')}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-white mb-4 font-['Space_Grotesk']">
          Confirmations
        </legend>
        <label className="flex gap-3 items-start text-sm text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <span>
            I consent to Mushbloom contacting me about this enquiry and processing my details as
            described in the{' '}
            <a className="underline text-blue-400" href="/legal/privacy-policy">Privacy Policy</a>. *
          </span>
        </label>
        <label className="flex gap-3 items-start text-sm text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <span>
            I confirm that any data supplied will be used lawfully and in compliance with all
            applicable data protection, marketing and communications laws in my jurisdiction and in
            the jurisdictions I market to. *
          </span>
        </label>
      </fieldset>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        {submitting ? 'Sending…' : 'Request Your Lead Strategy'}
      </button>
    </form>
  );
};

export default LeadQualificationForm;
