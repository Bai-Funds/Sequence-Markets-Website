import React, { useEffect, useState } from 'react';

interface CodeLine {
  id: number;
  text: string;
  x: number;
  y: number;
  displayLength: number;
  maxLength: number;
  phase: 'typing' | 'showing' | 'deleting' | 'done';
  speed: number;
  side: 'left' | 'right';
}

const codeSnippets = [
  'async fn route_order(order: &Order)',
  'let venue = select_optimal_venue(&depth)',
  'pub struct ExecutionEngine { router }',
  'impl Strategy for SmartRouter',
  'fn calculate_slippage(price: f64)',
  'match venue.submit_order(child)',
  'let latency = measure_roundtrip()',
  'redis::streams::xadd("orders")',
  'SELECT avg(fill_rate) FROM exec',
  'def optimize_routing(features):',
  'model.predict(state).argmax()',
  'weights = softmax(scores, dim=-1)',
  'async def stream_depth(symbol):',
  'ORDER BY timestamp DESC LIMIT',
  'fn process_fill(fill: &Fill)',
  'const router = new Router()',
  'await exchange.connect()',
  'pub fn execute(&mut self)',
  'for venue in venues.iter()',
  'if fill_rate > threshold',
  'return Ok(ExecutionResult)',
  'let mut state = State::new()',
  '.filter(|o| o.is_active)',
  'HashMap::new()',
  'Vec::with_capacity(100)',
  'tokio::spawn(async move',
  'SELECT * FROM orders WHERE',
  'INSERT INTO fills VALUES',
  'np.array([price, volume])',
  'torch.tensor(features)',
];

const CodeRain: React.FC = () => {
  const [lines, setLines] = useState<CodeLine[]>([]);

  useEffect(() => {
    const createLine = (id: number, startY?: number): CodeLine => {
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const side = Math.random() > 0.5 ? 'left' : 'right';
      return {
        id,
        text,
        // Position on sides only - avoid center content area (25-75% is content zone)
        x: side === 'left'
          ? 2 + Math.random() * 18  // 2% to 20% from left (well clear of center)
          : 80 + Math.random() * 18, // 80% to 98% from left (well clear of center)
        y: startY ?? Math.random() * 100,
        displayLength: 0,
        maxLength: text.length,
        phase: 'typing',
        speed: 0.8 + Math.random() * 1.2,
        side,
      };
    };

    // Initialize with more lines
    const initial: CodeLine[] = [];
    for (let i = 0; i < 20; i++) {
      initial.push(createLine(i));
    }
    setLines(initial);

    let idCounter = 20;
    let lastTime = Date.now();

    const interval = setInterval(() => {
      // Skip updates if tab is hidden to prevent accumulation/busy state
      if (document.hidden) return;

      const now = Date.now();
      // Cap delta time to prevent huge jumps after lag
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;

      setLines(prev => {
        return prev.map(line => {
          if (line.phase === 'typing') {
            const newLength = line.displayLength + line.speed;
            if (newLength >= line.maxLength) {
              return { ...line, displayLength: line.maxLength, phase: 'showing' };
            }
            return { ...line, displayLength: newLength };
          } else if (line.phase === 'showing') {
            // Random chance to start deleting
            if (Math.random() < 0.008) {
              return { ...line, phase: 'deleting' };
            }
            return line;
          } else if (line.phase === 'deleting') {
            const newLength = line.displayLength - line.speed * 1.5;
            if (newLength <= 0) {
              return createLine(idCounter++, line.y);
            }
            return { ...line, displayLength: newLength };
          }
          return line;
        });
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none font-mono z-0">
      {lines.map(line => (
        <div
          key={line.id}
          className="absolute text-[10px] whitespace-nowrap"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            opacity: 0.18,
            color: '#555',
            transform: line.side === 'left' ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          {line.text.slice(0, Math.floor(line.displayLength))}
          <span className="opacity-60">|</span>
        </div>
      ))}
    </div>
  );
};

export default CodeRain;
