import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-10 flex items-center justify-between bg-[#F0EFE9]/90 backdrop-blur-md border-b border-black/[0.06]">
        {/* Brand: ✦ + Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 text-[#0A0A0A] hover:opacity-70 transition-opacity"
        >
          <span className="text-base leading-none select-none">✦</span>
          <span className="font-serif italic text-lg md:text-xl font-normal tracking-tight text-[#0A0A0A]">
            Alan Sherhan.
          </span>
        </a>

        {/* Desktop: Inline horizontal nav links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.slice(0, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-semibold tracking-widest uppercase text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop: "Get in touch" pill CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center gap-2.5 bg-[#0A0A0A] text-[#F0EFE9] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#1A1A1A] transition-colors shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#4EFE88] animate-pulse-dot shrink-0" />
            Get in touch
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className="w-6 h-0.5 bg-[#0A0A0A] rounded-full" />
          <span className="w-4 h-0.5 bg-[#0A0A0A] rounded-full" />
          <span className="w-5 h-0.5 bg-[#0A0A0A] rounded-full" />
        </button>
      </nav>

      {/* Mobile Full-Screen Drawer — light themed */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F0EFE9]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto max-h-[100dvh]"
          >
            {/* Top drawer bar */}
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, '#home')}
                className="flex items-center gap-2 text-[#0A0A0A]"
              >
                <span className="text-base leading-none">✦</span>
                <span className="font-serif italic text-xl text-[#0A0A0A]">Alan Sherhan.</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 border border-black/15 hover:bg-black/5 text-[#0A0A0A] px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer"
                aria-label="Close navigation"
              >
                <span>Close</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Links list */}
            <div className="flex flex-col gap-2 my-auto py-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-4xl sm:text-5xl font-bold font-display text-[#0A0A0A] hover:text-[#6B6B65] transition-colors flex items-center gap-3 group py-2"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-7 h-7 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-y-0.5 transition-all text-[#0A0A0A]" />
                </motion.a>
              ))}
            </div>

            {/* Drawer bottom */}
            <div className="border-t border-black/10 pt-5 flex flex-col gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#6B6B65] mb-1 font-mono">Contact</p>
                <p className="text-[#0A0A0A] text-base font-medium">alansherhan10@gmail.com</p>
                <p className="text-[#6B6B65] text-sm">Kerala, India</p>
              </div>
              <div className="flex gap-4 text-sm font-medium text-[#6B6B65]">
                <a href="https://github.com/Alansherhan" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">/ GitHub</a>
                <a href="https://linkedin.com/in/alansherhan" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">/ LinkedIn</a>
                <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">/ Resume</a>
              </div>
              <p className="text-xs font-mono text-[#9A9A93]">©2026 ALAN SHERHAN K P — ALL RIGHTS RESERVED</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
