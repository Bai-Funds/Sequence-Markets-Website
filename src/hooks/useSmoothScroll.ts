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

    // Handle hash if present
    const targetId = id.startsWith('#') ? id.substring(1) : id;
    const element = document.getElementById(targetId);
    
    if (element) {
      // Always offset by a fixed amount to account for the sticky header
      // The header is 80px initially, 56px when scrolled. 
      // We should probably use the smaller value (56px) or a bit more to give breathing room.
      // Let's use 80px to be safe and spacious, or 60px.
      // The user mentioned "sections not cut properly", maybe they want more space?
      // Let's stick to a consistent offset.
      const headerOffset = 60; 
      const rect = element.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      
      window.scrollTo({
        top: absoluteTop - headerOffset,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};
