"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function LogoScrollReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.75], [1, 3.5]);
  const logoOpacity = useTransform(scrollYProgress, [0.4, 0.75], [1, 0]);
  const vignetteScale = useTransform(scrollYProgress, [0, 0.85], [1, 2.5]);
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 0.95], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0.2, 0.95], [0.92, 1]);
  const pointerEvents = useTransform(scrollYProgress, (val) =>
    val > 0.8 ? "none" : "auto"
  );
  const centerApertureOpacity = useTransform(scrollYProgress, [0, 0.35], [0.9, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      {/* Sticky Frame containing Hero and Intro Curtain */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Underlying Hero Section */}
        <motion.div
          style={{ scale: heroScale }}
          className="relative w-full h-full flex flex-col justify-center"
        >
          {children}
        </motion.div>

        {/* Intro Vignette & Logo Curtain */}
        <motion.div
          style={{
            opacity: overlayOpacity,
            pointerEvents,
          }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0e1b33]"
        >
          {/* Subtle center backdrop at 0 scroll to ensure 100% focused full-canvas intro */}
          <motion.div
            style={{ opacity: centerApertureOpacity }}
            className="absolute inset-0 bg-[#0e1b33] pointer-events-none"
          />

          {/* Radial Vignette Overlay / Aperture Mask */}
          <motion.div
            style={{
              scale: vignetteScale,
              background:
                "radial-gradient(circle at center, transparent 30%, #0e1b33 95%)",
            }}
            className="absolute inset-0 pointer-events-none origin-center"
          />

          {/* Centered Dhizar Logo */}
          <motion.div
            style={{
              scale: logoScale,
              opacity: logoOpacity,
            }}
            className="relative z-10 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 25px rgba(120, 6, 6, 0.35)) drop-shadow(0 0 35px rgba(59, 130, 246, 0.35))",
                  "drop-shadow(0 0 35px rgba(120, 6, 6, 0.55)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.55))",
                  "drop-shadow(0 0 25px rgba(120, 6, 6, 0.35)) drop-shadow(0 0 35px rgba(59, 130, 246, 0.35))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center"
            >
              <img
                src="/assets/Dhizar.svg"
                alt="Dhizar Logo"
                className="w-full h-full object-contain brightness-0 invert select-none pointer-events-none"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Scroll Cue */}
          <motion.div
            style={{ opacity: cueOpacity }}
            className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-3 pointer-events-none z-10"
          >
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#94A3B8] uppercase select-none">
              SCROLL TO ENTER
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#6b8cc8] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default LogoScrollReveal;
