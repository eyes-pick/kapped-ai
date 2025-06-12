"use client";
import ChatToolbar from "./ChatToolbar";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function ChatPanel() {
  return (
    <div className="flex flex-col h-full w-full bg-zinc-900 border-0 border-zinc-800">
      <ChatToolbar />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
