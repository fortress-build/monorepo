import type { CodeableConcept } from "./CodeableConcept";
import type { Medication } from "./Medication";
import type { MedicinalProduct } from "./MedicinalProduct";
import type { MedicinalProductIndication } from "./MedicinalProductIndication";
import type { Population } from "./Population";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";
import type { SubstanceSpecification } from "./SubstanceSpecification";

interface MedicinalProductContraindicationOtherTherapy {
  therapyRelationshipType: CodeableConcept;
  medicationCodeableConcept?: CodeableConcept;
  medicationReference?: Reference<MedicinalProduct|Medication|Substance|SubstanceSpecification>;
}

export declare class MedicinalProductContraindication extends DomainResource {
  resourceType: 'MedicinalProductContraindication';
  subject?: Reference<MedicinalProduct|Medication>[];
  disease?: CodeableConcept;
  diseaseStatus?: CodeableConcept;
  comorbidity?: CodeableConcept[];
  therapeuticIndication?: Reference<MedicinalProductIndication>[];
  otherTherapy?: MedicinalProductContraindicationOtherTherapy[];
  population?: Population[];
}
