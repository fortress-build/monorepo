// //FIX THIS
//
// import * as v from "valibot";
// import { DataRequirement } from "./DataRequirement";
// import { Expression } from "./Expression";
// import { Extension } from "./Extension";
// import { Reference } from "./Reference";
// import { Timing } from "./Timing";
// import { Schedule } from "./Schedule";
//
// // Define the allowed types for the 'type' field
// const TriggerTypeEnum = v.union([
//   v.literal('named-event'),
//   v.literal('periodic'),
//   v.literal('data-changed'),
//   v.literal('data-added'),
//   v.literal('data-modified'),
//   v.literal('data-removed'),
//   v.literal('data-accessed'),
//   v.literal('data-access-ended')
// ]);
//
// // Define the timing union type
// const TriggerDefinitionTiming = v.union([
//   Timing,
//   Reference,
//   v.string()
// ]);
//
// export const TriggerDefinition = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   name: v.optional(v.string()),
//     type: TriggerTypeEnum,
//     timingTiming: v.optional(Timing),
//   timingReference: v.optional(Reference),
//   timingDate: v.optional(v.string()),
//   timingDateTime: v.optional(v.string()),
//     data: v.optional(v.array(DataRequirement)),
//   condition: v.optional(Expression)
// });
//
// export type TriggerDefinition = v.InferOutput<typeof TriggerDefinition>;

import type { Expression } from "./Expression";
import type { Extension } from "./Extension";
import type { Reference } from "./Reference";
import type { Resource } from "./Resource";
import type { Timing } from "./Timing";

export interface TriggerDefinition {
  id?: string;
  extension?: Extension[];
  name?: string;
  type:
    | "named-event"
    | "periodic"
    | "data-changed"
    | "data-added"
    | "data-modified"
    | "data-removed"
    | "data-accessed"
    | "data-access-ended";

  timingTiming?: Timing;
  timingReference?: Reference<Resource>;
  timingDate?: string;
  timingDateTime?: string;

  condition?: Expression;
}
