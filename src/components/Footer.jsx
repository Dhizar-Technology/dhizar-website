import React from 'react';
import { ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer
      className="relative text-[#0e1b33] overflow-hidden border-t border-[rgba(14,27,51,0.12)]"
      style={{ backgroundColor: '#7a99cb' }}
    >
      {/* ========================================================================= */}
      {/* FINAL CALL TO ACTION BANNER (White panel with Prominent Red Action)       */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 lg:pt-28 pb-12 sm:pb-16">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 lg:p-16 border border-[#e2e8f0] shadow-[0_20px_50px_rgba(14,27,51,0.10)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Subtle Ambient Red Core Glow */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: '#9fb7e0' }}
            aria-hidden="true"
          />

          <div className="max-w-2xl relative z-10">              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#cddaf0] text-[#0e1b33] font-mono text-xs uppercase tracking-widest font-semibold mb-4">
                <span>DEVELOPER HARNESS — EARLY ADOPTER BATCH</span>
              </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0e1b33] leading-tight">
              Build the Next Generation of Direct-Cortex Interfaces.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#2a3e6b] mt-4 leading-relaxed font-normal">
              SDK access, dry-electrode hardware evaluation kits, and raw SSVEP harmonic API stream access for competitive gaming studios and researchers.
            </p>
          </div>

          {/* Prominent Red Action Trigger Button: Pill-shaped, fill #a71616, hover #780606 */}
          <div className="relative z-10 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#a71616] hover:bg-[#780606] text-white font-sans text-sm sm:text-base font-semibold tracking-wide shadow-[0_12px_28px_rgba(167,22,22,0.30)] hover:shadow-[0_16px_36px_rgba(120,6,6,0.40)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
            >
              <span>REQUEST DEVELOPER ACCESS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Links & Information Floating Card */}
        <div className="mt-14 pt-10 border-t border-[rgba(14,27,51,0.12)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#a71616]" />
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-wider text-[#0e1b33] block">
                DHIZAR TECHNOLOGY
              </span>
              <span className="font-mono text-xs text-[#1d2d4c]">
                Occipital BCI Neural Interface
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 text-xs font-mono text-[#1d2d4c]">
            <a href="#hero" className="hover:text-[#a71616] transition-colors">HOME</a>
            <a href="#paradigm" className="hover:text-[#a71616] transition-colors">PARADIGM</a>
            <a href="#architecture" className="hover:text-[#a71616] transition-colors">ARCHITECTURE</a>
            <a href="#specs" className="hover:text-[#a71616] transition-colors">TELEMETRY</a>
            <a href="#team" className="hover:text-[#a71616] transition-colors">TEAM</a>
            <a href="#contact" className="hover:text-[#a71616] transition-colors">CONTACT</a>
          </div>
        </div>

        {/* Prototype & Mandatory Safety Disclosures */}
        <div className="space-y-2 pt-8 mt-8 border-t border-[rgba(14,27,51,0.12)] text-xs font-mono text-[#1d2d4c]">
          <p className="font-medium text-[#0e1b33] flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#a71616]" />
            <span>Dhizar Occipital Interface is an advanced research and engineering prototype. Not certified as a medical device.</span>
          </p>
          <p className="leading-relaxed text-[#1d2d4c] max-w-4xl">
            Notice: Calibrated high-frequency flickering visual stimuli can induce seizures in individuals with photosensitive epilepsy. All live user demonstrations require informed consent and strict adherence to optical safety parameters.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 mt-6 border-t border-[rgba(14,27,51,0.12)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#1d2d4c]">
          <p>© 2026 Dhizar Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:underline">Safety &amp; Ethics Statement</a>
            <span>·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <span>·</span>
            <a href="mailto:hello@dhizar.tech" className="hover:underline">hello@dhizar.tech</a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL-WIDTH BOLD WORDMARK "DHIZAR" IN DISPLAY FONT                         */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden select-none border-t border-[rgba(14,27,51,0.12)] pt-4 pb-2">
        <div className="w-full text-center">
          <span
            className="font-display font-extrabold text-5xl sm:text-8xl lg:text-[180px] leading-[0.9] tracking-tighter text-[#0e1b33] opacity-10 hover:opacity-20 transition-colors block w-full uppercase"
            style={{
              fontFamily: '"Bricolage Grotesque", "Helvetica Neue", Arial, sans-serif',
              letterSpacing: '-0.04em',
            }}
          >
            DHIZAR
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
