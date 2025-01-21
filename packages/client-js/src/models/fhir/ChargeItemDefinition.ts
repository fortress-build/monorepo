import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Money } from "./Money";
import type { ContactDetail } from "./ContactDetail";
import type { UsageContext } from "./UsageContext";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { Medication } from "./Medication";
import type { Substance } from "./Substance";
import type { Device } from "./Device";
import type { DomainResource } from "./Resource";

export declare class PriceComponent {
  type: "base" | "surcharge" | "deduction" | "discount" | "tax" | "informational";
  code?: CodeableConcept;
  factor?: number;
  amount?: Money;
}

export declare class Applicability {
  description?: string;
  language?: string;
  expression?: string;
}

export declare class PropertyGroup {
  applicability?: Applicability[];
  priceComponent?: PriceComponent[];
}

export declare class ChargeItemDefinition extends DomainResource {
  resourceType: "ChargeItemDefinition";
  url: string;
  identifier?: Identifier[];
  version?: string;
  title?: string;
  derivedFromUri?: string[];
  partOf?: string[];
  replaces?: string[];
  status: "draft" | "active" | "retired" | "unknown";
  experimental?: boolean;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  copyright?: string;
  approvalDate?: string;
  lastReviewDate?: string;
  effectivePeriod?: Period;
  code?: CodeableConcept;
  instance?: Reference<Medication| Substance | Device>[];
  applicability?: Applicability[];
  propertyGroup?: PropertyGroup[];
}
