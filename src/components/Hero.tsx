import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, FileText, Twitter, Linkedin, Instagram } from 'lucide-react';

const SKILL_TAGS = ['#Flutter', '#Node.js', '#React', '#Full Stack'];

const STATS = [
  { label: 'YEARS OF\nLEARNING', value: '3+' },
  { label: 'DEDICATION\nLEVEL', value: '100%' },
  { label: 'PROJECTS\nDONE', value: '10+' },
  { label: 'HAPPY\nCLIENTS', value: '5+' },
];

export default function Hero() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] bg-[#F0EFE9] flex flex-col pt-[4.5rem] overflow-hidden"
    >
      {/* Main Hero Content — fills viewport height */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 px-6 sm:px-10 lg:px-12 pb-0 min-h-0">

        {/* ====== LEFT COLUMN: Text Content ====== */}
        <div className="flex flex-col justify-center py-8 lg:py-12 lg:pr-8 xl:pr-12 order-2 lg:order-1">
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B6B65] mb-3"
          >
            PROFESSIONAL
          </motion.p>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-5"
          >
            <h1 className="font-display font-bold text-[#0A0A0A] leading-[0.92] tracking-tight">
              <span className="block text-[11vw] sm:text-[9vw] lg:text-[5.5vw] xl:text-[5vw] 2xl:text-[4.5vw]">
                Flutter &amp;
              </span>
              <span className="block font-serif italic font-normal text-[11vw] sm:text-[9vw] lg:text-[5.5vw] xl:text-[5vw] 2xl:text-[4.5vw] mt-1">
                Node.js Dev.
              </span>
            </h1>
          </motion.div>

          {/* Skill Tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-wrap gap-2 mb-5"
          >
            {SKILL_TAGS.map((tag) => (
              <span key={tag} className="skill-tag text-[11px] sm:text-xs cursor-default">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="text-[#6B6B65] text-xs sm:text-sm leading-relaxed max-w-xs mb-8 font-sans"
          >
            I help businesses grow through fast, scalable mobile &amp; web solutions — built with Flutter, Node.js, and modern React stacks.
          </motion.p>

          {/* Circular "Describe your project → Call Alan" CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <button
              id="hero-call-cta"
              onClick={() => setIsAboutOpen(true)}
              className="circle-cta w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center gap-1 text-[#0A0A0A] hover:text-[#F0EFE9] group cursor-pointer"
              aria-label="Learn more about Alan"
            >
              <span className="text-[9px] font-mono tracking-widest uppercase text-[#6B6B65] group-hover:text-[#F0EFE9]/70 transition-colors leading-tight">
                DESCRIBE YOUR<br />PROJECT
              </span>
              <span className="text-lg sm:text-xl font-bold font-display leading-tight group-hover:text-[#F0EFE9] transition-colors">
                Call Alan
              </span>
              <ArrowUpRight className="w-4 h-4 mt-0.5 text-[#0A0A0A] group-hover:text-[#F0EFE9] transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* ====== CENTER COLUMN: Oval Portrait ====== */}
        <div className="flex items-end justify-center order-1 lg:order-2 pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-[72vw] max-w-[320px] sm:max-w-[360px] lg:max-w-[340px] xl:max-w-[380px]"
            style={{ aspectRatio: '3/4' }}
          >
            {/* Oval Portrait Frame */}
            <div
              className="w-full h-full overflow-hidden bg-[#E4E3DC] shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
              style={{ borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}hero-portrait.png`}
                alt="Alan Sherhan K P — Full Stack Developer"
                className="w-full h-full object-cover object-top scale-[1.04]"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>

        {/* ====== RIGHT COLUMN: Stats ====== */}
        <div className="flex flex-col justify-center py-8 lg:py-12 lg:pl-8 xl:pl-12 order-3">
          <div className="flex flex-row lg:flex-col gap-6 sm:gap-8 lg:gap-10 lg:items-end lg:text-right">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <p
                  className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-[#6B6B65] leading-tight whitespace-pre-line"
                >
                  {stat.label}
                </p>
                <p className="stat-number text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A]">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== HERO BOTTOM BAR ====== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="border-t border-black/[0.08] px-6 sm:px-10 lg:px-12 py-4 flex items-center justify-between"
      >
        <p className="text-[11px] sm:text-xs font-sans text-[#6B6B65] tracking-wide">
          Built to make your code impossible to ignore.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/AlanSherhanKp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B65] hover:text-[#0A0A0A] transition-colors"
            aria-label="X / Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/alan-sherhan-k-p-529639313/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B65] hover:text-[#0A0A0A] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/alansherhankp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B65] hover:text-[#0A0A0A] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* ====== ABOUT ME MODAL ====== */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/60 backdrop-blur-md"
            onClick={() => setIsAboutOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl p-8 rounded-3xl bg-[#F0EFE9] border border-black/10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#6B6B65] hover:text-[#0A0A0A] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                aria-label="Close About Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-3xl font-bold font-display text-[#0A0A0A] mb-6">
                About <span className="font-serif italic font-normal">Me</span>
              </h2>

              <div className="space-y-5 text-[#6B6B65] leading-relaxed font-sans text-sm md:text-base">
                <p>
                  Hi, I'm <strong className="text-[#0A0A0A]">Alan Sherhan K P</strong>, a Final-year BCA student deeply passionate about crafting elegant mobile and web solutions. My journey in tech is driven by an obsession with creating seamless user experiences and robust backend architectures.
                </p>
                <p>
                  Specializing as a <strong className="text-[#0A0A0A]">Flutter &amp; Node.js Developer</strong>, I bridge the gap between beautiful cross-platform front-end designs and scalable server-side systems. Whether I'm building integrated disaster management platforms like ReliefFlow or community-driven utility apps, I thrive on solving complex problems.
                </p>
                <p>
                  I am a strong believer in continuous learning. I constantly explore new technologies and best practices, aiming to expand my skill set to build more efficient, accessible, and scalable solutions.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0A0A0A] text-[#F0EFE9] font-semibold rounded-full text-sm hover:bg-[#1A1A1A] transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Download Resume
                </a>
                <a
                  href="https://github.com/Alansherhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black/[0.06] text-[#0A0A0A] font-semibold rounded-full text-sm hover:bg-black/[0.1] transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub Profile
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
