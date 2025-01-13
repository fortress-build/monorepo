import type { Nerve } from '..';
import type { Flag } from '../models/fhir/Flag';

export type FlagSearchRequest = {
  category?: string;
  status?: string;
  encounter?: string;
  identifier?: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class FlagResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{ resourceType: 'Flag'; resource: Flag }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Flag/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: Flag): Promise<void> {
    await this.client.request('Flag', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: FlagSearchRequest) {
    const searchParams = new URLSearchParams(params);

    return await this.client.request(`Flag?${searchParams.toString()}`, {
      method: 'GET',
    });
  }
}
