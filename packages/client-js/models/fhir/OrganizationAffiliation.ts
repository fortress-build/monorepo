import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { Endpoint } from "./Endpoint";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class OrganizationAffiliation extends DomainResource {
  resourceType: 'OrganizationAffiliation';
  identifier?: Identifier[];
  active?: boolean;
  period?: Period;
  organization?: Reference<Organization>;
  participatingOrganization?: Reference<Organization>;
  network?: Reference<Organization>[];
  code?: CodeableConcept[];
  specialty?: CodeableConcept[];
  location?: Reference<Location>[];
  healthcareService?: Reference<HealthcareService>[];
  telecom?: ContactPoint[];
  endpoint?: Reference<Endpoint>[];
}
