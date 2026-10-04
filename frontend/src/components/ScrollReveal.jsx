import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  threshold = 0.12,
  rootMargin = '0px 0px -30px 0px',
  once = true,
}) {
  const ref = useRef(null);
  const supportsObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [isVisible, setIsVisible] = useState(!(supportsObserver && !prefersReducedMotion));

  useEffect(() => {
    if (!supportsObserver || prefersReducedMotion) {
      return undefined;
    }

    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(node);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, prefersReducedMotion, rootMargin, supportsObserver, threshold]);

  const combinedClassName = ['scroll-reveal', className, isVisible ? 'is-visible' : '']
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <Component
      ref={ref}
      className={combinedClassName}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Component>
  );
}
