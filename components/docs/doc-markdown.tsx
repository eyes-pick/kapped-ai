import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

interface DocMarkdownProps {
  file: string;
}

/**
 * Renders sanitized Markdown from a docs file.
 * @param file Markdown filename relative to `/docs`.
 */
export function DocMarkdown({ file }: DocMarkdownProps) {
  const [html, setHtml] = useState("");
  useEffect(() => {
    if (!file) return;
    fetch(`/docs/${encodeURIComponent(file)}`)
      .then((res) => {
        if (!res.ok) throw new Error("404");
        return res.text();
      })
      .then(async (md: string) => {
        const renderer = new marked.Renderer();
        renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
          let highlighted = text;
          if (lang && hljs.getLanguage(lang)) {
            highlighted = hljs.highlight(text, { language: lang }).value;
          } else {
            highlighted = hljs.highlightAuto(text).value;
          }
          return `<pre><code class="hljs language-${lang ?? ''}">${highlighted}</code></pre>`;
        };
        const parsed = await marked.parse(md, { renderer });
        const sanitized = DOMPurify.sanitize(parsed);
        setHtml(sanitized);
      })
      .catch(() => {
        setHtml('<p style="color:red">Error loading documentation.</p>');
      });
  }, [file]);

  return (
    <div
      className="prose prose-invert max-w-none text-zinc-100 prose-headings:text-zinc-50 prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-300 prose-code:bg-zinc-900 prose-code:text-pink-400 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:text-zinc-200 prose-pre:rounded prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-table:border-zinc-700 prose-th:bg-zinc-800 prose-td:bg-zinc-900 dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
