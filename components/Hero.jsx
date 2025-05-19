'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const fullText = 'Portfolio';
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0, -10, -20, -30, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.5, 0.2]);

  useEffect(() => {
    let index = 0;
    let currentText = '';
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setTypedText(currentText);
        index++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with required styling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Foreground content with scroll-based animation */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center text-white z-10"
        style={{ y, opacity }}
      >
        <AnimatePresence>
          <motion.h1
            key="portfolio"
            initial={{ y: 0, opacity: 1 }}
            animate={typingDone ? { y: -100, transition: { duration: 1 } } : {}}
            className="absolute text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            {typedText}
          </motion.h1>
        </AnimatePresence>

        {typingDone && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-center absolute bottom-16 sm:bottom-20 md:bottom-24"
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold">Web Developer</h2>
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-bold">& Designer</h3>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
