//Double Check
import type { Address } from "./Address";
import type { Claim } from "./Claim";
import type { ClaimResponse } from "./ClaimResponse";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Location } from "./Location";
import type { MedicationRequest } from "./MedicationRequest";
import type { Money } from "./Money";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { VisionPrescription } from "./VisionPrescription";
import type { Coding } from "./Coding";
import type { Quantity } from "./Quantity";
import type { Attachment } from "./Attachment";
import type { Coverage } from "./Coverage";
import type { Condition } from "./Condition";

export declare class ExplanationOfBenefitAccident {
    date?: string;
    type?: CodeableConcept;
    locationAddress?: Address;
    locationReference?: Reference<Location>;
}

export declare class ExplanationOfBenefitItemAdjudication {
    category: CodeableConcept;
    reason?: CodeableConcept;
    amount?: Money;
    value?: number;
}

export declare class ExplanationOfBenefitRelated {
    claim?: Reference<Claim>;
    relationship?: CodeableConcept;
    reference?: Identifier;
}

export declare class ExplanationOfBenefitPayee {
    type?: CodeableConcept;
    party?: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson>;
}

export declare class ExplanationOfBenefitCareTeam {
    sequence: number;
    provider: Reference<Practitioner | PractitionerRole | Organization>;
    responsible?: boolean;
    role?: CodeableConcept;
    qualification?: CodeableConcept;
}

export declare class ExplanationOfBenefitSupportingInfo {
    sequence: number;
    category: CodeableConcept;
    code?: CodeableConcept;
    timing?: string | Period;
    value?: boolean | string | Quantity | Reference;
    reason?: Coding;
}

export declare class ExplanationOfBenefitDiagnosis {
    sequence: number;
    diagnosis: CodeableConcept | Reference<Condition>;
    type?: CodeableConcept[];
    onAdmission?: CodeableConcept;
    packageCode?: CodeableConcept;
}

export declare class ExplanationOfBenefit extends DomainResource{
    resourceType: "ExplanationOfBenefit";
    identifier?: Identifier[];
    status: "active" | "cancelled" | "draft" | "entered-in-error";
    type: CodeableConcept;
    subType?: CodeableConcept;
    use: "claim" | "preauthorization" | "predetermination";
    patient: Reference<Patient>;
    billablePeriod?: Period;
    created: string;
    enterer?: Reference<Practitioner | PractitionerRole>;
    insurer: Reference<Organization>;
    provider: Reference<Practitioner | PractitionerRole | Organization>;
    priority?: CodeableConcept;
    fundsReserveRequested?: CodeableConcept;
    fundsReserve?: CodeableConcept;
    related?: ExplanationOfBenefitAccident;
    prescription?: Reference<MedicationRequest | VisionPrescription>;
    originalPrescription?: Reference<MedicationRequest>;
    payee?: ExplanationOfBenefitPayee;
    referral?: Reference<ServiceRequest>;
    facility?: Reference<Location>;
    claim?: Reference<Claim>;
    claimResponse?: Reference<ClaimResponse>;
    outcome: "queued" | "complete" | "error" | "partial";
    disposition?: string;
    preAuthRef?: string[];
    preAuthRefPeriod?: Period[];
    careTeam?: ExplanationOfBenefitCareTeam[];
    total?: {
        category: CodeableConcept;
        amount: Money;
    }[];
    payment?: {
        type?: CodeableConcept;
        adjustment?: Money;
        adjustmentReason?: CodeableConcept;
        date?: string;
        amount?: Money;
        identifier?: Identifier;
    };
    supportingInfo?: ExplanationOfBenefitSupportingInfo[];
    diagnosis?: ExplanationOfBenefitDiagnosis[];
    precedence?: number;
    insurance: {
        focal: boolean;
        coverage: Reference<Coverage>;
        preAuthRef?: string[];
    }[];
    formCode?: CodeableConcept;
    form?: Attachment;
    processNote?: {
        number?: number;
        type?: "display" | "print" | "printoper";
        text?: string;
        language?: CodeableConcept;
    }[];
    benefitPeriod?: Period;
    benefitBalance?: {
        category: CodeableConcept;
        excluded?: boolean;
        name?: string;
        description?: string;
        network?: CodeableConcept;
        unit?: CodeableConcept;
        term?: CodeableConcept;
        financial?: {
            type: CodeableConcept;
            allowed?: number | string | Money;
            used?: number | Money;
        }[];
    }[];
}
