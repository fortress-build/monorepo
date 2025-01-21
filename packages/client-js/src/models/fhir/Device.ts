import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { DeviceDefinition } from "./DeviceDefinition";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class Device extends DomainResource {
  resourceType: "Device";

  identifier?: Identifier[];
  definition?: Reference<DeviceDefinition>;
  udiCarrier?: {
    deviceIdentifier?: string;
    issuer?: string;
    jurisdiction?: string;
    carrierAIDC?: string;
    carrierHRF?: string;
    entryType?:
      | "barcode"
      | "rfid"
      | "manual"
      | "card"
      | "self-reported"
      | "unknown";
  }[];
  status?: "active" | "inactive" | "entered-in-error" | "unknown";
  statusReason?: CodeableConcept[];
  distinctIdentifier?: string;
  manufacturer?: string;
  manufactureDate?: string;
  expirationDate?: string;
  lotNumber?: string;
  serialNumber?: string;
  deviceName?: {
    name: string;
    type:
      | "udi-label-name"
      | "user-friendly-name"
      | "patient-reported-name"
      | "manufacturer-name"
      | "model-name"
      | "other";
  }[];
  modelNumber?: string;
  partNumber?: string;
  type?: CodeableConcept;
  specialization?: {
    systemType: CodeableConcept;
    version?: string;
  }[];
  version?: {
    type?: CodeableConcept;
    component?: Identifier;
    value: string;
  }[];
  property?: {
    type: CodeableConcept;
    valueQuantity?: Quantity[];
    valueCode?: CodeableConcept[];
  }[];
  patient?: Reference<Patient>;
  owner?: Reference<Organization>;
  contact?: ContactPoint[];
  location?: Reference<Location>;
  url?: string;
  note?: Annotation[];
  safety?: CodeableConcept[];
  parent?: Reference<Device>;
}
