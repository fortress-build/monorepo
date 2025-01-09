import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { CodeableConcept } from "./CodeableConcept";
import type { DomainResource } from "./Resource";
import type { Practitioner } from "./Practitioner";
import type { RelatedPerson } from "./RelatedPerson";
import type { Observation } from "./Observation";
import type { Patient } from "./Patient";
import type { PractitionerRole } from "./PractitionerRole";
import type { Condition } from "./Condition";
import type { AllergyIntolerance } from "./AllergyIntolerance";
import type { FamilyMemberHistory } from "./FamilyMemberHistory";
import type { Immunization } from "./Immunization";
import type { DocumentReference } from "./DocumentReference";
import type { ResearchStudy } from "./ResearchStudy";
import type { Group } from "./Group";
import type { Encounter } from "./Encounter";
import type { Device } from "./Device";
import type { Procedure } from "./Procedure";
import type { Media } from "./Media";
import type { Substance } from "./Substance";
import type { Medication } from "./Medication";
import type { MedicationAdministration } from "./MedicationAdministration";
import type { MedicationStatement } from "./MedicationStatement";


export declare class SuspectEntity{
  instance: Reference<Immunization|Procedure|Substance|Medication|MedicationAdministration|MedicationStatement|Device>;
  causality: Causality;
}

export declare class Causality {
  assessment?: CodeableConcept;
  productRelatedness?: string;
  author?: Reference<Practitioner|PractitionerRole>
  method?: CodeableConcept;
}

export declare class AdverseEvent extends DomainResource  {
  resourceType: "AdverseEvent";
  identifier?: Identifier;
  actuality: string;
  category: CodeableConcept[];
  event?: CodeableConcept;
  subject: Reference<Patient|Group|Practitioner|RelatedPerson>;
  encounter?: Reference<Encounter>;
  date?: string;
  recordedDate?: string;
  resultingCondition?: Reference<Condition>[];
  location?: Reference<Location>;
  seriousness: CodeableConcept;
  severity: CodeableConcept;
  outcome: CodeableConcept;
  recorder: Reference<Patient|Practitioner|PractitionerRole|RelatedPerson>;
  contributor: Reference<Practitioner|PractitionerRole|Device>;
  suspectEntity: SuspectEntity;
  subjectMedicalHistory?: Reference<Condition|Observation|AllergyIntolerance|FamilyMemberHistory|Immunization|Procedure|Media|DocumentReference>[];
  referenceDocument?: Reference<DocumentReference>;
  study?: Reference<ResearchStudy>;
};
