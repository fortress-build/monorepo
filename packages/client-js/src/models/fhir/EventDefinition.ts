import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource } from "./Resource";
import type { TriggerDefinition } from "./TriggerDefinition";
import type { UsageContext } from "./UsageContext";

export declare class EventDefinition extends DomainResource {
  resourceType: 'EventDefinition';
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
  trigger: TriggerDefinition[];
}
