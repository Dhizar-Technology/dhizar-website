import React from 'react';
import { GitBranch, CheckCircle2, AlertTriangle, Cpu, Globe, Layers, ArrowUpRight } from 'lucide-react';

export const ParallelTracks = () => {
  return (
    <section
      id="progress"
      className="py-12 sm:py-16 relative overflow-hidden overflow-x-hidden bg-[#1d2d4c] text-[#e8eef9]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Universal Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] uppercase tracking-wider text-[#4cb3a6] mb-2.5">
              <GitBranch className="w-3 h-3 text-[#4cb3a6]" />
              <span>03 — EXECUTION ARCHITECTURE</span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#e8eef9] tracking-tight leading-tight">
              Two Tracks, Running in Parallel.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Physical hardware development is currently gated on funding or incubation support; software and classifier pipeline development is running in parallel right now.
            </p>
          </div>

          {/* Right Live Telemetry Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1b33] border border-[#2a3e6b] font-mono text-[11px] text-[#e8eef9] shadow-md shrink-0 self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#780606]" />
            </span>
            <span className="font-semibold tracking-wider text-[#4cb3a6]">STATUS</span>
            <span className="text-[#94A3B8]">• DUAL CORES</span>
          </div>
        </div>

        {/* 2-Card Expanded Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
          {/* Hardware Track Card */}
          <div className="rounded-xl bg-[#0e1b33] border-2 border-[#780606] shadow-[0_0_20px_rgba(120,6,6,0.2)] p-4 sm:p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#780606] text-white font-mono text-[11px] uppercase px-2.5 py-0.5 rounded-full font-bold tracking-wider">
                  Hardware Track
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#780606]/20 text-[#d32f2f] border border-[#780606]/40">
                  <AlertTriangle className="w-3 h-3" />
                  Gated on funding
                </span>
              </div>

              <h3 className="font-sans font-bold text-lg sm:text-xl text-[#e8eef9] mb-2">
                Bio-Transducer &amp; EEG Front-End Board
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Physical prototyping of the dry spring cradle, analog-to-digital converter (ADC) sampling circuit, and USB HID bridge requires capital for hardware fabrication and bench testing equipment.
              </p>

              <div className="space-y-2 font-mono text-xs text-[#94A3B8] mb-4">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <span>Single-Channel ADC Circuit</span>
                  <span className="text-[#d32f2f] font-bold">SCHEMATIC READY</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <span>Spring Dry Ag/AgCl Pin Cradle</span>
                  <span className="text-[#d32f2f] font-bold">CAD DESIGNED</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <span>USB HID Firmware</span>
                  <span className="text-[#d32f2f] font-bold">GATED ON FAB</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#162443] border border-[#2a3e6b] font-mono text-[11px] text-[#94A3B8]">
              <span className="text-[#e8eef9] font-semibold block mb-0.5">RESOURCES REQUIRED:</span>
              Seed capital, single-channel EEG front-end fabrication, bench testing display.
            </div>
          </div>

          {/* Software Track Card */}
          <div className="rounded-xl bg-[#0e1b33] border-2 border-[#4cb3a6]/40 shadow-[0_0_20px_rgba(56,189,248,0.15)] p-4 sm:p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 h-auto">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#4cb3a6]/20 text-[#4cb3a6] border border-[#4cb3a6]/40 font-mono text-[11px] uppercase px-2.5 py-0.5 rounded-full font-bold tracking-wider">
                  Software Track
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#4cb3a6]/10 text-[#4cb3a6] border border-[#4cb3a6]/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Underway now
                </span>
              </div>

              <h3 className="font-sans font-bold text-lg sm:text-xl text-[#e8eef9] mb-2">
                Algorithms, Simulation &amp; Classifier Pipeline
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                The CCA signal pipeline and offline benchmarking are validated immediately against public human SSVEP EEG datasets (Tsinghua Benchmark Dataset, EPFL BCI repository).
              </p>

              <div className="space-y-2 font-mono text-xs text-[#94A3B8] mb-4">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <span>Canonical Correlation (CCA)</span>
                  <span className="text-[#4cb3a6] font-bold">BENCHMARKED (98.7%)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <span>Filter-Bank CCA Modeling</span>
                  <span className="text-[#4cb3a6] font-bold">IN MODELING</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#162443]/60 border border-[#2a3e6b]">
                  <span>Telemetry Test Harness</span>
                  <span className="text-[#4cb3a6] font-bold">LIVE ON WEB</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#162443] border border-[#2a3e6b] font-mono text-[11px] text-[#94A3B8]">
              <span className="text-[#e8eef9] font-semibold block mb-0.5">RESOURCES UTILIZED:</span>
              Human SSVEP-EEG research datasets, AI/ML engineer, mathematical modeling.
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Anchor Showcase */}
        <div className="w-full rounded-2xl bg-[#0e1b33] border border-[#2a3e6b] p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mb-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#162443] border border-[#2a3e6b] font-mono text-[10px] text-[#4cb3a6] uppercase tracking-wider mb-1.5">
              <Layers className="w-3 h-3 text-[#4cb3a6]" />
              UNIFIED EXECUTION PIPELINE
            </div>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#e8eef9] tracking-tight">
              Operational Roadmap &amp; Sprint Allocation
            </h3>
            <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
              Software milestones derisk the classification architecture before physical board spin, ensuring zero firmware rewrite upon hardware arrival.
            </p>
          </div>

          {/* Progress Bars */}
          <div className="space-y-3.5 font-mono text-xs">
            <div>
              <div className="flex justify-between text-[#e8eef9] text-[11px] mb-1">
                <span>1. Algorithm Validation &amp; Public Benchmark Dataset Testing</span>
                <span className="text-[#4cb3a6] font-bold">85% COMPLETE</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#162443] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#6b8cc8] to-[#4cb3a6] w-[85%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#e8eef9] text-[11px] mb-1">
                <span>2. In-House Telemetry Console &amp; Browser Stimulus Engine</span>
                <span className="text-[#4cb3a6] font-bold">70% COMPLETE</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#162443] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#162443] to-[#4cb3a6] w-[70%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#e8eef9] text-[11px] mb-1">
                <span>3. Bio-Transducer Board Spin &amp; Dry Pin Fabrication</span>
                <span className="text-[#d32f2f] font-bold">GATED (15%)</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#162443] overflow-hidden">
                <div className="h-full bg-[#780606] w-[15%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallelTracks;
