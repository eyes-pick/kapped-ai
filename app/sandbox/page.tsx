import HeaderShell from "@/components/header/header-shell";
import HeaderLeftSlot from "@/components/molecules/header-left-slot";
import HeaderCenterSlot from "@/components/molecules/header-center-slot";
import HeaderRightSlot from "@/components/molecules/header-right-slot";
import { SidebarProvider, Sidebar } from "@/components/organisms/sidebar";
import { getSandboxUrl } from "@/lib/sandbox-url";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/atoms/resizable";

/**
 * Sandbox UI embedding the Vite application.
 */
export default function SandboxPage() {
  const iframeSrc = getSandboxUrl();
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950">
      <HeaderShell
        leftSlot={<HeaderLeftSlot />}
        centerSlot={<HeaderCenterSlot />}
        rightSlot={<HeaderRightSlot />}
      />
      <SidebarProvider>
        <ResizablePanelGroup direction="horizontal" className="flex-1 min-h-0">
          <ResizablePanel
            defaultSize={20}
            minSize={10}
            maxSize={40}
            className="bg-zinc-900 border-r border-zinc-800"
          >
            <Sidebar>
              {/* Chat UI goes here */}
              <div className="h-full flex flex-col p-4">
                <div className="font-bold text-lg mb-2 text-zinc-100">Chat</div>
                {/* Chat messages and input */}
              </div>
            </Sidebar>
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
      </SidebarProvider>
    </div>
  );
}
