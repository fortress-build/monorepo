import { camelToKebab } from '../camel2kebab';
import type { Nerve } from '..';
import type { Observation } from '../models/fhir/Observation';

export class ObservationResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<Observation> {
    if (!this.client.provider) {
      throw new Error('Provider information not set');
    }

    try {
      const response = await this.client.request(
        `${this.client.provider.fhirUrl}/Observation/${id}`,
        { method: 'GET' }
      ) as { resource: Observation };
      return response.resource;
    } catch (error) {
      throw new Error(`Failed to read observation: ${error}`);
    }
  }

  async create(data: Observation): Promise<void> {
    try {
      await this.client.request('Observation', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      throw new Error(`Failed to create observation: ${error}`);
    }
  }

  async search(
    patient: string,
    category?: string,
    status?: string,
    encounter?: string,
    performer?: string,
    code?: string,
    date?: string,
  ): Promise<Observation[]> {
    console.log("Beginning of search")
    if (!this.client.provider) {
      throw new Error('Provider information not set');
    }

    try {
      const params = {
        patient,
        ...(category && { category }),
        ...(status && { status }),
        ...(encounter && { encounter }),
        ...(performer && { performer }),
        ...(code && { code }),
        ...(date && { date }),
      };

      const kebabParams = Object.fromEntries(
        Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
      );
      const searchParams = new URLSearchParams(kebabParams);

      const response = await this.client.request(
        `Observation?${searchParams.toString()}`,
        { method: 'GET' }
      ) as { entry?: Array<{ resource: Observation }> };

      console.log("Response", response);
      return response.entry?.map(entry => entry.resource) || [];
    } catch (error) {
      throw new Error(`Failed to search observations: ${error}`);
    }
  }
}
