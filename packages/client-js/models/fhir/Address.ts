import type { Period } from "./Period";
import type { Extension } from "./Extension";

export interface Address {
  id?: string;
  extension?: Extension[];
  use?: "home" | "work" | "temp" | "old" | "billing";
  type?: "postal" | "physical" | "both";
  text?: string[];
  line?: string[];
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: Period;
}
