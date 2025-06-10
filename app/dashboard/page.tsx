// app/dashboard/page.tsx –  **default: Server Component**
import HeaderShell from "@/components/header/header-shell";
import HeaderLeftSlot from "@/components/header/header-left-slot-projects";
import HeaderCenterSlot from "@/components/header/header-center-slot-projects";
import HeaderRightSlot from "@/components/header/header-right-slot-projects";

export default function DashboardPage() {
  return (
    <HeaderShell
      leftSlot={<HeaderLeftSlot />}
      centerSlot={<HeaderCenterSlot />}
      rightSlot={<HeaderRightSlot />}
    />
  );
}
