import type { CodeableConcept } from './CodeableConcept';
import type { ContactDetail } from './ContactDetail';
import type { Period } from './Period';
import type { DomainResource } from './Resource';
import type { UsageContext } from './UsageContext';

export declare class NamingSystemUniqueId {
  type: 'oid' | 'uuid' | 'uri' | 'other';
  value: string;
  preferred?: boolean;
  comment?: string;
  period?: Period;
}

export declare class NamingSystem extends DomainResource{
  resourceType: 'NamingSystem';
  name: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  kind: 'codesystem' | 'identifier' | 'root';
  date: string;
  publisher?: string;
  contact?: ContactDetail[];
  responsible?: string;
  type?: CodeableConcept;
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  usage?: string;
  uniqueId: NamingSystemUniqueId[];
}
