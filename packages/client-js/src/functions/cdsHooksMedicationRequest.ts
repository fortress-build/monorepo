import type { Nerve } from "..";
import type { MedicationRequest } from "../models/fhir/MedicationRequest";

export class CdsHooksMedicationRequestResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "MedicationRequest";
    resource: MedicationRequest;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/MedicationRequest/${id}`,
      {
        method: "GET",
      },
    );
  }

  async create(data: MedicationRequest): Promise<void> {
    await this.client.request("MedicationRequest", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async delete(data: MedicationRequest): Promise<void> {
    await this.client.request("MedicationRequest", {
      method: "DELETE",
      body: JSON.stringify(data),
    });
  }
}
