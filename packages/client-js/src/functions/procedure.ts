import { camelToKebab } from '../camel2kebab';
import type { Nerve } from '..';
import type { Procedure } from '../models/fhir/Procedure';
import { search2Array } from '@/modelMapping';

export type ProcedureSearchCategory = {
  category?: string;
  code?: string;
  date?: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class ProcedureResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  
  async read(
    id: string
  ): Promise<{ resourceType: 'Procedure'; resource: Procedure }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Procedure/${id}`,
      {
        method: 'GET',
      }
    );
  }

  //   async create(data: Procedure): Promise<void> {
  //     await this.client.request('Procedure', {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //     });
  //   }

  async search(params: ProcedureSearchCategory): Promise<Procedure[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    const searchParams = new URLSearchParams(kebabParams);

    const result= await this.client.request(`Procedure?${searchParams.toString()}`, {
      method: 'GET',
    });

    return search2Array(result, {} as Procedure)
  }
}
