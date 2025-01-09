import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
  substance?: CodeableConcept;
  strength: Ratio;
  strengthLowLimit?: Ratio;
  measurementPoint?: string;
  country?: CodeableConcept[];
}

interface MedicinalProductIngredientSpecifiedSubstanceStrength {
  presentation: Ratio;
  presentationLowLimit?: Ratio;
  concentration?: Ratio;
  concentrationLowLimit?: Ratio;
  measurementPoint?: string;
  country?: CodeableConcept[];
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];
}

interface MedicinalProductIngredientSubstance {
  code: CodeableConcept;
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
}

interface MedicinalProductIngredientSpecifiedSubstance {
  code: CodeableConcept;
  group: CodeableConcept;
  confidentiality?: CodeableConcept;
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
}

export declare class MedicinalProductIngredient extends DomainResource {
  resourceType: 'MedicinalProductIngredient';
  identifier?: Identifier;
  role: CodeableConcept;
  allergenicIndicator?: boolean;
  manufacturer?: Reference<Organization>[];
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];
  substance?: MedicinalProductIngredientSubstance;
}
