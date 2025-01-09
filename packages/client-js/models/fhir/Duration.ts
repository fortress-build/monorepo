import type { Extension } from "./Extension";

export interface Duration {
  id?: string;
  extension?: Extension[];
  value?: number;
  comparator?: "<" | "<=" | ">=" | ">";
  unit?: string;
  system?: string;
  code?: string;
}
