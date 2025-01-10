"use client";

import { Settings, UserPlus, Database, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import type React from "react";

interface QuickstartLink {
  title: string;
  description: string;
  icon: React.JSX.ElementType;
  href: string;
}

const links: QuickstartLink[] = [
  {
    title: "Quickstart",
    description: "Get started quickly with our step-by-step guide",
    icon: Settings,
    href: "/docs/quickstart",
  },
  {
    title: "Postman",
    description: "Test your FHIR API endpoints using our Postman collection",
    icon: Search,
    href: "/docs/postman",
  },
  {
    title: "Sandbox",
    description: "Try out the API in our interactive sandbox environment",
    icon: Database,
    href: "/sandbox",
  },
  {
    title: "Docs",
    description: "Browse our comprehensive documentation and guides",
    icon: UserPlus,
    href: "/docs",
  },
];

export function QuickstartLink({
  title,
  description,
  icon: Icon,
  href,
}: QuickstartLink) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="cursor-pointer hover:bg-gray-50 rounded-md transition-colors border border-gray-200 min-h-[180px]"
      onClick={() => router.replace(href)}
    >
      <div className="text-start h-full flex flex-row gap-3 justify-start space-x-4 p-6">
        <div className="mt-1">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <p className="text-sm text-primary font-medium">Get Started →</p>
        </div>
      </div>
    </button>
  );
}

export function Quickstart() {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Learn how to start with Nerve
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {links.map((link) => (
          <QuickstartLink key={`quickstart-${link.title}`} {...link} />
        ))}
      </div>
    </div>
  );
}
