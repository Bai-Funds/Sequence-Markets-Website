import React from 'react';

const AnimatedLines: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Horizontal animated lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          style={{
            top: `${12 + i * 12}%`,
            left: '-100%',
            right: '-100%',
            animation: `slideRight ${15 + i * 2}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.3 + (i % 3) * 0.1,
          }}
        />
      ))}
      {/* Vertical animated lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          style={{
            left: `${15 + i * 15}%`,
            top: '-100%',
            bottom: '-100%',
            animation: `slideDown ${18 + i * 2}s linear infinite`,
            animationDelay: `${i * 0.7}s`,
            opacity: 0.2 + (i % 2) * 0.1,
          }}
        />
      ))}
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(50%); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(50%); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLines;

