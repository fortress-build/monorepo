import type { Age } from "./Age";
import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Duration } from "./Duration";
import type { Expression } from "./Expression";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource, Resource } from "./Resource";
import type { Timing } from "./Timing";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner"; 
import type { PractitionerRole } from "./PractitionerRole";
import type { RelatedPerson } from "./RelatedPerson";
import type { Device } from "./Device";
import type { Group } from "./Group";
import type { Encounter } from "./Encounter";
import type { Condition } from "./Condition";
import type { Observation } from "./Observation";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";

export declare class RequestGroupActionRelatedAction {
  actionId: string;
  relationship: "before-start" | "before" | "before-end" | "concurrent-with-start" | 
    "concurrent" | "concurrent-with-end" | "after-start" | "after" | "after-end";
  offsetDuration?: Duration;
  offsetRange?: Range;
}

export declare class RequestGroupActionCondition {
  kind: "applicability" | "start" | "stop";
  expression?: Expression;
}

export declare class RequestGroupAction {
  prefix?: string;
  title?: string;
  description?: string;
  textEquivalent?: string;
  priority?: "routine" | "urgent" | "asap" | "stat";
  code?: CodeableConcept[];
  documentation?: RelatedArtifact[];
  condition?: RequestGroupActionCondition[];
  relatedAction?: RequestGroupActionRelatedAction[];
  timingDateTime?: string;
  timingAge?: Age;
  timingPeriod?: Period;
  timingDuration?: Duration;
  timingRange?: Range;
  timingTiming?: Timing;
  participant?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Device>[];
  type?: CodeableConcept;
  groupingBehavior?: "visual-group" | "logical-group" | "sentence-group";
  selectionBehavior?: "any" | "all" | "all-or-none" | "exactly-one" | "at-most-one" | "one-or-more";
  requiredBehavior?: "must" | "could" | "must-unless-documented";
  precheckBehavior?: "yes" | "no";
  cardinalityBehavior?: "single" | "multiple";
  resource?: Reference<Resource>;
  action?: RequestGroupAction[];
}

export declare class RequestGroup extends DomainResource{
  resourceType: "RequestGroup";
  identifier?: Identifier[];
  instantiatesCanonical?: string[];
  instantiatesUri?: string[];
  basedOn?: Reference<Resource>[];
  replaces?: Reference<Resource>[];
  groupIdentifier?: Identifier;
  status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown";
  intent: "proposal" | "plan" | "directive" | "order" | "original-order" | 
    "reflex-order" | "filler-order" | "instance-order" | "option";
  priority?: "routine" | "urgent" | "asap" | "stat";
  code?: CodeableConcept;
  subject?: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;
  authoredOn?: string;
  author?: Reference<Device | Practitioner | PractitionerRole>;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[];
  note?: Annotation[];
  action?: RequestGroupAction[];
}
