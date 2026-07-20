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
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 lg:px-12 flex items-center justify-between pointer-events-auto">
        {/* Brand Name top left */}
        <a
          href="#home"
          className="text-xs md:text-sm font-semibold tracking-widest text-white/90 uppercase font-sans hover:text-brand-mint transition-colors"
        >
          ALAN SHERHAN K P
        </a>

        {/* Floating White Menu Pill Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-950 px-5 py-2 rounded-full font-medium text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Menu</span>
          <span className="flex items-center text-xs tracking-tighter font-mono group-hover:rotate-90 transition-transform">
            ••
          </span>
        </button>
      </nav>

      {/* Full-Screen Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex flex-col justify-between p-8 md:p-16"
          >
            {/* Top drawer bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
                Navigation
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Links list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto max-w-5xl w-full mx-auto">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-4xl md:text-6xl font-bold font-display text-white hover:text-brand-mint transition-colors flex items-center gap-3 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 -translate-y-2 transition-all text-brand-mint" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col justify-end gap-6 text-gray-400 font-sans border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">Contact</h4>
                  <p className="text-white text-lg font-medium">alansherhankp@gmail.com</p>
                  <p className="text-gray-400 text-sm mt-1">Kerala, India</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">Socials</h4>
                  <div className="flex flex-wrap gap-4 text-sm font-medium">
                    <a href="https://github.com/Alansherhan" target="_blank" rel="noopener noreferrer" className="hover:text-brand-mint transition-colors">/ GitHub</a>
                    <a href="https://linkedin.com/in/alansherhan" target="_blank" rel="noopener noreferrer" className="hover:text-brand-mint transition-colors">/ LinkedIn</a>
                    <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-mint transition-colors">/ Resume</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-white/40 border-t border-white/10 pt-6">
              ©2026 ALAN SHERHAN K P — ALL RIGHTS RESERVED
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
