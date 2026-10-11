import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "What is Dhizar, and how does this BCI neural controller work?",
    answer:
      "Dhizar is the world's first occipital BCI (Brain-Computer Interface) input peripheral engineered specifically for gaming and interactive software. By capturing high-frequency neural bio-potentials and gaze intention from non-invasive scalp sensors, Dhizar converts human intent directly into low-latency digital inputs—bypassing physical button travel time."
  },
  {
    question: "How does Dhizar achieve near-zero input latency compared to mechanical controllers?",
    answer:
      "Traditional mechanical input requires visual recognition, motor-cortex nerve impulses, muscle contraction, and key activation (often taking 150ms–250ms). Dhizar decodes intention at the neural and occipital processing level on a custom low-power edge processor, triggering input states within sub-millisecond intervals before physical actuation completes."
  },
  {
    question: "Is Dhizar safe to wear, and does it require surgical implants?",
    answer:
      "Yes, 100% safe and completely non-invasive. Dhizar requires zero surgery or implants. It utilizes passive, dry-contact electro-conductive sensors resting comfortably along the back of the head (occipital and parietal regions). The device only reads naturally emitted microvolt brain potentials—it never transmits electrical current into the brain."
  },
  {
    question: "Is raw neural and brainwave data stored in the cloud?",
    answer:
      "No. Dhizar enforces a strict local-first privacy architecture. All raw EEG voltage signals and spatial calibration maps are processed and stored locally on your machine with AES-256 encryption. Only abstracted game controller signals (axes, button presses) are passed to applications."
  },
  {
    question: "Which platforms, games, and game engines are supported?",
    answer:
      "Dhizar interfaces with PC (Windows/Linux) as a standard XInput / DirectInput HID device out of the box, making it compatible with any game. Furthermore, we provide native SDKs and calibration plugins for Unreal Engine, Unity, and SteamVR for developers building bespoke gaze-driven neural gameplay mechanics."
  },
  {
    question: "How can developers and studios get early Dev Kit hardware access?",
    answer:
      "Game studios, esports teams, and research labs can apply for our closed Alpha/Beta Hardware Developer Kit program directly through the Contact section above or by reaching out to our developer relations team."
  }
];

// Structured Data Schema for SEO / AEO / GEO crawlers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export function FAQ({ id = "faq" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id={id} className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-12 lg:px-24">
      {/* Inject JSON-LD for Search Bots & AI Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-cyan-400 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-3">
            Questions & Insights
          </p>
          <h2 className="text-[clamp(1.65rem,6.5vw,3rem)] sm:text-5xl font-light tracking-tight text-white font-serif leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-[clamp(0.85rem,3.4vw,1rem)] sm:text-base max-w-xl mx-auto px-1">
            Everything you need to know about Dhizar neural latency, hardware safety, developer SDKs, and local-first data privacy.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-inset"
                >
                  <span className="text-base sm:text-lg font-medium text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-cyan-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-500/10 border-cyan-400/40" : "bg-white/5"
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
