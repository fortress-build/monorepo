import type { CodeableConcept } from "./CodeableConcept";
import type { DomainResource } from "./Resource";

type IssueSeverity = "fatal" | "error" | "warning" | "information";

type IssueCode = 
  | "invalid" | "structure" | "required" | "value" | "invariant" | "security"
  | "login" | "unknown" | "expired" | "forbidden" | "suppressed" | "processing"
  | "not-supported" | "duplicate" | "multiple-matches" | "not-found" | "deleted"
  | "too-long" | "code-invalid" | "extension" | "too-costly" | "business-rule"
  | "conflict" | "transient" | "lock-error" | "no-store" | "exception"
  | "timeout" | "incomplete" | "throttled" | "informational";

interface OperationOutcomeIssue {
  severity: IssueSeverity;
  code: IssueCode;
  details?: CodeableConcept;
  diagnostics?: string;
  location?: string[];
  expression?: string[];
}

export declare class OperationOutcome extends DomainResource{
  resourceType: "OperationOutcome";
  issue: OperationOutcomeIssue[];
}
