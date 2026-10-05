// Text Carousel — Originkit
"use client";

import * as React from "react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

type FontStyle = React.CSSProperties;

type TransitionValue = {
  type?: string;
  duration?: number;
  delay?: number;
  ease?: string | number[];
  staggerChildren?: number;
};

type StaggerFrom = "first" | "last" | "center" | "random";
type SplitBy = "characters" | "words" | "lines";

type WordPart = {
  characters: string[];
  needsSpace: boolean;
};

export type RotatingTextProps = {
  prefix?: string;
  texts?: string[];
  font?: FontStyle;
  color?: string;
  prefixColor?: string;
  badgeBackground?: string;
  badgePaddingX?: number;
  badgePaddingY?: number;
  badgeRadius?: number;
  gap?: number;

  splitBy?: SplitBy;
  staggerFrom?: StaggerFrom;

  auto?: boolean;

  transition?: TransitionValue;
  className?: string;
  style?: React.CSSProperties;
};

const ROTATION_INTERVAL_MS = 2000;

const mapEase = (ease: TransitionValue["ease"]): string => {
  if (typeof ease !== "string") return "power2.out";

  const easeMap: Record<string, string> = {
    linear: "none",
    easeIn: "power2.in",
    easeOut: "power2.out",
    easeInOut: "power2.inOut",
    circIn: "circ.in",
    circOut: "circ.out",
    circInOut: "circ.inOut",
    backIn: "back.in",
    backOut: "back.out(1.7)",
    backInOut: "back.inOut",
    anticipate: "back.out(1.7)",
  };

  return easeMap[ease] ?? ease;
};

const mapStaggerFrom = (
  staggerFrom: StaggerFrom
): "start" | "end" | "center" | "random" => {
  if (staggerFrom === "first") return "start";
  if (staggerFrom === "last") return "end";
  return staggerFrom;
};

const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (part) => part.segment);
  }
  return Array.from(text);
};

const buildElements = (text: string, splitBy: SplitBy): WordPart[] => {
  if (splitBy === "characters") {
    const words = text.split(" ");
    return words.map((word, i) => ({
      characters: splitIntoCharacters(word),
      needsSpace: i !== words.length - 1,
    }));
  }

  if (splitBy === "words") {
    return text.split(" ").map((word, i, arr) => ({
      characters: [word],
      needsSpace: i !== arr.length - 1,
    }));
  }

  return text.split("\n").map((line, i, arr) => ({
    characters: [line],
    needsSpace: i !== arr.length - 1,
  }));
};

