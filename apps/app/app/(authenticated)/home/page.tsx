"use client";

import { Quickstart } from "@/app/(authenticated)/components/quickstart";
import OnboardingSteps from "@/app/(authenticated)/components/onboarding";

export default function Home() {
  return (
    <>
      <OnboardingSteps activeStep={1} completed={[0]} />
      <Quickstart />
    </>
  );
}
