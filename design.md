# design.md — Website Design System

> **Vibe in one line:** a calm sky-blue, confident, editorial-tech website. Big friendly headlines, floating white cards, one sharp red accent. Techy because of structure and precision, not because of neon or glitch.

---

## 1. Design Principles

1. **Clean first, techy second.** Tech feel comes from grid discipline, small mono labels, crisp borders and precise spacing. Never from glows, scanlines, neon or glitch effects.
2. **Big type, big air.** Headlines are oversized and tight. Sections breathe (96–160px vertical padding on desktop).
3. **Floating cards on a calm background.** Content lives in white/soft cards with large radius and soft shadow, sitting on the blue sky-like background. Some cards can be slightly rotated (±2–4°) for playfulness.
4. **One accent.** Red is the only loud colour. Everything else is blue + neutral.
5. **Understandable at a glance.** One idea per section, short copy, clear hierarchy, obvious CTA.

### Inspiration (from the screen recording)
Taken: oversized bold headline, sky/cloud hero feeling, floating rounded cards with soft shadows, scattered/tilted card layout, alternating light and dark sections, giant wordmark in footer, rounded containers.
**Not taken:** lime/neon colours and the loud collage look. We keep our own blue + red palette.

---

## 2. Colour System

Source palette: `#1d2d4c` primary, monochromatic blue scale, red complementary. Teal and amber exist in the board but are used **only for status colours**, not branding.

### 2.1 Core Blue Scale (Monochromatic)

| Token | Hex | Use |
|---|---|---|
| `--blue-950` | `#0e1b33` | Darkest. Text on light mode, deepest dark backgrounds |
| `--blue-900` | `#162443` | Dark mode alt section background |
| `--blue-800` | `#1d2d4c` | **Primary / Dark mode page background** |
| `--blue-700` | `#2a3e6b` | Dark mode cards / raised surfaces |
| `--blue-600` | `#3f5a93` | Dark mode borders, hover surfaces, icons |
| `--blue-400` | `#6b8cc8` | **Light mode Base: hero and main theme background** |
| `--blue-300` | `#9fb7e0` | **Light mode Light: soft sky gradient / feature bands** |
| `--blue-200` | `#cddaf0` | Subtle fills, tags, dividers on light |
| `--blue-100` | `#e8eef9` | Lightest tint: reading sections in light mode |

### 2.2 Accent (Complementary Red): use Base / Darker only

| Token | Hex | Use |
|---|---|---|
| `--red-600` | `#a71616` | **Accent / primary CTA fill** |
| `--red-800` | `#780606` | CTA hover / pressed, strong emphasis |
| `--red-300` | `#f4b1b1` | Only for soft highlight chips on light mode (optional) |

Rule: red appears on **CTA buttons, active indicators, one highlight word in a headline, small badges.** Never as a section background. Never large red areas.

### 2.3 Neutrals

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0f1115` | Strongest text (rare) |
| `--slate-600` | `#475569` | Secondary text on light |
| `--slate-400` | `#94a3b8` | Muted text / placeholders |
| `--border-light` | `#e2e8f0` | Borders on light surfaces |
| `--surface-light` | `#f1f5f9` | Neutral surface on light |
| `--white` | `#ffffff` | Cards on light mode |

### 2.4 Status (functional only)

| Token | Hex |
|---|---|
| `--success` | `#4cb3a6` (teal) |
| `--warning` | `#f4b400` (amber) |
| `--danger` | `#d32f2f` |
| `--info` | `#6b8cc8` |

### 2.5 Semantic Tokens

**Light mode (default)**

| Token | Value |
|---|---|
| `--bg-page` | `--blue-100` `#e8eef9` |
| `--bg-hero` | gradient `--blue-300` → `--blue-400` (top to bottom) |
| `--bg-band` | `--blue-300` `#9fb7e0` (feature bands) |
| `--bg-card` | `#ffffff` |
| `--text-strong` | `--blue-950` `#0e1b33` |
| `--text-body` | `#1d2d4c` |
| `--text-muted` | `--slate-600` |
| `--border` | `rgba(14,27,51,0.10)` |
| `--accent` | `--red-600` |
| `--accent-hover` | `--red-800` |

**Dark mode**

