import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '@/app/page';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

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
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const safeProps: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(props)) {
        if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
          safeProps[key] = val;
        }
      }
      return <span {...safeProps}>{children}</span>;
    },
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const safeProps: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(props)) {
        if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
          safeProps[key] = val;
        }
      }
      return <p {...safeProps}>{children}</p>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useInView: () => false,
}));

describe('Home Page', () => {
  it('renders the hero section', () => {
    render(<Home />);
    const elements = screen.getAllByText(/Acoustics/);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('renders the intro section with company description', () => {
    render(<Home />);
    expect(screen.getByText(/Shaping Sound/)).toBeInTheDocument();
    const since1935 = screen.getAllByText(/Since 1935/);
    expect(since1935.length).toBeGreaterThan(0);
  });

  it('renders the stats section', () => {
    render(<Home />);
    expect(screen.getByText('Years of Excellence')).toBeInTheDocument();
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
    expect(screen.getByText('Texas Offices')).toBeInTheDocument();
  });

  it('renders services preview section', () => {
    render(<Home />);
    expect(screen.getByText('Our')).toBeInTheDocument();
    expect(screen.getByText(/View All Services/)).toBeInTheDocument();
  });

  it('renders the CTA section', () => {
    render(<Home />);
    expect(screen.getByText(/Contact Us/)).toBeInTheDocument();
  });

  it('renders the Explore Our Services link', () => {
    render(<Home />);
    expect(screen.getByText(/Explore Our Services/)).toBeInTheDocument();
  });
});
