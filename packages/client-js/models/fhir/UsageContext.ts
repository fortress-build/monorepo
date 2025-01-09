import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Group } from "./Group";
import type { HealthcareService } from "./HealthcareService";
import type { InsurancePlan } from "./InsurancePlan";
import type { Location } from "./Location";
import type { Organization } from "./Organization";
import type { PlanDefinition } from "./PlanDefinition";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { ResearchStudy } from "./ResearchStudy";

export type UsageContext = {
  code: Coding;

  valueCodeableConcept?: CodeableConcept;
  valueQuantity?: Quantity;
  valueRange?: Range;
  valueReference?: Reference<
    | PlanDefinition
    | ResearchStudy
    | InsurancePlan
    | HealthcareService
    | Group
    | Location
    | Organization
  >;
};
