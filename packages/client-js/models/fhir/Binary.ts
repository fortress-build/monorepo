import type { Reference } from "./Reference";
import type { DomainResource, Resource } from './Resource';

export declare class Binary extends DomainResource {
  resourceType: 'Binary';
  contentType: string;
  securityContext?: Reference<Resource>;
  data?: string;
}
