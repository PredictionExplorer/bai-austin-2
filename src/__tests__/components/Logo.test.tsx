import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from '@/components/Logo';

describe('Logo', () => {
  it('renders an SVG with the BAi logo label', () => {
    render(<Logo />);
    const svg = screen.getByRole('img', { name: /BAi Logo/i });
    expect(svg).toBeInTheDocument();
  });

  it('accepts a custom className', () => {
    render(<Logo className="h-12 w-auto" />);
    const svg = screen.getByRole('img', { name: /BAi Logo/i });
    expect(svg).toHaveClass('h-12', 'w-auto');
  });
});
