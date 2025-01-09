import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { CodeableConcept } from "./CodeableConcept";
import type { Appointment } from "./Appointment";
import type { HealthcareService } from "./HealthcareService";
import type { Device } from "./Device";
import type { RelatedPerson } from "./RelatedPerson";
import type { Practitioner } from "./Practitioner";
import type { Patient } from "./Patient";
import type { PractitionerRole } from "./PractitionerRole";

export interface AppointmentResponse extends DomainResource {
  resourceType: "AppointmentResponse";

  identifier?: Identifier[];
  appointment: Reference<Appointment>;
  start?: string;
  end?: string;
  participantType?: CodeableConcept[];
  actor?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Device
    | HealthcareService
    | Location
  >;
  participantStatus: "accepted" | "declined" | "tentative" | "needs-action";
  comment?: string;
}
