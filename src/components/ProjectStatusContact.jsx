import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactDock } from './ui/social-flip-button';

export const ProjectStatusContact = () => {
  return (
    <section
      id="contact"
      className="w-full relative py-12 sm:py-20 lg:py-28 px-4 sm:px-8 bg-[#6b8cc8] text-[#0e1b33] border-b border-[rgba(14,27,51,0.12)]"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-[36px] border border-[#e2e8f0] shadow-[0_20px_50px_rgba(14,27,51,0.10)] px-4 sm:px-8 py-12 sm:py-16">
        {/* Header text container */}
        <div className="text-center mb-10 relative z-10">              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#cddaf0] text-[#0e1b33] font-mono text-xs uppercase tracking-widest font-semibold mb-4">
                <span>CONTACT</span>
              </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-[#0e1b33] mb-3">
            Build the Future of Neural Gaming.
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#2a3e6b]">
            For partnership, investment, press, or early hardware developer kit access — reach our core operators directly.
          </p>
        </div>

        {/* Centered Compact Dock Container (allows floating tooltips) */}
        <div className="w-full flex justify-center items-center py-6 relative z-20">
          <ContactDock />
        </div>

        <div className="text-center mt-6 relative z-10">
          <p className="font-mono text-[11px] text-[#475569]">
            Click any channel block above to dispatch transmission or copy coordinates.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* RELOCATED ACTIONS (moved down from the top navbar)                    */}
        {/* Primary: Request a Demo · Secondary: We're Hiring • Join the Core Team */}
        {/* ===================================================================== */}
        <div className="mt-10 pt-8 border-t border-[rgba(14,27,51,0.12)] flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 relative z-10">
          <a
            href="mailto:hello@dhizar.tech?subject=Dhizar%20Demo%20Request"
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#a71616] hover:bg-[#780606] text-white font-sans text-sm sm:text-base font-medium tracking-wide shadow-[0_12px_28px_rgba(167,22,22,0.30)] hover:shadow-[0_16px_36px_rgba(120,6,6,0.40)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="#team"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-white border border-[#e2e8f0] hover:border-[#9fb7e0] text-[#0e1b33] font-sans text-sm sm:text-base font-medium tracking-wide shadow-[0_12px_32px_rgba(14,27,51,0.08)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            <span className="relative flex h-2 w-2 shrink-0">
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
