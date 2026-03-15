import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ScrollReveal from '@/components/ScrollReveal';

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

describe('ScrollReveal', () => {
  it('renders children content', () => {
    render(
      <ScrollReveal>
        <p>Test content</p>
      </ScrollReveal>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <ScrollReveal className="my-custom-class">
        <p>Content</p>
      </ScrollReveal>
    );
    expect(screen.getByText('Content').parentElement).toHaveClass('my-custom-class');
  });
});
