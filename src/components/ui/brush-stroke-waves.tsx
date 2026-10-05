"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type BrushStrokeVariant = "blue" | "teal" | "amber" | "violet";

export interface BrushStrokeProps {
  className?: string;
  variant?: BrushStrokeVariant;
  glow?: boolean;
}

export interface BrushStrokeWaveProps extends BrushStrokeProps {
  reverse?: boolean;
}

const variantStyles: Record<
  BrushStrokeVariant,
  { text: string; opacity: string; glow: string }
> = {
  blue: {
    text: "text-[#6b8cc8] dark:text-[#6b8cc8]",
    opacity: "opacity-[0.22] dark:opacity-[0.32]",
    glow: "dark:drop-shadow-[0_0_28px_rgba(61,142,255,0.40)]",
  },
  teal: {
    text: "text-[#4cb3a6] dark:text-[#4cb3a6]",
    opacity: "opacity-[0.22] dark:opacity-[0.32]",
    glow: "dark:drop-shadow-[0_0_24px_rgba(0,194,168,0.35)]",
  },
  amber: {
    text: "text-[#a7e5d9] dark:text-[#a7e5d9]",
    opacity: "opacity-[0.20] dark:opacity-[0.26]",
    glow: "dark:drop-shadow-[0_0_24px_rgba(245,166,35,0.35)]",
  },
  violet: {
    text: "text-[#6b8cc8] dark:text-[#6b8cc8]",
    opacity: "opacity-[0.18] dark:opacity-[0.25]",
    glow: "dark:drop-shadow-[0_0_24px_rgba(123,95,255,0.35)]",
  },
};

/**
 * Shape 1: Sweeping S-Curve Brush Wave
 * Spans 600px - 1100px. Organic width variation, feathered bristle edges,
 * tapering tails, and dynamic centrifugal ink splatters.
 */
export function BrushStrokeWave({
  className,
  variant = "blue",
  reverse = false,
  glow = true,
}: BrushStrokeWaveProps) {
  const styles = variantStyles[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none overflow-visible",
        styles.text,
        styles.opacity,
        glow && styles.glow,
        "transition-opacity duration-300",
        className
      )}
    >
      <svg
        viewBox="0 0 1000 320"
        fill="currentColor"
        className={cn(
          "w-full h-full",
          reverse && "-scale-x-100"
        )}
        preserveAspectRatio="none"
      >
        {/* Defs for soft organic gradient mask or internal glow */}
        <defs>
          <filter id={`brush-glow-${variant}`} x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Primary Bold Fluid Brush Body */}
        <path d="M 20 235 C 160 95, 390 48, 640 128 C 790 178, 895 170, 975 110 C 945 140, 835 235, 655 180 C 425 105, 215 145, 20 235 Z" />

        {/* 2. Secondary Bristle Streaks (Tapered Flying-White Fissure) */}
        <path
          d="M 55 248 C 205 112, 435 75, 630 148 C 735 188, 845 185, 925 138 C 875 174, 760 215, 635 184 C 425 132, 230 168, 55 248 Z"
          opacity="0.65"
        />

        {/* 3. Outer Hairline Bristles (Fine Feathering) */}
        <path
          d="M 115 262 C 248 138, 465 98, 615 168 C 690 198, 775 200, 845 168 C 792 195, 715 218, 612 196 C 458 162, 268 195, 115 262 Z"
          opacity="0.4"
        />

        {/* 4. Split-Tail Trailing Frayed Tips */}
        <path
          d="M 870 125 C 905 105, 945 92, 988 84 C 965 102, 935 118, 895 130 Z"
          opacity="0.75"
        />
        <path
          d="M 910 142 C 940 128, 972 120, 995 115 C 970 132, 942 145, 908 152 Z"
          opacity="0.55"
        />

        {/* 5. Dry-Brush Linear Fiber Striations */}
        <path
          d="M 280 78 C 430 70, 580 115, 740 162"
          stroke="currentColor"
          strokeWidth="2.4"
          fill="none"
          opacity="0.5"
          strokeDasharray="25 8 14 6 35 10"
        />
        <path
          d="M 330 92 C 470 88, 610 130, 770 178"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          opacity="0.35"
          strokeDasharray="18 10 32 8"
        />

        {/* 6. Dynamic Calligraphic Ink Splatters */}
        <circle cx="790" cy="86" r="3.2" />
        <circle cx="830" cy="68" r="2.2" />
        <circle cx="875" cy="56" r="4.0" />
        <circle cx="920" cy="72" r="2.8" />
        <circle cx="958" cy="62" r="1.8" />
        <circle cx="992" cy="82" r="3.0" />
        {/* Leading entry droplets */}
        <circle cx="34" cy="208" r="2.4" />
        <circle cx="16" cy="226" r="1.7" />
        <circle cx="48" cy="188" r="1.5" />
      </svg>
    </div>
  );
}

