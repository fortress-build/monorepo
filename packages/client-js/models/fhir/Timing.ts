import type { CodeableConcept } from "./CodeableConcept";
import type { Duration } from "./Duration";
import type { Period } from "./Period";

export interface Timing {
  event?: string[];

  repeat?: {
    boundsDuration?: Duration;
    boundsRange?: Range;
    boundsPeriod?: Period;

    count?: number;
    countMax?: number;
    duration?: number;
    durationMax?: number;
    durationUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
    frequency?: number;
    frequencyMax?: number;
    period?: number;
    periodMax?: number;
    periodUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
    dayOfWeek?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[];
    timeOfDay?: string[];
    when?: string;
    offset?: number;
  };

  code?: CodeableConcept;
}
