import type { CodeableConcept } from "./CodeableConcept";
import type { Extension } from "./Extension";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Ratio } from "./Ratio";
import type { Timing } from "./Timing";

export interface Dosage {
  sequence?: number;
  text?: string;
  additionalInstruction?: CodeableConcept[];
  patientInstruction?: string;
  timing?: Timing;
  asNeededBoolean?: boolean;
  asNeededCodeableConcept?: CodeableConcept;
  site?: CodeableConcept;
  route?: CodeableConcept;
  method?: CodeableConcept;
  doseAndRate?: {
    id: string;
    extension: Extension[];
    type: CodeableConcept;
    doseRange: Range;
    doseQuantity: Quantity;
    rateRatio: Ratio;
    rateRange: Range;
    rateQuantity: Quantity;
  }[];
  maxDosePeriod?: Period;
  maxDosePerAdministration?: Quantity;
  maxDosePerLifetime?: Quantity;
}
