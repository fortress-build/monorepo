import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Money } from "./Money";
import type { ContactDetail } from "./ContactDetail";
import type { UsageContext } from "./UsageContext";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { Medication } from "./Medication";
import type { Substance } from "./Substance";
import type { Device } from "./Device";
import type { DomainResource } from "./Resource";


/**
 * The price for a ChargeItem may be calculated as a base price with
 * surcharges/deductions that apply in certain conditions. A
 * ChargeItemDefinition resource that defines the prices, factors and
 * conditions that apply to a billing code is currently under
 * development. The priceComponent element can be used to offer
 * transparency to the recipient of the Invoice of how the prices have
 * been calculated.
 */
export declare class PriceComponent {
  /**
   * This code identifies the type of the component.
   */
  type:
    | 'base'
    | 'surcharge'
    | 'deduction'
    | 'discount'
    | 'tax'
    | 'informational';

  /**
   * A code that identifies the component. Codes may be used to
   * differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: CodeableConcept;

  /**
   * The factor that has been applied on the base price for calculating
   * this component.
   */
  factor?: number;

  /**
   * The amount calculated for this component.
   */
  amount?: Money;
}

/**
 * Expressions that describe applicability criteria for the billing code.
 */
export declare class Applicability {
  /**
   * A brief, natural language description of the condition that
   * effectively communicates the intended semantics.
   */
  description?: string;

  /**
   * The media type of the language for the expression, e.g. &quot;text/cql&quot; for
   * Clinical Query Language expressions or &quot;text/fhirpath&quot; for FHIRPath
   * expressions.
   */
  language?: string;

  /**
   * An expression that returns true or false, indicating whether the
   * condition is satisfied. When using FHIRPath expressions, the %context
   * environment variable must be replaced at runtime with the ChargeItem
   * resource to which this definition is applied.
   */
  expression?: string;
}

/**
 * Group of properties which are applicable under the same conditions. If
 * no applicability rules are established for the group, then all
 * properties always apply.
 */
export declare class PropertyGroup {
  /**
   * Expressions that describe applicability criteria for the
   * priceComponent.
   */
  applicability?: Applicability[];

  /**
   * The price for a ChargeItem may be calculated as a base price with
   * surcharges/deductions that apply in certain conditions. A
   * ChargeItemDefinition resource that defines the prices, factors and
   * conditions that apply to a billing code is currently under
   * development. The priceComponent element can be used to offer
   * transparency to the recipient of the Invoice of how the prices have
   * been calculated.
   */
  priceComponent?: PriceComponent[];
}


export declare class ChargeItemDefinition extends DomainResource {
  resourceType: 'ChargeItemDefinition';
  /**
   * An absolute URI that is used to identify this charge item definition
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this charge item definition is (or will be)
   * published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the charge item definition is stored on
   * different servers.
   */
  url: string;

  /**
   * A formal identifier that is used to identify this charge item
   * definition when it is represented in other formats, or referenced in a
   * specification, model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the charge
   * item definition when it is referenced in a specification, model,
   * design or instance. This is an arbitrary value managed by the charge
   * item definition author and is not expected to be globally unique. For
   * example, it might be a timestamp (e.g. yyyymmdd) if a managed version
   * is not available. There is also no expectation that versions can be
   * placed in a lexicographical sequence. To provide a version consistent
   * with the Decision Support Service specification, use the format
   * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning
   * knowledge assets, refer to the Decision Support Service specification.
   * Note that a version is required for non-experimental active assets.
   */
  version?: string;

  /**
   * A short, descriptive, user-friendly title for the charge item
   * definition.
   */
  title?: string;

  /**
   * The URL pointing to an externally-defined charge item definition that
   * is adhered to in whole or in part by this definition.
   */
  derivedFromUri?: string[];

  /**
   * A larger definition of which this particular definition is a component
   * or step.
   */
  partOf?: string[];

  /**
   * As new versions of a protocol or guideline are defined, allows
   * identification of what versions are replaced by a new instance.
   */
  replaces?: string[];

  /**
   * The current state of the ChargeItemDefinition.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this charge item definition is
   * authored for testing purposes (or education/evaluation/marketing) and
   * is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * The date  (and optionally time) when the charge item definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the charge item definition
   * changes.
   */
  date?: string;

  /**
   * The name of the organization or individual that published the charge
   * item definition.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the charge item definition
   * from a consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate charge item definition
   * instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the charge item definition is
   * intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * A copyright statement relating to the charge item definition and/or
   * its contents. Copyright statements are generally legal restrictions on
   * the use and publishing of the charge item definition.
   */
  copyright?: string;

  /**
   * The date on which the resource content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  approvalDate?: string;

  /**
   * The date on which the resource content was last reviewed. Review
   * happens periodically after approval but does not change the original
   * approval date.
   */
  lastReviewDate?: string;

  /**
   * The period during which the charge item definition content was or is
   * planned to be in active use.
   */
  effectivePeriod?: Period;

  /**
   * The defined billing details in this resource pertain to the given
   * billing code.
   */
  code?: CodeableConcept;

  /**
   * The defined billing details in this resource pertain to the given
   * product instance(s).
   */
  instance?: Reference<Medication | Substance | Device>[];

  /**
   * Expressions that describe applicability criteria for the billing code.
   */
  applicability?: Applicability[];

  /**
   * Group of properties which are applicable under the same conditions. If
   * no applicability rules are established for the group, then all
   * properties always apply.
   */
  propertyGroup?: PropertyGroup[];
}

