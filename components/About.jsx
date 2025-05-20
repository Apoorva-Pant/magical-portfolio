'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Oranienbaum } from 'next/font/google';
import polaroidPic from '@/public/polaroid.jpg'; // replace this path as needed

const oranienbaum = Oranienbaum({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function About() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Heading animation
  const headingY = useTransform(scrollYProgress, [0.05, 0.2], [100, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const headingFadeOut = useTransform(scrollYProgress, [0.75, 0.9], [1, 0]);
  const headingX = useTransform(scrollYProgress, [0.3, 0.5], [0, 40]);

  // Paragraph 1
  const para1Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const para1Y = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);
  const para1FadeOut = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);

  // Paragraph 2
  const para2Opacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const para2Y = useTransform(scrollYProgress, [0.55, 0.7], [50, 0]);
  const para2FadeOut = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  // Polaroid (desktop)
  const polaroidOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const polaroidX = useTransform(scrollYProgress, [0.55, 0.7], [0, 500]); // slide far right
  const polaroidFadeOut = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className={`h-[300vh] relative bg-black text-white px-4 sm:px-10 overflow-hidden ${oranienbaum.className}`}
    >
      {/* Heading */}
      <motion.h2
        style={{
          y: headingY,
          x: headingX,
          opacity: headingOpacity,
          scale: headingFadeOut,
        }}
        className="text-5xl sm:text-7xl font-bold fixed top-[8rem] sm:top-[6.5rem] left-[5vw] sm:left-[10vw] z-10"
      >
        About Me
      </motion.h2>

      {/* Polaroid (desktop) */}
      <motion.div
        style={{
          opacity: polaroidOpacity,
          x: polaroidX,
          scale: polaroidFadeOut,
        }}
        className="hidden sm:block fixed top-1/2 left-[10vw] transform -translate-y-1/2 w-56 h-72 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white z-0"
      >
        <Image
          src={polaroidPic}
          alt="Me working"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Polaroid (mobile aesthetic version) */}
      <motion.div
        style={{
          opacity: polaroidOpacity,
          scale: polaroidFadeOut,
        }}
        className="sm:hidden fixed bottom-12 right-6 w-40 h-56 rounded-xl overflow-hidden blur-[2px] opacity-50 z-0"
      >
        <Image
          src={polaroidPic}
          alt="Me working"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Paragraph 1 */}
      <motion.p
        style={{
          opacity: para1Opacity,
          y: para1Y,
          scale: para1FadeOut,
        }}
        className="max-w-xl text-xl sm:text-2xl fixed top-1/2 right-[10vw] transform -translate-y-1/2 text-right z-10 leading-snug"
      >
        I’m a{' '}
        <span className="text-green-300">web developer</span> focused on building{' '}
        <span className="text-green-400 font-semibold">
          interactive, visually stunning interfaces.
        </span>{' '}
        My strength lies in crafting clean code and intuitive experiences.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        style={{
          opacity: para2Opacity,
          y: para2Y,
          scale: para2FadeOut,
        }}
        className="max-w-xl text-lg sm:text-xl fixed top-1/2 left-[10vw] transform -translate-y-1/2 text-left z-10 leading-snug"
      >
        With experience in{' '}
        <span className="text-blue-300">modern frameworks</span> like{' '}
        <span className="text-blue-400 font-semibold">Next.js, React</span> and{' '}
        <span className="text-blue-400 font-semibold">Tailwind</span>, I love transforming
        creative ideas into performant web applications.
      </motion.p>
    </section>
  );
}
