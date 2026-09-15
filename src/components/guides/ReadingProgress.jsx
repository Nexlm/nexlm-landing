import { useEffect, useState } from 'react';

/** Thin gold bar at the top of the viewport showing how far through a guide the reader is. */
export function ReadingProgress({ targetId }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const target = document.getElementById(targetId);
      if (!target) return;
      const { top, height } = target.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      setProgress(scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -top / scrollable)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [targetId]);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5" aria-hidden>
      <div className="h-full origin-left bg-gold" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
