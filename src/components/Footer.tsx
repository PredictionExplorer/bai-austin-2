import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import { offices, socialLinks } from '@/lib/constants';

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1b2d] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Logo + tagline */}
        <div className="mb-12">
          <Logo className="h-10 w-auto mb-4" />
          <p className="text-white/50 text-sm max-w-md">
            Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems
          </p>
        </div>

        {/* Offices grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {offices.map((office) => (
            <div key={office.city}>
              <h3 className="text-[#c8a555] font-semibold text-sm uppercase tracking-wider mb-4">
                {office.city} Office{office.isHQ && ' (HQ)'}
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#1a9aaa]" />
                  <span>{office.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-[#1a9aaa]" />
                  <a
                    href={`tel:${office.phone.replace(/\./g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {office.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#1a9aaa]" />
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {office.email}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="text-white/50 hover:text-[#c8a555] transition-colors duration-200"
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/team" className="hover:text-white transition-colors">
              Team
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/40">
            &copy;{new Date().getFullYear()} by BAi, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
