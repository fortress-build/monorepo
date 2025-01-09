import type { Coding } from "./Coding";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import { DomainResource, type Resource } from "./Resource";
import type { PractitionerRole } from "./PractitionerRole";
import type { Practitioner } from "./Practitioner";
import type { Organization } from "./Organization";
import type { RelatedPerson } from "./RelatedPerson";
import type { Device } from "./Device";
import type { Patient } from "./Patient";

export declare class AuditEventAgentNetwork {
  address?: string;
  type?: '1' | '2' | '3' | '4' | '5';
}

export declare class AuditEventEntityDetail {
  type: string;
  valueString?: string;
  valueBase64Binary?: string;
}

export declare class AuditEventEntity {
  what?: Reference<Resource>;
  type?: Coding;
  role?: Coding;
  lifecycle?: Coding;
  securityLabel?: Coding[];
  name?: string;
  description?: string;
  query?: string;
  detail?: AuditEventEntityDetail[];
}

export declare class AuditEventAgent {
  type?: CodeableConcept;
  role?: CodeableConcept[];
  who?: Reference<PractitionerRole|Practitioner|Organization|Device|Patient| RelatedPerson>;
  altId?: string;
  name?: string;
  requestor: boolean;
  location?: Reference<Location>;
  policy?: string[];
  media?: Coding;
  network?: AuditEventAgentNetwork;
  purposeOfUse?: CodeableConcept[];
}

export declare class AuditEventSource {
  site?: string;
  observer: Reference<PractitionerRole|Practitioner|Organization|Device|Patient| RelatedPerson>;;
  type?: Coding[];
}

export declare class AuditEvent extends DomainResource{
  resourceType: 'AuditEvent';
  type: Coding;
  subtype?: Coding[];
  action?: 'C' | 'R' | 'U' | 'D' | 'E';
  period?: Period;
  recorded: string;
  outcome?: '0' | '4' | '8' | '12';
  outcomeDesc?: string;
  purposeOfEvent?: CodeableConcept[];
  agent: AuditEventAgent[];
  source: AuditEventSource;
  entity?: AuditEventEntity[];
}
