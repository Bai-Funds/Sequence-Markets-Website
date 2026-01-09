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
                  // { id: 'team', label: 'Team' }, // Temporarily deprecated
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

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="text-sm text-gray-400 font-normal">
              &copy; {new Date().getFullYear()} Sequence Markets. All rights reserved.
            </div>
            <div className="text-center md:text-left">
              <a
                href="mailto:team@sequencemkts.com"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-normal"
              >
                team@sequencemkts.com
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 pt-4">
            <a
              href="https://x.com/SequenceMarkets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="X / Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://t.me/sequencemarkets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/sequence-markets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.ycombinator.com/companies?batch=Winter%202026&query=sequence%20Markets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Y Combinator"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5L7 18.5h3.5l1.5-4 1.5 4H17L12 6.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
