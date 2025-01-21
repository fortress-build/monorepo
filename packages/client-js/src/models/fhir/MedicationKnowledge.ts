import type { CodeableConcept } from "./CodeableConcept";
import type { DetectedIssue } from "./DetectedIssue";
import type { DocumentReference } from "./DocumentReference";
import type { Dosage } from "./Dosage";
import type { Duration } from "./Duration";
import type { Media } from "./Media";
import type { Medication } from "./Medication";
import type { Money } from "./Money";
import type { ObservationDefinition } from "./ObservationDefinition";
import type { Organization } from "./Organization";
import type { Quantity } from "./Quantity";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";

export declare class MedicationKnowledgeIngredient {
  itemCodeableConcept?: CodeableConcept;
  itemReference?: Reference<Substance>;
  isActive?: boolean;
  strength?: Ratio;
}

export declare class MedicationKnowledgeRegulatory {
  regulatoryAuthority: Reference<Organization>;
  substitution?: {
    type: CodeableConcept;
    allowed: boolean;
  }[];
  schedule?: {
    schedule: CodeableConcept;
  }[];
  maxDispense?: {
    quantity: Quantity;
    period?: Duration;
  };
}

export declare class MedicationKnowledgeRelatedMedicationKnowledge {
  type: CodeableConcept;
  reference: Reference[];
}

export declare class MedicationKnowledgeMonograph {
  type?: CodeableConcept;
  source?: Reference<DocumentReference | Media>;
}

export declare class MedicationKnowledgeAdministrationGuidelinesDosage {
  type: CodeableConcept;
  dosage: Dosage[];
}

export declare class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
  characteristicCodeableConcept?: CodeableConcept;
  characteristicQuantity?: Quantity;
  value?: string[];
}

export declare class MedicationKnowledgeAdministrationGuidelines {
  dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[];
  indicationCodeableConcept?: CodeableConcept;
  indicationReference?: Reference<ObservationDefinition>;
  patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];
}

export declare class MedicationKnowledge extends DomainResource{
  resourceType: 'MedicationKnowledge';
  code?: CodeableConcept;
  status?: 'active' | 'inactive' | 'entered-in-error';
  manufacturer?: Reference<Organization>;
  doseForm?: CodeableConcept;
  amount?: Quantity;
  synonym?: string[];
  ingredient?: MedicationKnowledgeIngredient[];
  regulatory?: MedicationKnowledgeRegulatory[];
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];
  associatedMedication?: Reference<Medication>[];
  productType?: CodeableConcept[];
  monograph?: MedicationKnowledgeMonograph[];
  preparationInstruction?: string;
  intendedRoute?: CodeableConcept[];
  cost?: {
    type: CodeableConcept;
    source?: string;
    cost: Money;
  }[];
  monitoringProgram?: {
    type?: CodeableConcept;
    name?: string;
  }[];
  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];
  medicineClassification?: {
    type: CodeableConcept;
    classification?: CodeableConcept[];
  }[];
  packaging?: {
    type?: CodeableConcept;
    quantity?: Quantity;
  };
  drugCharacteristic?: {
    type?: CodeableConcept;
    valueCodeableConcept?: CodeableConcept;
    valueString?: string;
    valueQuantity?: Quantity;
    valueBase64Binary?: string;
  }[];
  contraindication?: Reference<DetectedIssue>[];
  kinetics?: {
    areaUnderCurve?: Quantity[];
    lethalDose50?: Quantity[];
    halfLifePeriod?: Duration;
  }[];
}
