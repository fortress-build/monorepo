import type { Nerve } from "..";
import type { Binary } from "../models/fhir/Binary";
import { camelToKebab } from "../camel2kebab";

export type BinarySearchRequest = {
  id: string;
};

export class BinaryResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "Binary";
    resource: Binary;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Binary/${id}`,
      {
        method: "GET",
      },
    );
  }

  async create(data: Binary): Promise<void> {
    await this.client.request("Binary", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async search(params: BinarySearchRequest) {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    return await this.client.request(`Binary?${searchParams.toString()}`, {
      method: "GET",
    });
  }
}
