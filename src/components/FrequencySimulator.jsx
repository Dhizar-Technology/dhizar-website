import React, { useState } from 'react';
import { Waves, Lock, Zap, CheckCircle2 } from 'lucide-react';

const FREQUENCIES = [
  { freq: 8.57, label: 'Alpha Low', note: 'Primary resting harmonic' },
  { freq: 10.0, label: 'Alpha Peak', note: 'Strongest baseline occipital response' },
  { freq: 12.0, label: 'Alpha High', note: 'Standard SSVEP target' },
  { freq: 15.0, label: 'Beta Low', note: 'Fast reaction flicker' },
  { freq: 20.0, label: 'Beta High', note: 'Upper discrimination threshold' },
];

export const FrequencySimulator = ({ isEmbedded = false }) => {
  const [selectedFreq, setSelectedFreq] = useState(FREQUENCIES[2]);
  const [isLocked, setIsLocked] = useState(true);

  const handleSelect = (item) => {
    setSelectedFreq(item);
    setIsLocked(false);
    setTimeout(() => {
      setIsLocked(true);
    }, 280);
  };

  const content = (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 dark:bg-surface border border-black/[0.08] dark:border-border-subtle text-sync-teal font-mono text-xs uppercase tracking-wider mb-3 shadow-sm">
            <Waves className="w-3.5 h-3.5" />
            Interactive SSVEP Demonstration
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0e1b33] dark:text-content-primary">
            Frequency Calibration Console (8–20 Hz)
          </h3>
        </div>
        <p className="font-sans text-[#475569] dark:text-content-secondary max-w-md text-xs sm:text-sm mt-3 md:mt-0">
          Select an optical modulation channel below to simulate how Dhizar decodes real-time visual-cortex synchronization.
        </p>
      </div>

      {/* Cockpit Instrument Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Controls: Frequency Selectors */}
        <div className="lg:col-span-5 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#94a3b8] dark:text-content-muted block mb-2 font-medium">
            Select Optical Modulation Channel
          </span>
          {FREQUENCIES.map((item) => {
            const active = item.freq === selectedFreq.freq;
            return (
              <button
                key={item.freq}
                onClick={() => handleSelect(item)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                  active
                    ? 'bg-blue-50/70 dark:bg-card border-signal shadow-sm dark:shadow-[0_0_15px_rgba(61,142,255,0.15)]'
                    : 'bg-white dark:bg-surface border-black/[0.08] dark:border-border-subtle hover:border-signal/50 dark:hover:border-border-strong hover:bg-gray-50 dark:hover:bg-elevated'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full flex items-center justify-center ${
                      active ? 'bg-signal shadow-[0_0_8px_#6b8cc8]' : 'bg-gray-300 dark:bg-border-strong'
                    }`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-medium text-base text-[#0e1b33] dark:text-content-primary">
                        {item.freq.toFixed(1)} Hz
                      </span>
                      <span className="text-xs font-sans text-[#94a3b8] dark:text-content-muted">· {item.label}</span>
                    </div>
                    <p className="text-xs text-[#475569] dark:text-content-secondary mt-0.5">{item.note}</p>
                  </div>
                </div>
                {active && (
                  <span className="font-mono text-xs text-sync-teal bg-white dark:bg-depth px-2.5 py-1 rounded border border-sync-teal/30 shadow-xs">
                    ACTIVE
                  </span>
                )}
              </button>
            );
          })}

          <div className="p-4 rounded-xl bg-gray-50 dark:bg-surface/50 border border-black/[0.08] dark:border-border-subtle mt-4 text-xs font-mono text-[#94a3b8] dark:text-content-muted">
            <span className="text-[#0e1b33] dark:text-content-secondary font-medium block mb-1">OCCIPITAL ELECTRODE CONTACT</span>
            Channel: Oz (Primary Striate Cortex, V1 Area) · Reference: Right Mastoid (A2)
          </div>
        </div>

        {/* Right Display: Simulated Real-time SSVEP Telemetry */}
        <div className="lg:col-span-7 bg-white dark:bg-card border border-black/[0.08] dark:border-border-strong rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
          {/* Ambient subtle violet glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cortex/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Instrument Bar */}
          <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-border-subtle pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isLocked ? 'bg-sync-green' : 'bg-warning'}`} />
              </span>
              <span className="font-mono text-xs font-semibold text-[#0e1b33] dark:text-content-primary uppercase tracking-wider">
                {isLocked ? 'CCA HARMONIC LOCKED' : 'DISCRIMINATING FREQUENCY...'}
              </span>
            </div>
            <div className="font-mono text-xs text-[#94a3b8] dark:text-content-muted">
              SAMPLING RATE: <span className="text-[#0e1b33] dark:text-content-primary">1000 SPS</span>
            </div>
          </div>

          {/* Visualizer Middle: Reticle & Waveform */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 items-center">
            {/* Optical Target Box (Static & Steady Lock) */}
            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-depth rounded-xl border border-black/[0.08] dark:border-border-subtle text-center transition-colors duration-300">
              <div className="text-xs font-mono text-[#94a3b8] dark:text-content-muted mb-3 uppercase">Optical Target</div>
              <div className="w-24 h-24 rounded-lg flex items-center justify-center border bg-signal/15 dark:bg-signal/20 border-signal/40 text-signal shadow-sm dark:shadow-[0_0_18px_rgba(61,142,255,0.25)]">
                <Lock className="w-8 h-8 text-signal" />
              </div>
              <span className="font-mono text-sm font-semibold text-sync-teal mt-4">
                {selectedFreq.freq.toFixed(1)} Hz FOCAL LOCK
              </span>
              <span className="text-[11px] text-[#94a3b8] dark:text-content-muted mt-1 font-mono">
                Cycle: {(1000 / selectedFreq.freq).toFixed(1)}ms
              </span>
            </div>

            {/* Spectral Telemetry Data */}
            <div className="space-y-4 bg-gray-50/90 dark:bg-depth/60 p-6 rounded-xl border border-black/[0.08] dark:border-border-subtle transition-colors duration-300">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#94a3b8] dark:text-content-muted">CCA CORRELATION (r)</span>
                  <span className="text-sync-teal font-bold">{isLocked ? '0.892' : '0.412'}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sync-teal transition-all duration-300"
                    style={{ width: isLocked ? '89%' : '41%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#94a3b8] dark:text-content-muted">SIGNAL-TO-NOISE (SNR)</span>
                  <span className="text-signal font-bold">{isLocked ? '+8.4 dB' : '+1.8 dB'}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-signal transition-all duration-300"
                    style={{ width: isLocked ? '84%' : '20%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#94a3b8] dark:text-content-muted">ELECTRODE IMPEDANCE</span>
                  <span className="text-sync-green font-bold">11.8 kΩ (GOOD)</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-sync-green w-[92%]" />
                </div>
              </div>

              <div className="pt-2 border-t border-black/[0.08] dark:border-border-subtle flex items-center justify-between text-xs font-mono text-[#94a3b8] dark:text-content-muted">
                <span>FILTER:</span>
                <span className="text-[#475569] dark:text-content-secondary">NOTCH 50/60Hz + BP 7-30Hz</span>
              </div>
            </div>
          </div>

          {/* Bottom Status Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.08] dark:border-border-subtle text-xs font-mono text-[#94a3b8] dark:text-content-muted">
            <span className="flex items-center gap-1.5 text-sync-teal font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Zero gel required · Dry spring pins
            </span>
            <span>TRIGGER DISPATCH: 14.2ms</span>
          </div>
        </div>
      </div>
    </>
  );

  if (isEmbedded) {
    return <div className="w-full relative">{content}</div>;
  }

  return (
    <section id="technology" className="py-24 bg-white dark:bg-void border-t border-black/[0.08] dark:border-border-subtle relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {content}
      </div>
    </section>
  );
};

export default FrequencySimulator;
