import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { DocumentReference } from "./DocumentReference";
import type { Identifier } from "./Identifier";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Substance } from "./Substance";
import type { SubstanceNucleicAcid } from "./SubstanceNucleicAcid";
import type { SubstancePolymer } from "./SubstancePolymer";
import type { SubstanceProtein } from "./SubstanceProtein";
import type { SubstanceReferenceInformation } from "./SubstanceReferenceInformation";
import type { SubstanceSourceMaterial } from "./SubstanceSourceMaterial";

export declare class SubstanceSpecificationStructureRepresentation {
  type?: CodeableConcept;
  representation?: string;
  attachment?: Attachment;
}

export declare class SubstanceSpecificationStructureIsotopeMolecularWeight {
  method?: CodeableConcept;
  type?: CodeableConcept;
  amount?: Quantity;
}

export declare class SubstanceSpecificationStructureIsotope {
  identifier?: Identifier;
  name?: CodeableConcept;
  substitution?: CodeableConcept;
  halfLife?: Quantity;
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
}

export declare class SubstanceSpecificationStructure {
  stereochemistry?: CodeableConcept;
  opticalActivity?: CodeableConcept;
  molecularFormula?: string;
  molecularFormulaByMoiety?: string;
  isotope?: SubstanceSpecificationStructureIsotope[];
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
  source?: Reference<DocumentReference>[];
  representation?: SubstanceSpecificationStructureRepresentation[];
}

export declare class SubstanceSpecificationCode {
  code?: CodeableConcept;
  status?: CodeableConcept;
  statusDate?: string;
  comment?: string;
  source?: Reference<DocumentReference>[];
}

export declare class SubstanceSpecificationMoiety {
  role?: CodeableConcept;
  identifier?: Identifier;
  name?: string;
  stereochemistry?: CodeableConcept;
  opticalActivity?: CodeableConcept;
  molecularFormula?: string;
  amountQuantity?: Quantity;
  amountString?: string;
}

export declare class SubstanceSpecificationNameOfficial {
  authority?: CodeableConcept;
  status?: CodeableConcept;
  date?: string;
}

export declare class SubstanceSpecificationName {
  name: string;
  type?: CodeableConcept;
  status?: CodeableConcept;
  preferred?: boolean;
  language?: CodeableConcept[];
  domain?: CodeableConcept[];
  jurisdiction?: CodeableConcept[];
  synonym?: SubstanceSpecificationName[];
  translation?: SubstanceSpecificationName[];
  official?: SubstanceSpecificationNameOfficial[];
  source?: Reference[];
}

export declare class SubstanceSpecificationProperty {
  category?: CodeableConcept;
  code?: CodeableConcept;
  parameters?: string;
  definingSubstanceReference?: Reference<SubstanceSpecification | Substance>;
  definingSubstanceCodeableConcept?: CodeableConcept;
  amountQuantity?: Quantity;
  amountString?: string;
}

export declare class SubstanceSpecificationRelationship {
  substanceReference?: Reference<SubstanceSpecification>;
  substanceCodeableConcept?: CodeableConcept;
  relationship?: CodeableConcept;
  isDefining?: boolean;
  amountQuantity?: Quantity;
  amountRange?: Range;
  amountRatio?: Ratio;
  amountString?: string;
  amountRatioLowLimit?: Ratio;
  amountType?: CodeableConcept;
  source?: Reference<DocumentReference>[];
}

export declare class SubstanceSpecification extends DomainResource{
  resourceType: 'SubstanceSpecification';
  identifier?: Identifier;
  type?: CodeableConcept;
  status?: CodeableConcept;
  domain?: CodeableConcept;
  description?: string;
  source?: Reference<DocumentReference>[];
  comment?: string;
  structure?: SubstanceSpecificationStructure;
  moiety?: SubstanceSpecificationMoiety[];
  property?: SubstanceSpecificationProperty[];
  referenceInformation?: Reference<SubstanceReferenceInformation>;
  code?: SubstanceSpecificationCode[];
  name?: SubstanceSpecificationName[];
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];
  relationship?: SubstanceSpecificationRelationship[];
  nucleicAcid?: Reference<SubstanceNucleicAcid>;
  polymer?: Reference<SubstancePolymer>;
  protein?: Reference<SubstanceProtein>;
  sourceMaterial?: Reference<SubstanceSourceMaterial>;
}
