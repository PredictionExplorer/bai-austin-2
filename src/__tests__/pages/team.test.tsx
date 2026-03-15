import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TeamPage from '@/app/team/page';
import { teamMembers } from '@/lib/constants';

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

describe('Team Page', () => {
  it('renders the page heading', () => {
    render(<TeamPage />);
    expect(screen.getByText('Team')).toBeInTheDocument();
  });

  it('renders all team members', () => {
    render(<TeamPage />);
    for (const member of teamMembers) {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText(member.title)).toBeInTheDocument();
    }
  });

  it('renders the contact CTA', () => {
    render(<TeamPage />);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<TeamPage />);
    expect(screen.getByText(/Dedicated professionals/i)).toBeInTheDocument();
  });
});
