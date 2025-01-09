
import type { DomainResource, Resource } from "./Resource";
import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { Encounter } from "./Encounter";
import type { Patient } from "./Patient";
import type { Group } from "./Group";
import type { Timing } from "./Timing";
import type { Annotation } from "./Annotation";
import type { Quantity } from "./Quantity";
import type { Account } from "./Account";
import type { Medication } from "./Medication";
import type { Immunization } from "./Immunization";
import type { MedicationAdministration } from "./MedicationAdministration";
import type { MedicationDispense } from "./MedicationDispense";
import type { Observation } from "./Observation";
import type { Procedure } from "./Procedure";
import type { SupplyDelivery } from "./SupplyDelivery";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { ImagingStudy } from "./ImagingStudy";
import type { Substance } from "./Substance";
import type { Device } from "./Device";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Organization } from "./Organization";
import type { RelatedPerson } from "./RelatedPerson";
import type { CareTeam } from "./CareTeam";

export declare class ChargeItemPerformer {
    function?: CodeableConcept;
    actor: Reference<Practitioner|PractitionerRole|Organization|CareTeam|Patient|Device|RelatedPerson>;
}

export declare class ChargeItem extends DomainResource {
    resourceType: "ChargeItem";
    identifier?: Identifier[];
    definitionUri?: string[];
    definitionCanonical?: string[];
    status: string;
    partOf?: Reference<ChargeItem>[];
    code: CodeableConcept;
    subject: Reference<Patient|Group>;
    context: Reference<Encounter |EpisodeOfCare>;
    occurrence?: {
        dateTime?: string;
        period?: Period;
        timing?: Timing; 
    };
    performer?: ChargeItemPerformer[];
    performingOrganization?: Reference<Organization>;
    requestingOrganization?: Reference<Organization>;
    costCenter?: Reference<Organization>;
    quantity?: Quantity; 
    bodysite?: CodeableConcept[];
    factorOverride?: number;
    priceOverride?: {
        value: number;
        currency: string;
    };
    overrideReason?: string;
    enterer?: Reference<Practitioner|PractitionerRole | Organization | Patient| Device | RelatedPerson>;
    enteredDate?: string;
    reason?: CodeableConcept[];
    service?: Reference<DiagnosticReport | ImagingStudy| Immunization | MedicationAdministration | MedicationDispense | Observation | Procedure | SupplyDelivery> [];
    product?: {
        reference?: Reference<Device|Medication|Substance>;
        codeableConcept?: CodeableConcept;
    };
    account?: Reference<Account>[];
    note?: Annotation[]; 
    supportingInformation?: Reference<Resource>[];
}
