import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/constants';

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

describe('ServiceCard', () => {
  const service = services[0]; // Room Acoustics

  it('renders service title', () => {
    render(<ServiceCard service={service} index={0} />);
    expect(screen.getByText(service.title)).toBeInTheDocument();
  });

  it('renders all service items', () => {
    render(<ServiceCard service={service} index={0} />);
    for (const item of service.items) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('renders correctly for all services', () => {
    for (const svc of services) {
      const { unmount } = render(<ServiceCard service={svc} index={0} />);
      expect(screen.getByText(svc.title)).toBeInTheDocument();
      unmount();
    }
  });
});
