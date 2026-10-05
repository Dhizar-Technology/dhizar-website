import React from 'react';
import { Milestone, CheckCircle2, Clock, ArrowRight, ShieldCheck, Flag } from 'lucide-react';

export const Roadmap = () => {
  const timelineMilestones = [
    {
      step: '01',
      phase: 'Phase 01',
      title: 'Algorithm Benchmarking',
      status: '85% COMPLETE',
      isCurrent: true,
      desc: 'Statistical classification significance (p < 0.001) verified on single occipital channel with sub-100ms windowing.',
    },
    {
      step: '02',
      phase: 'Phase 02',
      title: 'Hardware Alpha Prototype',
      status: 'GATED ON CAPITAL',
      isCurrent: false,
      desc: 'First physical board spin integrating custom dry Ag/AgCl spring pins and low-power USB HID bridge.',
    },
    {
      step: '03',
      phase: 'Phase 03',
      title: 'Developer Engine Plugins',
      status: 'UPCOMING',
      isCurrent: false,
      desc: 'Release of Unity/Unreal Engine C# plugins allowing external game developers to bind SSVEP targets to native actions.',
    },
    {
      step: '04',
      phase: 'Phase 04',
      title: 'Production & Esports Rollout',
      status: 'FUTURE HORIZON',
      isCurrent: false,
      desc: 'Sub-90g wireless headset mass manufacturing, retail packaging, and tournament competitive certification.',
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-12 sm:py-16 relative overflow-hidden overflow-x-hidden bg-[#1d2d4c] text-[#e8eef9]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Universal Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] uppercase tracking-wider text-[#4cb3a6] mb-2.5">
              <Milestone className="w-3 h-3 text-[#4cb3a6]" />
              <span>05 — DEVELOPMENT ROADMAP</span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#e8eef9] tracking-tight leading-tight">
              Path to Production.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Sequenced by technical dependency and empirical evidence, not arbitrary calendar dates.
            </p>
          </div>

          {/* Right Live Telemetry Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] text-[#e8eef9] shadow-md shrink-0 self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#780606]" />
            </span>
            <span className="font-semibold tracking-wider text-[#4cb3a6]">SPRINT PHASE</span>
            <span className="text-[#94A3B8]">• HORIZON 01</span>
          </div>
        </div>

        {/* Modular 3-Card Grid (Core Phases) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
          {/* Card 1: Phase 01 - Underway */}
          <div className="rounded-xl bg-[#0e1b33] border-2 border-[#4cb3a6] p-4 sm:p-5 lg:p-6 shadow-[0_0_20px_rgba(56,189,248,0.15)] flex flex-col justify-between transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4cb3a6]">
                  PHASE 01 • UNDERWAY
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold bg-[#4cb3a6]/15 text-[#4cb3a6] border border-[#4cb3a6]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cb3a6]" />
                  ACTIVE
                </span>
              </div>
              <h3 className="font-sans font-bold text-base sm:text-lg text-[#e8eef9] mb-1.5">
                Algorithm Optimization &amp; Benchmarks
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Offline classification benchmarked on Tsinghua human SSVEP dataset, reaching 98.7% accuracy with sub-10ms inference. In-house telemetry testing console live.
              </p>
            </div>
            <div className="pt-3 border-t border-[#2a3e6b] font-mono text-[11px] text-[#4cb3a6]">
              Status: 85% Complete &amp; Validated
            </div>
          </div>

          {/* Card 2: Phase 02 - Active Focus */}
          <div className="rounded-xl bg-[#0e1b33] border-2 border-[#780606]/40 p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-[#780606] transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#d32f2f]">
                  PHASE 02 • ACTIVE FOCUS
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[9px] font-bold bg-[#780606]/20 text-[#d32f2f] border border-[#780606]/40">
                  GATED ON CAPITAL
                </span>
              </div>
              <h3 className="font-sans font-bold text-base sm:text-lg text-[#e8eef9] mb-1.5">
                First Prototype Fabrication
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Physical spin of the single-channel dry spring pin cradle, low-noise analog front-end (AFE) sampling board, and sub-50ms USB HID bridge hardware.
              </p>
            </div>
            <div className="pt-3 border-t border-[#2a3e6b] font-mono text-[11px] text-[#d32f2f]">
              Status: Schematics Complete · Awaiting Seed
            </div>
          </div>

          {/* Card 3: Phase 03 - Upcoming */}
          <div className="rounded-xl bg-[#0e1b33] border border-[#2a3e6b] p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-[#6b8cc8]/50 transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  PHASE 03 • UPCOMING
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[9px] font-bold bg-[#162443] text-[#94A3B8] border border-[#2a3e6b]">
                  SCHEDULED
                </span>
              </div>
              <h3 className="font-sans font-bold text-base sm:text-lg text-[#e8eef9] mb-1.5">
                Developer SDK &amp; Game Engine Plugins
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                Release of the Dhizar Unity and Unreal Engine developer packages, enabling game studios to drop flicker targets directly into game UIs.
              </p>
            </div>
            <div className="pt-3 border-t border-[#2a3e6b] font-mono text-[11px] text-[#6b8cc8]">
              Status: Architecture Planned
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Anchor Showcase: Timeline Gantt Wireframe */}
        <div className="w-full rounded-2xl bg-[#0e1b33] border border-[#2a3e6b] p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#2a3e6b]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#162443] border border-[#2a3e6b] font-mono text-[10px] text-[#4cb3a6] uppercase tracking-wider mb-1">
                <Flag className="w-3 h-3 text-[#6b8cc8]" />
                END-TO-END MILESTONE GANTT TIMELINE
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#e8eef9] tracking-tight">
                Technical Execution Horizons
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[#94A3B8] hidden sm:block">
              TOTAL 4 HORIZONS
            </span>
          </div>

          {/* Wireframe Timeline Grid */}
          <div className="relative">
            {/* 1px technical wireframe connecting line */}
            <div className="hidden md:block absolute top-6 left-6 right-6 h-[1.5px] bg-[#2a3e6b] z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {timelineMilestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    m.isCurrent
                      ? 'bg-[#162443] border-[#4cb3a6] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'bg-[#0e1b33] border-[#2a3e6b] hover:border-[#2a3e6b]/90'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-[11px] ${
                          m.isCurrent ? 'bg-[#4cb3a6] text-[#0e1b33]' : 'bg-[#162443] text-[#94A3B8]'
                        }`}
                      >
                        {m.step}
                      </div>
                      <span
                        className={`font-mono text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          m.isCurrent
                            ? 'bg-[#4cb3a6]/20 text-[#4cb3a6]'
                            : m.status.includes('GATED')
                            ? 'bg-[#780606]/20 text-[#d32f2f]'
                            : 'bg-[#162443] text-[#94A3B8]'
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>

                    <div className="font-mono text-[10px] text-[#4cb3a6] uppercase mb-0.5">{m.phase}</div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-[#e8eef9] mb-1.5 leading-snug">
                      {m.title}
                    </h4>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
