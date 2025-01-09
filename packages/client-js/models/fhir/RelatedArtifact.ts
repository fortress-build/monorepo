import type { Attachment } from "./Attachment";
import type { Extension } from "./Extension";

export interface RelatedArtifact {
  id?: string;
  extension?: Extension[];
  type:
    | "documentation"
    | "justification"
    | "citation"
    | "predecessor"
    | "successor"
    | "derived-from"
    | "depends-on"
    | "composed-of";
  label?: string;
  display?: string;
  citation?: string;
  url?: string;
  document?: Attachment;
  resource?: string;
}
