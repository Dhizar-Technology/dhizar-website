import React, { useState } from "react";

// Crisp vector SVG brand icons scaled for enlarged dock keys
const GithubIcon = ({ className = "w-7 h-7 sm:w-8 sm:h-8 text-black" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const TwitterIcon = ({ className = "w-7 h-7 sm:w-8 sm:h-8 text-black" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-7 h-7 sm:w-8 sm:h-8 text-black" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = ({ className = "w-7 h-7 sm:w-8 sm:h-8 text-black" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ className = "w-7 h-7 sm:w-8 sm:h-8 text-black" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const MailIcon = ({ className = "w-7 h-7 sm:w-8 sm:h-8 text-black" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const DiscordIcon = ({ className = "w-7 h-7 sm:w-8 sm:h-8 text-black" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export interface ContactKey {
  letter: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const contactKeys: ContactKey[] = [
  { letter: "C", name: "Github", href: "https://github.com", icon: GithubIcon },
  { letter: "O", name: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { letter: "N", name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { letter: "T", name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { letter: "A", name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { letter: "C", name: "Email", href: "mailto:contact@dhizar.com", icon: MailIcon },
  { letter: "T", name: "Discord", href: "https://discord.com", icon: DiscordIcon },
];

export function ContactDock({
  keys = contactKeys,
  className = "",
}: {
  keys?: ContactKey[];
  className?: string;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      className={`bg-[#e8eef9] border border-[rgba(14,27,51,0.12)] p-2 sm:p-4 rounded-2xl sm:rounded-3xl flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-4 shadow-[0_12px_32px_rgba(14,27,51,0.08)] relative max-w-full ${className}`}
    >
      {keys.map((item, idx) => {
        const isHovered = hoveredIdx === idx;
        const Icon = item.icon;
        const isExternal = item.href.startsWith("http");

        return (
          <div
            key={`${item.letter}-${idx}`}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Floating Tooltip Badge with Micro Beak */}
            <div
              className={`absolute -top-11 sm:-top-14 bottom-full mb-2 sm:mb-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-150 ease-out ${isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
                }`}
            >
              <div className="relative bg-[#0e1b33] text-white text-[11px] sm:text-sm font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg shadow-md whitespace-nowrap">
                {item.name}
                {/* Micro pointer beak underneath pointing down to the key */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#0e1b33]" />
              </div>
            </div>

            {/* Interactive 3D Flip Key (Native CSS hardware-accelerated 3D transform) */}
            <a
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onFocus={() => setHoveredIdx(idx)}
              onBlur={() => setHoveredIdx(null)}
              title={`${item.letter} — ${item.name}`}
              aria-label={isExternal ? `${item.name} (${item.letter}) (opens in new tab)` : `${item.name} (${item.letter})`}
              className="block outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D18] rounded-xl sm:rounded-2xl [perspective:1000px]"
            >
              <div
                className={`relative w-9 h-9 sm:w-[72px] sm:h-[72px] md:w-[78px] md:h-[78px] rounded-xl sm:rounded-2xl cursor-pointer select-none [transform-style:preserve-3d] transition-transform duration-200 ease-out ${isHovered ? "[transform:rotateY(180deg)] scale-105" : "[transform:rotateY(0deg)]"
                  }`}
              >
                {/* Default Face (Letter): Matte dark slate/navy */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white border border-[#e2e8f0] text-[#0e1b33] hover:border-[#9fb7e0] font-mono font-bold text-sm sm:text-2xl md:text-3xl tracking-tight shadow-sm transition-all duration-150 ease-out [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                >
                  {item.letter}
                </div>

                {/* Active / Hovered Face (Flipped State): Solid Crisp White with Black Icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#0e1b33] text-white shadow-[0_8px_20px_rgba(14,27,51,0.25)] transition-all duration-150 ease-out [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                >
                  <Icon className="w-4 h-4 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white transition-transform duration-100 ease-out" />
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
export default ContactDock;
