"use client";
import { MessageCircle, Github, Database } from "lucide-react";

/**
 * Slot for center-aligned header content.
 */
export default function HeaderCenterSlotProjects() {
  return (
    <div className="flex items-center gap-6 text-white">
      <MessageCircle
        aria-label="chat"
        className="hover:text-zinc-400 cursor-pointer"
        size={20}
      />
      <a
        href="https://github.com/genr8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
      >
        <Github className="hover:text-zinc-400 cursor-pointer" size={20} />
      </a>
      <Database
        aria-label="db"
        className="hover:text-zinc-400 cursor-pointer"
        size={20}
      />
    </div>
  );
}

// No unused imports found. File is under 100 lines. No code split needed.
