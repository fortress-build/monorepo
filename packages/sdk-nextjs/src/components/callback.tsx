"use client";

import { useNerveClient, useNerveConfig } from "../client";
import { useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect } from "react";

export function NerveCallback({ children }: { children: React.ReactNode }) {
  const client = useNerveClient();
  const config = useNerveConfig();
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const code = params.get("code");
    if (code !== null && code !== "") {
      client.authCallback(code).then(() => {
        router.replace(config.afterRedirectUrl);
      });
    }
  }, [client, params, router, config]);

  if (params.get("code") === null) {
    return <div>Something went wrong: No authentication code found</div>;
  }

  return <>{children}</>;
}
