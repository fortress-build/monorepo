import type { CodeableConcept } from "./CodeableConcept";
import type { Medication } from "./Medication";
import type { MedicinalProduct } from "./MedicinalProduct";
import type { MedicinalProductUndesirableEffect } from "./MedicinalProductUndesirableEffect";
import type { Population } from "./Population";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";
import type { SubstanceSpecification } from "./SubstanceSpecification";

export declare class MedicinalProductIndicationOtherTherapy {
  therapyRelationshipType: CodeableConcept;
  medicationCodeableConcept?: CodeableConcept;
  medicationReference?: Reference<MedicinalProduct|Medication|Substance|SubstanceSpecification>;
}

export declare class MedicinalProductIndication extends DomainResource{
  resourceType: 'MedicinalProductIndication';
  subject?: Reference<MedicinalProduct|Medication>[];
  diseaseSymptomProcedure?: CodeableConcept;
  diseaseStatus?: CodeableConcept;
  comorbidity?: CodeableConcept[];
  intendedEffect?: CodeableConcept;
  duration?: Quantity;
  otherTherapy?: MedicinalProductIndicationOtherTherapy[];
  undesirableEffect?: Reference<MedicinalProductUndesirableEffect>[];
  population?: Population[];
}
