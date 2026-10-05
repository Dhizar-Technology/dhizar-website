"use client";

import React, { useState } from "react";
import { Eye, Activity, Cpu, ArrowUpRight } from "lucide-react";

export function ArchitectureBento() {
  const [activeFrequency, setActiveFrequency] = useState(12);

  return (
    <section
      id="architecture"
      className="py-12 sm:py-20 lg:py-28 relative w-full border-t border-b border-[#cddaf0]/60 overflow-hidden"
      style={{ backgroundColor: "#6b8cc8" }}
    >
      {/* Background Subtle Tech Air / Dotted Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#9fb7e0_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#cddaf0] text-[#0e1b33] font-mono text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
            <span>TECHNOLOGY &amp; ARCHITECTURE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#0e1b33] leading-[1.05] text-balance">
            Pure Intention. Zero Mechanical Travel.
          </h2>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#1d2d4c] mt-6 leading-relaxed max-w-2xl mx-auto">
            A three-stage deterministic pipeline bypassing peripheral nerves to execute game actions straight from the visual cortex.
          </p>
        </div>

        {/* 3 Floating White Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {/* ========================================================================= */}
          {/* CARD 1: 01 — STIMULUS (Visual representation of 8-20 Hz screen targets) */}
          {/* ========================================================================= */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 shadow-[0_12px_32px_rgba(14,27,51,0.08)] border border-[rgba(255,255,255,0.4)] flex flex-col justify-between hover:shadow-[0_28px_64px_rgba(14,27,51,0.22)] hover:-translate-y-2 lg:-rotate-1 lg:hover:rotate-0 transition-all duration-300 group">
            <div>
              {/* Header / Step Label */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
                <span className="font-mono text-xs font-bold text-[#a71616] tracking-widest">
                  01 — STIMULUS
                </span>
                <span className="w-8 h-8 rounded-full bg-[#e8eef9] flex items-center justify-center text-[#1d2d4c]">
                  <Eye className="w-4 h-4 text-[#0e1b33]" />
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-[#0e1b33] mt-5 mb-3 tracking-tight">
                Focal Frequency Engine
              </h3>
              <p className="font-sans text-sm text-[#475569] leading-relaxed mb-6">
                Calibrated 8–20 Hz high-frequency flicker matrix mapped directly onto on-screen target coordinates.
              </p>

              {/* Visual Graphic: 8-20 Hz Target Matrix */}
              <div className="bg-[#f8fafd] rounded-xl p-4 border border-[#e2e8f0] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#475569]">
                  <span>FREQUENCY SELECTOR</span>
                  <span className="font-bold text-[#a71616]">{activeFrequency}.0 Hz TARGET</span>
                </div>

                {/* 4 Quadrants Interactive Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { freq: 10, label: "FIRE / ACTUATE" },
                    { freq: 12, label: "JUMP / EVADE" },
                    { freq: 15, label: "MELEE / STRIKE" },
                    { freq: 18, label: "TACTICAL ABILITY" },
                  ].map((target) => (
                    <button
                      key={target.freq}
                      type="button"
                      onClick={() => setActiveFrequency(target.freq)}
                      className={`p-3 rounded-lg text-left border transition-all text-xs font-mono cursor-pointer ${
                        activeFrequency === target.freq
                          ? "bg-[#0e1b33] text-white border-[#0e1b33] shadow-md"
                          : "bg-white text-[#1d2d4c] border-[#e2e8f0] hover:border-[#9fb7e0]"
                      }`}
                    >
                      <div className="font-bold text-sm">{target.freq} Hz</div>
                      <div className="text-[9px] opacity-75 mt-0.5 truncate">{target.label}</div>
                    </button>
                  ))}
                </div>

                {/* Simulated Oscilloscope Wave */}
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#475569]">
                  <span>STIMULUS PROTOCOL:</span>
                  <span className="font-semibold text-[#0e1b33]">SQUARE WAVE (DUTY 50%)</span>
                </div>
              </div>
            </div>

            {/* Footer Metric */}
            <div className="pt-6 border-t border-[#e2e8f0] mt-6 flex items-center justify-between font-mono text-xs text-[#475569]">
              <span>DISPLAY REFRESH</span>
              <span className="font-bold text-[#0e1b33]">60 / 120 / 240 HZ</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 2: 02 — ACQUISITION (Single-channel dry sensor telemetry at Oz)     */}
          {/* ========================================================================= */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 shadow-[0_12px_32px_rgba(14,27,51,0.08)] border border-[rgba(255,255,255,0.4)] flex flex-col justify-between hover:shadow-[0_28px_64px_rgba(14,27,51,0.22)] hover:-translate-y-2 lg:translate-y-2 lg:hover:translate-y-0 transition-all duration-300 group">
            <div>
              {/* Header / Step Label */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
                <span className="font-mono text-xs font-bold text-[#a71616] tracking-widest">
                  02 — ACQUISITION
                </span>
                <span className="w-8 h-8 rounded-full bg-[#e8eef9] flex items-center justify-center text-[#1d2d4c]">
                  <Activity className="w-4 h-4 text-[#0e1b33]" />
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-[#0e1b33] mt-5 mb-3 tracking-tight">
                Single-Channel Oz Capture
              </h3>
              <p className="font-sans text-sm text-[#475569] leading-relaxed mb-6">
                Sub-microvolt electrophysiological potential capture positioned over the inion pole using zero-prep dry gold contacts.
              </p>

              {/* Visual Graphic: Oz Telemetry Head Topography */}
              <div className="bg-[#f8fafd] rounded-xl p-4 border border-[#e2e8f0] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#475569]">
                  <span>SENSOR COORDINATE</span>
                  <span className="font-bold text-[#4cb3a6] bg-[#e8eef9] px-2 py-0.5 rounded">
                    INION (Oz) LOCK
                  </span>
                </div>

                {/* Skull Schematic Diagram with Sensor Node */}
                <div className="relative w-full h-32 bg-[#0e1b33] rounded-lg p-3 flex flex-col justify-between text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Visual Node at Oz */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-dashed border-[#9fb7e0]/40 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[#1d2d4c] border border-[#4cb3a6] flex items-center justify-center shadow-[0_0_15px_rgba(76,179,166,0.5)]">
                          <span className="font-mono text-xs font-bold text-[#4cb3a6]">Oz</span>
                        </div>
                      </div>
                      <span className="absolute w-12 h-12 rounded-full border border-[#4cb3a6]/30" />
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#94a3b8]">
                    <span>IMPEDANCE: &lt; 4.8 kΩ</span>
                    <span className="text-[#a7e5d9]">SIGNAL GAIN: 24X</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#475569]">
                  <span>ELECTRODE ALLOY:</span>
                  <span className="font-semibold text-[#0e1b33]">BIO-COMPATIBLE DRY GOLD</span>
                </div>
              </div>
            </div>

            {/* Footer Metric */}
            <div className="pt-6 border-t border-[#e2e8f0] mt-6 flex items-center justify-between font-mono text-xs text-[#475569]">
              <span>SAMPLE RESOLUTION</span>
              <span className="font-bold text-[#0e1b33]">24-BIT @ 1000 HZ</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 3: 03 — DECODING (Multi-harmonic CCA matrix representation)        */}
          {/* ========================================================================= */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 shadow-[0_12px_32px_rgba(14,27,51,0.08)] border border-[rgba(255,255,255,0.4)] flex flex-col justify-between hover:shadow-[0_28px_64px_rgba(14,27,51,0.22)] hover:-translate-y-2 lg:rotate-1 lg:hover:rotate-0 transition-all duration-300 group">
            <div>
              {/* Header / Step Label */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
                <span className="font-mono text-xs font-bold text-[#a71616] tracking-widest">
                  03 — DECODING
                </span>
                <span className="w-8 h-8 rounded-full bg-[#e8eef9] flex items-center justify-center text-[#1d2d4c]">
                  <Cpu className="w-4 h-4 text-[#0e1b33]" />
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-[#0e1b33] mt-5 mb-3 tracking-tight">
                Multi-Harmonic CCA Matrix
              </h3>
              <p className="font-sans text-sm text-[#475569] leading-relaxed mb-6">
                Canonical Correlation Analysis matching harmonic templates in under 50ms windows for deterministic classification.
              </p>

              {/* Visual Graphic: CCA Harmonic Matrix Visualization */}
              <div className="bg-[#f8fafd] rounded-xl p-4 border border-[#e2e8f0] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#475569]">
                  <span>HARMONIC COVARIANCE</span>
                  <span className="font-bold text-[#0e1b33]">98.7% CONFIDENCE</span>
                </div>

                {/* Correlation Bars Matrix */}
                <div className="space-y-2 py-1">
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-[#475569] mb-1">
                      <span>FUNDAMENTAL (12 Hz)</span>
                      <span className="font-bold text-[#0e1b33]">ρ = 0.94</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <div className="h-full bg-[#0e1b33] rounded-full w-[94%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-[#475569] mb-1">
                      <span>2ND HARMONIC (24 Hz)</span>
                      <span className="font-bold text-[#0e1b33]">ρ = 0.88</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <div className="h-full bg-[#1d2d4c] rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-[#475569] mb-1">
                      <span>3RD HARMONIC (36 Hz)</span>
                      <span className="font-bold text-[#0e1b33]">ρ = 0.72</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <div className="h-full bg-[#6b8cc8] rounded-full w-[72%]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#475569] pt-1">
                  <span>CLASSIFICATION SPEED:</span>
                  <span className="font-bold text-[#a71616]">&lt; 48.4 MS TOTAL</span>
                </div>
              </div>
            </div>

            {/* Footer Metric */}
            <div className="pt-6 border-t border-[#e2e8f0] mt-6 flex items-center justify-between font-mono text-xs text-[#475569]">
              <span>ACTUATION OUTPUT</span>
              <span className="font-bold text-[#0e1b33]">DRIVERLESS USB HID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureBento;
