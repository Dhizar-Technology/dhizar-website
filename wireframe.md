# wireframe.md - Dhizar BCI Website: Structural Wireframe

Target stack: HTML + Tailwind CSS 3.4 (JIT) + vanilla JS (or React, same DOM). Single page, anchor navigation.
Audience of this file: an autonomous coding agent. Everything below is implementable as written. Where a value is a placeholder, it is written as `{{LIKE_THIS}}`.

---

## 0. Global Foundations

### 0.1 Locked tokens (do not change)

| Token | Value | Role |
|---|---|---|
| `sky` | `#8ea9d9` | Single unified page canvas. Every section sits on it. No dark sections, no section background swaps |
| `white` | `#ffffff` | Raised surfaces: cards, header pill, drawer |
| `ink` | `#0e1b33` | Headings, big numbers, strokes, icons |
| `body` | `#1d2d4c` | Body text, captions, labels |
| `accent` | `#a71616` | Primary CTA fill, one detected-peak marker, one selected-state outline. Nothing else |
| `accent-press` | `#780606` | CTA hover and active only (from design.md) |

Derived tints are allowed only as alpha of `ink` or `white` (examples: `ink/5` wells, `ink/10` hairlines, `white/70` glass). No new hues.

Fonts (unchanged):
- Display: `Bricolage Grotesque` (600 to 800) for headlines and big numbers
- Body: `Instrument Sans` (400, 500, 600) for paragraphs, nav, buttons
- Mono: `Geist Mono` (400, 500) for eyebrows, badges, telemetry labels, units

### 0.2 Contrast (computed, WCAG)

| Pair | Ratio | Rule |
|---|---|---|
| `ink` on `sky` | 7.2 | OK for all text |
| `body` on `sky` | 5.8 | OK for all text. On sky never use opacity below 100% for text |
| `ink` on `white` | 17.2 | OK |
| `body` on `white` | 13.7 | OK. Muted text on white may use `body/75` (6.1) |
| `white` on `accent` | 7.6 | Button text |
| `accent` on `sky` | 3.2 | FAIL for text. Red is never used as text on sky. Red only as fill with white text, or as a 2px outline on white |

### 0.3 Tailwind config

```js
module.exports = {
  content: ["./**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#8ea9d9",
        ink: "#0e1b33",
        body: "#1d2d4c",
        accent: { DEFAULT: "#a71616", press: "#780606" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Helvetica Neue"', "Arial", "sans-serif"],
        body: ['"Instrument Sans"', '"Helvetica Neue"', "Arial", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "Menlo", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,27,51,.06), 0 12px 32px rgba(14,27,51,.12)",
        lift: "0 2px 4px rgba(14,27,51,.08), 0 24px 56px rgba(14,27,51,.18)",
      },
      borderRadius: { card: "24px", well: "16px" },
    },
  },
};
```

Google Fonts link: `Bricolage+Grotesque:opsz,wght@12..96,600..800`, `Instrument+Sans:wght@400;500;600`, `Geist+Mono:wght@400;500`, `display=swap`.

### 0.4 Layout system

- Page: `<body class="bg-sky text-body font-body antialiased">`
- Container (every section): `mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12` (1280px max, 20px / 32px / 40px / 48px side padding)
- Section rhythm: `py-20 lg:py-28 xl:py-32`. Sections are separated by a full-bleed hairline `border-t border-ink/10`, not by colour
- Grid: 12 columns from `lg`. Gap `gap-6 lg:gap-8`. Hero uses `gap-10 lg:gap-12 xl:gap-16`
- Card: `bg-white rounded-card shadow-card p-6 lg:p-8`. Inner well: `bg-ink/5 rounded-well`
- Anchors: `scroll-mt-24` on every `<section>`
- Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`

### 0.5 Type scale

| Style | Classes | Notes |
|---|---|---|
| Hero H1 | `font-display font-extrabold tracking-[-0.045em] leading-[0.95] text-ink text-[clamp(2.5rem,5vw,4.75rem)] text-balance` | Max about 76px so "Zero Mechanical" fits the 60% column |
| H2 | `font-display font-bold tracking-[-0.035em] leading-[1.02] text-ink text-[clamp(2rem,3.6vw,3.5rem)]` | |
| H3 | `font-display font-semibold tracking-tight text-ink text-xl lg:text-2xl` | |
| Body L | `text-lg lg:text-xl leading-relaxed text-body` | Max `max-w-[52ch]` |
| Body | `text-base leading-relaxed text-body` | |
| Eyebrow | `font-mono text-xs font-medium uppercase tracking-[0.08em] text-body` | |
| Big number | `font-display font-extrabold tabular-nums leading-none tracking-[-0.04em] text-ink text-[clamp(2rem,3.2vw,3rem)]` | Unit span: `font-mono text-[0.38em] font-medium ml-1 align-baseline` |

### 0.6 Shared components

**Button primary**: `inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 font-semibold text-white transition-colors hover:bg-accent-press focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ink`
**Button secondary**: `inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-semibold text-ink ring-1 ring-ink/15 transition-colors hover:bg-ink hover:text-white focus-visible:outline ...same focus ring`
**Badge**: `inline-flex flex-col rounded-well bg-ink/5 px-3 py-2`, value in `font-mono text-sm text-ink`, label in `font-mono text-[11px] text-body`.
**Slot** (future asset container): `relative overflow-hidden rounded-well bg-ink/5`, aspect ratio set per slot, a `[data-placeholder]` child with geometric content, and an asset slot child (`<img>`, `<video>`, `<canvas>` or `<model-viewer>`) set to `absolute inset-0 h-full w-full`. When the asset fires `load`, set `[data-placeholder]` to `hidden`. Never let a slot change height when the asset loads (aspect ratio is fixed).

### 0.7 Motion rules

- Allowed: fade and rise on scroll (opacity 0 to 1, translateY 16px to 0, 500ms, `cubic-bezier(.22,1,.36,1)`, stagger 80ms), card hover lift (`-translate-y-1`, `shadow-lift`, 250ms), nav underline growth, smooth waveform scroll
- Banned: blinking, pulsing or breathing dots, glow, neon, text-shadow, scanlines, glitch, typewriter headlines, any `//` decoration in copy or UI
- `prefers-reduced-motion: reduce`: disable reveals and hover lift, waveform renders one static frame
- No element may flash faster than 3 times per second (WCAG 2.3.1). The stimulus preview in Section 3 is therefore static, not flickering

