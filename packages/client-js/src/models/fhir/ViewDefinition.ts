import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { Meta } from "./Meta";
import type { ResourceType } from "./ResourceType";
import type { UsageContext } from "./UsageContext";

// Column Tag
export declare class ViewDefinitionSelectColumnTag {
  name: string;
  value: string;
}

// Column
export declare class ViewDefinitionSelectColumn {
  path: string;
  name: string;
  description?: string;
  collection?: boolean;
  type?: string;
  tag?: ViewDefinitionSelectColumnTag[];
}

// Where
export declare class ViewDefinitionWhere {
  path: string;
  description?: string;
}

// Select (with recursive definition)
export declare class ViewDefinitionSelect {
  column?: ViewDefinitionSelectColumn[];
  select?: ViewDefinitionSelect[];
  forEach?: string;
  forEachOrNull?: string;
  unionAll?: ViewDefinitionSelect[];
}

// Constant
export declare class ViewDefinitionConstant {
  name: string;
  valueBase64Binary?: string;
  valueBoolean?: boolean;
  valueCanonical?: string;
  valueCode?: string;
  valueDate?: string;
  valueDateTime?: string;
  valueDecimal?: number;
  valueId?: string;
  valueInstant?: string;
  valueInteger?: number;
  valueInteger64?: string;
  valueOid?: string;
  valueString?: string;
  valuePositiveInt?: number;
  valueTime?: string;
  valueUnsignedInt?: number;
  valueUri?: string;
  valueUrl?: string;
  valueUuid?: string;
}

type FHIRVersion = '0.01' | '0.05' | '0.06' | '0.11' | '0.0.80' | '0.0.81' | '0.0.82' | 
  '0.4.0' | '0.5.0' | '1.0.0' | '1.0.1' | '1.0.2' | '1.1.0' | '1.4.0' | '1.6.0' | 
  '1.8.0' | '3.0.0' | '3.0.1' | '3.3.0' | '3.5.0' | '4.0.0' | '4.0.1';

type ViewDefinitionStatus = 'draft' | 'active' | 'retired' | 'unknown';

// Main ViewDefinition
export declare class ViewDefinition {
  url?: string;
  identifier?: Identifier;
  name?: string;
  title?: string;
  meta?: Meta;
  status: ViewDefinitionStatus;
  experimental?: boolean;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  copyright?: string;
  resource: ResourceType;
  fhirVersion?: FHIRVersion[];
  constant?: ViewDefinitionConstant[];
  select: ViewDefinitionSelect[];
  where?: ViewDefinitionWhere[];
}
