import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  'Flutter & Dart framework',
  'Node.js & Express APIs',
  'React & Next.js Front-end',
  'MongoDB & Database design',
  'Git, GitHub & CI/CD workflow',
  'Code debugging & Performance optimization',
];

export default function TerminalSkills() {
  const [typingComplete, setTypingComplete] = useState(false);
  const command = 'npx skills list --installed';
  const [displayedCommand, setDisplayedCommand] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedCommand(command.slice(0, i));
      i++;
      if (i > command.length) {
        clearInterval(intervalId);
        setTimeout(() => setTypingComplete(true), 500);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0D0C]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Technical <span className="text-brand-mint">Skills</span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-sm md:text-base">
            Verified core competencies and tech stack
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-[#111814] backdrop-blur-md shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#16201b] border-b border-white/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-gray-400 font-mono flex items-center gap-2">
              <span className="opacity-50">~</span> 
              <span>skills — bash</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[300px]">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-brand-mint font-semibold">alan@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-emerald-400">~/skills</span>
              <span className="text-white">$</span>
              <span className="text-white font-medium">
                {displayedCommand}
                {!typingComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-4 md:h-5 bg-brand-mint ml-1 align-middle"
                  />
                )}
              </span>
            </div>

            {typingComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 space-y-3"
              >
                <div className="text-gray-400 mb-4 text-xs font-mono">✔ Fetching verified stack modules...</div>
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.12 + 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-brand-mint">✔</span>
                    <span className="text-emerald-400 font-mono">[{index + 1}]</span>
                    <span className="text-white hover:text-brand-mint transition-colors cursor-default">
                      {skill}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: SKILLS.length * 0.12 + 0.4 }}
                  className="mt-6 flex items-center gap-2 text-gray-300"
                >
                  <span className="text-brand-mint font-semibold">alan@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-emerald-400">~/skills</span>
                  <span className="text-white">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-4 md:h-5 bg-brand-mint ml-1 align-middle"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
