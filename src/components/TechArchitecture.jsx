import React from 'react';
import { Eye, Cpu, Radio, Zap, Activity } from 'lucide-react';

export const TechArchitecture = () => {
  return (
    <section id="architecture" className="relative py-28 bg-slate-50 dark:bg-depth border-t border-black/[0.08] dark:border-border-subtle transition-colors duration-300">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,142,255,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Eyebrow & Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white dark:bg-surface border border-black/[0.08] dark:border-border-subtle text-signal font-mono text-xs uppercase tracking-wider mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            Signal Processing Pipeline
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#0e1b33] dark:text-content-primary mb-4 transition-colors duration-300">
            Bypassing Neuromuscular Latency.
          </h2>
          <p className="font-sans text-[#475569] dark:text-content-secondary text-lg leading-relaxed transition-colors duration-300">
            Conventional gaming inputs travel from visual cortex to motor cortex, down spinal motor neurons, into hand muscles, and finally through switch debounce. Dhizar reads the visual cortex directly.
          </p>
        </div>

        {/* 3-Step Cockpit Flow Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-white dark:bg-card border border-black/[0.08] dark:border-border-subtle hover:border-signal dark:hover:border-border-strong rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-signal font-semibold tracking-wider">STAGE 01</span>
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-surface flex items-center justify-center border border-black/[0.08] dark:border-border-subtle text-signal group-hover:text-sync-teal transition-colors">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-[#0e1b33] dark:text-content-primary mb-2 transition-colors duration-300">
              SSVEP Foveal Lock
            </h3>
            <p className="font-sans text-sm text-[#475569] dark:text-content-secondary leading-relaxed mb-6 transition-colors duration-300">
              In-game UI triggers modulate at discrete frequency harmonics between 8 Hz and 20 Hz. Fixating visual focus on any target entrains an immediate retinal-cortical oscillation.
            </p>
            <div className="pt-4 border-t border-black/[0.08] dark:border-border-subtle flex items-center justify-between text-xs font-mono">
              <span className="text-[#94a3b8] dark:text-content-muted">Modulation</span>
              <span className="text-sync-teal font-medium">8.0 – 20.0 Hz</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-card border border-black/[0.08] dark:border-border-subtle hover:border-signal dark:hover:border-border-strong rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-signal font-semibold tracking-wider">STAGE 02</span>
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-surface flex items-center justify-center border border-black/[0.08] dark:border-border-subtle text-signal group-hover:text-sync-teal transition-colors">
                <Radio className="w-4 h-4" />
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-[#0e1b33] dark:text-content-primary mb-2 transition-colors duration-300">
              Oz Dry Electrode Capture
            </h3>
            <p className="font-sans text-sm text-[#475569] dark:text-content-secondary leading-relaxed mb-6 transition-colors duration-300">
              A single ultra-low impedance silver-elastomer dry pin positioned precisely at the 10-20 international Oz landmark captures primary visual cortex potentials through hair.
            </p>
            <div className="pt-4 border-t border-black/[0.08] dark:border-border-subtle flex items-center justify-between text-xs font-mono">
              <span className="text-[#94a3b8] dark:text-content-muted">Impedance</span>
              <span className="text-sync-green font-medium">&lt;15 kΩ Dry Contact</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-card border border-black/[0.08] dark:border-border-subtle hover:border-signal dark:hover:border-border-strong rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-signal font-semibold tracking-wider">STAGE 03</span>
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-surface flex items-center justify-center border border-black/[0.08] dark:border-border-subtle text-signal group-hover:text-sync-teal transition-colors">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-[#0e1b33] dark:text-content-primary mb-2 transition-colors duration-300">
              Hardware CCA Decomposition
            </h3>
            <p className="font-sans text-sm text-[#475569] dark:text-content-secondary leading-relaxed mb-6 transition-colors duration-300">
              Onboard FPGA executes Canonical Correlation Analysis (CCA) across reference sin/cos templates in under 22ms, dispatching HID mouse/key interrupts directly to USB.
            </p>
            <div className="pt-4 border-t border-black/[0.08] dark:border-border-subtle flex items-center justify-between text-xs font-mono">
              <span className="text-[#94a3b8] dark:text-content-muted">End-to-End Latency</span>
              <span className="text-signal font-medium">&lt;48.5 ms Total</span>
            </div>
          </div>
        </div>

        {/* Latency Comparison Instrument Panel */}
        <div className="bg-white dark:bg-surface border border-black/[0.08] dark:border-border-strong rounded-xl p-8 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#94a3b8] dark:text-content-muted font-mono text-xs uppercase mb-1">
                <Activity className="w-4 h-4 text-sync-teal" />
                Benchmark telemetry
              </div>
              <h4 className="font-display font-bold text-2xl text-[#0e1b33] dark:text-content-primary transition-colors duration-300">
                Human Neuromuscular Loop vs. Dhizar Occipital Loop
              </h4>
            </div>
            <span className="font-mono text-xs px-3 py-1.5 rounded bg-gray-100 dark:bg-depth text-[#475569] dark:text-content-secondary border border-black/[0.08] dark:border-border-subtle self-start md:self-auto">
              Test Protocol: 240Hz OLED Display · USB 2.0 Full-Speed
            </span>
          </div>

          <div className="space-y-6">
            {/* Conventional Loop */}
            <div>
              <div className="flex justify-between text-sm font-sans mb-2">
                <span className="text-[#475569] dark:text-content-secondary font-medium">Conventional Human-Hand Response (Visual → Brain → Spine → Finger)</span>
                <span className="font-mono text-[#94a3b8] dark:text-content-muted">180ms – 250ms</span>
              </div>
              <div className="w-full h-3.5 bg-gray-200 dark:bg-depth rounded-full overflow-hidden p-0.5 border border-black/[0.08] dark:border-border-subtle">
                <div className="h-full bg-gray-400 dark:bg-content-muted/40 rounded-full w-[85%]" />
              </div>
            </div>

            {/* Dhizar Occipital Loop */}
            <div>
              <div className="flex justify-between text-sm font-sans mb-2">
                <span className="text-[#0e1b33] dark:text-content-primary font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sync-teal" />
                  Dhizar Occipital Interface (Direct Occipital SSVEP Demodulation)
                </span>
                <span className="font-mono text-sync-teal font-bold">&lt;50ms</span>
              </div>
              <div className="w-full h-3.5 bg-gray-200 dark:bg-depth rounded-full overflow-hidden p-0.5 border border-sync-teal/30">
                <div className="h-full bg-gradient-to-r from-signal to-sync-teal rounded-full w-[22%] shadow-[0_0_12px_rgba(0,194,168,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
