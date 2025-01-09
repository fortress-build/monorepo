import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/design-system/components/ui/tabs";
import { Cases } from "./components/cases";
import { CTA } from "./components/cta";
import { FAQ } from "./components/faq";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimonials";

const meta = {
  title: "",
  description: "",
};

export const metadata: Metadata = createMetadata(meta);

async function Home() {
  return (
    <>
      <Hero />
      <Cases />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;
