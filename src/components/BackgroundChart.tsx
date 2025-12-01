import React, { useEffect, useRef, useState } from 'react';

interface BackgroundChartProps {
  className?: string;
  lightMode?: boolean;
}

const BackgroundChart: React.FC<BackgroundChartProps> = ({ lightMode = false }) => {
  type LineState = {
    seed: number;
    x: number;
    y: number;
    d: string;
    rng: () => number;
    color: string;
    volatility: number;
    upwardBias: number;
    stepX: number;
    yOffset: number;
    opacity: number;
    isFading: boolean;
    spawnedNext: boolean;
  };

  const maxConcurrentLines = 6;
  const nextSpawnAtRef = useRef(0);
  
  const spawnLine = (indexHint: number = 0): LineState => {
    const seed = Math.floor(Math.random() * 1_000_000);
    let s = seed || 1;
    const rng = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
    const yOffset = 40 * indexHint;
    return {
      seed,
      x: 0,
      y: 900 - yOffset,
      d: 'M 0 ' + (900 - yOffset).toString(),
      rng,
      color: lightMode 
        ? (indexHint % 2 === 0 ? '#000000' : '#1a1a1a')
        : (indexHint % 2 === 0 ? '#666666' : '#333333'),
      volatility: 15 + (indexHint % 3) * 2,
      upwardBias: 0.56,
      stepX: 4 + (indexHint % 3),
      yOffset,
      opacity: 1,
      isFading: false,
      spawnedNext: false,
    };
  };

  const [lines, setLines] = useState<LineState[]>(() => [spawnLine(0)]);

  const rafRef = useRef(0);
  const frameCounter = useRef(0);

  useEffect(() => {
    const maxX = 1000;
    const minY = 80;
    const maxY = 950;

    const update = () => {
      frameCounter.current += 1;
      if (frameCounter.current % 2 === 0) {
        setLines(prevLines => {
          const spawnThreshold = 0.6 * maxX;
          const now = performance.now();
          
          const nextLines = prevLines.map((line, idx) => {
            let { x, y, d, rng, upwardBias, volatility, stepX, isFading, opacity, spawnedNext } = line;

            if (!isFading) {
              x += stepX;

              const r = rng();
              const direction = r < upwardBias ? -1 : 1;
              const magnitude = (rng() * 2 - 1) * volatility;
              y = Math.min(maxY, Math.max(minY, y + direction * Math.abs(magnitude)));

              const nextSeg = ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
              d = d + nextSeg;

              if (x > spawnThreshold && !spawnedNext) {
                spawnedNext = true;
              }

              if (x >= maxX) {
                isFading = true;
              }
            } else {
              opacity -= 0.01;
              if (opacity <= 0) {
                const replacement = spawnLine(idx);
                return replacement;
              }
            }

            return { ...line, x, y, d, isFading, opacity, spawnedNext };
          });

          const eligible = nextLines.some(l => l.spawnedNext);
          if (eligible) {
            nextLines.forEach(l => { if (l.spawnedNext) l.spawnedNext = false; });
            if (now >= nextSpawnAtRef.current && nextLines.length < maxConcurrentLines) {
              nextLines.push(spawnLine(nextLines.length));
              const cooldown = 300 + Math.random() * 900;
              nextSpawnAtRef.current = now + cooldown;
            }
          }

          return nextLines;
        });
      }

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const lineColor = lightMode ? '#000000' : '#8a8a8a';
  const glowColor = lightMode ? '#000000' : '#ffffff';

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id={`neonLine-${lightMode ? 'light' : 'dark'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.0" />
            <stop offset="60%" stopColor={glowColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={glowColor} stopOpacity="0.9" />
          </linearGradient>
          <filter id={`neonGlow-${lightMode ? 'light' : 'dark'}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lines.map((line, idx) => (
          <g key={`line-${idx}`}>
            <path
              d={line.d}
              stroke={lineColor}
              strokeOpacity={0.6 * line.opacity}
              strokeWidth="2.5"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`M ${Math.max(0, line.x - 70).toFixed(1)} ${line.y.toFixed(1)} L ${line.x.toFixed(1)} ${line.y.toFixed(1)}`}
              stroke={`url(#neonLine-${lightMode ? 'light' : 'dark'})`}
              strokeOpacity={0.8 * line.opacity}
              strokeWidth="4"
              strokeLinecap="round"
              filter={`url(#neonGlow-${lightMode ? 'light' : 'dark'})`}
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BackgroundChart;
