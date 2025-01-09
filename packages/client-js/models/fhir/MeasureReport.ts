import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { List } from "./List";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";

// Component
export declare class MeasureReportGroupStratifierStratumComponent {
  code: CodeableConcept;
  value: CodeableConcept;
}

// Stratum Population
export declare class MeasureReportGroupStratifierStratumPopulation {
  code?: CodeableConcept;
  count?: number;
  subjectResults?: Reference<List>;
}

// Stratum
export declare class MeasureReportGroupStratifierStratum {
  value?: CodeableConcept;
  component?: MeasureReportGroupStratifierStratumComponent[];
  population?: MeasureReportGroupStratifierStratumPopulation[];
  measureScore?: Quantity;
}

// Stratifier
export declare class MeasureReportGroupStratifier {
  code?: CodeableConcept[];
  stratum?: MeasureReportGroupStratifierStratum[];
}

// Population
export declare class MeasureReportGroupPopulation {
  code?: CodeableConcept;
  count?: number;
  subjectResults?: Reference<List>;
}

// Group
export declare class MeasureReportGroup {
  code?: CodeableConcept;
  population?: MeasureReportGroupPopulation[];
  measureScore?: Quantity;
  stratifier?: MeasureReportGroupStratifier[];
}

// Main MeasureReport
export declare class MeasureReport extends DomainResource {
  resourceType: 'MeasureReport';
  identifier?: Identifier[];
  status: 'complete' | 'pending' | 'error';
  type: 'individual' | 'subject-list' | 'summary' | 'data-collection';
  measure: string;
  subject?: Reference<Patient | Practitioner | PractitionerRole | Location | Device | RelatedPerson | Group>;
  date?: string;
  reporter?: Reference<Practitioner | PractitionerRole | Location | Organization>;
  period: Period;
  improvementNotation?: CodeableConcept;
  group?: MeasureReportGroup[];
  evaluatedResource?: Reference<Resource>[];
}
