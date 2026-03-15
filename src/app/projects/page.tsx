import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import { projectCategories } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore 6,000+ projects across sports, education, performing arts, healthcare, and more.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-[#0f1b2d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_60%_40%,rgba(26,154,170,0.4),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <ScrollReveal>
            <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
              Our Work
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mt-4 tracking-tight">
              Project <span className="font-semibold">Categories</span>
            </h1>
            <p className="text-white/50 mt-6 max-w-xl text-lg font-light">
              Over 6,000 projects spanning every sector of the built environment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((cat, i) => (
              <ProjectCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0f1b2d] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-light text-white mb-2">6,000+</div>
                <p className="text-white/50 text-sm uppercase tracking-wider">
                  Projects Completed
                </p>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-2">10</div>
                <p className="text-white/50 text-sm uppercase tracking-wider">
                  Sectors Served
                </p>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-2">85+</div>
                <p className="text-white/50 text-sm uppercase tracking-wider">
                  Years of Experience
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
