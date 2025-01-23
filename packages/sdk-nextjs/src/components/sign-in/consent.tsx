"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import type { EHRProvider, PermissionList } from "../../components/sign-in";

export default function ConsentScreen({
  onAccept,
  provider,
  onBack,
  healthInfo,
}: {
  onAccept: () => void;
  provider: EHRProvider;
  onBack: () => void;
  healthInfo: PermissionList;
}) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <Card className="w-[500px] mx-auto mt-16 shadow-none border border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-gray-500"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {provider.icon}
              <CardTitle>Connect to {provider.name}</CardTitle>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-600">
            We are requesting the following permissions from {provider.name}:
          </p>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Read Access</h3>
            <ul className="space-y-2 text-gray-600">
              {healthInfo.read?.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 p-3 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                  onKeyUp={() => null}
                  onClick={() =>
                    setSelectedItem(
                      selectedItem === item.title ? null : item.title,
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform ${
                        selectedItem === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {selectedItem === item.title && (
                    <div className="text-sm text-gray-600 mt-2">
                      <p className="text-xs text-gray-500 mb-2">
                        <span className="font-medium">FHIR Resources:</span>
                      </p>
                      <div className="space-y-2">
                        {item.fhirResources.map((resource) => (
                          <div
                            key={resource.name}
                            className="p-2 bg-white border rounded-md shadow-sm"
                          >
                            <div className="text-sm font-medium text-gray-700">
                              {resource.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {resource.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="font-medium text-gray-900 pt-4">Write Access</h3>
            <ul className="space-y-2 text-gray-600">
              {healthInfo.write?.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 p-3 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                  onKeyUp={() => null}
                  onClick={() =>
                    setSelectedItem(
                      selectedItem === item.title ? null : item.title,
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform ${
                        selectedItem === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {selectedItem === item.title && (
                    <div className="text-sm text-gray-600 mt-2">
                      <p className="text-xs text-gray-500 mb-2">
                        <span className="font-medium">FHIR Resources:</span>
                      </p>
                      <div className="space-y-2">
                        {item.fhirResources.map((resource) => (
                          <div
                            key={resource.name}
                            className="p-2 bg-white border rounded-md shadow-sm"
                          >
                            <div className="text-sm font-medium text-gray-700">
                              {resource.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {resource.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-sm text-gray-500 mt-4">
            <p>
              Your data will be handled securely and in accordance with HIPAA
              guidelines.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://docs.example.com/data-handling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                Learn how we handle your data
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/fortress-build/fhirball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                View our open source code
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
          <Button className="w-full mt-4" onClick={onAccept}>
            I Understand and Accept
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <span className="flex items-center text-xs text-gray-500 gap-2">
          Powered by Nerve
          <Image
            src="https://d31yg8dlyykylt.cloudfront.net/logo.svg"
            alt="Nerve Logo"
            width={16}
            height={16}
          />
        </span>
      </CardFooter>
    </Card>
  );
}
