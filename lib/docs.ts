import path from 'path';

// Dynamically import fs only on the server to avoid bundling it for the client
async function loadFs() {
  if (typeof process === 'undefined' || !process.versions?.node) {
    return null as unknown as typeof import('fs').promises;
  }
  return eval('require')("fs").promises;
}

/**
 * Reads all markdown files from the local `docs` directory. The first line of
 * each file is used as the display title. If a file does not begin with a
 * markdown heading, the file name (minus the `.md` extension) is used instead.
 *
 * @returns Promise resolving to a list of available docs.
 *
 * @example
 * const docs = await getDocs();
 * // [{ title: 'Getting Started', file: 'getting-started.md' }, ...]
 */
export async function getDocs(): Promise<{ title: string; file: string }[]> {
  const fs = await loadFs();
  if (!fs) {
    return [];
  }
  const docsDir = path.join(process.cwd(), 'docs');
  const files = await fs.readdir(docsDir);
  const mdFiles = files.filter((f: string) => f.endsWith('.md'));
  const docs = await Promise.all(
    mdFiles.map(async (file: string) => {
      const content = await fs.readFile(path.join(docsDir, file), 'utf8');
      const firstLine = content.split('\n')[0];
      const title = firstLine.replace(/^#\s*/, '').trim() || file.replace(/\.md$/, '');
      return { title, file };
    })
  );
  return docs;
}
