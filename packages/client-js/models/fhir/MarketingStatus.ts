import type { CodeableConcept } from "./CodeableConcept";
import type { Period } from "./Period";

export interface MarketingStatus {
  country: CodeableConcept;
  jurisdiction?: CodeableConcept;
  status: CodeableConcept;
  dateRange: Period;
  restoreDate?: string;
}
