import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { PlanDefinition } from "./PlanDefinition";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource } from "./Resource";

export declare class ResearchStudy extends DomainResource {
  resourceType: "ResearchStudy";

  identifier?: Identifier[];
  title?: string;
  protocol?: Reference<PlanDefinition>[];
  partOf?: Reference<ResearchStudy>[];
  status:
    | "active"
    | "administratively-completed"
    | "approved"
    | "closed-to-accrual"
    | "closed-to-accrual-and-intervention"
    | "completed"
    | "disapproved"
    | "in-review"
    | "temporarily-closed-to-accrual"
    | "temporarily-closed-to-accrual-and-intervention"
    | "withdrawn";
  primaryPurposeType?: CodeableConcept;
  phase?: CodeableConcept;
  category?: CodeableConcept[];
  focus?: CodeableConcept[];
  condition?: CodeableConcept[];
  contact?: ContactDetail[];
  relatedArtifact?: RelatedArtifact[];
  keyword?: CodeableConcept[];
  location?: CodeableConcept[];
  description?: string;
  enrollment?: Reference<Group>[];
  period?: Period;
  sponsor?: Reference<Organization>;
  principalInvestigator?: Reference<Practitioner | PractitionerRole>;
  site?: Reference<Location>[];
  reasonStopped?: CodeableConcept;
  note?: Annotation[];
  arm?: {
    name: string;
    type?: CodeableConcept;
    description?: string;
  }[];
  objective?: {
    name?: string;
    type?: CodeableConcept;
  }[];
}
