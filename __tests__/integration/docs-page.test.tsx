import { render } from '@testing-library/react';
import { vi } from 'vitest';
import DocsIndexPage from '@/app/docs/page';
import { createSandbox } from '@genr8/testing-sandbox';

vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => ({ container: render(<DocsIndexPage />).container })),
    close: vi.fn(),
  })),
}));

describe('Docs integration', () => {
  it('renders markdown inside sandbox', async () => {
    const sandbox = createSandbox() as any;
    const { container } = await sandbox.load('/docs');
    expect(container.querySelector('.prose')).toBeInTheDocument();
  });
});
