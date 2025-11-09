import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Playful. Modern. Interactive.
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Design Agency for Bold Brands
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              We craft delightful digital experiences — from portfolios to products — with a fun, bright aesthetic and buttery-smooth interactions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 px-5 py-3 font-medium border border-blue-200 hover:bg-blue-50 transition-colors">
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
