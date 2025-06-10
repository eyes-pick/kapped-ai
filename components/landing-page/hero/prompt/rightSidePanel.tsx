'use client'
import React from "react";
import { FilePlus, ImageIcon } from "lucide-react";

export default function rightSidePanel() {
    return (
        <>
            <button className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition">
                <FilePlus size={16} />
            </button>
            <button className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition">
                <ImageIcon size={16} />
            </button>
        </>
    );
}
