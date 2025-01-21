import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Annotation } from "./Annotation";
import type { Money } from "./Money";
import type { DomainResource } from "./Resource";
import type { Patient } from "./Patient";
import type { Organization } from "./Organization";
import type { RelatedPerson } from "./RelatedPerson";
import type { Group } from "./Group";
import type { Account } from "./Account";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Device } from "./Device";
import type { ChargeItem } from "./ChargeItem";

// Price Component
export declare class InvoiceLineItemPriceComponent {
    type: "base" | "surcharge" | "deduction" | "discount" | "tax" | "informational";
    code?: CodeableConcept;
    factor?: number;
    amount?: Money;
}

// Line Item
export declare class InvoiceLineItem {
    sequence?: number;
    chargeItemReference?: Reference <ChargeItem>;
    chargeItemCodeableConcept?: CodeableConcept;
    priceComponent?: InvoiceLineItemPriceComponent[];
}

// Participant
export declare class InvoiceParticipant {
    role?: CodeableConcept;
    actor: Reference<Practitioner|Organization|Patient|PractitionerRole|Device| RelatedPerson>;
}

// Main Invoice
export declare class Invoice extends DomainResource {
    resourceType: "Invoice";
    identifier?: Identifier[];
    status: "draft" | "issued" | "balanced" | "cancelled" | "entered-in-error";
    cancelledReason?: string;
    type?: CodeableConcept;
    subject?: Reference<Patient| Group>;
    recipient?: Reference <Organization | Patient | RelatedPerson> ;
    date?: string;
    participant?: InvoiceParticipant[];
    issuer?: Reference<Organization>;
    account?: Reference<Account>;
    lineItem?: InvoiceLineItem[];
    totalPriceComponent?: InvoiceLineItemPriceComponent[];
    totalNet?: Money;
    totalGross?: Money;
    paymentTerms?: string;
    note?: Annotation[];
}
