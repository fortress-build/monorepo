"use client";

import type React from "react";
import { NerveProvider } from "@nerve-js/next";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NerveProvider
        redirectUrl="http://localhost:3010/callback/"
        signInUrl="http://localhost:3010/signin/"
        afterRedirectUrl="http://localhost:3010/"
      >
        {children}
      </NerveProvider>
    </>
  );
}
