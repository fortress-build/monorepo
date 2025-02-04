import type { Nerve } from "..";
import type { Contract } from "../models/fhir/Contract";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from '@/modelMapping';

export type ContractSearchRequest = {
  id: string;  // Epic FHIR uses 'id' rather than '_id'
};

export class ContractResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "Contract";
    resource: Contract;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Contract/${id}`,
      {
        method: "GET",
      },
    );
  }

  async search(params: ContractSearchRequest): Promise<Contract[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`Contract?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as Contract);
  }
}
