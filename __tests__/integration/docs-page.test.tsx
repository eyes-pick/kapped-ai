/// <reference path="../../__mocks__/genr8-testing-sandbox.d.ts" />
import { render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import DocsIndexPage from '@/app/docs/page';
import { createSandbox } from '@genr8/testing-sandbox';
vi.mock('@/lib/docs', () => ({
  getDocs: vi.fn(async () => [{ title: 'Test', file: 'test.md' }]),
}));

global.fetch = vi.fn(() => Promise.resolve(new Response('# Hello World')));

vi.mock('@genr8/testing-sandbox', () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => ({ container: render(<DocsIndexPage />).container })),
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
