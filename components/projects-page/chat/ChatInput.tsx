"use client";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@components/ui/menubar";

export default function ChatInput() {
  return (
    <div className="h-full w-full bg-gray-800">
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Models</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>GPT-4o</MenubarItem>
              <MenubarItem>GPT-4o-mini</MenubarItem>
              <MenubarItem>GPT-3o</MenubarItem>
              <MenubarItem>GPT-3o-mini</MenubarItem>
              <MenubarItem>GPT-4</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Textarea placeholder="Type the changes you want too make..." />
        <Menubar>
          <MenubarMenu>
            <Button>Files</Button>
            <Button>Images</Button>
            <Button>Gen</Button>
            <Button>Fix</Button>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
