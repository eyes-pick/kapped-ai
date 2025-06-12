"use client";
import { getSandboxUrl } from "@/lib/sandbox-url";

export default function SandboxPanel() {
  const iframeSrc = getSandboxUrl();
  return (
    <div className="h-full w-full flex items-center justify-center">
      <iframe
        title="Sandboxed Vite App"
        src={iframeSrc}
        sandbox="allow-scripts allow-same-origin"
        className="w-full h-full border-0 rounded-t-none rounded-b-lg shadow-xl bg-zinc-950"
        style={{ minHeight: "80vh" }}
      />
    </div>
  );
}
