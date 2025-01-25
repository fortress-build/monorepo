import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, UserPlus, Database, Search } from "lucide-react";

export function Quickstart() {
  const steps = [
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

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold font-semibold mb-4">
        Learn how to start with Nerve
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-6 rounded-md transition-colors border border-gray-200 min-h-[180px]"
            onClick={() => (window.location.href = step.href)}
          >
            <div className="mt-1">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
              <p className="text-sm text-primary font-medium">Get Started →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
