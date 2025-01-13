import type { Observation } from '../models/fhir/Observation';
import type { Nerve } from '..';


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
    const searchParams = new URLSearchParams(params);

    return await this.client.request(`Observation?${searchParams.toString()}`, {
      method: 'GET',
    });
  }
}
