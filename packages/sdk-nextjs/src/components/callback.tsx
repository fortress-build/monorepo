"use client";

import { useRouter} from "next/compat/router";
import { useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect } from "react";
import { useNerveClient, useNerveConfig } from "../client";

export function NerveCallback({ children }: { children: React.ReactNode }) {
  const client = useNerveClient();
  const config = useNerveConfig();
  const router = useRouter();
  const params = useSearchParams();


  useEffect(() => {
    if (router && !router.isReady) {
      return;
    }

    const code = params.get('code');
    if (code !== null && code !== '') {
      client.authCallback(code).then(() => {
        if (!router) {
          console.log(router);
          return;
        }
        router.replace(config.afterRedirectUrl);
      });
    }
  }, [client, params, router, config]);

  if (params.get("code") === null) {
    return <div>Something went wrong: No authentication code found</div>;
  }

  return <>{children}</>;
}
