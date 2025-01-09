import type { CodeableConcept } from "./CodeableConcept";
import type { DeviceDefinition } from "./DeviceDefinition";
import type { Duration } from "./Duration";
import type { Identifier } from "./Identifier";
import type { MedicinalProductIngredient } from "./MedicinalProductIngredient";
import type { Quantity } from "./Quantity";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

interface WithdrawalPeriod {
  tissue: CodeableConcept;
  value: Quantity;
  supportingInformation?: string;
}

interface TargetSpecies {
  code: CodeableConcept;
  withdrawalPeriod?: WithdrawalPeriod[];
}

interface RouteOfAdministration {
  code: CodeableConcept;
  firstDose?: Quantity;
  maxSingleDose?: Quantity;
  maxDosePerDay?: Quantity;
  maxDosePerTreatmentPeriod?: Ratio;
  maxTreatmentPeriod?: Duration;
  targetSpecies?: TargetSpecies[];
}

interface Characteristics {
  code: CodeableConcept;
  status?: CodeableConcept;
}

export declare class MedicinalProductPharmaceutical extends DomainResource {
  resourceType: 'MedicinalProductPharmaceutical';
  identifier?: Identifier[];
  administrableDoseForm: CodeableConcept;
  unitOfPresentation?: CodeableConcept;
  ingredient?: Reference<MedicinalProductIngredient>[];
  device?: Reference<DeviceDefinition>[];
  characteristics?: Characteristics[];
  routeOfAdministration: RouteOfAdministration[];
}
