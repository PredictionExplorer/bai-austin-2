import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectsPage from '@/app/projects/page';
import { projectCategories } from '@/lib/constants';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const safeProps: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(props)) {
        if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
          safeProps[key] = val;
        }
      }
      return <div {...safeProps}>{children}</div>;
    },
  },
}));

describe('Projects Page', () => {
  it('renders the page heading', () => {
    render(<ProjectsPage />);
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });

  it('renders all project categories', () => {
    render(<ProjectsPage />);
    for (const cat of projectCategories) {
      expect(screen.getByText(cat.title)).toBeInTheDocument();
    }
  });

  it('renders the stats section', () => {
    render(<ProjectsPage />);
    expect(screen.getByText('6,000+')).toBeInTheDocument();
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/Over 6,000 projects/i)).toBeInTheDocument();
  });
});