### 0.8 File and component structure

```
index.html
  header#site-header
  main
    section#home          (Hero)
    section#paradigm
    section#architecture  (contains div#pipeline)
    section#telemetry
    section#team
    section#contact
  footer#site-footer
/src/js/waveform.js      (canvas renderer, reused by Hero, Card 02)
/src/js/nav.js           (drawer, scrollspy)
/src/js/reveal.js        (IntersectionObserver reveals)
```

---

## 1. Global Header and Navigation

### 1.1 Layout (desktop, 1280+)

```
+----------------------------------------------------------------------------------+
|  (fixed, top-4, centered, max-w-7xl)                                             |
|  +------------------------------------------------------------------------------+|
|  | DHIZAR        Home  Paradigm  Architecture  Telemetry  Team  Contact  [Access]||
|  +------------------------------------------------------------------------------+|
+----------------------------------------------------------------------------------+
```

### 1.2 Layout (mobile, below 1024)

```
+---------------------------------+      +---------------------------------+
| +-----------------------------+ |      |                          [ X ]  |
| | DHIZAR                 [=]  | |      |                                 |
| +-----------------------------+ |      |   Home                          |
+---------------------------------+      |   Paradigm                      |
                                         |   Architecture                  |
   closed                                |   Telemetry                     |
                                         |   Team                          |
                                         |   Contact                       |
                                         |                                 |
                                         |   [ Get Developer Access ]      |
                                         +---------------------------------+
                                                   drawer open
```

### 1.3 DOM and Tailwind

```html
<header id="site-header" class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 lg:pt-4">
  <div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full bg-white/85 pl-6 pr-2 shadow-card backdrop-blur-md">
    <a href="#home" aria-label="Dhizar, back to top" class="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink">DHIZAR</a>

    <nav aria-label="Primary" class="hidden lg:block">
      <ul class="flex items-center gap-8">
        <li><a href="#home"         class="nav-link">Home</a></li>
        <li><a href="#paradigm"     class="nav-link">Paradigm</a></li>
        <li><a href="#architecture" class="nav-link">Architecture</a></li>
        <li><a href="#telemetry"    class="nav-link">Telemetry</a></li>
        <li><a href="#team"         class="nav-link">Team</a></li>
        <li><a href="#contact"      class="nav-link">Contact</a></li>
      </ul>
    </nav>

    <div class="flex items-center gap-2">
      <a href="#contact" class="hidden lg:inline-flex btn-primary h-11 px-6 text-sm">Developer Access</a>
      <button id="nav-toggle" class="lg:hidden grid h-12 w-12 place-items-center rounded-full text-ink" aria-expanded="false" aria-controls="drawer" aria-label="Open menu">
        <svg><!-- two-line menu icon, 24px, stroke 2 --></svg>
      </button>
    </div>
  </div>
</header>
```

- `.nav-link`: `relative text-[15px] font-medium text-ink py-2` plus an `::after` 2px `bg-ink` underline, `scale-x-0` origin-left, `scale-x-100` on hover and when `aria-current="true"`
- Active state is set by scrollspy (IntersectionObserver, rootMargin `-40% 0px -55% 0px`). Underline only. No dot indicators
- Header scroll state: at `scrollY > 8` add `shadow-lift`. No other change

### 1.4 Mobile drawer

```html
<div id="drawer" role="dialog" aria-modal="true" aria-label="Menu" hidden
     class="fixed inset-0 z-[60] bg-white lg:hidden">
  <div class="flex h-full flex-col px-6 pb-8 pt-4">
    <div class="flex h-16 items-center justify-between">
      <span class="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink">DHIZAR</span>
      <button id="drawer-close" aria-label="Close menu" class="grid h-12 w-12 place-items-center rounded-full ring-1 ring-ink/15">X icon</button>
    </div>
    <ul class="mt-10 flex flex-col gap-2">
      <li><a class="block py-3 font-display text-4xl font-bold tracking-tight text-ink" href="#home">Home</a></li>
      <!-- repeat for the other five links -->
    </ul>
    <a href="#contact" class="btn-primary mt-auto w-full">Get Developer Access</a>
  </div>
</div>
```

Behaviour: open slides from the right (`translateX(100%)` to `0`, 350ms). Focus trap, `Esc` closes, clicking a link closes, `body` gets `overflow-hidden` while open, focus returns to `#nav-toggle`.

### 1.5 Placeholder spec
No image slots. Logo is a text wordmark. If an SVG mark is added later, place it left of the wordmark in a `h-7 w-7` box with `gap-2`.

---

## 2. Section 1 - Hero (`#home`)

Goal: remove dead space on both sides. Content fills the full 1280px container with a 60 / 40 split.

### 2.1 Desktop layout

