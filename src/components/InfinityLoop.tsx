import React, { useEffect, useState } from 'react';

const InfinityLoop: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const animate = () => {
      if (document.hidden) return;
      setOffset(prev => (prev + 1) % 1000);
    };
    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Fixed labels outside */}
      <div className="absolute left-[12%] top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-300 opacity-40">
        IN
      </div>
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-300 opacity-40">
        OUT
      </div>

      <svg
        width="70%"
        height="70%"
        viewBox="0 0 400 200"
        className="opacity-6"
      >
        {/* Main infinity symbol - static size */}
        <path
          d="M 100 100 
             C 100 50, 150 50, 200 100 
             C 250 150, 300 150, 300 100 
             C 300 50, 250 50, 200 100 
             C 150 150, 100 150, 100 100"
          stroke="#e0e0e0"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Animated flowing line on infinity - this is the feedback flow */}
        <path
          d="M 100 100 
             C 100 50, 150 50, 200 100 
             C 250 150, 300 150, 300 100 
             C 300 50, 250 50, 200 100 
             C 150 150, 100 150, 100 100"
          stroke="#999"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="35 365"
          strokeDashoffset={-offset}
          opacity="0.35"
        />

        {/* Second flowing line (offset) for continuous flow */}
        <path
          d="M 100 100 
             C 100 50, 150 50, 200 100 
             C 250 150, 300 150, 300 100 
             C 300 50, 250 50, 200 100 
             C 150 150, 100 150, 100 100"
          stroke="#aaa"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="20 380"
          strokeDashoffset={-offset - 200}
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export default InfinityLoop;
