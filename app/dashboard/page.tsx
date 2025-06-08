// app/dashboard/page.tsx –  **default: Server Component**
import HeaderShell from "@/components/header/header-shell";
import HeaderLeftSlot from "@/components/header/header-left-slot";
import HeaderCenterSlot from "@/components/header/header-center-slot";
import HeaderRightSlot from "@/components/header/header-right-slot";

export default function DashboardPage() {
  return (
    <HeaderShell
      leftSlot={<HeaderLeftSlot />}
      centerSlot={<HeaderCenterSlot />}
      rightSlot={<HeaderRightSlot />}
    />
  );
}
