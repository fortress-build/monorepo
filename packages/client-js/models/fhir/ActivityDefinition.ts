import type { Group } from "./Group";
import type { Medication } from "./Medication";
import type { Substance } from "./Substance";
import type { SpecimenDefinition } from "./SpecimenDefinition";
import type { ObservationDefinition } from "./ObservationDefinition";
import type { Expression } from "./Expression";
import type { DomainResource } from "./Resource";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { ContactDetail } from "./ContactDetail";
import type { UsageContext } from "./UsageContext";
import type { Period } from "./Period";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { Quantity } from "./Quantity";
import type { Dosage } from "./Dosage";
import type { Duration } from "./Duration";
import type { Age } from "./Age";
import type { Timing } from "./Timing";

export type ActivityDefinitionDynamicValue = {
  path: string;
  expression: Expression;
};

export type ActivityDefinitionParticipant = {
  type: "patient" | "practitioner" | "related-person" | "device";
  role?: CodeableConcept;
};

export declare class ActivityDefinition extends DomainResource {
  resourceType: "ActivityDefinition"
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  status: "draft" | "active" | "retired" | "unknown";
  experimental?: boolean;
  kind?:
    | "Appointment"
    | "AppointmentResponse"
    | "CarePlan"
    | "Claim"
    | "CommunicationRequest"
    | "Contract"
    | "DeviceRequest"
    | "EnrollmentRequest"
    | "ImmunizationRecommendation"
    | "MedicationRequest"
    | "NutritionOrder"
    | "ServiceRequest"
    | "SupplyRequest"
    | "Task"
    | "VisionPrescription";
  participant?: ActivityDefinitionParticipant[];
  dynamicValue?: ActivityDefinitionDynamicValue[];

  subjectCodeableConcept?: CodeableConcept;
  subjectReference?: Reference<Group>;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  usage?: string;
  copyright?: string;
  approvalDate?: string;
  lastReviewDate?: string;
  effectivePeriod?: Period;
  topic?: CodeableConcept[];
  author?: ContactDetail[];
  editor?: ContactDetail[];
  reviewer?: ContactDetail[];
  endorser?: ContactDetail[];
  relatedArtifact?: RelatedArtifact[];
  libary?: string[];

  profile?: string;
  code?: CodeableConcept;
  intent?:
    | "proposal"
    | "plan"
    | "directive"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";
  priority?: "routine" | "urgent" | "asap" | "stat";
  doNotPerform?: boolean;
  timingTiming?: Timing;
  timingDateTime?: string;
  timingAge?: Age;
  timingPeriod?: Period;
  timingRange?: Range;
  timingDuration?: Duration;
  location?: Reference<Location>;

  productReference?: Reference<Medication | Substance>;
  productCodeableConcept?: CodeableConcept;
  quantity?: Quantity;
  dosage?: Dosage[];
  bodySite?: CodeableConcept[];
  specimenRequirement?: Reference<SpecimenDefinition>[];
  observationRequirement?: Reference<ObservationDefinition>[];
  observationResultRequirement?: Reference<ObservationDefinition>[];
  transform?: string;
}

// export const ActivityDefinition = v.object({
//   resourceType: v.literal("ActivityDefinition"),
//   id: v.optional(v.string()),
//   meta: v.optional(Meta),
//   implicitRules: v.optional(v.string()),
//   language: v.optional(v.string()),
//   text: v.optional(Narrative),
//   // contained: v.optional(v.array(Resource)), // TODO: Fix
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   url: v.optional(v.string()),
//   identifier: v.optional(v.array(Identifier)),
//   version: v.optional(v.string()),
//   name: v.optional(v.string()),
//   title: v.optional(v.string()),
//   subtitle: v.optional(v.string()),
//   status: v.union([
//     v.literal("draft"),
//     v.literal("active"),
//     v.literal("retired"),
//     v.literal("unknown"),
//   ]),
//   experimental: v.optional(v.boolean()),
//
//   kind: v.optional(
//     v.union([
//       v.literal("Appointment"),
//       v.literal("AppointmentResponse"),
//       v.literal("CarePlan"),
//       v.literal("Claim"),
//       v.literal("CommunicationRequest"),
//       v.literal("Contract"),
//       v.literal("DeviceRequest"),
//       v.literal("EnrollmentRequest"),
//       v.literal("ImmunizationRecommendation"),
//       v.literal("MedicationRequest"),
//       v.literal("NutritionOrder"),
//       v.literal("ServiceRequest"),
//       v.literal("SupplyRequest"),
//       v.literal("Task"),
//       v.literal("VisionPrescription"),
//     ]),
//   ),
//
//   participant: v.optional(v.array(ActivityDefinitionParticipant)),
//   dynamicValue: v.optional(v.array(ActivityDefinitionDynamicValue)),
//   // ... continue with remaining fields
//
//   subjectCodeableConcept: v.optional(CodeableConcept),
//   subjectReference: v.optional(v.object({ reference: v.string() })), // Reference to Group
//   date: v.optional(v.string()),
//   publisher: v.optional(v.string()),
//   contact: v.optional(v.array(ContactDetail)),
//   description: v.optional(v.string()),
//   useContext: v.optional(v.array(UsageContext)), // TODO: check
//   jurisdiction: v.optional(v.array(CodeableConcept)),
//   purpose: v.optional(v.string()),
//   usage: v.optional(v.string()),
//   copyright: v.optional(v.string()),
//   approvalDate: v.optional(v.string()),
//   lastReviewDate: v.optional(v.string()),
//   effectivePeriod: v.optional(Period),
//   topic: v.optional(v.array(CodeableConcept)),
//   author: v.optional(v.array(ContactDetail)),
//   editor: v.optional(v.array(ContactDetail)),
//   reviewer: v.optional(v.array(ContactDetail)),
//   endorser: v.optional(v.array(ContactDetail)),
//   relatedArtifact: v.optional(v.array(RelatedArtifact)),
//   library: v.optional(v.array(v.string())),
//
//   profile: v.optional(v.string()),
//   code: v.optional(CodeableConcept),
//   intent: v.optional(
//     v.union([
//       v.literal("proposal"),
//       v.literal("plan"),
//       v.literal("directive"),
//       v.literal("order"),
//       v.literal("original-order"),
//       v.literal("reflex-order"),
//       v.literal("filler-order"),
//       v.literal("instance-order"),
//       v.literal("option"),
//     ]),
//   ),
//   priority: v.optional(
//     v.union([
//       v.literal("routine"),
//       v.literal("urgent"),
//       v.literal("asap"),
//       v.literal("stat"),
//     ]),
//   ),
//   doNotPerform: v.optional(v.boolean()),
//   timingTiming: v.optional(Timing),
//   timingDateTime: v.optional(v.string()),
//   timingAge: v.optional(Age),
//   timingPeriod: v.optional(Period),
//   timingRange: v.optional(Range),
//   timingDuration: v.optional(Duration),
//   location: v.optional(Reference<Location>()),
//
//   productReference: v.optional(Reference<Medication | Substance>()),
//   productCodeableConcept: v.optional(CodeableConcept),
//   quantity: v.optional(Quantity),
//   dosage: v.optional(v.array(Dosage)),
//   bodySite: v.optional(v.array(CodeableConcept)),
//   specimenRequirement: v.optional(v.array(Reference<SpecimenDefinition>())), // Reference to SpecimenDefinition
//   observationRequirement: v.optional(
//     v.array(Reference<ObservationDefinition>()),
//   ),
//   observationResultRequirement: v.optional(
//     v.array(Reference<ObservationDefinition>()),
//   ),
//   transform: v.optional(v.string()),
// });
