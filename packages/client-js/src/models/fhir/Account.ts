import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import type { DomainResource } from "./Resource";
import type { Patient } from "./Patient";
import type { PractitionerRole } from "./PractitionerRole";
import type { HealthcareService } from "./HealthcareService";
import type { Organization } from "./Organization";
import type { Device } from "./Device";
import type { Practitioner } from "./Practitioner";
import type { Coverage } from "./Coverage";
import type { RelatedPerson } from "./RelatedPerson";

export declare class Account extends DomainResource {
  resourceType: "Account";

  identifier?: Identifier[];
  status: "active" | "inactive" | "entered-in-error" | "on-hold" | "unknown";
  type?: CodeableConcept;
  name?: string;
  subject?: Reference<
    | Patient
    | Device
    | Practitioner
    | PractitionerRole
    | Location
    | HealthcareService
    | Organization
  >[];
  servicePeriod?: Period;
  coverage?: {
    coverage: Reference<Coverage>;
    priority?: number;
  }[];
  owner?: Reference<Organization>;
  description?: string;
  guarantor?: {
    party: Reference<Patient | RelatedPerson | Organization>;
    onHold?: boolean;
    period?: Period;
  }[];
  partOf?: Reference<Account>;
}

// export const Account = v.object({
//   resourceType: v.literal("Account"),
//   id: v.optional(v.string()),
//   meta: v.optional(Meta),
//   implicitRules: v.optional(v.string()),
//   language: v.optional(v.string()),
//   text: v.optional(Narrative),
//   contained: v.optional(v.array(Resource)),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   identifier: v.optional(v.array(Identifier)),
//   status: v.union([
//     v.literal("active"),
//     v.literal("inactive"),
//     v.literal("entered-in-error"),
//     v.literal("on-hold"),
//     v.literal("unknown"),
//   ]),
//   type: v.optional(CodeableConcept),
//   name: v.optional(v.string()),
//   subject: v.optional(v.array(Reference<Patient>())),
//   servicePeriod: v.optional(Period),
//   coverage: v.optional(v.array(AccountCoverage)),
//   // owner: v.optional(Reference<Patient>()),
//   description: v.optional(v.string()),
//   guarantor: v.optional(v.array(AccountGuarantor)),
//   // partOf: v.optional(Reference)
// });
