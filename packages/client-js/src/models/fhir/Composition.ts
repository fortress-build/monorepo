import type { CodeableConcept } from './CodeableConcept';
import type { Device } from './Device';
import type { Encounter } from './Encounter';
import type { Identifier } from './Identifier';
import type { Narrative } from './Narrative';
import type { Organization } from './Organization';
import type { Patient } from './Patient';
import type { Period } from './Period';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Reference } from './Reference';
import type { RelatedPerson } from './RelatedPerson';
import { DomainResource, type Resource } from './Resource';

/**
 * A set of healthcare-related information that is assembled together
 * into a single logical package that provides a single coherent
 * statement of meaning, establishes its own context and that has
 * clinical attestation with regard to who is making the statement. A
 * Composition defines the structure and narrative content necessary for
 * a document. However, a Composition alone does not constitute a
 * document. Rather, the Composition must be the first entry in a Bundle
 * where Bundle.type=document, and any other resources referenced from
 * Composition must be included as subsequent entries in the Bundle (for
 * example Patient, Practitioner, Encounter, etc.).
 */
export declare class Composition extends DomainResource{
  /**
   * This is a Composition resource
   */
  readonly resourceType: 'Composition';
  /**
   * A version-independent identifier for the Composition. This identifier
   * stays constant as the composition is changed over time.
   */
  identifier?: Identifier;

  /**
   * The workflow/clinical status of this composition. The status is a
   * marker for the clinical standing of the document.
   */
  status: 'preliminary' | 'final' | 'amended' | 'entered-in-error';

  /**
   * Specifies the particular kind of composition (e.g. History and
   * Physical, Discharge Summary, Progress Note). This usually equates to
   * the purpose of making the composition.
   */
  type: CodeableConcept;

  /**
   * A categorization for the type of the composition - helps for indexing
   * and searching. This may be implied by or derived from the code
   * specified in the Composition Type.
   */
  category?: CodeableConcept[];

  /**
   * Who or what the composition is about. The composition can be about a
   * person, (patient or healthcare practitioner), a device (e.g. a
   * machine) or even a group of subjects (such as a document about a herd
   * of livestock, or a set of patients that share a common exposure).
   */
  subject?: Reference<Resource>;

  /**
   * Describes the clinical encounter or type of care this documentation is
   * associated with.
   */
  encounter?: Reference<Encounter>;

  /**
   * The composition editing time, when the composition was last logically
   * changed by the author.
   */
  date: string;

  /**
   * Identifies who is responsible for the information in the composition,
   * not necessarily who typed it in.
   */
  author: Reference<
    | Practitioner
    | PractitionerRole
    | Device
    | Patient
    | RelatedPerson
    | Organization
  >[];

  /**
   * Official human-readable label for the composition.
   */
  title: string;

  /**
   * The code specifying the level of confidentiality of the Composition.
   */
  confidentiality?: 'U' | 'L' | 'M' | 'N' | 'R' | 'V';

  /**
   * A participant who has attested to the accuracy of the
   * composition/document.
   */
  attester?: CompositionAttester[];

  /**
   * Identifies the organization or group who is responsible for ongoing
   * maintenance of and access to the composition/document information.
   */
  custodian?: Reference<Organization>;

  /**
   * Relationships that this composition has with other compositions or
   * documents that already exist.
   */
  relatesTo?: CompositionRelatesTo[];

  /**
   * The clinical service, such as a colonoscopy or an appendectomy, being
   * documented.
   */
  event?: CompositionEvent[];

  /**
   * The root of the sections that make up the composition.
   */
  section?: CompositionSection[];
}

/**
 * A participant who has attested to the accuracy of the
 * composition/document.
 */
export interface CompositionAttester {
  /**
   * The type of attestation the authenticator offers.
   */
  mode: 'personal' | 'professional' | 'legal' | 'official';

  /**
   * When the composition was attested by the party.
   */
  time?: string;

  /**
   * Who attested the composition in the specified way.
   */
  party?: Reference<
    Patient | RelatedPerson | Practitioner | PractitionerRole | Organization
  >;
}

/**
 * The clinical service, such as a colonoscopy or an appendectomy, being
 * documented.
 */
export interface CompositionEvent {
  /**
   * This list of codes represents the main clinical acts, such as a
   * colonoscopy or an appendectomy, being documented. In some cases, the
   * event is inherent in the typeCode, such as a &quot;History and Physical
   * Report&quot; in which the procedure being documented is necessarily a
   * &quot;History and Physical&quot; act.
   */
  code?: CodeableConcept[];

  /**
   * The period of time covered by the documentation. There is no assertion
   * that the documentation is a complete representation for this period,
   * only that it documents events during this time.
   */
  period?: Period;

  /**
   * The description and/or reference of the event(s) being documented. For
   * example, this could be used to document such a colonoscopy or an
   * appendectomy.
   */
  detail?: Reference<Resource>[];
}

/**
 * Relationships that this composition has with other compositions or
 * documents that already exist.
 */
export interface CompositionRelatesTo {
  /**
   * The type of relationship that this composition has with anther
   * composition or document.
   */
  code: 'replaces' | 'transforms' | 'signs' | 'appends';

  /**
   * The target composition/document of this relationship.
   */
  targetIdentifier?: Identifier;

  /**
   * The target composition/document of this relationship.
   */
  targetReference?: Reference<Composition>;
}

/**
 * The target composition/document of this relationship.
 */
export type CompositionRelatesToTarget = Identifier | Reference<Composition>;

/**
 * The root of the sections that make up the composition.
 */
export interface CompositionSection {
  /**
   * The label for this particular section.  This will be part of the
   * rendered content for the document, and is often used to build a table
   * of contents.
   */
  title?: string;

  /**
   * A code identifying the kind of content contained within the section.
   * This must be consistent with the section title.
   */
  code?: CodeableConcept;

  /**
   * Identifies who is responsible for the information in this section, not
   * necessarily who typed it in.
   */
  author?: Reference<
    | Practitioner
    | PractitionerRole
    | Device
    | Patient
    | RelatedPerson
    | Organization
  >[];

  /**
   * The actual focus of the section when it is not the subject of the
   * composition, but instead represents something or someone associated
   * with the subject such as (for a patient subject) a spouse, parent,
   * fetus, or donor. If not focus is specified, the focus is assumed to be
   * focus of the parent section, or, for a section in the Composition
   * itself, the subject of the composition. Sections with a focus SHALL
   * only include resources where the logical subject (patient, subject,
   * focus, etc.) matches the section focus, or the resources have no
   * logical subject (few resources).
   */
  focus?: Reference<Resource>;

  /**
   * A human-readable narrative that contains the attested content of the
   * section, used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative.
   */
  text?: Narrative;

  /**
   * How the entry list was prepared - whether it is a working list that is
   * suitable for being maintained on an ongoing basis, or if it represents
   * a snapshot of a list of items from another source, or whether it is a
   * prepared list where items may be marked as added, modified or deleted.
   */
  mode?: 'working' | 'snapshot' | 'changes';

  /**
   * Specifies the order applied to the items in the section entries.
   */
  orderedBy?: CodeableConcept;

  /**
   * A reference to the actual resource from which the narrative in the
   * section is derived.
   */
  entry?: Reference<Resource>[];

  /**
   * If the section is empty, why the list is empty. An empty section
   * typically has some text explaining the empty reason.
   */
  emptyReason?: CodeableConcept;

  /**
   * A nested sub-section within this section.
   */
  section?: CompositionSection[];
}