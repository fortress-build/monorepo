import type { ContactDetail } from "./ContactDetail";
import type { Extension } from "./Extension";

export interface Contributor {
  id?: string;
  extension?: Extension[];
  type: "author" | "editor" | "reviewer" | "endorser";
  name: string;
  contact?: ContactDetail[];
}
