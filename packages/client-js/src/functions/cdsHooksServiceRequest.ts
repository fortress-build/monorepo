import type { Nerve } from "..";
import type { ServiceRequest } from "../models/fhir/ServiceRequest";

export class CdsHooksServiceRequestResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "ServiceRequest";
    resource: ServiceRequest;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/ServiceRequest/${id}`,
      {
        method: "GET",
      },
    );
  }

  async create(data: ServiceRequest): Promise<void> {
    await this.client.request("ServiceRequest", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async update(data: ServiceRequest): Promise<void> {
    await this.client.request("ServiceRequest", {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete(data: ServiceRequest): Promise<void> {
    await this.client.request("ServiceRequest", {
      method: "DELETE",
      body: JSON.stringify(data),
    });
  }
}
