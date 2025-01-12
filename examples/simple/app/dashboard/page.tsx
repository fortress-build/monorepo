"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import OnboardingSteps from "@/components/Dashboard/Home/OnboardingSteps";
import { Quickstart } from "@/components/Dashboard/Home/Quickstart";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/home");
  }, [router]);

  return (
    <>
      <OnboardingSteps activeStep={1} completed={[0]} />
      <Quickstart />
    </>
  );
}
