import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { ProdCharacteristic } from "./ProdCharacteristic";
import type { ProductShelfLife } from "./ProductShelfLife";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class DeviceDefinition extends DomainResource {
  resourceType: "DeviceDefinition";

  identifier?: Identifier[];
  udiDeviceIdentifier?: {
    deviceIdentifier: string;
    issuer: string;
    jurisdiction: string;
  }[];
  manufacturerString?: string;
  manufacturerReference?: Reference<Organization>;
  deviceName?: {
    name: string;
    type:
      | "udi-label-name"
      | "user-friendly-name"
      | "patient-reported-name"
      | "manufacturer-name"
      | "model-name"
      | "other";
  };
  modelNumber?: string;
  type?: CodeableConcept;
  specialization?: {
    systemType: string;
    version?: string;
  }[];
  version?: string[];
  safety?: CodeableConcept[];
  shelfLifeStorage?: ProductShelfLife[];
  physicalCharacteristics?: ProdCharacteristic;
  languageCode?: CodeableConcept[];
  capability?: {
    type: CodeableConcept;
    description?: string[];
  }[];
  property?: {
    type: CodeableConcept;
    valueQuantity?: Quantity[];
    valueCode?: CodeableConcept[];
  };
  owner?: Reference<Organization>;
  contact?: ContactPoint[];
  url?: string;
  onlineInformation?: string;
  note?: Annotation[];
  quantity?: Quantity;
  parentDevice?: Reference<DeviceDefinition>;
  material?: {
    substance: CodeableConcept;
    alternate?: boolean;
    allergenicIndicator?: boolean;
  }[];
}