| Token | Value |
|---|---|
| `--bg-page` | `--blue-800` `#1d2d4c` |
| `--bg-alt` | `--blue-900` `#162443` |
| `--bg-card` | `--blue-700` `#2a3e6b` |
| `--text-strong` | `#ffffff` |
| `--text-body` | `#dbe8f8` |
| `--text-muted` | `#9fb7e0` |
| `--border` | `rgba(159,183,224,0.18)` |
| `--accent` | `--red-600` (hover `--red-800`) |

### 2.6 Contrast Check (WCAG, verified)

| Pair | Ratio | Result |
|---|---|---|
| `#0e1b33` on `#6b8cc8` | 5.1 | AA pass |
| `#0e1b33` on `#9fb7e0` | 8.4 | AAA pass |
| `#0e1b33` on `#e8eef9` | 14.7 | AAA pass |
| `#ffffff` on `#a71616` | 7.6 | AAA pass (button text) |
| `#dbe8f8` on `#1d2d4c` | 11.0 | AAA pass |
| `#9fb7e0` on `#1d2d4c` | 6.7 | AA pass (muted text) |

**Warnings:**
- On `#6b8cc8` (Base) always use **dark** text `#0e1b33`. White text there is only about 3:1 and fails for body copy.
- Red `#a71616` text on `#9fb7e0` is about 3.7, so use it only for large text or icons, never for small body text on blue.

---

## 3. Typography

Deliberately **not** using the usual suspects (Inter, Poppins, Roboto, Space Grotesk, Orbitron, neon cyber fonts). All fonts below are free on Google Fonts.

| Role | Font | Why |
|---|---|---|
| **Display / Headings** | **Bricolage Grotesque** (600–800) | Chunky, characterful grotesk with personality. Gives the big confident headline feel from the inspiration, without looking cyberpunk |
| **Body / UI** | **Instrument Sans** (400, 500, 600) | Very clean, friendly and highly readable, slightly technical |
| **Labels / Code / Meta** | **Geist Mono** (400, 500) | Small techy touches only: eyebrows, tags, numbers, version labels |

Fallback stack:
```css
--font-display: "Bricolage Grotesque", "Helvetica Neue", Arial, sans-serif;
--font-body:    "Instrument Sans", "Helvetica Neue", Arial, sans-serif;
--font-mono:    "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;
```

### Type Scale (desktop → mobile)

| Style | Font | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Hero (H0) | Display | `clamp(56px, 9vw, 144px)` | 800 | 0.92 | -0.04em |
| H1 | Display | `clamp(40px, 6vw, 80px)` | 700 | 1.0 | -0.03em |
| H2 | Display | `clamp(32px, 4vw, 56px)` | 700 | 1.05 | -0.025em |
| H3 | Display | 28 / 24 | 600 | 1.15 | -0.02em |
| Body L | Body | 20 / 18 | 400 | 1.55 | 0 |
| Body | Body | 16 | 400 | 1.6 | 0 |
| Small | Body | 14 | 500 | 1.5 | 0 |
| Eyebrow / Label | Mono | 12 | 500 | 1.2 | +0.08em, UPPERCASE |

Rules:
- Max 2 weights per screen area. Headlines are bold and tight, body is regular and relaxed.
- Body text max width **62ch**.
- Headlines: sentence case or Title Case. All caps only for mono labels and the footer wordmark.
- One highlight word per hero headline can be coloured `--accent` (optional).

---

## 4. Layout and Spacing

- **Grid:** 12 columns desktop, 8 tablet, 4 mobile. Max content width `1280px`. Side padding 24px mobile / 40px tablet / 64px desktop.
- **Spacing scale (4px base):** `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160`
- **Section padding:** 96px mobile, 128–160px desktop.
- **Breakpoints:** `640 / 768 / 1024 / 1280 / 1536`.
- **Radius:**
  - `--r-sm: 8px` (inputs, chips)
  - `--r-md: 16px` (buttons, small cards)
  - `--r-lg: 24px` (cards)
  - `--r-xl: 36px` (big containers, hero panels)
  - `--r-pill: 999px` (buttons, tags, nav)
- **Borders:** 1px, always subtle (`--border`). No thick outlines.

### Elevation (soft, never harsh)
```css
--shadow-sm: 0 2px 8px rgba(14,27,51,.08);
--shadow-md: 0 12px 32px rgba(14,27,51,.14);
--shadow-lg: 0 28px 64px rgba(14,27,51,.22);
```
Dark mode uses the same shadows plus a 1px top-light border (`rgba(159,183,224,.18)`) instead of glow.

---

## 5. Components

