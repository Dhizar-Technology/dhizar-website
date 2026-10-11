import React from "react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* 2. Center Editorial Typography Layer */}
      <div className="relative z-10 text-center max-w-3xl mx-auto my-auto flex flex-col items-center px-2 sm:px-4 w-full">
        {/* Headline */}
        <h1
          className="font-serif text-[clamp(2.15rem,7.8vw,4.75rem)] sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#FFFFFF] leading-[1.12] mb-5 max-w-4xl mx-auto"
          style={{
            textShadow:
              "0 0 35px rgba(232, 238, 245, 0.35), 0 4px 20px rgba(0, 0, 0, 0.8)",
          }}
        >
          The gaze of your mind.
        </h1>

        {/* Sub-headline */}
        <p className="text-[clamp(0.9rem,3.8vw,1.15rem)] sm:text-lg text-[#A9B7C6] font-sans max-w-xl mx-auto leading-relaxed mb-8 font-light drop-shadow px-2">
          The world&apos;s first BCI-powered game controller that bridges human focus directly into immediate digital action.
        </p>

        {/* Frosted Glass CTA Button */}
        <div className="mt-2 flex justify-center w-full">
          <a
            href="#about"
            className="relative group inline-flex items-center justify-center w-full sm:w-auto max-w-xs px-8 py-3.5 rounded-full text-sm sm:text-base font-medium tracking-wide text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer bg-[#18263a]/65 border border-[#64a0dc]/35 backdrop-blur-[14px] shadow-[0_0_20px_-2px_rgba(77,150,200,0.35),0_4px_20px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D18]"
          >
            {/* Subtle hover specular highlight */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <span className="relative z-10 text-[#F1F5F9] group-hover:text-white transition-colors">
              Explore the Technology
            </span>
          </a>
        </div>
      </div>

      {/* 3. Bottom Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to explore"
        className="relative z-10 flex flex-col items-center gap-1.5 text-[#8C9CAE] hover:text-[#A9B7C6] transition-colors cursor-pointer text-xs font-sans tracking-wide bg-transparent border-0 p-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D18]"
      >
        <span>Scroll to explore</span>
        <svg
          className="w-4 h-4 animate-bounce opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
