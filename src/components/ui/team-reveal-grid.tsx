"use client";

import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export interface TeamRevealMember {
  /** Stable identifier used by the controlled active state. */
  id: string;
  name: string;
  role: string;
  expertise: string;
  /** Any browser-readable image URL. When omitted, an initial-based portrait is rendered. */
  image?: string;
  imageAlt?: string;
  /** CSS object-position value used when an image is supplied. */
  imagePosition?: string;
  /** Accent shown while the member is active. */
  accent?: string;
  accentColor?: string;
  color?: string;
}

export interface TeamRevealGridProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "title"> {
  eyebrow?: string;
  title?: string;
  description?: string;
  titleUnderlineColor?: string;
  defaultStrokeColor?: string;
  members?: readonly TeamRevealMember[];
  /** Controlled active member id. */
  activeMemberId?: string | null;
  /** Initial active member id when uncontrolled. Defaults to the first member. */
  defaultActiveMemberId?: string | null;
  onActiveMemberChange?: (memberId: string | null) => void;
  /** Automatically moves the reveal between members when idle. */
  autoPlay?: boolean;
  rotationInterval?: number;
  children?: React.ReactNode;
}

export const DHIZAR_TEAM_MEMBERS: readonly TeamRevealMember[] = [
  {
    id: "priyanshu",
    name: "Priyanshu",
    role: "Founder",
    expertise: "Leads company vision, capital strategy, and overall operations for Dhizar.",
    image: "/assets/priyanshu.png",
    accent: "#4cb3a6", // Telemetry Teal
  },
  {
    id: "jaideep-chouhan",
    name: "Jaideep Chouhan",
    role: "Tech Lead (CTO)",
    expertise: "Drives end-to-end technical architecture, systems integration, and engineering execution.",
    image: "/assets/jaideep.png",
    accent: "#6b8cc8", // Telemetry Blue
  },
  {
    id: "jai-bugra",
    name: "Jai Bugra",
    role: "Embedded Engineer",
    expertise: "Specializes in hardware firmware, single-channel EEG analog front-ends, and signal acquisition.",
    image: "/assets/jai.png",
    accent: "#780606", // Master Red Accent
  },
  {
    id: "tannu",
    name: "Tannu",
    role: "Researcher",
    expertise: "Focuses on SSVEP neuro-paradigms, occipital EEG signal dynamics, and scientific validation.",
    image: "/assets/tannu.png",
    accent: "#4cb3a6", // Telemetry Teal
  },
  {
    id: "jaibhagwan",
    name: "Jaibhagwan",
    role: "Software Engineer",
    expertise: "Develops the classification pipeline, real-time testing suites, and web applications.",
    image: "/assets/jaibhagwan.png",
    accent: "#6b8cc8", // Telemetry Blue
  },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  }
  return (parts[0]?.slice(0, 2) || "D").toUpperCase();
}

