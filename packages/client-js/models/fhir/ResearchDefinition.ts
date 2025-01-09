import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { ResearchElementDefinition } from "./ResearchElementDefinition";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

type Status = "draft" | "active" | "retired" | "unknown";

export declare class ResearchDefinition extends DomainResource{
  resourceType: "ResearchDefinition";
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  shortTitle?: string;
  subtitle?: string;
  status: Status;
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
  library?: (`canonical<Library>`)[];
  population: Reference<ResearchElementDefinition>;
  exposure?: Reference<ResearchElementDefinition>;
  exposureAlternative?: Reference<ResearchElementDefinition>;
  outcome?: Reference<ResearchElementDefinition>;
}