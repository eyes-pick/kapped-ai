"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addPrompt, getContext } from "@/lib/context-manager";

export default function ChatInput() {
  const [text, setText] = useState("");
  const projectId = "default";

  const handleSend = async () => {
    if (!text.trim()) return;
    addPrompt(projectId, text);
    const response = await fetch("/api/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: text, context: getContext(projectId), projectId }),
    }).catch(() => {
      /* ignore network errors for now */
    });
    if (response && response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      // Drain streamed response once for demo purposes
      await reader.read().then(({ value }) => {
        if (value) console.log(decoder.decode(value));
      });
      reader.releaseLock();
    }
    setText("");
  };

  return (
    <div className="flex gap-3 pb-3 ml-1">
      <Textarea
        className=" justify-self-center border-none resize-none outline-none max-w-[90%]"
        placeholder="Type the changes you want to make..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="button" onClick={handleSend}>
        SEND
      </Button>
    </div>
  );
}
