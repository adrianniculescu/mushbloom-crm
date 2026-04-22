import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, Activity, Heart, ShieldCheck, Brain, Wind, AlertCircle, Check } from 'lucide-react';
import heroDevice from '@/assets/mockups/ats-hero-device.jpg';
import patientHome from '@/assets/mockups/ats-patient-home.jpg';
import clinicianDashboard from '@/assets/mockups/ats-clinician-dashboard.jpg';

/**
 * Concept redesign for atlasensebiomed.com
 * Brief: clinical, professional, modern, groundbreaking but accessible.
 * Type: Manrope (200 light + 800 extrabold)
 * Palette: white-first, deep navy text, ATLAS teal #14B8AC accent, soft blush gradient
 */

const AtsMockup = () => {
  return (
    <div className="min-h-screen bg-white text-[#0A1628]" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <Helmet>
        <title>ATLASense Biomed — Concept | Mushbloom Mockup</title>
        <meta name="robots" content="noindex,nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Mockup ribbon */}
      <div className="bg-[#0A1628] text-white text-[11px] uppercase tracking-[0.2em] py-2 px-6 flex items-center justify-between font-light">
        <Link to="/mockups" className="hover:text-[#5EEAD4] transition-colors">← All mockups</Link>
        <span>Concept v1 · For ATLASense Biomed · Not live</span>
        <a href="https://atlasensebiomed.com" target="_blank" rel="noreferrer" className="hover:text-[#5EEAD4] transition-colors">Original site ↗</a>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold tracking-tight">ATLAS</span>
            <span className="text-xl font-extralight tracking-[0.25em] text-[#14B8AC]">SENSE</span>
          </a>
          <nav className="hidden lg:flex items-center gap-10 text-sm font-light text-neutral-600">
            <a href="#platform" className="hover:text-[#0A1628]">Platform</a>
            <a href="#clinical" className="hover:text-[#0A1628]">Clinical Applications</a>
            <a href="#technology" className="hover:text-[#0A1628]">Technology</a>
            <a href="#evidence" className="hover:text-[#0A1628]">Evidence</a>
            <a href="#about" className="hover:text-[#0A1628]">About</a>
          </nav>
          <a
            href="#contact"
            className="text-sm font-medium border border-[#0A1628] px-5 py-2.5 rounded-full hover:bg-[#0A1628] hover:text-white transition-colors"
          >
            Request a demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-16 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#14B8AC] font-medium mb-8">
              <span className="w-8 h-px bg-[#14B8AC]" />
              Meet REPHAEL
            </div>
            <h1 className="text-[44px] md:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight mb-8">
              The world's first <span className="font-extralight italic text-[#14B8AC]">predictive</span> wearable for hospital at home.
            </h1>
            <p className="text-lg text-neutral-600 font-light leading-relaxed max-w-xl mb-10">
              REPHAEL doesn't just monitor — it predicts, detects, and alerts on life-threatening conditions before they escalate, delivering ICU-level care wherever the patient is.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 bg-[#0A1628] text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#14B8AC] transition-colors">
                Request a clinical demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#platform" className="inline-flex items-center gap-2 text-sm font-medium text-[#0A1628] hover:text-[#14B8AC] transition-colors">
                See how it works
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <div className="text-3xl font-extrabold tracking-tight">25%</div>
                <div className="text-xs text-neutral-500 font-light mt-1 leading-snug">Reduction in overall mortality</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold tracking-tight">$176k</div>
                <div className="text-xs text-neutral-500 font-light mt-1 leading-snug">Annual savings per patient</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold tracking-tight">200+</div>
                <div className="text-xs text-neutral-500 font-light mt-1 leading-snug">Years of clinical expertise</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#FCE7F3] via-white to-[#CCFBF1] rounded-[3rem] blur-3xl opacity-70" aria-hidden />
            <img
              src={heroDevice}
              alt="REPHAEL predictive wearable medical device"
              className="relative rounded-3xl w-full"
              width={1600}
              height={1280}
            />
            <div className="absolute -bottom-6 -left-6 bg-white border border-neutral-100 shadow-[0_20px_60px_-20px_rgba(10,22,40,0.15)] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#CCFBF1] flex items-center justify-center">
                <Activity className="h-5 w-5 text-[#14B8AC]" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-light">Live signal · ICU-grade</div>
                <div className="text-sm font-semibold">Diaphragm EMG · 99.4% fidelity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div className="border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-wrap items-center justify-between gap-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-light">Recognized by</span>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-neutral-400 font-light text-sm">
              <span>Henry Ford Health</span>
              <span>Israeli Innovation Authority</span>
              <span>Prometheus</span>
              <span>FDA cleared pathway</span>
              <span>CE Mark</span>
              <span>US Patent 11076763</span>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM PROMISE */}
      <section id="platform" className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#14B8AC] font-medium mb-6">The platform</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
                One wearable. <br/>
                <span className="font-extralight italic">A new standard</span> of remote care.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                REPHAEL is an award-winning, non-invasive, end-to-end remote patient monitoring platform — combining patented multi-sensor hardware with proprietary AI to anticipate clinical deterioration hours before symptoms appear.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100 rounded-2xl overflow-hidden">
            {[
              { icon: Wind, title: 'Respiratory failure', detail: 'Earliest prediction · ARDS prevention' },
              { icon: Heart, title: 'Heart failure', detail: 'Continuous cardiac telemetry' },
              { icon: ShieldCheck, title: 'Sepsis', detail: 'Real-time screening anywhere' },
              { icon: AlertCircle, title: 'Falls', detail: 'Proactive risk alerting' },
            ].map((c) => (
              <div key={c.title} className="bg-white p-8 lg:p-10 group hover:bg-neutral-50/60 transition-colors">
                <c.icon className="h-7 w-7 text-[#14B8AC] mb-8 stroke-[1.25]" />
                <h3 className="text-lg font-extrabold mb-2 tracking-tight">{c.title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL APPLICATIONS - Editorial split */}
      <section id="clinical" className="bg-[#F7F9FB] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7">
              <img src={patientHome} alt="Patient resting at home with REPHAEL wearable" loading="lazy" className="rounded-3xl w-full" width={1600} height={1200} />
            </div>
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#14B8AC] font-medium mb-6">Hospital at home</p>
              <h3 className="text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight mb-6">
                Care that follows the patient — <span className="font-extralight italic">not the building.</span>
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                REPHAEL replaces dozens of bedside monitors with a single discreet wearable, enabling safe discharge, fewer readmissions, and a quieter recovery — all under continuous ICU-grade supervision.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Reduce hospital admissions and length of stay',
                  'Continuous, ambulatory ICU-grade telemetry',
                  'Quiet, comfortable, discreet for the patient',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-neutral-700 font-light">
                    <Check className="h-4 w-4 text-[#14B8AC] mt-1 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:order-1 order-2">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#14B8AC] font-medium mb-6">Clinician workflow</p>
              <h3 className="text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight mb-6">
                Actionable insight — <span className="font-extralight italic">not noise.</span>
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                Our predictive AI converts raw multi-sensor signal into the small set of decisions doctors actually need to make. No alert fatigue. No dashboards-for-dashboards' sake. Just earlier, better calls.
              </p>
              <a href="#technology" className="inline-flex items-center gap-2 text-sm font-medium text-[#0A1628] hover:text-[#14B8AC] border-b border-current pb-1">
                Explore the technology <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="lg:col-span-7 lg:order-2 order-1">
              <img src={clinicianDashboard} alt="Clinician reviewing real-time vitals on tablet" loading="lazy" className="rounded-3xl w-full" width={1600} height={1200} />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY — large editorial type */}
      <section id="technology" className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#14B8AC] font-medium mb-6">Behind the sensor</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight mb-10">
              Patented multi-sensor architecture, paired with predictive AI trained on the signals that <span className="font-extralight italic">actually matter.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mt-20">
            {[
              { n: '01', t: 'Sense', d: 'Diaphragm EMG, ECG, respiration, SpO₂, motion — fused continuously from a single wearable.' },
              { n: '02', t: 'Predict', d: 'Proprietary algorithms anticipate ARDS, sepsis and cardiac events hours in advance.' },
              { n: '03', t: 'Act', d: 'Clinician-grade alerts and structured insight delivered to any care setting in real time.' },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-xs text-neutral-400 font-light tracking-widest mb-6">{s.n}</div>
                <h3 className="text-2xl font-extrabold mb-4 tracking-tight">{s.t}</h3>
                <p className="text-neutral-600 font-light leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE / OUTCOMES */}
      <section id="evidence" className="bg-[#0A1628] text-white py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#0F2942]" aria-hidden />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#14B8AC] opacity-[0.08] blur-3xl rounded-full" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-20">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#5EEAD4] font-medium mb-6">Evidence</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
              Proven outcomes — <span className="font-extralight italic text-white/70">measured in lives and in cost.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-[#0A1628] p-10 lg:p-14">
              <Brain className="h-7 w-7 text-[#5EEAD4] mb-8 stroke-[1.25]" />
              <div className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">25<span className="text-2xl font-light align-top">%</span></div>
              <div className="text-sm text-white/60 font-light leading-relaxed">Reduction in overall mortality through early sepsis screening.</div>
            </div>
            <div className="bg-[#0A1628] p-10 lg:p-14">
              <Wind className="h-7 w-7 text-[#5EEAD4] mb-8 stroke-[1.25]" />
              <div className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">$176k</div>
              <div className="text-sm text-white/60 font-light leading-relaxed">Annual savings per patient from earliest prediction of respiratory failure.</div>
            </div>
            <div className="bg-[#0A1628] p-10 lg:p-14">
              <ShieldCheck className="h-7 w-7 text-[#5EEAD4] mb-8 stroke-[1.25]" />
              <div className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">ICU</div>
              <div className="text-sm text-white/60 font-light leading-relaxed">Grade telemetry, anywhere — replacing dozens of bedside monitors with one wearable.</div>
            </div>
          </div>

          <blockquote className="mt-24 max-w-4xl">
            <p className="text-2xl lg:text-3xl font-light leading-snug tracking-tight text-white/90">
              "Winner of Henry Ford Health System's Global Health Tech Challenge — for a patient monitoring system that uses predictive analytics."
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.25em] text-white/50 font-light">— Detroit, 2024</footer>
          </blockquote>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#14B8AC] font-medium mb-6">About ATLASense</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
              Built by clinicians. <br/><span className="font-extralight italic">Engineered for impact.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-6">
              ATLASense is led by a team of world-renowned Israeli healthcare and MedTech experts with extensive international experience. We exist to improve the quality of clinical decisions — for better care and a more efficient healthcare system worldwide.
            </p>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              Over 200 years of accumulated clinical expertise, distilled into a single wearable.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-gradient-to-br from-[#F0FDFA] via-white to-[#FDF2F8] py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#14B8AC] font-medium mb-6">Let's work together</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight mb-8">
            Take healthcare to the next level — <span className="font-extralight italic">together.</span>
          </h2>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto mb-10">
            Schedule a clinical demo with our team. We'll walk you through REPHAEL, the evidence base, and an integration plan tailored to your institution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:contact@atlasensebiomed.com" className="group inline-flex items-center gap-3 bg-[#0A1628] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#14B8AC] transition-colors">
              Schedule a meeting
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#0A1628] border border-[#0A1628] px-8 py-4 rounded-full hover:bg-[#0A1628] hover:text-white transition-colors">
              Download the clinical brief
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1628] text-white/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-lg font-extrabold tracking-tight text-white">ATLAS</span>
              <span className="text-lg font-extralight tracking-[0.25em] text-[#5EEAD4]">SENSE</span>
            </div>
            <p className="text-sm font-light leading-relaxed">Revolutionizing remote health surveillance — your partner in saving lives.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white font-medium mb-5">Platform</div>
            <ul className="space-y-3 text-sm font-light">
              <li>REPHAEL</li><li>Clinical applications</li><li>Technology</li><li>Evidence</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white font-medium mb-5">Company</div>
            <ul className="space-y-3 text-sm font-light">
              <li>About</li><li>News</li><li>Careers</li><li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white font-medium mb-5">Legal</div>
            <ul className="space-y-3 text-sm font-light">
              <li>Regulatory</li><li>Privacy</li><li>US Patent 11076763</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 text-xs font-light flex flex-wrap justify-between gap-2">
            <span>© ATLASense Biomed</span>
            <span>Concept design by Mushbloom</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AtsMockup;
