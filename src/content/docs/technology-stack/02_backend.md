---
title: Backend
description: ForgeFluid transforms complex workflows into seamless, adaptive processes using advanced AI technologies, enabling efficient computational task management across diverse environments.
---

The backend architecture of the ForgeFluid Platform is built as a microservices-based system, providing scalability, flexibility, and maintainability. Each service is designed to handle a specific function, allowing the system to grow and adapt without impacting other components.

## Key Features

- **Microservices Architecture**:

  - Each service operates independently, communicating via APIs or messaging queues.

  - Services can be developed in different programming languages or frameworks, depending on the task.

- **Primary Framework**:

  - **Node.js**: Used for core services requiring robust modularity and TypeScript support.

  - **Python**: Employed for AI-heavy operations or data processing services.

- **Communication**:

  - **RESTful APIs**: For synchronous communication between services and external clients.

  - **Message Queues**: Asynchronous communication via Redis or RabbitMQ for decoupling tasks and ensuring resilience.

## Services

1. **AI Orchestration Service**:

- Manages interactions with local AI models or third-party AI providers (OpenAI, Anthropic, etc).

- Handles task preprocessing, dispatching, and result aggregation.

2. **User Management Service**:

- Manages user authentication, including traditional credentials and account abstraction for Web3 wallets.

- Tracks user tiers, permissions, and $FORGE token holdings.

3. **Payment Service**:

- Integrates fiat payments (e.g., Stripe) and Web3 payments for seamless transactions.

- Handles $FORGE token utilities like staking, task prioritization, and fee reductions.

4. **Task Queueing Service**:

- Prioritizes tasks based on user tier and system load.

- Integrates closely with premium features to offer reduced latency for high-tier users.

5. **Project Management Service**:

- Manages project metadata, including file paths, versions, and sandbox status.

- Interfaces with the storage layer to ensure reliable persistence and retrieval.


## Database Systems

- **Relational Database**:

  - PostgreSQL serves as the primary data store for structured information like user profiles, transaction logs, and project metadata.

- **In-Memory Data Store**:

  - Redis supports fast data access for session management, caching, and queueing metadata.


# Key Advantages

- **Flexibility**: Services can evolve independently, incorporating the best-suited frameworks or languages for their purposes.

- **Resilience**: Failures in one service do not cascade across the system, improving reliability.

- **Scalability**: Each service can be scaled individually to meet demand, optimizing resource utilization.
