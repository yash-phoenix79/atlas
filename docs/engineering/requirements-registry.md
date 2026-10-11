# Atlas Production Requirements Registry

- **Status:** Initial proposed baseline; validate against the chosen stack and implementation
- **Last reviewed:** 2026-10-11
- **Operating model:** [Production readiness](production-readiness.md)
- **Security-specific requirements:** [Security program](../security/security-program.md) and [Security tooling](../security/security-tooling.md)

## How to use this registry

This is the canonical index of production-readiness requirements beyond the detailed security guide. It is a coverage baseline, not proof of implementation. Mark items using the project status vocabulary: Proposed, In progress, Implemented, Verified, Deferred, or Rejected.

When a requirement becomes active, record an owner, priority, acceptance criteria, verification method, evidence link, release gate, and any exception. Do not mark an item Verified without evidence. Do not remove IDs; retire them with rationale.

- **P0:** release blocker for the named gate.
- **P1:** important, normally required before production or friends access if applicable.
- **P2:** planned improvement or scale-dependent requirement.
- **Conditional:** activate only when the capability or risk exists; document the decision.

Priorities below are starting hypotheses. Reassess them against the implemented architecture, data sensitivity, exposure, and release scope.

## Product and requirements (PROD)

- [ ] **PROD-001 — MVP scope:** define target users, core jobs, in-scope features, and explicit non-goals. Default P0 before architecture lock. Evidence: reviewed product specification.
- [ ] **PROD-002 — Acceptance criteria:** each user-facing feature has observable acceptance criteria, including failure states. Default P0 before implementation. Evidence: linked spec/tests.
- [ ] **PROD-003 — Supported sources:** document capture sources, expected metadata, extraction limitations, and fallback behavior. Default P0 before launch. Evidence: capability matrix and tests.
- [ ] **PROD-004 — User journeys:** define and measure capture, find, open, update, export, and delete journeys. Default P0 before launch. Evidence: journey tests and metrics.
- [ ] **PROD-005 — Product outcomes:** define useful product metrics and data-minimization boundaries. Default P1. Evidence: metric definitions and privacy review.
- [ ] **PROD-006 — Feedback and triage:** provide a bug-report and feedback path with a triage process. Default P1 before friends access.

## Architecture and technical decisions (ARCH)

- [ ] **ARCH-001 — Architecture map:** document runtime components, trust boundaries, and data flows. Default P0 before architecture lock.
- [ ] **ARCH-002 — Dependency inventory:** list external providers, libraries, managed services, queues, storage and identity dependencies. Default P0 before production.
- [ ] **ARCH-003 — ADRs:** record consequential choices, alternatives, rationale, risks, and revisit triggers. Default P1.
- [ ] **ARCH-004 — API contracts:** define validation, error formats, pagination, compatibility and versioning where needed. Default P0 for exposed APIs.
- [ ] **ARCH-005 — Failure boundaries:** document behavior when critical dependencies are slow, unavailable, rate-limited, or return invalid data. Default P0 before production.
- [ ] **ARCH-006 — Complexity budget:** justify extra infrastructure, queues, indexes, caches, and AI services with a requirement or measurement. Ongoing review.

## Data integrity and lifecycle (DATA)

- [ ] **DATA-001 — Schema integrity:** database constraints and validation prevent invalid records. Default P0.
- [ ] **DATA-002 — Migration safety:** migrations are reviewed and tested against representative existing data. Default P0 before production.
- [ ] **DATA-003 — Concurrent updates:** define conflict and consistency behavior for simultaneous edits or jobs. Default P1; elevate if concurrency is supported.
- [ ] **DATA-004 — Idempotent writes:** retries do not create unintended duplicates or repeat destructive effects. Default P0 for retried operations.
- [ ] **DATA-005 — File/record consistency:** define reconciliation if storage and database operations partially fail. Conditional on file storage.
- [ ] **DATA-006 — Export:** export includes documented user-owned data in a usable, documented format. Default P0 before friends access.
- [ ] **DATA-007 — Deletion and retention:** define deletion across primary records, derivatives, indexes, caches and backup expiry. Default P0 before friends access.
- [ ] **DATA-008 — Restore integrity:** restore verification checks record counts, file integrity, relationships and ownership boundaries. Default P0 before production data.
- [ ] **DATA-009 — Provenance:** preserve original source, capture time, extraction status and attribution where relevant. Default P1.
- [ ] **DATA-010 — Import validation:** imported data is size-limited, validated, and fails with actionable errors. Conditional on import.

