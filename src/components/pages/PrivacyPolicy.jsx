import React, { useEffect } from "react";

export function PrivacyPolicy({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-200 selection:bg-[#a71616] selection:text-white font-sans relative py-16 px-6 sm:px-12 lg:px-24">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 30%, #1D2D4C 0%, #152238 50%, #0B1320 85%, #070D18 100%)",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#3B7BA4]/15 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <button
          type="button"
          onClick={onBack || (() => window.history.back())}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-white transition-all text-sm font-medium backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Home
        </button>

        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-2">Dhizar Technology Legal</p>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-serif">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-400">Effective Date: October 2026 • Hardware & Platform Telemetry Compliance</p>
        </header>

        <article className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">1. Executive Overview</h2>
            <p>
              Dhizar Technology ("Dhizar", "we", "our") develops next-generation Brain-Computer Interface (BCI) input controllers. We are committed to absolute user autonomy and strict neural privacy. This document outlines how neural telemetry, calibration matrices, and device analytics are handled across our hardware and web portals.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">2. Neural Data Architecture & Local-First Isolation</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Zero Cloud Waveform Streaming:</strong> Raw high-frequency EEG/neural voltage streams captured via occipital and parietal sensors are processed entirely on-device via our local signal processor. Raw bio-potentials are never automatically transmitted to external cloud servers.</li>
              <li><strong>Abstracted Input Events:</strong> Games and applications only receive standard input signals (e.g., axes, gaze intent triggers). Third-party game developers have zero access to raw biometric data streams.</li>
              <li><strong>Local Encryption:</strong> Scalp impedance values and individualized calibration baselines remain encrypted on local storage using standard AES-256 protocols.</li>
            </ul>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">3. Diagnostics & Telemetry</h2>
            <p>
              We may process hardware telemetry exclusively to monitor controller stability:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-300">
              <li>Electrode impedance stability and signal-to-noise ratio (SNR) indicators.</li>
              <li>Firmware latency, battery health, and frame timing metrics.</li>
              <li>Account information for developer kit requests and pre-orders (email, developer organization, shipping address).</li>
            </ul>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">4. Zero-Monetization Pledge</h2>
            <p>
              We do not sell, rent, lease, or monetize neural telemetry or biometric indicators to data brokers, advertising platforms, or third-party behavioral networks.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-medium text-white mb-3">5. User Control & Rights</h2>
            <p>
              You maintain total control over your calibration profile. Users may flush local calibration files or submit data erasure requests at any time by contacting our legal desk at <span className="text-cyan-400">privacy@dhizar.com</span>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
