import type { Nerve } from "..";
import { camelToKebab } from "../camel2kebab";
import { search2Array } from "@/modelMapping";
import type { AdverseEvent } from "../models/fhir/AdverseEvent";

// Search params type definition
export type AdverseEventSearchRequest = {
    seriousness?: 'Serious' | 'Non-Serious';  // optional string with specific values
} & (
  // At least one of these must be provided (conditional requirements)
  | { subject: string; 'research-subject'?: string; study?: string }
  | { subject?: string; 'research-subject': string; study?: string }
  | { subject?: string; 'research-subject'?: string; study: string }
);

export class AdverseEventResource {
    private client: Nerve;
    constructor(client: Nerve) {
        this.client = client;
    }

    // Standard CRUD methods
    async read(id: string): Promise <{
        resourceType: 'AdverseEvent';
        resource: AdverseEvent;
    }> {
        if (this.client.provider === undefined) {
            throw new Error('Provider information not set');
        }   
        return await this.client.request(`${this.client.provider.fhirUrl}/AdverseEvent/${id}`, {
            method: 'GET',
        });
    }

    async search(params: AdverseEventSearchRequest): Promise<AdverseEvent[]> {
        const kebabParams = Object.fromEntries(
            Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
        );
        const searchParams = new URLSearchParams(kebabParams);
        
        const result = await this.client.request(`AdverseEvent?${searchParams.toString()}`, {
            method: 'GET',
        });
        return search2Array(result, {} as AdverseEvent);
    }      
}
