"use client";
import { Button } from "@components/ui/button";

export default function ChatToolbar() {
  return (
    <div className="flex justify-center bg-inherit text-white/90 border-none my-1 mx-4 gap-x-2.5 max-h-[60px]">
      <Button className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
        Chat
      </Button>
      <Button className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
        Code
      </Button>
    </div>
  );
}