```
|<------------------------------- max-w-7xl (1280) ------------------------------->|
+----------------------------------------+-----------------------------------------+
| 60% (col-span-6 of 10)                 | 40% (col-span-4 of 10)                  |
|                                        |  +-----------------------------------+  |
|  BCI  |  OCCIPITAL INTERFACE           |  | OCCIPITAL INTERFACE CRADLE        |  |
|                                        |  | +-------------------------------+ |  |
|  See It.                               |  | |                               | |  |
|  Trigger It.                           |  | |   3D HARDWARE RENDER SLOT     | |  |
|  Zero Mechanical                       |  | |   (4:3, geometric placeholder)| |  |
|  Travel.                               |  | |                               | |  |
|                                        |  | +-------------------------------+ |  |
|  Subtitle, max 52ch, three lines.      |  | +-------------------------------+ |  |
|                                        |  | | ~~~~ live waveform canvas ~~~~| |  |
|  [Explore Architecture] [View Pipeline]|  | +-------------------------------+ |  |
|                                        |  | [< 4.8 kOhm] [USB HID 2.0] [1000Hz]|  |
|  ------------------------------------  |  +-----------------------------------+  |
|  Mini stat row (3 inline items)        |                                         |
+----------------------------------------+-----------------------------------------+
```

### 2.2 Mobile layout (stacked, headline first)

```
+-----------------------------+
| eyebrow                     |
| See It.                     |
| Trigger It.                 |
| Zero Mechanical Travel.     |
| subtitle                    |
| [Explore Architecture]      |
| [View Pipeline]             |
| +-------------------------+ |
| | card: render slot 4:3   | |
| | waveform 16:5           | |
| | badges (wrap, 2 + 1)    | |
| +-------------------------+ |
+-----------------------------+
```

### 2.3 DOM and Tailwind

```html
<section id="home" class="scroll-mt-24 pb-16 pt-28 lg:pb-24 lg:pt-36">
  <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12">
    <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-10 lg:gap-12 xl:gap-16 lg:min-h-[calc(100svh-9rem)]">

      <div class="lg:col-span-6 min-w-0">
        <p class="eyebrow">Brain-computer interface</p>
        <h1 class="mt-5 hero-h1">
          <span class="block">See It.</span>
          <span class="block">Trigger It.</span>
          <span class="block">Zero Mechanical Travel.</span>
        </h1>
        <p class="mt-6 max-w-[52ch] text-lg lg:text-xl leading-relaxed text-body">{{SUBTITLE}}</p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#architecture" class="btn-primary">Explore Architecture</a>
          <a href="#pipeline" class="btn-secondary">View Pipeline</a>
        </div>
        <dl class="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-ink/10 pt-6">
          <!-- 3 items: value in font-display text-2xl text-ink, label in mono text-xs text-body -->
        </dl>
      </div>

      <div class="lg:col-span-4 min-w-0">
        <article class="card" aria-label="Occipital interface cradle">...</article>
      </div>
    </div>
  </div>
</section>
```

### 2.4 Exact content

- Eyebrow: `Brain-computer interface`
- H1: `See It. Trigger It. Zero Mechanical Travel.` (three `block` lines; the third wraps to two lines on desktop, which is expected)
- Subtitle (max 52ch): `Dhizar reads the visual cortex and turns intent into a standard USB HID input. No switch, no travel, no wait.`
- Primary button: `Explore Architecture` (red, links to `#architecture`)
- Secondary button: `View Pipeline` (white, links to `#pipeline`)
- Mini stats (under CTAs): `1 / channel at Oz`, `8-20 Hz / stimulus band`, `USB HID / plug and play`

### 2.5 Right card: Occipital Interface Cradle

```html
<article class="card flex flex-col gap-5 lg:p-7">
  <header class="flex items-center justify-between">
    <h2 class="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink">OCCIPITAL INTERFACE CRADLE</h2>
    <span class="font-mono text-xs text-body">Rev {{HW_REV}}</span>
  </header>

  <div class="slot aspect-[4/3]" data-slot="hero-render">
    <div data-placeholder class="absolute inset-0 grid place-items-center">
      <!-- inline SVG: 3 concentric rounded rectangles (ink/10, ink/15, ink/25), corner brackets,
           centre label "3D render" in mono text-xs text-body -->
    </div>
    <!-- future: model-viewer or img with class "absolute inset-0 h-full w-full object-contain" -->
  </div>

  <div class="slot aspect-[16/5]" data-slot="hero-waveform">
    <canvas id="hero-wave" class="absolute inset-0 h-full w-full" role="img"
            aria-label="Simulated occipital signal trace"></canvas>
  </div>

  <ul class="grid grid-cols-3 gap-2">
    <li class="badge"><span class="badge-v">&lt; 4.8 k&Omega;</span><span class="badge-l">Impedance</span></li>
    <li class="badge"><span class="badge-v">USB HID 2.0</span><span class="badge-l">Interface</span></li>
    <li class="badge"><span class="badge-v">1000 Hz</span><span class="badge-l">Sampling</span></li>
  </ul>
</article>
```

- Badge value text: `font-mono text-[13px] xl:text-sm whitespace-nowrap`. Grid is `grid-cols-3`; below 380px switch to `grid-cols-1`
- Card hover: none (it is the focal element). It sits still, no floating animation, no rotation

### 2.6 Waveform canvas spec (shared module `waveform.js`)

