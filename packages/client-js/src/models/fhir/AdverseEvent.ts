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


export type SuspectEntity = {
  /**
   * Identifies the actual instance of what caused the adverse event.  May
   * be a substance, medication, medication administration, medication
   * statement or a device.
   */
  instance: Reference<
    | Immunization
    | Procedure
    | Substance
    | Medication
    | MedicationAdministration
    | MedicationStatement
    | Device
  >;
  /**
   * Information on the possible cause of the event.
   */
  causality: Causality;
};

export type Causality = {
  assessment?: CodeableConcept;
  productRelatedness?: string;
  author?: Reference<Practitioner|PractitionerRole>
  method?: CodeableConcept;
}

/**
 * Actual or  potential/avoided event causing unintended physical injury
 * resulting from or contributed to by medical care, a research study or
 * other healthcare setting factors that requires additional monitoring,
 * treatment, or hospitalization, or that results in death.
 */
export declare class AdverseEvent extends DomainResource {
  resourceType: 'AdverseEvent';
  /**
   * Business identifiers assigned to this adverse event by the performer
   * or other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier;

  /**
   * Whether the event actually happened, or just had the potential to.
   * Note that this is independent of whether anyone was affected or harmed
   * or how severely.
   */
  actuality: 'actual' | 'potential';

  /**
   * The overall type of event, intended for search and filtering purposes.
   */
  category?: CodeableConcept[];

  /**
   * This element defines the specific type of event that occurred or that
   * was prevented from occurring.
   */
  event?: CodeableConcept;

  /**
   * This subject or group impacted by the event.
   */
  subject: Reference<Patient | Group | Practitioner | RelatedPerson>;

  /**
   * The Encounter during which AdverseEvent was created or to which the
   * creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * The date (and perhaps time) when the adverse event occurred.
   */
  date?: string;

  /**
   * Estimated or actual date the AdverseEvent began, in the opinion of the
   * reporter.
   */
  detected?: string;

  /**
   * The date on which the existence of the AdverseEvent was first
   * recorded.
   */
  recordedDate?: string;

  /**
   * Includes information about the reaction that occurred as a result of
   * exposure to a substance (for example, a drug or a chemical).
   */
  resultingCondition?: Reference<Condition>[];

  /**
   * The information about where the adverse event occurred.
   */
  location?: Reference<Location>;

  /**
   * Assessment whether this event was of real importance.
   */
  seriousness?: CodeableConcept;

  /**
   * Describes the severity of the adverse event, in relation to the
   * subject. Contrast to AdverseEvent.seriousness - a severe rash might
   * not be serious, but a mild heart problem is.
   */
  severity?: CodeableConcept;

  /**
   * Describes the type of outcome from the adverse event.
   */
  outcome?: CodeableConcept;

  /**
   * Information on who recorded the adverse event.  May be the patient or
   * a practitioner.
   */
  recorder?: Reference<
    Patient | Practitioner | PractitionerRole | RelatedPerson
  >;

  /**
   * Parties that may or should contribute or have contributed information
   * to the adverse event, which can consist of one or more activities.
   * Such information includes information leading to the decision to
   * perform the activity and how to perform the activity (e.g.
   * consultant), information that the activity itself seeks to reveal
   * (e.g. informant of clinical history), or information about what
   * activity was performed (e.g. informant witness).
   */
  contributor?: Reference<Practitioner | PractitionerRole | Device>[];

  /**
   * Describes the entity that is suspected to have caused the adverse
   * event.
   */
  suspectEntity?: SuspectEntity[];

  /**
   * AdverseEvent.subjectMedicalHistory.
   */
  subjectMedicalHistory?: Reference<
    | Condition
    | Observation
    | AllergyIntolerance
    | FamilyMemberHistory
    | Immunization
    | Procedure
    | Media
    | DocumentReference
  >[];

  /**
   * AdverseEvent.referenceDocument.
   */
  referenceDocument?: Reference<DocumentReference>[];

  /**
   * AdverseEvent.study.
   */
  study?: Reference<ResearchStudy>[];
}