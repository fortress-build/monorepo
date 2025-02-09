"use client";

import { useRouter } from "next/navigation";
import { useNerveClient, useNerveConfig } from "../client";
import { useEffect, useState } from "react";
import type React from "react";

export function Authenticated({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const client = useNerveClient();
  const config = useNerveConfig();
  const router = useRouter();

  const [content, setContent] = useState<React.ReactNode | null>(fallback);

  useEffect(() => {
    if (client.isAuthenticated()) {
      setContent(children);
    } else {
      router.replace(config.signInUrl);
      // window.location.href = config.signInUrl;
    }
  }, [client,  config, children]);

  return content;
}
