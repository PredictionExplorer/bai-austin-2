import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '@/components/Navbar';
import { navLinks } from '@/lib/constants';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock framer-motion to simple divs
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
      const { layoutId, transition, ...rest } = props as Record<string, unknown>;
      const safeProps: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(rest)) {
        if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
          safeProps[key] = val;
        }
      }
      return <span {...safeProps}>{children}</span>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />);
    for (const link of navLinks) {
      const elements = screen.getAllByText(link.label);
      expect(elements.length).toBeGreaterThan(0);
    }
  });

  it('renders the logo link to home', () => {
    render(<Navbar />);
    const homeLink = screen.getByRole('link', { name: /BAi Home/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders the logo image', () => {
    render(<Navbar />);
    const logoImg = screen.getByAltText('BAi Acoustics');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', '/images/logo.gif');
  });

  it('renders desktop navigation links with correct hrefs', () => {
    render(<Navbar />);
    for (const link of navLinks) {
      const elements = screen.getAllByRole('link', { name: link.label });
      const matchingLink = elements.find(el => el.getAttribute('href') === link.href);
      expect(matchingLink).toBeTruthy();
    }
  });

  it('renders mobile menu button', () => {
    render(<Navbar />);
    const button = screen.getByRole('button', { name: /open menu/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Navbar />);
    const button = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(button);
    const closeButton = screen.getByRole('button', { name: /close menu/i });
    expect(closeButton).toBeInTheDocument();
  });
});
