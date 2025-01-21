import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { ContactPoint } from "./ContactPoint";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import { DomainResource } from "./Resource";

// export const BodyStructure = v.object({
//   resourceType: v.literal("BodyStructure"),
//   identifier: v.optional(v.array(Identifier)),
//   active: v.optional(v.boolean()),
//   description: v.optional(v.string()),
//   image: v.optional(v.array(Attachment)),
//   patient: Reference<Patient>(),
//
//   includedStructure: v.array(BodyStructureLocation),
//   excludedStructure: v.array(BodyStructureLocation),
// });

export declare class CareTeamParticipant {
  role?: CodeableConcept[];
  member?: Reference<
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Patient
    | Organization
    | CareTeam
  >;
  onBehalfOf?: Reference<Organization>;
  period?: Period;
}

export declare class CareTeam extends DomainResource {
  resourceType: "CareTeam";
  identifier?: Identifier[];
  status?:
    | "proposed"
    | "active"
    | "suspended"
    | "inactive"
    | "entered-in-error";
  category?: CodeableConcept[];
  name?: string;
  subject?: Reference<Patient | Group>;
  period?: Period;
  participant?: CareTeamParticipant[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition>[];
  managingOrganization?: Reference<Organization>[];
  telecom?: ContactPoint[];
  note?: Annotation[];
}