/**
 * Shape 2: Angled Slash / Accent Stroke
 * Dynamic 35-degree diagonal brush slash for section corners, cards, or under headings.
 */
export function BrushStrokeSlash({
  className,
  variant = "violet",
  glow = true,
}: BrushStrokeProps) {
  const styles = variantStyles[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none overflow-visible",
        styles.text,
        styles.opacity,
        glow && styles.glow,
        "transition-opacity duration-300",
        className
      )}
    >
      <svg
        viewBox="0 0 800 320"
        fill="currentColor"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* 1. Main Diagonal 35° Slash Body */}
        <path d="M 40 45 C 180 85, 340 145, 520 215 C 620 252, 710 280, 770 295 C 730 288, 640 262, 530 220 C 370 155, 200 95, 40 45 Z" />

        {/* 2. Secondary Core Ribbon with Bristle Swell */}
        <path
          d="M 65 58 C 210 102, 380 165, 550 230 C 640 264, 720 288, 755 298 C 705 292, 615 270, 505 232 C 345 172, 185 110, 65 58 Z"
          opacity="0.65"
        />

        {/* 3. Feathered Outer Bristles */}
        <path
          d="M 120 82 C 260 128, 420 188, 570 248 C 650 278, 700 295, 735 302 C 690 298, 630 282, 535 250 C 385 195, 240 140, 120 82 Z"
          opacity="0.4"
        />

        {/* 4. Trailing Frayed Tips at Impact Exit */}
        <path
          d="M 720 280 C 745 288, 772 296, 792 302 C 768 300, 742 294, 715 288 Z"
          opacity="0.75"
        />
        <path
          d="M 695 265 C 725 275, 752 284, 778 290 C 750 288, 722 280, 690 272 Z"
          opacity="0.5"
        />

        {/* 5. Striations along slash vector */}
        <path
          d="M 160 92 C 320 152, 480 212, 640 268"
          stroke="currentColor"
          strokeWidth="2.2"
          fill="none"
          opacity="0.45"
          strokeDasharray="22 8 12 6 28 10"
        />

        {/* 6. Kinetic Splatters along velocity path */}
        <circle cx="560" cy="205" r="2.8" />
        <circle cx="610" cy="225" r="3.5" />
        <circle cx="660" cy="242" r="2.2" />
        <circle cx="705" cy="258" r="4.2" />
        <circle cx="750" cy="275" r="2.5" />
        <circle cx="785" cy="285" r="3.2" />
        <circle cx="80" cy="40" r="2.0" />
      </svg>
    </div>
  );
}

/**
 * Shape 3: Circular Zen / Enso Style Brush Arc
 * An incomplete rough calligraphic brush circle arc for section backgrounds or card underlays.
 */
export function BrushStrokeEnso({
  className,
  variant = "blue",
  glow = true,
}: BrushStrokeProps) {
  const styles = variantStyles[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none overflow-visible",
        styles.text,
        styles.opacity,
        glow && styles.glow,
        "transition-opacity duration-300",
        className
      )}
    >
      <svg
        viewBox="0 0 500 500"
        fill="currentColor"
        className="w-full h-full"
      >
        {/* 1. Main Enso Brush Arc (approx 310° sweep with organic width variation) */}
        <path d="M 120 380 C 50 320, 30 200, 80 120 C 135 40, 260 20, 360 55 C 445 85, 480 180, 465 270 C 455 330, 420 390, 365 425 C 335 445, 290 455, 240 450 C 275 440, 310 425, 340 398 C 385 360, 415 310, 422 255 C 430 185, 400 110, 335 80 C 255 45, 150 65, 105 135 C 65 200, 80 300, 135 360 Z" />

        {/* 2. Secondary Bristle Arc */}
        <path
          d="M 140 365 C 80 310, 60 210, 100 145 C 145 75, 255 55, 340 85 C 410 112, 442 190, 432 265 C 422 318, 395 368, 350 400 C 375 375, 398 335, 405 290 C 412 230, 388 165, 338 135 C 275 98, 185 110, 142 165 C 108 215, 118 295, 155 348 Z"
          opacity="0.6"
        />

        {/* 3. Bristle Fissures at the Tail Gap */}
        <path
          d="M 230 452 C 210 452, 185 448, 160 438 C 178 434, 198 432, 218 432 Z"
          opacity="0.8"
        />
        <path
          d="M 255 460 C 230 460, 205 455, 180 445 C 200 442, 220 440, 242 440 Z"
          opacity="0.5"
        />

        {/* 4. Micro Ink Droplets flung around the perimeter */}
        <circle cx="95" cy="95" r="3.2" />
        <circle cx="380" cy="45" r="2.8" />
        <circle cx="475" cy="205" r="3.5" />
        <circle cx="445" cy="350" r="2.2" />
        <circle cx="310" cy="460" r="2.5" />
        <circle cx="150" cy="420" r="3.0" />
      </svg>
    </div>
  );
}

export default BrushStrokeWave;
