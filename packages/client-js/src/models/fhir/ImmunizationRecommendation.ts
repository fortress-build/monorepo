import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Immunization } from "./Immunization";
import type { ImmunizationEvaluation } from "./ImmunizationEvalution";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";

export declare class ImmunizationRecommendation extends DomainResource {
  resourceType: "ImmunizationRecommendation";

  identifier?: Identifier[];
  patient: Reference<Patient>;
  date: string;

  authority?: Reference<Organization>;

  recommendation: {
    vaccineCode?: CodeableConcept;
    targetDisease?: CodeableConcept;
    contraindicatedVaccineCode?: CodeableConcept[];
    forecastStatus: CodeableConcept;
    forecastReason?: CodeableConcept[];
    dateCriterion?: {
      code: CodeableConcept;
      value: string;
    }[];
    description?: string;
    series?: string;

    doseNumberPositiveInt?: number;
    doseNumberString?: string;

    seriesDosesPositiveInt?: number;
    seriesDosesString?: string;
  }[];

  supportingImmunization: Reference<Immunization | ImmunizationEvaluation>[];
  supportingPatientInformation: Reference<Resource>[];
}
