import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Resource } from "./Resource";

// Convert NotificationEvent to a class
export declare class SubscriptionStatusNotificationEvent {
    eventNumber: string;
    timestamp?: string;
    focus?: Reference<Resource>;;
    additionalContext?: Reference[];
}

// Convert SubscriptionStatus to a class
export interface SubscriptionStatus {
    resourceType: 'SubscriptionStatus';
    status?: 'requested' | 'active' | 'error' | 'off';
    type: string;
    eventsSinceSubscriptionStart?: string;
    notificationEvent?: SubscriptionStatusNotificationEvent[];
    subscription: Reference<Resource>;
    topic?: string;
    error?: CodeableConcept[];
}
