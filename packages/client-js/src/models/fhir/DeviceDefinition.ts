import type { Annotation } from './Annotation';
import type { CodeableConcept } from './CodeableConcept';
import type { ContactPoint } from './ContactPoint';
import type { Identifier } from './Identifier';
import type { Organization } from './Organization';
import type { ProdCharacteristic } from './ProdCharacteristic';
import type { ProductShelfLife } from './ProductShelfLife';
import type { Quantity } from './Quantity';
import type { Reference } from './Reference';
import type { DomainResource } from './Resource';

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export declare class DeviceDefinition extends DomainResource {
  resourceType: 'DeviceDefinition';

  /**
   * Unique instance identifiers assigned to a device by the software,
   * manufacturers, other organizations or owners. For example: handle ID.
   */
  identifier?: Identifier[];

  /**
   * Unique device identifier (UDI) assigned to device label or package.
   * Note that the Device may include multiple udiCarriers as it either may
   * include just the udiCarrier for the jurisdiction it is sold, or for
   * multiple jurisdictions it could have been sold.
   */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /**
   * A name of the manufacturer.
   */
  manufacturerString?: string;

  /**
   * A name of the manufacturer.
   */
  manufacturerReference?: Reference<Organization>;

  /**
   * A name given to the device to identify it.
   */
  deviceName?: DeviceDefinitionDeviceName[];

  /**
   * The model number for the device.
   */
  modelNumber?: string;

  /**
   * What kind of device or device system this is.
   */
  type?: CodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the
   * device conforms for a particular purpose, and used for the
   * communication.
   */
  specialization?: DeviceDefinitionSpecialization[];

  /**
   * The available versions of the device, e.g., software versions.
   */
  version?: string[];

  /**
   * Safety characteristics of the device.
   */
  safety?: CodeableConcept[];

  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: ProductShelfLife[];

  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: ProdCharacteristic;

  /**
   * Language code for the human-readable text strings produced by the
   * device (all supported).
   */
  languageCode?: CodeableConcept[];

  /**
   * Device capabilities.
   */
  capability?: DeviceDefinitionCapability[];

  /**
   * The actual configuration settings of a device as it actually operates,
   * e.g., regulation status, time properties.
   */
  property?: DeviceDefinitionProperty[];

  /**
   * An organization that is responsible for the provision and ongoing
   * maintenance of the device.
   */
  owner?: Reference<Organization>;

  /**
   * Contact details for an organization or a particular human that is
   * responsible for the device.
   */
  contact?: ContactPoint[];

  /**
   * A network address on which the device may be contacted directly.
   */
  url?: string;

  /**
   * Access to on-line information about the device.
   */
  onlineInformation?: string;

  /**
   * Descriptive information, usage information or implantation information
   * that is not captured in an existing element.
   */
  note?: Annotation[];

  /**
   * The quantity of the device present in the packaging (e.g. the number
   * of devices present in a pack, or the number of devices in the same
   * package of the medicinal product).
   */
  quantity?: Quantity;

  /**
   * The parent device it can be part of.
   */
  parentDevice?: Reference<DeviceDefinition>;

  /**
   * A substance used to create the material(s) of which the device is
   * made.
   */
  material?: DeviceDefinitionMaterial[];
}

/**
 * Device capabilities.
 */
export interface DeviceDefinitionCapability {
  /**
   * Type of capability.
   */
  type: CodeableConcept;

  /**
   * Description of capability.
   */
  description?: CodeableConcept[];
}

/**
 * A name given to the device to identify it.
 */
export interface DeviceDefinitionDeviceName {
  /**
   * The name of the device.
   */
  name: string;

  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName |
   * ManufactureDeviceName | ModelName.
   */
  type:
    | 'udi-label-name'
    | 'user-friendly-name'
    | 'patient-reported-name'
    | 'manufacturer-name'
    | 'model-name'
    | 'other';
}

/**
 * A substance used to create the material(s) of which the device is
 * made.
 */
export interface DeviceDefinitionMaterial {
  /**
   * The substance.
   */
  substance: CodeableConcept;

  /**
   * Indicates an alternative material of the device.
   */
  alternate?: boolean;

  /**
   * Whether the substance is a known or suspected allergen.
   */
  allergenicIndicator?: boolean;
}

/**
 * The actual configuration settings of a device as it actually operates,
 * e.g., regulation status, time properties.
 */
export interface DeviceDefinitionProperty {
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode
   * (Extensible).
   */
  type: CodeableConcept;

  /**
   * Property value as a quantity.
   */
  valueQuantity?: Quantity[];

  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: CodeableConcept[];
}

/**
 * The capabilities supported on a  device, the standards to which the
 * device conforms for a particular purpose, and used for the
 * communication.
 */
export interface DeviceDefinitionSpecialization {
  /**
   * The standard that is used to operate and communicate.
   */
  systemType: string;

  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: string;
}

/**
 * Unique device identifier (UDI) assigned to device label or package.
 * Note that the Device may include multiple udiCarriers as it either may
 * include just the udiCarrier for the jurisdiction it is sold, or for
 * multiple jurisdictions it could have been sold.
 */
export interface DeviceDefinitionUdiDeviceIdentifier {
  /**
   * The identifier that is to be associated with every Device that
   * references this DeviceDefintiion for the issuer and jurisdication
   * porvided in the DeviceDefinition.udiDeviceIdentifier.
   */
  deviceIdentifier: string;

  /**
   * The organization that assigns the identifier algorithm.
   */
  issuer: string;

  /**
   * The jurisdiction to which the deviceIdentifier applies.
   */
  jurisdiction: string;
}