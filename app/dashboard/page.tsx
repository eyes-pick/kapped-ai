// app/dashboard/page.tsx –  **default: Server Component**
import HeaderShell from "@/components/header/header-shell";
import HeaderLeftSlot from "@/components/molecules/header-left-slot-projects";
import HeaderCenterSlot from "@/components/molecules/header-center-slot-projects";
import HeaderRightSlot from "@/components/molecules/header-right-slot-projects";

export default function DashboardPage() {
  return (
    <HeaderShell
      leftSlot={<HeaderLeftSlot />}
      centerSlot={<HeaderCenterSlot />}
      rightSlot={<HeaderRightSlot />}
    />
  );
}
