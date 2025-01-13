import { camelToKebab } from '@/camel2kebab';
import type { Nerve } from '..';
import type { Observation } from '../models/fhir/Observation';

export type ObservationSearchRequest = {
  category?: string;
  patient: string;
  code?: string;
  date?: string;
};

export class ObservationResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(
    id: string
  ): Promise<{ resourceType: 'Observation'; resource: Observation }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Observation/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: Observation): Promise<void> {
    await this.client.request('Observation', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: ObservationSearchRequest) {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    const searchParams = new URLSearchParams(kebabParams);

    return await this.client.request(`Observation?${searchParams.toString()}`, {
      method: 'GET',
    });
  }
}
