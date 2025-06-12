import HeaderShell from "@/components/projects-page/header/header-shell";
import HeaderLeftSlotProjects from "@/components/projects-page/header/header-left-slot-projects";
import HeaderCenterSlotProjects from "@/components/projects-page/header/header-center-slot-projects";
import HeaderRightSlotProjects from "@/components/projects-page/header/header-right-slot-projects";
import { getSandboxUrl } from "@/lib/sandbox-url";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Button } from "@components/ui/button";

/**
 * Sandbox UI embedding the Vite application.
 */
export default function SandboxPage() {
  const iframeSrc = getSandboxUrl();
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
          className="bg-zinc-900 border-r border-zinc-800"
        >
          {/* Chat UI goes here */}
          <div className="grid grid-rows-[3fr-1fr-3fr] h-full w-full bg-gray-800">
            <div className="flex justify-center bg-inherit text-white/90 border-none my-1 mx-4 gap-x-2.5">
              <Button
                className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
                Chat
              </Button>
              <Button
                className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
                Code
              </Button>
            </div>
          </div>
          {/* Chat messages and input */}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80} minSize={40} className="bg-zinc-950">
          <div className="h-full w-full flex items-center justify-center">
            <iframe
              title="Sandboxed Vite App"
              src={iframeSrc}
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-full border-0 rounded-lg shadow-xl bg-zinc-950"
              style={{ minHeight: "80vh" }}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
