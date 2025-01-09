import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";

export declare class Medication extends DomainResource {
  resourceType: "Medication";

  identifier?: Identifier[];
  code: CodeableConcept;
  status?: "active" | "inactive" | "entered-in-error";
  manufacturer?: Reference<Organization>;
  form?: CodeableConcept;
  amount?: Ratio;
  ingredient?: {
    itemCodableConcept?: CodeableConcept;
    itemReference?: Reference<Substance | Medication>;
    isActive?: boolean;
    strength?: Ratio;
  }[];
  batch?: {
    lotNumber?: string;
    expirationDate?: string;
  };
}
