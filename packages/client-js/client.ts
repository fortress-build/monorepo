import type { Observation } from "./models/fhir/Observation";
import type { Patient } from "./models/fhir/Patient";
import type { Reference } from "./models/fhir/Reference";
import type { Parameters } from "./models/fhir/Parameters";

export type FHIRMetadataRest = {
  mode: string;
  // TODO: Properly type these
  security: unknown;
  resource: unknown[];
};

export type FHIRMetadata = {
  resourceType: "CapabilityStatement";
  status: string;
  experimental: boolean;
  date: string;
  copyright: string;
  instantiates: string[];
  software: {
    name: string;
    version: string;
    releaseDate: string;
  };
  implementation: {
    description: string;
    url: string;
  };
  fhirVersion: string;
  format: string[];
  rest: FHIRMetadataRest[];
};

export type BeginAuthResult =
  | {
      state: "authenticated";
      accessToken: string;
    }
  | { state: "unauthenticated"; authUrl: string };

export type FHIRSession = {
  patient: string;
  token_type: string;
  access_token: string;
  id_token: string;
  expires_in: number;
  scope: string;
  state: string;
};

export type PartialFHIRClientConfig = {
  redirectUrl: string;
  scopes?: string[];

  headers?: Record<string, string>;
};

export type FHIRClientConfig = {
  redirectUrl: string;
  scopes: string[];

  headers: Record<string, string>;
};

export type FHIRProviderInfo = {
  authUrl: string;
  fhirUrl: string;
  clientId: string;
};

export class Nerve {
  config: FHIRClientConfig;
  provider?: FHIRProviderInfo;

  private metadata?: FHIRMetadata;

  private accessToken?: string;
  private tokenExpiration?: number;

  patient: PatientResource;
  observation: ObservationResource;

  constructor(config: PartialFHIRClientConfig) {
    this.config = {
      scopes: ["openid", "fhirUser"],
      headers: {},
      ...config,
    };

    this.patient = new PatientResource(this);
    this.observation = new ObservationResource(this);

    if (globalThis.localStorage !== undefined) {
      const provider = localStorage.getItem("__fhir_oauth_provider");
      if (provider !== null) {
        this.setProvider(JSON.parse(provider));
      }

      const authData = localStorage.getItem("__fhir_access_token");
      if (authData !== null) {
        const { accessToken, tokenExpiration } = JSON.parse(authData);
        this.restoreToken(accessToken, tokenExpiration);
      }
    }
  }

  private async getMetadata(): Promise<FHIRMetadata> {
    if (this.metadata !== undefined) {
      return this.metadata;
    }

    if (this.provider === undefined) {
      throw new Error("Provider information not set");
    }

    const data = await fetch(`${this.provider.fhirUrl}/metadata`, {
      headers: {
        Accept: "application/fhir+json",
        ...this.config.headers,
      },
    });

    if (!data.ok || data.status !== 200) {
      throw new Error(
        `Failed to fetch metadata: ${data.status} - ${data.statusText}`,
      );
    }

    const metadata = await data.json();

    // TODO: Replace with actual schema validation
    if (metadata.resourceType !== "CapabilityStatement") {
      throw new Error(
        `Invalid metadata response: Expected 'resourceType' to be 'CapabilityStatement', found '${metadata.resourceType}'`,
      );
    }

    this.metadata = metadata;

    return metadata;
  }

  restoreToken(accessToken: string, tokenExpiration: number) {
    this.accessToken = accessToken;
    this.tokenExpiration = tokenExpiration;
    this.config.headers.Authorization = `Bearer ${accessToken}`;
  }

  hasProvider(): boolean {
    return this.provider !== undefined;
  }

  setProvider(provider: FHIRProviderInfo) {
    this.provider = provider;

    if (globalThis.localStorage !== undefined) {
      globalThis.localStorage.setItem(
        "__fhir_oauth_provider",
        JSON.stringify(provider),
      );
    }
  }

  async authenticate(): Promise<BeginAuthResult> {
    // TODO: Check auth capabilities from metadata and don't just assume OAuth2
    await this.getMetadata();

    if (this.provider === undefined) {
      throw new Error("Provider information not set");
    }

    const now = Math.floor(Date.now() / 1000);

    if (this.accessToken !== undefined && this.tokenExpiration !== undefined) {
      if (now < this.tokenExpiration) {
        return {
          state: "authenticated",
          accessToken: this.accessToken,
        };
      }

      // TODO: Token expired, refresh
      // throw new Error("unimplemented");
    }

    // No token, start auth flow

    // TODO: Get refresh token, store in localStorage
    const request = new URLSearchParams({
      response_type: "code",
      // state: crypto.randomUUID(),
      aud: this.provider.fhirUrl,
      scope: this.config.scopes.join(" "),
      // scope: "launch/patient patient/*.read openid fhirUser",
      client_id: this.provider.clientId,
      // client_secret: this.config.clientSecret ?? undefined,
      redirect_uri: this.config.redirectUrl,
    });

    return {
      state: "unauthenticated",
      authUrl: `${this.provider.authUrl}/authorize?${request.toString()}`,
    };
  }

  isAuthenticated(): boolean {
    return (
      this.accessToken !== undefined &&
      this.tokenExpiration !== undefined &&
      this.tokenExpiration < Date.now() / 1000
    );
  }

