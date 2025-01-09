import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Quantity } from "./Quantity";

export interface ProdCharacteristic {
  height?: Quantity;
  width?: Quantity;
  depth?: Quantity;
  weight?: Quantity;
  nominalVolume?: Quantity;
  externalDiameter?: Quantity;
  shape?: string;
  color?: string[];
  imprint?: string[];
  image?: Attachment[];
  scoring?: CodeableConcept;
}
