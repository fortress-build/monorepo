import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { DomainResource } from "./Resource";

export declare class SubstanceNucleicAcidSubunitSugar {
    identifier?: Identifier;
    name?: string;
    residueSite?: string;
}

export declare class SubstanceNucleicAcidSubunitLinkage {
    connectivity?: string;
    identifier?: Identifier;
    name?: string;
    residueSite?: string;
}

export declare class SubstanceNucleicAcidSubunit {
    subunit?: number;
    sequence?: string;
    length?: number;
    sequenceAttachment?: Attachment;
    fivePrime?: CodeableConcept;
    threePrime?: CodeableConcept;
    linkage?: SubstanceNucleicAcidSubunitLinkage[];
    sugar?: SubstanceNucleicAcidSubunitSugar[];
}

export declare class SubstanceNucleicAcid extends DomainResource{
    resourceType: 'SubstanceNucleicAcid';
    sequenceType?: CodeableConcept;
    numberOfSubunits?: number;
    areaOfHybridisation?: string;
    oligoNucleotideType?: CodeableConcept;
    subunit?: SubstanceNucleicAcidSubunit[];
}
