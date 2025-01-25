"use client";
import Logo from "./Logo";
import { Separator } from '@/components/ui/separator'
import Link from "next/link";

function ProfileButton() {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <div className="flex flex-col items-end justify-center">
        <p className="text-foreground text-sm">
          User Name {/* Replace with your user data source */}
        </p>
      </div>
      <div className="w-7 h-7 rounded-full bg-gray-200">
        {/* Add your avatar component here */}
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex flex-row justify-between px-3 pb-0.5 pt-1 min-h-10">
        <div className="flex flex-row gap-5 pl-3.5">
        <Logo hideName size="xs" />
        </div>
        <ProfileButton />
      </div>

      <Separator />
    </header>
  );
}
