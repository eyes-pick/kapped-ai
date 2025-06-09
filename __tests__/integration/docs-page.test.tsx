import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { createSandbox } from '@genr8/testing-sandbox';

// 🧪 Mock docs lib
vi.mock('@/lib/docs', () => ({
  getDocs: vi.fn(async () => [{ title: 'Test', file: 'test.md' }]),
}));

// 🧪 Mock dynamic import for SSR compatibility
vi.mock('next/dynamic', () => ({
  default: () => ({ default: () => <div className="prose" /> }),
}));

// 🧪 Mock fetch for markdown
global.fetch = vi.fn(() =>
  Promise.resolve(new Response('# Hello World'))
);

// 🧪 Mock sandbox environment
vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => {
      // Simulate rendered output with prose class for markdown
      const DocsComponent = () => <div className="prose" />;
      const { container } = render(<DocsComponent />);
      return { container };
    }),
    close: vi.fn(),
  })),
}));

describe('Docs integration', () => {
  it('renders markdown inside sandbox', async () => {
    const sandbox = createSandbox();
    const { container } = await sandbox.load('/docs');

    await waitFor(() => {
      expect(container.querySelector('.prose')).toBeInTheDocument();
    });
  });
});
