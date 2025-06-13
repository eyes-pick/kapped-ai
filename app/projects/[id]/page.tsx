import ProjectsLayoutShell from "@/components/projects-page/layout/ProjectsLayoutShell";
import HeaderLeftSlotProjects from "@/components/projects-page/header/header-left-slot-projects";
import HeaderCenterSlotProjects from "@/components/projects-page/header/header-center-slot-projects";
import HeaderRightSlotProjects from "@/components/projects-page/header/header-right-slot-projects";
import ChatHeader from "@/components/projects-page/chat/ChatHeader";
import ChatStream from "@/components/projects-page/chat/ChatStream";
import ChatToolbar from "@/components/projects-page/chat/ChatToolbar";
import ChatInput from "@/components/projects-page/chat/ChatInput";
import SandboxIframe from "@/components/projects-page/iframe/SandboxIframe";
import { kvGet } from "@/lib/cloudflare-storage";

interface PageProps {
  params: { id: string };
}

export default async function SandboxPage({ params }: PageProps) {
  const userId = "demo-user";
  let buildKey: string | null = null;
  try {
    buildKey = await kvGet(`project:${userId}:${params.id}`);
  } catch {
    buildKey = null;
  }

  return (
    <ProjectsLayoutShell
      headerLeftSlot={<HeaderLeftSlotProjects />}
      headerCenterSlot={<HeaderCenterSlotProjects />}
      headerRightSlot={<HeaderRightSlotProjects />}
      chatHeader={<ChatHeader />}
      chatStream={<ChatStream />}
      chatToolbar={<ChatToolbar />}
      chatInput={<ChatInput />}
      sandboxIframe={<SandboxIframe src={buildKey ?? undefined} />}
    />
  );
}
