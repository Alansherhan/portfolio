import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-mint z-[100] origin-left shadow-[0_0_15px_rgba(78,254,136,0.8)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
