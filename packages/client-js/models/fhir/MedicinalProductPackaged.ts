import type { CodeableConcept } from "./CodeableConcept";
import type { DeviceDefinition } from "./DeviceDefinition";
import type { Identifier } from "./Identifier";
import type { MarketingStatus } from "./MarketingStatus";
import type { MedicinalProduct } from "./MedicinalProduct";
import type { MedicinalProductAuthorization } from "./MedicinalProductAuthorization";
import type { MedicinalProductManufactured } from "./MedicinalProductManufactured";
import type { Organization } from "./Organization";
import type { ProdCharacteristic } from "./ProdCharacteristic";
import type { ProductShelfLife } from "./ProductShelfLife";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class BatchIdentifier {
  outerPackaging: Identifier;
  immediatePackaging?: Identifier;
}

export declare class PackageItem {
  identifier?: Identifier[];
  type: CodeableConcept;
  quantity: Quantity;
  material?: CodeableConcept[];
  alternateMaterial?: CodeableConcept[];
  device?: Reference<DeviceDefinition>[];
  manufacturedItem?: Reference<MedicinalProductManufactured>[];
  packageItem?: PackageItem[];
  physicalCharacteristics?: ProdCharacteristic;
  otherCharacteristics?: CodeableConcept[];
  shelfLifeStorage?: ProductShelfLife[];
  manufacturer?: Reference<Organization>[];
}

export declare class MedicinalProductPackaged extends DomainResource {
  resourceType: 'MedicinalProductPackaged';
  identifier?: Identifier[];
  subject?: Reference<MedicinalProduct>[];
  description?: string;
  legalStatusOfSupply?: CodeableConcept;
  marketingStatus?: MarketingStatus[];
  marketingAuthorization?: Reference<MedicinalProductAuthorization>;
  manufacturer?: Reference<Organization>[];
  batchIdentifier?: BatchIdentifier[];
  packageItem: PackageItem[];
}