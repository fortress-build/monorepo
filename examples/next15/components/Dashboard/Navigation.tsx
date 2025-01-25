"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  Home,
  Settings2,
  DollarSign,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SidebarItem, getItemRef } from "./Item";

export default function Navigation({ className }: { className?: string }) {
  const [current, setCurrent] = useState<
    React.RefObject<HTMLElement> | undefined
  >(undefined);

  return (
    <>
      <div>
        <NavigationMenu
          orientation="vertical"
          className={cn(className, "flex flex-col justify-start")}
          onValueChange={(value) => setCurrent(getItemRef(value))}
        >
          <NavigationMenuList
            className={cn(
              "flex-col space-x-0 w-full max-w-none gap-y-3 items-start",
            )}
          >
            <SidebarItem
              // onClick={() => router.push("/dashboard")}
              icon={<Home />}
              title="Dashboard"
              active
            />

            <SidebarItem icon={<Settings2 />} title="Manage Scrapers" />

            <SidebarItem icon={<DollarSign />} title="Billing" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
