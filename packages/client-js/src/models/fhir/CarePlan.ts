import type { Annotation } from "./Annotation";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { Goal } from "./Goal";
import type { Group } from "./Group";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { Timing } from "./Timing";

export declare class CarePlanActivity {
  outcomeCodeableConcept?: CodeableConcept[];
  outcomeReference?: Reference<Resource>[];
  detail?: {
    /** Ben is great
     */
    kind?: string;
    instantiatesCanonical?: string[]; // TODO: Fix
    instantiatesUri?: string[];
    code?: CodeableConcept;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference<Resource>[];
    goal?: Reference<Goal>[];
    status: string;
    statusReason?: CodeableConcept;
    doNotPerform?: boolean;
    scheduledTiming?: Timing;
    scheduledPeriod?: Period;
    scheduledString?: string;
    location?: Reference<Location>;
    performer?: Reference<
      | Practitioner
      | PractitionerRole
      | Organization
      | RelatedPerson
      | Patient
      | CareTeam
      | HealthcareService
      | Device
    >[];

    productCodeableConcept?: CodeableConcept;
    productReference?: Reference<Resource>;

    dailyAmount?: Quantity;
    quantity?: Quantity;
    description?: string;
  };
}

export declare class CarePlan extends DomainResource {
  resourceType: "CarePlan";
  identifier?: Identifier[];
  instantiatesCanonical?: string[]; // TODO: Fix
  instantiatesUri?: string[];
  basedOn?: Reference<CarePlan>[];
  replaces?: Reference<CarePlan>[];
  partOf?: Reference<CarePlan>[];
  status: string;
  intent: string;
  category?: CodeableConcept[];
  title?: string;
  description?: string;
  subject: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;
  period?: Period;
  created?: string;
  author?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | Device
    | RelatedPerson
    | Organization
    | CareTeam
  >;
  contributor?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | Device
    | RelatedPerson
    | Organization
    | CareTeam
  >[];
  careTeam?: Reference<CareTeam>[];
  addresses?: Reference<Condition>[];
  supportingInfo?: Reference<Resource>[];
  goal?: Reference<Goal>[];

  activity?: CarePlanActivity[];
  note?: Annotation[];
}
