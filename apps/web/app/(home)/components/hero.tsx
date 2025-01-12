import YCLogo from "@/components/Branding/PartnerLogos/YCombinator";
import { env } from "@/env";
import { blog } from "@repo/cms";
import { Feed } from "@repo/cms/components/feed";
import { Button } from "@repo/design-system/components/ui/button";
import { BookOpen, MoveRight } from "lucide-react";
import { draftMode } from "next/headers";
import Link from "next/link";
import InteractiveComponent from "@/components/Hero/InteractiveComponent";

function BackedByYC() {
  return (
    <div className="flex flex-row px-3">
      <div className="mr-2 gap-2 self-center pt-1 text-gray-500 text-xs">
        {"Backed by"}
      </div>
      <YCLogo />
    </div>
  );
}

export const Hero = async () => {
  const draft = await draftMode();

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-20 lg:py-40">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div>
              <Feed queries={[blog.latestPostQuery]} draft={draft.isEnabled}>
                {/* biome-ignore lint/suspicious/useAwait: "Server Actions must be async" */}
                {async ([data]) => {
                  "use server";
                  return <BackedByYC />;
                }}
              </Feed>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-regular text-5xl tracking-tighter md:text-7xl">
                Healthcare Integrations for{" "}
                <span className="inline-block bg-gradient-to-r from-[#7aaeed] to-[#4a82c6] bg-clip-text text-transparent">
                  developers
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
                A single API to integrate with every EHR, made simple for you
                and your customers.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4" variant="outline" asChild>
                <Link href="/contact">
                  Read Docs <BookOpen className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" className="gap-4" asChild>
                <Link href={env.NEXT_PUBLIC_APP_URL}>
                  Get Started <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <InteractiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
