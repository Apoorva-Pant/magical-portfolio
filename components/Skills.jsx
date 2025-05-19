'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillTabs from './SkillTabs';

const useStickyFade = (threshold = 0.5) => {
  const [ref, inView] = useInView({ threshold });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : -20,
      transition: { duration: 0.5 },
    });
  }, [inView, controls]);

  return { ref, controls, inView };
};

export default function Skills() {
  const skillsTitleControls = useAnimation();
  const [skillsRef] = useInView({ threshold: 0.1 });

  const tech = useStickyFade();
  const tools = useStickyFade();
  const soft = useStickyFade();

  useEffect(() => {
    skillsTitleControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [skillsTitleControls]);

  return (
    <section className="min-h-[300vh] px-4 sm:px-6 py-24 bg-black text-white relative">

      {/* Main Skills Title */}
      <motion.div
        ref={skillsRef}
        animate={skillsTitleControls}
        initial={{ opacity: 0, y: 50 }}
        className="sticky top-10 z-50 flex justify-center"
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-2 min-w-[280px] max-w-md w-full text-center">
          <motion.h2 className="text-5xl sm:text-6xl font-extrabold text-white">
            Skills
          </motion.h2>
        </div>
      </motion.div>

      {/* Tech Skills */}
      <motion.div
        ref={tech.ref}
        animate={tech.controls}
        initial={{ opacity: 0, y: 20 }}
        className="sticky top-28 z-40 flex justify-center"
      >
        <div
          className={`bg-white/20 backdrop-blur-sm rounded-xl px-5 py-1 min-w-[240px] max-w-sm w-full text-center transition-opacity duration-500 ${
            tech.inView && !tools.inView && !soft.inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.h3 className="text-3xl sm:text-4xl font-bold text-white">
            Tech Skills
          </motion.h3>
        </div>
      </motion.div>
      <div className="mt-24 mb-32">
        <SkillTabs category="techSkills" trigger={tech.inView} />
      </div>

      {/* Tools */}
      <motion.div
        ref={tools.ref}
        animate={tools.controls}
        initial={{ opacity: 0, y: 20 }}
        className="sticky top-28 z-40 flex justify-center"
      >
        <div
          className={`bg-white/20 backdrop-blur-sm rounded-xl px-5 py-1 min-w-[240px] max-w-sm w-full text-center transition-opacity duration-500 ${
            tools.inView && !soft.inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.h3 className="text-3xl sm:text-4xl font-bold text-white">
            Tools
          </motion.h3>
        </div>
      </motion.div>
      <div className="mt-24 mb-32">
        <SkillTabs category="tools" trigger={tools.inView} />
      </div>

      {/* Soft Skills */}
      <motion.div
        ref={soft.ref}
        animate={soft.controls}
        initial={{ opacity: 0, y: 20 }}
        className="sticky top-28 z-40 flex justify-center"
      >
        <div
          className={`bg-white/20 backdrop-blur-sm rounded-xl px-5 py-1 min-w-[240px] max-w-sm w-full text-center transition-opacity duration-500 ${
            soft.inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.h3 className="text-3xl sm:text-4xl font-bold text-white">
            Soft Skills
          </motion.h3>
        </div>
      </motion.div>
      <div className="mt-24">
        <SkillTabs category="softSkills" trigger={soft.inView} />
      </div>
    </section>
  );
}
