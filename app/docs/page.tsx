"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/atoms/card";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Separator } from "@/components/atoms/separator";
import { DocMarkdown } from "@/components/molecules/doc-markdown";
import { getDocs } from '@/lib/docs';
import dynamic from 'next/dynamic';


const DocsBrowser = dynamic(() => import('@/components/docs/docs-browser.client'));

export default async function DocsIndexPage() {
  const docs = await getDocs();
  return <DocsBrowser docs={docs} />;
}
