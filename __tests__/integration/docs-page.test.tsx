import { render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { createSandbox as originalCreateSandbox } from '@genr8/testing-sandbox';

// Mock dynamic import to load the Docs page component directly
vi.mock('next/dynamic', () => ({
  default: () => require('../../components/docs/docs-browser.client.tsx').default,
}));

// Mock the sandbox implementation
vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => {
      const { container } = render(await require('../../components/docs/docs-browser.client.tsx').default());
      return { container };
    }),
    close: vi.fn(),
  })),
}));

describe('Docs integration', () => {
  it('renders markdown inside sandbox', async () => {
    const sandbox = originalCreateSandbox(); // Uses mocked version
    const { container } = await sandbox.load('/docs');

    await waitFor(() => {
      expect(container.querySelector('.prose')).toBeInTheDocument();
    });
  });
});
