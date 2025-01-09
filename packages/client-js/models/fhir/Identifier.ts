import type { CodeableConcept } from "./CodeableConcept";
import type { Period } from "./Period";

export interface Identifier {
  period?: Period;
  system?: string;
  type?: CodeableConcept;
  value?: string;
  use?: string;
}
