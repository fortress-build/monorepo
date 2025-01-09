import type { Coding } from "./Coding";

export interface Meta {
  versionId?: string;
  lastUpdated?: string;
  source?: string;
  profile?: string[]; // type canonical(StructureDefinition)
  security?: Coding[];
  tag?: Coding[];
}
