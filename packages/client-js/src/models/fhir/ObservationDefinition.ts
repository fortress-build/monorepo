// import * as v from "valibot";
// import { CodeableConcept } from "./CodeableConcept";
// import { Extension } from "./Extension";
// import { Identifier } from "./Identifier";
// import { Meta } from "./Meta";
// import { Narrative } from "./Narrative";
// import { Range } from "./Range";
// import { Reference } from "./Reference";
// import { Resource } from "./Resource";
//
// // Nested s first
// const ObservationDefinitionQuantitativeDetails = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   customaryUnit: v.optional(CodeableConcept),
//   unit: v.optional(CodeableConcept),
//   conversionFactor: v.optional(v.number()),
//   decimalPrecision: v.optional(v.number()),
// });
//
// const ObservationDefinitionQualifiedInterval = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   category: v.optional(
//     v.union([
//       v.literal("reference"),
//       v.literal("critical"),
//       v.literal("absolute"),
//     ]),
//   ),
//   range: v.optional(Range),
//   context: v.optional(CodeableConcept),
//   appliesTo: v.optional(v.array(CodeableConcept)),
//   gender: v.optional(
//     v.union([
//       v.literal("male"),
//       v.literal("female"),
//       v.literal("other"),
//       v.literal("unknown"),
//     ]),
//   ),
//   age: v.optional(Range),
//   gestationalAge: v.optional(Range),
//   condition: v.optional(v.string()),
// });
//
// // Main ObservationDefinition
// export const ObservationDefinition = v.object({
//   resourceType: v.literal("ObservationDefinition"),
//   id: v.optional(v.string()),
//   meta: v.optional(Meta),
//   implicitRules: v.optional(v.string()),
//   language: v.optional(v.string()),
//   text: v.optional(Narrative),
//   contained: v.optional(v.array(Resource)),
//   extension: v.optional(v.array(Extension)),
//   modifierExtension: v.optional(v.array(Extension)),
//   publisher: v.optional(Reference),
//   category: v.optional(v.array(CodeableConcept)),
//   code: CodeableConcept,
//   identifier: v.optional(v.array(Identifier)),
//   permittedDataType: v.optional(
//     v.array(
//       v.union([
//         v.literal("Quantity"),
//         v.literal("CodeableConcept"),
//         v.literal("string"),
//         v.literal("boolean"),
//         v.literal("integer"),
//         v.literal("Range"),
//         v.literal("Ratio"),
//         v.literal("SampledData"),
//         v.literal("time"),
//         v.literal("dateTime"),
//         v.literal("Period"),
//       ]),
//     ),
//   ),
//   multipleResultsAllowed: v.optional(v.boolean()),
//   method: v.optional(CodeableConcept),
//   preferredReportName: v.optional(v.string()),
//   quantitativeDetails: v.optional(ObservationDefinitionQuantitativeDetails),
//   qualifiedInterval: v.optional(
//     v.array(ObservationDefinitionQualifiedInterval),
//   ),
//   validCodedValueSet: v.optional(Reference),
//   normalCodedValueSet: v.optional(Reference),
//   abnormalCodedValueSet: v.optional(Reference),
//   criticalCodedValueSet: v.optional(Reference),
// });
//
// export type ObservationDefinition = v.InferOutput<typeof ObservationDefinition>;
//
//

import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

export interface ObservationDefinitionParameter {
  name: string;
  use: "in" | "out";
  min: number;
  max: string;
  type?: string;
  targetProfile?: object; //FIXME: should be canonical(StructureDefinition)
  searchType?:
    | "number"
    | "date"
    | "string"
    | "token"
    | "reference"
    | "composite"
    | "quantity"
    | "uri";
  binding?: {
    strength: "required" | "extensible" | "preferred" | "example";
    valueSet: string; //FIXME: should be canonical(ValueSet)
  };
  referencedFrom: {
    source: string;
    sourceId?: string;
  }[];
  part?: ObservationDefinitionParameter[];
}

export declare class ObservationDefinition extends DomainResource {
  resourceType: "ObservationDefinition";

  url?: string;
  version?: string;
  name: string;
  title?: string;
  status: "draft" | "active" | "retired" | "unknown";
  kind: "operation" | "query";
  experimental?: boolean;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  affectsState?: boolean;
  code: string;
  comment?: string;
  base: object; //FIXME: should be canonical(OperationDefinition)
  resource: string[];
  system: boolean;
  type: boolean;
  instance: boolean;

  inputProfile?: object; //FIXME: should be canonical(StructureDefinition)
  outputProfile?: object; //FIXME: should be canonical(StructureDefinition)

  parameter: ObservationDefinitionParameter[];
}
