"use client";
import { Textarea } from "@/components/ui/textarea";

export default function ChatInput() {
  return (
    <div>
      <Textarea
        className=" justify-self-center border-none resize-none outline-none max-w-[90%]"
        placeholder="Type the changes you want too make..."
      />
    </div>
  );
}
