import type { CodeableConcept } from "./CodeableConcept";
import type { Medication } from "./Medication";
import type { MedicinalProduct } from "./MedicinalProduct";
import type { ObservationDefinition } from "./ObservationDefinition";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";

export declare class MedicinalProductInteractionInteractant {
    itemReference?: Reference<MedicinalProduct|Medication|Substance|ObservationDefinition>;
    itemCodeableConcept?: CodeableConcept;
}

export declare class MedicinalProductInteraction extends DomainResource{
    resourceType: 'MedicinalProductInteraction';
    subject?: Reference<MedicinalProduct|Medication|Substance>[];
    description?: string;
    interactant?: MedicinalProductInteractionInteractant[];
    type?: CodeableConcept;
    effect?: CodeableConcept;
    incidence?: CodeableConcept;
    management?: CodeableConcept;
}
