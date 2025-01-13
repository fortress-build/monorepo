import { camelToKebab } from '@/camel2kebab';
import type { Nerve } from '..';
import type { List } from '../models/fhir/List';

export type ListSearchRequest = {
  category?: string;
  code?: string;
  encounter?: string;
  identifier?: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class ListResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{ resourceType: 'List'; resource: List }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/List/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: List): Promise<void> {
    await this.client.request('List', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: ListSearchRequest) {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    const searchParams = new URLSearchParams(kebabParams);

    return await this.client.request(`List?${searchParams.toString()}`, {
      method: 'GET',
    });
  }
}
