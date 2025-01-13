import { camelToKebab } from '@/camel2kebab';
import type { Nerve } from '..';
import type { DiagnosticReport } from '../models/fhir/DiagnosticReport';

export type DiagnosticReportSearchRequest = {
  category?: string;
  identifier?: string;
  period?: string;
  date?: string;
  code?: string;
} & (
  | { patient: string; subject?: string }
  | { patient?: string; subject: string }
  | { patient: string; subject: string }
);

export class DiagnosticReportResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: 'DiagnosticReport';
    resource: DiagnosticReport;
  }> {
    if (this.client.provider === undefined) {
      throw new Error('Provider information not set');
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/DiagnosticReport/${id}`,
      {
        method: 'GET',
      }
    );
  }

  async create(data: DiagnosticReport): Promise<void> {
    await this.client.request('DiagnosticReport', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async search(params: DiagnosticReportSearchRequest) {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value])
    );
    const searchParams = new URLSearchParams(kebabParams);

    return await this.client.request(
      `DiagnosticReport?${searchParams.toString()}`,
      {
        method: 'GET',
      }
    );
  }
}
