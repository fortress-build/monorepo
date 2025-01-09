import type { ContactPoint } from "./ContactPoint";
import type { Extension } from "./Extension";

export interface ContactDetail {
  id?: string;
  extension?: Extension[];
  name?: string;
  telecom?: ContactPoint[];
}