function __OriginkitBase_RotatingText({
  prefix = "Dhizar",
  texts = ["SEE IT", "TRIGGER IT"],
  font = {
    fontFamily: "Syne, Inter, system-ui, sans-serif",
    fontSize: "clamp(36px, 7vw, 92px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: "1.1em",
    textAlign: "center",
  },
  color = "#ffffff",
  prefixColor = "#F1F5F9",
  badgeBackground = "#780606",
  badgePaddingX = 22,
  badgePaddingY = 6,
  badgeRadius = 10,
  gap = 16,

  splitBy = "characters",
  staggerFrom = "first",

  auto = true,

  transition = {
    type: "tween",
    duration: 0.45,
    delay: 0,
    ease: "easeOut",
    staggerChildren: 0.03,
  },
  className = "",
  style,
}: RotatingTextProps) {
  const safeTexts =
    texts && texts.length > 0
      ? texts
      : ["SEE IT", "TRIGGER IT"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const contentRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef(false);
  const isFirstRender = useRef(true);
  const hasSizedBadge = useRef(false);

  const elements = useMemo(
    () => buildElements(safeTexts[currentTextIndex] ?? "", splitBy),
    [safeTexts, currentTextIndex, splitBy]
  );

  useEffect(() => {
    if (currentTextIndex > safeTexts.length - 1) {
      setCurrentTextIndex(0);
    }
  }, [safeTexts.length, currentTextIndex]);

  useEffect(() => {
    if (!auto || safeTexts.length <= 1) return;

    const getNextIndex = (index: number) => {
      if (index >= safeTexts.length - 1) return 0;
      return index + 1;
    };

    const intervalId = window.setInterval(() => {
      if (isAnimating.current) return;

      const content = contentRef.current;
      if (!content) return;

      const chars = content.querySelectorAll(".char");
      if (chars.length === 0) {
        setCurrentTextIndex((index) => getNextIndex(index));
        return;
      }

      const duration = transition.duration ?? 0.45;
      const staggerEach = transition.staggerChildren ?? 0.03;
      const ease = mapEase(transition.ease);

      isAnimating.current = true;
      gsap.killTweensOf(chars);

      gsap.to(chars, {
        yPercent: -120,
        opacity: 0,
        duration,
        stagger: {
          each: staggerEach,
          from: mapStaggerFrom(staggerFrom),
        },
        ease,
        onComplete: () => {
          setCurrentTextIndex((index) => getNextIndex(index));
        },
      });
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [auto, safeTexts.length, staggerFrom, transition]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const chars = content.querySelectorAll(".char");
    if (chars.length === 0) {
      isAnimating.current = false;
      return;
    }

    gsap.killTweensOf(chars);

    const duration = transition.duration ?? 0.45;
    const delay = isFirstRender.current ? (transition.delay ?? 0) : 0;
    const staggerEach = transition.staggerChildren ?? 0.03;
    const ease = mapEase(transition.ease);

    isFirstRender.current = false;
    isAnimating.current = true;

    gsap.fromTo(
      chars,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration,
        delay,
        stagger: {
          each: staggerEach,
          from: mapStaggerFrom(staggerFrom),
        },
        ease,
        onComplete: () => {
          isAnimating.current = false;
        },
      }
    );

    return () => {
      gsap.killTweensOf(chars);
    };
  }, [currentTextIndex, elements, staggerFrom, transition]);

  useLayoutEffect(() => {
    const badge = badgeRef.current;
    const content = contentRef.current;
    if (!badge || !content) return;

    const nextWidth = Math.ceil(content.scrollWidth) + badgePaddingX * 2 + 4;
    const duration = transition.duration ?? 0.45;
    const ease = mapEase(transition.ease);

    gsap.killTweensOf(badge);

    if (!hasSizedBadge.current) {
      hasSizedBadge.current = true;
      gsap.set(badge, { width: nextWidth });
      return;
    }

    gsap.to(badge, {
      width: nextWidth,
      duration,
      ease,
    });
  }, [currentTextIndex, elements, badgePaddingX, transition]);

  const textAlign =
    (font.textAlign as React.CSSProperties["textAlign"]) ?? "center";
  const justifyContent =
    textAlign === "center"
      ? "center"
      : textAlign === "right" || textAlign === "end"
        ? "flex-end"
        : "flex-start";

  return (
    <span
      className={className}
      style={{
        ...font,
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent,
        flexWrap: "wrap",
        gap,
        textAlign,
        ...style,
      }}
    >
      {prefix ? (
        <span style={{ color: prefixColor, whiteSpace: "nowrap", flexShrink: 0 }}>
          {prefix}
        </span>
      ) : null}

      <span
        ref={badgeRef}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          verticalAlign: "middle",
          backgroundColor: badgeBackground,
          color,
          borderRadius: badgeRadius,
          paddingTop: badgePaddingY,
          paddingBottom: badgePaddingY,
          paddingLeft: badgePaddingX,
          paddingRight: badgePaddingX,
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          flexShrink: 0,
          boxShadow: "0 0 25px rgba(120, 6, 6, 0.45)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <span
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: 0,
          }}
        >
          {prefix ? `${prefix} ` : ""}
          {safeTexts[currentTextIndex]}
        </span>

        <span
          ref={contentRef}
          aria-hidden="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          {elements.map((wordObj, wordIndex) => (
            <span
              key={`${currentTextIndex}-${wordIndex}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              {wordObj.characters.map((char, charIndex) => (
                <span
                  key={`${currentTextIndex}-${wordIndex}-${charIndex}`}
                  className="char"
                  style={{
                    display: "inline-block",
                    willChange: "transform, opacity",
                    color: color || "#FFFFFF",
                    whiteSpace: "pre",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {wordObj.needsSpace ? (
                <span style={{ whiteSpace: "pre", display: "inline-block" }}> </span>
              ) : null}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

const __originkitPresetProps: RotatingTextProps = {
  prefix: "Dhizar",
  prefixColor: "#F1F5F9",
  color: "#FFFFFF",
  badgeBackground: "#780606",
  badgePaddingX: 24,
  badgePaddingY: 6,
  badgeRadius: 8,
  gap: 16,
  splitBy: "characters",
  staggerFrom: "first",
  auto: true,
  texts: ["SEE IT", "TRIGGER IT"],
};

export default function RotatingText(props: RotatingTextProps) {
  return (
    <__OriginkitBase_RotatingText
      {...__originkitPresetProps}
      {...props}
    />
  );
}

export { RotatingText, RotatingText as TextCarousel };
