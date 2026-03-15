'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/lib/constants';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero carousel">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${heroSlides[current].gradient}`}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_40%,rgba(200,165,85,0.2)_50%,transparent_60%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2d]/80 via-transparent to-[#0f1b2d]/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c8a555]" />
            <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
              Since 1935
            </span>
            <span className="h-px w-12 bg-[#c8a555]" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            <span className="font-semibold">BAi</span>
            <span className="text-white/60 mx-3 font-extralight">|</span>
            <span className="text-white/80 font-extralight">Acoustics</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-4">
            Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems
          </p>

          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-[#c8a555]/80 uppercase tracking-widest mt-2"
            >
              {heroSlides[current].title}
            </motion.p>
          </AnimatePresence>

          <div className="mt-10">
            <a
              href="/services"
              className="inline-block border border-[#c8a555]/40 text-[#c8a555] px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#c8a555]/10 transition-all duration-300 hover:border-[#c8a555]/80"
            >
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white/80 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white/80 transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-[#c8a555]' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
