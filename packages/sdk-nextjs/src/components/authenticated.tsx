'use client';

import { useRouter } from 'next/compat/router';

import { useEffect, useState } from 'react';
import type React from 'react';
import { useNerveClient, useNerveConfig } from '../client';

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

  console.log('router', router)
  console.log('useRouter', useRouter)
  useEffect(() => {

    if (router && !router.isReady) {
      return;
    }
    
    if (client.isAuthenticated()) {
      setContent(children);
    } else {
      if (!router) {
        return;
      }

      router.replace(config.signInUrl);
      return;
    }
  }, [client, router, config, children]);

  return content;
}
