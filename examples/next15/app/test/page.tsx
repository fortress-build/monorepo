'use client';
import { type Nerve, useNerveClient } from '@nerve-js/next';
import { useState } from 'react';

export default function Home() {
  const nerve = useNerveClient();

  //athenahealthClientID: eyJhbGciOiJSUzI1NiJ9.eyJjbGllbnRfdXJpIjoiaHR0cHM6XC9cL3d3dy5mb3J0cmVzcy5idWlsZCIsImdyYW50X3R5cGVzIjpbImF1dGhvcml6YXRpb25fY29kZSJdLCJpc3MiOiJodHRwczpcL1wvbXlkYXRhLmdlaGVhbHRoY2FyZS5jb20iLCJyZWRpcmVjdF91cmlzIjpbImh0dHBzOlwvXC9sb2NhbGhvc3Q6MzAwIl0sInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIjoiY2xpZW50X3NlY3JldF9iYXNpYyIsInNvZnR3YXJlX2lkIjoiMC4wLjEiLCJuYXRpdmVfY2xpZW50IjpmYWxzZSwiaHR0cHM6XC9cL215ZGF0YS5nZWhlYWx0aGNhcmUuY29tXC9vYXV0aDIuY2xhaW1zXC9hcHBfaWQiOiIwYTM1MTZlNy04NzhiLTRiZmUtOTk1My1hYmYwNTRmN2Q5ZGIiLCJleHAiOjIwNTQwNzUxOTUsImNsaWVudF9uYW1lIjoibmV3UHJvamVjdCIsImlhdCI6MTczODU0MjM5NSwiY29udGFjdHMiOlsiYWRtaW5AbmVydmUucnVuIl0sInJlc3BvbnNlX3R5cGVzIjpbImNvZGUiXX0.TOV3dzipHnRCgFyGqOBc0DRDIlAkWdgHrtYqm_uLCJyMzllkcyyOqVPE-VGi_TtuRDFTQf8MgenmqtuQiBWrTDvnCSne7i5qdIGYyLlH62Ho8gYUZ3hv1Qmd2IR4sQ-B0ozXxLAJBjwmbLJZoT-bC4J6JcjOrceZ_Vf6oxWMZKU
  //athenaHealthClientSecret: eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbXlkYXRhLmdlaGVhbHRoY2FyZS5jb20iLCJleHAiOjIwNTQwNzUxOTUsImlhdCI6MTczODU0MjM5NSwiaHR0cHM6XC9cL215ZGF0YS5nZWhlYWx0aGNhcmUuY29tXC9vYXV0aDIuY2xhaW1zXC9hcHBfaWQiOiIwYTM1MTZlNy04NzhiLTRiZmUtOTk1My1hYmYwNTRmN2Q5ZGIifQ.C0bbdwRUmyZGYr0HIfBGV-Gddevm0iGhzWJuxEHSxXeHVDcu2-_aj83UoVm9_kHrvdMkzR7gw8arlbOzJET-MCjY3uA_nHCdtLKSJuE_PbYfpJxB6Wr6EYMW1lp3u5WS37GVf0TjD1ruIcjjp_tIDUkPDK9pLz_S7u9DK3FrXac
  nerve.setProvider('sandbox');

  return (
    <div className="min-h-screen p-8">
      <HomeContent nerve={nerve} />
    </div>
  );
}

function HomeContent({ nerve }: { nerve: Nerve }) {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    console.log('Starting search...');
    setIsLoading(true);
    try {
      const patients = await nerve.patient.search({
        given: 'John',
        family: 'Doe',
        birthdate: '',
      });

      const data = await nerve.observation.search({
        patient: patients[0].id || '',
        category: 'vital-signs',
        // status: 'final',
        // encounter: 'Encounter/es09oReoYsZk20hcbnd7r4A3',
        // performer: 'Practitioner/exfo6E4EXjWsnhA1OGVElgw3',
      });

      console.log('finished search');

      setSearchResults(data);
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
