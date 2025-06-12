import HeaderShell from "@/components/projects-page/header/header-shell";
import HeaderLeftSlotProjects from "@/components/projects-page/header/header-left-slot-projects";
import HeaderCenterSlotProjects from "@/components/projects-page/header/header-center-slot-projects";
import HeaderRightSlotProjects from "@/components/projects-page/header/header-right-slot-projects";
import { getSandboxUrl } from "@/lib/sandbox-url";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Button } from "@components/ui/button";
import { Card, CardHeader, CardContent, CardAction, CardDescription, } from "@components/ui/card"
import { Avatar, AvatarFallback } from "@components/ui/avatar"
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
          className="bg-zinc-900 border-0 border-zinc-800"
        >
          {/* Chat UI goes here */}
          <div className="grid grid-rows-[1fr-6fr-3fr] h-full w-full bg-gray-800">
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
            <div className="h-full w-full grid grid-cols[repeat(1fr)] bg-gray-800 scroll-auto rounded-none text-black text-lg">
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
            <div className="h-full w-full grid grid-cols-[60px-1fr-60px] bg-gray-500">

            </div>
          </div>
          {/* Chat messages and input */}
        </ResizablePanel>
        <ResizableHandle withHandle className="border-none stroke-0 outline-0" />
        <ResizablePanel defaultSize={80} minSize={40} className="bg-zinc-950">
          <div className="h-full w-full flex items-center justify-center">
            <iframe
              title="Sandboxed Vite App"
              src={iframeSrc}
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-full border-0 rounded-t-none rounded-b-lg shadow-xl bg-zinc-950"
              style={{ minHeight: "80vh" }}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
