import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StatsCounter from '@/components/StatsCounter';
import { stats } from '@/lib/constants';

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
  useInView: () => false,
}));

describe('StatsCounter', () => {
  it('renders all stat labels', () => {
    render(<StatsCounter />);
    for (const stat of stats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });

  it('renders the correct number of stat items', () => {
    render(<StatsCounter />);
    expect(screen.getByText('Years of Excellence')).toBeInTheDocument();
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
    expect(screen.getByText('Texas Offices')).toBeInTheDocument();
  });
});
