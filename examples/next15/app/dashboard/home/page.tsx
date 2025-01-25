"use client";

import OnboardingSteps from "@/components/Dashboard/Home/OnboardingSteps";
import { Quickstart } from "@/components/Dashboard/Home/Quickstart";

export default function Home() {
  return (
    <>
      <OnboardingSteps activeStep={1} completed={[0]} />
      <Quickstart />
    </>
  );
}
