import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { DomainResource } from "./Resource";
import type { SubstanceAmount } from "./SubstanceAmount";

interface SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
  type?: CodeableConcept;
  representation?: string;
  attachment?: Attachment;
}

interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
  degree?: CodeableConcept;
  amount?: SubstanceAmount;
}

interface SubstancePolymerRepeatRepeatUnit {
  orientationOfPolymerisation?: CodeableConcept;
  repeatUnit?: string;
  amount?: SubstanceAmount;
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];
}

interface SubstancePolymerRepeat {
  numberOfUnits?: number;
  averageMolecularFormula?: string;
  repeatUnitAmountType?: CodeableConcept;
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[];
}

interface SubstancePolymerMonomerSetStartingMaterial {
  material?: CodeableConcept;
  type?: CodeableConcept;
  isDefining?: boolean;
  amount?: SubstanceAmount;
}

interface SubstancePolymerMonomerSet {
  ratioType?: CodeableConcept;
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[];
}

export declare class SubstancePolymer extends DomainResource{
  resourceType: 'SubstancePolymer';
  class?: CodeableConcept;
  geometry?: CodeableConcept;
  copolymerConnectivity?: CodeableConcept[];
  modification?: string[];
  monomerSet?: SubstancePolymerMonomerSet[];
  repeat?: SubstancePolymerRepeat[];
}
