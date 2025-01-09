import type { Annotation } from "./Annotation";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { ClaimResponse } from "./ClaimResponse";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Coverage } from "./Coverage";
import type { DetectedIssue } from "./DetectedIssue";
import type { Device } from "./Device";
import type { Dosage } from "./Dosage";
import type { Duration } from "./Duration";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { Medication } from "./Medication";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Provenance } from "./Provenance";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { SimpleQuantity } from "./SimpleQuantity";

export declare class MedicationRequest extends DomainResource {
  resourceType: "MedicationRequest";

  identifier?: Identifier[];
  status:
    | "active"
    | "on-hold"
    | "cancelled"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "draft"
    | "unknown";
  statusReason?: CodeableConcept;
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";
  category?: CodeableConcept[];
  priority?: "routine" | "urgent" | "asap" | "stat";
  doNotPerform?: boolean;

  reportedBoolean?: boolean;
  reportedReference?: Reference<
    Patient | Practitioner | PractitionerRole | RelatedPerson | Organization
  >;

  medicationCodeableConcept?: CodeableConcept;
  medicationReference?: Reference<Medication>;

  subject: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;
  supportingInformation?: Reference<Resource>[];
  authoredOn?: string;

  requester?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | RelatedPerson
    | Device
  >;
  performer?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | Device
    | RelatedPerson
    | CareTeam
  >;
  performerType?: CodeableConcept;
  recorder?: Reference<Practitioner | PractitionerRole>;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition | Observation>[];
  instantiatesCanonical?: string[]; // FIXME: canonical
  instantiatesUri?: string[];
  basedOn?: Reference<
    CarePlan | MedicationRequest | ServiceRequest | ImmunizationRecommendation
  >[];
  groupIdentifier?: Identifier;
  courseOfTherapyType?: CodeableConcept;
  insurance?: Reference<Coverage | ClaimResponse>[];
  note?: Annotation[];
  dosageInstruction?: Dosage[];
  dispenseRequest?: {
    initialFill?: {
      quantity?: Quantity;
      duration?: Duration;
    };
    dispenseInterval?: Duration;
    validityPeriod?: Period;
    numberOfRepeatsAllowed?: number;
    quantity?: SimpleQuantity;
    expectedSupplyDuration?: Duration;
    performer?: Reference<Organization>;
  };
  substitution?: {
    allowedBoolean?: boolean;
    allowedCodeableConcept?: CodeableConcept;

    reason?: CodeableConcept;
  };
  priorPrescription?: Reference<MedicationRequest>;
  detectedIssue?: Reference<DetectedIssue>[];
  eventHistory?: Reference<Provenance>[];
}

// import * as v from "valibot";
// import { Identifier } from "./Identifier";
// import { Reference } from "./Reference";
// import { CodeableConcept } from "./CodeableConcept";
// import { Meta } from "./Meta";
// import { Narrative } from "./Narrative";
// import { Extension } from "./Extension";
// import { Dosage } from "./Dosage";
// import { Duration } from "./Duration";
// import { Period } from "./Period";
// import { Quantity } from "./Quantity";
// import { Resource } from "./Resource";
// import type { Practitioner } from "./Practitioner";
// import type { PractitionerRole } from "./PractitionerRole";
// import type { Organization } from "./Organization";
// import type { RelatedPerson } from "./RelatedPerson";
// import type { CareTeam } from "./CareTeam";
// import type { Device } from "./Device";
// import type { Patient } from "./Patient";
//
// // Initial Fill
// const InitialFill = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   quantity: v.optional(Quantity),
//   duration: v.optional(Duration),
// });
//
// // Dispense Request
// const DispenseRequest = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   initialFill: v.optional(InitialFill),
//   dispenseInterval: v.optional(Duration),
//   validityPeriod: v.optional(Period),
//   numberOfRepeatsAllowed: v.optional(v.number()),
//   quantity: v.optional(Quantity),
//   expectedSupplyDuration: v.optional(Duration),
//   performer:
//     v.optional(
//       Reference<
//         | Practitioner
//         | PractitionerRole
//         | Organization
//         | Patient
//         | Device
//         | RelatedPerson
//         | CareTeam
//       >(),
//     ),
// });
//
// // Substitution
// const Substitution = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   allowedBoolean: v.optional(v.boolean()),
//   allowedCodeableConcept: v.optional(CodeableConcept),
//   reason: v.optional(CodeableConcept),
// });
//
// // Main MedicationRequest
// export const MedicationRequest = v.object({
//   resourceType: v.literal("MedicationRequest"),
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
//     v.literal("on-hold"),
//     v.literal("cancelled"),
//     v.literal("completed"),
//     v.literal("entered-in-error"),
//     v.literal("stopped"),
//     v.literal("draft"),
//     v.literal("unknown"),
//   ]),
//   statusReason: v.optional(CodeableConcept),
//   intent: v.union([
//     v.literal("proposal"),
//     v.literal("plan"),
//     v.literal("order"),
//     v.literal("original-order"),
//     v.literal("reflex-order"),
//     v.literal("filler-order"),
//     v.literal("instance-order"),
//     v.literal("option"),
//   ]),
//   category: v.optional(v.array(CodeableConcept)),
//   priority: v.optional(
//     v.union([
//       v.literal("routine"),
//       v.literal("urgent"),
//       v.literal("asap"),
//       v.literal("stat"),
//     ]),
//   ),
//   doNotPerform: v.optional(v.boolean()),
//   reportedBoolean: v.optional(v.boolean()),
//   reportedReference: v.optional(Reference),
//   medicationCodeableConcept: v.optional(CodeableConcept),
//   medicationReference: v.optional(Reference),
//   subject: Reference,
//   encounter: v.optional(Reference),
//   supportingInformation: v.optional(v.array(Reference)),
//   authoredOn: v.optional(v.string()),
//   requester: v.optional(Reference),
//   performer: v.optional(Reference),
//   performerType: v.optional(CodeableConcept),
//   recorder: v.optional(Reference),
//   reasonCode: v.optional(v.array(CodeableConcept)),
//   reasonReference: v.optional(v.array(Reference)),
//   instantiatesCanonical: v.optional(v.array(v.string())),
//   instantiatesUri: v.optional(v.array(v.string())),
//   basedOn: v.optional(v.array(Reference)),
//   groupIdentifier: v.optional(Identifier),
//   courseOfTherapyType: v.optional(CodeableConcept),
//   insurance: v.optional(v.array(Reference)),
//   note: v.optional(v.array(Annotation)),
//   dosageInstruction: v.optional(v.array(Dosage)),
//   dispenseRequest: v.optional(DispenseRequest),
//   substitution: v.optional(Substitution),
//   priorPrescription: v.optional(Reference),
//   detectedIssue: v.optional(v.array(Reference)),
//   eventHistory: v.optional(v.array(Reference)),
// });
//
// export type MedicationRequest = v.InferOutput<typeof MedicationRequest>;
