import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { DomainResource } from "./Resource";

export declare class SubstanceSourceMaterialFractionDescription {
  fraction?: string;
  materialType?: CodeableConcept;
}

export declare class SubstanceSourceMaterialOrganismAuthor {
  authorType?: CodeableConcept;
  authorDescription?: string;
}

export declare class SubstanceSourceMaterialOrganismHybrid {
  maternalOrganismId?: string;
  maternalOrganismName?: string;
  paternalOrganismId?: string;
  paternalOrganismName?: string;
  hybridType?: CodeableConcept;
}

export declare class SubstanceSourceMaterialOrganismOrganismGeneral {
  kingdom?: CodeableConcept;
  phylum?: CodeableConcept;
  class?: CodeableConcept;
  order?: CodeableConcept;
}

export declare class SubstanceSourceMaterialOrganism {
  family?: CodeableConcept;
  genus?: CodeableConcept;
  species?: CodeableConcept;
  intraspecificType?: CodeableConcept;
  intraspecificDescription?: string;
  author?: SubstanceSourceMaterialOrganismAuthor[];
  hybrid?: SubstanceSourceMaterialOrganismHybrid;
  organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;
}

export declare class SubstanceSourceMaterialPartDescription {
  part?: CodeableConcept;
  partLocation?: CodeableConcept;
}

export declare class SubstanceSourceMaterial extends DomainResource{
  resourceType: 'SubstanceSourceMaterial';
  sourceMaterialClass?: CodeableConcept;
  sourceMaterialType?: CodeableConcept;
  sourceMaterialState?: CodeableConcept;
  organismId?: Identifier;
  organismName?: string;
  parentSubstanceId?: Identifier[];
  parentSubstanceName?: string[];
  countryOfOrigin?: CodeableConcept[];
  geographicalLocation?: string[];
  developmentStage?: CodeableConcept;
  fractionDescription?: SubstanceSourceMaterialFractionDescription[];
  organism?: SubstanceSourceMaterialOrganism;
  partDescription?: SubstanceSourceMaterialPartDescription[];
}
