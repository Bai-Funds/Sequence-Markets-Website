import React, { useEffect, useState } from 'react';

interface Quote {
  id: number;
  symbol: string;
  price: string;
  change: string;
  y: number;
  speed: number;
  side: 'left' | 'right';
  x: number;
}

const symbols = ['BTC', 'ETH', 'SOL', 'AVAX', 'MATIC', 'LINK', 'DOT', 'ADA', 'XRP', 'DOGE', 'UNI', 'AAVE', 'ATOM', 'FTM', 'NEAR', 'ARB', 'OP', 'APT', 'SUI', 'SEI'];

const QuoteStream: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    // Initialize more quotes
    const initialQuotes: Quote[] = [];
    for (let i = 0; i < 60; i++) {
      initialQuotes.push(createQuote(i));
    }
    setQuotes(initialQuotes);

    const interval = setInterval(() => {
      setQuotes(prev => {
        return prev.map(q => {
          const newY = q.y - q.speed;
          if (newY < -5) {
            return createQuote(q.id);
          }
          return { ...q, y: newY };
        });
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  function createQuote(id: number): Quote {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const price = (Math.random() * 50000 + 10).toFixed(2);
    const changeVal = (Math.random() * 10 - 5).toFixed(2);
    const change = parseFloat(changeVal) >= 0 ? `+${changeVal}%` : `${changeVal}%`;
    const side = Math.random() > 0.5 ? 'left' : 'right';
    return {
      id,
      symbol,
      price,
      change,
      y: 100 + Math.random() * 30,
      speed: 0.15 + Math.random() * 0.25,
      side,
      // Randomize x position within the side column - closer to center
      x: side === 'left' 
        ? 2 + Math.random() * 18  // 2% to 20% from left
        : 80 + Math.random() * 18, // 80% to 98% from left
    };
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {quotes.map(q => (
        <div
          key={q.id}
          className="absolute font-mono text-[10px] whitespace-nowrap"
          style={{
            left: `${q.x}%`,
            top: `${q.y}%`,
            opacity: 0.25 + Math.random() * 0.15,
            color: '#666',
            transform: 'translateX(-50%)',
          }}
        >
          <span className="font-semibold">{q.symbol}</span>
          <span className="ml-1">${q.price}</span>
          <span className={`ml-1 ${parseFloat(q.change) >= 0 ? 'text-green-600' : 'text-red-600'}`} style={{ opacity: 0.7 }}>
            {q.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuoteStream;
