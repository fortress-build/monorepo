import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

// Convert nested schemas to classes
export declare class ExampleScenarioActor {
    actorId: string;
    type: 'person' | 'entity';
    name?: string;
    description?: string;
}

export declare class ExampleScenarioInstanceContainedInstance {
    resourceId: string;
    versionId?: string;
}

export declare class ExampleScenarioInstanceVersion {
    versionId: string;
    description: string;
}

export declare class ExampleScenarioInstance {
    resourceId: string;
    resourceType: string;
    name?: string;
    description?: string;
    version?: ExampleScenarioInstanceVersion[];
    containedInstance?: ExampleScenarioInstanceContainedInstance[];
}

export declare class ExampleScenarioProcessStepOperation {
    number: string;
    type?: string;
    name?: string;
    initiator?: string;
    receiver?: string;
    description?: string;
    initiatorActive?: boolean;
    receiverActive?: boolean;
    request?: ExampleScenarioInstanceContainedInstance;
    response?: ExampleScenarioInstanceContainedInstance;
}

export declare class ExampleScenarioProcess {
    title: string;
    description?: string;
    preConditions?: string;
    postConditions?: string;
    step?: ExampleScenarioProcessStep[];
}

export declare class ExampleScenarioProcessStep {
    process?: ExampleScenarioProcess[];
    pause?: boolean;
    operation?: ExampleScenarioProcessStepOperation;
    alternative?: ExampleScenarioProcessStepAlternative[];
}

export declare class ExampleScenarioProcessStepAlternative {
    title: string;
    description?: string;
    step?: ExampleScenarioProcessStep[];
}

// Main class
export declare class ExampleScenario extends DomainResource{
    resourceType: 'ExampleScenario';
    url?: string;
    identifier?: Identifier[];
    version?: string;
    name?: string;
    status: 'draft' | 'active' | 'retired' | 'unknown';
    experimental?: boolean;
    date?: string;
    publisher?: string;
    contact?: ContactDetail[];
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    copyright?: string;
    purpose?: string;
    actor?: ExampleScenarioActor[];
    instance?: ExampleScenarioInstance[];
    process?: ExampleScenarioProcess[];
    workflow?: string[];
}
