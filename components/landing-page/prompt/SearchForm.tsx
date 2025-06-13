"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Github, FilePlus, ImageIcon, LayoutTemplate } from "lucide-react";

const SearchForm = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  /**
   * Submit handler creating a new project then navigating to it.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error("Failed");
      const data: { id: string } = await res.json();
      router.push(`/projects/${data.id}`);
    } catch {
      // Swallow errors silently for now
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center bg-white rounded-xl p-2 shadow-lg max-w-3xl w-full mb-6 z-10"
    >
      <div className="grid grid-cols-[auto_1fr_auto] gap-2 border border-gray-300 rounded-lg p-2 bg-gray-50 w-full box-border">
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition"
          >
            <Github size={16} />
          </button>
          <button
            type="button"
            className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition"
          >
            <LayoutTemplate size={16} />
          </button>
        </div>
        <input
          type="text"
          placeholder="What would you like to build?"
          className="col-span-1 px-2 py-2 text-sm border border-gray-300 rounded-md outline-none bg-white font-sans w-full"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition"
          >
            <FilePlus size={16} />
          </button>
          <button
            type="submit"
            className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition"
          >
            <ImageIcon size={16} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
