import LogoSvg from "../SVGs/LogoSvg";

import { cn } from "@repo/ui/lib/utils";

type LogoSize = {
  icon: string;
  font: string;
  gap: string;
};

const sizes: Record<string, LogoSize> = {
  xs: {
    icon: "w-4 h-auto",
    font: "text-xl",
    gap: "gap-x-2",
  },
  sm: {
    icon: "w-5 h-auto",
    font: "text-2xl",
    gap: "gap-x-2",
  },
  md: {
    icon: "w-6 h-auto",
    font: "text-3xl",
    gap: "gap-x-3",
  },
  lg: {
    icon: "w-7 h-auto",
    font: "text-3xl",
    gap: "gap-x-4",
  },
  xlg: {
    icon: "w-8 h-auto",
    font: "text-7xl",
    gap: "gap-x-4",
  },
};

export default function Logo({
  size = "md",
  className,
  hideName = false,
  dark = false,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xlg";
  className?: string;
  hideName?: boolean;
  dark?: boolean;
}) {
  const sizeVariant = sizes[size];

  return (
    <div
      className={cn(
        "flex flex-row",
        "w-full items-center",
        hideName ? "justify-center" : "justify-start",
        sizeVariant.gap,
        className,
      )}
    >
      <LogoSvg
        className={cn(
          sizeVariant.icon,
          dark ? "fill-background" : "fill-foreground",
        )}
      />

      {!hideName && (
        <h1
          className={cn(
            "pr-2 font-bold",
            sizeVariant.font,
            dark ? "text-background" : "text-foreground",
          )}
        >
          Fortress
        </h1>
      )}
    </div>
  );
}