## Testing and quality engineering (TEST)

- [ ] **TEST-001 — Unit tests:** important domain rules have focused tests with meaningful assertions. Default P0.
- [ ] **TEST-002 — Integration tests:** database, storage, queue and provider boundaries are tested. Default P0 for used boundaries.
- [ ] **TEST-003 — End-to-end journeys:** critical user journeys run in a representative environment. Default P0 before production.
- [ ] **TEST-004 — Negative cases:** invalid input, unauthorized access, timeouts, partial failure and unavailable dependencies are tested. Default P0.
- [ ] **TEST-005 — Regression tests:** material fixed bugs get regression tests where practical. Ongoing.
- [ ] **TEST-006 — Concurrency and retry tests:** repeated, parallel and interrupted operations are tested where applicable. Default P1; elevate for data-changing flows.
- [ ] **TEST-007 — Test data safety:** automated tests use synthetic or appropriately sanitized data. Default P0.
- [ ] **TEST-008 — Flaky test management:** flaky tests are fixed or quarantined with owner, issue and expiry; failures are not silently ignored. Default P1.
- [ ] **TEST-009 — Coverage interpretation:** coverage is used to find gaps, not treated as proof of quality. Ongoing.
- [ ] **TEST-010 — Browser/accessibility tests:** critical supported-browser flows, keyboard access, labels, focus and contrast are checked. Default P1 before friends access.

## Reliability and resilience (REL)

- [ ] **REL-001 — Timeouts:** outbound network and long-running operations have bounded timeouts. Default P0.
- [ ] **REL-002 — Retry policy:** retries are bounded, use backoff/jitter where appropriate, and avoid retry storms. Default P0 for retried operations.
- [ ] **REL-003 — Idempotency:** retries cannot unintentionally duplicate writes or destructive side effects. Default P0 where retries exist.
- [ ] **REL-004 — Dependency failure behavior:** provider outages, rate limits, malformed responses and timeouts have explicit user/job states. Default P0.
- [ ] **REL-005 — Durable job status:** background jobs expose queued/running/succeeded/failed states, bounded retries and terminal failure visibility. Conditional on jobs.
- [ ] **REL-006 — Queue recovery:** stuck jobs, poison messages and saturation are detectable and recoverable. Conditional on queues.
- [ ] **REL-007 — Shutdown behavior:** shutdown does not silently lose in-flight work. Conditional on worker/server runtime.
- [ ] **REL-008 — Health checks:** liveness/readiness checks match the runtime and avoid exposing sensitive internals. Default P1.
- [ ] **REL-009 — SLOs:** define indicators and objectives for critical user workflows once hosted. Default P1 before production.
- [ ] **REL-010 — Restore/rollback drills:** recovery procedures are executed and timed, not merely documented. Default P0 before production data.

## Performance and capacity (PERF)

- [ ] **PERF-001 — Latency budgets:** define target latency for capture, browsing, detail and search. Default P1 before launch.
- [ ] **PERF-002 — Bounded queries:** pagination and response limits prevent unbounded reads. Default P0 for exposed endpoints.
- [ ] **PERF-003 — Query performance:** inspect plans and indexes for important paths using representative data. Default P1.
- [ ] **PERF-004 — Resource limits:** define request, file, concurrency and processing limits. Default P0 for untrusted inputs.
- [ ] **PERF-005 — Load test:** test realistic concurrent usage and identify bottlenecks before wider access. Default P1 before friends access.
- [ ] **PERF-006 — Cost visibility:** measure hosting, storage, bandwidth, provider calls and AI usage where applicable. Default P1 for hosted usage.
- [ ] **PERF-007 — Quotas and budgets:** alert on spend and define a response before budget limits are exceeded. Default P1 for variable-cost services.

