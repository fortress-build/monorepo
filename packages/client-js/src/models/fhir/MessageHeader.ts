import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";
import type { Device } from "./Device";
import type { Organization } from "./Organization";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { OperationOutcome } from "./OperationOutcome";

export declare class MessageHeaderDestination {
  name?: string;
  target?: Reference<Device>;
  endpoint: string;
  receiver?: Reference<Practitioner | PractitionerRole | Organization>;
}

export declare class MessageHeaderResponse {
  identifier: string;
  code: 'ok' | 'transient-error' | 'fatal-error';
  details?: Reference<OperationOutcome>;
}

export declare class MessageHeaderSource {
  name?: string;
  software?: string;
  version?: string;
  contact?: ContactPoint;
  endpoint: string;
}

export declare class MessageHeader extends DomainResource {
  resourceType: 'MessageHeader';
  eventCoding?: Coding;
  eventUri?: string;
  destination?: MessageHeaderDestination[];
  sender?: Reference<Practitioner | PractitionerRole | Organization>;
  enterer?: Reference<Practitioner | PractitionerRole>;
  author?: Reference<Practitioner | PractitionerRole>;
  source: MessageHeaderSource;
  responsible?: Reference<Practitioner | PractitionerRole | Organization>;
  reason?: CodeableConcept;
  response?: MessageHeaderResponse;
  focus?: Reference<Resource>[];
  definition?: string;
}
