import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CERTIFICATES = [
  { id: 1, title: 'Coursera Certificate 1', image: `${import.meta.env.BASE_URL}Coursera7DUQDS6SWTS6.pdf`, delay: 0.2, issuer: 'Coursera' },
  { id: 2, title: 'Certificate of Completion', image: `${import.meta.env.BASE_URL}Certificate-Alan.pdf`, delay: 0.1, issuer: 'NorBit Solutions' },
  { id: 3, title: 'Coursera Certificate 2', image: `${import.meta.env.BASE_URL}CourseraP6DR2076173I.pdf`, delay: 0.3, issuer: 'Coursera' },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-[#0A0D0C]">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-mint/5 blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-brand-mint" />
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
                Licenses & <span className="text-brand-mint">Certifications</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-sans leading-relaxed">
              Continuous learning is at the core of my growth. Here are some of the certifications I have earned to validate my skills and knowledge.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {CERTIFICATES.map((cert, i) => (
            <motion.a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: cert.delay, duration: 0.6 }}
              className={`group relative rounded-3xl overflow-hidden bg-[#111814] border border-white/10 ${i === 0 ? 'md:col-span-2 md:row-span-2' :
                i === 1 ? 'md:row-span-2' : ''
                } block cursor-pointer hover:border-brand-mint/50 transition-all`}
            >
              {/* Certificate Media Background */}
              <div className="absolute inset-0 bg-[#0A0D0C] flex items-center justify-center p-4 z-0 pointer-events-none">
                {cert.image.toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={cert.title}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 rounded-lg"
                    style={{ border: 'none', pointerEvents: 'none' }}
                  />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 rounded-lg"
                  />
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <h3 className="text-xl font-bold font-display text-white mb-1">{cert.title}</h3>
                <p className="text-sm text-brand-mint font-medium">{cert.issuer}</p>
                <div className="mt-4 inline-flex items-center text-xs font-semibold text-gray-950 bg-brand-mint px-4 py-1.5 rounded-full shadow-lg">
                  {cert.image.toLowerCase().endsWith('.pdf') ? 'View PDF' : 'View Image'}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
