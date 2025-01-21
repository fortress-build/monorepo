import type { CodeableConcept } from './CodeableConcept';
import type { Coding } from './Coding';
import type { Identifier } from './Identifier';
import type { Period } from './Period';
import type { Quantity } from './Quantity';
import type { Reference } from './Reference';
import type { Resource } from './Resource';

export type Parameter = {
  name: string;

  resource?: Resource;
  part?: Parameter[];

  valueBoolean?: boolean;
  valueString?: string;
  valueInteger?: number;
  valueDate?: string;
  valueDateTime?: string;
  valueDecimal?: number;
  valueReference?: Reference<Resource>;
  valueCodeableConcept?: CodeableConcept;
  valueCoding?: Coding;
  valueIdentifier?: Identifier;
  valuePeriod?: Period;
  valueQuantity?: Quantity;
};

export declare class Parameters extends Resource {
  resourceType: 'Parameters';
  parameter: Parameter[];
}

// export type Parameters = v.InferOutput<typeof Parameters>;
