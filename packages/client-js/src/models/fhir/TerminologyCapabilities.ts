import type { CodeableConcept } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import type { DomainResource } from "./Resource";
import type { UsageContext } from "./UsageContext";

interface TerminologyCapabilitiesClosure {
  translation?: boolean;
}

interface TerminologyCapabilitiesCodeSystemVersionFilter {
  code: string;
  op: string[];
}

interface TerminologyCapabilitiesCodeSystemVersion {
  code?: string;
  isDefault?: boolean;
  compositional?: boolean;
  language?: string[];
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];
  property?: string[];
}

interface TerminologyCapabilitiesCodeSystem {
  uri?: string;
  version?: TerminologyCapabilitiesCodeSystemVersion[];
  subsumption?: boolean;
}

interface TerminologyCapabilitiesExpansionParameter {
  name: string;
  documentation?: string;
}

interface TerminologyCapabilitiesExpansion {
  hierarchical?: boolean;
  paging?: boolean;
  incomplete?: boolean;
  parameter?: TerminologyCapabilitiesExpansionParameter[];
  textFilter?: string;
}

interface TerminologyCapabilitiesImplementation {
  description: string;
  url?: string;
}

interface TerminologyCapabilitiesSoftware {
  name: string;
  version?: string;
}

interface TerminologyCapabilitiesTranslation {
  needsMap: boolean;
}

interface TerminologyCapabilitiesValidateCode {
  translations: boolean;
}

export declare class TerminologyCapabilities extends DomainResource{
  resourceType: 'TerminologyCapabilities';
  url?: string;
  version?: string;
  name?: string;
  title?: string;
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
  kind: 'instance' | 'capability' | 'requirements';
  software?: TerminologyCapabilitiesSoftware;
  implementation?: TerminologyCapabilitiesImplementation;
  lockedDate?: boolean;
  codeSystem?: TerminologyCapabilitiesCodeSystem[];
  expansion?: TerminologyCapabilitiesExpansion;
  codeSearch?: 'explicit' | 'all';
  validateCode?: TerminologyCapabilitiesValidateCode;
  translation?: TerminologyCapabilitiesTranslation;
  closure?: TerminologyCapabilitiesClosure;
}
