import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export const DevKitCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="devkit" className="py-24 bg-slate-50 dark:bg-depth border-t border-black/[0.08] dark:border-border-subtle relative overflow-hidden transition-colors duration-300">
      {/* Ambient Radial Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-signal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white dark:bg-surface border border-black/[0.08] dark:border-border-subtle text-sync-teal font-mono text-xs uppercase tracking-wider mb-4 shadow-sm">
          <Terminal className="w-3.5 h-3.5" />
          Developer &amp; Esports Access
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#0e1b33] dark:text-content-primary mb-4 tracking-tight transition-colors duration-300">
          Integrate Dhizar Into Your Engine.
        </h2>
        <p className="font-sans text-[#475569] dark:text-content-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
          Native C++ SDKs and plugins for Unreal Engine 5, Unity, and custom game loops. Receive hardware prototypes with pre-calibrated Oz spring brackets.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 p-4 px-6 rounded-xl bg-white dark:bg-surface border border-sync-teal/40 text-sync-teal font-mono text-sm shadow-xl">
            <CheckCircle2 className="w-5 h-5" />
            <span>Dev Kit telemetry registration received. Our bio-hardware team will contact you.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@studio.com"
              className="w-full sm:w-auto flex-1 px-4 py-3.5 rounded-lg bg-white dark:bg-surface border border-black/[0.12] dark:border-border-strong text-[#0e1b33] dark:text-content-primary font-mono text-sm placeholder:text-[#94A3B8] dark:placeholder:text-content-muted focus:outline-none focus:border-signal focus:ring-1 focus:ring-signal shadow-sm dark:shadow-none transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#0e1b33] text-white hover:bg-black dark:bg-signal dark:text-void dark:hover:bg-signal-hover dark:hover:shadow-glow-signal font-sans font-semibold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Apply for SDK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#94a3b8] dark:text-content-muted font-medium">
          <span>UE5 PLUGIN READY</span>
          <span>·</span>
          <span>UNITY PACKAGE (URP/HDRP)</span>
          <span>·</span>
          <span>RAW C++ HID DRIVER</span>
        </div>
      </div>
    </section>
  );
};

export default DevKitCTA;
