"use client";

import OnboardingSteps from "@/components/Home/OnboardingSteps";
import { Quickstart } from "@/components/Home/Quickstart";

export default function Home() {
  return (
    <>
      <OnboardingSteps activeStep={1} completed={[0]} />
      <Quickstart />
    </>
  );
}
