"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

/** Handlers for toolbar actions */
function openFilePicker() {
  console.log("open file picker");
}

function uploadImage() {
  console.log("upload image");
}

function generateCode() {
  console.log("generate code");
}

function runFix() {
  console.log("run fix");
}

export default function ChatToolbar() {
  return (
    <div className="flex flex-1 justify-center items-center mb-1 my-4">
      <Menubar className="bg-inherit border-none gap-9 mr-4">
        <MenubarMenu>
          <MenubarTrigger className="py-2 mb-3 text-white hover:bg-gray-700">
            Models
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>GPT-4o</MenubarItem>
            <MenubarItem>GPT-4o-mini</MenubarItem>
            <MenubarItem>GPT-3o</MenubarItem>
            <MenubarItem>GPT-3o-mini</MenubarItem>
            <MenubarItem>GPT-4</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex gap-2">
        <Button
          className="py-2 text-white hover:bg-gray-700"
          onClick={openFilePicker}
        >
          Files
        </Button>
        <Button
          className="py-2 text-white hover:bg-gray-700"
          onClick={uploadImage}
        >
          Images
        </Button>
        <Button
          className="py-2 text-white hover:bg-gray-700"
          onClick={generateCode}
        >
          Gen
        </Button>
        <Button className="py-2 text-white hover:bg-gray-700" onClick={runFix}>
          Fix
        </Button>
      </div>
    </div>
  );
}
