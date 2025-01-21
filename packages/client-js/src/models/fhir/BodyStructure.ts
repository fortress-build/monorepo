import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { Patient } from "./Patient";
import type { DomainResource } from "./Resource";

export declare class BodyStructure extends DomainResource {
  resourceType: "BodyStructure";

  identifier?: Identifier[];
  active?: boolean;
  morphology?: CodeableConcept;
  location?: CodeableConcept[];
  locationQualifier?: CodeableConcept[];
  description?: string;
  image?: Attachment[];
  patient: Reference<Patient>;
}

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
