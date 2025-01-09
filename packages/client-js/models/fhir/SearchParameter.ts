import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { DomainResource } from "./Resource";
import type { ResourceType } from "./ResourceType";
import type { UsageContext } from "./UsageContext";

export declare class SearchParameterComponentType {
  definition: string;
  expression: string;
}

type SearchParameterStatus = 'draft' | 'active' | 'retired' | 'unknown';
type SearchParameterType = 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';
type XPathUsage = 'normal' | 'phonetic' | 'nearby' | 'distance' | 'other';
type Comparator = 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap';
type Modifier = 'missing' | 'exact' | 'contains' | 'not' | 'text' | 'in' | 'not-in' | 'below' | 'above' | 'type' | 'identifier' | 'ofType';

export declare class SearchParameter extends DomainResource{
  resourceType: 'SearchParameter';
  url: string;
  version?: string;
  name: string;
  derivedFrom?: string;
  status: SearchParameterStatus;
  experimental?: boolean;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  code: string;
  base: ResourceType[];
  type: SearchParameterType;
  expression?: string;
  xpath?: string;
  xpathUsage?: XPathUsage;
  target?: ResourceType[];
  multipleOr?: boolean;
  multipleAnd?: boolean;
  comparator?: Comparator[];
  modifier?: Modifier[];
  chain?: string[];
  component?: SearchParameterComponentType[];
}
