import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { ContactPoint } from "./ContactPoint";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import { DomainResource } from "./Resource";


/**
 * Identifies all people and organizations who are expected to be
 * involved in the care team.
 */
export declare class CareTeamParticipant {
  /**
   * Indicates specific responsibility of an individual within the care
   * team, such as &quot;Primary care physician&quot;, &quot;Trained social worker
   * counselor&quot;, &quot;Caregiver&quot;, etc.
   */
  role?: CodeableConcept[];

  /**
   * The specific person or organization who is participating/expected to
   * participate in the care team.
   */
  member?: Reference<
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Patient
    | Organization
    | CareTeam
  >;

  /**
   * The organization of the practitioner.
   */
  onBehalfOf?: Reference<Organization>;

  /**
   * Indicates when the specific member or organization did (or is intended
   * to) come into effect and end.
   */
  period?: Period;
}

/**
 * The Care Team includes all the people and organizations who plan to
 * participate in the coordination and delivery of care for a patient.
 */
export declare class CareTeam extends DomainResource {
  resourceType: 'CareTeam';

  /**
   * Business identifiers assigned to this care team by the performer or
   * other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier[];
  /**
   * Indicates the current state of the care team.
   */
  status?:
    | 'proposed'
    | 'active'
    | 'suspended'
    | 'inactive'
    | 'entered-in-error';
  /**
   * Identifies what kind of team.  This is to support differentiation
   * between multiple co-existing teams, such as care plan team, episode of
   * care team, longitudinal care team.
   */
  category?: CodeableConcept[];

  /**
   * A label for human use intended to distinguish like teams.  E.g. the
   * &quot;red&quot; vs. &quot;green&quot; trauma teams.
   */
  name?: string;

  /**
   * Identifies the patient or group whose intended care is handled by the
   * team.
   */
  subject?: Reference<Patient | Group>;

  /**
   * Indicates when the team did (or is intended to) come into effect and
   * end.
   */
  period?: Period;

  /**
   * Identifies all people and organizations who are expected to be
   * involved in the care team.
   */
  participant?: CareTeamParticipant[];

  /**
   * Describes why the care team exists.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Condition(s) that this care team addresses.
   */
  reasonReference?: Reference<Condition>[];

  /**
   * The organization responsible for the care team.
   */
  managingOrganization?: Reference<Organization>[];

  /**
   * A central contact detail for the care team (that applies to all
   * members).
   */
  telecom?: ContactPoint[];

  /**
   * Comments made about the CareTeam.
   */
  note?: Annotation[];
}

