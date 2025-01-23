'use client';

import { CodeBlock } from '@/components/CodeBlock';
import {} from '@repo/ui/components/ui/carousel';
import {} from 'react';

import {} from 'lucide-react';

export const Installation = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-left font-regular text-xl tracking-tighter md:text-5xl lg:max-w-xl">
              Simple to install and use
            </h2>
            <p className="text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-sm">
              Get started in minutes.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <CodeBlock/>
        </div>
      </div>
    </div>
  </div>
);
