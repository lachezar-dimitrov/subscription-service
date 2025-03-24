import type { Logger } from "../interfaces/logger.js";
import type { Nullable } from "../types/types.js";

export class ConsoleLogger implements Logger {
    private static instance: Nullable<Logger> = null;

    private constructor() {}

    public static create(): Logger {
        if (ConsoleLogger.instance) {
            return ConsoleLogger.instance;
        }

        ConsoleLogger.instance = new ConsoleLogger();

        return ConsoleLogger.instance;
    }

    public info(message: string): void {
        console.info(message);
    }

    public success(message: string): void {
        console.log("\x1b[32m%s\x1b[0m", message);
    }

    public warning(message: string): void {
        console.log("\x1b[33m%s\x1b[0m", message);
    }

    public error(message: string): void {
        console.error(message);
    }
}
