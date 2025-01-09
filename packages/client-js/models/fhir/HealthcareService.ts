import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { Endpoint } from "./Endpoint";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class HealthcareService extends DomainResource {
  resourceType: "HealthcareService";

  identifier?: Identifier[];
  active?: boolean;
  providedBy?: Reference<Organization>;
  category?: CodeableConcept[];
  type?: CodeableConcept[];
  specialty?: CodeableConcept[];
  location?: Reference<Location>[];
  name?: string;
  comment?: string;
  extraDetails?: string;
  photo?: Attachment;
  telecom?: ContactPoint[];
  coverageArea?: Reference<Location>[];
  serviceProvisionCode?: CodeableConcept[];
  eligibility: {
    code?: CodeableConcept;
    comment?: string;
  }[];
  program?: CodeableConcept[];
  characteristic?: CodeableConcept[];
  referralMethod?: CodeableConcept[];
  appointmentRequired?: boolean;

  availableTime?: {
    daysOfWeek: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[];
    allDay?: boolean;
    availableStartTime?: string;
    availableEndTime?: string;
  }[];

  notAvailable?: {
    description: string;
    during?: Period;
  }[];
  availabilityExceptions?: string;
  endpoint?: Reference<Endpoint>[];
}
