'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getDocs } from '@/lib/docs';

// 🌐 Dynamically import the browser-only Docs viewer
const DocsBrowser = dynamic(() => import('@/components/docs/docs-browser.client'), {
  ssr: false, // Ensures this runs only on the client
});

export default function DocsIndexPage() {
  const [docs, setDocs] = useState<Array<{ title: string; file: string }>>([]);

  useEffect(() => {
    getDocs().then(setDocs).catch(console.error);
  }, []);

  return <DocsBrowser docs={docs} />;
}
