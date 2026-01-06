import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import BackgroundChart from './BackgroundChart';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'The Execution OS for Digital Assets';
  const typingSpeed = 80;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText]);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    } else {
      setShowCursor(false);
    }
  }, [displayText]);

  const line1Text = displayText.slice(0, 16);
  const line2Text = displayText.slice(16);

  return (
    <section id="home" className={cn('relative w-full min-h-[100svh] bg-white overflow-hidden', className)}>
      {/* Stock chart lines background - subtle */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <BackgroundChart lightMode />
      </div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-10"></div>

            <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-[-0.02em] leading-[1.05] mb-6 min-h-[2.5em]">
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
            
            <div className="flex items-center gap-6 mb-6 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.4em] font-medium">Backed by</span>
                <a 
                  href="https://www.ycombinator.com/companies?batch=Winter%202026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity duration-200"
                >
                  <img 
                    src="/assets/Y_Combinator_logo_text_wordmark.webp" 
                    alt="Y Combinator" 
                    className="h-6 md:h-8 w-auto object-contain opacity-80"
                  />
                </a>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.4em] font-medium">Partnered with</span>
                <a 
                  href="https://www.anthropic.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity duration-200"
                >
                  <img 
                    src="/assets/Anthropic_logo.svg.png" 
                    alt="Anthropic" 
                    className="h-4 md:h-6 w-auto object-contain opacity-70 max-w-[120px]"
                  />
                </a>
              </div>
            </div>
            
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