- DPR-aware: size from `ResizeObserver`, scale by `devicePixelRatio`
- Background transparent over the `bg-ink/5` slot. Grid: 1px lines at `rgba(14,27,51,.08)`, 8 vertical divisions, 4 horizontal
- Signal (synthesised, seeded): `12 Hz sine (amplitude 1) + 24 Hz harmonic (0.35) + low-pass noise (0.25) + 50 Hz mains (0.1)`
- Stroke `#0e1b33`, `lineWidth 1.5`, `lineJoin round`. No `shadowBlur`, no gradients
- Scroll speed 120 px per second. Read head: a 1px vertical line at the right edge in `#a71616` (static, no pulse). Small mono label `Oz` top-left at 11px
- Run via `requestAnimationFrame`, pause when off-screen (IntersectionObserver) and when the tab is hidden. With `prefers-reduced-motion`, draw one static frame

### 2.7 Placeholder spec for future assets

| Slot | Ratio | Behaviour when asset arrives |
|---|---|---|
| `hero-render` | 4:3 | `object-contain`, transparent PNG or WebP, or `model-viewer` with `camera-controls` and `disable-zoom`. Keep `bg-ink/5` behind it. Max asset width 1200px |
| `hero-waveform` | 16:5 | Stays a canvas. Never replaced |

---

## 3. Section 2 - Paradigm: The Latency Bottleneck (`#paradigm`)

### 3.1 Desktop layout

```
+----------------------------------------------------------------------------------+
| eyebrow                                                                          |
| +--------------------------------------------+  +------------------------------+ |
| | H2  The latency bottleneck                 |  | Body paragraph (col-span-5)  | |
| |     (col-span-7)                           |  |                              | |
| +--------------------------------------------+  +------------------------------+ |
|                                                                                  |
| +---------------------------------+   +----------------------------------------+ |
| | LEGACY PERIPHERAL ACTUATION     |   | DHIZAR OCCIPITAL DIRECT DECODE         | |
| |                                 |   |                                        | |
| | 180 - 240 ms                    |   | < 48.4 ms                              | |
| |                                 |   |                                        | |
| | 1 Intent  2 Motor plan          |   | 1 Stimulus 2 Capture                   | |
| | 3 Mechanical travel 4 Debounce  |   | 3 CCA decode 4 HID report              | |
| +---------------------------------+   +----------------------------------------+ |
|                                                                                  |
| +------------------------------------------------------------------------------+ |
| | Latency scale 0 - 250 ms                                                     | |
| | Legacy  |=========================================|  180 - 240 ms            | |
| | Dhizar  |=======|                                    < 48.4 ms               | |
| |                                  3.7x to 5.0x lower latency (derived)        | |
| +------------------------------------------------------------------------------+ |
+----------------------------------------------------------------------------------+
```

### 3.2 Mobile layout

```
+-------------------------+
| eyebrow                 |
| H2                      |
| body                    |
| +---------------------+ |
| | Legacy card         | |
| +---------------------+ |
| +---------------------+ |
| | Dhizar card         | |
| +---------------------+ |
| +---------------------+ |
| | Bars (stacked)      | |
| +---------------------+ |
+-------------------------+
```

### 3.3 DOM and Tailwind

```html
<section id="paradigm" class="scroll-mt-24 border-t border-ink/10 py-20 lg:py-28 xl:py-32">
  <div class="container-x">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 lg:items-end">
      <div class="lg:col-span-7">
        <p class="eyebrow">The core problem</p>
        <h2 class="mt-4 h2">The latency bottleneck</h2>
      </div>
      <p class="lg:col-span-5 text-lg leading-relaxed text-body max-w-[52ch]">{{PARADIGM_BODY}}</p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <article class="card lg:col-span-6 min-w-0">...legacy...</article>
      <article class="card lg:col-span-6 min-w-0">...dhizar...</article>
      <article class="card lg:col-span-12">...bars...</article>
    </div>
  </div>
</section>
```

### 3.4 Exact content

- Eyebrow: `The core problem`
- H2: `The latency bottleneck`
- Body: `Every physical input waits on a chain of motor and mechanical steps. Dhizar skips the chain and decodes intent where it first appears, in the visual cortex.`

**Card A - Legacy**
- Mono label: `Legacy Peripheral Actuation`
- Big number: `180 - 240` with unit `ms` (class: big number, `flex flex-wrap items-baseline gap-x-2`, size `clamp(2.5rem,4.4vw,4rem)`). Number and unit are separate spans so the unit can wrap instead of overflow
- Caption: `Intent to registered input`
- Stage list (`ol`, 4 rows, mono index + text, hairline between rows): `Intent formation`, `Motor planning`, `Mechanical travel`, `Switch debounce`

**Card B - Dhizar** (selected state: `ring-2 ring-accent`, the only red outline in this section)
- Mono label: `Dhizar Occipital Direct Decode`
- Big number: `< 48.4` with unit `ms`
- Caption: `Stimulus to HID report`
- Stage list: `Visual stimulus`, `Occipital capture`, `CCA decode`, `HID report`

**Card C - Comparison bars**
- Axis 0 to 250 ms with 5 ticks (0, 50, 100, 150, 200, 250 labelled in mono)
- Legacy bar: track `bg-ink/10`, a range fill from 72% to 96% width (`bg-ink/35`) with end label `180 - 240 ms`
- Dhizar bar: fill 0 to 19.4% width in `bg-ink`, end label `< 48.4 ms`
- Footer chip: `3.7x to 5.0x lower latency` with note `Derived: 180 / 48.4 and 240 / 48.4`
- Bar fill animates once on enter (width 0 to target, 700ms). No looping

### 3.5 Placeholder spec
No image slots. Both cards and the bars are pure DOM, data-driven from `{ legacy: [180, 240], dhizar: 48.4, axisMax: 250 }`.

