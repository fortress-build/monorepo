import type { CodeableConcept } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";

export interface SubstanceAmountReferenceRange {
  lowLimit?: Quantity;
  highLimit?: Quantity;
}

export interface SubstanceAmount {
  amountQuantity?: Quantity;
  amountRange?: Range;
  amountString?: string;
  amountType?: CodeableConcept;
  amountText?: string;
  referenceRange?: SubstanceAmountReferenceRange;
}