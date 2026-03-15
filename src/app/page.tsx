import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import ScrollReveal from '@/components/ScrollReveal';
import { services } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />

      {/* Intro section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
                  About BAi
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-[#0f1b2d] mt-4 mb-6 tracking-tight">
                  Shaping Sound
                  <br />
                  <span className="font-semibold">Since 1935</span>
                </h2>
                <p className="text-[#64748b] leading-relaxed mb-6">
                  Since the time of its founding by Dr. C.P. Boner in 1935, the firm of Boner
                  Associates has actively consulted in acoustics, noise control and sound systems
                  for buildings. Our expertise spans building acoustics, noise control, sound
                  reinforcement systems, and comprehensive audiovisual design.
                </p>
                <p className="text-[#64748b] leading-relaxed mb-8">
                  From performing arts centers to corporate facilities, healthcare to education — we
                  bring scientific precision and artistic sensibility to every project. Richard Boner
                  brings over 62 years of experience, with work on over 6,000 projects.
                </p>
                <Link
                  href="/history"
                  className="inline-flex items-center gap-2 text-[#1a9aaa] text-sm uppercase tracking-wider hover:text-[#0f1b2d] transition-colors duration-300 group"
                >
                  Learn Our Story
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/images/services/orchestra.jpg"
                    alt="BAi acoustics consulting for performing arts"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative offset border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c8a555]/20 rounded-sm -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#0f1b2d] mt-4 tracking-tight">
                Our <span className="font-semibold">Expertise</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow duration-500 h-full">
                  <h3 className="text-lg font-semibold text-[#0f1b2d] mb-3">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-[#64748b]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block border border-[#0f1b2d] text-[#0f1b2d] px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#0f1b2d] hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0f1b2d] via-[#1a3a5c] to-[#0f1b2d] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
              Ready to Start Your <span className="font-semibold">Project</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10">
              With offices in Austin, Dallas, and Houston, our team of experienced acousticians and
              AV consultants is ready to bring their expertise to your next project.
            </p>
            <a
              href="mailto:info@baiaustin.com"
              className="inline-block bg-[#c8a555] text-[#0f1b2d] px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-[#d4b56a] transition-colors duration-300"
            >
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
