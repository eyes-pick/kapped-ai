"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardAction,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";

// Simple representation of a streamed chat message
type ChatMessage = {
  id: number;
  content: string;
};

/**
 * Display and auto-scroll streamed chat messages from the AI backend.
 */
export default function ChatStream() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const streamRef = useRef<HTMLDivElement>(null);
  const projectId = "default";

  // Subscribe to the AI stream once on mount and append incoming messages
  useEffect(() => {
    if (typeof window === "undefined" || !("EventSource" in window)) return;
    const source = new EventSource(`/api/chat/stream?projectId=${projectId}`);
    source.onmessage = (event) => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length, content: event.data },
      ]);
    };
    return () => {
      source.close();
    };
  }, [projectId]);

  // Always scroll to the newest message when messages update
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <Card className="flex flex-1 min-h-[250px] bg-slate-600 p-1 mx-3 my-2 mb-4 border-0">
        <div>
          <CardHeader className="p-4 mx-auto">
            <Avatar className="bg-slate-300">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <CardAction>View Commit</CardAction>
          </CardHeader>
        </div>
        <div>
          <CardContent ref={streamRef} className="flex flex-col gap-2">
            {messages.map((msg) => (
              <CardDescription key={msg.id}>{msg.content}</CardDescription>
            ))}
          </CardContent>
        </div>
      </Card>
    </>
  );
}
