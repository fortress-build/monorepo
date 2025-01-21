import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { HealthcareService } from "./HealthcareService";
import type { ActivityDefinition } from "./ActivityDefinition";
import type { PlanDefinition } from "./PlanDefinition";
import type { SpecimenDefinition } from "./SpecimenDefinition";
import type { ObservationDefinition } from "./ObservationDefinition";
import type { Binary } from "./Binary";
import type { Medication } from "./Medication";
import type { Organization } from "./Organization";
import type { Device } from "./Device";
import type { DomainResource } from "./Resource";

// First define the RelatedEntry interface
export interface CatalogEntryRelatedEntry {
    relationtype: 'triggers' | 'is-replaced-by';
    item: Reference<CatalogEntry>;
}

export declare class CatalogEntry extends DomainResource{
    resourceType: 'CatalogEntry';
    identifier?: Identifier[];
    type?: CodeableConcept;
    orderable: boolean;
    referencedItem: Reference<Medication|Device| Organization| Practitioner | PractitionerRole | HealthcareService | ActivityDefinition | PlanDefinition | SpecimenDefinition | ObservationDefinition | Binary>;
    additionalIdentifier?: Identifier[];
    classification?: CodeableConcept[];
    status?: 'draft' | 'active' | 'retired' | 'unknown';
    validityPeriod?: Period;
    validTo?: string;
    lastUpdated?: string;
    additionalCharacteristic?: CodeableConcept[];
    additionalClassification?: CodeableConcept[];
    relatedEntry?: CatalogEntryRelatedEntry[];
}
