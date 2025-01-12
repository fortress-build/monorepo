import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SidebarOpenContext } from "./Sidebar";
import Link from "next/link";

type ItemList = Record<string, WeakRef<React.RefObject<HTMLLIElement>>>;

const items = new Proxy<ItemList>(new Object() as ItemList, {
  get: (target: ItemList, name: keyof ItemList) => {
    if (target[name] === null || target[name] === undefined) {
      target[name] = new WeakRef(React.createRef());
    }
    return target[name];
  },
});

export function getItemRef(
  name: string,
): React.RefObject<HTMLLIElement> | undefined {
  return items[name].deref();
}

export function SidebarItem({
  icon,
  title,
  active,
  href,
  ...props
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}>) {
  const value = title.toLowerCase();
  const variant = active ? "default" : "ghost";
  const ref = getItemRef(value);
  const sidebarOpen = useContext(SidebarOpenContext);
  const size = sidebarOpen ? "default" : "icon";

  const classNames = cn(
    "transition-all",
    "text-md font-medium h-10 px-2",
    sidebarOpen ? "w-full justify-start" : "w-10 justify-center",
    active
      ? "hover:bg-accent-hover"
      : "bg-transperent text-accent-foreground hover:bg-muted ",
  );

  const ButtonContent = () => (
    <div className="flex flex-row gap-x-1">
      {icon}

      {sidebarOpen ? <div className="pr-1.5">{title}</div> : null}
    </div>
  );

  const buttonValue = href ? (
    <Link
      className={cn(
        classNames,
        buttonVariants({
          variant: variant,
          size: size,
        }),
      )}
      href={href}
      {...props}
    >
      <ButtonContent />
    </Link>
  ) : (
    <Button variant={variant} size={size} className={classNames} {...props}>
      <ButtonContent />
    </Button>
  );

  return (
    <NavigationMenuItem
      ref={ref}
      value={value}
      className={sidebarOpen ? "w-full justify-start" : "w-10 justify-center"}
    >
      {buttonValue}
    </NavigationMenuItem>
  );
}

export default SidebarItem;