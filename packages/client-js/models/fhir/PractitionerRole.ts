import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { Endpoint } from "./Endpoint";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class PractitionerRole extends DomainResource {
  resourceType: "PractitionerRole";

  identifier?: Identifier[];
  active?: boolean;

  period?: Period;
  practitioner?: Reference<Practitioner>;
  organization?: Reference<Organization>;
  code?: CodeableConcept[];
  specialty?: CodeableConcept[];
  location?: Reference<Location>[];
  healthcareService?: Reference<HealthcareService>[];
  telecom?: ContactPoint[];
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
