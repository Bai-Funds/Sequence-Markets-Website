import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface PartnersProps {
  className?: string;
}

const Partners: React.FC<PartnersProps> = ({ className }) => {
  const partners = [
    { src: '/assets/Anthropic_logo.svg.png', alt: 'Anthropic' },
  ];

  return (
    <section id="partners" className={cn('py-20 bg-white border-t border-gray-100', className)}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-4">
                Partnerships
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.01em]">
                Companies We Partner With
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{ height: '80px' }}
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Partners;
