import type { Consent } from "./Consent";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { ResearchStudy } from "./ResearchStudy";
import type { DomainResource } from "./Resource";

export type ResearchSubjectStatus =
  | 'candidate'
  | 'eligible'
  | 'follow-up'
  | 'ineligible'
  | 'not-registered'
  | 'off-study'
  | 'on-study'
  | 'on-study-intervention'
  | 'on-study-observation'
  | 'pending-on-study'
  | 'potential-candidate'
  | 'screening'
  | 'withdrawn';

export declare class ResearchSubject extends DomainResource{
  resourceType: 'ResearchSubject';
  identifier?: Identifier[];
  status: ResearchSubjectStatus;
  period?: Period;
  study: Reference<ResearchStudy>;
  individual: Reference<Patient>;
  assignedArm?: string;
  actualArm?: string;
  consent?: Reference<Consent>;
}
