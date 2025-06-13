"use client";
import { Button } from "@/components/ui/button";

export default function ChatHeader() {
  return (
    <>
      <Button className="w-[49%] justify-self-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm mr-0.5">
        Chat
      </Button>
      <Button className="w-[49%] justify-self-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm ml-0.5">
        Code
      </Button>
    </>
  );
}
