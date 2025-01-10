'use client';

import { useNerveClient } from '@/client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Input } from '@repo/design-system/components/ui/input';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import type { EHRProvider } from '../nerve-integration';

function ProviderButton({
  provider,
  isLast,
  select,
}: {
  provider: EHRProvider;
  isLast?: boolean;
  select: (provider: EHRProvider) => void;
}) {
  return (
    <div>
      <div
        className="py-4 px-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between border rounded-lg"
        onClick={() => select(provider)}
      >
        <div className="flex items-center gap-4">
          {provider.icon}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {provider.name}
          </span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-gray-500" />
      </div>
      {/*isLast ? null : <div className="border-b border-gray-200 my-0" />*/}
    </div>
  );
}

export default function EHRScreen({ providers }: { providers: EHRProvider[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<EHRProvider | null>(
    null
  );

  const client = useNerveClient();

  // Add filtering logic
  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="w-[500px] shadow-none border">
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
          className={`max-h-[180px] grid grid-cols-2 gap-1 ${
            filteredProviders.length > 6 ? 'overflow-y-scroll' : 'grid-rows-3'
          }`}
        >
          {filteredProviders.map((provider, index) => (
            <ProviderButton
              key={`${provider.name}-${index}`}
              provider={provider}
              isLast={index === filteredProviders.length - 1}
              select={(provider) => {
                setSelectedProvider(provider);
                client.setProvider(provider);
              }}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <span className="flex items-center text-xs text-gray-500 gap-2">
          Powered by Nerve
          <Image src="/logo.svg" alt="Nerve Logo" width={16} height={16} />
        </span>
      </CardFooter>
    </Card>
  );
}
