import type { CodeableConcept } from "./CodeableConcept";
import type { MedicinalProductIngredient } from "./MedicinalProductIngredient";
import type { Organization } from "./Organization";
import type { ProdCharacteristic } from "./ProdCharacteristic";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class MedicinalProductManufactured extends DomainResource {
  resourceType: 'MedicinalProductManufactured';
  manufacturedDoseForm: CodeableConcept;
  unitOfPresentation?: CodeableConcept;
  quantity: Quantity;
  manufacturer?: Reference<Organization>[];
  ingredient?: Reference<MedicinalProductIngredient>[];
  physicalCharacteristics?: ProdCharacteristic;
  otherCharacteristics?: CodeableConcept[];
}
