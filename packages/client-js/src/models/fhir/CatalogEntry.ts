import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { HealthcareService } from "./HealthcareService";
import type { ActivityDefinition } from "./ActivityDefinition";
import type { PlanDefinition } from "./PlanDefinition";
import type { SpecimenDefinition } from "./SpecimenDefinition";
import type { ObservationDefinition } from "./ObservationDefinition";
import type { Binary } from "./Binary";
import type { Medication } from "./Medication";
import type { Organization } from "./Organization";
import type { Device } from "./Device";
import type { DomainResource } from "./Resource";

// First define the RelatedEntry interface
export interface CatalogEntryRelatedEntry {
    relationtype: 'triggers' | 'is-replaced-by';
    item: Reference<CatalogEntry>;
}

/**
 * Catalog entries are wrappers that contextualize items included in a
 * catalog.
 */
export declare class CatalogEntry extends DomainResource {
  resourceType: 'CatalogEntry';
  /**
   * Used in supporting different identifiers for the same product, e.g.
   * manufacturer code and retailer code.
   */
  identifier?: Identifier[];

  /**
   * The type of item - medication, device, service, protocol or other.
   */
  type?: CodeableConcept;

  /**
   * Whether the entry represents an orderable item.
   */
  orderable: boolean;

  /**
   * The item in a catalog or definition.
   */
  referencedItem: Reference<
    | Medication
    | Device
    | Organization
    | Practitioner
    | PractitionerRole
    | HealthcareService
    | ActivityDefinition
    | PlanDefinition
    | SpecimenDefinition
    | ObservationDefinition
    | Binary
  >;

  /**
   * Used in supporting related concepts, e.g. NDC to RxNorm.
   */
  additionalIdentifier?: Identifier[];

  /**
   * Classes of devices, or ATC for medication.
   */
  classification?: CodeableConcept[];

  /**
   * Used to support catalog exchange even for unsupported products, e.g.
   * getting list of medications even if not prescribable.
   */
  status?: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The time period in which this catalog entry is expected to be active.
   */
  validityPeriod?: Period;

  /**
   * The date until which this catalog entry is expected to be active.
   */
  validTo?: string;

  /**
   * Typically date of issue is different from the beginning of the
   * validity. This can be used to see when an item was last updated.
   */
  lastUpdated?: string;

  /**
   * Used for examplefor Out of Formulary, or any specifics.
   */
  additionalCharacteristic?: CodeableConcept[];

  /**
   * User for example for ATC classification, or.
   */
  additionalClassification?: CodeableConcept[];

  /**
   * Used for example, to point to a substance, or to a device used to
   * administer a medication.
   */
  relatedEntry?: CatalogEntryRelatedEntry[];
}
