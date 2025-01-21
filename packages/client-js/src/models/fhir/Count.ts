import type { Extension } from "./Extension";

export interface Count {
  id?: string;
  extension?: Extension[];
  value?: number;
  comparator?: "<" | "<=" | ">=" | ">";
  unit?: string;
  system?: string;
  code?: string;
}
