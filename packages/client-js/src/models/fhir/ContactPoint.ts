export enum ContactPointUse {
  Home = "home",
  Work = "work",
  Mobile = "mobile",
}

export enum ContactPointSystem {
  Phone = "phone",
  Email = "email",
}

export interface ContactPoint {
  use?: ContactPointUse;
  system: ContactPointSystem;
  value: string;
}
