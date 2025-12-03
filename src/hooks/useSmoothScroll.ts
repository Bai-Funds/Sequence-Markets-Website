import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetId = id.startsWith('#') ? id.substring(1) : id;
    const element = document.getElementById(targetId);
    
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const offset = headerHeight - 40;
      
      const rect = element.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      
      window.scrollTo({
        top: absoluteTop - offset,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};
