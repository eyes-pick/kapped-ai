import HeaderShell from "@/components/projects-page/header/header-shell";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
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
    <div
      className={clsx("flex flex-col h-screen w-screen bg-zinc-950", className)}
    >
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
          <div className={clsx("h-full w-full flex flex-col", className)}>
            {/* Chat Header*/}
            <div id="chat-header" className="mx-auto p-1 w-[80%]">
              {chatHeader}
            </div>
            {/* Chat message stream */}
            <div id="message-stream" className="justify-self-start w-[80%] h-auto flex-1 overflow-y-auto">
              {chatStream}
            </div>
            {/* Chat toolbar and input fixed to bottom */}
            <div id="message-input" className="w-full flex flex-col bg-zinc-900 sticky bottom-0 z-10">
              {chatToolbar}
              {chatInput}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="border-none stroke-0 outline-0"
        />
        <ResizablePanel defaultSize={80} minSize={40} className="bg-zinc-950">
          <div className="h-full w-full flex items-center justify-center">
            {sandboxIframe}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
