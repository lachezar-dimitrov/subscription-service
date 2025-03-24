import type { Logger } from "../interfaces/logger.js";
import type { Subscription, SubscriptionPeriod, SubscriptionType } from "../interfaces/subscription.js";
import type { User } from "../interfaces/user.js";
import type { Nullable } from "../types/types.js";

export class SubscriptionBase implements Subscription {
    public startDate: Nullable<Date> = null;
    public endDate: Nullable<Date> = null;
    public isActive: boolean = false;
    public price: Nullable<number> = null;

    constructor(
        public readonly id: string,
        public readonly type: SubscriptionType,
        public readonly paymentPeriod: SubscriptionPeriod,
        public readonly user: User,
        private readonly logger: Logger,
    ) {
        this.logger.success(`Subscription ${id} created - ${type} (${paymentPeriod})`);
    }

    public activate(): Date {
        this.isActive = true;
        this.startDate = new Date();

        this.logger.success(`Subscription ${this.id} activated at ${this.startDate}`);

        return this.startDate;
    }

    public deactivate(): Date {
        this.isActive = false;
        this.endDate = new Date();

        this.logger.warning(`Subscription ${this.id} deactivated at ${this.endDate}`);

        return this.endDate;
    }

    public setPrice(price: number): number {
        this.price = price;

        return this.price;
    }
}
