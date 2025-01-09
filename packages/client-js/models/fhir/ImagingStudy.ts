import type { Annotation } from "./Annotation";
import type { Appointment } from "./Appointment";
import type { AppointmentResponse } from "./AppointmentResponse";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Endpoint } from "./Endpoint";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Media } from "./Media";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Specimen } from "./Specimen";
import type { Task } from "./Task";

export declare class ImagingStudy extends DomainResource {
  resourceType: "ImagingStudy";

  identifier?: Identifier[];
  status:
    | "registered"
    | "available"
    | "cancelled"
    | "entered-in-error"
    | "unknown";
  modality?: Coding[];
  subject: Reference<Patient | Group | Device>;
  encounter?: Reference<Encounter>;
  started?: string;
  basedOn?: Reference<
    CarePlan | ServiceRequest | Appointment | AppointmentResponse | Task
  >[];
  referrer?: Reference<Practitioner | PractitionerRole>;
  interpreter?: Reference<Practitioner | PractitionerRole>[];
  endpoint?: Reference<Endpoint>[];
  numberOfSeries?: number;
  numberOfInstances?: number;
  procedureReference?: Reference<Procedure>;
  procedureCode?: Coding[];
  location?: Reference<Location>;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Observation | Media | DiagnosticReport | DocumentReference
  >[];
  note?: Annotation[];
  description?: string;

  series: {
    uid: string;
    number?: number;
    modality: Coding;
    description?: string;
    numberOfInstances?: number;
    endpoint?: Reference<Endpoint>[];
    bodySite?: Coding;
    laterality?: Coding;
    specimen?: Reference<Specimen>[];
    started?: string;
    performer?: {
      function?: CodeableConcept;
      actor: Reference<
        | Practitioner
        | PractitionerRole
        | Organization
        | CareTeam
        | Patient
        | Device
        | RelatedPerson
      >;
    }[];
    instance?: {
      uid: string;
      sopClass: Coding;
      number?: number;
      title?: string;
    }[];
  }[];
}
