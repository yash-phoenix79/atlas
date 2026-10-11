# Atlas Reliability and Operational Readiness

- **Status:** Proposed; targets must be chosen from the actual architecture and user expectations
- **Last reviewed:** 2026-10-11
- **Registry:** [Production requirements](requirements-registry.md)
- **Security recovery controls:** [Security program](../security/security-program.md)

## Purpose

This document describes how Atlas should detect, diagnose, respond to, and recover from production failures. Use the simplest design that meets recovery and reliability needs; do not add enterprise infrastructure for its own sake.

## Define user-facing reliability

Start with critical user journeys, not infrastructure vanity metrics. Candidate indicators include:
- capture success rate, excluding documented invalid user input;
- time from accepted capture to searchable resource;
- successful resource detail loads;
- search success and latency;
- background job age and terminal failure rate;
- export success rate;
- restore success and measured recovery time.

For each indicator, define numerator/denominator, measurement window, exclusions, and data source. Set an SLO after establishing realistic expectations and a baseline. An SLO is a target, not a guarantee.

## Failure model

For each critical dependency or operation, document expected failures/timeouts, retry behavior and idempotency, user-visible state and recovery action, data consistency risks, telemetry/alerts, runbook, and owner.

Typical Atlas cases:
- capture source unavailable or rate-limiting;
- extraction returns partial metadata;
- database or file storage is unavailable;
- file storage succeeds while the database operation fails, or vice versa;
- a job is delayed, duplicated, or stuck;
- search index is stale or unavailable;
- AI/provider request fails or returns invalid output;
- deploy or migration fails;
- backup is incomplete or restore detects inconsistency.

## Timeouts, retries and idempotency

- Bound network and processing time.
- Use bounded retries with exponential backoff and jitter when appropriate.
- Avoid retrying non-idempotent writes without an idempotency strategy.
- Respect provider rate limits and Retry-After where applicable.
- Prevent retries from amplifying outages.
- Record terminal failure state and provide a deliberate retry path.
- Define duplicate handling for repeated URLs, files and client submissions.

## Observability

Use structured, privacy-aware telemetry:
- logs for diagnostic events and failures;
- metrics for rates, latency, queue depth, saturation and provider health;
- traces where they help connect a workflow across components.

Use request/job correlation IDs, but never use secrets or sensitive user content as metric labels. Apply redaction and retention rules to telemetry. Instrument the user journey so operators can answer “is capture working?” rather than only “is the server up?”

[OpenTelemetry](https://opentelemetry.io/docs/) provides vendor-neutral conventions and instrumentation for traces, metrics and logs. It is a framework, not a required backend; choose a collection/storage vendor only when there is a concrete need.

## Alerting

Every production alert should have a user/service impact, threshold and evaluation window, owner and severity, runbook or diagnostic steps, and a way to verify recovery. Avoid alerts for every transient error. Prefer symptoms affecting users or indicating imminent exhaustion. Test alert delivery periodically.

## Recovery objectives

Define:
- **RPO (recovery point objective):** maximum acceptable data loss measured in time.
- **RTO (recovery time objective):** target time to restore service/data after an outage.

Set realistic targets based on user expectations, cost and architecture. Do not invent aggressive numbers before knowing the storage model and operational capacity.

A recovery procedure should cover:
1. Identify incident and scope.
2. Stop ongoing damage if needed.
3. Select a known-good backup and recovery point.
4. Restore into a clean, isolated environment first.
5. Verify schema, counts, relationships, file integrity, user ownership and critical workflows.
6. Reconcile writes after the recovery point if feasible.
7. Obtain approval for production cutover.
8. Monitor recovery and document residual data loss.
9. Preserve evidence and track follow-up actions.

A successful backup job is not a successful recovery test. Run restore drills periodically and after material storage/schema changes.

## Deployment and rollback

- Deploy a known artifact tied to a source revision.
- Run pre-deploy checks and compatible migrations.
- Verify health and key workflows after deploy.
- Define rollback versus forward-fix decision criteria.
- Treat destructive schema changes carefully; code rollback cannot always reverse a data migration.
- Keep recovery procedures accessible when the application is down.
- Test the recovery procedure rather than assuming it works.

## Incident management

Define severity and incident declaration, containment/recovery responsibilities, user communication expectations, evidence preservation with data minimization, blameless review for material incidents, action items with owners/due dates, and updates to tests/runbooks/requirements.

## Cost and capacity

Track cost drivers that can surprise a small hosted app: storage, egress, database, background compute, AI usage and third-party APIs. Establish quotas and budget alerts before inviting users. Load tests should reflect the expected audience, not hypothetical global scale.

## References

- [Google SRE Launch Coordination Checklist](https://sre.google/sre-book/launch-checklist/)
- [Google SRE Workbook](https://sre.google/workbook/)
- [OpenTelemetry observability primer](https://opentelemetry.io/docs/concepts/observability-primer/)
- [CISA StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)
- [DORA Continuous Delivery](https://dora.dev/capabilities/continuous-delivery/)
