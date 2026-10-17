import React from "react";

export default function AboutDhizar({ id = "about" }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center bg-transparent px-5 sm:px-10 py-16 sm:py-24 text-white"
    >
      {/* Pure Floating Content Layer (Matches TeamCareers layout 1:1) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="font-serif text-[clamp(1.65rem,6.5vw,3.25rem)] sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 sm:mb-8 leading-tight text-center sm:text-left">
          Direct visual intent. <br className="hidden sm:inline" />
          Zero mechanical travel.
        </h2>

        {/* Description */}
        <div className="space-y-4 sm:space-y-5 text-[clamp(0.875rem,3.5vw,1.05rem)] sm:text-lg text-[#A9B7C6] font-light leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-14 text-center sm:text-left">
          <p>
            Dhizar is a non-invasive neural interface system that decodes real-time visual attention directly from the visual cortex.
          </p>
          <p>
            By translating cognitive focus into an instant, native USB HID signal, Dhizar eliminates physical switches and mechanical delay—bridging the mind directly to digital action.
          </p>
        </div>

        {/* 3 Floating Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl pt-8 sm:pt-10 border-t border-white/10 text-left sm:text-center">
          <div className="flex flex-col p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-cyan-500/30 transition-all duration-300">
            <span className="font-mono text-[11px] text-[#8C9CAE] uppercase tracking-wider mb-2">Neural Input</span>
            <span className="font-medium text-white text-base">Occipital BCI Sensor</span>
            <span className="text-xs text-[#A9B7C6]/70 mt-1">Non-invasive electrophysiology monitoring focused gaze.</span>
          </div>

          <div className="flex flex-col p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-cyan-500/30 transition-all duration-300">
            <span className="font-mono text-[11px] text-[#8C9CAE] uppercase tracking-wider mb-2">Processing</span>
            <span className="font-medium text-white text-base">Real-Time Intent Decoding</span>
            <span className="text-xs text-[#A9B7C6]/70 mt-1">Extracts active target acquisition with zero mechanical delay.</span>
          </div>

          <div className="flex flex-col p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-cyan-500/30 transition-all duration-300">
            <span className="font-mono text-[11px] text-[#8C9CAE] uppercase tracking-wider mb-2">Standard Output</span>
            <span className="font-medium text-white text-base">Native USB HID Protocol</span>
            <span className="text-xs text-[#A9B7C6]/70 mt-1">Driverless plug-and-play controller compatibility across games.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
