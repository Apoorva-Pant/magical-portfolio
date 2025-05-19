'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function AnimatedTitle({ text, isSticky = false }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    controls.start(inView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 100 });
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      className={`text-6xl font-extrabold text-center tracking-wide ${
        isSticky ? 'sticky top-10 z-30' : ''
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.h2>
  );
}
