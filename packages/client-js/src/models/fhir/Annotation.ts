import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";

/**
 * A  text note which also  contains information about who made the
 * statement and when.
 */
export interface Annotation {
  /**
   * The individual responsible for making the annotation.
   */
  authorReference?: Reference<
    Practitioner | Patient | RelatedPerson | Organization
  >;

  /**
   * The individual responsible for making the annotation.
   */
  authorString?: string;

  /**
   * Indicates when this particular annotation was made.
   */
  time?: string;

  /**
   * The text of the annotation in markdown format.
   */
  text: string;
};
