import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

type OperationDefinitionParameterReferencedFrom = {
  source: string;
  sourceId?: string;
}

type OperationDefinitionParameterBinding = {
  strength: 'required' | 'extensible' | 'preferred' | 'example';
  valueSet: string;
}

type OperationDefinitionParameter = {
  name: string;
  use: 'in' | 'out';
  min: number;
  max: string;
  documentation?: string;
  type?: string;
  targetProfile?: string[];
  searchType?: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';
  binding?: OperationDefinitionParameterBinding;
  referencedFrom?: OperationDefinitionParameterReferencedFrom[];
  part?: OperationDefinitionParameter[];
}

type OperationDefinitionOverload = {
  parameterName?: string[];
  comment?: string;
}

export declare class OperationDefinition extends DomainResource{
  resourceType: 'OperationDefinition';
  url?: string;
  version?: string;
  name: string;
  title?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  kind: 'operation' | 'query';
  experimental?: boolean;
  date?: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  affectsState?: boolean;
  code: string;
  comment?: string;
  base?: string;
  resource?: string[];
  system: boolean;
  type: boolean;
  instance: boolean;
  inputProfile?: string;
  outputProfile?: string;
  parameter?: OperationDefinitionParameter[];
  overload?: OperationDefinitionOverload[];
}
