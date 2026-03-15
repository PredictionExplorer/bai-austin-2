import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/image globally
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { fill, priority, sizes, ...rest } = props;
    return React.createElement('img', {
      ...rest,
      'data-fill': fill ? 'true' : undefined,
      'data-priority': priority ? 'true' : undefined,
    });
  },
}));