function Portrait({ member, active }: { member: TeamRevealMember; active: boolean }) {
  const [imgError, setImgError] = useState(false);
  const style = {
    "--team-accent": member.accent ?? "#4cb3a6",
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={cn(
        "relative h-full w-full overflow-hidden transition-colors duration-500",
        active &&
          "bg-[color-mix(in_srgb,var(--team-accent)_10%,white)] dark:bg-[color-mix(in_srgb,var(--team-accent)_13%,#0a0a0a)]",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 opacity-55 transition-opacity duration-500",
          active && "opacity-100",
        )}
        style={{
          background:
            "radial-gradient(circle at 68% 20%, color-mix(in srgb, var(--team-accent) 36%, transparent), transparent 36%), radial-gradient(circle at 22% 82%, color-mix(in srgb, var(--team-accent) 16%, transparent), transparent 42%)",
        }}
      />

      {member.image && !imgError ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out",
            active
              ? "grayscale-0 scale-105 filter drop-shadow-md"
              : "grayscale contrast-125 opacity-70 scale-100",
          )}
          style={{ objectPosition: member.imagePosition ?? "center 20%" }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden bg-[#0e1b33]">
          <div
            aria-hidden="true"
            className={cn(
              "absolute top-[13%] aspect-square h-[36%] rounded-full bg-neutral-300 transition-[transform,background-color] duration-500 dark:bg-neutral-700",
              active && "-translate-y-0.5 scale-105 bg-[var(--team-accent)]",
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "absolute -bottom-[12%] h-[66%] w-[82%] rounded-t-[48%] bg-neutral-300/90 transition-[transform,background-color] duration-500 dark:bg-neutral-700/90",
              active && "scale-105 bg-[var(--team-accent)]",
            )}
          />
          <span className="relative z-10 mb-[18%] text-2xl font-semibold tracking-[-0.08em] text-white mix-blend-difference">
            {initials(member.name)}
          </span>
        </div>
      )}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500",
          active ? "opacity-90" : "opacity-40",
        )}
      />
    </div>
  );
}

