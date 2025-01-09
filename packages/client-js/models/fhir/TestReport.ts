import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { TestScript } from "./TestScript";

type TestReportSetupActionAssert = {
  result: 'pass' | 'skip' | 'fail' | 'warning' | 'error';
  message?: string;
  detail?: string;
}

type TestReportSetupActionOperation = {
  result: 'pass' | 'skip' | 'fail' | 'warning' | 'error';
  message?: string;
  detail?: string;
}

type TestReportSetupAction = {
  operation?: TestReportSetupActionOperation;
  assert?: TestReportSetupActionAssert;
}

type TestReportSetup = {
  action: TestReportSetupAction[];
}

type TestReportParticipant = {
  type: 'test-engine' | 'client' | 'server';
  uri: string;
  display?: string;
}

type TestReportTestAction = {
  operation?: TestReportSetupActionOperation;
  assert?: TestReportSetupActionAssert;
}

type TestReportTest = {
  name?: string;
  description?: string;
  action: TestReportTestAction[];
}

type TestReportTeardownAction = {
  operation: TestReportSetupActionOperation;
}

type TestReportTeardown = {
  action: TestReportTeardownAction[];
}

export declare class TestReport extends DomainResource{
  resourceType: 'TestReport';
  identifier?: Identifier;
  name?: string;
  status: 'completed' | 'in-progress' | 'waiting' | 'stopped' | 'entered-in-error';
  testScript: Reference<TestScript>;
  result: 'pass' | 'fail' | 'pending';
  score?: number;
  tester?: string;
  issued?: string;
  participant?: TestReportParticipant[];
  setup?: TestReportSetup;
  test?: TestReportTest[];
  teardown?: TestReportTeardown;
}
