import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { DocumentReference } from "./DocumentReference";
import type { Identifier } from "./Identifier";
import type { MarketingStatus } from "./MarketingStatus";
import type { MedicinalProductIndication } from "./MedicinalProductIndication";
import type { MedicinalProductPackaged } from "./MedicinalProductPackaged";
import type { MedicinalProductPharmaceutical } from "./MedicinalProductPharmaceutical";
import type { Organization } from "./Organization";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { ResearchStudy } from "./ResearchStudy";
import type { DomainResource } from "./Resource";

export declare class MedicinalProductNameNamePart {
  part: string;
  type: Coding;
}

export declare class MedicinalProductNameCountryLanguage {
  country: CodeableConcept;
  jurisdiction?: CodeableConcept;
  language: CodeableConcept;
}

export declare class MedicinalProductName {
  productName: string;
  namePart?: MedicinalProductNameNamePart[];
  countryLanguage?: MedicinalProductNameCountryLanguage[];
}

export declare class MedicinalProductManufacturingBusinessOperation {
  operationType?: CodeableConcept;
  authorisationReferenceNumber?: Identifier;
  effectiveDate?: string;
  confidentialityIndicator?: CodeableConcept;
  manufacturer?: Reference<Organization>[];
  regulator?: Reference<Organization>;
}

export declare class MedicinalProductSpecialDesignation {
  identifier?: Identifier[];
  type?: CodeableConcept;
  intendedUse?: CodeableConcept;
  indicationCodeableConcept?: CodeableConcept;
  indicationReference?: Reference<MedicinalProductIndication>;
  status?: CodeableConcept;
  date?: string;
  species?: CodeableConcept;
}

export declare class MedicinalProduct extends DomainResource{
  resourceType: 'MedicinalProduct';
  identifier?: Identifier[];
  type?: CodeableConcept;
  domain?: Coding;
  combinedPharmaceuticalDoseForm?: CodeableConcept;
  legalStatusOfSupply?: CodeableConcept;
  additionalMonitoringIndicator?: CodeableConcept;
  specialMeasures?: string[];
  paediatricUseIndicator?: CodeableConcept;
  productClassification?: CodeableConcept[];
  marketingStatus?: MarketingStatus[];
  pharmaceuticalProduct?: Reference<MedicinalProductPharmaceutical>[];
  packagedMedicinalProduct?: Reference<MedicinalProductPackaged>[];
  attachedDocument?: Reference<DocumentReference>[];
  masterFile?: Reference<DocumentReference>[];
  contact?: Reference<Organization | PractitionerRole>[];
  clinicalTrial?: Reference<ResearchStudy>[];
  name: MedicinalProductName[];
  crossReference?: Identifier[];
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];
  specialDesignation?: MedicinalProductSpecialDesignation[];
}
