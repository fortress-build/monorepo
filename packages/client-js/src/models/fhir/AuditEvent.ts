import type { Coding } from "./Coding";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import { DomainResource, type Resource } from "./Resource";
import type { PractitionerRole } from "./PractitionerRole";
import type { Practitioner } from "./Practitioner";
import type { Organization } from "./Organization";
import type { RelatedPerson } from "./RelatedPerson";
import type { Device } from "./Device";
import type { Patient } from "./Patient";

/**
 * Logical network location for application activity, if the activity has
 * a network location.
 */
export interface AuditEventAgentNetwork {
  /**
   * An identifier for the network access point of the user device for the
   * audit event.
   */
  address?: string;

  /**
   * An identifier for the type of network access point that originated the
   * audit event.
   */
  type?: '1' | '2' | '3' | '4' | '5';
};

/**
 * Tagged value pairs for conveying additional information about the
 * entity.
 */
export interface AuditEventEntityDetail {
  /**
   * The type of extra detail provided in the value.
   */
  type: string;

  /**
   * The  value of the extra detail.
   */
  valueString?: string;

  /**
   * The  value of the extra detail.
   */
  valueBase64Binary?: string;
};

/**
 * Specific instances of data or objects that have been accessed.
 */
export interface AuditEventEntity {
  /**
   * Identifies a specific instance of the entity. The reference should be
   * version specific.
   */
  what?: Reference<Resource>;

  /**
   * The type of the object that was involved in this audit event.
   */
  type?: Coding;

  /**
   * Code representing the role the entity played in the event being
   * audited.
   */
  role?: Coding;

  /**
   * Identifier for the data life-cycle stage for the entity.
   */
  lifecycle?: Coding;

  /**
   * Security labels for the identified entity.
   */
  securityLabel?: Coding[];

  /**
   * A name of the entity in the audit event.
   */
  name?: string;

  /**
   * Text that describes the entity in more detail.
   */
  description?: string;

  /**
   * The query parameters for a query-type entities.
   */
  query?: string;

  /**
   * Tagged value pairs for conveying additional information about the
   * entity.
   */
  detail?: AuditEventEntityDetail[];
};

/**
 * An actor taking an active role in the event or activity that is
 * logged.
 */
export interface AuditEventAgent {
  /**
   * Specification of the participation type the user plays when performing
   * the event.
   */
  type?: CodeableConcept;

  /**
   * The security role that the user was acting under, that come from local
   * codes defined by the access control security system (e.g. RBAC, ABAC)
   * used in the local context.
   */
  role?: CodeableConcept[];

  /**
   * Reference to who this agent is that was involved in the event.
   */
  who?: Reference<
    | PractitionerRole
    | Practitioner
    | Organization
    | Device
    | Patient
    | RelatedPerson
  >;

  /**
   * Alternative agent Identifier. For a human, this should be a user
   * identifier text string from authentication system. This identifier
   * would be one known to a common authentication system (e.g. single
   * sign-on), if available.
   */
  altId?: string;

  /**
   * Human-meaningful name for the agent.
   */
  name?: string;

  /**
   * Indicator that the user is or is not the requestor, or initiator, for
   * the event being audited.
   */
  requestor: boolean;

  /**
   * Where the event occurred.
   */
  location?: Reference<Location>;

  /**
   * The policy or plan that authorized the activity being recorded.
   * Typically, a single activity may have multiple applicable policies,
   * such as patient consent, guarantor funding, etc. The policy would also
   * indicate the security token used.
   */
  policy?: string[];

  /**
   * Type of media involved. Used when the event is about
   * exporting/importing onto media.
   */
  media?: Coding;

  /**
   * Logical network location for application activity, if the activity has
   * a network location.
   */
  network?: AuditEventAgentNetwork;

  /**
   * The reason (purpose of use), specific to this agent, that was used
   * during the event being recorded.
   */
  purposeOfUse?: CodeableConcept[];
};

/**
 * The system that is reporting the event.
 */
export interface AuditEventSource {
  /**
   * Logical source location within the healthcare enterprise network.  For
   * example, a hospital or other provider location within a multi-entity
   * provider group.
   */
  site?: string;

  /**
   * Identifier of the source where the event was detected.
   */
  observer: Reference<PractitionerRole | Practitioner | Organization | Device | Patient | RelatedPerson>;

  /**
   * Code specifying the type of source where event originated.
   */
  type?: Coding[];
};

/**
 * A record of an event made for purposes of maintaining a security log.
 * Typical uses include detection of intrusion attempts and monitoring
 * for inappropriate usage.
 */
export declare class AuditEvent extends DomainResource {
  resourceType: 'AuditEvent';
  /**
   * Identifier for a family of the event.  For example, a menu item,
   * program, rule, policy, function code, application name or URL. It
   * identifies the performed function.
   */
  type: Coding;

  /**
   * Identifier for the category of event.
   */
  subtype?: Coding[];

  /**
   * Indicator for type of action performed during the event that generated
   * the audit.
   */
  action?: 'C' | 'R' | 'U' | 'D' | 'E';

  /**
   * The period during which the activity occurred.
   */
  period?: Period;

  /**
   * The time when the event was recorded.
   */
  recorded: string;

  /**
   * Indicates whether the event succeeded or failed.
   */
  outcome?: '0' | '4' | '8' | '12';

  /**
   * A free text description of the outcome of the event.
   */
  outcomeDesc?: string;

  /**
   * The purposeOfUse (reason) that was used during the event being
   * recorded.
   */
  purposeOfEvent?: CodeableConcept[];

  /**
   * An actor taking an active role in the event or activity that is
   * logged.
   */
  agent: AuditEventAgent[];

  /**
   * The system that is reporting the event.
   */
  source: AuditEventSource;

  /**
   * Specific instances of data or objects that have been accessed.
   */
  entity?: AuditEventEntity[];
}
