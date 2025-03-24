import type { Nullable } from "../types/types.js";
import type { User } from "./user.js";

export const SubscriptionType = {
    Basic: "Basic",
    Premium: "Premium",
    Enterprise: "Enterprise",
} as const;

export type SubscriptionType = keyof typeof SubscriptionType;

export const SubscriptionPeriod = {
    Monthly: "Monthly",
    Annually: "Annually",
} as const;

export type SubscriptionPeriod = keyof typeof SubscriptionPeriod;

export interface Subscription {
    type: SubscriptionType;
    paymentPeriod: SubscriptionPeriod;
    price: Nullable<number>;
    startDate: Nullable<Date>;
    endDate: Nullable<Date>;
    isActive: boolean;
    user: User;
    activate(): Date;
    deactivate(): Date;
    setPrice(price: number): number;
}