export function TeamRevealGrid({
  eyebrow = "TEAM & PARTNERSHIPS",
  title = "Small team, deeply focused.",
  description = "Building the future of hands-free neural gaming input through focused, multidisciplinary execution.",
  titleUnderlineColor,
  defaultStrokeColor = "#4cb3a6",
  members = DHIZAR_TEAM_MEMBERS,
  activeMemberId,
  defaultActiveMemberId = null,
  onActiveMemberChange,
  autoPlay = false,
  rotationInterval = 2800,
  className,
  children,
  ...props
}: TeamRevealGridProps) {
  const [internalActiveId, setInternalActiveId] = useState<string | null>(
    defaultActiveMemberId ?? null,
  );
  const [interacting, setInteracting] = useState(false);
  const isControlled = activeMemberId !== undefined;

  const memberIds = useMemo(() => new Set(members.map((member) => member.id)), [members]);
  const requestedActiveId = isControlled ? activeMemberId : internalActiveId;
  const resolvedActiveId =
    requestedActiveId && memberIds.has(requestedActiveId) ? requestedActiveId : null;

  const activeMember = useMemo(
    () => (resolvedActiveId ? members.find((m) => m.id === resolvedActiveId) ?? null : null),
    [members, resolvedActiveId],
  );

  const activeStrokeColor =
    titleUnderlineColor ||
    activeMember?.accentColor ||
    activeMember?.accent ||
    activeMember?.color ||
    defaultStrokeColor;

  const selectMember = useCallback(
    (memberId: string | null) => {
      if (!isControlled) setInternalActiveId(memberId);
      onActiveMemberChange?.(memberId);
    },
    [isControlled, onActiveMemberChange],
  );

  useEffect(() => {
    if (!autoPlay || interacting || members.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      const currentIndex = members.findIndex((member) => member.id === resolvedActiveId);
      const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % members.length;
      selectMember(members[nextIndex]?.id ?? null);
    }, Math.max(rotationInterval, 1200));

    return () => window.clearInterval(timer);
  }, [autoPlay, interacting, members, resolvedActiveId, rotationInterval, selectMember]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-transparent text-[#0e1b33] transition-colors duration-300",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.075]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, currentColor 0.7px, transparent 0.8px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8">
        <header className="mx-auto mb-6 sm:mb-8 max-w-xl text-center">
          {eyebrow ? (
            <p className="mb-3 inline-flex px-3 py-1 rounded-full bg-[#cddaf0] text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-[#0e1b33]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0e1b33]">
            <span className="relative inline-block">
              <span className="relative z-10">{title}</span>
              <svg
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-3 left-0 h-3 w-full sm:-bottom-4 sm:h-4 transition-colors duration-500",
                  titleUnderlineColor,
                )}
                style={{
                  color: activeStrokeColor,
                  stroke: activeStrokeColor,
                  transition: "color 500ms ease, stroke 500ms ease",
                }}
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 12 Q35 2 95 10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0 1;1 0"
                    dur="700ms"
                    fill="freeze"
                  />
                </path>
                <path
                  d="M5 15 Q40 18 98 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0 1;1 0"
                    dur="800ms"
                    begin="120ms"
                    fill="freeze"
                  />
                </path>
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-[#1d2d4c]">
            {description}
          </p>
        </header>

        <ul
          onMouseLeave={() => {
            setInteracting(false);
            if (defaultActiveMemberId === null) {
              selectMember(null);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") {
              setInteracting(false);
              if (defaultActiveMemberId === null) {
                selectMember(null);
              }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start justify-center w-full"
        >
          {members.map((member) => {
            const active = member.id === resolvedActiveId;
            const detailsId = `team-member-${member.id}-details`;

            return (
              <li
                key={member.id}
                className="w-full max-w-[200px] lg:max-w-[220px] mx-auto flex justify-center"
              >
                <button
                  type="button"
                  aria-expanded={active}
                  aria-controls={detailsId}
                  onClick={() => selectMember(active ? null : member.id)}
                  onMouseEnter={() => {
                    setInteracting(true);
                    selectMember(member.id);
                  }}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setInteracting(true);
                      selectMember(member.id);
                    }
                  }}
                  onFocus={() => {
                    setInteracting(true);
                    selectMember(member.id);
                  }}
                  onBlur={() => {
                    setInteracting(false);
                    if (defaultActiveMemberId === null) {
                      selectMember(null);
                    }
                  }}
                  className="group block w-full max-w-[200px] lg:max-w-[220px] mx-auto text-left outline-none cursor-pointer focus:outline-none"
                >
                  <div
                    style={{ "--team-accent": member.accent ?? "#4cb3a6" } as React.CSSProperties}
                    className={cn(
                      "relative flex flex-col justify-between w-full max-w-[200px] lg:max-w-[220px] mx-auto aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.4)] shadow-[0_12px_32px_rgba(14,27,51,0.08)] p-2.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                      active
                        ? "-translate-y-1.5 border-[var(--team-accent)] shadow-[0_16px_36px_-12px_color-mix(in_srgb,var(--team-accent)_50%,transparent)] ring-1 ring-[var(--team-accent)]/50"
                        : "border-[#e2e8f0] hover:border-[#9fb7e0] shadow-[0_12px_32px_rgba(14,27,51,0.08)]",
                      "focus-visible:ring-2 focus-visible:ring-[var(--team-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                    )}
                  >
                    {/* Portrait Box */}
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#e8eef9]">
                      <Portrait member={member} active={active} />

                      {/* Active card displays role expertise text smoothly overlaying the card */}
                      <div
                        id={detailsId}
                        className={cn(
                          "absolute inset-x-2 bottom-2 z-10 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 transition-all duration-500 ease-out motion-reduce:transition-none",
                          active
                            ? "translate-y-0 opacity-100"
                            : "translate-y-3 opacity-0 pointer-events-none",
                        )}
                      >
                        <p className="line-clamp-3 text-[11px] leading-[1.4] text-white/95 font-sans font-normal">
                          {member.expertise}
                        </p>
                      </div>
                    </div>

                    {/* Name and Role text */}
                    <div className="px-1 pt-2 pb-0.5 text-center">
                      <h3 className="truncate text-sm sm:text-base font-semibold tracking-tight text-[#0e1b33]">
                        {member.name}
                      </h3>
                      <p
                        className={cn(
                          "mt-0.5 truncate text-xs font-mono transition-colors duration-300",
                          active ? "text-[var(--team-accent)] font-medium" : "text-[#475569]",
                        )}
                        style={{ "--team-accent": member.accent ?? "#4cb3a6" } as React.CSSProperties}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {children}
      </div>
    </div>
  );
}

export default TeamRevealGrid;
