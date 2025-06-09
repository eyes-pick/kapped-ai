// app/dashboard/page.tsx –  **default: Server Component**
import HeaderShell from "@/components/header/header-shell";
import HeaderLeftSlot from "@/components/molecules/header-left-slot";
import HeaderCenterSlot from "@/components/molecules/header-center-slot";
import HeaderRightSlot from "@/components/molecules/header-right-slot";

export default function DashboardPage() {
  return (
    <HeaderShell
      leftSlot={<HeaderLeftSlot />}
      centerSlot={<HeaderCenterSlot />}
      rightSlot={<HeaderRightSlot />}
    />
  );
}
