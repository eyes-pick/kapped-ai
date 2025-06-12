"use client";

import HeaderShell from "@/components/projects-page/header/header-shell";
import HeaderLeftSlotProjects from "@/components/projects-page/header/header-left-slot-projects";
import HeaderCenterSlotProjects from "@/components/projects-page/header/header-center-slot-projects";
import HeaderRightSlotProjects from "@/components/projects-page/header/header-right-slot-projects";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import ChatPanel from "@/components/projects-page/chat/ChatPanel";
import SandboxPanel from "@/components/projects-page/preview/SandboxPanel";

/**
 * Sandbox UI embedding the Vite application.
 */
export default function SandboxPage() {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950">
      <HeaderShell
        leftSlot={<HeaderLeftSlotProjects />}
        centerSlot={<HeaderCenterSlotProjects />}
        rightSlot={<HeaderRightSlotProjects />}
      />
      <ResizablePanelGroup direction="horizontal" className="flex-1 min-h-0">
        <ResizablePanel
          defaultSize={40}
          minSize={30}
          maxSize={75}
          className="bg-zinc-900 border-0 border-zinc-800"
        >

          {/* Chat UI goes here */}
          <div className="flex justify-center bg-inherit text-white/90 border-none my-1 mx-4 gap-x-2.5 max-h-[60px]">
            <Button
              className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
              Chat
            </Button>
            <Button
              className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
              Code
            </Button>
          </div>
          <div className="grid grid-rows-1 h-auto w-full bg-gray-800">
            <div className="h-full w-full max-h-[300px] min-h-[250px] overflow-y-auto grid grid-cols-3 bg-gray-800 scroll-auto rounded-none text-black text-lg">
              <Card className="flex flex-1 bg-gray-600 p-1 mx-3 my-1 mb-4 border-0">
                <CardHeader>
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <CardAction>View Commit</CardAction>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    *AI RESPONSE GOES HERE*
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
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
              <Textarea placeholder="Type the changes you want to make..." />
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
          {/* Chat messages and input */}
        </ResizablePanel>
        <ResizableHandle withHandle className="border-none stroke-0 outline-0" />
        <ResizablePanel defaultSize={80} minSize={40} className="bg-zinc-950">
          <SandboxPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
