import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ServicesPage from '@/app/services/page';
import { services } from '@/lib/constants';

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

describe('Services Page', () => {
  it('renders the page heading', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders all service categories', () => {
    render(<ServicesPage />);
    for (const service of services) {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    }
  });

  it('renders the CTA section', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Comprehensive acoustics/i)).toBeInTheDocument();
  });
});
