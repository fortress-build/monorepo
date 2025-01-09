import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Money } from "./Money";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Organization } from "./Organization";
import type { Coverage } from "./Coverage";
import type { CoverageEligibilityRequest } from "./CoverageEligibilityRequest";


// Main CoverageEligibilityResponse
export declare class CoverageEligibilityResponse extends DomainResource {
    resourceType: 'CoverageEligibilityResponse';
    // CoverageEligibilityResponse fields
    identifier?: Identifier[];
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';
    purpose: Array<'auth-requirements' | 'benefits' | 'discovery' | 'validation'>;
    patient: Reference<Patient>;
    servicedDate?: string;
    servicedPeriod?: Period;
    created: string;
    requestor?: Reference<Practitioner | PractitionerRole | Organization>;
    request: Reference<CoverageEligibilityRequest>;
    outcome: 'queued' | 'complete' | 'error' | 'partial';
    disposition?: string;
    insurer: Reference<Organization>;
    preAuthRef?: string;
    form?: CodeableConcept;

    // Insurance information
    insurance?: {
        coverage: Reference<Coverage>;
        inforce?: boolean;
        benefitPeriod?: Period;
        item?: {
            category?: CodeableConcept;
            productOrService?: CodeableConcept;
            modifier?: CodeableConcept[];
            provider?: Reference<Practitioner | PractitionerRole>;
            excluded?: boolean;
            name?: string;
            description?: string;
            network?: CodeableConcept;
            unit?: CodeableConcept;
            term?: CodeableConcept;
            benefit?: {
                type: CodeableConcept;
                allowedUnsignedInt?: number;
                allowedString?: string;
                allowedMoney?: Money;
                usedUnsignedInt?: number;
                usedString?: string;
                usedMoney?: Money;
            }[];
            authorizationRequired?: boolean;
            authorizationSupporting?: CodeableConcept[];
            authorizationUrl?: string;
        }[];
    }[];

    error?: {
        code: CodeableConcept;
    }[];
}
