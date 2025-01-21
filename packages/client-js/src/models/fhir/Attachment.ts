// import * as v from "valibot";
// import { Extension } from "./Extension";
//
// export const Attachment = v.object({
//   id: v.optional(v.string()),
//   extension: v.optional(v.array(Extension)),
//   contentType: v.optional(v.string()),
//   language: v.optional(v.string()),
//   data: v.optional(v.string()),
//   url: v.optional(v.string()),
//   size: v.optional(v.number()),
//   hash: v.optional(v.string()),
//   title: v.optional(v.string()),
//   creation: v.optional(v.string()),
// });
//
// export type Attachment = v.InferOutput<typeof Attachment>;

import type { Extension } from "./Extension";

export interface Attachment {
  id?: string;

  extension?: Extension[];
  contentType?: string;
  language?: string;
  data?: string;
  url?: string;
  size?: number;
  hash?: string;
  title?: string;
  creation?: string;
}
