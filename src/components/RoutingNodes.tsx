import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
}

interface Line {
  id: number;
  path: Node[];
  progress: number;
  opacity: number;
  color: string;
}

const RoutingNodes: React.FC = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const rafRef = useRef<number>(0);
  const lineIdRef = useRef(0);

  useEffect(() => {
    // Generate random node positions
    const nodes: Node[] = [];
    // Entry nodes (left side)
    for (let i = 0; i < 5; i++) {
      nodes.push({ x: 0, y: 15 + i * 17 });
    }
    // Middle nodes (random positions)
    for (let i = 0; i < 12; i++) {
      nodes.push({
        x: 20 + Math.random() * 60,
        y: 10 + Math.random() * 80
      });
    }
    // Exit nodes (right side)
    for (let i = 0; i < 5; i++) {
      nodes.push({ x: 100, y: 15 + i * 17 });
    }

    const createLine = (): Line => {
      const startNode = nodes[Math.floor(Math.random() * 5)]; // Left entry
      const path: Node[] = [{ ...startNode }];

      // Add 2-4 intermediate nodes
      const numMidNodes = 2 + Math.floor(Math.random() * 3);
      let lastX = 0;
      for (let i = 0; i < numMidNodes; i++) {
        const midNodes = nodes.filter(n => n.x > lastX + 10 && n.x < 90);
        if (midNodes.length > 0) {
          const chosen = midNodes[Math.floor(Math.random() * midNodes.length)];
          path.push({ ...chosen });
          lastX = chosen.x;
        }
      }

      // Add exit node
      const exitNode = nodes[17 + Math.floor(Math.random() * 5)];
      path.push({ ...exitNode });

      return {
        id: lineIdRef.current++,
        path,
        progress: 0,
        opacity: 0.3 + Math.random() * 0.3,
        color: `rgba(100, 100, 100, ${0.3 + Math.random() * 0.2})`,
      };
    };

    // Initialize with some lines
    const initialLines: Line[] = [];
    for (let i = 0; i < 4; i++) {
      const line = createLine();
      line.progress = Math.random() * 100;
      initialLines.push(line);
    }
    setLines(initialLines);

    const animate = () => {
      if (!document.hidden) {
        setLines(prev => {
          let updated = prev.map(line => ({
            ...line,
            progress: line.progress + 0.5,
          })).filter(line => line.progress < 120);

          // Spawn new lines
          if (updated.length < 6 && Math.random() < 0.03) {
            updated.push(createLine());
          }

          return updated;
        });
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const getPathD = (path: Node[]): string => {
    if (path.length < 2) return '';
    let d = `M ${path[0].x} ${path[0].y}`;
    for (let i = 1; i < path.length; i++) {
      // Use quadratic curves for smoother lines
      const prev = path[i - 1];
      const curr = path[i];
      const midX = (prev.x + curr.x) / 2;
      d += ` Q ${midX} ${prev.y}, ${midX} ${(prev.y + curr.y) / 2}`;
      d += ` Q ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#666" stopOpacity="0" />
            <stop offset="20%" stopColor="#666" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#666" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#666" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Draw node points */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={20 + (i % 4) * 20}
            cy={20 + Math.floor(i / 4) * 30}
            r="1"
            fill="#ccc"
            opacity="0.3"
          />
        ))}

        {/* Draw lines */}
        {lines.map(line => (
          <g key={line.id}>
            <path
              d={getPathD(line.path)}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              fill="none"
              strokeDasharray="200"
              strokeDashoffset={200 - line.progress * 2}
              opacity={line.opacity * (line.progress > 100 ? (120 - line.progress) / 20 : 1)}
            />
            {/* Moving dot at the head */}
            {line.progress < 100 && (
              <circle
                cx={line.path[Math.min(Math.floor(line.progress / 100 * (line.path.length - 1)), line.path.length - 1)]?.x || 0}
                cy={line.path[Math.min(Math.floor(line.progress / 100 * (line.path.length - 1)), line.path.length - 1)]?.y || 0}
                r="0.8"
                fill="#666"
                opacity={0.6}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default RoutingNodes;

