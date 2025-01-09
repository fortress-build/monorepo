import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

interface MessageDefinitionFocus {
  code: string; // ResourceType
  profile?: string;
  min: number;
  max?: string;
}

interface MessageDefinitionAllowedResponse {
  message: string;
  situation?: string;
}

export declare class MessageDefinition extends DomainResource{
  resourceType: 'MessageDefinition';
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  replaces?: string[];
  status: 'draft' | 'active' | 'retired' | 'unknown';
  experimental?: boolean;
  date: string;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  purpose?: string;
  copyright?: string;
  base?: string;
  parent?: string[];
  eventCoding?: Coding;
  eventUri?: string;
  category?: 'consequence' | 'currency' | 'notification';
  focus?: MessageDefinitionFocus[];
  responseRequired?: 'always' | 'on-error' | 'never' | 'on-success';
  allowedResponse?: MessageDefinitionAllowedResponse[];
  graph?: string[];
}
