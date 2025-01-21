import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { UsageContext } from "./UsageContext";

interface ConceptMapGroupElementTargetDependsOn {
  property: string;
  system?: string;
  value: string;
  display?: string;
}

interface ConceptMapGroupElementTarget {
  code?: string;
  display?: string;
  equivalence: 'relatedto' | 'equivalent' | 'equal' | 'wider' | 'subsumes' | 
               'narrower' | 'specializes' | 'inexact' | 'unmatched' | 'disjoint';
  comment?: string;
  dependsOn?: ConceptMapGroupElementTargetDependsOn[];
  product?: ConceptMapGroupElementTargetDependsOn[];
}

interface ConceptMapGroupElement {
  code?: string;
  display?: string;
  target?: ConceptMapGroupElementTarget[];
}

interface ConceptMapGroupUnmapped {
  mode: 'provided' | 'fixed' | 'other-map';
  code?: string;
  display?: string;
  url?: string;
}

interface ConceptMapGroup {
  source?: string;
  sourceVersion?: string;
  target?: string;
  targetVersion?: string;
  element: ConceptMapGroupElement[];
  unmapped?: ConceptMapGroupUnmapped;
}

export declare class ConceptMap {
  resourceType: 'ConceptMap';
  url?: string;
  identifier?: Identifier;
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
  sourceUri?: string;
  sourceCanonical?: string;
  targetUri?: string;
  targetCanonical?: string;
  group?: ConceptMapGroup[];
}
