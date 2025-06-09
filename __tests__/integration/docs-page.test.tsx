import { render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import DocsIndexPage from '@/app/docs/page';
import { createSandbox } from '@genr8/testing-sandbox';

vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => ({ container: render(await DocsIndexPage()).container })),
    close: vi.fn(),
  })),
}));

describe('Docs integration', () => {
  it('renders markdown inside sandbox', async () => {
    const sandbox = createSandbox();
    const { container } = await sandbox.load('/docs');
    await waitFor(() => expect(container.querySelector('.prose')).toBeInTheDocument());
  });
});
