import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { historyContent } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded in 1935 by Dr. C.P. Boner, BAi has over 85 years of acoustics consulting experience.',
};

export default function HistoryPage() {
  return (
    <>
      {/* Page hero with background image */}
      <section className="relative bg-[#0f1b2d] pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/history-bg.png"
          alt="BAi history"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b2d]/60 to-[#0f1b2d]/90" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <ScrollReveal>
            <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
              Our Heritage
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mt-4 tracking-tight">
              About <span className="font-semibold">Us</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <blockquote className="border-l-4 border-[#c8a555] pl-8 py-4">
              <p className="text-xl md:text-2xl text-[#0f1b2d] font-light italic leading-relaxed">
                &ldquo;{historyContent.openingQuote}&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Founding */}
      <section className="bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
                  Founded 1935
                </span>
                <h2 className="text-3xl md:text-4xl font-light text-[#0f1b2d] mt-4 mb-6 tracking-tight">
                  The <span className="font-semibold">Firm</span>
                </h2>
                <p className="text-[#64748b] leading-relaxed mb-6">
                  {historyContent.founding}
                </p>
                <h3 className="text-sm uppercase tracking-wider text-[#0f1b2d] font-semibold mb-4">
                  Specialties
                </h3>
                <ul className="space-y-2">
                  {historyContent.specialties.map((item) => (
                    <li
                      key={item}
                      className="text-[#64748b] pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1a9aaa]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <Image
                    src="/images/history-bg.png"
                    alt="BAi firm history"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#0f1b2d]/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl font-extralight text-white/30">1935</div>
                      <div className="h-px w-20 bg-[#c8a555]/30 mx-auto my-4" />
                      <div className="text-xs text-white/50 uppercase tracking-[0.2em]">
                        Austin, Texas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dr. Boner's Career */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
                Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0f1b2d] mt-4 mb-6 tracking-tight">
                Dr. C.P. <span className="font-semibold">Boner</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <ScrollReveal>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#0f1b2d] font-semibold mb-6">
                  Career Highlights
                </h3>
                <ul className="space-y-3">
                  {historyContent.drBoner.career.map((item) => (
                    <li
                      key={item}
                      className="text-[#64748b] text-sm pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-px before:bg-[#c8a555]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-[#fafafa] p-8 rounded-sm border-l-2 border-[#c8a555]">
                <h3 className="text-sm uppercase tracking-wider text-[#0f1b2d] font-semibold mb-4">
                  Retirement &amp; Succession
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  {historyContent.drBoner.succession}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Charles & Richard */}
      <section className="bg-[#0f1b2d] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white/5 rounded-sm p-8 border border-white/10">
                <h3 className="text-[#c8a555] text-xl font-semibold mb-4">Charles R. Boner</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  {historyContent.charlesBoner.bio}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {historyContent.charlesBoner.research}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white/5 rounded-sm p-8 border border-white/10">
                <h3 className="text-[#c8a555] text-xl font-semibold mb-4">Richard E. Boner</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  {historyContent.richardBoner.bio}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {historyContent.richardBoner.interests}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Firm Info */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-[#64748b] leading-relaxed text-center text-lg">
              {historyContent.firmInfo}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-[#fafafa] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
                Affiliations
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0f1b2d] mt-4 tracking-tight">
                Professional <span className="font-semibold">Memberships</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {historyContent.memberships.map((m, i) => (
              <ScrollReveal key={m} delay={i * 0.05}>
                <div className="bg-white px-6 py-4 rounded-sm text-sm text-[#0f1b2d] border border-gray-100 text-center">
                  {m}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
