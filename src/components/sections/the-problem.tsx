"use client";

import React from "react";

export function TheProblem() {
  return (
    <section
      id="paradigm"
      className="py-12 sm:py-20 lg:py-28 relative w-full bg-[#6b8cc8] text-[#0e1b33] border-b border-[rgba(14,27,51,0.12)]"
    >
      <div className="max-w-[94vw] 2xl:max-w-[1700px] mx-auto px-4 sm:px-8">
        {/* Top Bar: Full-Width Rule with Coordinates */}
        <div className="border-b border-[rgba(14,27,51,0.12)] pb-4 mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="inline-flex self-start items-center px-3 py-1 rounded-full bg-[#cddaf0] text-[#0e1b33] tracking-widest uppercase font-semibold">
            01 — LATENCY BOTTLENECK
          </div>
          <div className="text-[#1d2d4c] tracking-wider uppercase">
            ORIGIN: OCCIPITAL POLE (Oz) — SUBSYSTEM: OCCIPITAL INTERFACE
          </div>
        </div>

        {/* 12-Column Grid: Full-Width Asymmetrical Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left 7 Columns: Display Typography & Core Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-[#0e1b33] leading-[1.05] text-balance">
              Eliminating 50 Years of Neuromuscular Lag.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#1d2d4c] mt-8 max-w-2xl leading-relaxed">
              Physical buttons introduce an unalterable biological delay—from sensory perception down
              through peripheral nerve conduction. Dhizar establishes a zero-travel direct bridge, reading
              visual-cortex potentials before the body can physically react.
            </p>

            <div className="mt-12 pt-8 border-t border-[rgba(14,27,51,0.12)] flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-[#1d2d4c]">
              <div>CHANNEL: <span className="text-[#0e1b33] font-semibold">SINGLE-CH OZ</span></div>
              <div className="text-[#1d2d4c]">•</div>
              <div>STIMULUS: <span className="text-[#0e1b33] font-semibold">8–20 HZ SSVEP</span></div>
              <div className="text-[#1d2d4c]">•</div>
              <div>CLASSIFIER: <span className="text-[#780606] font-semibold">CCA HARMONIC TEMPLATE</span></div>
            </div>
          </div>

          {/* Right 5 Columns: Latency Contrast in Floating White Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card A: Legacy Mechanical */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_12px_32px_rgba(14,27,51,0.08)] border border-[rgba(255,255,255,0.4)]">
              <div className="font-mono text-xs uppercase tracking-widest text-[#475569] font-medium mb-3">
                LEGACY PERIPHERAL ACTUATION
              </div>
              <div className="font-display text-4xl sm:text-5xl text-[#475569] font-semibold tracking-tight">
                180 – 240 ms
              </div>
              <p className="font-mono text-xs text-[#475569] mt-3 leading-relaxed">
                Retina → Motor Cortex → Peripheral Nerves → Finger Switch.
              </p>
            </div>

            {/* Card B: Dhizar Occipital Decode */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_12px_32px_rgba(14,27,51,0.08)] border border-[rgba(255,255,255,0.4)]">
              <div className="font-mono text-xs uppercase tracking-widest text-[#a71616] font-semibold mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#a71616] inline-block mr-2.5" />
                DHIZAR OCCIPITAL DECODE
              </div>
              <div className="font-display text-5xl sm:text-6xl text-[#0e1b33] font-extrabold tracking-tight">
                &lt; 48.4 ms
              </div>
              <p className="font-mono text-xs text-[#475569] mt-3 leading-relaxed">
                Direct Inion Capture → Multi-Harmonic CCA → USB HID.
              </p>

              <div className="mt-6 pt-4 border-t border-[rgba(14,27,51,0.12)] flex items-center justify-between font-mono text-[11px] text-[#475569]">
                <span>BIOLOGICAL EFFICIENCY</span>
                <span className="text-[#0e1b33] font-bold">4.5X ACCELERATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheProblem;
