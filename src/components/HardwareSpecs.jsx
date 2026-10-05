import React from 'react';
import { Gauge, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react';

export const HardwareSpecs = () => {
  const specs = [
    { label: 'Electrode Sensor', value: 'Dry Ag/AgCl Pin (Zero gel required)', category: 'Bio-Transducer' },
    { label: 'Placement Standard', value: '10-20 Standard (Oz Landmark)', category: 'Cortex Interface' },
    { label: 'Latency (Glass-to-Trigger)', value: '< 48.5 ms (End-to-End System)', category: 'Throughput' },
    { label: 'SSVEP Operating Range', value: '8.0 Hz – 20.0 Hz (Dual-Harmonic)', category: 'Signal Processing' },
    { label: 'ADC Resolution & Sampling', value: '24-bit Delta-Sigma @ 1,000 SPS', category: 'Analog Front-End' },
    { label: 'Input Noise Density', value: '0.98 µV RMS (0.1 Hz – 100 Hz)', category: 'SNR Performance' },
    { label: 'Output Interface Protocol', value: 'USB 2.0 Full-Speed HID (Driverless)', category: 'Connectivity' },
    { label: 'Headset Weight', value: '86 grams · Spring cradle', category: 'Ergonomics' },
  ];

  return (
    <section
      id="specs"
      className="py-12 sm:py-16 relative overflow-hidden overflow-x-hidden bg-[#1d2d4c] text-[#e8eef9]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Universal Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] uppercase tracking-wider text-[#4cb3a6] mb-2.5">
              <Gauge className="w-3 h-3 text-[#4cb3a6]" />
              <span>04 — BENCHMARKS &amp; TELEMETRY</span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#e8eef9] tracking-tight leading-tight">
              Engineered for Millisecond Precision.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Rigorous laboratory validation across sampling rate, inference latency, and single-channel occipital discrimination.
            </p>
          </div>

          {/* Right Live Telemetry Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] text-[#e8eef9] shadow-md shrink-0 self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#780606]" />
            </span>
            <span className="font-semibold tracking-wider text-[#4cb3a6]">CALIBRATION</span>
            <span className="text-[#94A3B8]">• VERIFIED</span>
          </div>
        </div>

        {/* Modular 3-Card Grid (Key Metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
          {/* Card 1: 8.4 ms Inference Latency */}
          <div className="rounded-xl bg-[#0e1b33] border-2 border-[#780606]/40 p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-[#780606] transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                  CLASSIFIER WINDOW
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider bg-[#780606]/20 text-[#d32f2f] border border-[#780606]/40">
                  SUB-10MS
                </span>
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#e8eef9] tracking-tight mb-1">
                8.4 <span className="text-lg text-[#d32f2f]">ms</span>
              </div>
              <h3 className="font-sans font-bold text-base text-[#e8eef9] mb-1.5">
                Inference Latency
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Hardware-accelerated Canonical Correlation Analysis (CCA) matrix decomposition executes within a sub-10ms frame budget.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-[#2a3e6b] font-mono text-[11px] text-[#4cb3a6]">
              ✓ Faster than 60 FPS video frame (16.6ms)
            </div>
          </div>

          {/* Card 2: 98.7% Classification Accuracy */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-[#4cb3a6]/50 transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                  DISCRIMINATION RELIABILITY
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider bg-[#4cb3a6]/15 text-[#4cb3a6] border border-[#4cb3a6]/30">
                  BENCHMARK
                </span>
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#4cb3a6] tracking-tight mb-1">
                98.7 <span className="text-lg text-[#94A3B8]">%</span>
              </div>
              <h3 className="font-sans font-bold text-base text-[#e8eef9] mb-1.5">
                Classification Accuracy
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Empirically validated against public human SSVEP benchmark recordings across 35 subject trials with zero training.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-[#2a3e6b] font-mono text-[11px] text-[#4cb3a6]">
              ✓ Tsinghua University Benchmark Dataset
            </div>
          </div>

          {/* Card 3: 1000 SPS Sampling Rate */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-[#6b8cc8]/50 transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                  ANALOG CONVERSION
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider bg-[#6b8cc8]/15 text-[#6b8cc8] border border-[#6b8cc8]/30">
                  24-BIT
                </span>
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#6b8cc8] tracking-tight mb-1">
                1000 <span className="text-lg text-[#94A3B8]">SPS</span>
              </div>
              <h3 className="font-sans font-bold text-base text-[#e8eef9] mb-1.5">
                Sampling Rate
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Ultra-high oversampling captures rapid microvolt oscillations with exceptional signal-to-noise ratio across 8–20 Hz.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-[#2a3e6b] font-mono text-[11px] text-[#4cb3a6]">
              ✓ 0.98 µV RMS low input noise density
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Anchor Showcase: Spec Sheet Table */}
        <div className="w-full rounded-2xl bg-[#0e1b33] border border-[#2a3e6b] p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2a3e6b]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#162443] border border-[#2a3e6b] font-mono text-[10px] text-[#4cb3a6] uppercase tracking-wider mb-1">
                <Activity className="w-3 h-3 text-[#6b8cc8]" />
                OCCIPITAL ARCHITECTURAL SPECIFICATION TABLE
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#e8eef9] tracking-tight">
                Engineering Specifications Breakdown
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[#4cb3a6] hidden sm:block">
              REVISION • RC-0.9
            </span>
          </div>

          {/* Technical Spec Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#162443]/50 border border-[#2a3e6b] flex items-center justify-between hover:border-[#4cb3a6]/40 hover:bg-[#162443] transition-colors"
              >
                <div>
                  <span className="font-mono text-[9px] uppercase text-[#4cb3a6] tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <div className="font-sans text-xs sm:text-sm font-semibold text-[#e8eef9]">
                    {item.label}
                  </div>
                </div>
                <div className="text-right font-mono text-[11px] text-[#94A3B8] max-w-[180px] sm:max-w-xs">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSpecs;
