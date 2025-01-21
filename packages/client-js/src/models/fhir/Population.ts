import type { CodeableConcept } from './CodeableConcept';
import type { Range } from './Range';

export interface Population {
  ageRange?: Range;
  ageCodeableConcept?: CodeableConcept;
  gender?: CodeableConcept;
  race?: CodeableConcept;
  physiologicalCondition?: CodeableConcept;
}