## Observability and incident response (OBS)

- [ ] **OBS-001 — Structured logs:** logs contain useful event context and correlation IDs without unnecessary user content or secrets. Default P0.
- [ ] **OBS-002 — Core metrics:** measure request/job success, errors, latency, saturation and dependency health. Default P0.
- [ ] **OBS-003 — Error tracking:** exceptions are captured, deduplicated and actionable. Default P0.
- [ ] **OBS-004 — Actionable alerts:** critical alerts have a response owner and next step. Default P1.
- [ ] **OBS-005 — Workflow dashboard:** critical workflows can be inspected without exposing sensitive content. Default P1.
- [ ] **OBS-006 — Redaction tests:** tests/review verify that tokens, secrets and sensitive content do not leak into logs. Default P0.
- [ ] **OBS-007 — Incident process:** severity, escalation, communication and follow-up are documented. Default P1 before friends access.
- [ ] **OBS-008 — Runbooks:** common incidents and recovery operations have actionable instructions. Default P1 before production.
- [ ] **OBS-009 — Learning loop:** incidents and near misses result in tracked corrective actions. Ongoing.

## CI/CD and release engineering (SHIP)

- [ ] **SHIP-001 — Pull request CI:** relevant lint, type, test, build and security checks run on pull requests. Default P0 once code exists.
- [ ] **SHIP-002 — Required checks:** branch protections require relevant checks/reviews where supported. Default P0 for shared development.
- [ ] **SHIP-003 — Reproducible build:** release artifact traces back to source revision and dependencies. Default P1.
- [ ] **SHIP-004 — Environment separation:** development, test/staging and production configuration are not mixed. Default P0.
- [ ] **SHIP-005 — Migration order:** release and migration ordering is documented and safe for deployed versions. Default P0.
- [ ] **SHIP-006 — Deployment verification:** post-deploy smoke checks and health validation exist. Default P0.
- [ ] **SHIP-007 — Rollback/forward fix:** recovery is documented and tested, including data-migration limitations. Default P0.
- [ ] **SHIP-008 — Release notes:** user-visible changes and known limitations are recorded when releases begin. Default P1.
- [ ] **SHIP-009 — Workflow permissions:** CI uses least privilege and third-party actions are reviewed/pinned appropriately. See security tooling guidance.

## Documentation and maintainability (DOC)

- [ ] **DOC-001 — Clean setup:** a new contributor can run the app using documented instructions. Default P1.
- [ ] **DOC-002 — Configuration reference:** required variables, safe defaults and example config are documented without real secrets. Default P0.
- [ ] **DOC-003 — Architecture currency:** diagrams and API/schema docs are updated when behavior changes. Ongoing.
- [ ] **DOC-004 — Contribution workflow:** coding, branching, review and testing expectations are clear. Default P1 for open source.
- [ ] **DOC-005 — Dependency lifecycle:** updates, support status and retirement of dependencies have a process. Ongoing.
- [ ] **DOC-006 — Technical debt:** known limitations and material debt have owners or explicit deferral. Ongoing.
- [ ] **DOC-007 — License and notices:** project license is chosen and third-party code/assets have compatible notices before reuse/distribution. Default P0 before public release.

## Accessibility and cross-platform quality (UXQ)

- [ ] **UXQ-001 — Workflow states:** critical journeys communicate progress, empty state, error, retry and partial success. Default P0.
- [ ] **UXQ-002 — Keyboard access:** core workflows work without a pointer. Default P1 before friends access.
- [ ] **UXQ-003 — Assistive labels:** controls expose meaningful accessible names and focus states. Default P1.
- [ ] **UXQ-004 — Responsive behavior:** supported viewport sizes are tested. Default P1.
- [ ] **UXQ-005 — Browser support:** supported browsers/devices and unsupported states are documented. Default P1.
- [ ] **UXQ-006 — Recoverable input:** user input is preserved after recoverable failures when safe. Default P1.
- [ ] **UXQ-007 — Usability feedback:** real-user feedback is captured and prioritized. Ongoing.

