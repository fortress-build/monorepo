import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";

export interface Range {
  id?: string;
  extension?: Extension[];
  low?: Quantity;
  high?: Quantity;
}
