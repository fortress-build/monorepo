import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";

export declare class DocumentReference extends DomainResource {
  resourceType: "DocumentReference";

  masterIdentifier?: Identifier;
  identifier?: Identifier[];
  status: "current" | "superseded" | "entered-in-error";
  docStatus?: "preliminary" | "final" | "amended" | "entered-in-error";
  type?: CodeableConcept;
  category?: CodeableConcept[];
  subject?: Reference<Patient | Practitioner | Group | Device>;
  date?: string;
  author?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Device
    | Patient
    | RelatedPerson
  >[];
  authenticator?: Reference<Practitioner | PractitionerRole | Organization>;
  custodian?: Reference<Organization>;

  relatesTo?: {
    code: "replaces" | "transforms" | "signs" | "appends";
    target: Reference<DocumentReference>;
  }[];
  description?: string;
  securityLabel?: CodeableConcept[];
  content: {
    attachment: Attachment;
    format?: Coding;
  }[];
  context?: {
    encounter?: Reference<Encounter | EpisodeOfCare>[];
    event?: CodeableConcept[];
    period?: Period;
    facilityType?: CodeableConcept;
    practiceSetting?: CodeableConcept;
    sourcePatientInfo?: Reference<Patient>;
    related?: Reference<Resource>[];
  };
}
