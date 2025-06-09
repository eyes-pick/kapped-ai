import React from "react";
import { getDocs } from '@/lib/docs';
import DocsBrowser from '@/components/docs/docs-browser.client';

export default async function DocsIndexPage() {
  const docs = await getDocs();
  return <DocsBrowser docs={docs} />;
}
