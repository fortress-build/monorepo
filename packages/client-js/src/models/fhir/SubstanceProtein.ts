import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { DomainResource } from "./Resource";

interface SubstanceProteinSubunit {
  subunit?: number;
  sequence?: string;
  length?: number;
  sequenceAttachment?: Attachment;
  nTerminalModificationId?: Identifier;
  nTerminalModification?: string;
  cTerminalModificationId?: Identifier;
  cTerminalModification?: string;
}

export declare class SubstanceProtein extends DomainResource{
  resourceType: 'SubstanceProtein';
  sequenceType?: CodeableConcept;
  numberOfSubunits?: number;
  disulfideLinkage?: string[];
  subunit?: SubstanceProteinSubunit[];
}
