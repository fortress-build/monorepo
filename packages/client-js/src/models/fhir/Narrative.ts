import type { Extension } from "./Extension";

export interface Narrative {
  id?: string;
  extension?: Extension[];
  status: "generated" | "extensions" | "additional" | "empty";
  div: string;
}
