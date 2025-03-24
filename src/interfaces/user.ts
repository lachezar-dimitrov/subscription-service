import type { SubscriptionPeriod, SubscriptionType } from "./subscription.js";

export interface User {
    // new (id: string, name: string, email: string): User;
    id: string;
    name: string;
    email: string;
    // subscribe(subscriptionType: SubscriptionType, subscriptionPeriod: SubscriptionPeriod): void;
    // password: string;
    // created_at: Date;
    // updated_at: Date;
}
