import type { DomainResource } from "./Resource";
import type { Identifier } from "./Identifier";
import type { ContactDetail } from "./ContactDetail";
import type { UsageContext } from "./UsageContext";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";

type ValueSetComposeIncludeConceptDesignation = {
  language?: string;
  use?: Coding;
  value: string;
}

type ValueSetComposeIncludeConcept = {
  code: string;
  display?: string;
  designation?: ValueSetComposeIncludeConceptDesignation[];
}

type ValueSetComposeIncludeFilter = {
  property: string;
  op: '=' | 'is-a' | 'descendent-of' | 'is-not-a' | 'regex' | 'in' | 'not-in' | 'generalizes' | 'exists';
  value: string;
}

type ValueSetComposeInclude = {
  system?: string;
  version?: string;
  concept?: ValueSetComposeIncludeConcept[];
  filter?: ValueSetComposeIncludeFilter[];
  valueSet?: string[];
}

type ValueSetCompose = {
  lockedDate?: string;
  inactive?: boolean;
  include: ValueSetComposeInclude[];
  exclude?: ValueSetComposeInclude[];
}

export declare class ValueSet extends DomainResource{
  resourceType: 'ValueSet';
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
  immutable?: boolean;
  purpose?: string;
  copyright?: string;
  compose?: ValueSetCompose;
}
