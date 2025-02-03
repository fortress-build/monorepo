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
  resourceType: 'AppointmentResponse';

  /**
   * This records identifiers associated with this appointment response
   * concern that are defined by business processes and/ or used to refer
   * to it when a direct URL reference to the resource itself is not
   * appropriate.
   */
  identifier?: Identifier[];

  /**
   * Appointment that this response is replying to.
   */
  appointment: Reference<Appointment>;

  /**
   * Date/Time that the appointment is to take place, or requested new
   * start time.
   */
  start?: string;

  /**
   * This may be either the same as the appointment request to confirm the
   * details of the appointment, or alternately a new time to request a
   * re-negotiation of the end time.
   */
  end?: string;

  /**
   * Role of participant in the appointment.
   */
  participantType?: CodeableConcept[];

  /**
   * A Person, Location, HealthcareService, or Device that is participating
   * in the appointment.
   */
  actor?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Device
    | HealthcareService
    | Location
  >;

  /**
   * Participation status of the participant. When the status is declined
   * or tentative if the start/end times are different to the appointment,
   * then these times should be interpreted as a requested time change.
   * When the status is accepted, the times can either be the time of the
   * appointment (as a confirmation of the time) or can be empty.
   */
  participantStatus: 'accepted' | 'declined' | 'tentative' | 'needs-action';

  /**
   * Additional comments about the appointment.
   */
  comment?: string;
}