---

## 4. Section 3 - Architecture and Signal Pipeline (`#architecture`, `#pipeline`)

### 4.1 Desktop layout

```
+----------------------------------------------------------------------------------+
| eyebrow                                                                          |
| H2  From stimulus to signal to command           body (col-span-5)                |
|                                                                                  |
| #pipeline                                                                        |
| +--------------------+     +--------------------+     +--------------------+     |
| | 01  Stimulus       | --> | 02  Acquisition    | --> | 03  Decoding       |     |
| | +----------------+ |     | +----------------+ |     | +----------------+ |     |
| | | [8Hz]  [11Hz]  | |     | |  head top view | |     | | CCA matrix     | |     |
| | | [15Hz] [20Hz]  | |     | |  Oz marked     | |     | | 4 x 3 + result | |     |
| | +----------------+ |     | | ~~~ trace ~~~  | |     | +----------------+ |     |
| | title, text        |     | +----------------+ |     | title, text        |     |
| | spec row (mono)    |     | title, text, spec  |     | spec row (mono)    |     |
| +--------------------+     +--------------------+     +--------------------+     |
|                                                                                  |
| Output strip: Stimulus > Acquisition > Decode > USB HID report                   |
+----------------------------------------------------------------------------------+
```

### 4.2 Mobile layout
Cards stack in one column in order 01, 02, 03. The arrow connectors become a short vertical 1px `bg-ink/20` line (h-6) centred between cards.

### 4.3 DOM and Tailwind

```html
<section id="architecture" class="scroll-mt-24 border-t border-ink/10 py-20 lg:py-28 xl:py-32">
  <div class="container-x">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 lg:items-end">
      <div class="lg:col-span-7"> eyebrow + h2 </div>
      <p class="lg:col-span-5 ...">{{ARCH_BODY}}</p>
    </div>

    <div id="pipeline" class="mt-12 grid grid-cols-1 gap-6 scroll-mt-24 md:grid-cols-3 lg:gap-8">
      <article class="card flex flex-col gap-5 min-w-0"> ...01... </article>
      <article class="card flex flex-col gap-5 min-w-0"> ...02... </article>
      <article class="card flex flex-col gap-5 min-w-0"> ...03... </article>
    </div>

    <ol class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-body">
      <!-- Stimulus > Acquisition > Decode > USB HID report, separated by a ">" character -->
    </ol>
  </div>
</section>
```

- Between cards on `md` and up: an absolutely positioned connector in the gap: `absolute top-1/2 -right-5 hidden h-px w-8 bg-ink/30 md:block` with a small chevron. Card wrapper needs `relative`. No animated travelling dot
- Each card: top row `font-mono text-xs` index (`01`) left and `Stage` label right; well slot `aspect-[4/3]`; `h3`; paragraph `text-[15px] text-body/75`; spec row at the bottom `mt-auto border-t border-ink/10 pt-4 font-mono text-xs`

### 4.4 Exact content per card

**Card 01 - Stimulus**
- Eyebrow: `Stage 1`
- H3: `Stimulus`
- Text: `Targets on a screen, each driven at its own frequency between 8 and 20 Hz. Looking at one tags the visual cortex with that rhythm.`
- Well: 2 by 2 grid of four rounded squares (`bg-white ring-1 ring-ink/20`, `aspect-square`) labelled in mono `8 Hz`, `11 Hz`, `15 Hz`, `20 Hz`. Static. Optional hover on a square sets `ring-2 ring-ink`. Do not flicker the squares (see 0.7)
- Spec row: `Band 8-20 Hz` and `Targets {{N}}`

**Card 02 - Acquisition**
- Eyebrow: `Stage 2`
- H3: `Acquisition`
- Text: `One dry sensor at Oz, over the occipital pole. No gel, no cap, no scalp prep.`
- Well: top half, inline SVG head from above (circle stroke `ink/30`, small nose notch at the top) with 5 hollow electrode circles (`O1`, `Oz`, `O2`, `Pz`, `Cz`); only `Oz` is filled `ink` with label. Bottom third: small `canvas` trace using the shared waveform module, `aspect-[16/4]`
- Spec row: `Channel Oz`, `< 4.8 kOhm`, `1000 Hz`

**Card 03 - Decoding**
- Eyebrow: `Stage 3`
- H3: `Decoding`
- Text: `Multi-harmonic canonical correlation analysis compares the signal against reference templates for every target and picks the strongest match.`
- Well: table 4 rows (targets) by 3 columns (`H1`, `H2`, `H3`) of correlation values in mono. Illustrative data:

| Target | H1 | H2 | H3 |
|---|---|---|---|
| 8 Hz | 0.12 | 0.09 | 0.07 |
| 11 Hz | 0.15 | 0.11 | 0.08 |
| 15 Hz | 0.87 | 0.64 | 0.41 |
| 20 Hz | 0.10 | 0.08 | 0.06 |

  Winning row (15 Hz) gets `outline outline-2 outline-accent rounded-lg` and a result line under the table: `Detected 15 Hz` in mono `text-ink`. Add a muted note `Illustrative values`
- Spec row: `Decoder CCA`, `Harmonics 3`, `Output USB HID`

### 4.5 Placeholder spec for future assets

| Slot | Ratio | Behaviour when asset arrives |
|---|---|---|
| `arch-stimulus` | 4:3 | Replace the 2x2 grid with a screenshot or UI render, `object-cover`, keep `rounded-well` |
| `arch-acquisition` | 4:3 | Replace SVG head with sensor photo or 3D render, `object-contain`, keep the trace canvas below it |
| `arch-decoding` | 4:3 | Keep the matrix as live DOM (it is data). A render may be added as a faint background `opacity-10` only |

