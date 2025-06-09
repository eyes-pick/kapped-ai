"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// 🌐 Dynamically import the browser-only Docs viewer
const DocsBrowser = dynamic(
  () => import("@/components/docs/docs-browser.client"),
  {
    ssr: false,
  },
);

export default function DocsIndexPage() {
  const [docs, setDocs] = useState<Array<{ title: string; file: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/docs/api")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load docs");
        return res.json();
      })
      .then(setDocs)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-muted">Loading documentation...</p>;
  if (error) return <p className="text-red-500">Failed to load docs.</p>;

  return <DocsBrowser docs={docs} />;
}
