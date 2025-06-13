"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

export default function ChatToolbar() {
  return (
    <div className="flex flex-1 justify-center items-center mb-1 my-4">
      <Menubar className="bg-inherit border-none gap-4 mr-4">
        <MenubarMenu>
          <MenubarTrigger className="py-2 text-white hover:bg-gray-700">
            Models
          </MenubarTrigger>
          <Button className="py-2 text-white hover:bg-gray-700">Files</Button>
          <Button className="py-2 text-white hover:bg-gray-700">Images</Button>
          <Button className="py-2 text-white hover:bg-gray-700">Gen</Button>
          <Button className="py-2 text-white hover:bg-gray-700">Fix</Button>
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
