import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Duration } from "./Duration";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { SimpleQuantity } from "./SimpleQuantity";
import type { Substance } from "./Substance";

export declare class Specimen extends DomainResource {
  resourceType: "Specimen";

  identifier?: Identifier[];
  accessionIdentifier?: Identifier;
  status: "available" | "unavailable" | "unsatisfactory" | "entered-in-error";
  type?: CodeableConcept;
  subject?: Reference<Patient | Group | Device | Substance | Location>;
  receivedTime?: string;
  parent?: Reference<Specimen>[];
  request?: Reference<ServiceRequest>[];
  collection?: {
    collector?: Reference<Practitioner | PractitionerRole>;

    collectedDateTime?: string;
    collectedPeriod?: Period;

    duration?: Duration;
    quantity?: Quantity;
    method?: CodeableConcept;
    bodySite?: CodeableConcept;

    fastingStatusCodeableConcept?: CodeableConcept;
    fastingStatusDuration?: Duration;
  };
  processing?: {
    description?: string;
    procedure?: CodeableConcept;
    additive?: Reference<Substance>[];

    timeDateTime?: string;
    timePeriod?: Period;
  }[];
  container?: {
    identifier?: Identifier[];
    description?: string;
    type?: CodeableConcept;
    capacity?: SimpleQuantity;
    specimenQuantity?: SimpleQuantity;

    additiveCodeableConcept?: CodeableConcept;
    additiveReference?: Reference<Substance>;
  }[];
  condition?: CodeableConcept[];
  note?: Annotation[];
}
