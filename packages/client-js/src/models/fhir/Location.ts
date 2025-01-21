import type { Address } from "./Address";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import type { Endpoint } from "./Endpoint";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class Location extends DomainResource {
  resourceType: "Location";

  identifier?: Identifier[];
  status?: "active" | "suspended" | "inactive";
  operationalStatus?: Coding;
  name?: string;
  alias?: string[];
  description?: string;
  mode?: "instance" | "kind";
  type?: CodeableConcept[];
  telecom?: ContactPoint[];
  address?: Address;
  physicalType?: CodeableConcept;
  position?: {
    longitude: number;
    latitude: number;
    altitude?: number;
  };
  managingOrganization?: Reference<Organization>;
  partOf?: Reference<Location>;
  hoursOfOperation?: {
    daysOfWeek?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[];
    allDay?: boolean;
    openingTime?: string;
    closingTime?: string;
  }[];
  availabilityExceptions?: string;
  endpoint?: Reference<Endpoint>[];
}
