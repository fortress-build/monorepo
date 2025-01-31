import type { Age } from './Age';
import type { CodeableConcept } from './CodeableConcept';
import type { ContactDetail } from './ContactDetail';
import type { Dosage } from './Dosage';
import type { Duration } from './Duration';
import type { Expression } from './Expression';
import type { Group } from './Group';
import type { Identifier } from './Identifier';
import type { Medication } from './Medication';
import type { ObservationDefinition } from './ObservationDefinition';
import type { Period } from './Period';
import type { Quantity } from './Quantity';
import type { Reference } from './Reference';
import type { RelatedArtifact } from './RelatedArtifact';
import type { SpecimenDefinition } from './SpecimenDefinition';
import type { Substance } from './Substance';
import type { Timing } from './Timing';
import type { UsageContext } from './UsageContext';

export interface ActivityDefinitionDynamicValue {
  /**
   * The path to the element to be customized. This is the path on the
   * resource that will hold the result of the calculation defined by the
   * expression. The specified path SHALL be a FHIRPath resolveable on the
   * specified target type of the ActivityDefinition, and SHALL consist
   * only of identifiers, constant indexers, and a restricted subset of
   * functions. The path is allowed to contain qualifiers (.) to traverse
   * sub-elements, as well as indexers ([x]) to traverse
   * multiple-cardinality sub-elements (see the [Simple FHIRPath
   * Profile](fhirpath.html#simple) for full details).
   */
  path: string;
  /**
   * An expression specifying the value of the customized element.
   */
  expression: Expression;
};

export interface ActivityDefinitionParticipant {
  /**
   * The type of participant in the action.
   */
  type: 'patient' | 'practitioner' | 'related-person' | 'device';

  /**
   * The role the participant should play in performing the described
   * action.
   */
  role?: CodeableConcept;
};

/**
 * This resource allows for the definition of some activity to be
 * performed, independent of a particular patient, practitioner, or other
 * performance context.
 */
export declare class ActivityDefinition extends DomainResource {
  /**
   * This is a ActivityDefinition resource
   */

  resourceType: 'ActivityDefinition';
  /**
   * A formal identifier that is used to identify this activity definition
   * when it is represented in other formats, or referenced in a
   * specification, model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the activity
   * definition when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the activity
   * definition author and is not expected to be globally unique. For
   * example, it might be a timestamp (e.g. yyyymmdd) if a managed version
   * is not available. There is also no expectation that versions can be
   * placed in a lexicographical sequence. To provide a version consistent
   * with the Decision Support Service specification, use the format
   * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning
   * knowledge assets, refer to the Decision Support Service specification.
   * Note that a version is required for non-experimental active assets.
   */
  version?: string;

  /**
   * A natural language name identifying the activity definition. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for the activity definition.
   */
  title?: string;

  /**
   * An explanatory or alternate title for the activity definition giving
   * additional information about its content.
   */
  subtitle?: string;

  /**
   * The status of this activity definition. Enables tracking the
   * life-cycle of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this activity definition is authored
   * for testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * A code or group definition that describes the intended subject of the
   * activity being defined.
   */
  subjectCodeableConcept?: CodeableConcept;

  /**
   * A code or group definition that describes the intended subject of the
   * activity being defined.
   */
  subjectReference?: Reference<Group>;

  /**
   * The date  (and optionally time) when the activity definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the activity definition
   * changes.
   */
  date?: string;

  /**
   * The name of the organization or individual that published the activity
   * definition.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the activity definition
   * from a consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate activity definition instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the activity definition is
   * intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this activity definition is needed and why it has
   * been designed as it has.
   */
  purpose?: string;

  /**
   * A detailed description of how the activity definition is used from a
   * clinical perspective.
   */
  usage?: string;

  /**
   * A copyright statement relating to the activity definition and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the activity definition.
   */
  copyright?: string;

  /**
   * The date on which the resource content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  approvalDate?: string;

  /**
   * The date on which the resource content was last reviewed. Review
   * happens periodically after approval but does not change the original
   * approval date.
   */
  lastReviewDate?: string;

  /**
   * The period during which the activity definition content was or is
   * planned to be in active use.
   */
  effectivePeriod?: Period;

  /**
   * Descriptive topics related to the content of the activity. Topics
   * provide a high-level categorization of the activity that can be useful
   * for filtering and searching.
   */
  topic?: CodeableConcept[];

