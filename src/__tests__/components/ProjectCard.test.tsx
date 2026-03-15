import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '@/components/ProjectCard';
import { projectCategories } from '@/lib/constants';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, exit, transition, whileInView, viewport, ...rest } = props as Record<string, unknown>;
      const safeProps: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(rest)) {
        if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
          safeProps[key] = val;
        }
      }
      return <div {...safeProps}>{children}</div>;
    },
  },
}));

describe('ProjectCard', () => {
  const category = projectCategories[0]; // Sports, Leisure & Recreation

  it('renders category title', () => {
    render(<ProjectCard category={category} index={0} />);
    expect(screen.getByText(category.title)).toBeInTheDocument();
  });

  it('renders See More text', () => {
    render(<ProjectCard category={category} index={0} />);
    expect(screen.getByText(/See More/i)).toBeInTheDocument();
  });

  it('renders correctly for all categories', () => {
    for (const cat of projectCategories) {
      const { unmount } = render(<ProjectCard category={cat} index={0} />);
      expect(screen.getByText(cat.title)).toBeInTheDocument();
      unmount();
    }
  });
});
