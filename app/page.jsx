'use client';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/certifications';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/contact';
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
