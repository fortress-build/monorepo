import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { Signature } from "./Signature";

export declare class ProvenanceAgent {
  type?: CodeableConcept;
  role?: CodeableConcept[];
  who: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | Device
    | RelatedPerson
  >;
  onBehalfOf?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | Device
    | RelatedPerson
  >;
}

export declare class Provenance extends DomainResource {
  resourceType: "Provenance";

  target: Reference<Resource>[];

  occurredPeriod?: Period;
  occurredDateTime?: string;

  recorded: string;
  policy?: string[];
  location?: Reference<Location>;
  reason?: CodeableConcept[];
  activity?: CodeableConcept;

  agent: ProvenanceAgent[];

  entity?: {
    role: "derivation" | "revision" | "quotation" | "source" | "removal";
    what: Reference<Resource>;
    agent?: ProvenanceAgent[];
  }[];
  signature?: Signature[];
}
