'use client'
import { Textarea } from "@/components/ui/textarea";

export default function ChatInput() {
    return (
        <div className="flex justify-center items-center mx-auto mb-2 mt-1">
            <Textarea className="flex border-none resize-none outline-none max-w-[90%]" placeholder="Type the changes you want too make..." />
        </div>
    );
};