## Privacy, legal and trust (TRUST)

- [ ] **TRUST-001 — Data-flow disclosure:** privacy docs reflect actual storage, access and third-party processing. Default P0 before friends access.
- [ ] **TRUST-002 — Account lifecycle:** recovery, closure, export and deletion behavior is documented. Default P0 before friends access.
- [ ] **TRUST-003 — Retention:** retention periods and backup-expiry semantics are defined. Default P0 before production data.
- [ ] **TRUST-004 — Analytics minimization:** collect only analytics needed for defined outcomes; avoid resource content by default. Default P1.
- [ ] **TRUST-005 — AI processing disclosure:** explain model/provider processing and limitations before enabling AI on user data. Conditional on AI.
- [ ] **TRUST-006 — Legal applicability:** review privacy, consumer, copyright and other obligations for intended jurisdictions/users. Default P1 before wider public release.
- [ ] **TRUST-007 — Reporting path:** users can find support and security-reporting guidance. Default P1 before friends access.

## AI and content processing (AIQ)

- [ ] **AIQ-001 — Untrusted content boundary:** captured webpages/PDFs/notes are untrusted data, not privileged instructions. Conditional on AI.
- [ ] **AIQ-002 — External authorization:** retrieval and tool permissions are enforced outside model decisions and scoped to the user. Conditional on AI.
- [ ] **AIQ-003 — Output validation:** model output is schema-validated and treated as untrusted before persistence/rendering. Conditional on AI.
- [ ] **AIQ-004 — Quality evaluation:** representative evaluation cases and regression tests exist. Conditional on AI.
- [ ] **AIQ-005 — Provenance and citations:** source references are preserved where the feature promises grounded answers. Conditional on AI.
- [ ] **AIQ-006 — Tool minimization:** tools are narrowly scoped; destructive/external writes require explicit authorization. Conditional on tool-using AI.
- [ ] **AIQ-007 — Provider resilience:** model/provider failure, rate limits, version changes and timeouts have graceful handling. Conditional on AI.
- [ ] **AIQ-008 — Cost/latency tracking:** call cost, latency and error rates are measured with privacy-aware telemetry. Conditional on AI.

## Cost and sustainability (COST)

- [ ] **COST-001 — Cost model:** fixed and variable costs are estimated for expected MVP usage. Default P1 before hosting.
- [ ] **COST-002 — Usage limits:** resource, storage and third-party usage limits are defined. Default P1 before friends access.
- [ ] **COST-003 — Budget alert:** alerts exist for meaningful cost thresholds and have a response plan. Default P1 for paid services.
- [ ] **COST-004 — Service justification:** each managed service has a clear requirement and an owner. Ongoing.
- [ ] **COST-005 — Lifecycle cleanup:** unused resources and stale data have a cleanup/retention policy. Conditional on hosted services.

## Research, decision quality, and governance (RES)

- [ ] **RES-001 — Traceable claims:** material technical claims link to primary sources or reproducible tests. Default P1.
- [ ] **RES-002 — Evidence labels:** research distinguishes verified facts, source claims, inference, hypotheses and unknowns. Default P1.
- [ ] **RES-003 — Consequential comparisons:** compare credible alternatives using predeclared criteria. Default P1 for architecture choices.
- [ ] **RES-004 — Decision records:** material choices capture rationale, alternatives, consequences and revisit triggers. Default P1.
- [ ] **RES-005 — Tool adoption:** new dependencies/tools are evaluated for maintenance, license, security, cost and operational burden. Default P1.
- [ ] **RES-006 — Research freshness:** volatile facts and standards are periodically rechecked. Ongoing.
- [ ] **RES-007 — Agent safety:** research/coding agents have least privilege and their output is independently verified. Default P0 for privileged workflows.

## Registry maintenance

Review this registry when a new data class, capability, provider, or integration is introduced; deployment/storage architecture changes; a significant incident occurs; access expands; or a new standard or legal obligation becomes relevant.

Avoid duplicating detailed controls from the security program. Link to the security requirement and its evidence instead.
