"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TechnicalVectorCanvasProps {
  className?: string;
}

/**
 * TechnicalVectorCanvas
 *
 * A theme-adaptive architectural vector background component rendering
 * high-precision technical vectors:
 * 1. 45° angled parallel speed lines & dashed technical strokes
 * 2. Sinusoidal SSVEP frequency wave ribbons (#4cb3a6 / #4cb3a6)
 * 3. Concentric coordinate target circles (r=160px & r=90px) with crosshairs
 * 4. Soft ambient blurred color blooms (Primary Blue & Cortex Violet)
 *
 * Strict contrast adherence:
 * - Light Mode: stroke-[#6b8cc8]/[0.18], stroke-[#4cb3a6]/[0.20], stroke-[#6b8cc8]/[0.15], stroke-neutral-900/[0.12]
 * - Dark Mode: stroke-[#6b8cc8]/[0.25], stroke-[#4cb3a6]/[0.25], stroke-[#6b8cc8]/[0.20], stroke-white/[0.12]
 *
 * Positioned as: pointer-events-none -z-10 absolute inset-0 overflow-hidden select-none
 */
export function TechnicalVectorCanvas({ className }: TechnicalVectorCanvasProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none",
        className
      )}
    >
      {/* ========================================================================= */}
      {/* 1. SOFT BLURRED COLOR BLOOMS / AMBIENT RADIAL HALOS                      */}
      {/* ========================================================================= */}
      {/* Halo 1: Primary Signal Blue Halo (upper section, 6%–10% opacity) */}
      <div className="absolute top-[14%] right-[-6%] w-[32rem] h-[32rem] rounded-full bg-[#6b8cc8]/[0.08] dark:bg-[#6b8cc8]/[0.10] blur-3xl" />

      {/* Halo 2: Cortex Violet Halo (lower-mid section, 5%–8% opacity) */}
      <div className="absolute top-[58%] left-[-8%] w-[36rem] h-[36rem] rounded-full bg-[#6b8cc8]/[0.06] dark:bg-[#6b8cc8]/[0.08] blur-3xl" />

      {/* Halo 3: Subtle Sync Teal Ambient Micro-Bloom (upper-mid center) */}
      <div className="absolute top-[36%] left-[45%] w-[24rem] h-[24rem] rounded-full bg-[#4cb3a6]/[0.04] dark:bg-[#4cb3a6]/[0.06] blur-3xl" />

      {/* ========================================================================= */}
      {/* 2. CONCENTRIC COORDINATE TARGET CIRCLES & CROSSHAIR NODES               */}
      {/* ========================================================================= */}
      {/* Circle 1: Large Subtle Ring (r=160px, diameter 360px) in Upper Background */}
      <div className="absolute top-[8%] right-[4%] xl:right-[8%] w-[360px] h-[360px]">
        <svg
          viewBox="0 0 360 360"
          fill="none"
          className="w-full h-full stroke-neutral-900/[0.12] dark:stroke-white/[0.12]"
        >
          {/* Outer Ring r=160px */}
          <circle cx="180" cy="180" r="160" strokeWidth="1.5" strokeDasharray="6 6" />
          {/* Mid Ring r=110px */}
          <circle cx="180" cy="180" r="110" strokeWidth="1.2" />
          {/* Inner Core Ring r=40px */}
          <circle cx="180" cy="180" r="40" strokeWidth="1.5" />
          <circle cx="180" cy="180" r="4" fill="currentColor" stroke="none" opacity="0.6" />

          {/* Full-width crosshair lines extending beyond ring */}
          <line x1="0" y1="180" x2="360" y2="180" strokeWidth="1.5" strokeDasharray="4 6" />
          <line x1="180" y1="0" x2="180" y2="360" strokeWidth="1.5" strokeDasharray="4 6" />

          {/* Precision Quadrant Marks */}
          <line x1="180" y1="12" x2="180" y2="28" strokeWidth="2" />
          <line x1="180" y1="332" x2="180" y2="348" strokeWidth="2" />
          <line x1="12" y1="180" x2="28" y2="180" strokeWidth="2" />
          <line x1="332" y1="180" x2="348" y2="180" strokeWidth="2" />

          {/* 45° Diagonal Coordinate Ticks */}
          <line x1="67" y1="67" x2="77" y2="77" strokeWidth="1.5" />
          <line x1="293" y1="67" x2="283" y2="77" strokeWidth="1.5" />
          <line x1="67" y1="293" x2="77" y2="283" strokeWidth="1.5" />
          <line x1="293" y1="293" x2="283" y2="283" strokeWidth="1.5" />

          {/* Sensor Site Coordinate Label */}
          <text
            x="195"
            y="170"
            fill="currentColor"
            stroke="none"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="0.1em"
            opacity="0.8"
          >
            LOC: Oz [12.0Hz]
          </text>
        </svg>
      </div>

      {/* Circle 2: Medium Coordinate Ring (r=90px, diameter 220px) Near Lower Right */}
      <div className="absolute top-[68%] right-[6%] xl:right-[12%] w-[220px] h-[220px]">
        <svg
          viewBox="0 0 220 220"
          fill="none"
          className="w-full h-full stroke-neutral-900/[0.12] dark:stroke-white/[0.12]"
        >
          {/* Main Ring r=90px */}
          <circle cx="110" cy="110" r="90" strokeWidth="1.5" />
          {/* Inner Dashed Ring r=50px */}
          <circle cx="110" cy="110" r="50" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="110" cy="110" r="3" fill="currentColor" stroke="none" opacity="0.6" />

          {/* Center Crosshair with Standoff */}
          <line x1="110" y1="10" x2="110" y2="210" strokeWidth="1.5" strokeDasharray="3 4" />
          <line x1="10" y1="110" x2="210" y2="110" strokeWidth="1.5" strokeDasharray="3 4" />

          {/* Secondary Peripheral Node Label */}
          <text
            x="122"
            y="102"
            fill="currentColor"
            stroke="none"
            fontSize="8.5"
            fontFamily="monospace"
            letterSpacing="0.08em"
            opacity="0.75"
          >
            REF: POz [15.0Hz]
          </text>
        </svg>
      </div>

      {/* Circle 3: Ambient Geometric Sensor Site (Mid-Left, r=45px, diameter 110px) */}
      <div className="absolute top-[44%] left-[4%] xl:left-[8%] w-[110px] h-[110px]">
        <svg
          viewBox="0 0 110 110"
          fill="none"
          className="w-full h-full stroke-neutral-900/[0.12] dark:stroke-white/[0.12]"
        >
          <circle cx="55" cy="55" r="45" strokeWidth="1.5" strokeDasharray="5 3" />
          <circle cx="55" cy="55" r="18" strokeWidth="1.2" />
          <line x1="55" y1="2" x2="55" y2="108" strokeWidth="1.2" strokeDasharray="2 3" />
          <line x1="2" y1="55" x2="108" y2="55" strokeWidth="1.2" strokeDasharray="2 3" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. 45° ANGLED SPEED LINES & TECHNICAL BLUEPRINT STROKE CLUSTERS         */}
      {/* ========================================================================= */}
      {/* Cluster 1: Top-Right (#how-it-works flank) - 45° Angled Strokes */}
      <div className="absolute top-[6%] right-[16%] w-[320px] h-[320px]">
        <svg viewBox="0 0 320 320" fill="none" className="w-full h-full">
          {/* Primary Strokes (180px–340px lengths, stroke 1.75px–2px) */}
          <line
            x1="20"
            y1="40"
            x2="260"
            y2="280"
            strokeWidth="1.75"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="60"
            y1="30"
            x2="300"
            y2="270"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="100"
            y1="20"
            x2="310"
            y2="230"
            strokeWidth="1.5"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          {/* Violet Accent Stroke */}
          <line
            x1="40"
            y1="80"
            x2="220"
            y2="260"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="stroke-[#6b8cc8]/[0.15] dark:stroke-[#6b8cc8]/[0.20]"
          />
        </svg>
      </div>

      {/* Cluster 2: Center-Left (#roadmap / #strategy flank) - 45° Angled Strokes */}
      <div className="absolute top-[38%] left-[2%] xl:left-[5%] w-[300px] h-[300px]">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <line
            x1="20"
            y1="260"
            x2="260"
            y2="20"
            strokeWidth="2"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="50"
            y1="280"
            x2="280"
            y2="50"
            strokeWidth="1.75"
            strokeDasharray="6 8"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="10"
            y1="220"
            x2="230"
            y2="0"
            strokeWidth="1.5"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          {/* Violet Accent Stroke */}
          <line
            x1="80"
            y1="290"
            x2="290"
            y2="80"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            className="stroke-[#6b8cc8]/[0.15] dark:stroke-[#6b8cc8]/[0.20]"
          />
        </svg>
      </div>

      {/* Cluster 3: Lower-Right (#team / #contact flank) - 45° Angled Strokes */}
      <div className="absolute top-[72%] right-[2%] xl:right-[6%] w-[340px] h-[340px]">
        <svg viewBox="0 0 340 340" fill="none" className="w-full h-full">
          <line
            x1="30"
            y1="50"
            x2="290"
            y2="310"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="70"
            y1="40"
            x2="320"
            y2="290"
            strokeWidth="1.75"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="110"
            y1="30"
            x2="330"
            y2="250"
            strokeWidth="1.5"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          {/* Violet Accent Stroke */}
          <line
            x1="15"
            y1="95"
            x2="235"
            y2="315"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="stroke-[#6b8cc8]/[0.15] dark:stroke-[#6b8cc8]/[0.20]"
          />
        </svg>
      </div>

      {/* Cluster 4: Bottom-Left Ambient Technical Line Grid */}
      <div className="absolute top-[88%] left-[4%] w-[260px] h-[260px]">
        <svg viewBox="0 0 260 260" fill="none" className="w-full h-full">
          <line
            x1="20"
            y1="240"
            x2="240"
            y2="20"
            strokeWidth="1.75"
            strokeDasharray="6 8"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="60"
            y1="250"
            x2="250"
            y2="60"
            strokeWidth="1.5"
            className="stroke-[#6b8cc8]/[0.18] dark:stroke-[#6b8cc8]/[0.25]"
          />
          <line
            x1="10"
            y1="190"
            x2="190"
            y2="10"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="stroke-[#6b8cc8]/[0.15] dark:stroke-[#6b8cc8]/[0.20]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SINUSOIDAL FREQUENCY WAVE RIBBONS (SSVEP NEURAL SYNC MOTIF)           */}
      {/* ========================================================================= */}
      {/* Sine Wave Ribbon 1: Sweeping across upper-to-mid section (Teal Wave #4cb3a6 / #4cb3a6) */}
      <div className="absolute top-[22%] left-0 w-full h-[180px] overflow-hidden">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          fill="none"
          className="w-full h-full stroke-[#4cb3a6]/[0.20] dark:stroke-[#4cb3a6]/[0.25]"
        >
          {/* Primary Harmonic SSVEP Sine Curve */}
          <path
            d="M 0 90 C 180 20, 270 20, 450 90 C 630 160, 720 160, 900 90 C 1080 20, 1170 20, 1350 90 C 1395 107, 1420 112, 1440 115"
            strokeWidth="1.8"
          />
          {/* Secondary Harmonic Out-of-Phase Ribbon with Dashes */}
          <path
            d="M 0 105 C 180 35, 270 35, 450 105 C 630 175, 720 175, 900 105 C 1080 35, 1170 35, 1350 105 C 1395 122, 1420 127, 1440 130"
            strokeWidth="1.4"
            strokeDasharray="6 8"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Sine Wave Ribbon 2: Sweeping across lower-mid section (Teal Wave #4cb3a6 / #4cb3a6) */}
      <div className="absolute top-[62%] left-0 w-full h-[180px] overflow-hidden">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          fill="none"
          className="w-full h-full stroke-[#4cb3a6]/[0.20] dark:stroke-[#4cb3a6]/[0.25]"
        >
          {/* Reverse Harmonic Sine Wave */}
          <path
            d="M 0 80 C 160 150, 260 150, 440 80 C 620 10, 720 10, 900 80 C 1080 150, 1180 150, 1360 80 C 1400 65, 1425 60, 1440 55"
            strokeWidth="1.8"
          />
          {/* Paired Fine Guide Wave */}
          <path
            d="M 0 65 C 160 135, 260 135, 440 65 C 620 -5, 720 -5, 900 65 C 1080 135, 1180 135, 1360 65 C 1400 50, 1425 45, 1440 40"
            strokeWidth="1.2"
            strokeDasharray="8 6"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}

export default TechnicalVectorCanvas;
