import type { ContactPoint } from "./ContactPoint";
import type { DomainResource } from "./Resource";

export type SubscriptionChannelType =
  | "rest-hook"
  | "websocket"
  | "email"
  | "sms"
  | "message";

export declare class SubscriptionChannel {
  type: SubscriptionChannelType;
  endpoint?: string;
  payload?: string;
  header?: string[];
}

export declare class Subscription extends DomainResource {
  resourceType: "Subscription";
  status: "requested" | "active" | "error" | "off";
  contact?: ContactPoint[];
  end?: string;
  reason: string;
  criteria: string;
  error?: string;
  channel: SubscriptionChannel;
}
