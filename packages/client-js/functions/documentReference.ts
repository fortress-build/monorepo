import { camelToKebab } from '@/camel2kebab';
import type { Nerve } from '..';
import type { DocumentReference } from '../models/fhir/DocumentReference';

export type DocumentReferenceSearchRequest = {
  category?: string;
  status?: string;
  encounter?: string;
  identifier?: string;
  period?: string;
  date?: string;
  type?: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class DocumentReferenceResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: 'DocumentReference';
    resource: DocumentReference;
  }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/DocumentReference/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: DocumentReference): Promise<void> {
    await this.client.request('DocumentReference', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: DocumentReferenceSearchRequest) {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    const searchParams = new URLSearchParams(kebabParams);

    return await this.client.request(
      `DocumentReference?${searchParams.toString()}`,
      {
        method: 'GET',
      }
    );
  }
}
