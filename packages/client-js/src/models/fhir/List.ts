import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";

export declare class List extends DomainResource {
  resourceType: "List";

  identifier?: Identifier[];
  status: "current" | "retired" | "entered-in-error";
  mode: "working" | "snapshot" | "changes";

  title?: string;
  code?: CodeableConcept;
  subject: Reference<Patient | Group | Device | Location>;
  encounter?: Reference<Encounter>;
  date?: string;
  source?: Reference<Practitioner | PractitionerRole | Patient | Device>;
  orderedBy?: CodeableConcept;
  note?: Annotation[];
  entry?: {
    flag?: CodeableConcept;
    deleted?: boolean;
    date?: string;
    item: Reference<Resource>;
  }[];
  emptyReason?: CodeableConcept;
}