  /**
   * An individiual or organization primarily involved in the creation and
   * maintenance of the content.
   */
  author?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for internal
   * coherence of the content.
   */
  editor?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for review of some
   * aspect of the content.
   */
  reviewer?: ContactDetail[];

  /**
   * An individual or organization responsible for officially endorsing the
   * content for use in some setting.
   */
  endorser?: ContactDetail[];

  /**
   * Related artifacts such as additional documentation, justification, or
   * bibliographic references.
   */
  relatedArtifact?: RelatedArtifact[];

  /**
   * A reference to a Library resource containing any formal logic used by
   * the activity definition.
   */
  library?: string[];

  /**
   * A description of the kind of resource the activity definition is
   * representing. For example, a MedicationRequest, a ServiceRequest, or a
   * CommunicationRequest. Typically, but not always, this is a Request
   * resource.
   */
  kind?:
    | 'Appointment'
    | 'AppointmentResponse'
    | 'CarePlan'
    | 'Claim'
    | 'CommunicationRequest'
    | 'Contract'
    | 'DeviceRequest'
    | 'EnrollmentRequest'
    | 'ImmunizationRecommendation'
    | 'MedicationRequest'
    | 'NutritionOrder'
    | 'ServiceRequest'
    | 'SupplyRequest'
    | 'Task'
    | 'VisionPrescription';
  /**
   * A profile to which the target of the activity definition is expected
   * to conform.
   */
  profile?: string;

  /**
   * Detailed description of the type of activity; e.g. What lab test, what
   * procedure, what kind of encounter.
   */
  code?: CodeableConcept;

  /**
   * Indicates the level of authority/intentionality associated with the
   * activity and where the request should fit into the workflow chain.
   */
  intent?:
    | 'proposal'
    | 'plan'
    | 'directive'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option';

  /**
   * Indicates how quickly the activity  should be addressed with respect
   * to other requests.
   */
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';

  /**
   * Set this to true if the definition is to indicate that a particular
   * activity should NOT be performed. If true, this element should be
   * interpreted to reinforce a negative coding. For example NPO as a code
   * with a doNotPerform of true would still indicate to NOT perform the
   * action.
   */
  doNotPerform?: boolean;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  timingTiming?: Timing;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  timingDateTime?: string;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  timingAge?: Age;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  timingPeriod?: Period;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  timingRange?: Range;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  timingDuration?: Duration;

  /**
   * Identifies the facility where the activity will occur; e.g. home,
   * hospital, specific clinic, etc.
   */
  location?: Reference<Location>;

  /**
   * Indicates who should participate in performing the action described.
   */
  participant?: ActivityDefinitionParticipant[];

  /**
   * Identifies the food, drug or other product being consumed or supplied
   * in the activity.
   */
  productReference?: Reference<Medication | Substance>;

  /**
   * Identifies the food, drug or other product being consumed or supplied
   * in the activity.
   */
  productCodeableConcept?: CodeableConcept;

  /**
   * Identifies the quantity expected to be consumed at once (per dose, per
   * meal, etc.).
   */
  quantity?: Quantity;

  /**
   * Provides detailed dosage instructions in the same way that they are
   * described for MedicationRequest resources.
   */
  dosage?: Dosage[];

  /**
   * Indicates the sites on the subject's body where the procedure should
   * be performed (I.e. the target sites).
   */
  bodySite?: CodeableConcept[];

  /**
   * Defines specimen requirements for the action to be performed, such as
   * required specimens for a lab test.
   */
  specimenRequirement?: Reference<SpecimenDefinition>[];

  /**
   * Defines observation requirements for the action to be performed, such
   * as body weight or surface area.
   */
  observationRequirement?: Reference<ObservationDefinition>[];

  /**
   * Defines the observations that are expected to be produced by the
   * action.
   */
  observationResultRequirement?: Reference<ObservationDefinition>[];

  /**
   * A reference to a StructureMap resource that defines a transform that
   * can be executed to produce the intent resource using the
   * ActivityDefinition instance as the input.
   */
  transform?: string;

  /**
   * Dynamic values that will be evaluated to produce values for elements
   * of the resulting resource. For example, if the dosage of a medication
   * must be computed based on the patient's weight, a dynamic value would
   * be used to specify an expression that calculated the weight, and the
   * path on the request resource that would contain the result.
   */
  dynamicValue?: ActivityDefinitionDynamicValue[];
}


