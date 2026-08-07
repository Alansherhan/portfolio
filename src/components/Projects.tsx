import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';

const PROJECTS = [
  {
    title: 'ReliefFlow',
    description: 'A comprehensive disaster management system integrating an intuitive Flutter frontend with a robust Node.js backend.',
    role: 'Full-Stack Developer',
    features: [
      'Real-time volunteer and resource tracking',
      'Scalable RESTful API for rapid data syncing',
      'Intuitive crisis response dashboard'
    ],
    tech: ['Flutter', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Alansherhan/RelieFlow',
    downloads: [
      { url: 'https://github.com/Alansherhan/RelieFlow/releases/tag/apps', label: 'Download APK' }
    ],
  },
  {
    title: 'Azan Tracker',
    description: 'A sleek prayer time utility app delivering accurate geographic-based schedules and customizable alerts.',
    role: 'Mobile Developer',
    features: [
      'Accurate geolocation-based prayer times',
      'Customizable notifications and alerts',
      'Sleek, minimalistic UI design'
    ],
    tech: ['Flutter', 'Dart', 'Location API'],
    github: 'https://github.com/Alansherhan/azantracker',
    downloads: [
      { url: 'https://github.com/Alansherhan/azantracker/releases/download/Azan/app-release.apk', label: 'Download APK' }
    ],
  },
  {
    title: 'Lost & Found',
    description: 'A community-driven recovery app that helps users post and claim lost items securely and efficiently.',
    role: 'Frontend Developer',
    features: [
      'Secure item posting and claiming flows',
      'Integrated map views for location context',
      'Real-time community matching'
    ],
    tech: ['Flutter', 'Firebase', 'Google Maps'],
    github: 'https://github.com/Alansherhan/Lost-Found',
    downloads: [
      { url: '#', label: 'Download APK' }
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative bg-[#F0EFE9] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-[#0A0A0A] mb-3 sm:mb-4">
            Featured <span className="font-serif italic font-normal">Projects</span>
          </h2>
          <p className="text-[#6B6B65] max-w-2xl mx-auto font-sans text-xs sm:text-sm md:text-base">
            A selection of my recent work in mobile development, backend engineering, and system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative bg-[#FAFAF8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-black/[0.08] hover:border-black/20 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-lg"
            >
              <div className="mb-5 sm:mb-6 flex justify-between items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <span className="text-lg sm:text-xl font-mono text-[#F0EFE9] font-bold">0{i + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B65] hover:text-[#0A0A0A] transition-colors p-2 bg-black/[0.05] rounded-lg hover:bg-black/[0.1]"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  {project.downloads.map((dl, idx) => (
                    <div key={idx} className="relative flex items-center justify-center">
                      {dl.url === '#' ? (
                        <span className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-black/[0.08] text-[#6B6B65] rounded-lg text-[11px] sm:text-xs font-semibold cursor-not-allowed select-none" title="APK coming soon">
                          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Coming Soon
                        </span>
                      ) : (
                        <a
                          href={dl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-[#0A0A0A] text-[#F0EFE9] rounded-lg text-[11px] sm:text-xs font-semibold hover:bg-[#1A1A1A] transition-colors"
                          aria-label={`Download ${project.title} APK`}
                        >
                          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {dl.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0A0A0A] mb-2 sm:mb-3 group-hover:text-[#3A3A3A] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#6B6B65] text-xs sm:text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-5 sm:mb-6 flex-grow">
                <p className="text-xs font-semibold text-[#0A0A0A] mb-2 font-mono">
                  Role: <span className="font-sans text-[#6B6B65]">{project.role}</span>
                </p>
                <ul className="space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#6B6B65] flex items-start">
                      <span className="text-[#0A0A0A] mr-2 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-4 border-t border-black/[0.06]">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-[11px] sm:text-xs font-mono text-[#0A0A0A] bg-black/[0.06] rounded-full border border-black/[0.08]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
