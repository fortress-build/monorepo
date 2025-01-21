import type { RelatedPerson } from "./RelatedPerson";
import type { HealthcareService } from "./HealthcareService";
import type { Device } from "./Device";
import type { PractitionerRole } from "./PractitionerRole";
import type { Practitioner } from "./Practitioner";
import type { Patient } from "./Patient";
import type { DomainResource } from "./Resource";
import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";

export declare class Schedule extends DomainResource {
  resourceType: "Schedule";

  identifier?: Identifier[];
  active?: boolean;
  serviceCategory?: CodeableConcept[];
  serviceType?: CodeableConcept[];
  specialty?: CodeableConcept[];
  actor: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Device
    | HealthcareService
    | Location
  >[];
  planningHorizon?: Period;
  comment?: string;
}
