import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";
import type { Signature } from "./Signature";
import type { Timing } from "./Timing";
import type { Organization } from "./Organization";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";

export declare class VerificationResultValidator {
  organization: Reference<Organization>;
  identityCertificate?: string;
  attestationSignature?: Signature;
}

export declare class VerificationResultPrimarySource {
  who?: Reference<Organization | Practitioner | PractitionerRole>;
  type?: CodeableConcept[];
  communicationMethod?: CodeableConcept[];
  validationStatus?: CodeableConcept;
  validationDate?: string;
  canPushUpdates?: CodeableConcept;
  pushTypeAvailable?: CodeableConcept[];
}

export declare class VerificationResultAttestation {
  who?: Reference<Practitioner | PractitionerRole | Organization>;
  onBehalfOf?: Reference<Organization | Practitioner | PractitionerRole>;
  communicationMethod?: CodeableConcept;
  date?: string;
  sourceIdentityCertificate?: string;
  proxyIdentityCertificate?: string;
  proxySignature?: Signature;
  sourceSignature?: Signature;
}

export declare class VerificationResult extends DomainResource{
  resourceType: 'VerificationResult';
  target?: Reference<Resource>[];
  targetLocation?: string[];
  need?: CodeableConcept;
  status: 'attested' | 'validated' | 'in-process' | 'req-revalid' | 'val-fail' | 'reval-fail';
  statusDate?: string;
  validationType?: CodeableConcept;
  validationProcess?: CodeableConcept[];
  frequency?: Timing;
  lastPerformed?: string;
  nextScheduled?: string;
  failureAction?: CodeableConcept;
  primarySource?: VerificationResultPrimarySource[];
  attestation?: VerificationResultAttestation;
  validator?: VerificationResultValidator[];
}
