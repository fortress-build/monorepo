import type { Extension } from "./Extension";

export interface MoneyQuantity {
  id?: string;
  extension?: Extension[];
  value?: number;
  comparator?: "<" | "<=" | ">=" | ">";
  unit?: string;
  system?: string;
  code?: string;
}
