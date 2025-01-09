import type { AllergyIntolerance } from "./AllergyIntolerance";
import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Encounter } from "./Encounter";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { SimpleQuantity } from "./SimpleQuantity";
import type { Timing } from "./Timing";

export declare class NutritionOrder extends DomainResource {
  resourceType: "NutritionOrder";

  identifier?: Identifier[];

  instantiatesCanonical?: string[]; // FIXME: shoudl be canonical(ActivityDefinition |  PlanDefinition)
  instantiatesUri?: string[];
  instantiates?: string[];
  status:
    | "draft"
    | "active"
    | "on-hold"
    | "revoked"
    | "completed"
    | "entered-in-error"
    | "unknown";
  intent:
    | "proposal"
    | "plan"
    | "directive"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";
  patient: Reference<Patient>;
  encounter?: Reference<Encounter>;
  dateTime: string;
  orderer?: Reference<Practitioner | PractitionerRole>;
  allergyIntolerance?: Reference<AllergyIntolerance>[];
  foodPreferenceModifier?: CodeableConcept[];
  excludeFoodModifier?: CodeableConcept[];
  oralDiet?: {
    type?: CodeableConcept[];
    schedule?: Timing[];
    nutrient?: {
      modifier?: CodeableConcept;
      amount?: SimpleQuantity;
    }[];
    texture?: {
      modifier?: CodeableConcept;
      foodType?: CodeableConcept;
    }[];
    fluidConsistencyType?: CodeableConcept[];
    instruction?: string;
  };

  supplement?: {
    type?: CodeableConcept;
    productName?: string;
    schedule?: Timing[];
    quantity?: SimpleQuantity;
    instruction?: string;
  }[];

  enteralFormula?: {
    baseFormulaType?: CodeableConcept;
    baseFormulaProductName?: string;
    additiveType?: CodeableConcept;
    additiveProductName?: string;
    caloricDensity?: SimpleQuantity;
    routeofAdministration?: CodeableConcept;
    administration?: {
      schedule?: Timing;
      quantity?: SimpleQuantity;

      rateQuantity?: SimpleQuantity;
      rateRatio?: Ratio;
    }[];
    maxVolumeToDeliver?: SimpleQuantity;
    administrationInstruction?: string;
  };
  note?: Annotation[];
}
