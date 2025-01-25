import { useContext } from "react";
import { SidebarOpenContext } from "./Sidebar";

import Logo from "@/components/Branding/Logo";

export default function DashboardLogo() {
  const sidebarOpen = useContext(SidebarOpenContext);

  return (
    <div className={sidebarOpen ? "pl-2" : ""}>
      <Logo size="md" hideName={!sidebarOpen} dark />
    </div>
  );
}
