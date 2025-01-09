import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { DataRequirement } from "./DataRequirement";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { ParameterDefinition } from "./ParameterDefinition";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

export declare class Library extends DomainResource{
  resourceType: 'Library';
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  experimental?: boolean;
  type: CodeableConcept;
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
  parameter?: ParameterDefinition[];
  dataRequirement?: DataRequirement[];
  content?: Attachment[];
}
