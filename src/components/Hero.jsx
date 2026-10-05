import React from 'react';
import { ArrowRight, Cpu, Activity, Zap, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const handleScroll = (e, targetId = 'paradigm') => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex flex-col items-center justify-between text-[#0e1b33] select-none"
      style={{
        background: 'linear-gradient(180deg, #9fb7e0 0%, #6b8cc8 100%)',
      }}
    >
      {/* Atmospheric Airy Depth / Subtle Sky Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-35 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(159,183,224,0) 70%)' }}
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">

        {/* Massive H0 Headline in Bricolage Grotesque */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#0e1b33] leading-[0.98] max-w-5xl mx-auto text-balance">
          See It. <span className="text-[#a71616]">Trigger It.</span>
          <br className="hidden sm:inline" />
          <span className="block mt-1 sm:mt-2 text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#0e1b33]/90">
            Zero Mechanical Travel.
          </span>
        </h1>

        {/* Subtext Body in Instrument Sans */}
        <p className="mt-6 sm:mt-8 font-sans text-base sm:text-lg md:text-xl text-[#0e1b33]/85 max-w-2xl mx-auto leading-relaxed font-normal">
          The hands-free visual-cortex game controller that decodes occipital SSVEP frequencies directly into native USB HID inputs before your fingers can move.
        </p>

        {/* Action Buttons: Pill CTA + Ghost Pill */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA Button: Pill-shaped, fill #a71616, text white, hover #780606 */}
          <a
            href="#paradigm"
            onClick={(e) => handleScroll(e, 'paradigm')}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#a71616] hover:bg-[#780606] text-white font-sans text-sm sm:text-base font-semibold tracking-wide shadow-[0_12px_28px_rgba(167,22,22,0.35)] hover:shadow-[0_16px_36px_rgba(120,6,6,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
          >
            <span>EXPLORE ARCHITECTURE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary Ghost Button */}
          <a
            href="#architecture"
            onClick={(e) => handleScroll(e, 'architecture')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/70 hover:bg-white border border-[#0e1b33]/15 text-[#0e1b33] font-sans text-sm sm:text-base font-semibold hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-sm backdrop-blur-sm"
          >
            <span>VIEW PIPELINE</span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* OVERLAPPING ELEVATED PREVIEW CARD (Radius 24px, Soft Shadow)               */}
        {/* ========================================================================= */}
        <div className="w-full max-w-4xl mt-12 sm:mt-16 text-left">
          <div className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_12px_32px_rgba(14,27,51,0.08)] border border-[rgba(255,255,255,0.4)] relative overflow-hidden transition-transform duration-300 hover:shadow-[0_28px_64px_rgba(14,27,51,0.22)]">
            {/* Top Bar of the Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#e2e8f0] gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e8eef9] border border-[#cddaf0] flex items-center justify-center text-[#1d2d4c]">
                  <Cpu className="w-5 h-5 text-[#a71616]" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg text-[#0e1b33]">
                    OCCIPITAL INTERFACE CRADLE
                  </div>
                  <div className="font-mono text-xs text-[#475569]">
                    PROTOTYPE HARDWARE SCHEMATIC — REV 0.9.4
                  </div>
                </div>
              </div>

              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-[#e8eef9] border border-[#cddaf0] font-mono text-xs text-[#0e1b33]">
                <span className="w-2 h-2 rounded-full bg-[#4cb3a6]" />
                <span className="font-semibold text-[#1d2d4c]">ACTIVE HARMONIC LOCK (14.2 Hz)</span>
              </div>
            </div>

            {/* Hardware Visual & Telemetry Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
              {/* Left Schematic: 7 cols */}
              <div className="lg:col-span-7 bg-[#f8fafd] rounded-2xl p-5 border border-[#e2e8f0]/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#475569] uppercase tracking-wider">
                    Electrode Topology (Oz Coordinate)
                  </span>
                  <span className="font-mono text-[11px] text-[#4cb3a6] bg-[#e8eef9] px-2 py-0.5 rounded font-medium">
                    DRY GOLD CONTACT
                  </span>
                </div>

                {/* Occipital Interface Schematic Vector Illustration */}
                <div className="relative w-full h-36 bg-[#0e1b33] rounded-xl overflow-hidden p-4 flex flex-col justify-between text-white">
                  {/* Grid lines background */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6b8cc8_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#9fb7e0]">
                    <span>CH-01: OCCIPITAL INION</span>
                    <span className="text-[#a71616] font-semibold">SIGNAL GAIN: 24X</span>
                  </div>

                  {/* Simulated Waveform Line */}
                  <div className="relative z-10 my-auto">
                    <svg viewBox="0 0 500 50" fill="none" className="w-full h-10 stroke-[#4cb3a6]">
                      <path
                        d="M0,25 Q30,10 60,25 T120,25 T180,5 T210,45 T240,25 T300,15 T360,35 T420,25 T500,25"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#94a3b8]">
                    <span>BAND: 8.0 Hz — 20.0 Hz</span>
                    <span className="text-white font-medium">SNR: +18.4 dB</span>
                    <span>DELAY: 47.8 ms</span>
                  </div>
                </div>

                {/* Sub-features */}
                <div className="grid grid-cols-3 gap-3 mt-4 text-center font-mono text-xs">
                  <div className="bg-white rounded-lg p-2.5 border border-[#e2e8f0]">
                    <div className="text-[10px] text-[#475569]">IMPEDANCE</div>
                    <div className="font-bold text-[#0e1b33]">&lt; 4.8 kΩ</div>
                  </div>
                  <div className="bg-white rounded-lg p-2.5 border border-[#e2e8f0]">
                    <div className="text-[10px] text-[#475569]">PROTOCOL</div>
                    <div className="font-bold text-[#0e1b33]">USB HID 2.0</div>
                  </div>
                  <div className="bg-white rounded-lg p-2.5 border border-[#e2e8f0]">
                    <div className="text-[10px] text-[#475569]">SAMPLING</div>
                    <div className="font-bold text-[#0e1b33]">1000 Hz</div>
                  </div>
                </div>
              </div>

              {/* Right Quick Telemetry Stack: 5 cols */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#a71616]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5 text-[#a71616]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#0e1b33]">
                        Instantaneous Brain-To-Game
                      </h4>
                      <p className="font-sans text-xs text-[#475569] leading-relaxed mt-0.5">
                        Bypasses muscle contraction and physical mechanical switch travel completely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1d2d4c]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Activity className="w-3.5 h-3.5 text-[#1d2d4c]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#0e1b33]">
                        Multi-Harmonic CCA Engine
                      </h4>
                      <p className="font-sans text-xs text-[#475569] leading-relaxed mt-0.5">
                        Matches steady-state visual evoked potentials across fundamental and harmonic bands.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4cb3a6]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2e6e8e]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#0e1b33]">
                        Driverless USB Plug &amp; Play
                      </h4>
                      <p className="font-sans text-xs text-[#475569] leading-relaxed mt-0.5">
                        Identifies as a native standard HID gaming peripheral with universal OS support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Callout in card */}
                <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#475569]">DEVELOPER UNIT:</span>
                  <span className="font-bold text-[#a71616]">EARLY ACCESS 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
