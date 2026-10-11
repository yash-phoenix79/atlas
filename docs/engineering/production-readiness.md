# Atlas Production Readiness

- **Status:** Proposed engineering operating model
- **Last reviewed:** 2026-10-11
- **Canonical checklist:** [Requirements registry](requirements-registry.md)
- **Related:** [Testing strategy](testing-strategy.md), [Reliability and operations](reliability-and-operations.md), [Research methodology](../research/research-methodology.md), [Security program](../security/security-program.md)

## Purpose

Production readiness is a repeatable engineering process, not a one-time document or a claim that a project is production grade. Every material requirement needs a reason, an observable acceptance criterion, a verification method, evidence, a release gate, and an accountable owner.

This document defines the operating model. It does not claim Atlas currently implements the listed controls, uses the suggested tools, or has passed a readiness review.

## Desired outcomes

Atlas should be able to demonstrate that:

1. Users can complete the core jobs the product promises.
2. Saved resources and user data remain correct, isolated, exportable, and recoverable.
3. Critical workflows fail visibly and recover predictably when dependencies fail.
4. Changes can be tested, reviewed, deployed, and reversed using repeatable procedures.
5. Production behavior can be observed without exposing sensitive content.
6. Maintainers can diagnose incidents and recover service using documented procedures.
7. Requirements and decisions are traceable to authoritative sources, experiments, tests, and operational evidence.

## Productionisation lifecycle

1. **Discover:** identify user journeys, system boundaries, external dependencies, risks, and constraints.
2. **Specify:** convert outcomes into testable requirements with stable IDs.
3. **Design:** document architecture, data lifecycle, failure behavior, operational needs, and alternatives.
4. **Implement:** deliver controls, tests, documentation, and instrumentation with each relevant feature.
5. **Verify:** run automated tests and scans; perform manual reviews and operational drills where automation is insufficient.
6. **Gate:** evaluate evidence against release-specific requirements; record exceptions explicitly.
7. **Operate:** monitor user-facing outcomes, manage incidents, restore service, and learn from failures.
8. **Improve:** update requirements, tests, runbooks, risks, and architecture when evidence or context changes.

## Requirement contract

Every release-relevant requirement should contain:

| Field | Required meaning |
|---|---|
| ID | Stable identifier, such as REL-004; never recycle IDs |
| Requirement | One clear outcome that can pass or fail |
| Rationale / risk | User harm, business impact, or failure mode addressed |
| Priority | P0 release blocker, P1 important, P2 planned, or N/A with reason |
| Applicability | Required now, conditional, deferred, or not applicable |
| Acceptance criteria | Observable result, including relevant boundaries |
| Verification | Automated test, inspection, review, measurement, or operational drill |
| Evidence | CI run, test result, report, dashboard, config, or dated drill record |
| Owner | Accountable person or role |
| Gate | Architecture, MVP, production, friends, or ongoing |
| Status | Proposed, in progress, implemented, verified, deferred, or rejected |
| Exception | Rationale, approver, compensating controls, expiry, and revisit trigger |

Avoid vague requirements such as “performance is good” or “backups are enabled.” For example, backup readiness requires a restore into a clean environment, consistency checks, and measured recovery time—not merely a successful backup job.

## Risk-based prioritisation

Consider impact, likelihood, exposure, detectability, recoverability, and release scope. P0 means “must pass before the named release.” A requirement may be P0 before inviting friends but irrelevant before a local prototype. Record assumptions and revisit priorities when architecture, data sensitivity, exposure, or usage changes.

## Evidence standard

Use the strongest evidence appropriate to the claim:

1. **Automated proof:** tests, static analysis, configuration checks, CI status.
2. **Operational proof:** successful restore, rollback, load, failover, or incident-response drill.
3. **Human-reviewed evidence:** architecture, privacy, usability, accessibility, or threat-model review.
4. **Explicit risk acceptance:** documented exception with approver, compensating control, and expiry.

A passing scanner does not prove a system secure. Unit tests do not prove production reliability. A dashboard existing does not prove alerts are actionable. Match evidence to the exact claim.

## Release gates

### Gate A — Before architecture is locked

- [ ] MVP scope, non-goals, user journeys, and acceptance criteria are documented.
- [ ] Architecture, trust boundaries, external dependencies, and data flows are documented.
- [ ] Data lifecycle covers create, update, duplicate, export, deletion, retention, and recovery.
- [ ] Important technical choices have an ADR with alternatives and revisit conditions.
- [ ] Testing, CI, configuration, and observability strategies are agreed.
- [ ] Recovery objectives and feasible backup design are documented.
- [ ] Required UI mockup and scope approval is completed before production UI implementation.

### Gate B — Before production data is accepted

- [ ] Critical user journeys pass integration and end-to-end tests.
- [ ] Authorization and data-isolation tests pass for multiple users.
- [ ] Export and deletion behavior match documented semantics.
- [ ] A clean-environment restore succeeded and restored data was validated.
- [ ] Deployments, migrations, and recovery procedures are repeatable.
- [ ] Error tracking, operational metrics, actionable alerts, and runbooks are available.
- [ ] Resource limits and dependency-failure behavior are defined.
- [ ] Security release gates in the [security program](../security/security-program.md) pass.
- [ ] No unresolved release-blocking defects remain, except explicitly approved, time-limited exceptions.

### Gate C — Before inviting friends

- [ ] A first-time user can onboard without maintainer intervention.
- [ ] Two independent users cannot access each other's private resources through UI, API, search, exports, jobs, or AI features.
- [ ] Invite, recovery, session revocation, and account-closure flows are tested.
- [ ] Support and security-reporting channels are documented.
- [ ] Privacy and third-party processing disclosures reflect actual behavior.
- [ ] Known limitations and recovery expectations are communicated.
- [ ] A recent restore drill and deployment-recovery check are recorded.
- [ ] Cost limits and alerts are in place.

### Gate D — Ongoing operation

- [ ] Review incidents, near misses, errors, SLOs, cost, and capacity on a defined cadence.
- [ ] Triage security and dependency alerts.
- [ ] Re-test recovery after material changes to storage, schema, identity, or deployment.
- [ ] Review and expire exceptions.
- [ ] Keep runbooks, docs, risk register, and registry aligned with implementation.
- [ ] Retire unused services, permissions, integrations, and stale data.

## Release decision record

For each gate, record the release/version and environment, requirements evaluated, pass/fail/not-applicable result, evidence links, blocking defects, accepted exceptions, approver/date, rollback plan, and follow-up actions with owners and due dates.

Do not represent a release as verified when only documents have been written. Distinguish proposed, implemented, and verified behavior.

## Avoid process theatre

- Do not adopt every framework control without considering applicability.
- Do not require enterprise-scale infrastructure for a small application.
- Do not use line coverage as a substitute for meaningful assertions.
- Do not accept scanner output without triage.
- Do not duplicate requirements across many docs; link to canonical sources.
- Do not waive a blocker silently.
- Prefer a small set of strong automated controls plus periodic operational drills.

## Reference frameworks

- [Google SRE Launch Coordination Checklist](https://sre.google/sre-book/launch-checklist/)
- [Google SRE Workbook](https://sre.google/workbook/)
- [DORA Continuous Delivery capabilities](https://dora.dev/capabilities/continuous-delivery/)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP ASVS](https://github.com/OWASP/ASVS)
- [OpenTelemetry documentation](https://opentelemetry.io/docs/)
- [SLSA v1.2 specification](https://slsa.dev/spec/v1.2/)

See the [production engineering resource guide](../research/production-engineering-resources.md) for descriptions, applicability, and the broader research toolkit.
