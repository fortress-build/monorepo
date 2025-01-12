import { Brain, FlaskConical, LineChart, Stethoscope } from 'lucide-react';

export const AppTypes = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
              Powering healthcare apps of every kind.
            </h2>
            <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
              From telehealth to analytics, we've got you covered.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <Stethoscope className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Provider-facing Tools</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Build secure EHR integrations, clinical workflow tools, and
                provider portals with standardized FHIR integration.
              </p>
            </div>
          </div>

          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <FlaskConical className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">
                Clinical Trial Management
              </h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Create trial management systems, participant tracking, and data
                collection tools for research studies.
              </p>
            </div>
          </div>

          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <LineChart className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">
                Health Analytics Software
              </h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Develop powerful analytics platforms, population health
                insights, and predictive modeling applications.
              </p>
            </div>
          </div>

          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <Brain className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Behavioral Health</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Build mental health platforms, therapy management systems, and
                patient engagement solutions.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-lg text-muted-foreground">
          And many more...
        </p>
      </div>
    </div>
  </div>
);
