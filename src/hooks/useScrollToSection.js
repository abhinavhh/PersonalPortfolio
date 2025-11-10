// src/hooks/useScrollToSection.js
import { useCallback } from 'react';

export const useScrollToSection = (onComplete) => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onComplete?.();
    }
  }, [onComplete]);

  return scrollToSection;
};