'use client';

import { ScrollArea } from '@nerve-js/design-system/components/ui/scroll-area';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@nerve-js/design-system/components/ui/tabs';
import { Highlight, themes } from 'prism-react-renderer';

// Define content type and data structure
type LanguageName = 'npm' | 'pnpm' | 'bun';

type PackageExample = {
  name: string;
  command: string;
};

const packageContent: Record<LanguageName, PackageExample> = {
  npm: {
    name: 'npm',
    command: 'npm install package-name',
  },
  pnpm: {
    name: 'pnpm',
    command: 'pnpm add package-name',
  },
  bun: {
    name: 'bun',
    command: 'bun add package-name',
  },
};

// Update component definition
export const CodeBlock: React.FC = () => {
  return (
    <div className="w-[600px] overflow-hidden rounded-lg border border-foreground bg-foreground">
      <Tabs defaultValue="npm" className="w-full">
        <div className="flex h-12 w-full items-center justify-between px-3">
          <TabsList className="h-6 bg-foreground">
            {Object.entries(packageContent).map(([key, { name }]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="text-foreground-muted data-[state=active]:border-white data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="h-3 w-3 rounded-full bg-red-500" />
          </div>
        </div>
        {Object.entries(packageContent).map(([key, { name, command }]) => (
          <TabsContent key={key} value={key}>
            <ScrollArea className="h-[200px] min-h-[200px] px-4 font-mono text-sm">
              <Highlight theme={themes.nightOwl} code={command} language="bash">
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre className="relative text-left">
                    {tokens.map((line, lineNumber) => (
                      <div
                        key={`line-${lineNumber}`}
                        {...getLineProps({ line })}
                        className="relative hover:bg-muted/10"
                      >
                        {line.map((token, tokenNumber) => (
                          <span
                            key={`token-${lineNumber}-${tokenNumber}`}
                            {...getTokenProps({ token })}
                          />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CodeBlock;
