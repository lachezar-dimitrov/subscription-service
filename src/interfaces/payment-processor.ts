export enum PaymentProcessors {
    PayPal,
    Stripe,
    CryptoWallet,
}

export interface PaymentProcessor {
    pay(amount: number): void;
}
