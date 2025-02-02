'use client';
import { Nerve, useNerveClient } from '@nerve-js/next';
import { useState } from 'react';
import type { Observation } from '../../../../packages/client-js/dist/index.js';

export default function Home() {
  const nerve = useNerveClient();
  nerve.setProvider({
    authUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2',
    fhirUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4',
    clientId: '0d804090-4ae2-49af-b49d-deb2cf7cd35d',
  });

  return (
    <div className="min-h-screen p-8">
      <HomeContent nerve={nerve} />
    </div>
  );
}

function HomeContent({ nerve }: { nerve: any }) {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    console.log('Starting search...');
    setIsLoading(true);
    try {
      const data = (await nerve.observation.search({
        patient: 'eAB3mDIBBcyUKviyzrxsnAw3',
        category: 'vital-signs',
        status: 'final',
        encounter: 'Encounter/es09oReoYsZk20hcbnd7r4A3',
        performer: 'Practitioner/exfo6E4EXjWsnhA1OGVElgw3',
      }))
      setSearchResults(data[0]);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <h1>Welcome</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleClick}>Search</button>
      )}
      {/* {isLoading && <p>Loading...</p>} */}
      {error && <p>Error: {error}</p>}
      {searchResults && (
        <div>
          <h2>Search Results:</h2>
          <pre>{JSON.stringify(searchResults, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
