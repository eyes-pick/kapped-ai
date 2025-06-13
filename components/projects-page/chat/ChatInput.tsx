"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addPrompt, getContext } from "@/lib/context-manager";

export default function ChatInput() {
  const [text, setText] = useState("");
  const params = useParams<{ id?: string }>();
  const projectId = typeof params.id === "string" ? params.id : "default";

  const handleSend = async () => {
    if (!text.trim()) return;
    addPrompt(projectId, text);
    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: text, context: getContext(projectId) }),
    }).catch(() => {
      /* ignore network errors for now */
    });

    if (typeof window !== "undefined" && "EventSource" in window) {
      const source = new EventSource(`/api/chat/stream?projectId=${projectId}`);
      source.onmessage = (e) => {
        console.log("stream", e.data);
      };
      source.onerror = () => {
        source.close();
      };
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
