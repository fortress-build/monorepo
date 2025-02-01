import type { Annotation } from "./Annotation";
import type { Attachment } from "./Attachment";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Location } from "./Location";
import type { Money } from "./Money";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Provenance } from "./Provenance";
import type { Quantity } from "./Quantity";
import type { Questionnaire } from "./Questionnaire";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { Signature } from "./Signature";
import type { SimpleQuantity } from "./SimpleQuantity";
import type { Substance } from "./Substance";
import type { Timing } from "./Timing";

export type Term = {
  identifier?: Identifier;
  issued?: string;
  applies?: Period;

  topicCodeableConcept?: CodeableConcept;
  topicReference?: Reference<Resource>;

  type?: CodeableConcept;
  subType?: CodeableConcept;
  text?: string;
  securityLabel?: {
    number?: number[];
    classification?: Coding;
    category?: Coding[];
    control?: Coding[];
  }[];
  offer: {
    identifier?: Identifier[];
    party?: {
      reference: Reference<
        | Patient
        | Practitioner
        | PractitionerRole
        | Organization
        | RelatedPerson
        | Device
        | Group
      >[];
      role: CodeableConcept;
    }[];
    topic?: Reference<Resource>;
    type?: CodeableConcept;
    decision?: CodeableConcept;
    decisionMode?: CodeableConcept[];
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
      valueQuantity?: Quantity;
      valueReference?: Reference<Resource>;
    }[];
    text?: string;
    linkId?: string[];
    securityLabelNumber?: number[];
  };
  asset?: {
    scope?: CodeableConcept;
    type?: CodeableConcept[];
    typeReference?: Reference<Resource>[];
    subtype?: CodeableConcept[];
    relationship?: Coding;
    context?: {
      reference?: Reference<Resource>;
      code?: CodeableConcept[];
      text?: string;
    }[];
    condition?: string;
    periodType?: CodeableConcept[];
    period?: Period[];
    usePeriod?: Period[];
    text?: string;
    linkId?: string[];
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
      valueQuantity?: Quantity;
      valueReference?: Reference<Resource>;
    }[];
    securityLabelNumber?: number[];
    valuedItem?: {
      entityCodeableConcept?: CodeableConcept;
      entityReference?: Reference<Resource>;

      identifier?: Identifier;
      effectiveTime?: string;
      quantity?: SimpleQuantity;
      unitPrice?: Money;
      factor?: number;
      points?: number;
      net?: Money;
      payment?: string;
      paymentDate?: string;
      responsible?: Reference<
        Practitioner | PractitionerRole | Organization | Patient | RelatedPerson
      >;
      recipient?: Reference<
        Practitioner | PractitionerRole | Organization | Patient | RelatedPerson
      >;
      linkId?: string[];
      securityLabelNumber?: number[];
    }[];
  }[];
  action?: {
    doNotPerform?: boolean;
    type: CodeableConcept;
    subject?: {
      reference: Reference<
        | Patient
        | RelatedPerson
        | Practitioner
        | PractitionerRole
        | Device
        | Group
        | Organization
      >;
      role?: CodeableConcept;
    }[];
    intent: CodeableConcept;
    linkId?: string[];
    status: CodeableConcept;
    context?: Reference<Encounter | EpisodeOfCare>;
    contextLinkId?: string[];

    occurrenceDateTime?: string;
    occurrencePeriod?: Period;
    occurrenceTiming?: Timing;

    requester?: Reference<
      | Patient
      | RelatedPerson
      | Practitioner
      | PractitionerRole
      | Device
      | Group
      | Organization
    >;
    requesterLinkId?: string[];
    performerType?: CodeableConcept[];
    performerRole?: CodeableConcept;
    performer?: Reference<
      | RelatedPerson
      | Patient
      | Practitioner
      | PractitionerRole
      | CareTeam
      | Device
      | Substance
      | Organization
      | Location
    >[];
    performerLinkId?: string[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference<
      | Condition
      | Observation
      | DiagnosticReport
      | DocumentReference
      | Questionnaire
      | QuestionnaireResponse
    >[];
    reason?: string[];
    reasonLinkId?: string[];
    note?: Annotation[];
    securityLabelNumber?: number[];
  }[];
  group?: Term[];
}[];



/**
 * Legally enforceable, formally recorded unilateral or bilateral
 * directive i.e., a policy or agreement.
 */
export declare class Contract extends DomainResource {
  resourceType: 'Contract';

  identifier?: Identifier[];
  url?: string;
  version?: string;
  status?:
    | 'amended'
    | 'appended'
    | 'cancelled'
    | 'disputed'
    | 'entered-in-error'
    | 'executable'
    | 'executed'
    | 'negotiable'
    | 'offered'
    | 'policy'
    | 'rejected'
    | 'renewed'
    | 'revoked'
    | 'resolved'
    | 'terminated';
  legalSate?: CodeableConcept;
  instantiatesCanonical?: string[]; // FIXME: Canonical
  instantiatesUri?: string[];
  contentDerivative?: CodeableConcept;
  issued?: string;
  applies?: Period;
  expirationType?: CodeableConcept;
  subject?: Reference<Resource>[];
  authority?: Reference<Organization>[];
  domain?: Reference<Location>[];
  site?: Reference<Location>[];
  name?: string;
  title?: string;
  subtitle?: string;
  alias?: string[];
  author?: Reference<
    Patient | Practitioner | PractitionerRole | Organization
  >[];
  scope?: CodeableConcept;

  topicCodeableConcept?: CodeableConcept;
  topicReference?: Reference<Resource>;

  type?: CodeableConcept;
  subType?: CodeableConcept[];
  contentDefinition?: {
    type: CodeableConcept;
    subType?: CodeableConcept;
    publisher?: Reference<Practitioner | PractitionerRole | Organization>;
    publicationDate?: string;
    publicationStatus:
      | 'amended'
      | 'appended'
      | 'cancelled'
      | 'disputed'
      | 'entered-in-error'
      | 'executable'
      | 'executed'
      | 'negotiable'
      | 'offered'
      | 'policy'
      | 'rejected'
      | 'renewed'
      | 'revoked'
      | 'resolved'
      | 'terminated';
    copyright?: string;
  };
  term?: Term;
  supportingInfo?: Reference<Resource>[];
  relevantHistory?: Reference<Provenance>[];
  signer?: {
    type: Coding;
    party: Reference<
      Organization | Patient | Practitioner | PractitionerRole | RelatedPerson
    >[];
    signature: Signature[];
  }[];
  friendly?: {
    contentAttachment?: Attachment;
    contentReference?: Reference<
      // Composition |
      DocumentReference | QuestionnaireResponse
    >;
  }[];
  legal?: {
    contentAttachment: Attachment;
    contentReference: Reference<
      // Composition |
      DocumentReference | QuestionnaireResponse
    >;
  }[];
  rule?: {
    contentAttachment: Attachment;
    contentReference: Reference<DocumentReference>;
  }[];

  legallyBindingAttachment?: Attachment;
  legallyBindingReference?: Reference<
    // Composition |
    DocumentReference | QuestionnaireResponse | Contract
  >;
}