---

## 5. Section 4 - Empirical Telemetry and Hardware Specs (`#telemetry`)

### 5.1 Desktop layout

```
+----------------------------------------------------------------------------------+
| eyebrow                                                                          |
| H2  Measured, not promised                       body (col-span-5)                |
|                                                                                  |
| +----------------+ +----------------+ +----------------+ +----------------+      |
| | Latency        | | Accuracy       | | Mechanical     | | Interface      |      |
| | < 50 ms        | | 98.7 %         | | 0.00 mm        | | USB HID        |      |
| | caption        | | caption        | | caption        | | caption        |      |
| | mini bars      | | mini bars      | | mini bars      | | mini bars      |      |
| +----------------+ +----------------+ +----------------+ +----------------+      |
|                                                                                  |
| +-------------------------------------------+ +--------------------------------+ |
| | Specification table (col-span-7)          | | Hardware render slot (5:4)     | |
| | Channels ........ 1 (Oz)                  | | (col-span-5)                   | |
| | Sampling ........ 1000 Hz                 | |                                | |
| | Impedance ....... < 4.8 kOhm              | |                                | |
| | Interface ....... USB HID 2.0             | |                                | |
| | Stimulus band ... 8-20 Hz                 | |                                | |
| | Decoder ......... Multi-harmonic CCA      | |                                | |
| +-------------------------------------------+ +--------------------------------+ |
+----------------------------------------------------------------------------------+
```

### 5.2 Mobile layout
Metric cards `grid-cols-1` below 640px, `sm:grid-cols-2` from 640px. Spec table card, then render slot (`aspect-[5/4]`), stacked.

### 5.3 DOM and Tailwind

```html
<section id="telemetry" class="scroll-mt-24 border-t border-ink/10 py-20 lg:py-28 xl:py-32">
  <div class="container-x">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 lg:items-end"> header </div>

    <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <li class="card min-w-0 flex flex-col gap-4"> metric </li> x 4
    </ul>

    <div class="mt-6 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-12 lg:gap-8">
      <div class="card lg:col-span-7 min-w-0"> <dl> spec rows </dl> </div>
      <div class="card lg:col-span-5 p-3"> <div class="slot aspect-[5/4]" data-slot="hardware-render"> </div> </div>
    </div>
  </div>
</section>
```

### 5.4 Metric card anatomy and no-clip rules

```html
<li class="card min-w-0 flex flex-col gap-4">
  <p class="font-mono text-xs uppercase tracking-[0.08em] text-body">Reaction latency</p>
  <p class="flex flex-wrap items-baseline gap-x-1.5 font-display font-extrabold tabular-nums leading-none tracking-[-0.04em] text-ink text-[clamp(2rem,3.2vw,3rem)]">
    <span>0.00</span><span class="font-mono text-[0.38em] font-medium tracking-normal">mm</span>
  </p>
  <p class="text-[15px] leading-snug text-body/75">Caption</p>
  <div class="mt-auto h-1.5 rounded-full bg-ink/10"><div class="h-full rounded-full bg-ink" style="width:XX%"></div></div>
</li>
```

- Value and unit are always two spans inside a `flex-wrap` parent, so if a card is ever narrow the unit drops to a new line instead of clipping
- `min-w-0` on every grid child, never `overflow-hidden` on the card text container
- Width check: at `lg` (1024px) a card is about 220px wide minus 48px padding = 172px. `0.00` at 32px is about 80px plus `mm` at 12px. `USB HID` at 32px is about 130px. Both fit. At `xl` the value is 48px: `USB HID` about 190px in a 232px content width. Fits

### 5.5 Exact content

| Label | Value | Unit | Caption | Bar |
|---|---|---|---|---|
| `Reaction latency` | `< 50` | `ms` | `Stimulus to HID report` | 19% (of 250 ms scale) |
| `Decode accuracy` | `98.7` | `%` | `Correct target selection` | 98.7% |
| `Mechanical travel` | `0.00` | `mm` | `No moving parts in the input path` | 0% (empty track, intentional) |
| `Interface` | `USB HID` | none | `Works as a standard input device` | none (omit bar, use mono tag `Class 0x03`) |

H2: `Measured, not promised`. Body: `Figures from bench and pilot sessions, reported with the conditions they were measured under.` Add `{{METHODOLOGY_LINK}}` as a text link `How we measured` under the grid.

Spec table (`dl`, each row `flex justify-between gap-4 border-b border-ink/10 py-3`, term in mono `text-xs`, value in `font-medium text-ink`):
`Channels` `1 (Oz)`, `Sampling rate` `1000 Hz`, `Contact impedance` `< 4.8 kOhm`, `Interface` `USB HID 2.0`, `Stimulus band` `8-20 Hz`, `Decoder` `Multi-harmonic CCA`, `Power` `{{POWER}}`, `Dimensions` `{{DIMENSIONS}}`.

### 5.6 Placeholder spec for future assets

| Slot | Ratio | Behaviour when asset arrives |
|---|---|---|
| `hardware-render` | 5:4 | `object-contain` product render on transparent background, padded 8%, keep `bg-ink/5`. Optional second image as a crossfade on hover (no auto-rotate) |

---

## 6. Section 5 - Team and Core Operators (`#team`)

### 6.1 Desktop layout (asymmetric)

