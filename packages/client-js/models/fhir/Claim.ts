import type { Address } from "./Address";
import type { Attachment } from "./Attachment";
import type { ClaimResponse } from "./ClaimResponse";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Coverage } from "./Coverage";
import type { Device } from "./Device";
import type { DeviceRequest } from "./DeviceRequest";
import type { Encounter } from "./Encounter";
import type { Identifier } from "./Identifier";
import type { Location } from "./Location";
import type { MedicationRequest } from "./MedicationRequest";
import type { Money } from "./Money";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { VisionPrescription } from "./VisionPrescription";

export type ClaimStatus = "active" | "cancelled" | "draft" | "entered-in-error";
export type ClaimUse = "claim" | "preauthorization" | "predetermination";

interface ClaimRelated {
  claim?: Reference<Claim>;
  relationship?: CodeableConcept;
  reference?: Identifier;
}

interface ClaimPayee {
  type: CodeableConcept;
  party?: Reference<
    Practitioner | PractitionerRole | Organization | Patient | RelatedPerson
  >;
}

interface CareTeamMember {
  sequence: number;
  provider: Reference<Practitioner | PractitionerRole | Organization>;
  responsible?: boolean;
  role?: CodeableConcept;
  qualification?: CodeableConcept;
}

interface SupportingInfo {
  sequence: number;
  category: CodeableConcept;
  code?: CodeableConcept;
  timingDate?: string;
  timingPeriod?: Period;
  valueBoolean?: boolean;
  valueString?: string;
  valueQuantity?: Quantity;
  valueAttachment?: Attachment;
  valueReference?: Reference<Resource>;
  reason?: CodeableConcept;
}

interface Diagnosis {
  sequence: number;
  diagnosisCodeableConcept?: CodeableConcept;
  diagnosisReference?: Reference<Condition>;
  type?: CodeableConcept[];
  onAdmission?: CodeableConcept;
  packageCode?: CodeableConcept;
}

interface Procedure {
  sequence: number;
  type?: CodeableConcept[];
  date?: string;

  procedureCodeableConcept?: CodeableConcept;
  procedureReference?: Reference<Procedure>;

  udi?: Reference<Device>[];
}

interface Insurance {
  sequence: number;
  focal: boolean;
  identifier?: Identifier;
  coverage: Reference<Coverage>;
  businessArrangement?: string;
  preAuthRef?: string[];
  claimResponse?: Reference<ClaimResponse>;
}

interface ClaimAccident {
  date: string;
  type?: CodeableConcept;
  locationAddress?: Address;
  locationReference?: Reference<Location>;
}

interface ClaimDetail {
  sequence: number;
  revenue?: CodeableConcept;
  category?: CodeableConcept;
  productOrService: CodeableConcept;
  modifier?: CodeableConcept[];
  programCode?: CodeableConcept[];
  quantity?: Quantity;
  unitPrice?: Money;
  factor?: number;
  net?: Money;
  udi?: Reference<Device>[];
  subDetail?: {
    sequence: number;
    revenue?: CodeableConcept;
    category?: CodeableConcept;
    productOrService: CodeableConcept;
    modifier?: CodeableConcept[];
    programCode?: CodeableConcept[];
    quantity?: Quantity;
    unitPrice?: Money;
    factor?: number;
    net?: Money;
    udi?: Reference<Device>[];
  }[];
}

interface ClaimItem {
  sequence: number;
  careTeamSequence?: number[];
  diagnosisSequence?: number[];
  procedureSequence?: number[];
  informationSequence?: number[];
  revenue?: CodeableConcept;
  category?: CodeableConcept;
  productOrService: CodeableConcept;
  modifier?: CodeableConcept[];
  programCode?: CodeableConcept[];
  servicedDate?: string;
  servicedPeriod?: Period;
  locationCodeableConcept?: CodeableConcept;
  locationAddress?: Address;
  locationReference?: Reference<Location>;
  quantity?: Quantity;
  unitPrice?: Money;
  factor?: number;
  net?: Money;
  udi?: Reference<Device>[];
  bodySite?: CodeableConcept;
  subSite?: CodeableConcept[];
  encounter?: Reference<Encounter>[];
  detail?: ClaimDetail[];
}

export declare class Claim extends DomainResource {
  resourceType: "Claim";

  identifier?: Identifier[];
  status: ClaimStatus;
  type: CodeableConcept;
  subType?: CodeableConcept;
  use: ClaimUse;
  patient: Reference<Patient>;
  billablePeriod?: Period;
  created: string;
  enterer?: Reference<Practitioner | PractitionerRole>;
  insurer?: Reference<Organization>;
  provider: Reference<Practitioner | PractitionerRole | Organization>;
  priority: CodeableConcept;
  fundsReserve?: CodeableConcept;
  related?: ClaimRelated[];
  prescription?: Reference<
    DeviceRequest | MedicationRequest | VisionPrescription
  >;
  originalPrescription?: Reference<
    DeviceRequest | MedicationRequest | VisionPrescription
  >;
  payee?: ClaimPayee;
  referral?: Reference<ServiceRequest>;
  facility?: Reference<Location>;
  careTeam?: CareTeamMember[];
  supportingInfo?: SupportingInfo[];
  diagnosis?: Diagnosis[];
  procedure?: Procedure[];
  insurance: Insurance[];
  accident?: ClaimAccident;
  item?: ClaimItem[];
  total?: Money;
}
