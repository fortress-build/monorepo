import { camelToKebab } from "../camel2kebab";
import type { Binary, Nerve } from '..';
import type { BodyStructure } from '../models/fhir/BodyStructure';
import { search2Array } from '@/modelMapping';

export type BodyStructureSearchRequest = {
  id: string;
  morphology: string;
  location: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class BodyStructureResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: 'BodyStructure';
    resource: BodyStructure;
  }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/BodyStructure/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: BodyStructure): Promise<void> {
    await this.client.request('BodyStructure', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: BodyStructureSearchRequest) : Promise<BodyStructure[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(
      `BodyStructure?${searchParams.toString()}`,
      {
        method: 'GET',
      }
    );
    
    return search2Array(result, {} as BodyStructure);
  }
}
