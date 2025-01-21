import type { CodeableConcept } from './CodeableConcept';
import type { ContactDetail } from './ContactDetail';
import type { DomainResource } from './Resource';
import type { ResourceType } from './ResourceType';
import type { UsageContext } from './UsageContext';

export declare class GraphDefinitionLinkTargetCompartment {
    use: 'condition' | 'requirement';
    code: 'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device';
    rule: 'identical' | 'matching' | 'different' | 'custom';
    expression?: string;
    description?: string;
}

export declare class GraphDefinitionLinkTarget {
    type: ResourceType;
    params?: string;
    profile?: string;
    compartment?: GraphDefinitionLinkTargetCompartment[];
    link?: GraphDefinitionLink[];
}

export declare class GraphDefinitionLink {
    path?: string;
    sliceName?: string;
    min?: number;
    max?: string;
    description?: string;
    target?: GraphDefinitionLinkTarget[];
}

export declare class GraphDefinition extends DomainResource{
    resourceType: 'GraphDefinition';
    url?: string;
    version?: string;
    name: string;
    status: 'draft' | 'active' | 'retired' | 'unknown';
    experimental?: boolean;
    date?: string;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    purpose?: string;
    start: ResourceType;
    profile?: string;
    link?: GraphDefinitionLink[];
}
