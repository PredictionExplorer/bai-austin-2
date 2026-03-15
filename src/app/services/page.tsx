import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'BAi provides expert consulting in room acoustics, sound isolation, noise control, sound reinforcement, and audiovisual systems.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-[#0f1b2d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,rgba(200,165,85,0.4),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <ScrollReveal>
            <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mt-4 tracking-tight">
              Our <span className="font-semibold">Services</span>
            </h1>
            <p className="text-white/50 mt-6 max-w-xl text-lg font-light">
              Comprehensive acoustics and audiovisual consulting for every built environment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light text-[#0f1b2d] mb-6 tracking-tight">
              Need <span className="font-semibold">Acoustics Consulting</span>?
            </h2>
            <p className="text-[#64748b] mb-8 max-w-2xl mx-auto">
              Our team of experienced acousticians and AV consultants is ready to help with your
              next project. Contact us to discuss your needs.
            </p>
            <a
              href="mailto:info@baiaustin.com"
              className="inline-block bg-[#0f1b2d] text-white px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-[#1a3a5c] transition-colors duration-300"
            >
              Get In Touch
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
