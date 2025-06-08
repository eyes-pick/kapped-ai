"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { DocMarkdown } from "@/components/docs/doc-markdown";

const DOCS = [
  { title: "Key Features", file: "key-features.md" },
  { title: "Future SDK Integrations", file: "future-integrations.md" },
  { title: "Getting Started", file: "getting-started.md" },
  { title: "User Guide", file: "user-guide.md" },
  { title: "Developer Notes", file: "dev-notes.md" },
  { title: "Project Tasks & Roadmap", file: "tasks.md" },
  { title: "Example Use Cases", file: "use-cases.md" },
  { title: "Contributing", file: "contributing.md" },
  { title: "License", file: "license.md" },
];

export default function DocsIndexPage() {
  const [selected, setSelected] = useState(DOCS[0].file);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar (no shadcn Sidebar, just a styled div) */}
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col py-8 px-0 min-h-screen">
        <div className="px-6 pb-4">
          <h2 className="text-lg font-bold text-zinc-200 tracking-tight">
            Documentation
          </h2>
        </div>
        <Separator className="bg-zinc-800" />
        <ScrollArea className="flex-1 px-2">
          <nav>
            <ul className="space-y-1 mt-2">
              {DOCS.map((doc) => (
                <li key={doc.file}>
                  <button
                    onClick={() => setSelected(doc.file)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors text-sm font-medium ${selected === doc.file ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                  >
                    {doc.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </div>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-10 px-2 md:px-0">
        <Card className="w-full max-w-3xl bg-zinc-900 border-zinc-800 shadow-xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-zinc-100 text-center tracking-tight">
              Kapped Documentation
            </h1>
            <Separator className="mb-6 bg-zinc-800" />
            <div className="bg-zinc-950 rounded-lg p-6 min-h-[400px] border border-zinc-800">
              <DocMarkdown file={selected} />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
