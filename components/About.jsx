'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Heading animations
  const headingY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headingFadeOut = useTransform(scrollYProgress, [0.75, 0.9], [1, 0]);

  // Responsive X movement (mobile vs desktop)
  const headingX = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [0, typeof window !== 'undefined' && window.innerWidth < 640 ? 30 : 90]
  );

  // Paragraph 1
  const para1Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const para1Y = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);
  const para1FadeOut = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);

  // Paragraph 2
  const para2Opacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const para2Y = useTransform(scrollYProgress, [0.55, 0.7], [50, 0]);
  const para2FadeOut = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <section id="about"
      ref={ref}
      className="h-[300vh] relative bg-black text-white px-4 sm:px-10"
    >
      {/* Heading */}
      <motion.h2
        style={{
          y: headingY,
          x: headingX,
          opacity: headingOpacity,
          scale: headingFadeOut,
        }}
        className="text-5xl sm:text-7xl font-bold fixed top-[8rem] sm:top-[6.5rem] left-[8vw] sm:left-[10vw] z-10"
      >
        About Me
      </motion.h2>

      {/* Paragraph 1 */}
      <motion.p
        style={{
          opacity: para1Opacity,
          y: para1Y,
          scale: para1FadeOut,
        }}
        className="max-w-xl text-xl sm:text-2xl fixed top-1/2 right-[10vw] transform -translate-y-1/2 text-right z-0"
      >
        I’m a passionate web developer focused on building interactive, visually
        stunning interfaces. My strength lies in crafting clean code and
        intuitive experiences.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        style={{
          opacity: para2Opacity,
          y: para2Y,
          scale: para2FadeOut,
        }}
        className="max-w-xl text-lg sm:text-xl fixed top-1/2 left-[10vw] transform -translate-y-1/2 text-left z-0"
      >
        With experience in modern frameworks like Next.js, React, and Tailwind,
        I love transforming creative ideas into performant web applications.
      </motion.p>
    </section>
  );
}
