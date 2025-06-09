"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/atoms/card";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Separator } from "@/components/atoms/separator";
import { DocMarkdown } from "@/components/molecules/doc-markdown";

export interface DocItem {
  title: string;
  file: string;
  content?: string;
}

export interface DocsBrowserProps {
  /** List of docs returned from `getDocs`. */
  docs: DocItem[];
}

/**
 * Interactive documentation browser. Displays a sidebar with links and renders
 * the selected markdown file using {@link DocMarkdown}.
 */
export default function DocsBrowser({ docs }: DocsBrowserProps) {
  const [selected, setSelected] = useState(docs[0]?.file ?? "");
  const selectedDoc = docs.find((doc) => doc.file === selected);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col py-8 px-0 min-h-screen">
        <div className="px-6 pb-4">
          <h2 className="text-lg font-bold text-zinc-200 tracking-tight">
            Documentation
          </h2>
        </div>
        <Separator className="bg-zinc-800" />
        <ScrollArea className="flex-1 px-2">
          <nav aria-label="Documentation">
            <ul className="space-y-1 mt-2">
              {docs.map((doc) => (
                <li key={doc.file}>
                  <button
                    onClick={() => setSelected(doc.file)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors text-sm font-medium ${selected === doc.file ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                    aria-current={selected === doc.file ? "page" : undefined}
                  >
                    {doc.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </div>
      <main className="flex-1 flex flex-col items-center py-10 px-2 md:px-0">
        <Card className="w-full max-w-3xl bg-zinc-900 border-zinc-800 shadow-xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-zinc-100 text-center tracking-tight">
              Kapped Documentation
            </h1>
            <Separator className="mb-6 bg-zinc-800" />
            <div className="bg-zinc-950 rounded-lg p-6 min-h-[400px] border border-zinc-800">
              <DocMarkdown file={selectedDoc?.file ?? ""} />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
