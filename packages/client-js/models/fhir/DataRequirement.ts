import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Duration } from "./Duration";
import type { Extension } from "./Extension";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { Resource } from "./Resource";

export interface DataRequirement {
  id?: string;
  extension?: Extension[];
  type: string;
  profile?: string[];
  subjectCodeableConcept?: CodeableConcept;
  subjectReference?: Reference<Resource>;
  mustSupport?: string[];
  codeFilter?: {
    id?: string;
    extension?: Extension[];
    path?: string;
    searchParam?: string;
    valueSet?: string;
    code?: Coding[];
  }[];
  dateFilter?: {
    id?: string;
    extension?: Extension[];
    path?: string;
    searchParam?: string;
    valueDateTime?: string;
    valuePeriod?: Period;
    valueDuration?: Duration;
  }[];
  limit?: number;
  sort?: {
    id?: string;
    extension?: Extension[];
  }[];
}
