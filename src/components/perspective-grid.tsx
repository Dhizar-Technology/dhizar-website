import React, { useMemo, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

// Original Vengeance UI vibrant pastel / spectrum hover colors
const HOVER_COLORS = [
  'hover:bg-[#4cb3a6]',
  'hover:bg-[#f4b1b1]',
  'hover:bg-[#a7e5d9]',
  'hover:bg-[#4cb3a6]',
  'hover:bg-[#6b8cc8]',
  'hover:bg-[#4cb3a6]',
  'hover:bg-[#f4b1b1]',
];

// Tight, high-density 54x54 grid (strictly calibrated to ~22px-26px visual cell pitch, 2916 nodes)
const GRID_SIZE = 54;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;

// Bounds to keep autonomous snake and food prominently in the visible hero screen area
const MIN_X = 14;
const MAX_X = 40;
const MIN_Y = 16;
const MAX_Y = 38;
const STEP_INTERVAL_MS = 105; // 1 step every 105ms
const MAX_SNAKE_LENGTH = 18; // Resets when length reaches 18

const SEG_CLASSES = [
  'grid-snake-seg-0', // Soft Cyan (#4cb3a6)
  'grid-snake-seg-1', // Soft Teal (#4cb3a6)
  'grid-snake-seg-2', // Soft Green (#4cb3a6)
  'grid-snake-seg-3', // Soft Amber (#a7e5d9)
  'grid-snake-seg-4', // Soft Coral (#f4b1b1)
  'grid-snake-seg-5', // Soft Violet (#6b8cc8)
  'grid-snake-seg-6', // Soft Pink (#f4b1b1)
];

const ALL_SNAKE_CLASSES = ['grid-snake-head', ...SEG_CLASSES];

interface Point {
  x: number;
  y: number;
}

export interface PerspectiveGridProps {
  children?: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
}

function spawnFood(snake: Point[]): Point {
  for (let i = 0; i < 80; i++) {
    const x = Math.floor(Math.random() * (MAX_X - MIN_X + 1)) + MIN_X;
    const y = Math.floor(Math.random() * (MAX_Y - MIN_Y + 1)) + MIN_Y;
    const onSnake = snake.some((s) => s.x === x && s.y === y);
    if (!onSnake) {
      return { x, y };
    }
  }
  return { x: 27, y: 27 };
}

function getNextMove(head: Point, neck: Point | null, snake: Point[], food: Point): Point {
  const directions: Point[] = [
    { x: 0, y: -1 }, // Up
    { x: 0, y: 1 },  // Down
    { x: -1, y: 0 }, // Left
    { x: 1, y: 0 },  // Right
  ];

  // In-bounds & no immediate 180-degree turnaround into neck
  const validDirections = directions.filter((dir) => {
    const nx = head.x + dir.x;
    const ny = head.y + dir.y;
    if (nx < MIN_X || nx > MAX_X || ny < MIN_Y || ny > MAX_Y) return false;
    if (neck && nx === neck.x && ny === neck.y) return false;
    return true;
  });

  // Safe from self-collision (excluding the tail which will move forward)
  const safeDirections = validDirections.filter((dir) => {
    const nx = head.x + dir.x;
    const ny = head.y + dir.y;
    for (let i = 0; i < snake.length - 1; i++) {
      if (snake[i].x === nx && snake[i].y === ny) return false;
    }
    return true;
  });

  const candidates = safeDirections.length > 0 ? safeDirections : validDirections;
  if (candidates.length === 0) {
    return { x: Math.max(MIN_X, Math.min(MAX_X, head.x + 1)), y: head.y };
  }

  // Manhattan distance to food + slight preference for continuing in current direction
  const currentDir = neck
    ? { x: head.x - neck.x, y: head.y - neck.y }
    : { x: 1, y: 0 };

  candidates.sort((a, b) => {
    const distA = Math.abs(head.x + a.x - food.x) + Math.abs(head.y + a.y - food.y);
    const distB = Math.abs(head.x + b.x - food.x) + Math.abs(head.y + b.y - food.y);
    let scoreA = distA;
    let scoreB = distB;
    if (a.x === currentDir.x && a.y === currentDir.y) scoreA -= 0.15;
    if (b.x === currentDir.x && b.y === currentDir.y) scoreB -= 0.15;
    return scoreA - scoreB;
  });

  return { x: head.x + candidates[0].x, y: head.y + candidates[0].y };
}

export const PerspectiveGrid: React.FC<PerspectiveGridProps> = ({
  children,
  className = '',
  theme: propTheme,
}) => {
  const { theme: contextTheme } = useTheme();
  const activeTheme = propTheme || contextTheme || 'light';
  const isDark = activeTheme === 'dark';

  const gridRef = useRef<HTMLDivElement | null>(null);

  // Distribute colors across the tighter 54x54 grid in a balanced 2D pattern
  const cells = useMemo(() => {
    return Array.from({ length: TOTAL_CELLS }).map((_, index) => {
      const row = Math.floor(index / GRID_SIZE);
      const col = index % GRID_SIZE;
      const colorClass = HOVER_COLORS[(row * 3 + col * 5 + (row % 2)) % HOVER_COLORS.length];
      return colorClass;
    });
  }, []);

  const fadeStop = isDark ? '#0e1b33' : '#ffffff';
  const tileBorderClass = isDark ? 'border-white/[0.14]' : 'border-black/[0.14]';

  // Autonomous Grid-Cell Snake Animation (Clean, Flat, Zero Re-renders)
  useEffect(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return;

    // Cache element array once for fast O(1) direct indexing
    const cellElements = Array.from(gridEl.children) as HTMLElement[];

    const getEl = (pt: Point): HTMLElement | undefined => {
      return cellElements[pt.y * GRID_SIZE + pt.x];
    };

    const clearCell = (el?: HTMLElement) => {
      if (!el) return;
      el.classList.remove('grid-food-box', ...ALL_SNAKE_CLASSES);
    };

    // Initial state: 4 adjacent cells near the visible center
    let snake: Point[] = [
      { x: 27, y: 27 },
      { x: 26, y: 27 },
      { x: 25, y: 27 },
      { x: 24, y: 27 },
    ];
    let food: Point = spawnFood(snake);
    let stepCount = 0;

    // Initial styling
    getEl(food)?.classList.add('grid-food-box');
    getEl(snake[0])?.classList.add('grid-snake-head');
    for (let i = 1; i < snake.length; i++) {
      getEl(snake[i])?.classList.add(SEG_CLASSES[(i - 1) % SEG_CLASSES.length]);
    }

    const resetSnake = () => {
      // Clear old snake cells
      for (const seg of snake) {
        clearCell(getEl(seg));
      }
      const sx = Math.floor(Math.random() * (MAX_X - MIN_X - 8)) + MIN_X + 4;
      const sy = Math.floor(Math.random() * (MAX_Y - MIN_Y - 8)) + MIN_Y + 4;
      snake = [
        { x: sx, y: sy },
        { x: sx - 1, y: sy },
        { x: sx - 2, y: sy },
        { x: sx - 3, y: sy },
      ];
      stepCount = 0;
      getEl(snake[0])?.classList.add('grid-snake-head');
      for (let i = 1; i < snake.length; i++) {
        getEl(snake[i])?.classList.add(SEG_CLASSES[(i - 1) % SEG_CLASSES.length]);
      }
    };

    const interval = setInterval(() => {
      stepCount++;
      const head = snake[0];
      const neck = snake.length > 1 ? snake[1] : null;
      const nextHead = getNextMove(head, neck, snake, food);

      const ateFood = nextHead.x === food.x && nextHead.y === food.y;
      const segClass = SEG_CLASSES[stepCount % SEG_CLASSES.length];

      if (ateFood) {
        // Snake grows by 1 box (tail remains)
        snake = [nextHead, ...snake];

        // Old food box becomes the new snake head
        const newHeadEl = getEl(nextHead);
        if (newHeadEl) {
          newHeadEl.classList.remove('grid-food-box');
          newHeadEl.classList.add('grid-snake-head');
        }

        // Previous head becomes colorful palette body segment
        const oldHeadEl = getEl(head);
        if (oldHeadEl) {
          oldHeadEl.classList.remove('grid-snake-head');
          oldHeadEl.classList.add(segClass);
        }

        // Spawn new flat food box
        food = spawnFood(snake);
        getEl(food)?.classList.add('grid-food-box');
      } else {
        // Normal step: pop tail and clear only the vacated tail cell
        const tail = snake.pop();
        if (tail) {
          clearCell(getEl(tail));
        }

        snake = [nextHead, ...snake];

        // Previous head becomes colorful palette body segment
        const oldHeadEl = getEl(head);
        if (oldHeadEl) {
          oldHeadEl.classList.remove('grid-snake-head');
          oldHeadEl.classList.add(segClass);
        }

        // New head box lights up
        const newHeadEl = getEl(nextHead);
        if (newHeadEl) {
          clearCell(newHeadEl);
          newHeadEl.classList.add('grid-snake-head');
        }
      }

      // Reset threshold: when snake length reaches 18 boxes
      if (snake.length >= MAX_SNAKE_LENGTH) {
        resetSnake();
      }
    }, STEP_INTERVAL_MS);

    return () => {
      clearInterval(interval);
      clearCell(getEl(food));
      for (const seg of snake) {
        clearCell(getEl(seg));
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full min-h-screen ${isDark ? 'bg-[#0e1b33]' : 'bg-white'
        } overflow-hidden flex items-center justify-center transition-colors duration-300 ${className}`}
      style={
        {
          '--fade-stop': fadeStop,
        } as React.CSSProperties
      }
    >
      {/* CSS Rules for Flat Matte Snake & Food Box (NO box-shadow, NO bloom, NO halo, flush inside borders) */}
      <style>{`
        /* Food Box: Clean, flat, matte accent tile strictly flush inside cell borders */
        .grid-food-box:not(:hover) {
          background-color: #d32f2f !important;
          border-color: #f4b1b1 !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 6;
        }

        /* Snake Head: Flat, solid accent box */
        .grid-snake-head:not(:hover) {
          background-color: #4cb3a6 !important;
          border-color: #9fb7e0 !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 5;
        }

        /* Snake Segments: Flat, matte palette colors with zero neon glow or bloom */
        .grid-snake-seg-0:not(:hover) {
          background-color: rgba(56, 189, 248, 0.75) !important;
          border-color: rgba(56, 189, 248, 0.85) !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 4;
        }
        .grid-snake-seg-1:not(:hover) {
          background-color: rgba(45, 212, 191, 0.75) !important;
          border-color: rgba(45, 212, 191, 0.85) !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 4;
        }
        .grid-snake-seg-2:not(:hover) {
          background-color: rgba(74, 222, 128, 0.75) !important;
          border-color: rgba(74, 222, 128, 0.85) !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 4;
        }
        .grid-snake-seg-3:not(:hover) {
          background-color: rgba(251, 191, 36, 0.75) !important;
          border-color: rgba(251, 191, 36, 0.85) !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 4;
        }
        .grid-snake-seg-4:not(:hover) {
          background-color: rgba(248, 113, 113, 0.75) !important;
          border-color: rgba(248, 113, 113, 0.85) !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 4;
        }
        .grid-snake-seg-5:not(:hover) {
          background-color: rgba(168, 85, 247, 0.75) !important;
          border-color: rgba(168, 85, 247, 0.85) !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 4;
        }
        .grid-snake-seg-6:not(:hover) {
          background-color: rgba(244, 114, 182, 0.75) !important;
          border-color: rgba(244, 114, 182, 0.85) !important;
          box-shadow: none !important;
          filter: none !important;
          z-index: 4;
        }
      `}</style>

      {/* 1. 3D PERSPECTIVE CONTAINER */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-auto overflow-hidden"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Full-Screen Coverage Tilted Grid with dynamic theme tile borders */}
        <div
          ref={gridRef}
          className="absolute top-1/2 left-1/2 w-[145vw] max-w-[84rem] aspect-square grid select-none"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            transform: 'translate(-50%, -50%) rotateX(35deg) rotateY(-5deg) rotateZ(15deg)',
            transformOrigin: 'center center',
          }}
        >
          {/* Individual Interactive Cells (Preserving spectrum pastel hover interactions without cast shadows) */}
          {cells.map((colorClass, index) => (
            <div
              key={index}
              data-idx={index}
              className={`w-full h-full border ${tileBorderClass} transition-[background-color,border-color] duration-500 hover:duration-0 ${colorClass}`}
            />
          ))}
        </div>
      </div>

      {/* 2. RADIAL VIGNETTE OVERLAY (fading smoothly into active theme background at 85%) */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at center, transparent 30%, ${fadeStop} 85%)`,
        }}
      />

      {/* 3. FOREGROUND COCKPIT CONTENT (z-20) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24 pointer-events-none flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default PerspectiveGrid;
