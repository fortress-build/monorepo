import type { Account } from "./Account";
import type { ActivityDefinition } from "./ActivityDefinition";
import type { Location } from "./Location";
import type { Binary } from "./Binary";
import type { BodyStructure } from "./BodyStructure";
import type { CarePlan } from "./CarePlan";
import type { Condition } from "./Condition";
import type { Observation } from "./Observation";
import type { Procedure } from "./Procedure";
import type { Meta } from "./Meta";
import type { Narrative } from "./Narrative";
import type { Extension } from "./Extension";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { Flag } from "./Flag";
import type { PractitionerRole } from "./PractitionerRole";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PlanDefinition } from "./PlanDefinition";
import type { Organization } from "./Organization";
import type { Medication } from "./Medication";
import type { Group } from "./Group";
import type { Device } from "./Device";
import type { DeviceDefinition } from "./DeviceDefinition";
import type { Endpoint } from "./Endpoint";
import type { Specimen } from "./Specimen";
import type { SpecimenDefinition } from "./SpecimenDefinition";
import type { List } from "./List";
import type { Bundle } from "./Bundle";
import type { InsurancePlan } from "./InsurancePlan";
import type { ResearchStudy } from "./ResearchStudy";
import type { HealthcareService } from "./HealthcareService";
import type { Immunization } from "./Immunization";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { ImagingStudy } from "./ImagingStudy";
import type { Substance } from "./Substance";
import type { Questionnaire } from "./Questionnaire";
import type { ImmunizationEvaluation } from "./ImmunizationEvalution";
import type { Encounter } from "./Encounter";
import type { Appointment } from "./Appointment";
import type { Task } from "./Task";
import type { ServiceRequest } from "./ServiceRequest";
import type { Slot } from "./Slot";
import type { Schedule } from "./Schedule";
import type { ClaimResponse } from "./ClaimResponse";
import type { Coverage } from "./Coverage";
import type { Claim } from "./Claim";
import type { Provenance } from "./Provenance";
import type { Contract } from "./Contract";
import type { DetectedIssue } from "./DetectedIssue";
import type { MedicationRequest } from "./MedicationRequest";
import type { Communication } from "./Communication";
import type { CommunicationRequest } from "./CommunicationRequest";
import type { VisionPrescription } from "./VisionPrescription";
import type { DeviceRequest } from "./DeviceRequest";
import type { Parameters } from "./Parameters";

export declare abstract class Resource {
  abstract resourceType: string;

  id?: string;
  meta?: Meta;
  implicitRules?: string;
  language?: string;
}

export declare abstract class DomainResource extends Resource {
  text?: Narrative;
  contained?: Resource[];
  extension?: Extension[];
  modifierExtension?: Extension[];
}

export type AnyResource =
  | Account
  | ActivityDefinition
  | Binary
  | BodyStructure
  | CarePlan
  | Condition
  | DiagnosticReport
  | DocumentReference
  | Flag
  | Observation
  | Procedure
  | EpisodeOfCare
  | Device
  | DeviceDefinition
  | Group
  | Location
  | Medication
  | Organization
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Patient
  | Endpoint
  | Specimen
  | SpecimenDefinition
  | List
  | Bundle
  | HealthcareService
  | InsurancePlan
  | ResearchStudy
  | Immunization
  | ImmunizationRecommendation
  | ImmunizationEvaluation
  | ImagingStudy
  | Questionnaire
  | Substance
  | Encounter
  | Appointment
  | Task
  | ServiceRequest
  | Schedule
  | Slot
  | Coverage
  | ClaimResponse
  | Claim
  | Provenance
  | Contract
  | Condition
  | DeviceRequest
  | MedicationRequest
  | VisionPrescription
  | CommunicationRequest
  | Communication
  | DetectedIssue
  | Parameters;

export type ResourceType = AnyResource["resourceType"];

// Binary.Read (Clinical Notes) (R4)
// Binary.Read (Radiology Results) (R4)
// BodyStructure.Read (Organ) (R4)
// CarePlan.Read (Longitudinal) (R4)
// Condition.Read (Health Concern) (R4)
// Condition.Read (Medical History) (R4)
// Condition.Read (Problens) (R4)
// DiagnosticReport.Read (Results) (R4)
// DocumentReference.Read (Clinical Notes) (R4)
// Flag.Read (Infection) (R4)
// Flag.Read (Patient FYI) (R4)
// List.Read (Allergies) (R4)
// List.Read (Family History) (R4)
// List.Read (Immunizations) (R4)
// List.Read (Medications) (R4)
// List.Read (Problems) (R4)
// Observation.Read (Core Characteristics) (R4)
// Observation.Read (Labs) (R4) - may need to use it for some labs/results
// Observation.Read (Vitals) (R4)
// Procedure.Read (Surgical History) (R4) (edited)
