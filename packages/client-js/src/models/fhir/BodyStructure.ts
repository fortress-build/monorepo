import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { Patient } from "./Patient";
import type { DomainResource } from "./Resource";


/**
 * Record details about an anatomical structure.  This resource may be
 * used when a coded concept does not provide the necessary detail needed
 * for the use case.
 */
export declare class BodyStructure extends DomainResource {
  resourceType: 'BodyStructure';
  /**
   * Identifier for this instance of the anatomical structure.
   */
  identifier?: Identifier[];

  /**
   * Whether this body site is in active use.
   */
  active?: boolean;

  /**
   * The kind of structure being represented by the body structure at
   * `BodyStructure.location`.  This can define both normal and abnormal
   * morphologies.
   */
  morphology?: CodeableConcept;

  /**
   * The anatomical location or region of the specimen, lesion, or body
   * structure.
   */
  location?: CodeableConcept;

  /**
   * Qualifier to refine the anatomical location.  These include qualifiers
   * for laterality, relative location, directionality, number, and plane.
   */
  locationQualifier?: CodeableConcept[];

  /**
   * A summary, characterization or explanation of the body structure.
   */
  description?: string;

  /**
   * Image or images used to identify a location.
   */
  image?: Attachment[];

  /**
   * The person to which the body site belongs.
   */
  patient: Reference<Patient>;
}