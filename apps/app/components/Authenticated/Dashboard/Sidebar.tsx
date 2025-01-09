"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftToLine,
  Cable,
  Combine,
  CreditCardIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  Settings,
  UsersIcon,
  ChartLine,
  HomeIcon,
} from "lucide-react";
import { createContext } from "react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

export const SidebarOpenContext = createContext(true);

function NavItem({
  href,
  label,
  icon: Icon,
  className,
  children,
  disabled,
  ...props
}: {
  href: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
  icon: JSX.ElementType;
  disabled?: boolean;
}) {
  return (
    <CommandItem
      asChild
      className="rounded-md transition-colors duration-300 bg-none"
      disabled={disabled}
      value={href}
    >
      <Link
        href={href}
        {...props}
        className={cn(
          "flex flex-row justify-between items-center cursor-pointer gap-2",
          className,
          "!bg-none"
        )}
      >
        <>
          <Icon size={28} />
          {label}
        </>
        <CommandShortcut className="flex flex-row gap-0.5">
          {children}
        </CommandShortcut>
      </Link>
    </CommandItem>
  );
}

function SidebarGroup({
  title,
  children,
}: {
  title: string;
  icon: JSX.ElementType;
  children: React.ReactNode;
}) {
  return (
    <CommandGroup
      key={title.toLowerCase()}
      heading={
        <div className="w-full flex flex-row justify-items-start items-center gap-2">
          {title}
        </div>
      }
    >
      {children}
    </CommandGroup>
  );
}

export default function Sidebar() {
  return (
    <div className="px-4 pb-6 pt-3 flex flex-col h-screen border-r w-64">
      <Command className="flex-1">
        <CommandInput
          placeholder="Search dashboard..."
          className="mb-2 [&_svg]:mt-0.5"
        />
        <CommandList className="max-h-none h-full">
          <SidebarGroup title="" icon={Combine}>
            <div className="h-0.5" />
            <NavItem label="Home" href="dashboard/home" icon={HomeIcon} />
          </SidebarGroup>

          <CommandSeparator className="my-2" />

          <SidebarGroup title="Products" icon={Combine}>
            <div className="h-0.5" />
            <NavItem
              label="Projects"
              href="/projects"
              icon={LayoutDashboardIcon}
            />
          </SidebarGroup>

          <CommandSeparator className="my-2" />

          <SidebarGroup title="Platform" icon={Settings}>
            <div className="h-0.5" />
            <div className="h-0.5" />
            <NavItem label="Integrations" href={"/integrations"} icon={Cable} />
            <NavItem
              label="Organization"
              href={"/organization"}
              icon={UsersIcon}
            />
            <NavItem label="API Keys" href={"/api-keys"} icon={KeyRoundIcon} />
            <NavItem label="Billing" href="#" icon={CreditCardIcon} disabled />
            <NavItem label="Metrics" href="/metrics" icon={ChartLine} />
          </SidebarGroup>
        </CommandList>
      </Command>

      <div className="sticky flex justify-center flex-col bottom-4 items-start ml-1">
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-0 hover:bg-muted text-muted-foreground transition-all duration-300"
        >
          <ArrowLeftToLine />
        </Button>
      </div>
    </div>
  );
}
