import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/Footer';
import { offices } from '@/lib/constants';

describe('Footer', () => {
  it('renders all three offices', () => {
    render(<Footer />);
    expect(screen.getByText(/Austin Office \(HQ\)/)).toBeInTheDocument();
    expect(screen.getByText(/Dallas Office/)).toBeInTheDocument();
    expect(screen.getByText(/Houston Office/)).toBeInTheDocument();
  });

  it('renders office phone numbers', () => {
    render(<Footer />);
    for (const office of offices) {
      expect(screen.getByText(office.phone)).toBeInTheDocument();
    }
  });

  it('renders office email addresses', () => {
    render(<Footer />);
    for (const office of offices) {
      expect(screen.getByText(office.email)).toBeInTheDocument();
    }
  });

  it('renders the Austin HQ designation', () => {
    render(<Footer />);
    expect(screen.getByText(/Austin Office \(HQ\)/)).toBeInTheDocument();
  });

  it('renders the company tagline', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems/i)
    ).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/BAi, LLC/)).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<Footer />);
    const logo = screen.getByAltText('BAi Acoustics');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo.gif');
  });

  it('renders social media links', () => {
    render(<Footer />);
    const fbLink = screen.getByRole('link', { name: /Facebook/i });
    const igLink = screen.getByRole('link', { name: /Instagram/i });
    const twLink = screen.getByRole('link', { name: /Twitter/i });
    expect(fbLink).toBeInTheDocument();
    expect(igLink).toBeInTheDocument();
    expect(twLink).toBeInTheDocument();
  });
});
