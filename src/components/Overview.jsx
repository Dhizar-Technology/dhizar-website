import React from 'react';
import { Layers, Zap, Cpu, Activity, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Overview = () => {
  return (
    <section
      id="overview"
      className="py-12 sm:py-16 relative overflow-hidden overflow-x-hidden bg-[#1d2d4c] text-[#e8eef9]"
    >
      {/* Background ambient radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Universal Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] uppercase tracking-wider text-[#4cb3a6] mb-2.5">
              <Layers className="w-3 h-3 text-[#4cb3a6]" />
              <span>01 — FROM PLASTIC TO SYNAPSE</span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#e8eef9] tracking-tight leading-tight">
              The Controller Re-Engineered from the Inside Out.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Dhizar is a brain-computer interface (BCI) that lets a player control a video game using only their visual cortex — no hand controller, no learning curve.
            </p>
          </div>

          {/* Right Live Telemetry Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] text-[#e8eef9] shadow-md shrink-0 self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#780606]" />
            </span>
            <span className="font-semibold tracking-wider text-[#4cb3a6]">12.0 HZ</span>
            <span className="text-[#94A3B8]">• ZERO DELAY</span>
          </div>
        </div>

        {/* Modular 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
          {/* Card 1 (Legacy Input) */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 hover:border-[#2a3e6b]/80 transition-all duration-300 flex flex-col justify-between h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  LEGACY INPUT // 1983–2024
                </span>
                <span className="p-1 rounded bg-[#2a3e6b]/50 text-[#94A3B8]">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg text-[#e8eef9] mb-1.5">
                Mechanical Gamepad Latency
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Thumbstick friction, mechanical spring resistance, membrane wear, and hand-eye physical transit delay inject 120ms–200ms of unavoidable mechanical hysteresis into every player action.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#2a3e6b] font-mono text-xs text-[#94A3B8]">
              <div className="flex justify-between">
                <span>Throw Distance:</span>
                <span className="text-[#d32f2f] font-semibold">8.2 mm</span>
              </div>
              <div className="flex justify-between">
                <span>Muscle Overhead:</span>
                <span className="text-[#d32f2f] font-semibold">145 ms</span>
              </div>
              <div className="flex justify-between">
                <span>Moving Parts:</span>
                <span className="text-[#d32f2f] font-semibold">28 parts</span>
              </div>
            </div>
          </div>

          {/* Card 2 (Dhizar Neural Core - Active Hero Card) */}
          <div className="rounded-xl bg-[#0e1b33] border-2 border-[#780606] shadow-[0_0_25px_rgba(120,6,6,0.3)] p-4 sm:p-5 lg:p-6 relative flex flex-col justify-between transition-all duration-300 h-auto">
            {/* Top Badge */}
            <div className="absolute -top-3 left-4 sm:left-6 px-2.5 py-0.5 rounded-full bg-[#780606] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
              DHIZAR ACTIVE CORE
            </div>

            <div>
              <div className="flex items-center justify-between mt-1 mb-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#d32f2f]">
                  OCCIPITAL SYNAPSE
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#780606]" />
              </div>

              {/* Centered Dhizar Logo Mark */}
              <div className="h-16 flex items-center justify-center my-1">
                <img
                  src="/Dhizar.svg"
                  alt="Dhizar Neural Core"
                  className="h-14 w-14 object-contain dark:brightness-0 dark:invert filter drop-shadow-[0_0_12px_rgba(120,6,6,0.5)]"
                />
              </div>

              <h3 className="font-sans font-bold text-lg text-[#e8eef9] text-center mb-1">
                Zero-Mechanical Neural Bridge
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed text-center mb-3">
                The visual cortex involuntary synchronizes neural firing directly with on-screen target flicker frequencies, bypassing motor nerve pathways entirely.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#780606]/40 font-mono text-xs text-[#94A3B8]">
              <div className="flex justify-between">
                <span>Physical Travel Delay:</span>
                <span className="text-[#4cb3a6] font-bold">0.00 ms</span>
              </div>
              <div className="flex justify-between">
                <span>Transduction Method:</span>
                <span className="text-[#4cb3a6] font-semibold">Dry SSVEP</span>
              </div>
              <div className="flex justify-between">
                <span>End-to-End Latency:</span>
                <span className="text-[#4cb3a6] font-bold">&lt; 50 ms</span>
              </div>
            </div>
          </div>

          {/* Card 3 (Signal Processing) */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 hover:border-[#2a3e6b]/80 transition-all duration-300 flex flex-col justify-between h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4cb3a6]">
                  ZERO GEL HARVESTING
                </span>
                <span className="p-1 rounded bg-[#4cb3a6]/10 text-[#4cb3a6]">
                  <Zap className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg text-[#e8eef9] mb-1.5">
                Dry Spring Pin Transduction
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Engineered with silver-elastomer spring micro-pins that part hair follicles effortlessly to establish immediate low-impedance scalp contact at landmark Oz without liquid gels.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#2a3e6b] font-mono text-xs text-[#94A3B8]">
              <div className="flex justify-between">
                <span>Preparation:</span>
                <span className="text-[#4cb3a6] font-semibold">Instant Slip-On</span>
              </div>
              <div className="flex justify-between">
                <span>Skin Contact:</span>
                <span className="text-[#4cb3a6] font-semibold">&lt; 15 kΩ Dry</span>
              </div>
              <div className="flex justify-between">
                <span>Resolution:</span>
                <span className="text-[#4cb3a6] font-semibold">24-bit Delta-Sigma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Anchor Showcase */}
        <div className="w-full rounded-2xl bg-[#0e1b33] border border-[#2a3e6b] p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#162443] border border-[#2a3e6b] font-mono text-[10px] text-[#4cb3a6] uppercase tracking-wider mb-2">
                <Activity className="w-3 h-3 text-[#6b8cc8]" />
                HARDWARE CROSS-SECTION VISUALIZER
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#e8eef9] tracking-tight mb-2">
                From 28 Moving Plastic Components to One Occipital Dipole.
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                By taking advantage of the brain's natural visual response mechanism (SSVEP), Dhizar eliminates physical trigger springs, thumbstick potentiometers, and tactile switches.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                <div className="p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <div className="font-mono text-[11px] text-[#94A3B8]">Weight</div>
                  <div className="font-mono text-base font-bold text-[#e8eef9]">86g</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <div className="font-mono text-[11px] text-[#94A3B8]">Channels</div>
                  <div className="font-mono text-base font-bold text-[#4cb3a6]">1 Ch Oz</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <div className="font-mono text-[11px] text-[#94A3B8]">Bandwidth</div>
                  <div className="font-mono text-base font-bold text-[#e8eef9]">8–20 Hz</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <div className="font-mono text-[11px] text-[#94A3B8]">Protocol</div>
                  <div className="font-mono text-base font-bold text-[#4cb3a6]">USB HID</div>
                </div>
              </div>
            </div>

            {/* Visualizer Badge */}
            <div className="w-full lg:w-72 p-4 rounded-xl bg-[#162443] border border-[#2a3e6b] flex flex-col justify-between shrink-0">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-[#94A3B8] uppercase">SPEED ADVANTAGE</span>
                <span className="px-2 py-0.5 rounded bg-[#780606] text-white font-mono text-[9px] font-bold">
                  3.8X FASTER
                </span>
              </div>
              <div className="space-y-2.5 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[#94A3B8] text-[11px] mb-1">
                    <span>Thumbstick Travel</span>
                    <span className="text-[#d32f2f]">175ms</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1d2d4c] overflow-hidden">
                    <div className="h-full bg-[#d32f2f] w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#94A3B8] text-[11px] mb-1">
                    <span>Dhizar Neural Sync</span>
                    <span className="text-[#4cb3a6]">48ms</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1d2d4c] overflow-hidden">
                    <div className="h-full bg-[#4cb3a6] w-[26%]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#2a3e6b] flex items-center gap-1.5 font-mono text-[10px] text-[#4cb3a6]">
                <CheckCircle2 className="w-3 h-3 text-[#4cb3a6]" />
                <span>Zero calibration requirement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
