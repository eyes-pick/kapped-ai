"use client";
import { useState } from "react";
import { LayoutPanelTop, Code2 } from "lucide-react";
import Link from "next/link";

/**
 * Right-aligned header utilities slot.
 */
export default function HeaderRightSlot() {
  const [showPreview, setShowPreview] = useState(true);
  return (
    <div className="flex items-center gap-4">
      <button
        aria-label="preview"
        className="cursor-pointer"
        onClick={() => setShowPreview(!showPreview)}
      >
        {showPreview ? (
          <LayoutPanelTop
            className="text-green-400 hover:text-green-300"
            size={20}
          />
        ) : (
          <Code2 className="text-zinc-400 hover:text-zinc-300" size={20} />
        )}
      </button>
      {/* Docs Button */}
      <Link
        href="/docs"
        aria-label="docs"
        className="text-xs text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1 rounded transition-colors duration-150 ml-2"
        style={{ fontSize: "12px", fontWeight: 500 }}
      >
        Docs
      </Link>
    </div>
  );
}
// No unused imports found. File is under 100 lines. No code split needed.
