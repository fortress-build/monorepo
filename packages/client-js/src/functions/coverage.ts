import type { Nerve } from "..";
import type { Coverage } from "../models/fhir/Coverage";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from '@/modelMapping';

// Type for the conditional requirement between patient and beneficiary
export type CoverageSearchRequest = {
  // At least one of patient or beneficiary must be provided
  // If both are provided, they must match
} & (
  | { patient: string; beneficiary?: string }
  | { patient?: string; beneficiary: string }
);

export class CoverageResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "Coverage";
    resource: Coverage;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Coverage/${id}`,
      {
        method: "GET",
      },
    );
  }

  async search(params: CoverageSearchRequest): Promise<Coverage[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`Coverage?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as Coverage);
  }
}
