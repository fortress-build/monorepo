import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource, Resource, ResourceType } from "./Resource";
import type { UsageContext } from "./UsageContext";

export declare class QuestionnaireItem {
  linkId: string;
  definition?: string;
  code?: Coding[];
  prefix?: string;
  text?: string;
  type:
    | "group"
    | "display"
    | "boolean"
    | "decimal"
    | "integer"
    | "date"
    | "dateTime"; // QuestionnaireItemType
  enableWhen?: {
    question: string;
    operator: "exists" | "=" | "!=" | ">" | "<" | ">=" | "<=";

    answerBoolean?: boolean;
    answerDecimal?: number;
    answerInteger?: number;
    answerDate?: string;
    answerDateTime?: string;
    answerTime?: string;
    answerString?: string;
    answerCoding?: Coding;
    answerQuantity?: Quantity;
    answerReference?: Reference<Resource>;
  };
  enableBehavior?: "all" | "any";
  required?: boolean;
  repeats?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  answerValueSet?: string; // FIXME: type should be canonical(ValueSet)
  answerOption?: {
    valueInteger?: number;
    valueDate?: string;
    valueTime?: string;
    valueString?: string;
    valueCoding?: Coding;
    valueReference?: Reference<Resource>;

    initialSelected?: boolean;
  }[];
  initial?: {
    valueBoolean?: boolean;
    valueDecimal?: number;
    valueInteger?: number;
    valueDate?: string;
    valueDateTime?: string;
    valueTime?: string;
    valueString?: string;
    valueUri?: string;
    valueAttachment?: Attachment;
    valueCoding?: Coding;
    valueQuantity?: Quantity;
    valueReference?: Reference<Resource>;
  };
  item?: QuestionnaireItem[];
}

export declare class Questionnaire extends DomainResource {
  resourceType: "Questionnaire";

  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  derivedFrom?: Questionnaire[]; // FIXME: type: canonical(Questionnaire)
  status: "active" | "draft" | "retired" | "unknown";
  experimental?: boolean;
  subjectType?: ResourceType;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  copyright?: string;
  approvalDate?: string;
  lastReviewDate?: string;
  effectivePeriod?: Period;
  code?: Coding[];
  item?: QuestionnaireItem[];
}
