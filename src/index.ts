import { ConsoleLogger } from "./entities/console-logger.js";
import { SubscriptionBase } from "./entities/subscription.js";
import { UserBase } from "./entities/user.js";
import { SubscriptionPeriod, SubscriptionType } from "./interfaces/subscription.js";
import { generateAlphanumericId } from "./utils/random.js";

function bootstrap() {
    const consoleLogger = ConsoleLogger.create();

    consoleLogger.info("Initializing");

    const user = new UserBase(generateAlphanumericId(), "John Doe", "john@abv.bg", consoleLogger);

    const subscription = new SubscriptionBase(
        generateAlphanumericId(),
        SubscriptionType.Basic,
        SubscriptionPeriod.Monthly,
        user,
        consoleLogger,
    );

    subscription.activate();
    subscription.deactivate();
}

bootstrap();
