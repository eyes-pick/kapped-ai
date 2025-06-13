"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ChatInput() {
  return (
    <div className="flex gap-3 pb-3 ml-1">
      <Textarea
        className=" justify-self-center border-none resize-none outline-none max-w-[90%]"
        placeholder="Type the changes you want too make..."
      />
      <Button type="submit">SEND</Button>
    </div>
  );
}
