import type { CarePlan } from "./CarePlan";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { MedicationRequest } from "./MedicationRequest";
import type { Quantity } from "./Quantity";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";
import type { Range } from "./Range";
import type { Device } from "./Device";
import type { Group } from "./Group";
import type { Patient } from "./Patient";
import type { Timing } from "./Timing";
import type { Period } from "./Period";
import type { Encounter } from "./Encounter";
import type { RelatedPerson } from "./RelatedPerson";
import type { Organization } from "./Organization";
import type { PractitionerRole } from "./PractitionerRole";
import type { Practitioner } from "./Practitioner";
import type { Condition } from "./Condition";
import type { Observation } from "./Observation";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { ClaimResponse } from "./ClaimResponse";
import type { Coverage } from "./Coverage";
import type { Specimen } from "./Specimen";
import type { Annotation } from "./Annotation";
import type { Provenance } from "./Provenance";

export declare class ServiceRequest extends DomainResource {
  resourceType: "ServiceRequest";

  identifier?: Identifier[];
  instantiatesCanonical?: string[]; // FIXME: type should be canonical(ActivityDefinition | PlanDefinition)
  instantiatesUri?: string[];

  basedOn?: Reference<CarePlan | ServiceRequest | MedicationRequest>[];
  replaces?: Reference<ServiceRequest>[];
  requisition?: Identifier;
  status:
    | "draft"
    | "active"
    | "on-hold"
    | "revoked"
    | "completed"
    | "entered-in-error"
    | "unknown";
  intent:
    | "proposal"
    | "plan"
    | "order"
    | "directive"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";
  category?: CodeableConcept[];
  priority?: "routine" | "urgent" | "asap" | "stat";
  doNotPerform?: boolean;
  code?: CodeableConcept;
  orderDetail?: CodeableConcept[];

  quantityQuantity?: Quantity;
  quantityRatio?: Ratio;
  quantityRange?: Range;

  subject?: Reference<Patient | Group | Location | Device>;
  encounter?: Reference<Encounter>;

  occurrenceDateTime?: string;
  occurrencePeriod?: Period;
  occurrenceTiming?: Timing;

  asNeededBoolean?: boolean;
  asNeededCodeableConcept?: CodeableConcept;

  authoredOn?: string;
  requester?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | RelatedPerson
    | Device
  >;
  performerType?: CodeableConcept;
  locationCode?: CodeableConcept[];
  locationReference?: Reference<Location>[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >[];
  insurance?: Reference<Coverage | ClaimResponse>[];
  supportingInfo?: Reference<Resource>[];
  specimen?: Reference<Specimen>[];
  bodySite?: CodeableConcept[];
  note?: Annotation[];
  patientInstruction?: string;
  relevantHistory?: Reference<Provenance>[];
}

// import * as v from "valibot";
//
// import { Annotation } from "./Annotation";
// import { CodeableConcept } from "./CodeableConcept";
// import { Extension } from "./Extension";
// import { Identifier } from "./Identifier";
// import { Meta } from "./Meta";
// import { Narrative } from "./Narrative";
// import { Period } from "./Period";
// import { Quantity } from "./Quantity";
// import { Range } from "./Range";
// import { Ratio } from "./Ratio";
// import { Reference } from "./Reference";
// import { Timing } from "./Timing";
// import { Resource } from "./Resource";
//
// export const ServiceRequest = v.object({
//   resourceType: v.literal('ServiceRequest'),
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
//   requisition: v.optional(Identifier),
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
//     v.literal('directive'),
//     v.literal('order'),
//     v.literal('original-order'),
//     v.literal('reflex-order'),
//     v.literal('filler-order'),
//     v.literal('instance-order'),
//     v.literal('option')
//   ]),
//   category: v.optional(v.array(CodeableConcept)),
//   priority: v.optional(v.union([
//     v.literal('routine'),
//     v.literal('urgent'),
//     v.literal('asap'),
//     v.literal('stat')
//   ])),
//   doNotPerform: v.optional(v.boolean()),
//   code: v.optional(CodeableConcept),
//   orderDetail: v.optional(v.array(CodeableConcept)),
//   quantityQuantity: v.optional(Quantity),
//   quantityRatio: v.optional(Ratio),
//   quantityRange: v.optional(Range),
//   subject: Reference,
//   encounter: v.optional(Reference),
//   occurrenceDateTime: v.optional(v.string()),
//   occurrencePeriod: v.optional(Period),
//   occurrenceTiming: v.optional(Timing),
//   asNeededBoolean: v.optional(v.boolean()),
//   asNeededCodeableConcept: v.optional(CodeableConcept),
//   authoredOn: v.optional(v.string()),
//   requester: v.optional(Reference),
//   performerType: v.optional(CodeableConcept),
//   performer: v.optional(v.array(Reference)),
//   locationCode: v.optional(v.array(CodeableConcept)),
//   locationReference: v.optional(v.array(Reference)),
//   reasonCode: v.optional(v.array(CodeableConcept)),
//   reasonReference: v.optional(v.array(Reference)),
//   insurance: v.optional(v.array(Reference)),
//   supportingInfo: v.optional(v.array(Reference)),
//   specimen: v.optional(v.array(Reference)),
//   bodySite: v.optional(v.array(CodeableConcept)),
//   note: v.optional(v.array(Annotation)),
//   patientInstruction: v.optional(v.string()),
//   relevantHistory: v.optional(v.array(Reference))
// });
//
// export type ServiceRequest = v.InferOutput<typeof ServiceRequest>;
