import type { Extension } from "./Extension";

export interface Distance {
  id?: string;
  extension?: Extension[];
  value?: number;
  comparator?: "<" | "<=" | ">=" | ">";
  unit?: string;
  system?: string;
  code?: string;
}
