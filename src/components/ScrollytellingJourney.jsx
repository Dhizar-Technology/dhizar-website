import React from 'react';
import { Layers, Activity, Cpu } from 'lucide-react';

// Chamfered card clip path (cut diagonal bottom-right corner)
const CHAMFER_POLYGON = 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)';

/**
 * Angular Chamfered Bento Node Card
 * Features cut bottom-right corner, 1px border #2a3e6b, and overlapping circular floating node beacon
 */
const AngularBentoNode = ({
  stage,
  title,
  subtitle,
  description,
  floatingIcon,
  stats = [],
  isFocal = false,
}) => {
  return (
    <div
      className={`relative group transition-all duration-300 ${
        isFocal ? 'scale-[1.02]' : 'hover:-translate-y-1'
      }`}
    >
      {/* Overlapping Circular Floating Node Beacon (Reference Design Anchor) */}
      <div className="absolute -top-5 left-8 z-30 flex items-center justify-center">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
            isFocal
              ? 'bg-[#0E1B33] border-2 border-[#780606] shadow-[0_0_20px_rgba(120,6,6,0.5)]'
              : 'bg-[#0E1B33] border border-[#2a3e6b] shadow-[0_0_15px_rgba(42,62,107,0.4)]'
          }`}
        >
          {floatingIcon}
        </div>
      </div>

      {/* Chamfered Card Shell with 1px Technical Border */}
      <div
        className={`p-[1px] transition-colors duration-300 ${
          isFocal
            ? 'bg-gradient-to-br from-[#780606] via-[#2a3e6b] to-[#780606]/40 shadow-[0_0_30px_rgba(120,6,6,0.25)]'
            : 'bg-[#2a3e6b] group-hover:bg-[#4cb3a6]/40'
        }`}
        style={{ clipPath: CHAMFER_POLYGON }}
      >
        <div
          className="bg-[#0E1B33] p-6 pt-9 flex flex-col justify-between min-h-[360px] h-full"
          style={{ clipPath: CHAMFER_POLYGON }}
        >
          {/* Card Header & Stage Label */}
          <div>
            <div className="flex items-center justify-between text-[#94A3B8] mb-2 font-mono text-[10px] tracking-widest uppercase">
              <span className={isFocal ? 'text-[#f8e0e0] font-bold' : 'text-[#4cb3a6]'}>
                {stage}
              </span>
              <span className="text-[#94A3B8]/60">OCCIPITAL R&amp;D</span>
            </div>

            <h3 className="text-[#e8eef9] font-sans font-bold text-lg leading-snug tracking-tight mb-1">
              {title}
            </h3>
            <p className="text-xs text-[#4cb3a6]/80 font-medium mb-3 leading-relaxed">
              {subtitle}
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
              {description}
            </p>
          </div>

          {/* Technical Specs Strip at Card Base */}
          <div className="pt-3 border-t border-[#2a3e6b]/60 space-y-1.5 font-mono text-[11px]">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-[#94A3B8]">{stat.label}</span>
                <span
                  className={
                    stat.highlight
                      ? 'text-[#f8e0e0] font-bold'
                      : 'text-[#E2E8F0] font-medium'
                  }
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export function ScrollytellingJourney() {
  return (
    <section id="pipeline" className="relative w-full bg-[#1d2d4c] text-[#e8eef9] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Phase 2 Header: Architecture */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1B33] border border-[#2a3e6b] font-mono text-[11px] uppercase tracking-[0.2em] text-[#4cb3a6] mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#4cb3a6]" />
            <span>02 — NEURAL PIPELINE ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#e8eef9] tracking-tight">
            From Photons to Actuation: What We Build.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto">
            Four synchronized mathematical stages eliminating peripheral neuromuscular delay.
          </p>
        </div>

        {/* 4 Angular Chamfered Bento Cards with Overlapping Circular Floating Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Node 01: Optical Frequency Stimulation */}
          <AngularBentoNode
            stage="01 — STIMULUS"
            title="Focal Stimuli Engine"
            subtitle="Generates precise screen-based visual triggers."
            description="Generates calibrated 8–20 Hz visual triggers directly on display targets to induce steady-state visual evoked potentials in the primary visual cortex (V1)."
            floatingIcon={
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#4cb3a6] animate-spin"
                  style={{ animationDuration: '10s' }}
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    stroke="#2a3e6b"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="2 3"
                  />
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="18"
                      y1="5"
                      x2="18"
                      y2="8"
                      stroke="#4cb3a6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      transform={`rotate(${i * 30} 18 18)`}
                    />
                  ))}
                  <circle cx="18" cy="18" r="3.5" fill="#4cb3a6" />
                </svg>
              </div>
            }
            stats={[
              { label: 'Target Frequency:', value: '12.000 Hz Strobe' },
              { label: 'Phase Coherence:', value: '0.0° Fixed' },
              { label: 'Display Refresh:', value: '60 / 120 / 240 Hz' },
            ]}
          />

          {/* Node 02: Occipital Microvolt Capture */}
          <AngularBentoNode
            stage="02 — ACQUISITION"
            title="Single-Channel Acquisition"
            subtitle="Reading raw visual-cortex responses at the Oz position."
            description="Continuous microvolt stream capture located over the occipital pole (Oz electrode site), reading raw electrophysiological response through low-noise dry gold pin contacts."
            floatingIcon={
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#4cb3a6]" viewBox="0 0 36 36" fill="none">
                  <line
                    x1="3"
                    y1="18"
                    x2="33"
                    y2="18"
                    stroke="#2a3e6b"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                  />
                  <path
                    d="M4 18 Q 11 6, 18 18 T 32 18"
                    stroke="#4cb3a6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="11" cy="12" r="1.5" fill="#4cb3a6" />
                  <circle cx="25" cy="24" r="1.5" fill="#4cb3a6" />
                </svg>
              </div>
            }
            stats={[
              { label: 'Electrode Site:', value: '1 Ch Oz (Inion +10%)' },
              { label: 'Noise Floor:', value: '0.35 μV RMS' },
              { label: 'Contact Interface:', value: '<5 kΩ Dry Gold Pin' },
            ]}
          />

          {/* Node 03: CCA Mathematical Decoding (Blood Red #780606 Focal Node) */}
          <AngularBentoNode
            stage="03 — INFERENCE"
            title="Zero-Latency Inference"
            subtitle="Sub-50ms signal-to-intent conversion without physical buttons."
            description="Canonical Correlation Analysis (CCA) measures linear correlation against reference sine/cosine harmonic templates (f, 2f, 3f) to confirm intent in sub-50ms without mechanical buttons."
            isFocal={true}
            floatingIcon={
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#f8e0e0] relative z-10"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    x="7"
                    y="7"
                    width="22"
                    height="22"
                    rx="2"
                    stroke="#780606"
                    strokeWidth="1.2"
                    fill="#0E1B33"
                  />
                  <line x1="14" y1="7" x2="14" y2="29" stroke="#780606" strokeWidth="0.8" opacity="0.6" />
                  <line x1="22" y1="7" x2="22" y2="29" stroke="#780606" strokeWidth="0.8" opacity="0.6" />
                  <line x1="7" y1="14" x2="29" y2="14" stroke="#780606" strokeWidth="0.8" opacity="0.6" />
                  <line x1="7" y1="22" x2="29" y2="22" stroke="#780606" strokeWidth="0.8" opacity="0.6" />
                  <circle cx="10.5" cy="10.5" r="1.8" fill="#f8e0e0" />
                  <circle cx="18" cy="18" r="2.5" fill="#780606" stroke="#f8e0e0" strokeWidth="0.8" />
                  <circle cx="25.5" cy="25.5" r="1.8" fill="#f8e0e0" />
                </svg>
              </div>
            }
            stats={[
              { label: 'Correlation Matrix (r):', value: '0.987 Confirmed', highlight: true },
              { label: 'Window Time:', value: '12.4 ms' },
              { label: 'Harmonic Sync:', value: 'f, 2f, 3f Lock' },
            ]}
          />

          {/* Node 04: Native HID Translation */}
          <AngularBentoNode
            stage="04 — ACTUATION"
            title="Controller Emulation"
            subtitle="Directly driving in-game mechanics with zero mechanical travel time."
            description="Translates mathematical frequency locks directly into native USB/Bluetooth HID events (XInput/DirectInput), delivering immediate gameplay actuation."
            floatingIcon={
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#4cb3a6]" viewBox="0 0 36 36" fill="none">
                  <path
                    d="M5 24 L 12 24 L 12 11 L 22 11 L 22 25 L 31 25"
                    stroke="#4cb3a6"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <circle cx="12" cy="11" r="1.5" fill="#4cb3a6" />
                  <circle cx="22" cy="11" r="1.5" fill="#4cb3a6" />
                  <path d="M28 22 L31 25 L28 28" stroke="#4cb3a6" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            }
            stats={[
              { label: 'Bus Latency:', value: '<1.2 ms (USB/BLE)' },
              { label: 'Mechanical Travel:', value: '0.00 mm' },
              { label: 'Native Protocol:', value: 'XInput / DirectInput' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default ScrollytellingJourney;
