'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Fades + slides an element in once it scrolls into view. The ref is
 * returned separately from the render props so components never read a ref
 * value while rendering. `motion-reduce:` strips the animated transition for
 * users who prefer reduced motion; the element still just appears once it's
 * actually in view.
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const props = {
    visible,
    className: 'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:duration-0',
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transitionDelay: visible ? `${delayMs}ms` : '0ms',
    } as const,
  };

  return [ref, props] as const;
}
