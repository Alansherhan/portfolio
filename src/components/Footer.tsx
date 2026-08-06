import { Github, Instagram, Linkedin, Send, CheckCircle2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    try {
      await fetch(
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfzyYWdOdqVenPO95bxrUZObr-UULwSPi-1W2Nqn9DARiyGMA/formResponse',
        { method: 'POST', mode: 'no-cors', body: formData }
      );
      setStatus('success');
      setShowToast(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer id="contact" className="relative bg-[#E8E7E1] overflow-hidden section-divider">
      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 bg-[#0A0A0A] text-[#F0EFE9] px-4 py-3 sm:px-5 sm:py-4 rounded-xl shadow-2xl text-xs sm:text-sm"
          >
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4EFE88] shrink-0" />
            <p className="font-medium">Message sent successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top "Let's Connect" headline bar */}
      <div className="border-b border-black/[0.08] px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B6B65] mb-3">GET IN TOUCH</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-[#0A0A0A] leading-[0.92] tracking-tight">
              Let's{' '}
              <span className="font-serif italic font-normal">Connect</span>
            </h2>
          </div>
          <p className="text-[#6B6B65] text-sm md:text-base max-w-xs leading-relaxed font-sans md:text-right">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-12">

          {/* Left: Contact info + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between gap-10"
          >
            {/* Contact details */}
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#9A9A93] mb-1">Email</p>
                <a href="mailto:alansherhan10@gmail.com" className="text-[#0A0A0A] font-medium text-base sm:text-lg hover:text-[#6B6B65] transition-colors">
                  alansherhan10@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#9A9A93] mb-1">Phone</p>
                <a href="tel:+919633283964" className="text-[#0A0A0A] font-medium text-base sm:text-lg hover:text-[#6B6B65] transition-colors">
                  +91 9633 283 964
                </a>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#9A9A93] mb-1">Location</p>
                <p className="text-[#0A0A0A] font-medium text-base sm:text-lg">Kerala, India</p>
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[#9A9A93] mb-4">Socials</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: 'https://github.com/Alansherhan', icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/alan-sherhan-k-p-529639313/', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://www.instagram.com/alansherhankp/', icon: Instagram, label: 'Instagram' },
                  { href: 'mailto:alansherhan10@gmail.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-[#6B6B65] hover:text-[#0A0A0A] hover:border-black/30 hover:bg-black/[0.04] transition-all group"
                    title={label}
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
                {/* WhatsApp */}
                <a
                  href="https://wa.me/9633283964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-[#6B6B65] hover:text-[#0A0A0A] hover:border-black/30 hover:bg-black/[0.04] transition-all group"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://x.com/AlanSherhanKp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-[#6B6B65] hover:text-[#0A0A0A] hover:border-black/30 hover:bg-black/[0.04] transition-all group"
                  title="X (Twitter)"
                  aria-label="X Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F0EFE9] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-sm"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="footer-name" className="block text-[10px] uppercase font-mono tracking-wider text-[#6B6B65] mb-2">Name</label>
                <input
                  type="text"
                  id="footer-name"
                  name="entry.352289393"
                  required
                  className="w-full bg-[#E8E7E1] border border-black/[0.08] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0A0A0A] placeholder-[#9A9A93] focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/20 transition-colors font-sans"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="footer-email" className="block text-[10px] uppercase font-mono tracking-wider text-[#6B6B65] mb-2">Email</label>
                  <input
                    type="email"
                    id="footer-email"
                    name="entry.952000408"
                    required
                    className="w-full bg-[#E8E7E1] border border-black/[0.08] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0A0A0A] placeholder-[#9A9A93] focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/20 transition-colors font-sans"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="footer-phone" className="block text-[10px] uppercase font-mono tracking-wider text-[#6B6B65] mb-2">Phone</label>
                  <input
                    type="tel"
                    id="footer-phone"
                    name="entry.2128175179"
                    required
                    className="w-full bg-[#E8E7E1] border border-black/[0.08] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0A0A0A] placeholder-[#9A9A93] focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/20 transition-colors font-sans"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="footer-message" className="block text-[10px] uppercase font-mono tracking-wider text-[#6B6B65] mb-2">Message</label>
                <textarea
                  id="footer-message"
                  name="entry.2029086815"
                  required
                  rows={4}
                  className="w-full bg-[#E8E7E1] border border-black/[0.08] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0A0A0A] placeholder-[#9A9A93] focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/20 transition-colors resize-none font-sans"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F0EFE9] bg-[#0A0A0A] hover:bg-[#1A1A1A] rounded-xl transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error. Try Again.' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.08] px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[#0A0A0A] text-base leading-none">✦</span>
          <span className="font-serif italic text-[#0A0A0A] text-base">Alan Sherhan.</span>
        </div>
        <p className="text-[#9A9A93] text-[11px] font-mono tracking-wide">
          © {new Date().getFullYear()} ALAN SHERHAN K P. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}