### Navbar
- Floating pill, 64px tall, 16px from top, centred, max width 960px.
- Light mode: white at 80% opacity + backdrop blur 12px + `--shadow-sm`. Dark mode: `--blue-900` at 80% opacity.
- Left: logo. Centre: 4–5 links (Instrument Sans 500, 15px). Right: theme toggle + primary CTA.
- Active link: small red dot under it or pill background `--blue-200`.
- Mobile: logo + menu button that opens a full-screen sheet with big display-font links.

### Buttons
| Type | Style |
|---|---|
| **Primary** | Fill `--red-600`, text white, pill, height 52px, padding 0 28px, font 600. Hover: `--red-800` and lift 2px. Active: scale .98 |
| **Secondary** | Fill `--blue-950` (light mode) or white (dark mode), contrasting text, pill |
| **Ghost** | Transparent, 1px `--border`, hover fills `--blue-200` (light) or `--blue-700` (dark) |
| **Icon button** | 44×44 circle, ghost style |

Focus ring (all interactive): `outline: 3px solid #cddaf0; outline-offset: 3px` on dark, `#0e1b33` on light.
Minimum touch target 44×44px.

### Cards (hero component of this system)
- **Standard card:** `--bg-card`, radius 24px, padding 28–32px, `--shadow-md`, 1px border.
- **Floating card:** same as standard but with `transform: rotate(-3deg | 2deg)`, positioned slightly overlapping other elements. Use max 3 per section, only on desktop. On mobile, stack them without rotation.
- **Feature card:** icon in a 48px rounded square (`--blue-200` background, `--blue-800` icon), H3 title, 2-line description.
- **Testimonial card:** quote in Body L, avatar 40px, name + role in small. The testimonials section floats cards on the blue sky background, like the inspiration.
- Hover: lift 6px + `--shadow-lg`, 250ms ease-out.

### Hero
- Background: vertical gradient `#9fb7e0 → #6b8cc8` (light mode) or flat `#1d2d4c` with a very subtle radial `#2a3e6b` highlight (dark mode).
- Giant H0 headline, left aligned or centred, text colour `--blue-950` (light mode).
- Subtext Body L, max 52ch. Two buttons: Primary and Ghost.
- 1–2 floating cards (product preview, stat, or testimonial) overlapping the hero edge.
- Optional soft cloud / blur blobs in white at 20–30% opacity for the sky feeling. Keep them subtle.

### Section Patterns
1. **Hero** (sky blue)
2. **Logos / trust strip** (page bg, muted grayscale logos)
3. **Services / Features** (3–4 floating cards on `--blue-100`)
4. **Showcase / Work** (large rounded image tiles, 2-column grid, radius 36)
5. **Process or stats** (dark band `--blue-800` with big mono numbers)
6. **Testimonials** (blue sky band `#6b8cc8`, floating white cards)
7. **Blog / insights** (3 cards, mono date labels)
8. **CTA banner** (dark `--blue-800`, big headline, red button)
9. **Footer** (dark, giant wordmark in display font spanning full width, link list in a small floating card)

Alternate light and dark sections for rhythm, as in the inspiration.

### Tags / Badges
- Pill, 28px tall, Geist Mono 12px uppercase, background `--blue-200` (light) / `--blue-700` (dark).
- Highlight badge: `--red-600` background, white text. Max one per card.

### Forms
- Input: height 52px, radius 16px, white fill (light) / `--blue-900` fill (dark), 1px `--border`.
- Focus: border `--blue-600` and 3px focus ring. Error: border `--danger`, helper text below in `--danger` with an icon (never colour alone).
- Labels always visible above field (no placeholder-only labels).

### Stats / Numbers
- Number in Display font, huge (64–96px), label in Geist Mono 12px uppercase underneath.

---

## 6. Iconography and Imagery

- **Icons:** Lucide or Phosphor (Regular weight), 24px, stroke 1.75–2px, rounded caps. Colour follows text colour; accent only when active.
- **Images:** rounded (radius 24–36px). Prefer real product screenshots, clean photography and soft 3D renders. Avoid stock-photo-style handshakes.
- **Illustrations / decor:** soft clouds, circles, simple line shapes in `--blue-300` or white at low opacity. No circuit boards, no matrix rain, no hex grids.
- **Tech feel details (use sparingly):** small mono labels like `01 / SERVICES`, thin 1px divider lines, subtle dotted grid at 4–6% opacity in some backgrounds.

---

