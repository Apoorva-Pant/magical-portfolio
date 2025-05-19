'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useAnimation,
  useScroll,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const certifications = [
  { title: 'HTML & CSS', image: '/certifications/frontend.jpg' },
  { title: 'Programming With JavaScript', image: '/certifications/Programming With JavaScript.png' },
  { title: 'Version Control', image: '/certifications/version_control.png' },
  { title: 'Advanced React', image: '/certifications/AdvancedReact.png' },
  { title: 'Principles UI/UX designs', image: '/certifications/introUI_UX.png' },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Certifications() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [openImg, setOpenImg] = useState(null);
  const [isBgWhite, setIsBgWhite] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setIsBgWhite(true);
    } else {
      setIsBgWhite(false);
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen py-20 px-4 overflow-hidden text-black"
    >
      {/* Animated BG */}
      <motion.div
        animate={{ backgroundColor: isBgWhite ? '#e0f2fe' : '#000000' }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      />

      {/* Sticky Heading: fixed top, frosted glass, no opacity animation */}
      <h2
        className="sticky top-4 z-50 flex justify-center mb-12"
      >
        <span
          className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-md whitespace-nowrap text-black font-bold text-4xl"
          style={{ WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}
        >
          Certifications
        </span>
      </h2>

      {/* Certificate Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto relative z-10"
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="w-40 sm:w-48 cursor-pointer rounded-2xl shadow-lg bg-white p-2 transition-transform duration-150"
            onClick={() => setOpenImg(cert.image)}
          >
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>
            <div className="text-center mt-2 font-semibold text-sm">{cert.title}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Full image modal */}
      {openImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpenImg(null)}
        >
          <div className="relative w-11/12 max-w-3xl">
            <Image
              src={openImg}
              alt="Full Certificate"
              layout="responsive"
              width={1000}
              height={700}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
