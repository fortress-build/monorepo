//FIX THIS
import type { Identifier } from "./Identifier";
import type { Resource } from "./Resource";

export type Reference<T = Resource> = {
  reference: string;
  display?: string;
  type?: string;
  identifier?: Identifier;

  __type?: T;
};
