import React, { useEffect } from "react";

export function TermsOfService({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-200 selection:bg-[#a71616] selection:text-white font-sans relative py-16 px-6 sm:px-12 lg:px-24">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 30%, #1D2D4C 0%, #152238 50%, #0B1320 85%, #070D18 100%)",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#3B7BA4]/15 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <button
          type="button"
          onClick={onBack || (() => window.history.back())}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-white transition-all text-sm font-medium backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Home
        </button>

        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-2">Dhizar Technology Legal</p>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-serif">Terms of Service</h1>
          <p className="mt-4 text-sm text-slate-400">Effective Date: October 2026 • Consumer Peripheral & Developer Kit Terms</p>
        </header>

        <article className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">1. Binding Agreement</h2>
            <p>
              By accessing the Dhizar website (dhizar.com), ordering developer kits, or installing Dhizar runtime bridges, you agree to these Terms of Service. If you do not agree, do not access or use the software or hardware.
            </p>
          </section>

          <section className="bg-red-500/[0.05] border border-red-500/20 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-red-300 mb-3">2. Non-Medical Device Disclaimer</h2>
            <p className="text-red-200/90 font-medium">
              CRITICAL NOTICE: The Dhizar Neural Controller is exclusively a consumer and developer input device engineered for gaming and interactive software navigation.
            </p>
            <p className="mt-2 text-slate-300">
              Dhizar hardware is <strong>NOT a medical device</strong> and is not intended to diagnose, treat, prevent, or monitor any neurological, cognitive, psychological, or medical condition. Do not utilize Dhizar systems in clinical, medical, or life-critical environments.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">3. Health & Physiological Safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Users with diagnosed photosensitive epilepsy, neurological conditions, or implanted electronic devices (such as cardiac pacemakers) must consult their medical provider prior to using visual stimuli or SSVEP triggers.</li>
              <li>Immediately remove the headset if you experience fatigue, dizziness, skin sensitivity, or discomfort.</li>
            </ul>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">4. Intellectual Property & Firmware Protection</h2>
            <p>
              All biological lattice designs, signal decoding algorithms, firmware binaries, hardware casing schematics, and emblems are the exclusive intellectual property of Dhizar Technology. Unauthorized decompilation, reverse-engineering, or firmware alteration is strictly prohibited.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">5. Developer Kit Evaluation Terms</h2>
            <p>
              Hardware developer kits ("Dev Kits") are provided on an evaluation basis for integration testing. Performance metrics and firmware protocols may evolve over regular firmware update cycles.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">6. Jurisdiction & Inquiries</h2>
            <p>
              These terms are governed by the laws of India, with primary jurisdiction situated in the courts of Jaipur, Rajasthan. For inquiries, contact <span className="text-cyan-400">legal@dhizar.com</span>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
