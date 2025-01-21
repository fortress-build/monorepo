import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { EvidenceVariable } from "./EvidenceVariable";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

interface RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
  type?: CodeableConcept;
  rating?: CodeableConcept[];
  note?: Annotation[];
}

interface RiskEvidenceSynthesisCertainty {
  rating?: CodeableConcept[];
  note?: Annotation[];
  certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponent[];
}

interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
  type?: CodeableConcept;
  level?: number;
  from?: number;
  to?: number;
}

interface RiskEvidenceSynthesisRiskEstimate {
  description?: string;
  type?: CodeableConcept;
  value?: number;
  unitOfMeasure?: CodeableConcept;
  denominatorCount?: number;
  numeratorCount?: number;
  precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];
}

interface RiskEvidenceSynthesisSampleSize {
  description?: string;
  numberOfStudies?: number;
  numberOfParticipants?: number;
}

export declare class RiskEvidenceSynthesis extends DomainResource{
  resourceType: 'RiskEvidenceSynthesis';
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
  exposure?: Reference<EvidenceVariable>;
  outcome: Reference<EvidenceVariable>;
  sampleSize?: RiskEvidenceSynthesisSampleSize;
  riskEstimate?: RiskEvidenceSynthesisRiskEstimate;
  certainty?: RiskEvidenceSynthesisCertainty[];
}
