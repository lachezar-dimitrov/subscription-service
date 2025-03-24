import type { Logger } from "../interfaces/logger.js";
import type { User } from "../interfaces/user.js";

export class UserBase implements User {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        private readonly logger: Logger,
    ) {
        this.logger.success(`User created - ${name} (${id})`);
    }

    get userName() {
        return this.name;
    }
}
