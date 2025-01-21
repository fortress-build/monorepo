import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";

export declare class DocumentManifestRelated {
  identifier?: Identifier;
  ref?: Reference<Resource>;
}

export declare class DocumentManifest extends DomainResource {
  resourceType: 'DocumentManifest';
  masterIdentifier?: Identifier;
  identifier?: Identifier[];
  status: 'current' | 'superseded' | 'entered-in-error';
  type?: CodeableConcept;
  subject?: Reference<Patient|Practitioner|Group|Device>;
  created?: string;
  author?: Reference<Practitioner| PractitionerRole | Organization | Device | Patient | RelatedPerson>[];
  recipient?: Reference<Patient|Practitioner| PractitionerRole | RelatedPerson | Organization> [];
  source?: string;
  description?: string;
  content: Reference<Resource>[];
  related?: DocumentManifestRelated[];
}
