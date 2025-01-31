import type { Annotation } from "./Annotation";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import { DiagnosticReport } from "./DiagnosticReport";
import { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Goal } from "./Goal";
import type { Group } from "./Group";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import { Medication } from "./Medication";
import { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import { Substance } from "./Substance";
import type { Timing } from "./Timing";

/**
 * Identifies a planned action to occur as part of the plan.  For
 * example, a medication to be used, lab tests to perform,
 * self-monitoring, education, etc.
 */
export declare class CarePlanActivity {
  /**
   * Identifies the outcome at the point when the status of the activity is
   * assessed.  For example, the outcome of an education activity could be
   * patient understands (or not).
   */
  outcomeCodeableConcept?: CodeableConcept[];

  /**
   * Details of the outcome or action resulting from the activity.  The
   * reference to an &quot;event&quot; resource, such as Procedure or Encounter or
   * Observation, is the result/outcome of the activity itself.  The
   * activity can be conveyed using CarePlan.activity.detail OR using the
   * CarePlan.activity.reference (a reference to a &ldquo;request&rdquo; resource).
   */
  outcomeReference?: Reference<Resource>[];

  /**
   * A simple summary of a planned activity suitable for a general care
   * plan system (e.g. form driven) that doesn't know about specific
   * resources such as procedure etc.
   */
  detail?: {
    /**
     * A description of the kind of resource the in-line definition of a care
     * plan activity is representing.  The CarePlan.activity.detail is an
     * in-line definition when a resource is not referenced using
     * CarePlan.activity.reference.  For example, a MedicationRequest, a
     * ServiceRequest, or a CommunicationRequest.
     */
    kind?:
      | 'Appointment'
      | 'CommunicationRequest'
      | 'DeviceRequest'
      | 'MedicationRequest'
      | 'NutritionOrder'
      | 'Task'
      | 'ServiceRequest'
      | 'VisionPrescription';

    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire
     * or other definition that is adhered to in whole or in part by this
     * CarePlan activity.
     */
    instantiatesCanonical?: string[];

    /**
     * The URL pointing to an externally maintained protocol, guideline,
     * questionnaire or other definition that is adhered to in whole or in
     * part by this CarePlan activity.
     */
    instantiatesUri?: string[];

    /**
     * Detailed description of the type of planned activity; e.g. what lab
     * test, what procedure, what kind of encounter.
     */
    code?: CodeableConcept;

    /**
     * Provides the rationale that drove the inclusion of this particular
     * activity as part of the plan or the reason why the activity was
     * prohibited.
     */
    reasonCode?: CodeableConcept[];

    /**
     * Indicates another resource, such as the health condition(s), whose
     * existence justifies this request and drove the inclusion of this
     * particular activity as part of the plan.
     */
    reasonReference?: Reference<
      Condition | Observation | DiagnosticReport | DocumentReference
    >[];

    /**
     * Internal reference that identifies the goals that this activity is
     * intended to contribute towards meeting.
     */
    goal?: Reference<Goal>[];

    /**
     * Identifies what progress is being made for the specific activity.
     */
    status:
      | 'not-started'
      | 'scheduled'
      | 'in-progress'
      | 'on-hold'
      | 'completed'
      | 'cancelled'
      | 'stopped'
      | 'unknown'
      | 'entered-in-error';

    /**
     * Provides reason why the activity isn't yet started, is on hold, was
     * cancelled, etc.
     */
    statusReason?: CodeableConcept;

    /**
     * If true, indicates that the described activity is one that must NOT be
     * engaged in when following the plan.  If false, or missing, indicates
     * that the described activity is one that should be engaged in when
     * following the plan.
     */
    doNotPerform?: boolean;

    /**
     * The period, timing or frequency upon which the described activity is
     * to occur.
     */
    scheduledTiming?: Timing;

    /**
     * The period, timing or frequency upon which the described activity is
     * to occur.
     */
    scheduledPeriod?: Period;

    /**
     * The period, timing or frequency upon which the described activity is
     * to occur.
     */
    scheduledString?: string;

    /**
     * Identifies the facility where the activity will occur; e.g. home,
     * hospital, specific clinic, etc.
     */
    location?: Reference<Location>;

    /**
     * Identifies who's expected to be involved in the activity.
     */
    performer?: Reference<
      | Practitioner
      | PractitionerRole
      | Organization
      | RelatedPerson
      | Patient
      | CareTeam
      | HealthcareService
      | Device
    >[];

    /**
     * Identifies the food, drug or other product to be consumed or supplied
     * in the activity.
     */
    productCodeableConcept?: CodeableConcept;

    /**
     * Identifies the food, drug or other product to be consumed or supplied
     * in the activity.
     */
    productReference?: Reference<Medication | Substance>;

    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: Quantity;

    /**
     * Identifies the quantity expected to be supplied, administered or
     * consumed by the subject.
     */
    quantity?: Quantity;

    /**
     * This provides a textual description of constraints on the intended
     * activity occurrence, including relation to other activities.  It may
     * also include objectives, pre-conditions and end-conditions.  Finally,
     * it may convey specifics about the activity such as body site, method,
     * route, etc.
     */
    description?: string;
  };
}


/**
 * Describes the intention of how one or more practitioners intend to
 * deliver care for a particular patient, group or community for a period
 * of time, possibly limited to care for a specific condition or set of
 * conditions.
 */
export declare class CarePlan extends DomainResource {
  resourceType: 'CarePlan';
  /**
   * Business identifiers assigned to this care plan by the performer or
   * other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire
   * or other definition that is adhered to in whole or in part by this
   * CarePlan.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * questionnaire or other definition that is adhered to in whole or in
   * part by this CarePlan.
   */
  instantiatesUri?: string[];

  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  basedOn?: Reference<CarePlan>[];

  /**
   * Completed or terminated care plan whose function is taken by this new
   * care plan.
   */
  replaces?: Reference<CarePlan>[];

  /**
   * A larger care plan of which this particular care plan is a component
   * or step.
   */
  partOf?: Reference<CarePlan>[];

  /**
   * Indicates whether the plan is currently being acted upon, represents
   * future intentions or is now a historical record.
   */
  status:
    | 'draft'
    | 'active'
    | 'on-hold'
    | 'revoked'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';

  /**
   * Indicates the level of authority/intentionality associated with the
   * care plan and where the care plan fits into the workflow chain.
   */
  intent: 'proposal' | 'plan' | 'order' | 'option';

  /**
   * Identifies what &quot;kind&quot; of plan this is to support differentiation
   * between multiple co-existing plans; e.g. &quot;Home health&quot;, &quot;psychiatric&quot;,
   * &quot;asthma&quot;, &quot;disease management&quot;, &quot;wellness plan&quot;, etc.
   */
  category?: CodeableConcept[];

  /**
   * Human-friendly name for the care plan.
   */
  title?: string;

  /**
   * A description of the scope and nature of the plan.
   */
  description?: string;

  /**
   * Identifies the patient or group whose intended care is described by
   * the plan.
   */
  subject: Reference<Patient | Group>;

  /**
   * The Encounter during which this CarePlan was created or to which the
   * creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * Indicates when the plan did (or is intended to) come into effect and
   * end.
   */
  period?: Period;

  /**
   * Represents when this particular CarePlan record was created in the
   * system, which is often a system-generated date.
   */
  created?: string;

  /**
   * When populated, the author is responsible for the care plan.  The care
   * plan is attributed to the author.
   */
  author?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | Device
    | RelatedPerson
    | Organization
    | CareTeam
  >;

  /**
   * Identifies the individual(s) or organization who provided the contents
   * of the care plan.
   */
  contributor?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | Device
    | RelatedPerson
    | Organization
    | CareTeam
  >[];

  /**
   * Identifies all people and organizations who are expected to be
   * involved in the care envisioned by this plan.
   */
  careTeam?: Reference<CareTeam>[];

  /**
   * Identifies the conditions/problems/concerns/diagnoses/etc. whose
   * management and/or mitigation are handled by this plan.
   */
  addresses?: Reference<Condition>[];

  /**
   * Identifies portions of the patient's record that specifically
   * influenced the formation of the plan.  These might include
   * comorbidities, recent procedures, limitations, recent assessments,
   * etc.
   */
  supportingInfo?: Reference<Resource>[];

  /**
   * Describes the intended objective(s) of carrying out the care plan.
   */
  goal?: Reference<Goal>[];

  /**
   * Identifies a planned action to occur as part of the plan.  For
   * example, a medication to be used, lab tests to perform,
   * self-monitoring, education, etc.
   */
  activity?: CarePlanActivity[];

  /**
   * General notes about the care plan not covered elsewhere.
   */
  note?: Annotation[];
}