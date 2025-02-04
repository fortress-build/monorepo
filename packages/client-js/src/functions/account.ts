import type { Nerve } from "..";
import type { Account } from "../models/fhir/Account";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from '@/modelMapping';

// Search params type will need to be defined based on Epic FHIR documentation
export type AccountSearchRequest = {
  id: string;  // The premium billing account ID
};

export class AccountResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "Account";
    resource: Account;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Account/${id}`,
      {
        method: "GET",
      },
    );
  }

  async search(params: AccountSearchRequest): Promise<Account[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`Account?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as Account);
  }
}
