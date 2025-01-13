"use client";

import { Button } from "@nerve-js/ui/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@nerve-js/ui/components/ui/card";
import { Input } from "@nerve-js/ui/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { EHRProvider } from ".";

import "../../output.css";
import "@nerve-js/ui/dist/output.css";

export default function EHRScreen({
  providers,
  onProviderSelect,
}: {
  providers: EHRProvider[];
  onProviderSelect: (provider: EHRProvider) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Add filtering logic
  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Card className="w-[32rem] mx-auto mt-16 shadow-none border border-gray-200">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>Select Your EHR Provider</CardTitle>
        <Input
          type="search"
          className="h-8 text-sm"
          placeholder="Search providers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </CardHeader>
      <CardContent>
        <div
          className={`max-h-[45rem] grid grid-cols-2 gap-1 ${
            filteredProviders.length > 6 ? "overflow-y-scroll" : "grid-rows-3"
          }`}
        >
          {filteredProviders.map((provider, index) => (
            <Button
              key={`${provider.name}-${index}`}
              variant="outline"
              className="flex items-center justify-between p-6"
              onClick={() => onProviderSelect(provider)}
            >
              <div className="flex items-center gap-4">
                {provider.icon}
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {provider.name}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500" />
            </Button>
          ))}
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
