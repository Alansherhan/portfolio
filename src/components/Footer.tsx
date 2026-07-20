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
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );
      setStatus('success');
      setShowToast(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#0A0D0C] overflow-hidden pt-24 pb-12">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#111814] border border-brand-mint/50 text-white px-5 py-4 rounded-xl shadow-2xl"
          >
            <CheckCircle2 className="w-5 h-5 text-brand-mint" />
            <p className="font-medium">Message sent successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-mint/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-16">

          {/* Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-display text-white mb-6 tracking-tight"
            >
              Let's <span className="text-brand-mint">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-base md:text-lg mb-8 max-w-md font-sans leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://github.com/Alansherhan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-brand-mint hover:bg-white/10 hover:border-brand-mint/50 transition-all group" title="GitHub Profile">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a href="https://www.linkedin.com/in/alan-sherhan-k-p-529639313/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-brand-mint hover:bg-white/10 hover:border-brand-mint/50 transition-all group" title="LinkedIn Profile">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/alansherhankp/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-brand-mint hover:bg-white/10 hover:border-brand-mint/50 transition-all group" title="Instagram Profile">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/9633283964" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-brand-mint hover:bg-white/10 hover:border-brand-mint/50 transition-all group" title="WhatsApp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
              <a href="mailto:alansherhankp@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-brand-mint hover:bg-white/10 hover:border-brand-mint/50 transition-all group" title="Email">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/AlanSherhanKp" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-brand-mint hover:bg-white/10 hover:border-brand-mint/50 transition-all group" title="X (Twitter)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-[#111814] border border-white/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="entry.352289393"
                  required
                  className="w-full bg-[#0A0D0C] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-colors font-sans"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="entry.952000408"
                    required
                    className="w-full bg-[#0A0D0C] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-colors font-sans"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    name="entry.2128175179"
                    required
                    className="w-full bg-[#0A0D0C] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-colors font-sans"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="entry.2029086815"
                  required
                  rows={4}
                  className="w-full bg-[#0A0D0C] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-colors resize-none font-sans"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-950 bg-brand-mint hover:opacity-90 rounded-xl transition-opacity disabled:opacity-50 cursor-pointer shadow-lg"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error. Try Again.' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-mono">
            © {new Date().getFullYear()} ALAN SHERHAN K P. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-500 text-xs font-mono flex items-center gap-2">
            DESIGN INSPIRED BY <span className="text-brand-mint">BRUNO SIMON</span>
          </p>
        </div>
      </div>
    </footer>
  );
}