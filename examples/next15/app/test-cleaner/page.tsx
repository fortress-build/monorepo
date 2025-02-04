"use client";
import { type Nerve, useNerveClient } from "@nerve-js/next";
import { useState } from "react";

export default function Home() {
  const nerve = useNerveClient();
  //const nerve = useNerveClient();
  nerve.setProvider({
    authUrl: "https://fhir.epic.com/interconnect-fhir-oauth/oauth2",
    fhirUrl: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
    clientId: "0d804090-4ae2-49af-b49d-deb2cf7cd35d",
  });


  return (
    <div className="min-h-screen p-8">
      <HomeContent nerve={nerve} />
    </div>
  );
}

function HomeContent({ nerve }: { nerve: Nerve }) {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    console.log("Starting search...");
    setIsLoading(true);
    try {
      console.log("Searching for observations...");
      const data = await nerve.observation.search(
        "eAB3mDIBBcyUKviyzrxsnAw3",    // patient
        "vital-signs",                  // category
        "final",                        // status
        "Encounter/es09oReoYsZk20hcbnd7r4A3",  // encounter
        "Practitioner/exfo6E4EXjWsnhA1OGVElgw3" // performer
      );
      console.log("Search completed successfully");
      setSearchResults(data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <h1>Welcome</h1>
      <button 
        onClick={handleSearch}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isLoading ? 'Loading...' : 'Search Observations'}
      </button>

      {error && <p className="text-red-500">Error: {error}</p>}
      {searchResults && (
        <div>
          <h2>Search Results:</h2>
          <pre>{JSON.stringify(searchResults, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}