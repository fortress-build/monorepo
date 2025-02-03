'use client';

import { NerveSandbox } from '@nerve-js/client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [results, setResults] = useState(null);

  const fetchData = async () => {
    const client = new NerveSandbox();
    const data = await client.patient.search({
      given: 'John',
      family: 'Doe',
      birthdate: '',
    });
    setResults(data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <button
          type="button"
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fetch Data
        </button>
        {results && <pre>{JSON.stringify(results, null, 2)}</pre>}
      </main>
    </div>
  );
}