  async authCallback(code: string) {
    if (this.provider === undefined) {
      throw new Error("Provider information not set");
    }

    const request = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: this.config.redirectUrl,
      client_id: this.provider.clientId,
    });

    const response = await fetch(`${this.provider.authUrl}/token`, {
      method: "POST",
      body: request.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to authenticate: ${response.status} - ${response.statusText} (${await response.text()})`,
      );
    }

    const data: FHIRSession = await response.json();

    this.accessToken = data.access_token;
    this.tokenExpiration = Math.floor(Date.now() / 1000) + data.expires_in;

    this.config.headers.Authorization = `Bearer ${this.accessToken}`;

    globalThis.localStorage?.setItem(
      "__fhir_access_token",
      JSON.stringify({
        accessToken: this.accessToken,
        tokenExpiration: this.tokenExpiration,
      }),
    );
  }

  async getToken(): Promise<string> {
    if (
      this.accessToken === undefined ||
      this.tokenExpiration === undefined ||
      this.tokenExpiration < Date.now() / 1000
    ) {
      throw new Error("Not authenticated");
    }

    return this.accessToken;
  }

  async request<T>(path: string, props?: RequestInit): Promise<T> {
    if (this.provider === undefined) {
      throw new Error("Provider information not set");
    }

    const headers = {
      Accept: "application/fhir+json",
      ...this.config.headers,
      ...props?.headers,
    };

    const response = await fetch(`${this.provider.fhirUrl}/${path}`, {
      method: props?.method,
      body: props?.body,
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`,
      );
    }
    return await response.json();
  }

  async resolveReference<T>(
    ref: Reference<T>,
    { bundleEntryFullUrl }: { bundleEntryFullUrl?: string } = {},
  ): Promise<T> {
    if (this.provider === undefined) {
      throw new Error("Provider information not set");
    }

    let reference = ref.reference;

    // Reference can be one of:
    // 1. An absolute URL
    // 2. A relative URL, relative to the FHIR base url
    //   - If processing a bundle, the bundle entry's `fullUrl` (expected in `bundleEntryFullUrl`)
    // 3. An internal fragment reference (TODO: Implement)
    if (reference.startsWith("http")) {
      // Make absolute URLs relative
      const baseUrl = bundleEntryFullUrl ?? this.provider.fhirUrl;
      if (!reference.startsWith(baseUrl)) {
        throw new Error(`Invalid reference: Expected base ${baseUrl}`);
      }
      reference = reference.slice(baseUrl.length);
    }

    return await this.request<T>(reference, {
      method: "GET",
    });
  }
}

async function resolveReferences(obj: Record<string, unknown>, client: Nerve) {
  //loops over all of the items
  for (const [k, v] of Object.entries(obj as object)) {
    if (v == null || typeof v !== "object") {
      continue;
    }

    //check if reference
    if (Object.hasOwn(v, "reference") && Object.hasOwn(v, "type")) {
      const ref = await client.resolveReference(v);
      obj[k] = ref;
    } else {
      resolveReferences(v, client);
    }
  }
  return obj;
  //if something has a Reference type, then call function to resolve the reference
}

class PatientResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<Patient> {
    const res = await resolveReferences(
      await this.client.request(`Patient/${id}`),
      this.client,
    );

    return res as unknown as Patient;
  }

  async create(data: Patient): Promise<void> {
    await this.client.request("Patient", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async match(data: Parameters): Promise<unknown /* Bundle */> {
    return await this.client.request("Patient/$match", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async search(params: {
    address?: string;
    birthdate?: string;
    family?: string;
    gender?: string;
    given?: string;
    identifier?: string;
    name?: string;
    telecom?: string;

    "legal-sex"?: string;

    "own-name"?: string;
    "own-prefix"?: string;

    "partner-name"?: string;
    "partner-prefix"?: string;
  }) {
    return await this.client.request(`Patient?${new URLSearchParams(params)}`, {
      method: "GET",
    });
  }
}
// Binary.Read (Clinical Notes) (R4)
// Binary.Read (Radiology Results) (R4)
// BodyStructure.Read (Organ) (R4)
// CarePlan.Read (Longitudinal) (R4)
// Condition.Read (Health Concern) (R4)
// Condition.Read (Medical History) (R4)
// Condition.Read (Problens) (R4)
// DiagnosticReport.Read (Results) (R4)
// DocumentReference.Read (Clinical Notes) (R4)
// Flag.Read (Infection) (R4)
// Flag.Read (Patient FYI) (R4)
// List.Read (Allergies) (R4)
// List.Read (Family History) (R4)
// List.Read (Immunizations) (R4)
// List.Read (Medications) (R4)
// List.Read (Problems) (R4)
// Observation.Read (Core Characteristics) (R4)
// Observation.Read (Labs) (R4) - may need to use it for some labs/results
// Observation.Read (Vitals) (R4)
// Procedure.Read (Surgical History) (R4) (

//TODO: Fill out all possible categories
export type ObservationCategory = "vital-signs" | "laboratory" | "imaging";

export type ObservationSearchRequest = {
  category?: ObservationCategory;
  patient: string;
  code?: string;
  date?: string;
};

class ObservationResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(
    id: string,
  ): Promise<{ resourceType: "Observation"; resource: Observation }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Observation/${id}`,
      {
        method: "GET",
      },
    );
  }

  async create(data: Observation): Promise<void> {
    await this.client.request("Observation", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async search(params: ObservationSearchRequest) {
    const searchParams = new URLSearchParams(params);

    return await this.client.request(`Observation?${searchParams.toString()}`, {
      method: "GET",
    });
  }
}
