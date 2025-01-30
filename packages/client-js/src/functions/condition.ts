import { camelToKebab } from '../camel2kebab';
import type { Nerve } from '..';
import type { Condition } from '../models/fhir/Condition';
import { search2Array } from '@/modelMapping';

export type ConditionSearchRequest = {
  category?: string;
  clinicalStatus?: string;
  period?: string;
  date?: string;
  code?: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class ConditionResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: 'Condition';
    resource: Condition;
  }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Condition/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: Condition): Promise<void> {
    await this.client.request('Condition', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: ConditionSearchRequest): Promise<Condition[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`Condition?${searchParams.toString()}`, {
      method: 'GET',
    });

    return search2Array(result, {} as Condition);
  }
}
