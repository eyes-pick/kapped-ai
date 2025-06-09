import { promises as fs } from 'fs';
import path from 'path';
import { getDocs } from './docs';

describe('getDocs', () => {
  const temp = path.join(process.cwd(), 'docs/test-temp.md');

  beforeAll(async () => {
    await fs.writeFile(temp, '# Temp Doc');
  });

  afterAll(async () => {
    await fs.unlink(temp);
  });

  it('includes newly created markdown files', async () => {
    const docs = await getDocs();
    const names = docs.map((d) => d.file);
    expect(names).toContain('test-temp.md');
  });
});