```
+----------------------------------------------------------------------------------+
| +---------------------------+  +-----------------------------------------------+ |
| | col-span-4 (sticky)       |  | col-span-8                                    | |
| | eyebrow                   |  | +--------------------+ +--------------------+ | |
| | H2  Core operators        |  | | [01] Name          | | [02] Name          | | |
| | body                      |  | | Founder, role      | | Founder, role      | | |
| |                           |  | +--------------------+ +--------------------+ | |
| | [We're Hiring link]       |  | +--------------------+ +--------------------+ | |
| |                           |  | | [03] Engineer      | | [04] Engineer      | | |
| |                           |  | +--------------------+ +--------------------+ | |
| |                           |  | +--------------------+ +--------------------+ | |
| |                           |  | | [05] Engineer      | | [06] Engineer      | | |
| |                           |  | +--------------------+ +--------------------+ | |
| +---------------------------+  +-----------------------------------------------+ |
+----------------------------------------------------------------------------------+
```

### 6.2 Mobile layout
Intro block, then member cards in one column. Each card keeps its horizontal layout (portrait 88px left, text right).

### 6.3 DOM and Tailwind

```html
<section id="team" class="scroll-mt-24 border-t border-ink/10 py-20 lg:py-28 xl:py-32">
  <div class="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
    <div class="lg:col-span-4">
      <div class="lg:sticky lg:top-28">
        <p class="eyebrow">Team</p>
        <h2 class="mt-4 h2">Core operators</h2>
        <p class="mt-5 max-w-[44ch] text-lg leading-relaxed text-body">{{TEAM_BODY}}</p>
        <a href="#contact" class="mt-6 inline-flex font-semibold text-ink underline underline-offset-4">We're hiring</a>
      </div>
    </div>

    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:gap-8">
      <li class="member"> ... </li> x 6
    </ul>
  </div>
</section>
```

Member card (`.member`):
- Founders (first two): `bg-white rounded-card shadow-card p-5`
- Engineers (next four): glass `bg-white/70 backdrop-blur-md ring-1 ring-white/60 rounded-card shadow-card p-5`
- Layout: `flex items-center gap-5`. Portrait slot left: `h-24 w-24 shrink-0 rounded-well` (1:1 on mobile and desktop). Text right `min-w-0`: name `font-display text-xl font-semibold text-ink`, role `font-mono text-xs text-body`, focus line `text-[15px] text-body` (max 2 lines, `line-clamp-2`), links row `LinkedIn` and `GitHub` as `text-sm font-medium text-ink underline underline-offset-4`
- Hover: `hover:-translate-y-1 hover:shadow-lift`

### 6.4 Exact content (placeholders, fill with real data)

| # | Surface | Name | Role | Focus line |
|---|---|---|---|---|
| 1 | white | `{{FOUNDER_1_NAME}}` | `Co-founder, {{ROLE}}` | `{{ONE_LINE}}` |
| 2 | white | `{{FOUNDER_2_NAME}}` | `Co-founder, {{ROLE}}` | `{{ONE_LINE}}` |
| 3 | glass | `{{ENGINEER_1_NAME}}` | `Signal processing` | `{{ONE_LINE}}` |
| 4 | glass | `{{ENGINEER_2_NAME}}` | `Embedded firmware` | `{{ONE_LINE}}` |
| 5 | glass | `{{ENGINEER_3_NAME}}` | `Hardware design` | `{{ONE_LINE}}` |
| 6 | glass | `{{ENGINEER_4_NAME}}` | `Software and SDK` | `{{ONE_LINE}}` |

- H2: `Core operators`
- Body: `A small group of founders and engineers working across signal processing, hardware and software.`

### 6.5 Placeholder spec for future assets

| Slot | Ratio | Behaviour when asset arrives |
|---|---|---|
| `member-portrait` | 1:1 (96px), source 4:5 recommended | `object-cover object-top`, `rounded-well`. Placeholder: initials in `font-display text-3xl text-ink` centred in `bg-ink/5` with two concentric `ring-1 ring-ink/10` circles. Grayscale not required |

---

## 7. Section 6 - Developer Access, Contact and Footer (`#contact`, `#site-footer`)

### 7.1 Desktop layout

```
+----------------------------------------------------------------------------------+
| +------------------------------------------------------------------------------+ |
| | (white card, rounded-3xl, p-12)                                              | |
| | +-----------------------------------------+  +-----------------------------+ | |
| | | eyebrow: Developer access               |  | [ Get Developer Access ]    | | |
| | | H2: Put a direct visual-intent channel  |  |   (red, full width)         | | |
| | |     into your stack.                    |  | [ We're Hiring . Join the   | | |
| | | body (max 52ch)                         |  |   Core Team ]  (secondary)  | | |
| | |                                         |  | {{CONTACT_EMAIL}}           | | |
| | +-----------------------------------------+  +-----------------------------+ | |
| +------------------------------------------------------------------------------+ |
|                                                                                  |
| ---------------------------------------------------------------------------------|
| DHIZAR        Product        Company        Legal                                |
| tagline       Architecture   Team           Privacy                              |
|               Telemetry      Contact        Terms                                |
|                                                                                  |
|  D H I Z A R   (full-width watermark, ink at 7 percent, clipped at the bottom)   |
+----------------------------------------------------------------------------------+
```

### 7.2 Mobile layout

```
+-----------------------------+
| +-------------------------+ |
| | eyebrow, H2, body       | |
| | [ Get Developer Access ]| |
| | [ We're Hiring . Join ] | |
| | email                   | |
| +-------------------------+ |
| DHIZAR                      |
| tagline                     |
| Product / Company / Legal   |
| (2-col link grid)           |
| DHIZAR watermark (22vw)     |
+-----------------------------+
```

### 7.3 DOM and Tailwind

