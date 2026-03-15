'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Volume2,
  Shield,
  VolumeX,
  Speaker,
  Monitor,
} from 'lucide-react';
import type { Service } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'volume-2': Volume2,
  shield: Shield,
  'volume-x': VolumeX,
  speaker: Speaker,
  monitor: Monitor,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Service image */}
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      )}

      <div className="p-8">
        {/* Accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1a9aaa] to-[#c8a555] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-sm bg-[#0f1b2d]/5 text-[#1a9aaa] group-hover:bg-[#0f1b2d] group-hover:text-[#c8a555] transition-all duration-300">
          {Icon && <Icon size={28} />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#0f1b2d] mb-4">{service.title}</h3>

        {/* Items */}
        <ul className="space-y-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="text-sm text-[#64748b] pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1a9aaa]/40"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Subsections for expanded content */}
        {service.subsections && service.subsections.map((sub) => (
          <div key={sub.heading} className="mt-4">
            <h4 className="text-xs uppercase tracking-wider text-[#0f1b2d] font-semibold mb-2">
              {sub.heading}
            </h4>
            <ul className="space-y-1.5">
              {sub.items.map((item) => (
                <li
                  key={item}
                  className="text-xs text-[#64748b] pl-3 relative before:absolute before:left-0 before:top-1.5 before:w-1 before:h-1 before:rounded-full before:bg-[#c8a555]/40"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
