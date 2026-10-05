import React from 'react';
import { Target, Check, X } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────
 * Scope & Engineering Discipline
 * Brand tokens: #162443 canvas, #0e1b33 surfaces, #2a3e6b borders.
 * ─────────────────────────────────────────────────────────────────── */

export const WhatItIsNot = () => {
  const comparisonData = [
    {
      approach: 'SSVEP (Our approach)',
      isV1: true,
      source: 'Visual cortex, reflexive',
      training: 'Little to none',
      rationale: 'Selected for high speed, zero calibration, and direct gaming demo-ability',
    },
    {
      approach: 'Motor Imagery',
      isV1: false,
      source: 'Motor cortex, imagined movement',
      training: 'Weeks of user training',
      rationale: 'Impractical training burden; poor demo-ability',
    },
    {
      approach: 'P300 Speller',
      isV1: false,
      source: "Parietal 'oddball' response",
      training: 'Minimal',
      rationale: 'Designed for spelling, not real-time directional control',
    },
    {
      approach: "EMG 'muscle reading' wristbands",
      isV1: false,
      source: 'Muscle, not brain',
      training: 'Minimal',
      rationale: 'Not a brain signal at all — a different technology and product category',
    },
    {
      approach: 'Invasive implants',
      isV1: false,
      source: 'Direct cortical electrodes',
      training: 'N/A',
      rationale: 'Surgical, medical-grade, not a near-term consumer product',
    },
  ];

  return (
    <section
      id="scope"
      className="py-24 relative transition-colors duration-300"
      style={{ backgroundColor: '#162443' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0e1b33] border border-[#2a3e6b] text-[#a7e5d9] font-mono text-xs uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            Engineering Discipline &amp; Scope
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#e8eef9] tracking-tight mb-4">
            What Dhizar is not
          </h2>
          <p className="font-sans font-medium text-lg sm:text-xl text-[#94A3B8] mb-4">
            To keep the product and the engineering effort focused, Dhizar does not attempt to be a general-purpose 'mind reading' device.
          </p>
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            It is important to distinguish SSVEP from other technologies that are sometimes lumped together under 'brain-computer interface,' because they have very different accuracy, latency, and hardware requirements.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#2a3e6b] bg-[#0e1b33] mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#2a3e6b] bg-[#162443] text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                <th className="py-4 px-6">Approach</th>
                <th className="py-4 px-6">Signal Source</th>
                <th className="py-4 px-6">Training Required</th>
                <th className="py-4 px-6">Why Dhizar Does / Does Not Use It</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a3e6b] text-xs sm:text-sm font-sans">
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.isV1
                      ? 'bg-[#6b8cc8]/[0.08] font-medium'
                      : 'hover:bg-[#162443]'
                  }`}
                >
                  <td className="py-4 px-6 flex items-center gap-2.5">
                    {row.isV1 ? (
                      <span className="w-5 h-5 rounded-full bg-[#6b8cc8]/20 text-[#6b8cc8] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-[#2a3e6b] text-[#94A3B8] flex items-center justify-center shrink-0">
                        <X className="w-3 h-3" />
                      </span>
                    )}
                    <span className={row.isV1 ? 'text-[#6b8cc8] font-bold text-sm' : 'text-[#e8eef9]'}>
                      {row.approach}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#94A3B8]">
                    {row.source}
                  </td>
                  <td className="py-4 px-6 text-[#94A3B8]">
                    <span className="font-mono text-xs">{row.training}</span>
                  </td>
                  <td className={`py-4 px-6 ${row.isV1 ? 'text-[#4cb3a6] font-medium' : 'text-[#94A3B8]'}`}>
                    {row.rationale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Summary Callout */}
        <div className="p-6 rounded-xl bg-[#0e1b33] border-l-4 border-[#6b8cc8] border border-[#2a3e6b]">
          <p className="font-mono text-xs sm:text-sm font-semibold text-[#e8eef9] leading-relaxed">
            Dhizar does exactly one thing, extremely well: detect which flickering visual target a person's occipital cortex is locked onto, as fast and as reliably as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatItIsNot;
