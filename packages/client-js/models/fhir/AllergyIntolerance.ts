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

export declare class AllergyIntoleranceReaction {
  substance?: CodeableConcept;
  manifestation: CodeableConcept[];
  description?: string;
  onset?: string;
  severity?: 'mild' | 'moderate' | 'severe';
  exposureRoute?: CodeableConcept;
  note?: Annotation[];
}

export declare class AllergyIntolerance extends DomainResource{
  resourceType: 'AllergyIntolerance';
  identifier?: Identifier[];
  clinicalStatus?: CodeableConcept;
  verificationStatus?: CodeableConcept;
  type?: 'allergy' | 'intolerance';
  category?: Array<'food' | 'medication' | 'environment' | 'biologic'>;
  criticality?: 'low' | 'high' | 'unable-to-assess';
  code?: CodeableConcept;
  patient: Reference<Patient>;
  encounter?: Reference<Encounter>;
  onsetDateTime?: string;
  onsetAge?: Age;
  onsetPeriod?: Period;
  onsetRange?: Range;
  onsetString?: string;
  recordedDate?: string;
  recorder?: Reference<Practitioner|PractitionerRole|Patient|RelatedPerson>;
  asserter?: Reference<Patient|RelatedPerson|Practitioner|PractitionerRole>;
  lastOccurrence?: string;
  note?: Annotation[];
  reaction?: AllergyIntoleranceReaction[];
}
