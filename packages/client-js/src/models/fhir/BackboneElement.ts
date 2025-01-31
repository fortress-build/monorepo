import type { Extension } from "./Extension";

/**
 * Base definition for all elements that are defined inside a resource -
 * but not those in a data type.
 */
export declare class BackboneElement {
  modiferExtension: Extension[];
}
