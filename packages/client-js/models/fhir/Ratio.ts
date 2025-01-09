import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";

export interface Ratio {
  id?: string;
  extension?: Extension[];
  numerator?: Quantity;
  denominator?: Quantity;
}
