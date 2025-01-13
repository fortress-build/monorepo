import { camelToKebab } from '@/camel2kebab';
import type { Nerve } from '..';
import type { Parameters } from '../models/fhir/Parameters';
import type { Patient } from '../models/fhir/Patient';

type BaseSearchParams = {
  address?: string;
  legalSex?: string;
  ownName?: string;
  ownPrefix?: string;
  partnerName?: string;
  partnerPrefix?: string;
};

type IdentifierSearch = BaseSearchParams & {
  identifier: string;
};

type PersonalInfoSearch = BaseSearchParams & {
  given: string;
  family: string;
  birthdate: string;
};

type AlternativeSearch = BaseSearchParams & {
  name: string;
  gender: string;
  telecom: string;
};

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

  async search(
    params: IdentifierSearch | PersonalInfoSearch | AlternativeSearch
  ): Promise<unknown> {
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
