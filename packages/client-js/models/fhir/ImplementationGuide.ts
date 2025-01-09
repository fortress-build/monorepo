import type { DomainResource, Resource, ResourceType } from "./Resource";
import type { ContactDetail } from "./ContactDetail";
import type { UsageContext } from "./UsageContext";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Binary } from "./Binary";

// Convert sub-types first
export declare class ImplementationGuideDefinitionGrouping {
    name: string;
    description?: string;
}

export declare class ImplementationGuideDefinitionResource {
    reference: Reference<Resource>;
    fhirVersion?: string[];
    name?: string;
    description?: string;
    exampleBoolean?: boolean;
    exampleCanonical?: string;
    groupingId?: string;
}

export declare class ImplementationGuideDefinitionPage {
    nameUrl?: string;
    nameReference?: Reference<Binary>;
    title: string;
    generation: 'html' | 'markdown' | 'xml' | 'generated';
    page?: ImplementationGuideDefinitionPage[];
}

export declare class ImplementationGuideDefinitionParameter {
    code: 'apply' | 'path-resource' | 'path-pages' | 'path-tx-cache' | 
          'expansion-parameter' | 'rule-broken-links' | 'generate-xml' | 
          'generate-json' | 'generate-turtle' | 'html-template';
    value: string;
}

export declare class ImplementationGuideDefinition {
    grouping?: ImplementationGuideDefinitionGrouping[];
    resource: ImplementationGuideDefinitionResource[];
    page?: ImplementationGuideDefinitionPage;
    parameter?: ImplementationGuideDefinitionParameter[];
}

export declare class ImplementationGuideDependsOn{
  uri: string;
  packageId? : string;
  version?: string;
}

export declare class ImplementationGuideGlobal{
  type: ResourceType;
  profile: string;
}

export declare class ImplementationGuideManifestResource {
    reference: Reference<Resource>;
    exampleBoolean?: boolean;
    exampleCanonical?: string;
    relativePath?: string;
}

export declare class ImplementationGuideManifestPage {
    name: string;
    title?: string;
    anchor?: string[];
}

export declare class ImplementationGuideManifest {
    rendering?: string;  // url type
    resource: ImplementationGuideManifestResource[];
    page?: ImplementationGuideManifestPage[];
    image?: string[];
    other?: string[];
}

export declare class ImplementationGuide extends DomainResource{
    resourceType: "ImplementationGuide";
    url: string;
    version?: string;
    name: string;
    title?: string;
    status: 'draft' | 'active' | 'retired' | 'unknown';
    experimental?: boolean;
    date?: string;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    copyright?: string;
    packageId: string;
    license?: string;
    fhirVersion: string[];
    dependsOn:  ImplementationGuideDependsOn;
    global: ImplementationGuideGlobal;
    definition?: ImplementationGuideDefinition;
    manifest?: ImplementationGuideManifest;
}
