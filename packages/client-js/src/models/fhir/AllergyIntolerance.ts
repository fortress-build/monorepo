import type { Age } from "./Age";
import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Encounter } from "./Encounter";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import { DomainResource } from "./Resource";

/**
 * Details about each adverse reaction event linked to exposure to the
 * identified substance.
 */
export type AllergyIntoleranceReaction = {
  /**
   * Identification of the specific substance (or pharmaceutical product)
   * considered to be responsible for the Adverse Reaction event. Note: the
   * substance for a specific reaction may be different from the substance
   * identified as the cause of the risk, but it must be consistent with
   * it. For instance, it may be a more specific substance (e.g. a brand
   * medication) or a composite product that includes the identified
   * substance. It must be clinically safe to only process the 'code' and
   * ignore the 'reaction.substance'.  If a receiving system is unable to
   * confirm that AllergyIntolerance.reaction.substance falls within the
   * semantic scope of AllergyIntolerance.code, then the receiving system
   * should ignore AllergyIntolerance.reaction.substance.
   */
  substance?: CodeableConcept;

  /**
   * Clinical symptoms and/or signs that are observed or associated with
   * the adverse reaction event.
   */
  manifestation: CodeableConcept[];

  /**
   * Text description about the reaction as a whole, including details of
   * the manifestation if required.
   */
  description?: string;

  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  onset?: string;

  /**
   * Clinical assessment of the severity of the reaction event as a whole,
   * potentially considering multiple different manifestations.
   */
  severity?: 'mild' | 'moderate' | 'severe';

  /**
   * Identification of the route by which the subject was exposed to the
   * substance.
   */
  exposureRoute?: CodeableConcept;

  /**
   * Additional text about the adverse reaction event not captured in other
   * fields.
   */
  note?: Annotation[];
};

/**
 * Risk of harmful or undesirable, physiological response which is unique
 * to an individual and associated with exposure to a substance.
 */
export declare class AllergyIntolerance extends DomainResource {
  resourceType: 'AllergyIntolerance';

  /**
   * Business identifiers assigned to this AllergyIntolerance by the
   * performer or other systems which remain constant as the resource is
   * updated and propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * The clinical status of the allergy or intolerance.
   */
  clinicalStatus?: CodeableConcept;

  /**
   * Assertion about certainty associated with the propensity, or potential
   * risk, of a reaction to the identified substance (including
   * pharmaceutical product).
   */
  verificationStatus?: CodeableConcept;

  /**
   * Identification of the underlying physiological mechanism for the
   * reaction risk.
   */
  type?: 'allergy' | 'intolerance';

  /**
   * Category of the identified substance.
   */
  category?: ('food' | 'medication' | 'environment' | 'biologic')[];

  /**
   * Estimate of the potential clinical harm, or seriousness, of the
   * reaction to the identified substance.
   */
  criticality?: 'low' | 'high' | 'unable-to-assess';

  /**
   * Code for an allergy or intolerance statement (either a positive or a
   * negated/excluded statement).  This may be a code for a substance or
   * pharmaceutical product that is considered to be responsible for the
   * adverse reaction risk (e.g., &quot;Latex&quot;), an allergy or intolerance
   * condition (e.g., &quot;Latex allergy&quot;), or a negated/excluded code for a
   * specific substance or class (e.g., &quot;No latex allergy&quot;) or a general or
   * categorical negated statement (e.g.,  &quot;No known allergy&quot;, &quot;No known
   * drug allergies&quot;).  Note: the substance for a specific reaction may be
   * different from the substance identified as the cause of the risk, but
   * it must be consistent with it. For instance, it may be a more specific
   * substance (e.g. a brand medication) or a composite product that
   * includes the identified substance. It must be clinically safe to only
   * process the 'code' and ignore the 'reaction.substance'.  If a
   * receiving system is unable to confirm that
   * AllergyIntolerance.reaction.substance falls within the semantic scope
   * of AllergyIntolerance.code, then the receiving system should ignore
   * AllergyIntolerance.reaction.substance.
   */
  code?: CodeableConcept;

  /**
   * The patient who has the allergy or intolerance.
   */
  patient: Reference<Patient>;

  /**
   * The encounter when the allergy or intolerance was asserted.
   */
  encounter?: Reference<Encounter>;

  /**
   * Estimated or actual date,  date-time, or age when allergy or
   * intolerance was identified.
   */
  onsetDateTime?: string;

  /**
   * Estimated or actual date,  date-time, or age when allergy or
   * intolerance was identified.
   */
  onsetAge?: Age;

  /**
   * Estimated or actual date,  date-time, or age when allergy or
   * intolerance was identified.
   */
  onsetPeriod?: Period;

  /**
   * Estimated or actual date,  date-time, or age when allergy or
   * intolerance was identified.
   */
  onsetRange?: Range;

  /**
   * Estimated or actual date,  date-time, or age when allergy or
   * intolerance was identified.
   */
  onsetString?: string;

  /**
   * The recordedDate represents when this particular AllergyIntolerance
   * record was created in the system, which is often a system-generated
   * date.
   */
  recordedDate?: string;

  /**
   * Individual who recorded the record and takes responsibility for its
   * content.
   */
  recorder?: Reference<
    Practitioner | PractitionerRole | Patient | RelatedPerson
  >;

  /**
   * The source of the information about the allergy that is recorded.
   */
  asserter?: Reference<
    Patient | RelatedPerson | Practitioner | PractitionerRole
  >;

  /**
   * Represents the date and/or time of the last known occurrence of a
   * reaction event.
   */
  lastOccurrence?: string;

  /**
   * Additional narrative about the propensity for the Adverse Reaction,
   * not captured in other fields.
   */
  note?: Annotation[];

  /**
   * Details about each adverse reaction event linked to exposure to the
   * identified substance.
   */
  reaction?: AllergyIntoleranceReaction[];
}
