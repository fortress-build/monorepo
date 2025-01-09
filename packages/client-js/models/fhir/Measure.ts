import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Expression } from "./Expression";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

// Nested types first
export declare class MeasureGroupPopulation {
  code?: CodeableConcept;
  description?: string;
  criteria: Expression;
}

export declare class MeasureGroupStratifierComponent {
  code?: CodeableConcept;
  description?: string;
  criteria: Expression;
}

export declare class MeasureGroupStratifier {
  code?: CodeableConcept;
  description?: string;
  criteria?: Expression;
  component?: MeasureGroupStratifierComponent[];
}

export declare class MeasureGroup {
  code?: CodeableConcept;
  description?: string;
  population?: MeasureGroupPopulation[];
  stratifier?: MeasureGroupStratifier[];
}

export declare class MeasureSupplementalData {
  code?: CodeableConcept;
  usage?: CodeableConcept[];
  description?: string;
  criteria: Expression;
}

// Main Measure class
export declare class Measure extends DomainResource{
  resourceType: 'Measure';
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  experimental?: boolean;
  subjectCodeableConcept?: CodeableConcept;
  subjectReference?: Reference<Group>;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
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
  disclaimer?: string;
  scoring?: CodeableConcept;
  compositeScoring?: CodeableConcept;
  type?: CodeableConcept[];
  riskAdjustment?: string;
  rateAggregation?: string;
  rationale?: string;
  clinicalRecommendationStatement?: string;
  improvementNotation?: CodeableConcept;
  definition?: string[];
  guidance?: string;
  group?: MeasureGroup[];
  supplementalData?: MeasureSupplementalData[];
}
