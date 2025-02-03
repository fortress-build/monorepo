import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { Device } from "./Device";
import type { Group } from "./Group";
import type { CareTeam } from "./CareTeam";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { RelatedPerson } from "./RelatedPerson";
import type { PractitionerRole } from "./PractitionerRole";
import type { DocumentReference } from "./DocumentReference";
import type { Contract } from "./Contract";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { DomainResource, Resource } from "./Resource";

/**
 * The references to the policies that are included in this consent
 * scope. Policies may be organizational, but are often defined
 * jurisdictionally, or in law.
 */
export declare class ConsentPolicy {
  /**
   * Entity or Organization having regulatory jurisdiction or
   * accountability for  enforcing policies pertaining to Consent
   * Directives.
   */
  authority?: string;

  /**
   * The references to the policies that are included in this consent
   * scope. Policies may be organizational, but are often defined
   * jurisdictionally, or in law.
   */
  uri?: string;
}

/**
 * The resources controlled by this rule if specific resources are
 * referenced.
 */
export declare class ConsentProvisionData {
  /**
   * How the resource reference is interpreted when testing consent
   * restrictions.
   */
  meaning: 'instance' | 'related' | 'dependents' | 'authoredby';

  /**
   * A reference to a specific resource that defines which resources are
   * covered by this consent.
   */
  reference: Reference<Resource>;
}

/**
 * Who or what is controlled by this rule. Use group to identify a set of
 * actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentProvisionActor {
  /**
   * How the individual is involved in the resources content that is
   * described in the exception.
   */
  role: CodeableConcept;

  /**
   * The resource that identifies the actor. To identify actors by type,
   * use group to identify a set of actors by some property they share
   * (e.g. 'admitting officers').
   */
  reference: Reference<
    | Device
    | Group
    | CareTeam
    | Organization
    | Patient
    | Practitioner
    | RelatedPerson
    | PractitionerRole
  >;
}

/**
 * An exception to the base policy of this consent. An exception can be
 * an addition or removal of access permissions.
 */
export declare class ConsentProvision {
  /**
   * Action  to take - permit or deny - when the rule conditions are met.
   * Not permitted in root rule, required in all nested rules.
   */
  type?: 'deny' | 'permit';

  /**
   * The timeframe in this rule is valid.
   */
  period?: Period;

  /**
   * Who or what is controlled by this rule. Use group to identify a set of
   * actors by some property they share (e.g. 'admitting officers').
   */
  actor?: ConsentProvisionActor[];

  /**
   * Actions controlled by this Rule.
   */
  action?: CodeableConcept[];

  /**
   * A security label, comprised of 0..* security label fields (Privacy
   * tags), which define which resources are controlled by this exception.
   */
  securityLabel?: Coding[];

  /**
   * The context of the activities a user is taking - why the user is
   * accessing the data - that are controlled by this rule.
   */
  purpose?: Coding[];

  /**
   * The class of information covered by this rule. The type can be a FHIR
   * resource type, a profile on a type, or a CDA document, or some other
   * type that indicates what sort of information the consent relates to.
   */
  class?: Coding[];

  /**
   * If this code is found in an instance, then the rule applies.
   */
  code?: CodeableConcept[];

  /**
   * Clinical or Operational Relevant period of time that bounds the data
   * controlled by this rule.
   */
  dataPeriod?: Period;

  /**
   * The resources controlled by this rule if specific resources are
   * referenced.
   */
  data?: ConsentProvisionData[];

  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  provision?: ConsentProvision[];
}

/**
 * Whether a treatment instruction (e.g. artificial respiration yes or
 * no) was verified with the patient, his/her family or another
 * authorized person.
 */
export declare class ConsentVerification {
  /**
   * Has the instruction been verified.
   */
  verified: boolean;

  /**
   * Who verified the instruction (Patient, Relative or other Authorized
   * Person).
   */
  verifiedWith?: Reference<Patient | RelatedPerson>;

  /**
   * Date verification was collected.
   */
  verificationDate?: string;
}

/**
 * A record of a healthcare consumer&rsquo;s  choices, which permits or denies
 * identified recipient(s) or recipient role(s) to perform one or more
 * actions within a given policy context, for specific purposes and
 * periods of time.
 */
export declare class Consent extends DomainResource {
  resourceType: 'Consent';

  /**
   * Unique identifier for this copy of the Consent Statement.
   */
  identifier?: Identifier[];

  /**
   * Indicates the current state of this consent.
   */
  status:
    | 'draft'
    | 'proposed'
    | 'active'
    | 'rejected'
    | 'inactive'
    | 'entered-in-error';

  /**
   * A selector of the type of consent being presented: ADR, Privacy,
   * Treatment, Research.  This list is now extensible.
   */
  scope: CodeableConcept;

  /**
   * A classification of the type of consents found in the statement. This
   * element supports indexing and retrieval of consent statements.
   */
  category: CodeableConcept[];

  /**
   * The patient/healthcare consumer to whom this consent applies.
   */
  patient?: Reference<Patient>;

  /**
   * When this  Consent was issued / created / indexed.
   */
  dateTime?: string;

  /**
   * Either the Grantor, which is the entity responsible for granting the
   * rights listed in a Consent Directive or the Grantee, which is the
   * entity responsible for complying with the Consent Directive, including
   * any obligations or limitations on authorizations and enforcement of
   * prohibitions.
   */
  performer?: Reference<
    Organization | Patient | Practitioner | RelatedPerson | PractitionerRole
  >[];

  /**
   * The organization that manages the consent, and the framework within
   * which it is executed.
   */
  organization?: Reference<Organization>[];

  /**
   * The source on which this consent statement is based. The source might
   * be a scanned original paper form, or a reference to a consent that
   * links back to such a source, a reference to a document repository
   * (e.g. XDS) that stores the original consent document.
   */
  sourceAttachment?: Attachment;

  /**
   * The source on which this consent statement is based. The source might
   * be a scanned original paper form, or a reference to a consent that
   * links back to such a source, a reference to a document repository
   * (e.g. XDS) that stores the original consent document.
   */
  sourceReference?: Reference<
    Consent | DocumentReference | Contract | QuestionnaireResponse
  >;

  /**
   * The references to the policies that are included in this consent
   * scope. Policies may be organizational, but are often defined
   * jurisdictionally, or in law.
   */
  policy?: ConsentPolicy[];

  /**
   * A reference to the specific base computable regulation or policy.
   */
  policyRule?: CodeableConcept;

  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or
   * no) was verified with the patient, his/her family or another
   * authorized person.
   */
  verification?: ConsentVerification[];

  /**
   * An exception to the base policy of this consent. An exception can be
   * an addition or removal of access permissions.
   */
  provision?: ConsentProvision;
}
