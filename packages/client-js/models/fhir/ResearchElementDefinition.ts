import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { DataRequirement } from "./DataRequirement";
import type { Duration } from "./Duration";
import type { Expression } from "./Expression";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource } from "./Resource";
import type { Timing } from "./Timing";
import type { UsageContext } from "./UsageContext";

type GroupMeasure = 'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';

export declare class Characteristic {
  definitionCodeableConcept?: CodeableConcept;
  definitionCanonical?: string;
  definitionExpression?: Expression;
  definitionDataRequirement?: DataRequirement;
  usageContext?: UsageContext[];
  exclude?: boolean;
  unitOfMeasure?: CodeableConcept;
  studyEffectiveDescription?: string;
  studyEffectiveDateTime?: string;
  studyEffectivePeriod?: Period;
  studyEffectiveDuration?: Duration;
  studyEffectiveTiming?: Timing;
  studyEffectiveTimeFromStart?: Duration;
  studyEffectiveGroupMeasure?: GroupMeasure;
  participantEffectiveDescription?: string;
  participantEffectiveDateTime?: string;
  participantEffectivePeriod?: Period;
  participantEffectiveDuration?: Duration;
  participantEffectiveTiming?: Timing;
  participantEffectiveTimeFromStart?: Duration;
  participantEffectiveGroupMeasure?: GroupMeasure;
}

export declare class ResearchElementDefinition extends DomainResource{
  resourceType: 'ResearchElementDefinition';
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  shortTitle?: string;
  subtitle?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  experimental?: boolean;
  subjectCodeableConcept?: CodeableConcept;
  subjectReference?: Reference<Group>;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  comment?: string[];
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  usage?: string;
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
  library?: string[];
  type: 'population' | 'exposure' | 'outcome';
  variableType?: 'dichotomous' | 'continuous' | 'descriptive';
  characteristic: Characteristic[];
}
