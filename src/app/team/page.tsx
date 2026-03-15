import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import TeamMember from '@/components/TeamMember';
import { teamMembers } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the BAi team — experienced acousticians and AV consultants serving Texas from Austin, Dallas, and Houston.',
};

export default function TeamPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-[#0f1b2d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_40%_60%,rgba(200,165,85,0.4),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <ScrollReveal>
            <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
              Our People
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mt-4 tracking-tight">
              The <span className="font-semibold">Team</span>
            </h1>
            <p className="text-white/50 mt-6 max-w-xl text-lg font-light">
              Dedicated professionals with decades of experience in acoustics and audiovisual
              consulting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <TeamMember key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#fafafa] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light text-[#0f1b2d] mb-6 tracking-tight">
              Work <span className="font-semibold">With Us</span>
            </h2>
            <p className="text-[#64748b] mb-8 max-w-2xl mx-auto">
              Our team combines decades of acoustics expertise with cutting-edge audiovisual design
              capabilities. Let us bring our knowledge to your next project.
            </p>
            <a
              href="mailto:info@baiaustin.com"
              className="inline-block bg-[#0f1b2d] text-white px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-[#1a3a5c] transition-colors duration-300"
            >
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
