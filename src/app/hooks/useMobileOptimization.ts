/**
 * useMobileOptimization Hook
 * PURPOSE: Detect mobile devices and optimize animations accordingly
 * Returns: { isMobile, shouldReduceMotion, animationConfig }
 */

import { useState, useEffect } from 'react';

interface AnimationConfig {
  duration: number;
  delay: number;
  enabled: boolean;
}

export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setShouldReduceMotion(mediaQuery.matches);
    };

    // Initial check
    checkMobile();
    checkReducedMotion();

    // Listen for resize
    window.addEventListener('resize', checkMobile);

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, []);

  // Animation configuration based on device and preferences
  const animationConfig: AnimationConfig = {
    duration: isMobile ? 0.2 : 0.4,
    delay: isMobile ? 0 : 0.1,
    enabled: !shouldReduceMotion,
  };

  return {
    isMobile,
    shouldReduceMotion,
    animationConfig,
  };
}
