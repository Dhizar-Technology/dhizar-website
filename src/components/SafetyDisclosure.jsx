import React from 'react';
import { AlertTriangle, ShieldCheck, FileText } from 'lucide-react';

export const SafetyDisclosure = () => {
  return (
    <section id="safety" className="py-20 bg-white dark:bg-depth border-t border-black/[0.08] dark:border-border-subtle relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Strict Mandatory Epilepsy Disclosure Box */}
        <div className="rounded-2xl p-8 border border-warning/40 bg-[#780606]/[0.06] dark:bg-warning-surface shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-warning/20 border border-warning flex items-center justify-center shrink-0 text-warning shadow-sm">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-warning font-semibold block mb-1">
                  MANDATORY SAFETY DISCLOSURE · PHOTOSENSITIVE WARNING
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0e1b33] dark:text-content-primary transition-colors duration-300">
                  Photosensitive Epilepsy &amp; Visual Flicker Advisory
                </h3>
              </div>

              <p className="font-sans text-sm text-[#475569] dark:text-content-secondary leading-relaxed transition-colors duration-300">
                Dhizar Occipital Interface operates via Steady-State Visually Evoked Potentials (SSVEP). In-game targeting reticles and stimulus markers modulate within the <strong className="text-[#0e1b33] dark:text-content-primary">8.0 Hz – 20.0 Hz</strong> frequency window. A very small percentage of individuals may experience epileptic seizures or blackouts when exposed to certain flashing visual patterns or lights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-white/80 dark:bg-void/70 border border-black/[0.08] dark:border-border-subtle shadow-sm dark:shadow-none transition-colors duration-300">
                  <span className="font-mono text-xs text-warning font-semibold block mb-1">
                    CONTRAINDICATION
                  </span>
                  <p className="text-xs text-[#475569] dark:text-content-secondary leading-normal">
                    Do not use this device if you have a personal or family history of photosensitive epilepsy, seizures, or unverified neurological conditions.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white/80 dark:bg-void/70 border border-black/[0.08] dark:border-border-subtle shadow-sm dark:shadow-none transition-colors duration-300">
                  <span className="font-mono text-xs text-sync-teal font-semibold block mb-1">
                    INTEGRATED SAFETY PROTOCOL
                  </span>
                  <p className="text-xs text-[#475569] dark:text-content-secondary leading-normal">
                    Dhizar drivers include automated high-frequency harmonic shifting (modulating above 30 Hz where photoreceptor entrainment carries near-zero seizure risk).
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-warning/20 text-xs font-mono text-[#94a3b8] dark:text-content-muted">
                <div className="flex items-center gap-2 text-[#475569] dark:text-content-secondary">
                  <ShieldCheck className="w-4 h-4 text-warning" />
                  <span>Compliant with IEEE 1789-2015 Optical Flicker Guidelines</span>
                </div>
                <a
                  href="#protocol-pdf"
                  className="text-warning hover:underline flex items-center gap-1 font-semibold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download Complete Clinical Safety Protocol (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyDisclosure;
