# OpenWebUI Cloud Managed Service Offering

## Overview

R&D Solutions presents a dedicated Cloud Managed Service for the OpenWebUI platform, built to empower enterprise teams. Our mission is to help organizations thrive by integrating AI into their day-to-day operations—automating processes, accelerating decision-making, and enabling rapid access to insights. We deliver a scalable, secure, and maintenance-free environment that lets teams focus on innovation, not infrastructure.

Our platform is designed with enterprise-grade security and privacy in mind. It complies with GDPR best practices and follows ISO 27001-aligned policies, ensuring data protection, controlled access, and adherence to key compliance standards across all environments.

---

## Managed Cloud Service (OpenWebUI)

### Description

A fully managed OpenWebUI deployment hosted in the cloud. We handle infrastructure, security, maintenance, and updates—so your teams can focus on harnessing AI without operational overhead.

### Hosting Options

- **Dedicated**: Private, isolated AWS infrastructure for clients needing enhanced performance, custom integrations, or regulatory compliance.

### Core Features

- Infrastructure provisioning, configuration, and continuous monitoring
- Automatic scaling and container orchestration
- Daily encrypted backups with rapid restoration capabilities
- Hardened security architecture (TLS 1.2+, IAM, firewalling)
- Integrated observability via AWS CloudWatch (logs, metrics, alarms)
- Product lifecycle alignment with official OpenWebUI releases, enabling access to the latest features, updates, and security patches

### Add-Ons *(Available upon request; not included in base pricing)*

- Custom LLM model hosting (fine-tuned or proprietary models)
- Enterprise data source integration (databases, knowledge bases, file systems)
- SSO/LDAP identity provider support
- Private networking and VPC peering
- API gateway protection and IP whitelisting
- Advanced analytics and monitoring dashboards
- High-availability and geographic redundancy setups

---

## Pricing Tiers

*The following plans include support, platform management, and access to the OpenWebUI platform. Infrastructure costs (e.g., AWS ECS, RDS, storage, bandwidth) are billed separately based on actual usage.*

| Tier           | Monthly Price | Users Included | LLM Model Options    | Support SLA         | Notes                              |
| -------------- | ------------- | -------------- | -------------------- | ------------------- | ---------------------------------- |
| **Starter**    | €299          | 10             | Open-source only     | Community Support   | Best for PoCs and internal testing |
| **Pro**        | €990          | 50             | Open + hosted models | 24h SLA (email)     | Multi-tenant or dedicated          |
| **Enterprise** | Custom        | 50+            | Custom integrations  | 4h SLA (email/chat) | Includes onboarding + training     |

---

### Infrastructure Sizing Guidelines (Estimated)

| Tier           | ECS Task Size             | RDS Instance (PostgreSQL)        | Monthly AWS Infra Estimate\* |
| -------------- | ------------------------- | -------------------------------- | ---------------------------- |
| **Starter**    | 1 vCPU / 2 GB RAM         | db.t3.micro                      | \~€100–€130                  |
| **Pro**        | 2 vCPU / 4–8 GB RAM       | db.t3.medium or db.t4g.medium    | \~€200–€280                  |
| **Enterprise** | Custom (4+ vCPU / 16+ GB) | db.m5.large or Aurora Serverless | €500+ (scales with usage)    |

> *Estimates exclude bandwidth, GPU usage, and additional AWS services (e.g., CloudWatch logs, NAT gateway, backups). Actual pricing varies by region and usage.*

---

## Technical Stack

- **Cloud Platform**: AWS (ECS for containers, S3 for storage, RDS for PostgreSQL, CloudWatch for monitoring)
- **Security**: IAM, WAF, TLS 1.2+, encrypted backups
- **Supported LLMs**: Ollama, OpenAI, Mistral, Claude (via API connectors). Additional models can be integrated upon request.
- **Scalability**: ECS service auto-scaling with GPU-enabled task definitions for high-performance inference workloads

---

