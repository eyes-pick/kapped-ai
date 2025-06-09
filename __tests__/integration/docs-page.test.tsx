import { render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import DocsIndexPage from '@/app/docs/page';
import { createSandbox } from '@genr8/testing-sandbox';

vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => {
      const page = await DocsIndexPage();
      return { container: render(page).container };
    }),
    close: vi.fn(),
  })),
}));

describe('Docs integration', () => {
  it('renders markdown inside sandbox', async () => {
    const sandbox = createSandbox() as ReturnType<typeof createSandbox>;
    const { container } = await sandbox.load('/docs');
    await waitFor(() => {
      expect(container.querySelector('.prose')).toBeInTheDocument();
    });
  });
});
