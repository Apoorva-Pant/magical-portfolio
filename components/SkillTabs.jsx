'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  techSkills,
  tools,
  softSkills,
} from '../data/skills';

const tabsData = {
  techSkills: { tabs: techSkills },
  tools: { tabs: tools },
  softSkills: { tabs: softSkills },
};

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

const tabChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillTabs({ category }) {
  const { tabs } = tabsData[category] || {};
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  if (!tabs) return null;

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-2xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-5 px-2 sm:px-4"
      variants={fadeVariant}
      initial="hidden"
      animate={controls}
    >
      {tabs.map(({ label, icon: Icon }, index) => (
        <motion.div
          key={index}
          className="w-28 h-32 sm:w-32 sm:h-36 bg-white/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center shadow-md"
          variants={tabChild}
        >
          {Icon ? (
            // Bigger icon size but keep the container same size
            <Icon className="text-6xl mb-1" />
          ) : (
            <span className="text-5xl mb-1">⚠️</span>
          )}
          <span className="text-black text-lg font-bold leading-tight">{label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
