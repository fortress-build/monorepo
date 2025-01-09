import type { Age } from "./Age";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { DataRequirement } from "./DataRequirement";
import type { Duration } from "./Duration";
import type { Expression } from "./Expression";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { DomainResource } from "./Resource";
import type { Timing } from "./Timing";
import type { TriggerDefinition } from "./TriggerDefinition";
import type { UsageContext } from "./UsageContext";

export type PlanAction = {
  prefix?: string;
  title?: string;
  description?: string;
  textEquivalent?: string;
  priority?: "routine" | "urgent" | "asap" | "stat";
  code?: CodeableConcept[];
  reason?: CodeableConcept[];
  documentation?: RelatedArtifact[];
  goalId?: string[];

  subjectCodeableConcept?: CodeableConcept;
  subjectReference?: Reference<Group>;

  trigger?: TriggerDefinition[];
  condition?: {
    kind: "applicability" | "start" | "stop";
    expression: Expression;
  }[];
  input?: DataRequirement[];
  output?: DataRequirement[];
  relatedAction?: {
    actionId: string;
    relationship:
      | "before-start"
      | "before"
      | "before-end"
      | "concurrent-with-start"
      | "concurrent"
      | "concurrent-with-end"
      | "after-start"
      | "after"
      | "after-end";

    offsetDuration?: Duration;
    offsetRange?: Range;
  }[];

  timingDateTime?: string;
  timingAge?: Age;
  timingPeriod?: Period;
  timingDuration?: Duration;
  timingRange?: Range;
  timingTiming?: Timing;

  participant?: {
    type: "patient" | "practitioner" | "related-person" | "device";
    role?: CodeableConcept;
  }[];
  type?: CodeableConcept;
  groupingBehavior?: "visual-group" | "logical-group" | "sentence-group";
  selectionBehavior?:
    | "any"
    | "all"
    | "all-or-none"
    | "exactly-one"
    | "at-most-one"
    | "one-or-more";
  requiredBehavior?: "must" | "could" | "must-unless-documented";
  precheckBehavior?: "yes" | "no";
  cardinalityBehavior?: "single" | "multiple";

  definitionCanonical?: string; // FIXME: type should be canonical(ActivityDefinition| PlanDefinition | Questionnaire)
  definitionUri?: string;

  transform?: string; // FIXME: type should be canonical(StructureMap)

  dynamicValue?: {
    path?: string;
    expression: Expression;
  }[];

  action?: PlanAction[];
};

export declare class PlanDefinition extends DomainResource {
  resourceType: "PlanDefinition";

  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  type?: CodeableConcept;
  status: "draft" | "active" | "retired" | "unknown";
  experimental?: boolean;

  subjectCodeableConcept?: CodeableConcept;
  subjectReference?: string;

  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  usage?: string;
  copyright?: string;
  approvalDate?: string;
  lastReviewDate?: string;
  effectivePeriod?: Period;
  topic?: CodeableConcept[];
  author?: CodeableConcept[];
  editor?: CodeableConcept[];
  reviewer?: CodeableConcept[];
  endorser?: CodeableConcept[];
  relatedArtifact?: RelatedArtifact[];
  libary?: string[]; // FIXME: type shuld be canonical(Library)
  goal?: {
    category?: CodeableConcept;
    description: CodeableConcept;
    priority?: CodeableConcept;
    start?: CodeableConcept;
    addresses?: CodeableConcept[];
    documentation?: RelatedArtifact[];
    target?: {
      measure?: CodeableConcept;
      deatilQuantity?: Quantity;
      detailRange?: Range;
      detailCodeableConcept?: CodeableConcept;
      due?: Duration;
    }[];
  }[];
  action?: PlanAction[];
}
