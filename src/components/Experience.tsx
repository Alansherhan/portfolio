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
    <section id="experience" className="py-16 md:py-24 relative bg-[#E8E7E1] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-[#0A0A0A] mb-3 sm:mb-4">
            Education <span className="font-serif italic font-normal">&amp; Experience</span>
          </h2>
          <p className="text-[#6B6B65] max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-sans">
            My academic journey and practical experience in building modern software.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-3.5 sm:left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-black/10" />

          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">

                {/* Icon */}
                <div className="flex items-center w-full md:w-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0EFE9] border border-black/15 text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-[#F0EFE9] transition-all z-10 shadow-sm"
                  >
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`ml-9 sm:ml-12 md:ml-0 w-[calc(100%-2.25rem)] sm:w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                  }`}
                >
                  <div className="bg-[#F0EFE9] p-4 sm:p-6 rounded-2xl border border-black/[0.08] hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 mb-2.5 sm:mb-4 text-[11px] sm:text-xs font-mono text-[#6B6B65] bg-black/[0.05] rounded-full">
                      {item.date}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0A0A0A] mb-1 group-hover:text-[#3A3A3A] transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-sm sm:text-md text-[#6B6B65] mb-2 sm:mb-3 font-medium">
                      {item.organization}
                    </h4>
                    <p className="text-[#6B6B65] text-xs sm:text-sm leading-relaxed font-sans">
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
