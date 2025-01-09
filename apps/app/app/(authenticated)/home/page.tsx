'use client';

import OnboardingSteps from '@/components/Authenticated/Dashboard/Home/OnboardingSteps';
import { Quickstart } from '@/components/Authenticated/Dashboard/Home/Quickstart';

export default function Home() {
  return (
    <>
      <OnboardingSteps activeStep={1} completed={[0]} />
      <Quickstart />
    </>
  );
}
