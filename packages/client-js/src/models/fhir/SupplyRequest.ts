import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Medication } from "./Medication";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";
import type { Timing } from "./Timing";

interface SupplyRequestParameter {
  code?: CodeableConcept;
  valueCodeableConcept?: CodeableConcept;
  valueQuantity?: Quantity;
  valueRange?: Range;
  valueBoolean?: boolean;
}

export declare class SupplyRequest extends DomainResource{
  resourceType: 'SupplyRequest';
  identifier?: Identifier[];
  status?: 'draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown';
  category?: CodeableConcept;
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';
  itemCodeableConcept?: CodeableConcept;
  itemReference?: Reference<Medication | Substance | Device>;
  quantity: Quantity;
  parameter?: SupplyRequestParameter[];
  occurrenceDateTime?: string;
  occurrencePeriod?: Period;
  occurrenceTiming?: Timing;
  authoredOn?: string;
  requester?: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device>;
  supplier?: Reference<Organization | HealthcareService>[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[];
  deliverFrom?: Reference<Organization | Location>;
  deliverTo?: Reference<Organization | Location | Patient>;
}
