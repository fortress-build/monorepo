import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Encounter } from "./Encounter";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export type VisionPrescriptionStatus =
  | "active"
  | "cancelled"
  | "draft"
  | "entered-in-error";

export type VisionPrescriptionEye = "right" | "left";

export type VisionPrescriptionPrismBase = "up" | "down" | "in" | "out";

export declare class VisionPrescription extends DomainResource {
  resourceType: "VisionPrescription";

  identifier?: Identifier[];
  status: VisionPrescriptionStatus;
  created: string;
  patient: Reference<Patient>;
  encounter?: Reference<Encounter>;
  dateWritten: string;
  prescriber: Reference<Practitioner | PractitionerRole>;
  lensSpecification: {
    product: CodeableConcept;
    eye: VisionPrescriptionEye;
    sphere?: number;
    cylinder?: number;
    axis?: number;
    prism?: {
      amount: number;
      base: VisionPrescriptionPrismBase;
    }[];
    add?: number;
    power?: number;
    backCurve?: number;
    diameter?: number;
    duration?: Quantity;
    color?: string;
    brand?: string;
    note?: Annotation[];
  }[];
}