```html
<section id="contact" class="scroll-mt-24 border-t border-ink/10 py-20 lg:py-28 xl:py-32">
  <div class="container-x">
    <div class="card grid grid-cols-1 items-center gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-16 rounded-[32px]">
      <div class="lg:col-span-7 min-w-0">
        <p class="eyebrow">Developer access</p>
        <h2 class="mt-4 h2">Put a direct visual-intent channel into your stack.</h2>
        <p class="mt-5 max-w-[52ch] text-lg leading-relaxed text-body">{{CTA_BODY}}</p>
      </div>
      <div class="lg:col-span-5 flex flex-col gap-3">
        <a href="{{DEV_ACCESS_URL}}" class="btn-primary h-14 w-full text-lg">Get Developer Access</a>
        <a href="{{CAREERS_URL}}" class="btn-secondary h-14 w-full text-base">We're Hiring &bull; Join the Core Team</a>
        <a href="mailto:{{CONTACT_EMAIL}}" class="mt-2 text-center font-mono text-sm text-ink underline underline-offset-4">{{CONTACT_EMAIL}}</a>
      </div>
    </div>
  </div>
</section>

<footer id="site-footer" class="relative overflow-hidden border-t border-ink/10 pt-16">
  <div class="container-x grid grid-cols-2 gap-10 md:grid-cols-12">
    <div class="col-span-2 md:col-span-6">
      <p class="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink">DHIZAR</p>
      <p class="mt-3 max-w-[40ch] text-body">{{TAGLINE}}</p>
    </div>
    <nav class="md:col-span-2" aria-label="Product">column: Architecture, Telemetry, Paradigm</nav>
    <nav class="md:col-span-2" aria-label="Company">column: Team, Contact, Careers</nav>
    <nav class="md:col-span-2" aria-label="Legal">column: Privacy, Terms</nav>
  </div>
  <p class="container-x mt-10 text-sm text-body">&copy; {{YEAR}} Dhizar. All rights reserved.</p>

  <div aria-hidden="true" class="pointer-events-none select-none -mb-[0.12em] mt-6 overflow-hidden whitespace-nowrap text-center font-display font-extrabold leading-[0.8] tracking-[-0.06em] text-ink/[0.07] text-[clamp(5rem,24vw,22rem)]">DHIZAR</div>
</footer>
```

- Primary button text: `Get Developer Access` (sharp red `#a71616`, hover `#780606`, white text, 7.6:1)
- Secondary button text, exact: `We're Hiring • Join the Core Team` (the bullet character is part of the label, not an animated element)
- The two buttons are the only filled controls in the card. Red appears once per viewport here
- Watermark: decorative only (`aria-hidden`), no pointer events, no animation, clipped by the footer bottom edge so about 12% of the glyph height is cut. It must never create horizontal scroll (`overflow-hidden` on the footer, `whitespace-nowrap`)
- Footer links: `text-body hover:text-ink underline-offset-4 hover:underline`, 44px minimum touch height on mobile

### 7.4 Placeholder spec for future assets
No image slots in this section. If a hardware render is later wanted in the CTA card, add a third column `lg:col-span-4` with a `slot aspect-[4/3]` and reduce the text column to `lg:col-span-5` and the button column to `lg:col-span-3`.

---

## 8. Cross-Section Responsive and Anti-Emptiness Rules

1. No section may use a centred single column narrower than 960px on `lg` and up. Every section has either a 12-column header row (7 + 5) or a 2-column split (6 + 4, 4 + 8, 7 + 5)
2. Text blocks are capped by `max-w-[52ch]`, but they always sit beside a card, grid or slot so side space is filled
3. On `2xl` (1536+) the container stays `max-w-7xl`; hairlines (`border-ink/10`) and the footer watermark run full-bleed so the page does not feel cropped
4. All grid children get `min-w-0`. All big numbers are `flex-wrap` with separate unit spans. Never use fixed pixel widths on text containers
5. Card equal heights: use `items-stretch` (default) and `mt-auto` for footers inside cards
6. Tap targets 44px minimum. Visible focus ring on every interactive element: `outline 3px, offset 3px, ink` on sky and white
7. Semantic order: one `h1` (hero), one `h2` per section, `h3` for card titles, landmarks `header`, `main`, `footer`, `nav` with `aria-label`
8. Scroll reveal: add `data-reveal` to cards and header blocks; `reveal.js` sets final state immediately when `prefers-reduced-motion` is on

---

## 9. Build Checklist for the Coding Agent

- [ ] Tokens, fonts and Tailwind config match section 0 exactly. No other colours or fonts appear in the DOM
- [ ] Background is `#8ea9d9` on `body`. No section changes the background colour
- [ ] Every section matches its grid spec at 1280px and collapses cleanly at 390px
- [ ] `0.00mm`, `USB HID`, `180 - 240` and `< 48.4` render without clipping at 1024, 1280 and 1536 widths
- [ ] Waveform canvas works with DPR 1 and 2, pauses off-screen, has a static reduced-motion frame
- [ ] Red used only for: primary CTAs, the hero read-head line, the Dhizar comparison card outline, the 15 Hz matrix row outline
- [ ] Search the final HTML, CSS and JS for `//` used as decoration in UI copy: zero results. Search for `animate-pulse`, `animate-ping`, `blur-` glow classes, `text-shadow`, `drop-shadow` with colour: zero results
- [ ] Every slot has a fixed aspect ratio, a `[data-placeholder]` child, and swaps without layout shift
- [ ] Drawer: focus trap, Esc, scroll lock, return focus
- [ ] Lighthouse accessibility 95 or higher
