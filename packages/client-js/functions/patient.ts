import { camelToKebab } from '@/camel2kebab';
import type { Nerve } from '..';
import type { Patient } from '../models/fhir/Patient';
import type { Parameters } from '../models/fhir/Parameters';

export class PatientResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(
    id: string
  ): Promise<{ resourceType: 'Patient'; resource: Patient }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Patient/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: Patient): Promise<void> {
    await this.client.request('Patient', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async match(data: Parameters): Promise<unknown /* Bundle */> {
    return await this.client.request('Patient/$match', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: {
    address?: string;
    birthdate?: string;
    family?: string;
    gender?: string;
    given?: string;
    identifier?: string;
    name?: string;
    telecom?: string;
    legalSex?: string;
    ownName?: string;
    ownPrefix?: string;
    partnerName?: string;
    partnerPrefix?: string;
  }) {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    return await this.client.request(
      `Patient?${new URLSearchParams(kebabParams)}`,
      {
        method: 'GET',
      }
    );
  }
}
