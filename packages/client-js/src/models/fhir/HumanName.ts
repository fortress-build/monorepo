export enum HumanNameUse {
  Legal = "legal",
  Usual = "usual",
}

export interface HumanName {
  family: string;
  given: string[];
  prefix?: string;
  suffix?: string;
  use: HumanNameUse;
}
