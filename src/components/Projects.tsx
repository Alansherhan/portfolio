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
    color: 'from-emerald-500/20 to-brand-mint/15',
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
    color: 'from-brand-mint/20 to-teal-500/20',
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
    color: 'from-emerald-600/20 to-green-500/15',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Featured <span className="text-brand-mint">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-sans text-sm md:text-base">
            A selection of my recent work in mobile development, backend engineering, and system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[#111814] rounded-3xl p-6 md:p-8 border border-white/10 hover:border-brand-mint/50 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-3xl`} />

              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-[#0A0D0C] flex items-center justify-center border border-white/10 group-hover:border-brand-mint/40 transition-colors">
                  <span className="text-xl font-mono text-brand-mint font-bold">0{i + 1}</span>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="Github repository">
                    <Github className="w-5 h-5" />
                  </a>
                  {project.downloads.map((dl, idx) => (
                    <div key={idx} className="relative group/dl flex items-center justify-center">
                      <a href={dl.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-brand-mint/10 text-brand-mint border border-brand-mint/30 rounded-lg text-xs font-semibold hover:bg-brand-mint/20 transition-colors">
                        <Download className="w-4 h-4" />
                        {dl.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-brand-mint transition-colors">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-6 flex-grow">
                <p className="text-xs font-semibold text-white mb-2 font-mono">
                  Role: <span className="text-brand-mint font-sans">{project.role}</span>
                </p>
                <ul className="space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-gray-300 flex items-start">
                      <span className="text-brand-mint mr-2 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
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
