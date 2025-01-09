import type { Extension } from "./Extension";

export interface ParameterDefinition {
  id?: string;
  extension?: Extension[];
  name?: string;
  use: "in" | "out";
  min?: number;
  max?: string;
  documentation?: string;
  type: string;
  profile?: string;
}
