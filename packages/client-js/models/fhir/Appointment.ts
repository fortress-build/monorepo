import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { Location } from "./Location";
import type { Observation } from "./Observation";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Slot } from "./Slot";

export declare class Appointment extends DomainResource {
  resourceType: "Appointment";

  identifier?: Identifier[];
  status:
    | "proposed"
    | "pending"
    | "booked"
    | "arrived"
    | "fulfilled"
    | "cancelled"
    | "noshow"
    | "entered-in-error"
    | "checked-in"
    | "waitlist";
  cancelationReason?: CodeableConcept;
  serviceCategory?: CodeableConcept[];
  serviceType?: CodeableConcept[];
  specialty?: CodeableConcept[];
  appointmentType?: CodeableConcept;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Procedure | Observation | ImmunizationRecommendation
  >[];
  priority?: number;
  description?: string;
  supportingInformation?: Reference<Resource>[];
  start?: string;
  end?: string;
  minutesDuration?: number;
  slot?: Reference<Slot>[];
  created?: string;
  comment?: string;
  patientInstruction?: string;
  basedOn?: Reference<ServiceRequest>[];
  participant: {
    type?: CodeableConcept[];
    actor: Reference<
      | Patient
      | Practitioner
      | PractitionerRole
      | RelatedPerson
      | Device
      | HealthcareService
      | Location
    >;
  }[];
  requestedPeriod?: Period[];
}
