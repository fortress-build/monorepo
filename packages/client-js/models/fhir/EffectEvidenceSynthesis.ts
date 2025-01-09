import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { UsageContext } from "./UsageContext";
import type { DomainResource } from "./Resource";
import type { EvidenceVariable } from "./EvidenceVariable";
import type { RiskEvidenceSynthesis } from "./RiskEvidenceSynthesis";

// Convert nested types first
export declare interface CertaintySubcomponent {
  type?: CodeableConcept;
  rating?: CodeableConcept[];
  note?: Annotation[];
}

export declare interface Certainty {
  rating?: CodeableConcept[];
  note?: Annotation[];
  certaintySubcomponent?: CertaintySubcomponent[];
}

export declare interface PrecisionEstimate {
  type?: CodeableConcept;
  level?: number;
  from?: number;
  to?: number;
}

export declare interface EffectEstimate {
  description?: string;
  type?: CodeableConcept;
  variantState?: CodeableConcept;
  value?: number;
  unitOfMeasure?: CodeableConcept;
  precisionEstimate?: PrecisionEstimate[];
}

export declare interface ResultsByExposure {
  description?: string;
  exposureState?: 'exposure' | 'exposure-alternative';
  variantState?: CodeableConcept;
  riskEvidenceSynthesis: Reference<RiskEvidenceSynthesis>;
}

export declare interface SampleSize {
  description?: string;
  numberOfStudies?: number;
  numberOfParticipants?: number;
}

// Main class
export declare class EffectEvidenceSynthesis extends DomainResource{
  resourceType: 'EffectEvidenceSynthesis';
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
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
  synthesisType?: CodeableConcept;
  studyType?: CodeableConcept;
  population: Reference<EvidenceVariable>;
  exposure: Reference<EvidenceVariable>;
  exposureAlternative: Reference<EvidenceVariable>;
  outcome: Reference<EvidenceVariable>;
  sampleSize?: SampleSize;
  resultsByExposure?: ResultsByExposure[];
  effectEstimate?: EffectEstimate[];
  certainty?: Certainty[];
}
