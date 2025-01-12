import { Boxes, Code2, Database, Network } from 'lucide-react';

export const Features = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
              Healthcare standards streamlined.
            </h2>
            <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
              Build faster, smarter, simpler.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
            <Network className="h-8 w-8 stroke-1" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Simplified FHIR Integration
                </h3>
                <p className="max-w-xs text-base text-muted-foreground">
                  Built-in abstractions on top of FHIR that make healthcare data
                  integration intuitive and straightforward.
                </p>
              </div>
              <a
                href="/docs/fhir"
                className="inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <Code2 className="h-8 w-8 stroke-1" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Developer-First Approach
                </h3>
                <p className="max-w-xs text-base text-muted-foreground">
                  Open-source codebase with comprehensive documentation and
                  examples to get you started quickly.
                </p>
              </div>
              <a
                href="/docs"
                className="inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
              >
                View docs
              </a>
            </div>
          </div>
          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <Database className="h-8 w-8 stroke-1" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Extensive EHR Support
                </h3>
                <p className="max-w-xs text-base text-muted-foreground">
                  Connect to a growing list of EHR systems with our standardized
                  integration layer.
                </p>
              </div>
              <a
                href="/integrations"
                className="inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
              >
                View integrations
              </a>
            </div>
          </div>
          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
            <Boxes className="h-8 w-8 stroke-1" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Free Sandbox Access</h3>
                <p className="max-w-xs text-base text-muted-foreground">
                  Start building immediately with our free sandbox environment
                  and sample data.
                </p>
              </div>
              <a
                href="/sandbox"
                className="inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
              >
                Try sandbox
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
