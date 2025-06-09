import { render } from '@testing-library/react';
import { vi } from 'vitest';
import DocsIndexPage from '@/app/docs/page';
import { createSandbox } from '@genr8/testing-sandbox';

vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => {
      const element = await DocsIndexPage();
      return { container: render(element).container };
    }),
    close: vi.fn(),
  })),
}));

interface Sandbox {
  load: (path: string) => Promise<{ container: HTMLElement }>;
  close: () => void;
}

describe('Docs integration', () => {
  it('renders markdown inside sandbox', async () => {
    const sandbox = createSandbox() as unknown as Sandbox;
    const { container } = await sandbox.load('/docs');
    expect(container.querySelector('.prose')).toBeInTheDocument();
  });
});
