import HeaderShell from "@/components/projects-page/header/header-shell";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { ReactNode } from "react";
import clsx from "clsx";

interface ProjectsLayoutShellProps {
  chatHeader?: ReactNode;
  chatStream?: ReactNode;
  chatToolbar?: ReactNode;
  chatInput?: ReactNode;
  sandboxIframe?: ReactNode;
  className?: string;
  headerLeftSlot?: ReactNode;
  headerCenterSlot?: ReactNode;
  headerRightSlot?: ReactNode;
}

/**
 * Sandbox UI embedding the Vite application.
 */
export default function ProjectsLayoutShell({
  chatHeader,
  chatStream,
  chatToolbar,
  chatInput,
  sandboxIframe,
  className = "",
  headerLeftSlot,
  headerCenterSlot,
  headerRightSlot,
}: ProjectsLayoutShellProps) {
  return (
    <div className={clsx("flex flex-col h-screen w-screen bg-zinc-950", className)}>
      <HeaderShell
        leftSlot={headerLeftSlot}
        centerSlot={headerCenterSlot}
        rightSlot={headerRightSlot}
      />
      <ResizablePanelGroup direction="horizontal" className="flex-1 min-h-0">
        <ResizablePanel
          defaultSize={40}
          minSize={30}
          maxSize={75}
          className="bg-zinc-900 border-0 border-none"
        >
          {/* Chat Header*/}
          <div id="chat-header" className="flex justify-center bg-inherit text-white/90 border-none my-1 mx-4 gap-x-2.5 max-h-[60px]">
            {chatHeader}
          </div>
          {/* Chat message stream */}
          <div id="message-stream" className="grid grid-rows-1 h-auto w-full bg-zinc-900">
            {chatStream}
          </div>
          {/* Chat toolbar */}
          <div id="message-input" className="h-full w-full bg-zinc-900">
            {chatToolbar}
            {/* Chat Input */}
            {chatInput}
          </div>

        </ResizablePanel>
        <ResizableHandle withHandle className="border-none stroke-0 outline-0" />
        <ResizablePanel defaultSize={80} minSize={40} className="bg-zinc-950">
          <div className="h-full w-full flex items-center justify-center">
            {sandboxIframe}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
