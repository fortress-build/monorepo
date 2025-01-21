import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class Endpoint extends DomainResource {
  resourceType: "Endpoint";

  identifier?: Identifier[];
  status:
    | "active"
    | "suspended"
    | "error"
    | "off"
    | "entered-in-error"
    | "test";
  connectionType: Coding;
  name?: string;
  managingOrganization?: Reference<Organization>;
  contact?: ContactPoint[];
  period?: Period;
  payloadType: CodeableConcept[];
  payloadMimeType?: string[];
  address: string;
  header?: string[];
}
