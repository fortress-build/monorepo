import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { Identifier } from "./Identifier";
import type { Narrative } from "./Narrative";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import { DomainResource, type Resource } from "./Resource";

export declare class CompositionAttester {
    mode: 'personal' | 'professional' | 'legal' | 'official';
    time?: string;
    party?: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole | Organization>;
}

export declare class CompositionEvent {
    code?: CodeableConcept[];
    period?: Period;
    detail?: Reference<Resource>[];
}

export declare class CompositionRelatesTo {
    code: 'replaces' | 'transforms' | 'signs' | 'appends';
    targetIdentifier?: Identifier;
    targetReference?: Reference<Composition>;
}

export declare class CompositionSection {
    title?: string;
    code?: CodeableConcept;
    author?: Reference<Practitioner | PractitionerRole | Device | Patient | RelatedPerson | Organization>[];
    focus?: Reference<Resource>;
    text?: Narrative;
    mode?: 'working' | 'snapshot' | 'changes';
    orderedBy?: CodeableConcept;
    entry?: Reference<Resource>[];
    emptyReason?: CodeableConcept;
    section?: CompositionSection[];
}

export declare class Composition extends DomainResource {
    resourceType: 'Composition';
    identifier?: Identifier;
    status: 'preliminary' | 'final' | 'amended' | 'entered-in-error';
    type: CodeableConcept;
    category?: CodeableConcept[];
    subject?: Reference<Resource>;
    encounter?: Reference<Encounter>;
    date: string;
    author: Reference<Practitioner | PractitionerRole | Device | Patient | RelatedPerson | Organization>[];
    title: string;
    confidentiality?: 'U' | 'L' | 'M' | 'N' | 'R' | 'V';
    attester?: CompositionAttester[];
    custodian?: Reference<Organization>;
    relatesTo?: CompositionRelatesTo[];
    event?: CompositionEvent[];
    section?: CompositionSection[];
}
