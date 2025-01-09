// import * as v from "valibot";
// import { Resource } from "./Resource";
// import { Reference } from "./Reference";
// import { CodeableConcept } from "./CodeableConcept";
// import { Coding } from "./Coding";
// import { Identifier } from "./Identifier";
// import { Period } from "./Period";
// import { Quantity } from "./Quantity";
// import { Address } from "./Address";
// import { Age } from "./Age";
// import { Annotation } from "./Annotation";
// import { Attachment } from "./Attachment";
// import { ContactPoint } from "./ContactPoint";
// import { Count } from "./Count";
// import { Distance } from "./Distance";
// import { Duration } from "./Duration";
// import { HumanName } from "./HumanName";
// import { Money } from "./Money";
// import { Range } from "./Range";
// import { Ratio } from "./Ratio";
// import { SampledData } from "./SampledData";
// import { Signature } from "./Signature";
// import { Timing } from "./Timing";
// import { ContactDetail } from "./ContactDetail";
// import { Contributor } from "./Contributor";
// import { DataRequirement } from "./DataRequirement";
// import { Expression } from "./Expression";
// import { ParameterDefinition } from "./ParameterDefinition";
// import { RelatedArtifact } from "./RelatedArtifact";
// import { TriggerDefinition } from "./TriggerDefinition";
// import { UsageContext } from "./UsageContext";
// import { Dosage } from "./Dosage";
// import { Meta } from "./Meta";

import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { Resource } from "./Resource";

export enum BooleanString {
  True = "true",
  False = "false",
}

