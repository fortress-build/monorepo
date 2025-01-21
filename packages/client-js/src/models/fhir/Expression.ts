// import * as v from "valibot";
// import { Extension } from "./Extension";
//
// export const ExpressionLanguage = v.union([
//   v.literal("text/cql"),
//   v.literal("text/fhirpath"),
//   v.literal("application/x-fhir-query"),
// ]);
//
// export const Expression = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   description: v.optional(v.string()),
//   name: v.optional(v.string()),
//   language: ExpressionLanguage,
//   expression: v.optional(v.string()),
//   reference: v.optional(v.string()),
// });
//
// export type Expression = v.InferOutput<typeof Expression>;

import type { Extension } from "./Extension";

export interface Expression {
  id?: string;
  extension?: Extension[];
  description?: string;
  name?: string;
  language: "text/cql" | "text/fhirpath" | "application/x-fhir-query";
  expression?: string;
  reference?: string;
}
