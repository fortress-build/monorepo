import type { Account } from "./Account";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";

export declare class EpisodeOfCare extends DomainResource {
  resourceType: "EpisodeOfCare";

  identifier?: Identifier[];
  status:
    | "planned"
    | "waitlist"
    | "active"
    | "onhold"
    | "finished"
    | "cancelled"
    | "entered-in-error"
    | "unknown";
  statusHistory?: {
    status:
      | "planned"
      | "waitlist"
      | "active"
      | "onhold"
      | "finished"
      | "cancelled"
      | "entered-in-error"
      | "unknown";
    period: Period;
  }[];
  type?: CodeableConcept[];
  diagnosis?: {
    condition: Reference<Condition>;
    role?: CodeableConcept;
    rank?: number;
  }[];
  patient: Reference<Patient>;
  managingOrganization?: Reference<Organization>;
  period?: Period;
  referralRequest?: Reference<ServiceRequest>[];
  careManager?: Reference<Practitioner | PractitionerRole>;
  team?: Reference<CareTeam>[];
  account?: Reference<Account>[];
}
