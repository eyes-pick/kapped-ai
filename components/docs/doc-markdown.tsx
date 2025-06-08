import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

interface DocMarkdownProps {
  file: string;
}

export function DocMarkdown({ file }: DocMarkdownProps) {
  const [html, setHtml] = useState("");
  useEffect(() => {
    if (!file) return;
    fetch(`/docs/${file}`)
      .then((res) => {
        if (!res.ok) throw new Error("404");
        return res.text();
      })
      .then(async (md: string) => {
        const parsed = await marked.parse(md);
        const sanitized = DOMPurify.sanitize(parsed as unknown as string);
        setHtml(sanitized);
      })
      .catch(() => {
        setHtml('<p style="color:red">Error loading documentation.</p>');
      });
  }, [file]);

  return (
    <div
      className="prose prose-invert max-w-none text-zinc-100"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
