'use client';

import { Authenticated } from '@nerve-js/next';
import { useRouter } from 'next/compat/router';

export default function Home() {
  
  const router = useRouter();
  console.log('Page', router)
  return (
    <Authenticated>
      <div className="min-h-svh flex flex-row justify-center items-center">
        {'You are authenticated'}
      </div>
    </Authenticated>
  );
}
