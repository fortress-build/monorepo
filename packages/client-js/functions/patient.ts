import type { Patient } from '../models/fhir/Patient';
import type { Nerve } from '..';


export class PatientResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<Patient> {
    const res = await this.client.resolveReferences(
      await this.client.request(`Patient/${id}`),
      this.client
    );

    return res as unknown as Patient;
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

    'legal-sex'?: string;

    'own-name'?: string;
    'own-prefix'?: string;

    'partner-name'?: string;
    'partner-prefix'?: string;
  }) {
    return await this.client.request(`Patient?${new URLSearchParams(params)}`, {
      method: 'GET',
    });
  }
}