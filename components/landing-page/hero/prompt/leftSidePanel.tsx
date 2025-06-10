'use client'
import React from "react";
import { Github, LayoutTemplate } from "lucide-react";

export default function leftSidePanel() {
    return (
        <>
            <button className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition">
                <Github size={16} />
            </button>
            <button className="bg-neutral-900 text-white border border-neutral-800 p-2 rounded-md text-sm font-semibold flex items-center justify-center w-10 h-10 hover:bg-neutral-800 transition">
                <LayoutTemplate size={16} />
            </button>
        </>
    )
}