"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

export type ChatToolbarProps = {
  onOpenFiles?: () => void;
  onUploadImage?: () => void;
  onGenerate?: () => void;
  onFix?: () => void;
};
export default function ChatToolbar({
  onOpenFiles,
  onUploadImage,
  onGenerate,
  onFix,
}: ChatToolbarProps = {}) {
  return (
    <div className="flex flex-1 justify-center items-center mb-1 my-4">
      <Menubar className="bg-inherit border-none gap-9 mr-4">
        <MenubarMenu>
          <MenubarTrigger className="py-2 mb-3 text-white hover:bg-gray-700">
            Models
          </MenubarTrigger>
          <Button
            className="py-2 mb-3 text-white hover:bg-gray-700"
            onClick={onOpenFiles}
          >
            Files
          </Button>
          <Button
            className="py-2 mb-3 text-white hover:bg-gray-700"
            onClick={onUploadImage}
          >
            Images
          </Button>
          <Button
            className="py-2 mb-3 text-white hover:bg-gray-700"
            onClick={onGenerate}
          >
            Gen
          </Button>
          <Button
            className="py-2 mb-3 text-white hover:bg-gray-700"
            onClick={onFix}
          >
            Fix
          </Button>
          <MenubarContent>
            <MenubarItem>GPT-4o</MenubarItem>
            <MenubarItem>GPT-4o-mini</MenubarItem>
            <MenubarItem>GPT-3o</MenubarItem>
            <MenubarItem>GPT-3o-mini</MenubarItem>
            <MenubarItem>GPT-4</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
