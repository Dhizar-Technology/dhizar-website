import React, { useEffect, useState } from "react";

export function LogoFlythroughLoader({ onComplete }: { onComplete?: () => void }) {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setMounted(false);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
      return;
    }

    // Prevent scroll during intro
    document.body.style.overflow = "hidden";

    // Trigger curtain fadeout
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1250);

    // Unmount from DOM completely
    const unmountTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!mounted) return null;

  return (
    <div
        aria-hidden="true"
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#070D18] overflow-hidden transition-opacity ease-out pointer-events-none ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #1D2D4C 0%, #152238 45%, #0B1320 80%, #070D18 100%)',
          transitionDuration: "350ms",
        }}
      >
        {/* Ambient Neural Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#3B7BA4]/30 blur-[130px] rounded-full pointer-events-none" />
        

        {/* Animated Dhizar Logo */}
        <div className="animate-dhizar-flythrough relative z-10 flex items-center justify-center pointer-events-none">
          <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center relative z-10">
            <img src="/assets/logo.svg" className="w-full h-full object-contain" alt="Dhizar" />
          </div>
        </div>
      </div>
  );
}

export default LogoFlythroughLoader;
