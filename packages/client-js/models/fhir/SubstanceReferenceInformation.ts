import type { CodeableConcept } from "./CodeableConcept";
import type { DocumentReference } from "./DocumentReference";
import type { Identifier } from "./Identifier";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class SubstanceReferenceInformationClassification {
  domain?: CodeableConcept;
  classification?: CodeableConcept;
  subtype?: CodeableConcept[];
  source?: Reference<DocumentReference>[];
}

export declare class SubstanceReferenceInformationGene {
  geneSequenceOrigin?: CodeableConcept;
  gene?: CodeableConcept;
  source?: Reference<DocumentReference>[];
}

export declare class SubstanceReferenceInformationGeneElement {
  type?: CodeableConcept;
  element?: Identifier;
  source?: Reference<DocumentReference>[];
}

export declare class SubstanceReferenceInformationTarget {
  target?: Identifier;
  type?: CodeableConcept;
  interaction?: CodeableConcept;
  organism?: CodeableConcept;
  organismType?: CodeableConcept;
  amountQuantity?: Quantity;
  amountRange?: Range;
  amountString?: string;
  amountType?: CodeableConcept;
  source?: Reference<DocumentReference>[];
}

export declare class SubstanceReferenceInformation extends DomainResource{
  resourceType: 'SubstanceReferenceInformation';
  comment?: string;
  gene?: SubstanceReferenceInformationGene[];
  geneElement?: SubstanceReferenceInformationGeneElement[];
  classification?: SubstanceReferenceInformationClassification[];
  target?: SubstanceReferenceInformationTarget[];
}
