import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { MedicinalProduct } from "./MedicinalProduct";
import type { MedicinalProductPackaged } from "./MedicinalProductPackaged";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

interface MedicinalProductAuthorizationJurisdictionalAuthorization {
  identifier?: Identifier[];
  country?: CodeableConcept;
  jurisdiction?: CodeableConcept[];
  legalStatusOfSupply?: CodeableConcept;
  validityPeriod?: Period;
}

interface MedicinalProductAuthorizationProcedure {
  identifier?: Identifier;
  type: CodeableConcept;
  datePeriod?: Period;
  dateDateTime?: string;
  application?: MedicinalProductAuthorizationProcedure[];
}

export declare class MedicinalProductAuthorization extends DomainResource{
  resourceType: 'MedicinalProductAuthorization';
  identifier?: Identifier[];
  subject?: Reference<MedicinalProduct|MedicinalProductPackaged>;
  country?: CodeableConcept[];
  jurisdiction?: CodeableConcept[];
  status?: CodeableConcept;
  statusDate?: string;
  restoreDate?: string;
  validityPeriod?: Period;
  dataExclusivityPeriod?: Period;
  dateOfFirstAuthorization?: string;
  internationalBirthDate?: string;
  legalBasis?: CodeableConcept;
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];
  holder?: Reference<Organization>;
  regulator?: Reference<Organization>;
  procedure?: MedicinalProductAuthorizationProcedure;
}
