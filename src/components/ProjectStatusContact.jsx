import React from 'react';
import { ContactDock } from './ui/social-flip-button';

export const ProjectStatusContact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center bg-transparent px-4 sm:px-6 py-16 sm:py-20 text-white"
    >
      <div className="relative z-10 max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-md rounded-3xl sm:rounded-[36px] border border-white/10 text-white placeholder-[#8C9CAE] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-cyan-500/30 transition-all duration-300 px-4 sm:px-8 py-10 sm:py-16 w-full">
        {/* Header text container */}
        <div className="text-center mb-8 sm:mb-10 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#8C9CAE] font-mono text-xs uppercase tracking-widest font-semibold mb-4">
            <span>CONTACT</span>
          </div>
          <h2 className="text-[clamp(1.5rem,5.5vw,2.5rem)] sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white mb-3 leading-tight">
            Build the Future of Neural Gaming.
          </h2>
          <p className="mx-auto max-w-xl text-[clamp(0.85rem,3.2vw,1rem)] sm:text-sm leading-relaxed text-[#A9B7C6] px-1">
            For partnership, investment, press, or early hardware developer kit access — reach our core operators directly.
          </p>
        </div>

        {/* Centered Compact Dock Container (allows floating tooltips) */}
        <div className="w-full flex justify-center items-center py-4 sm:py-6 relative z-20 overflow-visible">
          <ContactDock />
        </div>

        {/* Actions */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 relative z-10 w-full">
          <a
            href="mailto:hello@dhizar.tech?subject=Dhizar%20Demo%20Request"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#a71616] hover:bg-[#780606] text-white font-sans text-sm sm:text-base font-medium tracking-wide shadow-[0_12px_28px_rgba(167,22,22,0.30)] hover:shadow-[0_16px_36px_rgba(120,6,6,0.40)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D18]"
          >
            <span>Request a Demo</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <a
            href="#team"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-white font-sans text-sm sm:text-base font-medium tracking-wide shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D18]"
          >
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cb3a6] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cb3a6]" />
            </span>
            <span>We&apos;re Hiring • Join the Core Team</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectStatusContact;
