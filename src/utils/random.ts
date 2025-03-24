export function generateAlphanumericId(length = 16): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
}
