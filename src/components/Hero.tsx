import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, FileText } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Animation Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const topHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a pinned scrub timeline for the Hero scroll sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=120%', // Pins section for 1.2x viewport height during scroll
          scrub: 1,      // Smooth 1s scrub response to scroll
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Layer 2 (Portrait Image): Moves down Y-axis (approx 30vh), scales down (1 -> 0.88), blurs out, & reduces opacity
      tl.to(
        portraitRef.current,
        {
          yPercent: 35,
          scale: 0.88,
          filter: 'blur(12px)',
          opacity: 0.65,
          ease: 'none',
        },
        0
      );

      // 2. Layer 1 (Background Name Text): Comes forward visually (scale 1 -> 1.06) with enhanced emerald drop-shadow glow
      tl.to(
        bgTextRef.current,
        {
          scale: 1.06,
          yPercent: -10,
          textShadow: '0 20px 60px rgba(78, 254, 136, 0.45)',
          ease: 'none',
        },
        0
      );

      // 3. Layer 3 (Foreground Content Text): Rises upward over the sinking image layer
      tl.to(
        foregroundRef.current,
        {
          yPercent: -18,
          opacity: 1,
          ease: 'none',
        },
        0
      );

      // Subtle top header fade & upward motion
      tl.to(
        topHeaderRef.current,
        {
          yPercent: -20,
          opacity: 0.8,
          ease: 'none',
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up GSAP triggers on component unmount
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen p-3 md:p-6 lg:p-8 flex flex-col justify-center bg-[#0A0D0C] overflow-hidden pt-16 lg:pt-20"
    >
      {/* Pinned Framed Hero Canvas Viewport */}
      <div className="relative w-full h-[calc(100vh-3rem)] rounded-[24px] md:rounded-[36px] bg-gradient-to-b from-[#111814] via-[#0d1411] to-[#0a0d0c] hero-canvas-border p-6 md:p-10 lg:p-14 flex flex-col justify-between overflow-hidden shadow-2xl">

        {/* Atmospheric Emerald Ambient Spotlights */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[450px] md:w-[750px] h-[450px] md:h-[750px] bg-brand-mint/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen z-0" />
        <div className="absolute top-[8%] right-[12%] w-[350px] h-[350px] bg-emerald-600/15 rounded-full blur-[130px] pointer-events-none z-0" />

        {/* Top Header metadata inside hero canvas */}
        <div ref={topHeaderRef} className="relative z-30 flex items-center justify-between w-full">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-white/70 uppercase font-mono">
            ALAN SHERHAN K P
          </div>
          {/* Right space reserved for floating nav menu pill spacing */}
          <div className="w-24 md:w-32 hidden md:block"></div>
        </div>

        {/* 
          ====================================================================
          LAYER 1: Large Background Name Text (z-10)
          - Sinks furthest in depth stack (behind image & foreground text).
          - Scales slightly UP on scroll to visually "come forward" as portrait photo recedes.
          ====================================================================
        */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none px-4">
          <h1
            ref={bgTextRef}
            className="font-curve font-black text-center text-brand-mint tracking-tighter text-[11vw] md:text-[10vw] leading-[0.85] uppercase font-extrabold drop-shadow-[0_10px_40px_rgba(78,254,136,0.2)] will-change-transform"
          >
            ALAN SHERHAN
          </h1>
        </div>

        {/* 
          ====================================================================
          LAYER 2: Portrait Image Layer (z-20)
          - Positioned in front of Layer 1 (Background Name Text).
          - On scroll: GSAP translates it down (~35%), scales it down (0.88),
            adds 12px blur, and reduces opacity (0.65).
          ====================================================================
        */}
        <div
          ref={portraitRef}
          className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[420px] md:w-[520px] lg:w-[720px] pointer-events-none flex justify-center items-end will-change-transform"
        >
          <div className="relative w-full h-full">
            <img
              src={`${import.meta.env.BASE_URL}hero-portrait.png`}
              alt="Alan Sherhan K P"
              className="w-full h-auto object-cover object-top filter brightness-[0.94] contrast-[1.06] max-h-[62vh] md:max-h-[75vh]"
            />
            {/* Vignette floor transition gradient */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0d0c] via-[#0a0d0c]/60 to-transparent" />
          </div>
        </div>

        {/* Right Edge: Vertical SCROLL Bar Indicator */}
        <div className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-4 pointer-events-none">
          <div className="w-[2px] h-14 bg-gradient-to-b from-brand-mint/80 to-transparent rounded-full animate-pulse" />
          <span className="writing-mode-vertical text-[11px] font-mono tracking-widest text-white/60 uppercase rotate-180">
            SCROLL
          </span>
        </div>

        {/* 
          ====================================================================
          LAYER 3: Foreground Content & Text Overlay (z-30)
          - Positioned at highest z-index (z-30), above the Portrait Image (z-20).
          - On scroll: Moves slightly UP on Y-axis.
          - As the image sinks down behind it, this foreground content layer
            naturally floats ON TOP of the image without any z-index switching!
          ====================================================================
        */}
        <div ref={foregroundRef} className="relative z-30 w-full flex flex-col justify-between h-full pointer-events-none will-change-transform">
          {/* Top Intro Tagline */}
          <div className="mt-8 md:mt-12 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-base md:text-xl font-semibold text-white tracking-tight bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 inline-block shadow-lg">
                Hey<span className="inline-block animate-bounce ml-1">👋</span>, I'm a Full Stack Developer
              </span>
            </motion.div>
          </div>

          {/* Bottom Info Bar: Left Contact & Right Bio + Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-auto pt-8 md:pt-16 pointer-events-auto">
            {/* Bottom Left Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-4 flex flex-col gap-1 text-xs md:text-sm font-mono text-white/90 bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-2">
                <span className="text-white/40">E</span>
                <a href="mailto:alansherhankp@gmail.com" className="hover:text-brand-mint transition-colors">
                  alansherhan10@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40">T</span>
                <span>+91 9633283964</span>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => setIsAboutOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-mint hover:underline font-semibold cursor-pointer"
                >
                  More About Me <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Bottom Right Bio Paragraph & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="md:col-span-8 flex flex-col md:items-end space-y-4"
            >
              <p className="text-xs md:text-sm text-gray-200 font-sans max-w-lg leading-relaxed bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                I build fast, scalable, and user-friendly mobile & web applications using modern Flutter and Node.js technologies. My main tools of choice are Flutter on mobile and React & Node.js on full-stack development.
              </p>

              {/* Slash separated links */}
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium font-sans text-white/90 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <a
                  href="https://github.com/Alansherhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-mint transition-colors flex items-center gap-1"
                >
                  <span className="text-white/40">/</span> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/alansherhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-mint transition-colors flex items-center gap-1"
                >
                  <span className="text-white/40">/</span> LinkedIn
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-mint transition-colors flex items-center gap-1"
                >
                  <span className="text-white/40">/</span> Resume
                </a>
                <a
                  href="#contact"
                  className="hover:text-brand-mint transition-colors flex items-center gap-1"
                >
                  <span className="text-white/40">/</span> Contact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Me Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl p-8 rounded-3xl bg-[#121815] border border-brand-mint/30 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close About Modal"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold font-display text-white mb-6">
                About <span className="text-brand-mint">Me</span>
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                <p>
                  Hi, I'm <strong className="text-white">Alan Sherhan K P</strong>, a Final-year BCA student deeply passionate about crafting elegant mobile and web solutions. My journey in tech is driven by an obsession with creating seamless user experiences and robust backend architectures.
                </p>
                <p>
                  Specializing as a <strong>Flutter & Node.js Developer</strong>, I bridge the gap between beautiful cross-platform front-end designs and scalable server-side systems. Whether I'm building integrated disaster management platforms like ReliefFlow or community-driven utility apps, I thrive on solving complex problems.
                </p>
                <p>
                  I am a strong believer in continuous learning. I constantly explore new technologies and best practices, aiming to expand my skill set to build more efficient, accessible, and scalable solutions.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-mint text-gray-950 font-semibold rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Download Resume
                </a>
                <a
                  href="https://github.com/Alansherhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full text-sm hover:bg-white/20 transition-colors flex items-center gap-2"
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

