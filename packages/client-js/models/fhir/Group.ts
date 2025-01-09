import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Identifier } from "./Identifier";
import type { Medication } from "./Medication";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";

export declare class Group extends DomainResource {
  resourceType: "Group";

  identifier?: Identifier[];
  active?: boolean;
  type:
    | "person"
    | "animal"
    | "practitioner"
    | "device"
    | "medication"
    | "substance";
  actual: boolean;
  code?: Identifier;
  name?: string;
  quantity?: number;
  managingEntity?: Reference<
    Organization | RelatedPerson | Practitioner | PractitionerRole
  >;
  characteristic?: {
    code: CodeableConcept;

    valueCodeableConcept?: CodeableConcept;
    valueBoolean?: boolean;
    valueQuantity?: Quantity;
    valueRange?: Range;

    exclude?: boolean;
    period?: Period;
  }[];
  member?: {
    entity: Reference<
      | Patient
      | Practitioner
      | PractitionerRole
      | Device
      | Medication
      | Substance
      | Group
    >;
  }[];
}
