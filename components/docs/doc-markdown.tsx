import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

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
        if (!res.ok) throw new Error(String(res.status));
        return res.text();
      })
      .then(async (md: string) => {
        const parsed = await marked.parse(md);
        const sanitized = DOMPurify.sanitize(parsed);
        setHtml(sanitized);
      })
      .catch(() => {
        setError("Failed to load documentation.");
        setHtml("");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [file]);

  if (loading) {
    return <p className="text-muted">Loading documentation...</p>;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div
      className="prose prose-invert max-w-none text-zinc-100"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

