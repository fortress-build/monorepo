import type { Address } from "./Address";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { Endpoint } from "./Endpoint";
import type { HumanName } from "./HumanName";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class Organization extends DomainResource {
  resourceType: "Organization";
  identifier?: Identifier[];
  active?: boolean;
  type?: CodeableConcept[];
  name?: string;
  alias?: string[];
  telecom?: ContactPoint[];
  address?: Address[];
  partOf?: Reference<Organization>;
  contact?: {
    purpose?: CodeableConcept;
    name?: HumanName;
    telecom?: ContactPoint[];
    address?: Address;
  }[];
  endpoint?: Reference<Endpoint>[];
}
