//Need to look over later

import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import type { Organization } from "./Organization";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

// Convert nested types first
export declare class Software {
  name: string;
  version?: string;
  releaseDate?: string;
}

export declare class Implementation {
  description: string;
  url?: string;
  custodian?: Reference<Organization>;
}

export declare class RestSecurity {
  cors?: boolean;
  service?: CodeableConcept[];
  description?: string;
}

export declare class RestResourceInteraction {
  code: 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type';
  documentation?: string;
}

export declare class RestResourceSearchParam {
  name: string;
  definition?: string;
  type: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';
  documentation?: string;
}

export declare class RestResourceOperation {
  name: string;
  definition: string;
  documentation?: string;
}

export declare class RestResource {
  type: string; // ResourceType will need to be defined
  profile?: string;
  supportedProfile?: string[];
  documentation?: string;
  interaction?: RestResourceInteraction[];
  versioning?: 'no-version' | 'versioned' | 'versioned-update';
  readHistory?: boolean;
  updateCreate?: boolean;
  conditionalCreate?: boolean;
  conditionalRead?: 'not-supported' | 'modified-since' | 'not-match' | 'full-support';
  conditionalUpdate?: boolean;
  conditionalDelete?: 'not-supported' | 'single' | 'multiple';
  referencePolicy?: Array<'literal' | 'logical' | 'resolves' | 'enforced' | 'local'>;
  searchInclude?: string[];
  searchRevInclude?: string[];
  searchParam?: RestResourceSearchParam[];
  operation?: RestResourceOperation[];
}

export declare class RestInteraction {
  code: 'transaction' | 'batch' | 'search-system' | 'history-system'
  documentation: string;
}

export declare class Rest {
  mode: 'server' | 'code';
  documentation?: string;
  security?: RestSecurity;
  resource?: RestResource[]
  interaction?: RestResourceInteraction
  searchParam?: string[];
  operation?: string[];
  compartment?: string[];
}

export declare class MessagingEndpoint {
  protocol: Coding;
  address: string;
}

export declare class SupportedMessage {
  mode: 'sender' | 'receiver';
  definition: string;  
}

export declare class Messaging {
  endpoint?: MessagingEndpoint[];
  reliableCache?: number;
  documentation?: string;
  supportedMessage?: SupportedMessage[];
}

export declare class Document {
  mode: 'producer' | 'consumer';
  documentation?: string;
  profile: string;  
}

// Main class
export declare class CapabilityStatement extends DomainResource {
  resourceType: 'CapabilityStatement';
  url?: string;
  version?: string;
  name?: string;
  title?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  experimental?: boolean;
  date: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  copyright?: string;
  kind: 'instance' | 'capability' | 'requirements';
  instantiates?: string[];
  imports?: string[];
  software?: Software;
  implementation?: Implementation;
  fhirVersion: string;
  format: 'xml' | 'json' | 'ttl' | 'mime type';
  patchFormat: string;
  implementationGuide: string;
  rest: Rest[];
  messaging?: Messaging[];
  document?: Document[];
}
