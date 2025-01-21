import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import type { Money } from "./Money";
import type { Quantity } from "./Quantity";
import type { DomainResource, Resource } from "./Resource";
import type { Condition } from "./Condition";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Patient } from "./Patient";
import type { Location } from "./Location";
import type { Organization } from "./Organization";
import type { Coverage } from "./Coverage";

export declare class CoverageEligibilityRequestItemDiagnosis {
  diagnosisCodeableConcept?: CodeableConcept;
  diagnosisReference?: Reference<Condition>;
}

export declare class CoverageEligibilityRequestItem {
  supportingInfoSequence?: number[];
  category?: CodeableConcept;
  productOrService?: CodeableConcept;
  modifier?: CodeableConcept[];
  provider?: Reference<Practitioner | PractitionerRole>;
  quantity?: Quantity;
  unitPrice?: Money;
  facility?: Reference<Location | Organization>;
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[];
  detail?: Reference<Resource>[];
}

export declare class CoverageEligibilityRequestInsurance {
  focal?: boolean;
  coverage: Reference<Coverage>;
  businessArrangement?: string;
}

export declare class CoverageEligibilityRequestSupportingInfo {
  sequence: number;
  information: Reference<Resource>;
  appliesToAll?: boolean;
}

export declare class CoverageEligibilityRequest extends DomainResource {
  resourceType: 'CoverageEligibilityRequest';
  identifier?: Identifier[];
  status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  priority?: CodeableConcept;
  purpose: Array<'auth-requirements' | 'benefits' | 'discovery' | 'validation'>;
  patient: Reference<Patient>;
  servicedDate?: string;
  servicedPeriod?: Period;
  created: string;
  enterer?: Reference<Practitioner | PractitionerRole>;
  provider?: Reference<Practitioner | PractitionerRole | Organization>;
  insurer: Reference<Organization>;
  facility?: Reference<Location>;
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];
  insurance?: CoverageEligibilityRequestInsurance[];
  item?: CoverageEligibilityRequestItem[];
}
