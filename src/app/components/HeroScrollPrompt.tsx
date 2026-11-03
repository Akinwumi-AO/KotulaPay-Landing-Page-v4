import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { MouseEvent } from 'react';

export function HeroScrollPrompt() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToContent = (event: MouseEvent<HTMLButtonElement>) => {
    const hero = event.currentTarget.closest('section');
    hero?.nextElementSibling?.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.button
      type="button"
      aria-label="Scroll to the next section"
      onClick={scrollToContent}
      animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white shadow-lg shadow-black/10 backdrop-blur-sm transition-colors hover:border-[#00bf6f] hover:bg-[#00bf6f]/15"
    >
      <ChevronDown className="size-5" aria-hidden="true" />
    </motion.button>
  );
}
