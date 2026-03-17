import { motion } from 'motion/react';
import React from 'react';

export const SlideUpLine = ({ children, delay = 0, duration = 0.7 }: { children: React.ReactNode, delay?: number, duration?: number }) => {
  return (
    <span className="overflow-hidden inline-block align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const WordByWordReveal = ({ text, baseDelay = 0, stagger = 0.035, duration = 0.55, className = "" }: { text: string, baseDelay?: number, stagger?: number, duration?: number, className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.27em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration, delay: baseDelay + i * stagger, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const BlurReveal = ({ children, delay = 0, duration = 0.9, className = "" }: { children: React.ReactNode, delay?: number, duration?: number, className?: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};
