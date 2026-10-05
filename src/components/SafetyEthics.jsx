import React from 'react';
import { AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────
 * Safety & Ethics — Non-Negotiable Safety Protocol
 * Brand tokens: #162443 canvas, amber warning accents preserved.
 * ─────────────────────────────────────────────────────────────────── */

export const SafetyEthics = () => {
  return (
    <section
      id="safety"
      className="py-20 relative transition-colors duration-300"
      style={{ backgroundColor: '#162443' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Bordered Warning Amber Card */}
        <div className="rounded-2xl p-8 sm:p-10 border-2 border-[#780606]/50 bg-[#780606]/[0.08] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#780606]/20 border border-[#780606] flex items-center justify-center shrink-0 text-[#a7e5d9]">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#a7e5d9] font-bold">
                  NON-NEGOTIABLE SAFETY PROTOCOL
                </span>
              </div>

              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#e8eef9]">
                Safety &amp; Ethics Statement
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal">
                Flickering visual stimuli can trigger seizures in people with photosensitive epilepsy. Every build and demonstration of this project — including any software-only visualization tool once it is shown to anyone outside the immediate development team — includes a mandatory safety disclosure before use, and keeps stimulus contrast and screen area within commonly cited safer bounds. This is treated as a hard requirement at every stage of the project, not an optional nicety.
              </p>

              <div className="pt-4 border-t border-[#780606]/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <ShieldCheck className="w-4 h-4 text-[#a7e5d9] shrink-0" />
                  <span>IEEE 1789-2015 Optical Flicker Adherence</span>
                </div>
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <Scale className="w-4 h-4 text-[#a7e5d9] shrink-0" />
                  <span>Mandatory Informed Consent Gate in all Demo Builds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyEthics;
