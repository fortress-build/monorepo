import type { CodeableConcept } from "./CodeableConcept";
import type { Medication } from "./Medication";
import type { MedicinalProduct } from "./MedicinalProduct";
import type { Population } from "./Population";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class MedicinalProductUndesirableEffect extends DomainResource {
  resourceType: 'MedicinalProductUndesirableEffect';
  subject?: Reference<MedicinalProduct|Medication>[];
  symptomConditionEffect?: CodeableConcept;
  classification?: CodeableConcept;
  frequencyOfOccurrence?: CodeableConcept;
  population?: Population[];
}
