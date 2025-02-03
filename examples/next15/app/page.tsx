'use client';

import { NerveSandbox } from '@nerve-js/client';
import { Authenticated } from '@nerve-js/next';

NerveSandbox;

export default function Home() {
  return (
    <Authenticated>
      <div className="min-h-svh flex flex-row justify-center items-center">
        {'You are authenticated'}
      </div>
    </Authenticated>
  );
}
