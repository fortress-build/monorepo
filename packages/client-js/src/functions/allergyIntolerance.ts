import type { Nerve } from "..";
import type { AllergyIntolerance } from "../models/fhir/AllergyIntolerance";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from '@/modelMapping';

// Search params type will need to be defined based on Epic FHIR docs
export type AllergyIntoleranceSearchRequest = {
  patient: string;  // Reference to a patient resource (required - Is Optional: false)
  clinicalStatus?: 'active';  // Optional - only "active" is accepted as a value
};

export class AllergyIntoleranceResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "AllergyIntolerance";
    resource: AllergyIntolerance;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/AllergyIntolerance/${id}`,
      {
        method: "GET",
      },
    );
  }

  async search(params: AllergyIntoleranceSearchRequest): Promise<AllergyIntolerance[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`AllergyIntolerance?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as AllergyIntolerance);
  }
}
