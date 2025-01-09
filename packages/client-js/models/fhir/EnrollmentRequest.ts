import type { Coverage } from "./Coverage";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class EnrollmentRequest extends DomainResource{
  resourceType: 'EnrollmentRequest';
  identifier?: Identifier[];
  status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  created?: string;
  insurer?: Reference<Organization>;
  provider?: Reference<Practitioner|PractitionerRole|Organization>;
  candidate?: Reference<Patient>;
  coverage?: Reference<Coverage>;
}
