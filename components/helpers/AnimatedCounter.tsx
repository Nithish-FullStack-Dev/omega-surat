"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number; // in ms
};

function parseNumber(value: string) {
  const numeric = value.replace(/[^\d.]/g, "");
  const suffix = value.replace(/[\d.,]/g, "");
  return { number: parseFloat(numeric), suffix };
}

export function AnimatedCounter({
  value,
  duration = 1500,
}: AnimatedCounterProps) {
  const { number, suffix } = parseNumber(value);

  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          let start = 0;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const current = start + (number - start) * progress;
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [number, duration]);

  return (
    <span ref={ref}>
      {number % 1 === 0
        ? Math.round(displayValue).toLocaleString()
        : displayValue.toFixed(2)}
      {suffix}
    </span>
  );
}
