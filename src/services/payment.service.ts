import type { PaymentProcessor } from "../interfaces/payment-processor.js";

export class PaymentService {
    constructor(private readonly paymentProcessor: PaymentProcessor) {}
}
