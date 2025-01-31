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

/**
 * Product storage.
 */
export declare class BiologicallyDerivedProductStorage {
  /**
   * Description of storage.
   */
  description?: string;

  /**
   * Storage temperature.
   */
  temperature?: number;

  /**
   * Temperature scale used.
   */
  scale?: 'farenheit' | 'celsius' | 'kelvin';

  /**
   * Storage timeperiod.
   */
  duration?: Period;
}

/**
 * Any processing of the product during collection that does not change
 * the fundamental nature of the product. For example adding
 * anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export declare class BiologicallyDerivedProductProcessing {
  /**
   * Description of of processing.
   */
  description?: string;

  /**
   * Procesing code.
   */
  procedure?: CodeableConcept;

  /**
   * Substance added during processing.
   */
  additive?: Reference<Substance>;

  /**
   * Time of processing.
   */
  timeDateTime?: string;

  /**
   * Time of processing.
   */
  timePeriod?: Period;
}

/**
 * Any manipulation of product post-collection that is intended to alter
 * the product.  For example a buffy-coat enrichment or CD8 reduction of
 * Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export declare class BiologicallyDerivedProductManipulation {
  /**
   * Description of manipulation.
   */
  description?: string;

  /**
   * Time of manipulation.
   */
  timeDateTime?: string;

  /**
   * Time of manipulation.
   */
  timePeriod?: Period;
}


/**
 * How this product was collected.
 */
export declare class BiologicallyDerivedProductCollection {
  /**
   * Healthcare professional who is performing the collection.
   */
  collector?: Reference<Practitioner | PractitionerRole>;

  /**
   * The patient or entity, such as a hospital or vendor in the case of a
   * processed/manipulated/manufactured product, providing the product.
   */
  source?: Reference<Patient | Organization>;

  /**
   * Time of product collection.
   */
  collectedDateTime?: string;

  /**
   * Time of product collection.
   */
  collectedPeriod?: Period;
}

/**
 * A material substance originating from a biological entity intended to
 * be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export declare class BiologicallyDerivedProduct extends DomainResource {
  resourceType: 'BiologicallyDerivedProduct';
  /**
   * This records identifiers associated with this biologically derived
   * product instance that are defined by business processes and/or used to
   * refer to it when a direct URL reference to the resource itself is not
   * appropriate (e.g. in CDA documents, or in written / printed
   * documentation).
   */
  identifier?: Identifier[];

  /**
   * Broad category of this product.
   */
  productCategory?: 'organ' | 'tissue' | 'fluid' | 'cells' | 'biologicalAgent';

  /**
   * A code that identifies the kind of this biologically derived product
   * (SNOMED Ctcode).
   */
  productCode?: CodeableConcept;

  /**
   * Whether the product is currently available.
   */
  status?: 'available' | 'unavailable';

  /**
   * Procedure request to obtain this biologically derived product.
   */
  request?: Reference<ServiceRequest>[];

  /**
   * Number of discrete units within this product.
   */
  quantity?: number;

  /**
   * Parent product (if any).
   */
  parent?: Reference<BiologicallyDerivedProduct>[];

  /**
   * How this product was collected.
   */
  collection?: BiologicallyDerivedProductCollection;

  /**
   * Any processing of the product during collection that does not change
   * the fundamental nature of the product. For example adding
   * anti-coagulants during the collection of Peripheral Blood Stem Cells.
   */
  processing?: BiologicallyDerivedProductProcessing[];

  /**
   * Any manipulation of product post-collection that is intended to alter
   * the product.  For example a buffy-coat enrichment or CD8 reduction of
   * Peripheral Blood Stem Cells to make it more suitable for infusion.
   */
  manipulation?: BiologicallyDerivedProductManipulation;

  /**
   * Product storage.
   */
  storage?: BiologicallyDerivedProductStorage[];
}