import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import { DomainResource } from "./Resource";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Ratio } from "./Ratio";
import type { Duration } from "./Duration";
import type { Patient } from "./Patient";
import type { Group } from "./Group";
import type { Organization } from "./Organization";
import type { RelatedPerson } from "./RelatedPerson";
import type { PractitionerRole } from "./PractitionerRole";
import type { Practitioner } from "./Practitioner";
import type { NutritionOrder } from "./NutritionOrder";
import type { ServiceRequest } from "./ServiceRequest";
import type { RiskAssessment } from "./RiskAssessment";
import type { MedicationStatement } from "./MedicationStatement";
import type { Observation } from "./Observation";
import type { Condition } from "./Condition";

export declare class Goal extends DomainResource {
  resourceType: "Goal";

  identifier?: Identifier[];
  lifecycleStatus:
    | "proposed"
    | "planned"
    | "accepted"
    | "active"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "entered-in-error"
    | "rejected";
  achievementStatus?: CodeableConcept;
  category?: CodeableConcept[];
  priority?: CodeableConcept;
  description: CodeableConcept;
  subject: Reference<Patient | Group | Organization>;

  startDate?: string;
  startCodeableConcept?: CodeableConcept;

  target?: {
    measure?: CodeableConcept;

    detailQuantity?: Quantity;
    detailRange?: Range;
    detailCodeableConcept?: CodeableConcept;
    detailString?: string;
    detailBoolean?: boolean;
    detailInteger?: number;
    detailRatio?: Ratio;

    dueDate?: string;
    dueDuration?: Duration;
  }[];

  statusDate?: string;
  statusReason?: string;

  expressedBy?: Reference<
    Patient | Practitioner | PractitionerRole | RelatedPerson
  >;
  addresses?: Reference<
    | Condition
    | Observation
    | MedicationStatement
    | NutritionOrder
    | ServiceRequest
    | RiskAssessment
  >[];
  note?: Annotation[];
  outcomeCode?: CodeableConcept[];
  outcomeReference?: Reference<Observation>[];
}
