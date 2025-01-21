import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";

export interface SampledData {
  id?: string;
  extension?: Extension[];
  origin: Quantity;
  period: number;
  factor?: number;
  lowerLimit?: number;
  upperLimit?: number;
  dimensions: number;
  data?: string;
}
