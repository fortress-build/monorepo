import type { Extension } from "./Extension";

export interface SimpleQuantity {
  id?: string;
  extension?: Extension[];
  value?: number;
  unit?: string;
  system?: string;
  code?: string;
}
