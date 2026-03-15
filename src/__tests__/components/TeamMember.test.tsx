import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TeamMember from '@/components/TeamMember';
import { teamMembers } from '@/lib/constants';

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

describe('TeamMember', () => {
  const member = teamMembers[0]; // Richard Boner

  it('renders member name', () => {
    render(<TeamMember member={member} index={0} />);
    expect(screen.getByText(member.name)).toBeInTheDocument();
  });

  it('renders member title', () => {
    render(<TeamMember member={member} index={0} />);
    expect(screen.getByText(member.title)).toBeInTheDocument();
  });

  it('renders member photo', () => {
    render(<TeamMember member={member} index={0} />);
    const img = screen.getByAltText(member.name);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', member.image);
  });

  it('renders member bio in hover overlay', () => {
    render(<TeamMember member={member} index={0} />);
    expect(screen.getByText(member.bio)).toBeInTheDocument();
  });

  it('renders member phone number', () => {
    render(<TeamMember member={member} index={0} />);
    expect(screen.getByText(member.phone)).toBeInTheDocument();
  });

  it('renders member email', () => {
    render(<TeamMember member={member} index={0} />);
    expect(screen.getByText(member.email)).toBeInTheDocument();
  });

  it('renders correctly for all team members', () => {
    for (const m of teamMembers) {
      const { unmount } = render(<TeamMember member={m} index={0} />);
      expect(screen.getByText(m.name)).toBeInTheDocument();
      expect(screen.getByText(m.title)).toBeInTheDocument();
      expect(screen.getByAltText(m.name)).toBeInTheDocument();
      unmount();
    }
  });
});
