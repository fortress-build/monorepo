import type { Identifier } from "./Identifier";
import type { Coding } from "./Coding";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { UsageContext } from "./UsageContext";
import type { DomainResource } from "./Resource";

export declare class CodeSystemConceptDesignation {
  language?: string;
  use?: Coding;
  value: string;
}

export declare class CodeSystemConceptProperty {
  code: string;
  valueCode?: string;
  valueCoding?: Coding;
  valueString?: string;
  valueInteger?: number;
  valueBoolean?: boolean;
  valueDateTime?: string;
  valueDecimal?: number;
}

export declare class CodeSystemConcept {
  code: string;
  display?: string;
  definition?: string;
  designation?: CodeSystemConceptDesignation[];
  property?: CodeSystemConceptProperty[];
  concept?: CodeSystemConcept[];
}

export declare class CodeSystemFilter {
  code: string;
  description?: string;
  operator: Array<'=' | 'is-a' | 'descendent-of' | 'is-not-a' | 'regex' | 'in' | 'not-in' | 'generalizes' | 'exists'>;
  value: string;
}

export declare class CodeSystemProperty {
  code: string;
  uri?: string;
  description?: string;
  type: 'code' | 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal';
}

export declare class CodeSystem extends DomainResource{
  resourceType: 'CodeSystem';
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  experimental?: boolean;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  copyright?: string;
  caseSensitive?: boolean;
  valueSet?: string;
  hierarchyMeaning?: 'grouped-by' | 'is-a' | 'part-of' | 'classified-with';
  compositional?: boolean;
  versionNeeded?: boolean;
  content: 'not-present' | 'example' | 'fragment' | 'complete' | 'supplement';
  supplements?: string;
  count?: number;
  filter?: CodeSystemFilter[];
  property?: CodeSystemProperty[];
  concept?: CodeSystemConcept[];
}
