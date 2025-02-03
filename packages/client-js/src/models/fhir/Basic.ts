import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import { DomainResource, type Resource } from "./Resource";

/**
 * Basic is used for handling concepts not yet defined in FHIR,
 * narrative-only resources that don't map to an existing resource, and
 * custom resources not appropriate for inclusion in the FHIR
 * specification.
 */
export declare class Basic extends DomainResource {
  resourceType: 'Basic';
  /**
   * Identifier assigned to the resource for business purposes, outside the
   * context of FHIR.
   */
  identifier?: Identifier[];

  /**
   * Identifies the 'type' of resource - equivalent to the resource name
   * for other resources.
   */
  code: CodeableConcept;

  /**
   * Identifies the patient, practitioner, device or any other resource
   * that is the &quot;focus&quot; of this resource.
   */
  subject?: Reference<Resource>;

  /**
   * Identifies when the resource was first created.
   */
  created?: string;

  /**
   * Indicates who was responsible for creating the resource instance.
   */
  author?: Reference<
    Practitioner | PractitionerRole | Patient | RelatedPerson | Organization
  >;
}
