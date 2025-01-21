import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import type { ElementDefinition } from "./ElementDefinition";
import type { Identifier } from "./Identifier";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

type FHIRVersion = '0.01' | '0.05' | '0.06' | '4.0.0' | '4.0.1'; // Add other versions as needed
type ContextType = 'fhirpath' | 'element' | 'extension';
type StatusType = 'draft' | 'active' | 'retired' | 'unknown';
type KindType = 'primitive-type' | 'complex-type' | 'resource' | 'logical';
type DerivationType = 'specialization' | 'constraint';

export interface StructureDefinitionContext {
  type: ContextType;
  expression: string;
}

export interface StructureDefinitionMapping {
  identity: string;
  uri?: string;
  name?: string;
  comment?: string;
}

export interface StructureDefinitionSnapshot {
  element: ElementDefinition[];
}

export interface StructureDefinitionDifferential {
  element: ElementDefinition[];
}

export declare class StructureDefinition extends DomainResource{
  resourceType: 'StructureDefinition';
  url: string;
  identifier?: Identifier[];
  version?: string;
  name: string;
  title?: string;
  status: StatusType;
  experimental?: boolean;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  copyright?: string;
  keyword?: Coding[];
  fhirVersion?: FHIRVersion;
  mapping?: StructureDefinitionMapping[];
  kind: KindType;
  abstract: boolean;
  context?: StructureDefinitionContext[];
  contextInvariant?: string[];
  type: string;
  baseDefinition?: string;
  derivation?: DerivationType;
  snapshot?: StructureDefinitionSnapshot;
  differential?: StructureDefinitionDifferential;
}
