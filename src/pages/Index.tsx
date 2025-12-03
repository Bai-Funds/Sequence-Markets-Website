import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Gap from '@/components/Gap';
import FoundersInSearch from '@/components/FoundersInSearch';
import TechnologyPlatform from '@/components/TechnologyPlatform';
import About from '@/components/About';
import Community from '@/components/Community';
import Footer from '@/components/Footer';
import CryptoTicker from '@/components/CryptoTicker';

const Index = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        // Use fixed offset to match Header behavior
        const headerOffset = 60;
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          window.scrollTo({
            top: absoluteTop - headerOffset,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () { });
      });
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden relative bg-white">
      {/* Crypto ticker at bottom - always visible */}
      <CryptoTicker />

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Manifesto />
        <Gap />
        <TechnologyPlatform />
        <FoundersInSearch />
        <Community />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
