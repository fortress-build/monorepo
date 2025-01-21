import type { Identifier } from './Identifier';
import type { Organization } from './Organization';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Reference } from './Reference';
import type { DomainResource } from './Resource';
import type { EnrollmentRequest } from './EnrollmentRequest';

export declare class EnrollmentResponse extends DomainResource{
  resourceType: 'EnrollmentResponse';
  identifier?: Identifier[];
  status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  request?: Reference<EnrollmentRequest>;
  outcome?: 'queued' | 'complete' | 'error' | 'partial';
  disposition?: string;
  created?: string;
  organization?: Reference<Organization>;
  requestProvider?: Reference<Practitioner | PractitionerRole | Organization>;
}
