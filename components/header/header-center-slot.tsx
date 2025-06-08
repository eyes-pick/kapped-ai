"use client";
import { MessageCircle, Github, Database } from "lucide-react";

export default function HeaderCenterSlot() {
  return (
    <div className="flex items-center gap-6 text-white">
      <MessageCircle className="hover:text-zinc-400 cursor-pointer" size={20} />
      <Github className="hover:text-zinc-400 cursor-pointer" size={20} />
      <Database className="hover:text-zinc-400 cursor-pointer" size={20} />
    </div>
  );
}

// No unused imports found. File is under 100 lines. No code split needed.
