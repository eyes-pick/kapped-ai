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
          <ChatPanel />
        </ResizablePanel>
        <ResizableHandle withHandle className="border-none stroke-0 outline-0" />
        <ResizablePanel defaultSize={80} minSize={40} className="bg-zinc-950">
          <SandboxPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