// export const Parameter = v.variant("name", [
//   v.object({
//     name: v.literal("resource"),
//     resource: v.optional(Resource),
//   }),
//   v.object({
//     name: v.literal("onlyCertainMatches"),
//     valueBoolean: v.enum(BooleanString),
//   }),
//   v.object({
//     name: v.literal("valueString"),
//     valueString: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueInteger"),
//     valueInteger: v.optional(v.number()),
//   }),
//   v.object({
//     name: v.literal("valueDate"),
//     valueDate: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueDateTime"),
//     valueDateTime: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueDecimal"),
//     valueDecimal: v.optional(v.number()),
//   }),
//   v.object({
//     name: v.literal("valueReference"),
//     valueReference: v.optional(Reference),
//   }),
//   v.object({
//     name: v.literal("valueCodeableConcept"),
//     valueCodeableConcept: v.optional(CodeableConcept),
//   }),
//   v.object({
//     name: v.literal("valueCoding"),
//     valueCoding: v.optional(Coding),
//   }),
//   v.object({
//     name: v.literal("valueIdentifier"),
//     valueIdentifier: v.optional(Identifier),
//   }),
//   v.object({
//     name: v.literal("valuePeriod"),
//     valuePeriod: v.optional(Period),
//   }),
//   v.object({
//     name: v.literal("valueQuantity"),
//     valueQuantity: v.optional(Quantity),
//   }),
//   v.object({
//     name: v.literal("valueBase64Binary"),
//     valueBase64Binary: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueCanonical"),
//     valueCanonical: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueCode"),
//     valueCode: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueId"),
//     valueId: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueInstant"),
//     valueInstant: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueMarkdown"),
//     valueMarkdown: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueOid"),
//     valueOid: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valuePositiveInt"),
//     valuePositiveInt: v.optional(v.number()),
//   }),
//   v.object({
//     name: v.literal("valueTime"),
//     valueTime: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueUnsignedInt"),
//     valueUnsignedInt: v.optional(v.number()),
//   }),
//   v.object({
//     name: v.literal("valueUri"),
//     valueUri: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueUrl"),
//     valueUrl: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueUuid"),
//     valueUuid: v.optional(v.string()),
//   }),
//   v.object({
//     name: v.literal("valueAddress"),
//     valueAddress: v.optional(Address),
//   }),
//   v.object({
//     name: v.literal("valueAge"),
//     valueAge: v.optional(Age),
//   }),
//   v.object({
//     name: v.literal("valueAnnotation"),
//     valueAnnotation: v.optional(Annotation),
//   }),
//   v.object({
//     name: v.literal("valueAttachment"),
//     valueAttachment: v.optional(Attachment),
//   }),
//   v.object({
//     name: v.literal("valueContactPoint"),
//     valueContactPoint: v.optional(ContactPoint),
//   }),
//   v.object({
//     name: v.literal("valueCount"),
//     valueCount: v.optional(Count),
//   }),
//   v.object({
//     name: v.literal("valueDistance"),
//     valueDistance: v.optional(Distance),
//   }),
//   v.object({
//     name: v.literal("valueDuration"),
//     valueDuration: v.optional(Duration),
//   }),
//   v.object({
//     name: v.literal("valueHumanName"),
//     valueHumanName: v.optional(HumanName),
//   }),
//   v.object({
//     name: v.literal("valueMoney"),
//     valueMoney: v.optional(Money),
//   }),
//   v.object({
//     name: v.literal("valueRange"),
//     valueRange: v.optional(Range),
//   }),
//   v.object({
//     name: v.literal("valueRatio"),
//     valueRatio: v.optional(Ratio),
//   }),
//   v.object({
//     name: v.literal("valueSampledData"),
//     valueSampledData: v.optional(SampledData),
//   }),
//   v.object({
//     name: v.literal("valueSignature"),
//     valueSignature: v.optional(Signature),
//   }),
//   v.object({
//     name: v.literal("valueTiming"),
//     valueTiming: v.optional(Timing),
//   }),
//   v.object({
//     name: v.literal("valueContactDetail"),
//     valueContactDetail: v.optional(ContactDetail),
//   }),
//   v.object({
//     name: v.literal("valueContributor"),
//     valueContributor: v.optional(Contributor),
//   }),
//   v.object({
//     name: v.literal("valueDataRequirement"),
//     valueDataRequirement: v.optional(DataRequirement),
//   }),
//   v.object({
//     name: v.literal("valueExpression"),
//     valueExpression: v.optional(Expression),
//   }),
//   v.object({
//     name: v.literal("valueParameterDefinition"),
//     valueParameterDefinition: v.optional(ParameterDefinition),
//   }),
//   v.object({
//     name: v.literal("valueRelatedArtifact"),
//     valueRelatedArtifact: v.optional(RelatedArtifact),
//   }),
//   v.object({
//     name: v.literal("valueTriggerDefinition"),
//     valueTriggerDefinition: v.optional(TriggerDefinition),
//   }),
//   v.object({
//     name: v.literal("valueUsageContext"),
//     valueUsageContext: v.optional(UsageContext),
//   }),
//   v.object({
//     name: v.literal("valueDosage"),
//     valueDosage: v.optional(Dosage),
//   }),
//   v.object({
//     name: v.literal("valueMeta"),
//     valueMeta: v.optional(Meta),
//   }),
// ]);
//
// export type Parameter = v.InferOutput<typeof Parameter>;

// export const Parameters = v.object({
//   resourceType: v.literal("Parameters"),
//   parameter: v.array(Parameter),
// });

export type Parameter = {
  name: string;

  resource?: Resource;
  part?: Parameter[];

  valueBoolean?: BooleanString;
  valueString?: string;
  valueInteger?: number;
  valueDate?: string;
  valueDateTime?: string;
  valueDecimal?: number;
  valueReference?: Reference<Resource>;
  valueCodeableConcept?: CodeableConcept;
  valueCoding?: Coding;
  valueIdentifier?: Identifier;
  valuePeriod?: Period;
  valueQuantity?: Quantity;
};

export declare class Parameters extends Resource {
  resourceType: "Parameters";
  parameter: Parameter[];
}

// export type Parameters = v.InferOutput<typeof Parameters>;
