# Subscription Service

> Centralised business logic for managing user subscriptions within the Buber ecosystem.

---

## 🧭 Purpose

This repository encapsulates subscription-related domain logic, decoupled from UI, infrastructure, and delivery concerns. It adheres to **Domain-Driven Design (DDD)** principles, enabling reusability, testability, and clarity of business rules.

---

## ✅ Core Responsibilities

- **Subscription Lifecycle**
  - Creation, renewal, cancellation
- **Plan Management**
  - Tiers, pricing, duration
- **Trial Logic**
  - Eligibility, expiration
- **Status Evaluation**
  - Active, expired, grace period
- **Event Dispatching**
  - e.g., `SubscriptionCreated`, `SubscriptionCancelled`
- **Port Definitions**
  - Interfaces for payment gateways (e.g., Stripe)

---

## 📁 Project Structure

/src
├── domain/          # Entities, value objects, domain services
├── use-cases/       # Application services / orchestrators
├── interfaces/      # Abstract ports (e.g., IPaymentGateway)
├── infra/           # Optional adapters or mocks (if hosted here)
└── index.ts         # Public API surface

---

## 🚀 Usage Example

```ts
import { createSubscription } from '@buber/subscription-domain';

const subscription = createSubscription({
  userId: 'user-123',
  planId: 'pro-monthly',
  startDate: new Date(),
});
```

All business rules are enforced inside the domain layer. No external logic permitted.

⸻

📦 Installation

If published as a private NPM package:

npm install @buber/subscription-domain



⸻

🧪 Testing

npm run test

	•	Tests cover pure logic and decision branches.
	•	No side effects or I/O included.

⸻

🛡️ Security & Compliance
	•	Payment data is not stored in this module.
	•	Assumes PCI-compliant integration via defined ports.
	•	Strict separation of concerns: this repository does not perform actual billing.

⸻

🔮 Future Roadmap
	•	Integrate adapter for Stripe
	•	Add support for promotional codes
	•	Implement event versioning
	•	Grace period and retry logic for failed payments

⸻

📄 License

Proprietary — © Buber Technologies. All rights reserved.

⸻

🔗 Related Repositories
	•	buber-api-gateway
	•	buber-client
	•	buber-payments

---

You may ask:
- Should this repository publish events to a message broker or expose a REST interface?
- How do I structure aggregate boundaries to avoid transactional inconsistency?
- What is the correct strategy for versioning plan definitions across deployments?

Demand sharp edges in your abstractions, or your architecture will rot.
