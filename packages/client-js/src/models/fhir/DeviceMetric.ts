import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export interface DeviceMetric extends DomainResource {
  identifier?: Identifier[];
  type: CodeableConcept;
  unit?: CodeableConcept;
  source?: Reference<Device>;
  parent?: Reference<Device>;
  operationalStatus?: "on" | "off" | "standby" | "entered-in-error";
  color?:
    | "black"
    | "red"
    | "green"
    | "yellow"
    | "blue"
    | "magenta"
    | "cyan"
    | "white";
  category: "measurement" | "setting" | "calculation" | "unspecified";
  measurementPeriod?: Reference<HealthcareService>;
  calibration?: {
    type?: "unspecified" | "offset" | "gain" | "two-point";
    state?:
      | "not-calibrated"
      | "calibration-required"
      | "calibrated"
      | "unspecified";
    time?: string;
  };
}
