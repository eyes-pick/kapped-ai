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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setHtml("");
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    fetch(`/docs/${encodeURIComponent(file)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load documentation.");
        return res.text();
      })
      .then(async (md: string) => {
        marked.setOptions({
          gfm: true,
          breaks: true,
        });
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
        setLoading(false);
      })
      .catch((err) => {
        setHtml("");
        setError(err.message || "Failed to load documentation.");
        setLoading(false);
      });
  }, [file]);

  if (loading) {
    return <p className="prose text-muted-foreground">Loading documentation...</p>;
  }
  if (error) {
    return <p className="prose text-red-500">{error}</p>;
  }

  return (
    <div
      className="prose prose-invert max-w-none text-zinc-100 prose-headings:text-zinc-50 prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-300 prose-code:bg-zinc-900 prose-code:text-pink-400 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:text-zinc-200 prose-pre:rounded prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-table:border-zinc-700 prose-th:bg-zinc-800 prose-td:bg-zinc-900 dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

