"use client";
import { getSandboxUrl } from "@/lib/sandbox-url";

interface SandboxIframeProps {
  src?: string;
}

export default function SandboxIframe({ src }: SandboxIframeProps) {
  const iframeSrc = src || getSandboxUrl();
  return (
    <>
      <iframe
        title="Sandboxed Vite App"
        src={iframeSrc}
        sandbox="allow-scripts allow-same-origin"
        className="w-full h-full border-0 rounded-t-none rounded-b-lg shadow-xl bg-zinc-950"
        style={{ minHeight: "80vh" }}
      />
    </>
  );
}
