import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
    return () => body.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  const scrollToSection = useSmoothScroll();

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[70] transition-all duration-300',
        isScrolled
          ? 'h-14 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'h-20 bg-transparent',
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center transition-opacity hover:opacity-70 h-full"
        >
          <img
            src="/assets/logo-light.png"
            alt="Sequence Markets"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </button>

        <div className="hidden md:flex items-center space-x-10">
          <NavLinks scrollToSection={scrollToSection} />
        </div>

        <button
          className="md:hidden flex items-center text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-5 transition-all duration-300",
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          )}>
            <span className="block w-5 h-[1px] bg-gray-900 mb-1.5" />
            <span className="block w-5 h-[1px] bg-gray-900 mb-1.5" />
            <span className="block w-3.5 h-[1px] bg-gray-900" />
          </span>
        </button>
      </div>

      <div className={cn("md:hidden", isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn(
            "fixed inset-0 bg-black/20 z-40 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "fixed top-0 right-0 h-[100svh] w-[85vw] max-w-xs bg-white z-50 flex flex-col pt-14 px-8 border-l border-gray-200 shadow-xl transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-10">
            <img
              src="/assets/logo-light.png"
              alt="Sequence Markets"
              className="h-8 w-auto object-contain"
            />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block w-5 h-[1px] bg-gray-900 transform rotate-45 translate-y-[1px]" />
              <span className="block w-5 h-[1px] bg-gray-900 transform -rotate-45" />
            </button>
          </div>

          <nav className="flex flex-col space-y-5">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'what-we-do', label: 'Products' },
              { id: 'technology', label: 'Technology' },
              { id: 'team', label: 'Team' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                className="text-left text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-[0.2em] text-[11px] font-normal"
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'what-we-do', label: 'Products' },
    { id: 'technology', label: 'Technology' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-[11px] font-normal text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-[0.2em]"
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default Header;
