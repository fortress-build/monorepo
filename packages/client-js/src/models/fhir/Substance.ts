import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { SimpleQuantity } from "./SimpleQuantity";

export declare class Substance extends DomainResource {
  resourceType: "Substance";

  identifier?: Identifier[];
  status?: "active" | "inactive" | "entered-in-error";
  category?: CodeableConcept[];
  code: CodeableConcept;
  description?: string;
  instance?: {
    identifier?: Identifier;
    expiry?: string;
    quantity?: SimpleQuantity;
  }[];
  ingredient?: {
    quantity?: Ratio;

    substanceCodeableConcept?: CodeableConcept;
    substanceReference?: Reference<Substance>;
  }[];
}
