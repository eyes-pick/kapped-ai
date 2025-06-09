"use client";
import React from "react";
import { getDocs } from '@/lib/docs';
import dynamic from 'next/dynamic';


const DocsBrowser = dynamic(() => import('@/components/docs/docs-browser.client'));

// eslint-disable-next-line @next/next/no-async-client-component
export default async function DocsIndexPage() {
  const docs = await getDocs();
  return <DocsBrowser docs={docs} />;
}
