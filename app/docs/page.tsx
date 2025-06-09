"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getDocs } from '@/lib/docs';

const DocsBrowser = dynamic(() => import('@/components/docs/docs-browser.client'));

export default function DocsIndexPage() {
  const [docs, setDocs] = useState<Array<{ title: string; file: string }>>([]);

  useEffect(() => {
    getDocs().then(setDocs);
  }, []);

  return <DocsBrowser docs={docs} />;
}
