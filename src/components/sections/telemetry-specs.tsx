"use client";

import React from "react";

interface BenchmarkMetric {
  value: string;
  label: string;
  subtext: string;
}

const BENCHMARKS: BenchmarkMetric[] = [
  {
    value: "< 50ms",
    label: "PIPELINE LATENCY",
    subtext: "Occipital visual-cortex decode directly into game engine input.",
  },
  {
    value: "98.7%",
    label: "INFERENCE LOCK",
    subtext: "Multi-harmonic Canonical Correlation Analysis target discrimination.",
  },
  {
    value: "0.00mm",
    label: "SWITCH TRAVEL",
    subtext: "Eliminates finger displacement, physical debounce, and muscle fatigue.",
  },
  {
    value: "USB HID",
    label: "DRIVERLESS PROTOCOL",
    subtext: "Zero drivers required. Emulates standard USB gamepad and joystick protocols.",
  },
];

export function TelemetrySpecs() {
  return (
    <section
      id="specs"
      className="py-12 sm:py-20 lg:py-28 relative text-[#0e1b33] w-full border-b border-[rgba(14,27,51,0.12)] overflow-hidden bg-[#6b8cc8]"
    >
      {/* Subtle Light Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#9fb7e0_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Eyebrow and Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[rgba(14,27,51,0.12)] mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#cddaf0] text-[#0e1b33] font-mono text-xs uppercase tracking-widest font-semibold mb-4">
              <span>EMPIRICAL BENCHMARKS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#0e1b33] leading-tight text-balance">
              Verified Telemetry. Zero Speculation.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#1d2d4c] max-w-md leading-relaxed font-normal">
            Continuous hardware-in-the-loop benchmarking captured at 240 FPS simulation workload.
          </p>
        </div>          {/* 4 Benchmark Stats in Clean Elevated Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BENCHMARKS.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-[24px] p-6 lg:p-7 shadow-[0_12px_32px_rgba(14,27,51,0.08)] border border-[rgba(255,255,255,0.4)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(14,27,51,0.14)] transition-all duration-300"
              >
                <div className="flex flex-col items-start text-[#0e1b33] w-full">
                  {/* Number + unit in two-runway clamp so 0.00mm / 98.7% never overflows */}
                  <div className="flex flex-wrap items-baseline gap-x-1 gap-y-1 font-display font-bold leading-none">
                    {item.value.split(/(?<=\d)(?=[a-z%]|$)/i).map((part, i) =>
                      <span key={i} className={"whitespace-no-wrap pr-1"} style={i === 1 ? { fontSize: '0.55rem' } : {}}>
                        {part}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-xs text-[#475569] uppercase tracking-widest font-semibold mt-3 mb-2">
                    {item.label}
                  </div>
                </div>

                <p className="font-sans text-xs text-[#475569] leading-relaxed pt-4 border-t border-[rgba(14,27,51,0.12)] mt-3">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>

        {/* Bottom Metadata Footnote */}
        <div className="mt-12 pt-6 border-t border-[rgba(14,27,51,0.12)] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#1d2d4c] gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cb3a6]" />
            <span>TEST RIG: 240 HZ DISPLAY REFRESH — OCCIPITAL INION ELECTROPHYSIOLOGY</span>
          </div>
          <div className="text-[#0e1b33] font-semibold">REPRODUCIBLE RESEARCH PROTOCOL VERIFIED</div>
        </div>
      </div>
    </section>
  );
}

export default TelemetrySpecs;
