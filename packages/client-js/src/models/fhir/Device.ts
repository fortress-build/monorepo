import type { Annotation } from './Annotation';
import type { CodeableConcept } from './CodeableConcept';
import type { ContactPoint } from './ContactPoint';
import type { DeviceDefinition } from './DeviceDefinition';
import type { Identifier } from './Identifier';
import type { Organization } from './Organization';
import type { Patient } from './Patient';
import type { Quantity } from './Quantity';
import type { Reference } from './Reference';
import type { DomainResource } from './Resource';

/**
 * A type of a manufactured item that is used in the provision of
 * healthcare without being substantially changed through that activity.
 * The device may be a medical or non-medical device.
 */
export declare class Device extends DomainResource {
  resourceType: 'Device';

  /**
   * Unique instance identifiers assigned to a device by manufacturers
   * other organizations or owners.
   */
  identifier?: Identifier[];

  /**
   * The reference to the definition for the device.
   */
  definition?: Reference<DeviceDefinition>;

  /**
   * Unique device identifier (UDI) assigned to device label or package.
   * Note that the Device may include multiple udiCarriers as it either may
   * include just the udiCarrier for the jurisdiction it is sold, or for
   * multiple jurisdictions it could have been sold.
   */
  udiCarrier?: DeviceUdiCarrier[];

  /**
   * Status of the Device availability.
   */
  status?: 'active' | 'inactive' | 'entered-in-error' | 'unknown';

  /**
   * Reason for the dtatus of the Device availability.
   */
  statusReason?: CodeableConcept[];

  /**
   * The distinct identification string as required by regulation for a
   * human cell, tissue, or cellular and tissue-based product.
   */
  distinctIdentifier?: string;

  /**
   * A name of the manufacturer.
   */
  manufacturer?: string;

  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: string;

  /**
   * The date and time beyond which this device is no longer valid or
   * should not be used (if applicable).
   */
  expirationDate?: string;

  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: string;

  /**
   * The serial number assigned by the organization when the device was
   * manufactured.
   */
  serialNumber?: string;

  /**
   * This represents the manufacturer's name of the device as provided by
   * the device, from a UDI label, or by a person describing the Device.
   * This typically would be used when a person provides the name(s) or
   * when the device represents one of the names available from
   * DeviceDefinition.
   */
  deviceName?: DeviceDeviceName[];

  /**
   * The model number for the device.
   */
  modelNumber?: string;

  /**
   * The part number of the device.
   */
  partNumber?: string;

  /**
   * The kind or type of device.
   */
  type?: CodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the
   * device conforms for a particular purpose, and used for the
   * communication.
   */
  specialization?: DeviceSpecialization[];

  /**
   * The actual design of the device or software version running on the
   * device.
   */
  version?: DeviceVersion[];

  /**
   * The actual configuration settings of a device as it actually operates,
   * e.g., regulation status, time properties.
   */
  property?: DeviceProperty[];

  /**
   * Patient information, If the device is affixed to a person.
   */
  patient?: Reference<Patient>;

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
   * The place where the device can be found.
   */
  location?: Reference<Location>;

  /**
   * A network address on which the device may be contacted directly.
   */
  url?: string;

  /**
   * Descriptive information, usage information or implantation information
   * that is not captured in an existing element.
   */
  note?: Annotation[];

  /**
   * Provides additional safety characteristics about a medical device.
   * For example devices containing latex.
   */
  safety?: CodeableConcept[];

  /**
   * The parent device.
   */
  parent?: Reference<Device>;
}

/**
 * This represents the manufacturer's name of the device as provided by
 * the device, from a UDI label, or by a person describing the Device.
 * This typically would be used when a person provides the name(s) or
 * when the device represents one of the names available from
 * DeviceDefinition.
 */
export interface DeviceDeviceName {
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
 * The actual configuration settings of a device as it actually operates,
 * e.g., regulation status, time properties.
 */
export interface DeviceProperty {
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
export interface DeviceSpecialization {
  /**
   * The standard that is used to operate and communicate.
   */
  systemType: CodeableConcept;

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
export interface DeviceUdiCarrier {
  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that
   * identifies the labeler and the specific version or model of a device.
   */
  deviceIdentifier?: string;

  /**
   * Organization that is charged with issuing UDIs for devices.  For
   * example, the US FDA issuers include :
   * 1) GS1:
   * http://hl7.org/fhir/NamingSystem/gs1-di,
   * 2) HIBCC:
   * http://hl7.org/fhir/NamingSystem/hibcc-dI,
   * 3) ICCBBA for blood containers:
   * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
   * 4) ICCBA for other devices:
   * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   */
  issuer?: string;

  /**
   * The identity of the authoritative source for UDI generation within a
   * jurisdiction.  All UDIs are globally unique within a single namespace
   * with the appropriate repository uri as the system.  For example,  UDIs
   * of devices managed in the U.S. by the FDA, the value is
   * http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  jurisdiction?: string;

  /**
   * The full UDI carrier of the Automatic Identification and Data Capture
   * (AIDC) technology representation of the barcode string as printed on
   * the packaging of the device - e.g., a barcode or RFID.   Because of
   * limitations on character sets in XML and the need to round-trip JSON
   * data through XML, AIDC Formats *SHALL* be base64 encoded.
   */
  carrierAIDC?: string;

  /**
   * The full UDI carrier as the human readable form (HRF) representation
   * of the barcode string as printed on the packaging of the device.
   */
  carrierHRF?: string;

  /**
   * A coded entry to indicate how the data was entered.
   */
  entryType?:
    | 'barcode'
    | 'rfid'
    | 'manual'
    | 'card'
    | 'self-reported'
    | 'unknown';
}

/**
 * The actual design of the device or software version running on the
 * device.
 */
export interface DeviceVersion {
  /**
   * The type of the device version.
   */
  type?: CodeableConcept;

  /**
   * A single component of the device version.
   */
  component?: Identifier;

  /**
   * The version text.
   */
  value: string;
}