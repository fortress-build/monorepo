import type { Organization } from "./Organization";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";

export declare class LinkageItem {
    type: 'source' | 'alternate' | 'historical';
    resource: Reference<Resource>;
}

export declare class Linkage extends DomainResource{
    resourceType: 'Linkage';
    active?: boolean;
    author?: Reference<Practitioner|PractitionerRole|Organization>;
    item: LinkageItem[];
}
