import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Substance } from "./Substance";

export declare class BiologicallyDerivedProductStorage {
  description?: string;
  temperature?: number;
  scale?: "farenheit" | "celsius" | "kelvin";
  duration?: Period;
}

export declare class BiologicallyDerivedProductProcessing {
  description?: string;
  procedure?: CodeableConcept;
  additive?: Reference<Substance>;
  timeDateTime?: string;
  timePeriod?: Period;
}

export declare class BiologicallyDerivedProductManipulation {
  description?: string;
  timeDateTime?: string;
  timePeriod?: Period;
}

export declare class BiologicallyDerivedProductCollection {
  collector?: Reference<Practitioner|PractitionerRole>;
  source?: Reference<Patient|Organization>;
  collectedDateTime?: string;
  collectedPeriod?: Period;
}

export declare class BiologicallyDerivedProduct extends DomainResource{
  resourceType: "BiologicallyDerivedProduct";
  identifier?: Identifier[];
  productCategory?: "organ" | "tissue" | "fluid" | "cells" | "biologicalAgent";
  productCode?: CodeableConcept;
  status?: "available" | "unavailable";
  request?: Reference<ServiceRequest>[];
  quantity?: number;
  parent?: Reference<BiologicallyDerivedProduct>[];
  collection?: BiologicallyDerivedProductCollection;
  processing?: BiologicallyDerivedProductProcessing[];
  manipulation?: BiologicallyDerivedProductManipulation;
  storage?: BiologicallyDerivedProductStorage[];
}
