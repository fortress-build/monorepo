import type { Attachment } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import { DomainResource } from "./Resource";

export declare class MolecularSequenceLiteral {
  sequenceValue: string;
}

export declare class MolecularSequenceRelative {
  startingSequence: Reference<MolecularSequence>;
  edit: MolecularSequenceEdit[];
}

export declare class MolecularSequenceEdit {
  editOrder?: number;
  coordinateSystem: CodeableConcept;
  start: number;
  end: number;
  replacementSequence: Reference<MolecularSequence>;
  replacedSequence: Reference<MolecularSequence>;
}

export declare class MolecularSequenceExtracted {
  startingSequence: Reference<MolecularSequence>;
  start: number;
  end: number;
  coordinateSystem: CodeableConcept;
  reverseComplement: boolean;
}

export declare class MolecularSequenceRepeated {
  sequenceMotif: Reference<MolecularSequence>;
  copyCount: number;
}

export declare class MolecularSequenceConcatenated {
  sequenceElement: SequenceElement[];
}

export declare class SequenceElement {
  sequence: Reference<MolecularSequence>;
  ordinalIndex: number;
}

// Main type
export declare class MolecularSequence extends DomainResource {
  resourceType: "MolecularSequence";
  identifier?: Identifier[];
  type?: "aa" | "dna" | "rna";
  literal?: BackboneElement[];
  file?: Attachment[];
  relative?: MolecularSequenceRelative[];
  extracted?: MolecularSequenceExtracted;
  repeated?: MolecularSequenceRepeated;
  concatenated?: MolecularSequenceConcatenated;
}
