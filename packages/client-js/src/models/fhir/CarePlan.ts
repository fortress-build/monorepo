// import * as v from "valibot";
// import { Meta } from "./Meta";
// import { Narrative } from "./Narrative";
// import { Resource } from "./Resource";
// import { Extension } from "./Extension";
// import { Identifier } from "./Identifier";
// import { Reference } from "./Reference";
// import { CodeableConcept } from "./CodeableConcept";
// import { Period } from "./Period";
// import { Annotation } from "./Annotation";
// import { Timing } from "./Timing";
// import { Quantity } from "./Quantity";
//
// // CarePlanActivityDetail
// const CarePlanActivityDetail = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   kind: v.optional(v.union([
//     v.literal('Appointment'),
//     v.literal('CommunicationRequest'),
//     v.literal('DeviceRequest'),
//     v.literal('MedicationRequest'),
//     v.literal('NutritionOrder'),
//     v.literal('Task'),
//     v.literal('ServiceRequest'),
//     v.literal('VisionPrescription')
//   ])),
//   instantiatesCanonical: v.optional(v.array(v.string())),
//   instantiatesUri: v.optional(v.array(v.string())),
//   code: v.optional(CodeableConcept),
//   reasonCode: v.optional(v.array(CodeableConcept)),
//   reasonReference: v.optional(v.array(Reference)),
//   goal: v.optional(v.array(Reference)),
//   status: v.union([
//     v.literal('not-started'),
//     v.literal('scheduled'),
//     v.literal('in-progress'),
//     v.literal('on-hold'),
//     v.literal('completed'),
//     v.literal('cancelled'),
//     v.literal('stopped'),
//     v.literal('unknown'),
//     v.literal('entered-in-error')
//   ]),
//   statusReason: v.optional(CodeableConcept),
//   doNotPerform: v.optional(v.boolean()),
//   scheduledTiming: v.optional(Timing),
//   scheduledPeriod: v.optional(Period),
//   scheduledString: v.optional(v.string()),
//   location: v.optional(Reference),
//   performer: v.optional(v.array(Reference)),
//   productCodeableConcept: v.optional(CodeableConcept),
//   productReference: v.optional(Reference),
//   dailyAmount: v.optional(Quantity),
//   quantity: v.optional(Quantity),
//   description: v.optional(v.string())
// });
//
// // CarePlanActivity
// const CarePlanActivity = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   outcomeCodeableConcept: v.optional(v.array(CodeableConcept)),
//   outcomeReference: v.optional(v.array(Reference)),
//   progress: v.optional(v.array(Annotation)),
//   reference: v.optional(Reference),
//   detail: v.optional(CarePlanActivityDetail)
// });
//
// // Main CarePlan
// export const CarePlan = v.object({
//   resourceType: v.literal('CarePlan'),
//   id: v.optional(v.string()),
//   meta: v.optional(Meta),
//   implicitRules: v.optional(v.string()),
//   language: v.optional(v.string()),
//   text: v.optional(Narrative),
//   contained: v.optional(v.array(Resource)),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   identifier: v.optional(v.array(Identifier)),
//   instantiatesCanonical: v.optional(v.array(v.string())),
//   instantiatesUri: v.optional(v.array(v.string())),
//   basedOn: v.optional(v.array(Reference)),
//   replaces: v.optional(v.array(Reference)),
//   partOf: v.optional(v.array(Reference)),
//   status: v.union([
//     v.literal('draft'),
//     v.literal('active'),
//     v.literal('on-hold'),
//     v.literal('revoked'),
//     v.literal('completed'),
//     v.literal('entered-in-error'),
//     v.literal('unknown')
//   ]),
//   intent: v.union([
//     v.literal('proposal'),
//     v.literal('plan'),
//     v.literal('order'),
//     v.literal('option')
//   ]),
//   category: v.optional(v.array(CodeableConcept)),
//   title: v.optional(v.string()),
//   description: v.optional(v.string()),
//   subject: Reference,
//   encounter: v.optional(Reference),
//   period: v.optional(Period),
//   created: v.optional(v.string()),
//   author: v.optional(Reference),
//   contributor: v.optional(v.array(Reference)),
//   careTeam: v.optional(v.array(Reference)),
//   addresses: v.optional(v.array(Reference)),
//   supportingInfo: v.optional(v.array(Reference)),
//   goal: v.optional(v.array(Reference)),
//   activity: v.optional(v.array(CarePlanActivity)),
//   note: v.optional(v.array(Annotation))
// });
//
// export type CarePlan = v.InferOutput<typeof CarePlan>;

import type { Annotation } from "./Annotation";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { Goal } from "./Goal";
import type { Group } from "./Group";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { Timing } from "./Timing";

export declare class CarePlanActivity {
  outcomeCodeableConcept?: CodeableConcept[];
  outcomeReference?: Reference<Resource>[];
  detail?: {
    kind?: string;
    instantiatesCanonical?: string[]; // TODO: Fix
    instantiatesUri?: string[];
    code?: CodeableConcept;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference<Resource>[];
    goal?: Reference<Goal>[];
    status: string;
    statusReason?: CodeableConcept;
    doNotPerform?: boolean;
    scheduledTiming?: Timing;
    scheduledPeriod?: Period;
    scheduledString?: string;
    location?: Reference<Location>;
    performer?: Reference<
      | Practitioner
      | PractitionerRole
      | Organization
      | RelatedPerson
      | Patient
      | CareTeam
      | HealthcareService
      | Device
    >[];

    productCodeableConcept?: CodeableConcept;
    productReference?: Reference<Resource>;

    dailyAmount?: Quantity;
    quantity?: Quantity;
    description?: string;
  };
}

export declare class CarePlan extends DomainResource {
  resourceType: "CarePlan";
  identifier?: Identifier[];
  instantiatesCanonical?: string[]; // TODO: Fix
  instantiatesUri?: string[];
  basedOn?: Reference<CarePlan>[];
  replaces?: Reference<CarePlan>[];
  partOf?: Reference<CarePlan>[];
  status: string;
  intent: string;
  category?: CodeableConcept[];
  title?: string;
  description?: string;
  subject: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;
  period?: Period;
  created?: string;
  author?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | Device
    | RelatedPerson
    | Organization
    | CareTeam
  >;
  contributor?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | Device
    | RelatedPerson
    | Organization
    | CareTeam
  >[];
  careTeam?: Reference<CareTeam>[];
  addresses?: Reference<Condition>[];
  supportingInfo?: Reference<Resource>[];
  goal?: Reference<Goal>[];

  activity?: CarePlanActivity[];
  note?: Annotation[];
}
