import type { Annotation } from "./Annotation";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { DeviceRequest } from "./DeviceRequest";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { ImagingStudy } from "./ImagingStudy";
import type { Immunization } from "./Immunization";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { Media } from "./Media";
import type { MedicationAdministration } from "./MedicationAdministration";
import type { MedicationDispense } from "./MedicationDispense";
import type { MedicationStatement } from "./MedicationStatement";
// import type { MolecularSequence } from "./MolecularSequence";
import type { NutritionOrder } from "./NutritionOrder";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { export export Procedure } from "./Procedure";
import type { Quantity } from "./Quantity";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { SampledData } from "./SampledData";
import type { ServiceRequest } from "./ServiceRequest";
import type { SimpleQuantity } from "./SimpleQuantity";
import type { Specimen } from "./Specimen";
import type { Timing } from "./Timing";

export declare class Observation extends DomainResource {
  resourceType: "Observation";

  identifier?: Identifier[];

  instantiatesCanonical?: string[]; // TODO: Fix
  instantiatesUri?: string[];

  basedOn?: Reference<
    | CarePlan
    | DeviceRequest
    | ImmunizationRecommendation
    // | MedicalRequest // TODO: Fix
    | NutritionOrder
    | ServiceRequest
  >[];

  partOf?: Reference<
    | MedicationAdministration
    | MedicationDispense
    | MedicationStatement
    | Procedure
    | Immunization
    | ImagingStudy
  >[];

  status: string;
  category?: CodeableConcept[];
  code: CodeableConcept;
  subject?: Reference<Patient | Group | Device | Location>;
  focus: Reference<Resource>[];
  encounter?: Reference<Encounter>;

  effectiveDateTime?: string;
  effectivePeriod?: Period;
  effectiveTiming?: Timing;
  effectiveInstant?: string;

  issued?: string;
  performer?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | CareTeam
    | Patient
    | RelatedPerson
  >[];

  valueQuantity?: Quantity;
  valueCodeableConcept?: CodeableConcept;
  valueString?: string;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueRange?: Range;
  valueRatio?: Ratio;
  valueSampledData?: SampledData;
  valueTime?: string;
  valueDateTime?: string;
  valuePeriod?: Period;

  dataAbsentReason?: CodeableConcept;
  interpretation?: CodeableConcept[];
  note?: Annotation[];
  bodySite?: CodeableConcept;
  method?: CodeableConcept;

  specimen?: Reference<Specimen>;
  device?: Reference<Device>;

  referenceRange?: {
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
  };
  hasMember?: Reference<Observation | QuestionnaireResponse | Observation>[];
  derivedFrom?: Reference<
    | DocumentReference
    | ImagingStudy
    | Media
    | QuestionnaireResponse
    | Observation
  >;

  component?: {
    valueQuantity?: Quantity;
    valueCodeableConcept?: CodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueSampledData?: SampledData;
    valueTime?: string;
    valueDateTime?: string;
    valuePeriod?: Period;

    dataAbsentReason?: CodeableConcept;
    interpretation?: CodeableConcept[];
    referenceRange?: {
      low?: SimpleQuantity;
      high?: SimpleQuantity;
      type?: CodeableConcept;
      appliesTo?: CodeableConcept[];
      age?: Range;
      text?: string;
    };
  }[];
}

// import * as v from "valibot";
// import { Meta } from "./Meta";
// import { Narrative } from "./Narrative";
// import { Extension } from "./Extension";
// import { Identifier } from "./Identifier";
// import { CodeableConcept } from "./CodeableConcept";
// import { Reference } from "./Reference";
// import { Period } from "./Period";
// import { Timing } from "./Timing";
// import { Quantity } from "./Quantity";
// import { Range } from "./Range";
// import { Ratio } from "./Ratio";
// import { SampledData } from "./SampledData";
// import { Annotation } from "./Annotation";
// import { Resource } from "./Resource";

// const ObservationReferenceRange = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   low: v.optional(Quantity),
//   high: v.optional(Quantity),
//   type: v.optional(CodeableConcept),
//   appliesTo: v.optional(v.array(CodeableConcept)),
//   age: v.optional(Range),
//   text: v.optional(v.string()),
// });
//
// const ObservationComponent = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   code: CodeableConcept,
//   valueQuantity: v.optional(Quantity),
//   valueCodeableConcept: v.optional(CodeableConcept),
//   valueString: v.optional(v.string()),
//   valueBoolean: v.optional(v.boolean()),
//   valueInteger: v.optional(v.number()),
//   valueRange: v.optional(Range),
//   valueRatio: v.optional(Ratio),
//   valueSampledData: v.optional(SampledData),
//   valueTime: v.optional(v.string()),
//   valueDateTime: v.optional(v.string()),
//   valuePeriod: v.optional(Period),
//   dataAbsentReason: v.optional(CodeableConcept),
//   interpretation: v.optional(v.array(CodeableConcept)),
//   referenceRange: v.optional(v.array(ObservationReferenceRange)),
// });
//
// export const Observation = v.object({
//   resourceType: v.literal("Observation"),
//   id: v.optional(v.string()),
//   meta: v.optional(Meta),
//   implicitRules: v.optional(v.string()),
//   language: v.optional(v.string()),
//   text: v.optional(Narrative),
//   contained: v.optional(v.array(Resource)),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   identifier: v.optional(v.array(Identifier)),
//   basedOn: v.optional(v.array(Reference)),
//   partOf: v.optional(v.array(Reference)),
//   status: v.union([
//     v.literal("registered"),
//     v.literal("preliminary"),
//     v.literal("final"),
//     v.literal("amended"),
//     v.literal("corrected"),
//     v.literal("cancelled"),
//     v.literal("entered-in-error"),
//     v.literal("unknown"),
//   ]),
//   category: v.array(CodeableConcept),
//   code: CodeableConcept,
//   subject: v.optional(Reference),
//   focus: v.optional(v.array(Reference)),
//   encounter: v.optional(Reference),
//   effectiveDateTime: v.optional(v.string()),
//   effectivePeriod: v.optional(Period),
//   effectiveTiming: v.optional(Timing),
//   effectiveInstant: v.optional(v.string()),
//   issued: v.optional(v.string()),
//   performer: v.optional(v.array(Reference)),
//   valueQuantity: v.optional(Quantity),
//   valueCodeableConcept: v.optional(CodeableConcept),
//   valueString: v.optional(v.string()),
//   valueBoolean: v.optional(v.boolean()),
//   valueInteger: v.optional(v.number()),
//   valueRange: v.optional(Range),
//   valueRatio: v.optional(Ratio),
//   valueSampledData: v.optional(SampledData),
//   valueTime: v.optional(v.string()),
//   valueDateTime: v.optional(v.string()),
//   valuePeriod: v.optional(Period),
//   dataAbsentReason: v.optional(CodeableConcept),
//   interpretation: v.optional(v.array(CodeableConcept)),
//   note: v.optional(v.array(Annotation)),
//   bodySite: v.optional(CodeableConcept),
//   method: v.optional(CodeableConcept),
//   specimen: v.optional(Reference),
//   device: v.optional(Reference),
//   referenceRange: v.optional(v.array(ObservationReferenceRange)),
//   hasMember: v.optional(v.array(Reference)),
//   derivedFrom: v.optional(v.array(Reference)),
//   component: v.optional(v.array(ObservationComponent)),
// });
//
// export type Observation = v.InferOutput<typeof Observation>;
//
