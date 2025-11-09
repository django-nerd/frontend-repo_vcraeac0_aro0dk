import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <div>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 h-1 w-full origin-left bg-blue-500 z-40"
      />
      <div className="fixed top-1 left-0 w-full h-6 bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none z-30" />
    </div>
  );
};

export default ScrollProgress;
