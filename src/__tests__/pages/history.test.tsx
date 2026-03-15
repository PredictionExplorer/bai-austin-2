import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HistoryPage from '@/app/history/page';

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

describe('History Page', () => {
  it('renders the page heading', () => {
    render(<HistoryPage />);
    expect(screen.getByText('Us')).toBeInTheDocument();
  });

  it('renders the opening quote', () => {
    render(<HistoryPage />);
    const quoteElements = screen.getAllByText(/underwater sound defense/i);
    expect(quoteElements.length).toBeGreaterThan(0);
  });

  it('renders the founding section', () => {
    render(<HistoryPage />);
    expect(screen.getByText(/founding by Dr. C.P. Boner in 1935/i)).toBeInTheDocument();
  });

  it('renders Dr. Boner section', () => {
    render(<HistoryPage />);
    expect(screen.getByText(/Boner/i, { selector: 'h2 span' })).toBeInTheDocument();
  });

  it('renders Charles and Richard sections', () => {
    render(<HistoryPage />);
    expect(screen.getByText('Charles R. Boner')).toBeInTheDocument();
    expect(screen.getByText('Richard E. Boner')).toBeInTheDocument();
  });

  it('renders professional memberships', () => {
    render(<HistoryPage />);
    expect(screen.getByText('Acoustical Society of America')).toBeInTheDocument();
    expect(screen.getByText('Audio Engineering Society')).toBeInTheDocument();
  });

  it('renders specialties list', () => {
    render(<HistoryPage />);
    expect(screen.getByText('Building acoustics')).toBeInTheDocument();
    expect(screen.getByText('Building noise control')).toBeInTheDocument();
  });

  it('renders firm info section', () => {
    render(<HistoryPage />);
    expect(screen.getByText(/over 62 years of experience/i)).toBeInTheDocument();
  });

  it('renders the history background image', () => {
    render(<HistoryPage />);
    const historyImages = screen.getAllByAltText(/BAi/i);
    expect(historyImages.length).toBeGreaterThan(0);
  });
});
