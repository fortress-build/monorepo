import type { ContactDetail } from './ContactDetail';
import type { DomainResource } from './Resource';
import type { UsageContext } from './UsageContext';

/**
 * Information about how a resource is related to the compartment.
 */
export declare class CompartmentDefinitionResource {
  /**
   * The name of a resource supported by the server.
   */
  code: string;

  /**
   * The name of a search parameter that represents the link to the
   * compartment. More than one may be listed because a resource may be
   * linked to a compartment in more than one way,.
   */
  param?: string[];

  /**
   * Additional documentation about the resource and compartment.
   */
  documentation?: string;
}

/**
 * A compartment definition that defines how resources are accessed on a
 * server.
 */
export declare class CompartmentDefinition extends DomainResource {
  resourceType: 'CompartmentDefinition';

  /**
   * An absolute URI that is used to identify this compartment definition
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this compartment definition is (or will be)
   * published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the compartment definition is stored on
   * different servers.
   */
  url: string;

  /**
   * The identifier that is used to identify this version of the
   * compartment definition when it is referenced in a specification,
   * model, design or instance. This is an arbitrary value managed by the
   * compartment definition author and is not expected to be globally
   * unique. For example, it might be a timestamp (e.g. yyyymmdd) if a
   * managed version is not available. There is also no expectation that
   * versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * A natural language name identifying the compartment definition. This
   * name should be usable as an identifier for the module by machine
   * processing applications such as code generation.
   */
  name: string;

  /**
   * The status of this compartment definition. Enables tracking the
   * life-cycle of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this compartment definition is
   * authored for testing purposes (or education/evaluation/marketing) and
   * is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * The date  (and optionally time) when the compartment definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the compartment definition
   * changes.
   */
  date?: string;

  /**
   * The name of the organization or individual that published the
   * compartment definition.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the compartment definition
   * from a consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate compartment definition
   * instances.
   */
  useContext?: UsageContext[];

  /**
   * Explanation of why this compartment definition is needed and why it
   * has been designed as it has.
   */
  purpose?: string;

  /**
   * Which compartment this definition describes.
   */
  code: 'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device';

  /**
   * Whether the search syntax is supported,.
   */
  search: boolean;

  /**
   * Information about how a resource is related to the compartment.
   */
  resource?: CompartmentDefinitionResource[];
}