import React, { useState } from 'react';
import { Waves, Zap, Lock, Cpu, Activity, CheckCircle2, ChevronRight } from 'lucide-react';

const FREQUENCIES = [
  { freq: 8.57, label: 'Alpha Low', note: 'Primary resting harmonic' },
  { freq: 10.0, label: 'Alpha Peak', note: 'Strongest baseline occipital response' },
  { freq: 12.0, label: 'Alpha High', note: 'Standard SSVEP target' },
  { freq: 15.0, label: 'Beta Low', note: 'Fast reaction flicker' },
  { freq: 20.0, label: 'Beta High', note: 'Upper discrimination threshold' },
];

export const HowItWorks = () => {
  const [selectedFreq, setSelectedFreq] = useState(FREQUENCIES[2]);
  const [isLocked, setIsLocked] = useState(true);

  const handleSelect = (item) => {
    setSelectedFreq(item);
    setIsLocked(false);
    setTimeout(() => {
      setIsLocked(true);
    }, 280);
  };

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 relative overflow-hidden overflow-x-hidden bg-[#1d2d4c] text-[#e8eef9]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Universal Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] uppercase tracking-wider text-[#4cb3a6] mb-2.5">
              <Waves className="w-3 h-3 text-[#4cb3a6]" />
              <span>02 — REAL-TIME DECODING PIPELINE</span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#e8eef9] tracking-tight leading-tight">
              Visual Cortex Synchronization.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              The empirical science of Steady-State Visually Evoked Potential (SSVEP) decoded in involuntary lockstep with target frequencies.
            </p>
          </div>

          {/* Right Live Telemetry Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] text-[#e8eef9] shadow-md shrink-0 self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#780606]" />
            </span>
            <span className="font-semibold tracking-wider text-[#4cb3a6]">CCA HARMONIC</span>
            <span className="text-[#94A3B8]">• LOCKED</span>
          </div>
        </div>

        {/* Modular 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
          {/* Card 1: Optical Stimulation */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 hover:border-[#6b8cc8]/50 transition-all duration-300 flex flex-col justify-between h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6b8cc8]">
                  01 // OPTICAL STIMULATION
                </span>
                <span className="p-1 rounded bg-[#6b8cc8]/10 text-[#6b8cc8]">
                  <Waves className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg text-[#e8eef9] mb-1.5">
                Frequency-Modulated Targets
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Interactive on-screen targets (abilities, crosshairs, direction vectors) oscillate at precise, distinct frequency intervals between 8.0 Hz and 20.0 Hz.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#2a3e6b] font-mono text-xs text-[#94A3B8]">
              <div className="flex justify-between">
                <span>Range:</span>
                <span className="text-[#6b8cc8] font-semibold">8.0 – 20.0 Hz</span>
              </div>
              <div className="flex justify-between">
                <span>Precision:</span>
                <span className="text-[#4cb3a6] font-semibold">0.1 Hz steps</span>
              </div>
              <div className="flex justify-between">
                <span>Effort:</span>
                <span className="text-[#4cb3a6] font-semibold">Passive Gaze</span>
              </div>
            </div>
          </div>

          {/* Card 2: Occipital EEG Capture */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 hover:border-[#4cb3a6]/50 transition-all duration-300 flex flex-col justify-between h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4cb3a6]">
                  02 // OCCIPITAL EEG CAPTURE
                </span>
                <span className="p-1 rounded bg-[#4cb3a6]/10 text-[#4cb3a6]">
                  <Activity className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg text-[#e8eef9] mb-1.5">
                Landmark Oz Microvolt Reading
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Neurons in the primary visual cortex (V1 area) fire in involuntary synchronization. Dry spring electrodes capture potential fluctuations at 1000 samples/sec.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#2a3e6b] font-mono text-xs text-[#94A3B8]">
              <div className="flex justify-between">
                <span>Landmark:</span>
                <span className="text-[#4cb3a6] font-semibold">10-20 Oz Position</span>
              </div>
              <div className="flex justify-between">
                <span>Amplitude:</span>
                <span className="text-[#4cb3a6] font-semibold">2 – 10 µV Peak</span>
              </div>
              <div className="flex justify-between">
                <span>Sampling:</span>
                <span className="text-[#4cb3a6] font-semibold">1000 SPS 24-bit</span>
              </div>
            </div>
          </div>

          {/* Card 3: Zero-Latency Dispatch */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 hover:border-[#780606]/50 transition-all duration-300 flex flex-col justify-between h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#d32f2f]">
                  03 // ZERO-LATENCY DISPATCH
                </span>
                <span className="p-1 rounded bg-[#780606]/20 text-[#d32f2f]">
                  <Zap className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg text-[#e8eef9] mb-1.5">
                CCA Harmonic Classification
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Canonical Correlation Analysis (CCA) correlates the raw occipital signal against sinusoidal reference templates to identify the user's focus target in under 50ms total latency.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#2a3e6b] font-mono text-xs text-[#94A3B8]">
              <div className="flex justify-between">
                <span>Inference:</span>
                <span className="text-[#4cb3a6] font-bold">&lt; 8.4 ms</span>
              </div>
              <div className="flex justify-between">
                <span>Protocol:</span>
                <span className="text-[#d32f2f] font-semibold">Native USB HID</span>
              </div>
              <div className="flex justify-between">
                <span>Driver:</span>
                <span className="text-[#4cb3a6] font-semibold">0 Drivers / Plug &amp; Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Anchor: SSVEP Telemetry Cockpit Panel */}
        <div className="w-full rounded-2xl bg-[#0e1b33] border border-[#2a3e6b] p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#2a3e6b]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#162443] border border-[#2a3e6b] font-mono text-[10px] text-[#4cb3a6] uppercase tracking-wider mb-1">
                <Cpu className="w-3 h-3 text-[#6b8cc8]" />
                INTERACTIVE SSVEP COCKPIT SIMULATOR
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#e8eef9] tracking-tight">
                Simulated Optical Discrimination Console
              </h3>
            </div>
            <div className="font-mono text-xs text-[#94A3B8]">
              SAMPLING: <span className="text-[#e8eef9] font-semibold">1000 SPS</span> · BAND: <span className="text-[#4cb3a6] font-semibold">8–20 HZ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left Column: Frequency Selector Buttons */}
            <div className="lg:col-span-5 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] block mb-1 font-medium">
                Select Optical Modulation Channel:
              </span>
              {FREQUENCIES.map((item) => {
                const active = item.freq === selectedFreq.freq;
                return (
                  <button
                    key={item.freq}
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-lg border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      active
                        ? 'bg-[#162443] border-[#6b8cc8] shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                        : 'bg-[#0e1b33] border-[#2a3e6b] hover:border-[#2a3e6b]/80 hover:bg-[#162443]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          active ? 'bg-[#6b8cc8] shadow-[0_0_6px_#6b8cc8]' : 'bg-[#2a3e6b]'
                        }`}
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono font-bold text-xs text-[#e8eef9]">
                            {item.freq.toFixed(1)} Hz
                          </span>
                          <span className="text-[11px] text-[#94A3B8]">· {item.label}</span>
                        </div>
                        <p className="text-[10px] text-[#94A3B8]">{item.note}</p>
                      </div>
                    </div>
                    {active && (
                      <span className="font-mono text-[9px] text-[#4cb3a6] bg-[#1d2d4c] px-2 py-0.5 rounded border border-[#4cb3a6]/30 font-bold">
                        LOCKED
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Waveform & Lock Reticle */}
            <div className="lg:col-span-7 rounded-xl bg-[#162443]/50 border border-[#2a3e6b] p-4 sm:p-5 flex flex-col justify-between">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-[#2a3e6b] pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isLocked ? 'bg-[#4cb3a6]' : 'bg-[#780606]'}`} />
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#e8eef9] tracking-wider uppercase">
                    {isLocked ? 'HARMONIC LOCK CONFIRMED' : 'CALCULATING COEFFICIENTS...'}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#4cb3a6]">
                  r = {isLocked ? '0.942' : '0.418'}
                </span>
              </div>

              {/* Middle Reticle + Simulated Signal Line */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-1 items-center">
                {/* Visualizer Target Box */}
                <div className="p-3 rounded-lg bg-[#0e1b33] border border-[#2a3e6b] flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-[9px] text-[#94A3B8] uppercase mb-1.5">Visual Stimulus</span>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#6b8cc8]/15 border border-[#6b8cc8]/40 text-[#6b8cc8] shadow-[0_0_10px_rgba(59,130,246,0.25)]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#4cb3a6] mt-1.5">
                    {selectedFreq.freq.toFixed(1)} Hz FOCUSED
                  </span>
                </div>

                {/* Microvolt Waveform Graph Display */}
                <div className="p-3 rounded-lg bg-[#0e1b33] border border-[#2a3e6b] flex flex-col justify-between">
                  <div className="flex justify-between items-center font-mono text-[9px] text-[#94A3B8] mb-1.5">
                    <span>EEG Oz CHANNEL</span>
                    <span className="text-[#4cb3a6]">SNR: +14.2 dB</span>
                  </div>

                  {/* Clean Non-flickering Steady Sine Wave SVG */}
                  <div className="h-12 w-full flex items-center justify-center">
                    <svg viewBox="0 0 300 60" className="w-full h-full stroke-[#4cb3a6] fill-none" preserveAspectRatio="none">
                      <path
                        d="M0,30 C37.5,5 37.5,55 75,30 C112.5,5 112.5,55 150,30 C187.5,5 187.5,55 225,30 C262.5,5 262.5,55 300,30"
                        strokeWidth="2"
                        className="opacity-90"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between font-mono text-[9px] text-[#94A3B8] mt-1">
                    <span>0 ms</span>
                    <span>100 ms</span>
                    <span>200 ms</span>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Footer */}
              <div className="mt-3 pt-2.5 border-t border-[#2a3e6b] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>Inference: <strong className="text-[#4cb3a6]">8.4 ms</strong></span>
                <span>P-Value: <strong className="text-[#4cb3a6]">p &lt; 0.001</strong></span>
                <span>Dispatch: <strong className="text-[#e8eef9]">USB HID Btn 1</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
