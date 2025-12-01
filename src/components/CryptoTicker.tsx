import React, { useState, useEffect } from 'react';

interface CryptoPrice {
  symbol: string;
  price: number;
  change: number;
}

const CryptoTicker: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC', price: 45250.32, change: 2.34 },
    { symbol: 'ETH', price: 2380.15, change: -1.23 },
    { symbol: 'SOL', price: 102.87, change: 5.67 },
    { symbol: 'AVAX', price: 38.92, change: 3.21 },
    { symbol: 'MATIC', price: 0.89, change: -0.45 },
    { symbol: 'LINK', price: 15.43, change: 1.89 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => 
        prev.map(crypto => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() - 0.5) * 0.002),
          change: crypto.change + (Math.random() - 0.5) * 0.1,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Duplicate for seamless loop
  const duplicatedPrices = [...prices, ...prices];

  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none opacity-10" style={{ zIndex: 0 }}>
      <div className="overflow-hidden py-3 bg-gradient-to-t from-black/5 to-transparent">
        <div className="flex animate-scroll-left" style={{ width: 'fit-content' }}>
          {duplicatedPrices.map((crypto, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-6 text-black font-mono text-sm whitespace-nowrap"
            >
              <span className="font-bold">{crypto.symbol}</span>
              <span>${crypto.price.toFixed(2)}</span>
              <span className={crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;

