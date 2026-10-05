import React from 'react';
import { Cpu, AlertCircle } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────
 * Strategy — Single Channel First
 * Brand tokens: #162443 canvas, #0e1b33 surfaces, #2a3e6b borders.
 * ─────────────────────────────────────────────────────────────────── */

export const Strategy = () => {
  const cards = [
    {
      num: '01',
      title: 'Tests the riskiest assumption first at lowest cost',
      body: 'Proves that consumer-affordable single-channel detection reliably separates targets without burning heavy capital on multi-channel analog front-ends.',
      tag: 'Capital Efficiency',
    },
    {
      num: '02',
      title: 'Faster, repeatable demos',
      body: 'A single dry spring pin placed at Oz has virtually zero setup friction compared to messy multi-electrode headcaps requiring gel, calibration, and 15-minute seating.',
      tag: 'Zero Friction',
    },
    {
      num: '03',
      title: 'Evidence-based scaling',
      body: 'Spatial multi-channel arrays (O1, O2, POz) are precision upgrades that can be systematically layered once the core single-channel feedback loop is indisputably proven.',
      tag: 'De-risked Growth',
    },
  ];

  return (
    <section
      id="strategy"
      className="py-24 relative transition-colors duration-300"
      style={{ backgroundColor: '#162443' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0e1b33] border border-[#2a3e6b] text-[#4cb3a6] font-mono text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Product Engineering Sequencing
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#e8eef9] tracking-tight mb-3">
            Single channel first
          </h2>
          <p className="font-sans text-xl text-[#6b8cc8] font-semibold mb-6">
            A strategic sequencing decision, not a technical limitation.
          </p>
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Most SSVEP research and consumer developer kits default to eight or more EEG channels from the very first prototype. Dhizar Technology is deliberately starting with a single-channel controller instead — one electrode positioned at Oz, the primary occipital site — rather than jumping straight to a multi-channel array.
          </p>
        </div>

        {/* 3 Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e1b33] border border-[#2a3e6b] hover:border-[#6b8cc8]/50 hover:bg-[#162443] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#6b8cc8]">
                    {card.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded bg-[#162443] text-[#94A3B8] border border-[#2a3e6b]">
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg text-[#e8eef9] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Trade-off Box */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#0e1b33] border-l-4 border-[#780606] border border-[#2a3e6b]">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#780606]/15 text-[#d32f2f] flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-[#a7e5d9] font-bold uppercase tracking-wider block mb-1">
                Transparent Engineering Trade-off
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                A single channel has a lower accuracy ceiling and a harder time separating closely-spaced flicker frequencies than an eight-channel array would. That trade-off is accepted deliberately in service of proving the core concept as cheaply and quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