## 7. Motion

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (smooth out). **Durations:** 150ms micro, 250ms hover, 500–700ms reveal.
- **Scroll reveal:** fade + translateY(24px → 0), staggered 80ms between cards.
- **Floating cards:** slow idle float (translateY ±6px, 6s loop). Very subtle. Disabled for reduced motion.
- **Hero headline:** line-by-line mask reveal on load (once).
- **Hover:** cards lift, buttons lift 2px, links get an underline that grows from left.
- Must respect `@media (prefers-reduced-motion: reduce)`: remove all transforms and parallax, keep simple fades only.
- **Never:** glitch, flicker, neon pulse, typewriter text on headlines, auto-playing sound.

---

## 8. Accessibility

- Body text contrast at least 4.5:1, large text at least 3:1 (see section 2.6).
- Visible focus on every interactive element. Full keyboard navigation.
- Semantic HTML: one `h1`, ordered headings, `nav`, `main`, `footer`, landmarks.
- Alt text on every meaningful image. Decorative images get `alt=""`.
- Never rely on colour alone for status (add icon + text).
- Theme: follow `prefers-color-scheme` by default and let the user override with a toggle (store in localStorage).

---

## 9. CSS Tokens (copy-paste starter)

```css
:root {
  /* blue scale */
  --blue-950:#0e1b33; --blue-900:#162443; --blue-800:#1d2d4c; --blue-700:#2a3e6b;
  --blue-600:#3f5a93; --blue-400:#6b8cc8; --blue-300:#9fb7e0; --blue-200:#cddaf0; --blue-100:#e8eef9;
  /* accent */
  --red-600:#a71616; --red-800:#780606;
  /* neutrals */
  --slate-600:#475569; --slate-400:#94a3b8; --border-light:#e2e8f0; --surface-light:#f1f5f9;
  /* status */
  --success:#4cb3a6; --warning:#f4b400; --danger:#d32f2f; --info:#6b8cc8;

  /* semantic (light default) */
  --bg-page:var(--blue-100);
  --bg-hero:linear-gradient(180deg,var(--blue-300),var(--blue-400));
  --bg-band:var(--blue-300);
  --bg-card:#fff;
  --text-strong:var(--blue-950);
  --text-body:var(--blue-800);
  --text-muted:var(--slate-600);
  --border:rgba(14,27,51,.10);
  --accent:var(--red-600);
  --accent-hover:var(--red-800);

  --font-display:"Bricolage Grotesque","Helvetica Neue",Arial,sans-serif;
  --font-body:"Instrument Sans","Helvetica Neue",Arial,sans-serif;
  --font-mono:"Geist Mono",ui-monospace,Menlo,monospace;

  --r-sm:8px; --r-md:16px; --r-lg:24px; --r-xl:36px; --r-pill:999px;
  --shadow-sm:0 2px 8px rgba(14,27,51,.08);
  --shadow-md:0 12px 32px rgba(14,27,51,.14);
  --shadow-lg:0 28px 64px rgba(14,27,51,.22);
  --ease:cubic-bezier(.22,1,.36,1);
}

:root[data-theme="dark"] {
  --bg-page:var(--blue-800);
  --bg-hero:var(--blue-800);
  --bg-band:var(--blue-900);
  --bg-card:var(--blue-700);
  --text-strong:#fff;
  --text-body:#dbe8f8;
  --text-muted:var(--blue-300);
  --border:rgba(159,183,224,.18);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* same values as data-theme="dark" */ }
}
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Instrument+Sans:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 10. Do and Don't

**Do**
- Use huge, tight headlines with lots of whitespace.
- Keep red to CTAs and tiny highlights.
- Use white floating cards on blue backgrounds.
- Alternate light and dark sections.
- Use mono font only for small labels and numbers.

**Don't**
- No neon, glow, glitch, scanlines, circuit patterns or terminal green.
- No gradients other than the soft sky blue one (and subtle radial highlight in dark mode).
- No more than 2 font weights in a block, no more than 3 fonts on the site.
- No white body text on `#6b8cc8`.
- No red section backgrounds, no teal/amber as brand colours.
- No auto-rotating carousels with tiny text.

---

## 11. Quick Checklist before shipping
- [ ] Light and dark mode both reviewed
- [ ] All text passes contrast
- [ ] Focus states visible
- [ ] Reduced-motion tested
- [ ] Mobile: floating cards stack cleanly, tap targets 44px+
- [ ] Only one `h1` per page
- [ ] Fonts loaded with `display=swap`
