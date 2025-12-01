import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  className?: string;
  embedded?: boolean;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ className, embedded = false }) => {
  // Random starting position (0-16.666%) so it doesn't always start from the beginning
  const randomStart = useMemo(() => Math.random() * 16.666666, []);

  // Ordered as requested: Boardy, TMX, Ivey, RBC, Waterloo, Cornell, BMO, UC Davis, USTC, UPP, Huron, Laurier
  const logos = [
    { src: '/assets/Boardy Logo.png', alt: 'Boardy AI' },
    { src: '/assets/TMX Logo.png', alt: 'TMX Group' },
    { src: '/assets/Ivey Logo.png', alt: 'Ivey Business School' },
    { src: '/assets/rbccm_logo.png', alt: 'RBC Capital Markets' },
    { src: '/assets/Waterloo Logo.png', alt: 'University of Waterloo' },
    { src: '/assets/Cornell Medicine Logo.png', alt: 'Cornell Medicine' },
    { src: '/assets/BMO_Capital_Markets_logo.svg.png', alt: 'BMO Capital Markets' },
    { src: '/assets/UC Davis Logo.png', alt: 'UC Davis' },
    { src: '/assets/university of science and technology of china logo.png', alt: 'USTC' },
    { src: '/assets/upp-logo-c.png', alt: 'University Pension Plan Ontario' },
    { src: '/assets/Huron Logo.png', alt: 'Huron University College (Western)' },
    { src: '/assets/Laurier Logo.png', alt: 'Wilfrid Laurier University' },
  ];

  // Duplicate logos many times for truly seamless infinite loop (no visible reset)
  // We need enough copies so that when one set scrolls out, the next identical set is already in view
  // Using 6 copies for smoother seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  const content = (
    <>
      <div className={embedded ? "mb-8 text-center" : "container mx-auto mb-10"}>
        <div className={embedded ? "" : "max-w-5xl mx-auto text-center"}>
          <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-4">
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.01em]">
            Where Our Team Has Worked & Studied
          </h2>
        </div>
      </div>

      {/* Scrolling container - scrollable */}
      <div className="relative">
        {/* Fade edges */}
        <div className={cn("absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none", embedded ? "bg-gradient-to-r from-gray-50 to-transparent" : "bg-gradient-to-r from-white to-transparent")} />
        <div className={cn("absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none", embedded ? "bg-gradient-to-l from-gray-50 to-transparent" : "bg-gradient-to-l from-white to-transparent")} />
        
        {/* Scrolling logos - CSS animation with hover pause */}
        <div className="overflow-hidden">
          <div 
            className="flex animate-scroll-left" 
            style={{ 
              width: 'fit-content',
              animationDelay: `-${(randomStart / 16.666666) * 42}s`
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
                style={{ width: '280px', height: '80px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  style={{ 
                    height: '64px',
                    width: 'auto',
                    objectFit: 'contain',
                    maxWidth: '100%'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  if (embedded) {
    return <div className={cn('overflow-hidden', className)}>{content}</div>;
  }

  return (
    <section className={cn('py-20 bg-white overflow-hidden border-t border-gray-100', className)}>
      {content}
    </section>
  );
};

export default LogoMarquee;

