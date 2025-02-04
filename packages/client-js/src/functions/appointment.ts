import type { Nerve } from "..";
import type { Appointment } from "../models/fhir/Appointment";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from '@/modelMapping';

// Base type for common fields
type BaseAppointmentSearch = {
  patient: string;  // Required in both
}

// Regular appointments search parameters
type AppointmentSearchParams = BaseAppointmentSearch & {
  date?: string;
  identifier?: string;
  serviceCategory?: 'appointment';
  status?: string;
}

// Scheduled surgeries search parameters
type ScheduledSurgerySearchParams = BaseAppointmentSearch & {
  serviceCategory?: 'surgery';
}

// Combined type for the search request
export type AppointmentSearchRequest = AppointmentSearchParams | ScheduledSurgerySearchParams;

export class AppointmentResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<{
    resourceType: "Appointment";
    resource: Appointment;
  }> {
    if (this.client.provider === undefined) {
      throw new Error("Provider information not set");
    }

    return await this.client.request(
      `${this.client.provider.fhirUrl}/Appointment/${id}`,
      {
        method: "GET",
      },
    );
  }

  async create(data: Appointment): Promise<void> {
    await this.client.request("Appointment", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async search(params: AppointmentSearchRequest): Promise<Appointment[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );

    const searchParams = new URLSearchParams(kebabParams);

    const result = await this.client.request(`Appointment?${searchParams.toString()}`, {
      method: "GET",
    });

    return search2Array(result, {} as Appointment);
  }
}
