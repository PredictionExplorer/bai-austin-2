'use client';

import { motion } from 'framer-motion';
import type { TeamMemberData } from '@/lib/constants';

interface TeamMemberProps {
  member: TeamMemberData;
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Avatar placeholder */}
      <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-5 bg-gradient-to-br from-[#0f1b2d] to-[#1a3a5c]">
        {/* Initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-light text-white/20 group-hover:text-white/30 transition-colors duration-500">
            {member.initials}
          </span>
        </div>

        {/* Hover overlay with bio */}
        <div className="absolute inset-0 bg-[#0f1b2d]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
          <p className="text-white/80 text-sm leading-relaxed text-center">
            {member.bio}
          </p>
        </div>

        {/* Gold accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c8a555] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold text-[#0f1b2d] mb-1">{member.name}</h3>
      <p className="text-sm text-[#64748b]">{member.title}</p>
    </motion.div>
  );
}
