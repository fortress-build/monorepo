import type { ContactDetail } from "./ContactDetail";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

export declare class CompartmentDefinitionResource {
    code: string; // ResourceType
    param?: string[];
    documentation?: string;
}

export declare class CompartmentDefinition extends DomainResource{
    resourceType: 'CompartmentDefinition';
    url: string;
    version?: string;
    name: string;
    status: 'draft' | 'active' | 'retired' | 'unknown';
    experimental?: boolean;
    date?: string;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    purpose?: string;
    code: 'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device';
    search: boolean;
    resource?: CompartmentDefinitionResource[];
}
