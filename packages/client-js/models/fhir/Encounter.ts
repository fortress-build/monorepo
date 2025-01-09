import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Condition } from "./Condition";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { Location } from "./Location";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { ServiceRequest } from "./ServiceRequest";
import type { Patient } from "./Patient";
import type { Group } from "./Group";
import type { Appointment } from "./Appointment";
import type { Duration } from "./Duration";
import type { Observation } from "./Observation";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { Account } from "./Account";
import type { DomainResource } from "./Resource";

export type EncounterStatus =
  | "planned"
  | "arrived"
  | "triaged"
  | "in-progress"
  | "onleave"
  | "finished"
  | "cancelled";

export type LocationStatus = "planned" | "active" | "reserved" | "completed";

export type EncounterStatusHistory = {
  status: EncounterStatus;
  period: Period;
};

export type EncounterClassHistory = {
  class: Coding;
  period: Period;
};

export type EncounterParticipant = {
  type?: CodeableConcept[];
  period?: Period;
  individual?: Reference<Practitioner | PractitionerRole | RelatedPerson>;
};

export type EncounterDiagnosis = {
  condition: Reference<Condition | Procedure>;
  use?: CodeableConcept;
  rank?: number;
};

export type EncounterHospitalization = {
  preAdmissionIdentifier?: Identifier;
  origin?: Reference<Location | Organization>;
  admitSource?: CodeableConcept;
  reAdmission?: CodeableConcept;
  dietPreference?: CodeableConcept[];
  specialCourtesy?: CodeableConcept[];
  specialArrangement?: CodeableConcept[];
  destination?: Reference<Location | Organization>;
  dischargeDisposition?: CodeableConcept;
};

export type EncounterLocation = {
  location: Reference<Location>;
  status?: LocationStatus;
  physicalType?: CodeableConcept;
  period?: Period;
};

export interface Encounter extends DomainResource {
  resourceType: "Encounter";

  identifier?: Identifier[];
  status: EncounterStatus;
  statusHistory?: EncounterStatusHistory[];
  class: Coding;
  classHistory?: EncounterClassHistory[];
  type?: CodeableConcept[];
  serviceType?: CodeableConcept;
  priority?: CodeableConcept;
  subject?: Reference<Patient | Group>;
  episodeOfCare?: Reference<EpisodeOfCare>[];
  basedOn?: Reference<ServiceRequest>[];
  participant?: EncounterParticipant[];
  appointment?: Reference<Appointment>[];
  period?: Period;
  length?: Duration;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Procedure | Observation | ImmunizationRecommendation
  >[];
  diagnosis?: EncounterDiagnosis[];
  account?: Reference<Account>[];
  hospitalization?: EncounterHospitalization;
  location?: EncounterLocation[];
  serviceProvider?: Reference<Organization>;
  partOf?: Reference<Encounter>;
}
