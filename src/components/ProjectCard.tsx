'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ProjectCategory } from '@/lib/constants';

interface ProjectCardProps {
  category: ProjectCategory;
  index: number;
}

export default function ProjectCard({ category, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-transform duration-700 group-hover:scale-110`}
      />

      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent_60%)]" />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-[#0f1b2d]/0 group-hover:bg-[#0f1b2d]/30 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-lg">
            {category.title}
          </h3>
          <div className="flex items-center gap-2 text-[#c8a555] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="uppercase tracking-wider text-xs">See More</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>

      {/* Bottom gradient for text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
    </motion.div>
  );
}
