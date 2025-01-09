import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";

export type Annotation = {
  authorReference?: Reference<
    Practitioner | Patient | RelatedPerson | Organization
  >;
  authorString?: string;

  time?: string;
  text: string;
};
