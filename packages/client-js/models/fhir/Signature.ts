import type { Coding } from "./Coding";
import type { Device } from "./Device";
import type { Extension } from "./Extension";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";

export interface Signature {
  id?: string;
  extension?: Extension[];
  type: Coding[];
  when: string;
  who: Reference<
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Patient
    | Device
    | Organization
  >;
  onBehalfOf?: Reference<
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Patient
    | Device
    | Organization
  >;
  targetFormat?: string;
  sigFormat?: string;
  data?: string;
}
