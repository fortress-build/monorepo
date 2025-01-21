import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";
import type { UsageContext } from "./UsageContext";

type TestScriptDestination = {
  index: number;
  profile: Coding;
};

type TestScriptFixture = {
  autocreate: boolean;
  autodelete: boolean;
  resource?: Reference<Resource>;
};

type TestScriptMetadataLink = {
  url: string;
  description?: string;
};

type TestScriptMetadataCapability = {
  required: boolean;
  validated: boolean;
  description?: string;
  origin?: number[];
  destination?: number;
  link?: string[];
  capabilities: string;
};

type TestScriptSetupActionOperationRequestHeader = {
  field: string;
  value: string;
};

type TestScriptSetupActionOperation = {
  type?: Coding;
  resource?: string;
  label?: string;
  description?: string;
  accept?: string;
  contentType?: string;
  destination?: number;
  encodeRequestUrl: boolean;
  method?: 'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head';
  origin?: number;
  params?: string;
  requestHeader?: TestScriptSetupActionOperationRequestHeader[];
  requestId?: string;
  responseId?: string;
  sourceId?: string;
  targetId?: string;
  url?: string;
};

type TestScriptSetupActionAssert = {
  label?: string;
  description?: string;
  direction?: 'response' | 'request';
  compareToSourceId?: string;
  compareToSourceExpression?: string;
  compareToSourcePath?: string;
  contentType?: string;
  expression?: string;
  headerField?: string;
  minimumId?: string;
  navigationLinks?: boolean;
  operator?: 'equals' | 'notEquals' | 'in' | 'notIn' | 'greaterThan' | 'lessThan' | 'empty' | 'notEmpty' | 'contains' | 'notContains' | 'eval';
  path?: string;
  requestMethod?: 'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head';
  requestURL?: string;
  resource?: string;
  response?: 'okay' | 'created' | 'noContent' | 'notModified' | 'bad' | 'forbidden' | 'notFound' | 'methodNotAllowed' | 'conflict' | 'gone' | 'preconditionFailed' | 'unprocessable';
  responseCode?: string;
  sourceId?: string;
  validateProfileId?: string;
  value?: string;
  warningOnly: boolean;
};

type TestScriptSetupAction = {
  operation?: TestScriptSetupActionOperation;
  assert?: TestScriptSetupActionAssert;
};

type TestScriptSetup = {
  action: TestScriptSetupAction[];
};

type TestScriptTestAction = {
  operation?: TestScriptSetupActionOperation;
  assert?: TestScriptSetupActionAssert;
};

type TestScriptTest = {
  name?: string;
  description?: string;
  action: TestScriptTestAction[];
};

type TestScriptVariable = {
  name: string;
  defaultValue?: string;
  description?: string;
  expression?: string;
  headerField?: string;
  hint?: string;
  path?: string;
  sourceId?: string;
};

type TestScriptTeardownAction = {
  operation: TestScriptSetupActionOperation;
};

type TestScriptTeardown = {
  action: TestScriptTeardownAction[];
};

export declare class TestScript extends DomainResource{
  resourceType: 'TestScript';
  url: string;
  identifier?: Identifier;
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
  purpose?: string;
  copyright?: string;
  origin?: TestScriptDestination[];
  destination?: TestScriptDestination[];
  metadata?: {
    link?: TestScriptMetadataLink[];
    capability: TestScriptMetadataCapability[];
  };
  fixture?: TestScriptFixture[];
  setup?: TestScriptSetup;
  test?: TestScriptTest[];
  variable?: TestScriptVariable[];
  profile?: Reference<Resource>[];
  teardown?: TestScriptTeardown;
}
