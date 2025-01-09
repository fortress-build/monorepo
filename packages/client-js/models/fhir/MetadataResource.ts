import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { UsageContext } from "./UsageContext";

type Status = 'draft' | 'active' | 'retired' | 'unknown';

export interface MetadataResource {
    url?: string;
    version?: string;
    name?: string;
    title?: string;
    status: Status;
    experimental?: boolean;
    date?: string;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
}
