import type { CodeableConcept } from "./CodeableConcept";
import type { Duration } from "./Duration";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { SimpleQuantity } from "./SimpleQuantity";
import type { Substance } from "./Substance";

export declare class SpecimenDefinition extends DomainResource {
  resourceType: "SpecimenDefinition";

  identifier?: Identifier;
  typeCollected?: CodeableConcept;
  patientPreparation?: CodeableConcept[];
  timeAspect?: string;
  collection?: CodeableConcept[];
  typeTested?: {
    isDerived?: boolean;
    type?: CodeableConcept;
    preference?: "preferred" | "alternate";
    container?: {
      material?: CodeableConcept;
      cap?: CodeableConcept;
      description?: string;
      capacity?: SimpleQuantity;

      minimumVolumeQuantity?: SimpleQuantity;
      minimumVolumeString?: string;

      additive?: {
        additiveCodeableConcept?: CodeableConcept;
        additiveReference?: Reference<Substance>;
      }[];
      preparation?: string;
      requirement?: string;
      retentionTime?: Duration;
      rejectionCriterion?: CodeableConcept[];
      handling?: {
        temperatureQualifier?: CodeableConcept;
        temperatureRange?: Range;
        maxDuration?: Duration;
        instruction?: string;
      }[];
    };
  }[];
}
