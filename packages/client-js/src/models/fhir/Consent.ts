import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { Device } from "./Device";
import type { Group } from "./Group";
import type { CareTeam } from "./CareTeam";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { RelatedPerson } from "./RelatedPerson";
import type { PractitionerRole } from "./PractitionerRole";
import type { DocumentReference } from "./DocumentReference";
import type { Contract } from "./Contract";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { DomainResource, Resource } from "./Resource";

export declare class ConsentPolicy {
  authority?: string;
  uri?: string;
}

export declare class ConsentProvisionData {
  meaning: "instance" | "related" | "dependents" | "authoredby";
  reference: Reference<Resource>;
}

export declare class ConsentProvisionActor {
  role: CodeableConcept;
  reference: Reference<Device | Group | CareTeam | Organization | Patient | Practitioner | RelatedPerson | PractitionerRole>;
}

export declare class ConsentProvision {
  type?: "deny" | "permit";
  period?: Period;
  actor?: ConsentProvisionActor[];
  action?: CodeableConcept[];
  securityLabel?: Coding[];
  purpose?: Coding[];
  class?: Coding[];
  code?: CodeableConcept[];
  dataPeriod?: Period;
  data?: ConsentProvisionData[];
  provision?: ConsentProvision[];
}

export declare class ConsentVerification {
  verified: boolean;
  verifiedWith?: Reference<Patient | RelatedPerson>;
  verificationDate?: string;
}

export declare class Consent extends DomainResource{
  resourceType: "Consent";
  identifier?: Identifier[];
  status: "draft" | "proposed" | "active" | "rejected" | "inactive" | "entered-in-error";
  scope: CodeableConcept;
  category: CodeableConcept[];
  patient?: Reference<Patient>;
  dateTime?: string;
  performer?: Reference<Organization | Patient | Practitioner | RelatedPerson | PractitionerRole>[];
  organization?: Reference<Organization>[];
  sourceAttachment?: Attachment;
  sourceReference?: Reference<Consent | DocumentReference | Contract | QuestionnaireResponse>;
  policy?: ConsentPolicy[];
  policyRule?: CodeableConcept;
  verification?: ConsentVerification[];
  provision?: ConsentProvision;
}
