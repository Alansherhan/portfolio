import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'Completed',
    date: '2023 - 2026',
    description: 'Completed a comprehensive curriculum in computer science, focusing on software engineering principles, database management, and modern application development. Active in tech communities and continuous learning.',
    icon: GraduationCap,
  },
  {
    type: 'experience',
    title: 'Flutter & Node.js Developer',
    organization: 'Freelance / Open Source',
    date: '2025 - Present',
    description: 'Architecting and building full-stack applications with beautiful cross-platform UIs in Flutter and robust, scalable RESTful APIs using Node.js and Express.',
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Education <span className="text-brand-mint">&</span> Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-sans">
            My academic journey and practical experience in building modern software.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">

                {/* Icon */}
                <div className="flex items-center w-full md:w-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#0A0D0C] border border-brand-mint/50 text-brand-mint group-hover:scale-110 group-hover:bg-brand-mint group-hover:text-gray-950 transition-all z-10 shadow-[0_0_15px_rgba(78,254,136,0.3)]"
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                >
                  <div className="bg-[#111814] p-6 rounded-2xl border border-white/10 hover:border-brand-mint/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(78,254,136,0.1)]">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-brand-mint bg-brand-mint/10 rounded-full">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-brand-mint transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-md text-emerald-400 mb-3 font-medium">
                      {item.organization}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
