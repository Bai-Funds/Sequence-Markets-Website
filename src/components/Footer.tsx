import React from 'react';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = useSmoothScroll();

  return (
    <footer className={cn('py-14 bg-gray-50/80 border-t border-gray-200', className)}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14">
          <div>
            <img
              src="/assets/logo-light.png"
              alt="Sequence Markets"
              className="h-10 w-auto object-contain mb-5"
            />
            <p className="text-gray-500 text-sm max-w-xs font-normal leading-relaxed">
              The Execution OS for Digital Assets. Venue-neutral smart order routing for crypto and tokenised markets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <h4 className="text-gray-900 text-xs font-semibold uppercase tracking-[0.3em] mb-4">Company</h4>
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'team', label: 'Team' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors text-left font-normal"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-gray-900 text-xs font-semibold uppercase tracking-[0.3em] mb-4">Platform</h4>
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'what-we-do', label: 'Products' },
                  { id: 'technology', label: 'Technology' },
                  { id: 'how-it-works', label: 'How It Works' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors text-left font-normal"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 font-normal">
            &copy; {new Date().getFullYear()} Sequence Markets. All rights reserved.
          </div>
          <a
            href="mailto:team@baifunds.com"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-normal"
          >
            team@baifunds.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
