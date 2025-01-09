"use client";

import { useNerveClient, useNerveConfig } from "@/client";
import { useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect } from "react";

export default function CallbackPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useNerveClient();
  const config = useNerveConfig();
  const router = useRouter();
  const code = useSearchParams().get("code");

  useEffect(() => {
    if (code !== null) {
      client.authCallback(code).then(() => {
        router.replace(config.afterRedirectUrl);
      });
    }
  }, [client, code, router, config]);

  if (code === null) {
    return <div>Something went wrong: No authentication code found</div>;
  }

  return <>{children}</>;
}
