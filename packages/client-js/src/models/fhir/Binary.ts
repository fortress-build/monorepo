import type { Reference } from "./Reference";
import type { DomainResource, Resource } from './Resource';

/**
 * A resource that represents the data of a single raw artifact as
 * digital content accessible in its native format.  A Binary resource
 * can contain any content, whether text, image, pdf, zip archive, etc.
 */
export declare class Binary extends DomainResource {
  resourceType: 'Binary';
  /**
   * MimeType of the binary content represented as a standard MimeType (BCP
   * 13).
   */
  contentType: string;

  /**
   * This element identifies another resource that can be used as a proxy
   * of the security sensitivity to use when deciding and enforcing access
   * control rules for the Binary resource. Given that the Binary resource
   * contains very few elements that can be used to determine the
   * sensitivity of the data and relationships to individuals, the
   * referenced resource stands in as a proxy equivalent for this purpose.
   * This referenced resource may be related to the Binary (e.g. Media,
   * DocumentReference), or may be some non-related Resource purely as a
   * security proxy. E.g. to identify that the binary resource relates to a
   * patient, and access should only be granted to applications that have
   * access to the patient.
   */
  securityContext?: Reference<Resource>;

  /**
   * The actual content, base64 encoded.
   */
  data?: string;
}