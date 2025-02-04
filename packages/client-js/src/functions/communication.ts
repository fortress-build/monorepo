import type { Nerve } from "..";
import type { Communication } from "../models/fhir/Communication";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from '@/modelMapping';

// Base type for common fields
type BaseCommunicationSearch = {
  basedOn?: string;      // Optional reference to ServiceRequest
  encounter?: string;    // Optional encounter reference
  partOf?: string;      // Optional reference to Task resource
  patient?: string;
  subject?: string;
}

// Community Resource search parameters
type CommunityResourceSearch = BaseCommunicationSearch & {
  patient: string;
}

// CRM search parameters
type CrmSearch = BaseCommunicationSearch & {
  patient: string;
}

// Non-Patient CRM search parameters
type NonPatientCrmSearch = BaseCommunicationSearch & {
  _id: string;  // Only supports _id search parameter
}

// Patient Education search parameters
type PatientEducationSearch = BaseCommunicationSearch & {
  patient: string;
}

// Combined type for all search requests
export type CommunicationSearchRequest = 
  | CommunityResourceSearch
  | CrmSearch
  | NonPatientCrmSearch
  | PatientEducationSearch;

export class CommunicationResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "Communication";
    resource: Communication;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Communication/${id}`,
      {
        method: "GET",
      },
    );
  }

  async create(data: Communication): Promise<void> {
    await this.client.request("Communication", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async search(params: CommunicationSearchRequest): Promise<Communication[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`Communication?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as Communication);
  }
}
