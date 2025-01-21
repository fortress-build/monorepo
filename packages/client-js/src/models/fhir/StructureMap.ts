import type { Address } from './Address';
import type { Age } from './Age';
import type { Annotation } from './Annotation';
import type { Attachment } from './Attachment';
import type { CodeableConcept } from './CodeableConcept';
import type { Coding } from './Coding';
import type { ContactDetail } from './ContactDetail';
import type { ContactPoint } from './ContactPoint';
import type { Contributor } from './Contributor';
import type { Count } from './Count';
import type { DataRequirement } from './DataRequirement';
import type { Distance } from './Distance';
import type { Dosage } from './Dosage';
import type { Duration } from './Duration';
import type { Expression } from './Expression';
import type { HumanName } from './HumanName';
import type { Identifier } from './Identifier';
import type { Meta } from './Meta';
import type { Money } from './Money';
import type { ParameterDefinition } from './ParameterDefinition';
import type { Period } from './Period';
import type { Quantity } from './Quantity';
import type { Range } from './Range';
import type { Ratio } from './Ratio';
import type { Reference } from './Reference';
import type { RelatedArtifact } from './RelatedArtifact';
import type { DomainResource, Resource } from './Resource';
import type { SampledData } from './SampledData';
import type { Signature } from './Signature';
import type { Timing } from './Timing';
import type { TriggerDefinition } from './TriggerDefinition';
import type { UsageContext } from './UsageContext';

export declare class StructureMapGroupRuleTargetParameter {
  valueId?: string;
  valueString?: string;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueDecimal?: number;
}

export declare class StructureMapGroupRuleTarget {
  context?: string;
  contextType?: 'type' | 'variable';
  element?: string;
  variable?: string;
  listMode?: Array<'first' | 'share' | 'last' | 'collate'>;
  listRuleId?: string;
  transform?: 'create' | 'copy' | 'truncate' | 'escape' | 'cast' | 'append' | 'translate' | 
    'reference' | 'dateOp' | 'uuid' | 'pointer' | 'evaluate' | 'cc' | 'c' | 'qty' | 'id' | 'cp';
  parameter?: StructureMapGroupRuleTargetParameter[];
}

export declare class StructureMapGroupRuleSource {
  context: string;
  min?: number;
  max?: string;
  type?: string;
  element?: string;
  listMode?: 'first' | 'not_first' | 'last' | 'not_last' | 'only_one';
  variable?: string;
  condition?: string;
  check?: string;
  logMessage?: string;
  defaultValueBase64Binary?: string;
  defaultValueBoolean?: boolean;
  defaultValueCanonical?: string;
  defaultValueCode?: string;
  defaultValueDate?: string;
  defaultValueDateTime?: string;
  defaultValueDecimal?: number;
  defaultValueId?: string;
  defaultValueInstant?: string;
  defaultValueInteger?: number;
  defaultValueMarkdown?: string;
  defaultValueOid?: string;
  defaultValuePositiveInt?: number;
  defaultValueString?: string;
  defaultValueTime?: string;
  defaultValueUnsignedInt?: number;
  defaultValueUri?: string;
  defaultValueUrl?: string;
  defaultValueUuid?: string;
  defaultValueAddress?: Address;
  defaultValueAge?: Age;
  defaultValueAnnotation?: Annotation;
  defaultValueAttachment?: Attachment;
  defaultValueCodeableConcept?: CodeableConcept;
  defaultValueCoding?: Coding;
  defaultValueContactPoint?: ContactPoint;
  defaultValueCount?: Count;
  defaultValueDistance?: Distance;
  defaultValueDuration?: Duration;
  defaultValueHumanName?: HumanName;
  defaultValueIdentifier?: Identifier;
  defaultValueMoney?: Money;
  defaultValuePeriod?: Period;
  defaultValueQuantity?: Quantity;
  defaultValueRange?: Range;
  defaultValueRatio?: Ratio;
  defaultValueReference?: Reference<Resource>;;
  defaultValueSampledData?: SampledData;
  defaultValueSignature?: Signature;
  defaultValueTiming?: Timing;
  defaultValueContactDetail?: ContactDetail;
  defaultValueContributor?: Contributor;
  defaultValueDataRequirement?: DataRequirement;
  defaultValueExpression?: Expression;
  defaultValueParameterDefinition?: ParameterDefinition;
  defaultValueRelatedArtifact?: RelatedArtifact;
  defaultValueTriggerDefinition?: TriggerDefinition;
  defaultValueUsageContext?: UsageContext;
  defaultValueDosage?: Dosage;
  defaultValueMeta?: Meta;
}

export declare class StructureMapGroupRuleDependent {
  name: string;
  variable: string[];
}

export declare class StructureMapGroupRule {
  name: string;
  source: StructureMapGroupRuleSource[];
  target?: StructureMapGroupRuleTarget[];
  dependent?: StructureMapGroupRuleDependent[];
  documentation?: string;
}

export declare class StructureMapGroupInput {
  name: string;
  type?: string;
  mode: 'source' | 'target';
  documentation?: string;
}

export declare class StructureMapGroup {
  name: string;
  extends?: string;
  typeMode: 'none' | 'types' | 'type-and-types';
  documentation?: string;
  input: StructureMapGroupInput[];
  rule: StructureMapGroupRule[];
}

export declare class StructureMapStructure {
  url: string;
  mode: 'source' | 'queried' | 'target' | 'produced';
  alias?: string;
  documentation?: string;
}

export declare class StructureMap extends DomainResource{
  resourceType: 'StructureMap';
  url: string;
  identifier?: Identifier[];
  version?: string;
  name: string;
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
  structure?: StructureMapStructure[];
  import?: string[];
  group: StructureMapGroup[];
}
