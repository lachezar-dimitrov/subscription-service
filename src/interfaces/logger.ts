export interface Logger {
    info(message: string): void;
    success(message: string): void;
    warning(message: string): void;
    error(message: string): void;
}
