import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Schedule } from "./Schedule";

export declare class Slot extends DomainResource {
  resourceType: "Slot";

  identifier?: Identifier[];
  serviceCategory?: CodeableConcept[];
  serviceType?: CodeableConcept[];
  specialty?: CodeableConcept[];
  appointmentType?: CodeableConcept;
  schedule: Reference<Schedule>;
  status:
    | "busy"
    | "free"
    | "busy-unavailable"
    | "busy-tentative"
    | "entered-in-error";
  start: string;
  end: string;
  overbooked?: boolean;
  comment?: string;
}
