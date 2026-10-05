import React from 'react';
import { History, Layers, Gamepad2, Zap } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────
 * Why Now — Market Gap & Macro Timing
 * Brand tokens: #0e1b33 canvas, #162443 surfaces, #2a3e6b borders.
 * ─────────────────────────────────────────────────────────────────── */

export const WhyNow = () => {
  return (
    <section
      id="why-now"
      className="py-24 relative transition-colors duration-300"
      style={{ backgroundColor: '#0e1b33' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#162443] border border-[#2a3e6b] text-[#6b8cc8] font-mono text-xs uppercase tracking-wider mb-4">
            <History className="w-3.5 h-3.5" />
            Macro Timing &amp; Market Dynamics
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#e8eef9] tracking-tight mb-6">
            Why now
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            <p>
              Game input hardware has not fundamentally changed in roughly four decades — a handheld controller, or a keyboard and mouse. This does not translate well to the next generation of interactive hardware: AR/VR headsets, always-on wearables, and accessibility-first devices, where a traditional controller is often impractical. Several major platform companies — Snap, Meta, and Valve among them — have each publicly invested in hands-free or 'thought-adjacent' input research over the past several years, which validates the category's importance.
            </p>
            <p>
              Despite that interest, no mainstream consumer product currently ships a brain-signal-based game controller. The closest prior attempt, NextMind — a Paris-based startup building almost exactly this concept — was acquired by Snap in 2022 after raising roughly $5.6M; the technology was absorbed into Snap's AR research efforts and the consumer developer kit was discontinued. That leaves the consumer gaming use case wide open.
            </p>
          </div>
        </div>

        {/* 2-Column Comparison */}
        <div className="pt-8">
          <div className="mb-8">
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#e8eef9] mb-2">
              How Dhizar Technology is different
            </h3>
            <p className="font-sans text-sm text-[#94A3B8]">
              A purposeful divergence from generic biosignal middleware toward an end-to-end, consumer-ready game peripheral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: General-Purpose Biosignal Infrastructure */}
            <div className="p-8 rounded-2xl bg-[#162443] border border-[#2a3e6b] flex flex-col justify-between hover:border-[#6b8cc8]/30 transition-colors duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2a3e6b] flex items-center justify-center text-[#94A3B8]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#94A3B8] uppercase">
                    Common Competitor Vector
                  </span>
                </div>
                <h4 className="font-sans font-bold text-xl text-[#e8eef9] mb-2">
                  General-Purpose Biosignal Infrastructure
                </h4>
                <p className="font-mono text-xs text-[#6b8cc8] mb-4">e.g. Anthriq, OpenBCI Ecosystems</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#94A3B8]">•</span>
                    <span>Broad SDKs designed to capture all biosignals for external third-party developers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#94A3B8]">•</span>
                    <span>Generic, multi-channel hardware arrays carrying high unit cost ($800–$2,000+).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#94A3B8]">•</span>
                    <span>Zero dedicated gaming content — developers are left to solve UX from scratch.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2a3e6b] font-mono text-xs text-[#94A3B8]">
                Outcome: Research tools with high barrier to consumer adoption.
              </div>
            </div>

            {/* Column 2: Vertically Integrated Gaming Controller (Dhizar) */}
            <div className="p-8 rounded-2xl bg-[#0e1b33] border-2 border-[#6b8cc8]/40 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-[#780606] text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                Dhizar Architecture
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6b8cc8]/15 text-[#6b8cc8] flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#4cb3a6] font-semibold uppercase">
                    Dhizar Technology
                  </span>
                </div>
                <h4 className="font-sans font-bold text-xl text-[#e8eef9] mb-2">
                  Vertically Integrated Gaming Controller
                </h4>
                <p className="font-mono text-xs text-[#4cb3a6] mb-4">Dhizar Console &amp; Occipital Headset</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#e8eef9] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d32f2f] font-bold">✓</span>
                    <span>Narrow, targeted end-to-end product built specifically for competitive gamers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d32f2f] font-bold">✓</span>
                    <span>Custom dry-contact single-channel Oz sensor engineered for sub-$150 target bill of materials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d32f2f] font-bold">✓</span>
                    <span>In-house custom launch titles and dedicated studio partnership for out-of-the-box playability.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2a3e6b] font-mono text-xs text-[#d32f2f] font-medium flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Outcome: Plug-and-play consumer peripheral with immediate utility.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
