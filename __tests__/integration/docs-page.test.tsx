import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { createSandbox } from '@genr8/testing-sandbox';

vi.mock('next/dynamic', () => ({
  default: () => require('../../components/docs/docs-browser.client.tsx').default,
}));

vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => {
      const container = document.createElement('div');
      container.className = 'prose';
      return { container };
    }),
    close: vi.fn(),
  })),
}));

describe.skip('Docs integration', () => {
  it('renders markdown inside sandbox', async () => {
    const sandbox = createSandbox() as any;
    const { container } = await sandbox.load('/docs');
    expect(container.querySelector('.prose')).toBeInTheDocument();
  });
});
