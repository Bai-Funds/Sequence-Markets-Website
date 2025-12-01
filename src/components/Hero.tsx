import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import BackgroundChart from './BackgroundChart';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'The Execution OS for Digital Assets';
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseBeforeDelete = 3000;
  const pauseBeforeType = 800;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, pauseBeforeType);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const line1Text = displayText.slice(0, 16);
  const line2Text = displayText.slice(16);

  return (
    <section className={cn('relative w-full min-h-[100svh] bg-white overflow-hidden', className)}>
      {/* Stock chart lines background - subtle */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <BackgroundChart lightMode />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto py-32 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.4em] font-medium mb-10 animate-fade-in">
              Execution Infrastructure
            </p>

            <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-[-0.02em] leading-[1.05] mb-12 min-h-[2.5em]">
              <span className="text-gray-900">
                {line1Text}
              </span>
              {line2Text && (
                <>
                  <br />
                  <span className="text-gray-400">{line2Text}</span>
                </>
              )}
              <span className={cn(
                "inline-block w-[4px] h-[0.85em] bg-gray-900 ml-1 align-middle transition-opacity duration-100",
                showCursor ? "opacity-100" : "opacity-0"
              )} />
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-14 font-normal animate-fade-in-up">
              Venue-neutral smart order routing for crypto and tokenised assets. We connect to global liquidity, evaluate real-time depth, fees and latency, and execute with precision.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delayed">
              <a 
                href="#what-we-do"
                className="inline-block bg-gray-900 text-white font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gray-800 transition-all duration-200"
              >
                What We Do
              </a>
              <a 
                href="#contact"
                className="inline-block border border-gray-300 text-gray-700 font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
