import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { UsageContext } from "./UsageContext";

/**
 * A set of additional dependencies for this mapping to hold. This
 * mapping is only applicable if the specified element can be resolved,
 * and it has the specified value.
 */
interface ConceptMapGroupElementTargetDependsOn {
  /**
   * A reference to an element that holds a coded value that corresponds to
   * a code system property. The idea is that the information model carries
   * an element somewhere that is labeled to correspond with a code system
   * property.
   */
  property: string;

  /**
   * An absolute URI that identifies the code system of the dependency code
   * (if the source/dependency is a value set that crosses code systems).
   */
  system?: string;

  /**
   * Identity (code or path) or the element/item/ValueSet/text that the map
   * depends on / refers to.
   */
  value: string;

  /**
   * The display for the code. The display is only provided to help editors
   * when editing the concept map.
   */
  display?: string;
}

/**
 * A concept from the target value set that this concept maps to.
 */
interface ConceptMapGroupElementTarget {
  /**
   * Identity (code or path) or the element/item that the map refers to.
   */
  code?: string;

  /**
   * The display for the code. The display is only provided to help editors
   * when editing the concept map.
   */
  display?: string;

  /**
   * The equivalence between the source and target concepts (counting for
   * the dependencies and products). The equivalence is read from target to
   * source (e.g. the target is 'wider' than the source).
   */
  equivalence:
    | 'relatedto'
    | 'equivalent'
    | 'equal'
    | 'wider'
    | 'subsumes'
    | 'narrower'
    | 'specializes'
    | 'inexact'
    | 'unmatched'
    | 'disjoint';

  /**
   * A description of status/issues in mapping that conveys additional
   * information not represented in  the structured data.
   */
  comment?: string;

  /**
   * A set of additional dependencies for this mapping to hold. This
   * mapping is only applicable if the specified element can be resolved,
   * and it has the specified value.
   */
  dependsOn?: ConceptMapGroupElementTargetDependsOn[];

  /**
   * A set of additional outcomes from this mapping to other elements. To
   * properly execute this mapping, the specified element must be mapped to
   * some data element or source that is in context. The mapping may still
   * be useful without a place for the additional data elements, but the
   * equivalence cannot be relied on.
   */
  product?: ConceptMapGroupElementTargetDependsOn[];
}


/**
 * Mappings for an individual concept in the source to one or more
 * concepts in the target.
 */
interface ConceptMapGroupElement {
  /**
   * Identity (code or path) or the element/item being mapped.
   */
  code?: string;

  /**
   * The display for the code. The display is only provided to help editors
   * when editing the concept map.
   */
  display?: string;

  /**
   * A concept from the target value set that this concept maps to.
   */
  target?: ConceptMapGroupElementTarget[];
}

/**
 * What to do when there is no mapping for the source concept. &quot;Unmapped&quot;
 * does not include codes that are unmatched, and the unmapped element is
 * ignored in a code is specified to have equivalence = unmatched.
 */
interface ConceptMapGroupUnmapped {
  /**
   * Defines which action to take if there is no match for the source
   * concept in the target system designated for the group. One of 3
   * actions are possible: use the unmapped code (this is useful when doing
   * a mapping between versions, and only a few codes have changed), use a
   * fixed code (a default code), or alternatively, a reference to a
   * different concept map can be provided (by canonical URL).
   */
  mode: 'provided' | 'fixed' | 'other-map';

  /**
   * The fixed code to use when the mode = 'fixed'  - all unmapped codes
   * are mapped to a single fixed code.
   */
  code?: string;

  /**
   * The display for the code. The display is only provided to help editors
   * when editing the concept map.
   */
  display?: string;

  /**
   * The canonical reference to an additional ConceptMap resource instance
   * to use for mapping if this ConceptMap resource contains no matching
   * mapping for the source concept.
   */
  url?: string;
}

/**
 * A group of mappings that all have the same source and target system.
 */
interface ConceptMapGroup {
  /**
   * An absolute URI that identifies the source system where the concepts
   * to be mapped are defined.
   */
  source?: string;

  /**
   * The specific version of the code system, as determined by the code
   * system authority.
   */
  sourceVersion?: string;

  /**
   * An absolute URI that identifies the target system that the concepts
   * will be mapped to.
   */
  target?: string;

  /**
   * The specific version of the code system, as determined by the code
   * system authority.
   */
  targetVersion?: string;

  /**
   * Mappings for an individual concept in the source to one or more
   * concepts in the target.
   */
  element: ConceptMapGroupElement[];

  /**
   * What to do when there is no mapping for the source concept. &quot;Unmapped&quot;
   * does not include codes that are unmatched, and the unmapped element is
   * ignored in a code is specified to have equivalence = unmatched.
   */
  unmapped?: ConceptMapGroupUnmapped;
}



/**
 * A statement of relationships from one set of concepts to one or more
 * other concepts - either concepts in code systems, or data element/data
 * element concepts, or classes in class models.
 */
export declare class ConceptMap {
  resourceType: 'ConceptMap';

  /**
   * An absolute URI that is used to identify this concept map when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this concept map is (or will be) published. This URL can
   * be the target of a canonical reference. It SHALL remain the same when
   * the concept map is stored on different servers.
   */
  url?: string;

  /**
   * A formal identifier that is used to identify this concept map when it
   * is represented in other formats, or referenced in a specification,
   * model, design or an instance.
   */
  identifier?: Identifier;

  /**
   * The identifier that is used to identify this version of the concept
   * map when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the concept map author
   * and is not expected to be globally unique. For example, it might be a
   * timestamp (e.g. yyyymmdd) if a managed version is not available. There
   * is also no expectation that versions can be placed in a
   * lexicographical sequence.
   */
  version?: string;

  /**
   * A natural language name identifying the concept map. This name should
   * be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for the concept map.
   */
  title?: string;

  /**
   * The status of this concept map. Enables tracking the life-cycle of the
   * content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this concept map is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * The date  (and optionally time) when the concept map was published.
   * The date must change when the business version changes and it must
   * change if the status code changes. In addition, it should change when
   * the substantive content of the concept map changes.
   */
  date?: string;

  /**
   * The name of the organization or individual that published the concept
   * map.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the concept map from a
   * consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate concept map instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the concept map is intended to
   * be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this concept map is needed and why it has been
   * designed as it has.
   */
  purpose?: string;

  /**
   * A copyright statement relating to the concept map and/or its contents.
   * Copyright statements are generally legal restrictions on the use and
   * publishing of the concept map.
   */
  copyright?: string;

  /**
   * Identifier for the source value set that contains the concepts that
   * are being mapped and provides context for the mappings.
   */
  sourceUri?: string;

  /**
   * Identifier for the source value set that contains the concepts that
   * are being mapped and provides context for the mappings.
   */
  sourceCanonical?: string;

  /**
   * The target value set provides context for the mappings. Note that the
   * mapping is made between concepts, not between value sets, but the
   * value set provides important context about how the concept mapping
   * choices are made.
   */
  targetUri?: string;

  /**
   * The target value set provides context for the mappings. Note that the
   * mapping is made between concepts, not between value sets, but the
   * value set provides important context about how the concept mapping
   * choices are made.
   */
  targetCanonical?: string;

  /**
   * A group of mappings that all have the same source and target system.
   */
  group?: ConceptMapGroup[];
}
