import type { Identifier } from "./Identifier";
import type { ContactDetail } from "./ContactDetail";
import type { CodeableConcept } from "./CodeableConcept";
import type { Period } from "./Period";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { Annotation } from "./Annotation";
import type { UsageContext } from "./UsageContext";
import type { Reference } from "./Reference";
import type { Expression } from "./Expression";
import type { DomainResource } from "./Resource";
import type { Duration } from "./Duration";
import type { Timing } from "./Timing";
import type { DataRequirement } from "./DataRequirement";
import type { TriggerDefinition } from "./TriggerDefinition";
import type { Group } from "./Group";

export declare class EvidenceVariableCharacteristic {
  description?: string;
  definitionReference?: Reference<Group>;
  definitionCanonical?: string;
  definitionCodeableConcept?: CodeableConcept;
  definitionExpression?: Expression;
  definitionDataRequirement?: DataRequirement;
  definitionTriggerDefinition?: TriggerDefinition;
  usageContext?: UsageContext[];
  exclude?: boolean;
  participantEffectiveDateTime?: string;
  participantEffectivePeriod?: Period;
  participantEffectiveDuration?: Duration;
  participantEffectiveTiming?: Timing;
  timeFromStart?: Duration;
  groupMeasure?: 'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';
}

export declare class EvidenceVariable extends DomainResource {
  resourceType: 'EvidenceVariable';
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  shortTitle?: string;
  subtitle?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  note?: Annotation[];
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  copyright?: string;
  approvalDate?: string;
  lastReviewDate?: string;
  effectivePeriod?: Period;
  topic?: CodeableConcept[];
  author?: ContactDetail[];
  editor?: ContactDetail[];
  reviewer?: ContactDetail[];
  endorser?: ContactDetail[];
  relatedArtifact?: RelatedArtifact[];
  type?: 'dichotomous' | 'continuous' | 'descriptive';
  characteristic: EvidenceVariableCharacteristic[];
}
