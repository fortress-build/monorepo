import type { Nerve } from "..";
import type { Condition } from "../models/fhir/Condition";

export class CdsHooksConditionResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async create(data: Condition): Promise<void> {
    await this.client.request("Condition", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}
