import type { Attachment } from "./Attachment";
import type { CarePlan } from "./CarePlan";
import type { Coding } from "./Coding";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { Identifier } from "./Identifier";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Quantity } from "./Quantity";
import type { Questionnaire } from "./Questionnaire";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";

export interface QuestionnaireResponseItem {
  linkId: string;
  definition?: string;
  text?: string;
  answer?: {
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
    valoeQuantity?: Quantity;
    valueReference?: Reference<Resource>;

    item?: QuestionnaireResponseItem[];
  };
  item?: QuestionnaireResponseItem[];
}

export declare class QuestionnaireResponse extends DomainResource {
  resourceType: "QuestionnaireResponse";

  identifier?: Identifier[];

  basedOn?: Reference<CarePlan | ServiceRequest>[];
  partOf?: Reference<Observation | Procedure>[];
  questionnaire: Questionnaire; // FIXME: should be canonical<Questionnaire>
  status:
    | "in-progress"
    | "completed"
    | "amended"
    | "entered-in-error"
    | "stopped";
  subject: Reference<Resource>;
  encounter?: Reference<Encounter>;
  author: Reference<
    | Device
    | Practitioner
    | PractitionerRole
    | Patient
    | RelatedPerson
    | Organization
  >;
  source: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>;

  item?: QuestionnaireResponseItem[];
}
