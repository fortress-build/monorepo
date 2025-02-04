import type { Nerve } from "..";
import type { Consent } from "../models/fhir/Consent";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from '@/modelMapping';

// Code Status consent search parameters
type CodeStatusConsentSearch = {
  status: string;  // Required for Code Status
  category: 'http://snomed.info/sct|1129100014610';  // Required for Code Status
} & (
  // At least one of patient or subject must be provided
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
);

// Document consent search parameters
type DocumentConsentSearch = {
  status?: string;  // Optional for Document
  category?: (
    | '59284-0'  // Consent Document
    | '64292-6'  // Release of information Consent Document
    | '84095-9'  // Do not resuscitate
    | '59284-0'  // Clinical Consent
    | '64293-4'  // Procedure Consent Document
    | '61359-6'  // Anesthesia Consent Document
    | '61358-8'  // Surgical operation Consent Document
    | '52027-0'  // Abortion Consent Document
    | '52029-6'  // Sterilization Consent Document
    | '64300-7'  // Organ donation Consent Document
    | '83930-8'  // Research Consent Document
  );
} & (
  // At least one of patient or subject must be provided
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
);

// Combined type for the search request
export type ConsentSearchRequest = CodeStatusConsentSearch | DocumentConsentSearch;

export class ConsentResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "Consent";
    resource: Consent;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Consent/${id}`,
      {
        method: "GET",
      },
    );
  }

  async search(params: ConsentSearchRequest): Promise<Consent[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`Consent?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as Consent);
  }
}
