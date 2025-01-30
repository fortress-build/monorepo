import { camelToKebab } from "../camel2kebab";
import type { Nerve } from "..";
import type { CarePlan } from "../models/fhir/CarePlan";
import { search2Array } from '@/modelMapping';

export type CarePlanSearchRequest = {
  category?: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class CarePlanResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "CarePlan";
    resource: CarePlan;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/CarePlan/${id}`,
      {
        method: "GET",
      },
    );
  }

  async create(data: CarePlan): Promise<void> {
    await this.client.request("CarePlan", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async search(params: CarePlanSearchRequest) : Promise<CarePlan[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );
    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`CarePlan?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as CarePlan )
  }
}
