import type { Address } from "./Address";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { Endpoint } from "./Endpoint";
import type { HumanName } from "./HumanName";
import type { Identifier } from "./Identifier";
import type { Money } from "./Money";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class InsurancePlan extends DomainResource {
  resourceType: "InsurancePlan";

  identifier?: Identifier[];
  status?: "draft" | "active" | "retired" | "unknown";
  type?: CodeableConcept[];
  name?: string;
  alias?: string[];
  period?: Period;
  ownedBy?: Reference<Organization>;
  administeredBy?: Reference<Organization>;
  coverageArea?: Reference<Location>[];
  contact?: {
    purpose?: CodeableConcept;
    name?: HumanName;
    telecom?: ContactPoint[];
    address?: Address;
  }[];
  endpoint?: Reference<Endpoint>[];
  network?: Reference<Organization>[];
  coverage?: {
    type: CodeableConcept;
    network?: Reference<Organization>[];
    benefit: {
      type: CodeableConcept;
      requirement?: string;
      limit?: {
        value?: Quantity;
        code?: CodeableConcept;
      }[];
    }[];
  }[];
  plan?: {
    identifier?: Identifier[];
    type?: CodeableConcept;
    coverageArea?: Reference<Location>[];
    network?: Reference<Organization>[];
    generalCost?: {
      type?: CodeableConcept;
      groupSize?: number;
      cost: Money;
      comment?: string;
    }[];
    specificCost?: {
      category: CodeableConcept;
      benefit: {
        type: CodeableConcept;
        applicability?: CodeableConcept;
        qualifiers?: CodeableConcept[];
        value?: Quantity;
      }[];
    }[];
  }[];
}
