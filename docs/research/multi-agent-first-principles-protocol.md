# Atlas Multi-Agent First-Principles Research and Build Protocol

**Status:** proposed operating protocol; no architecture decision or production implementation is authorized by this document.  
**Owner:** Yash.  
**Parent:** [Atlas Master Execution Roadmap](atlas-master-execution-roadmap.md) and [AI Engineering Execution Plan](atlas-ai-engineering-execution-plan.md).

## 1. Intended working style

Atlas is to be developed with multiple coding-agent perspectives that independently investigate, challenge, and synthesize—not a group of agents blindly agreeing with a leading answer. The desired loop is:

1. Establish the user's product goals and current repository facts.
2. Ask independent agents to investigate from first principles before showing them one another's conclusions.
3. Require source-backed research and explicit assumptions.
4. Hold a structured challenge round in which agents attack the strongest competing proposal.
5. Synthesize trade-offs and unresolved questions into reviewable artifacts.
6. Ask the owner to approve consequential product and architecture decisions.
7. Implement bounded tasks with explicit contracts and isolated workspaces.
8. Verify results using deterministic tests, independent review and measured behavior.
9. Feed incidents, evaluation results and user feedback back into the next cycle.

**Honesty constraint:** an agent role written in a plan is not an agent execution. Record which actual harness/model ran, when it ran, what inputs it received, what output artifact it produced, and what verification was performed. Never describe simulated personas or one model's multi-perspective answer as independent agent consensus.

## 2. Product invariants every agent must understand

- A Pinterest-like, clean and compact visual library for resource discovery and retrieval.
- A freeform plus structured whiteboard for spatial thinking.
- A connected knowledge graph with meaningful relationships and clusters.
- A focused reader, annotations and evidence-oriented research workspace.
- Universal capture and source adapters for web resources and other supported formats.
- Obsidian-friendly import/export and portable user-owned data.
- Explicit sync, conflict, duplicate, deletion, export and recovery semantics.
- Source-grounded AI outputs with visible provenance and honest uncertainty.
- Multi-user data isolation, access control, accessibility, responsive behavior and operational reliability.
- Backend-first engineering discipline, research before irreversible choices, and end-to-end vertical slices rather than disconnected mock screens.

The same resource identity and canonical ownership model should underpin library, board, graph, reader and research views. Agents must flag any proposal that creates parallel stores of the same resource without an explicit synchronization model.

## 3. Agent roles and independence

Begin with five distinct roles. Use separate actual agent sessions/harnesses when available; if not, document the gap instead of pretending the roles are independent.

### A. Product and user-jobs researcher
- Convert the product vision into user jobs and measurable acceptance criteria.
- Investigate capture, rediscovery, reading, connecting concepts, research and export journeys.
- Identify what is essential for the first release and what is a later capability.
- Deliver user journeys, edge cases, prioritization rationale and unresolved product questions.

### B. Existing-system reverse engineer
- Inspect public, authorized products, documentation, source repositories, tests, schemas, API boundaries, background jobs, migrations, deployment and import/export.
- Trace at least one representative end-to-end journey per system rather than collecting feature lists.
- Record repository revision/release, license, exact source paths, what was inspected, what could not be verified, and reproducible observations.
- Separate upstream fact from inference. Do not copy implementation wholesale or bypass access controls.

### C. Backend and distributed-systems architect
- Start from domain invariants, data ownership, transactions, lifecycle, concurrency, idempotency, recovery, security and operability.
- Propose the smallest architecture that satisfies demonstrated requirements.
- Explicitly challenge premature microservices, extra databases, queues, vector stores and framework layers.
- Deliver domain model, lifecycle/state diagrams, API contracts, failure modes, migration/backup strategy and ADR candidates.

### D. AI and agent-systems architect
- Separate conventional application logic, probabilistic inference, retrieval, agent tool use and long-running orchestration.
- Investigate provider APIs, structured outputs, retrieval, embeddings, Jev as an optional typed-decision component, evaluations, tracing and spend controls.
- Define tool permissions, trust boundaries, prompt-injection defenses, approval gates, cancellation and bounded retries.
- Deliver a capability map, model/agent evaluation plan, risk register and measured cost hypotheses.

### E. Skeptical reviewer / red team
- Begin from the actual requirements and evidence, not from a desire to agree with the architect.
- Find counterexamples, simpler alternatives, privacy/security failures, migration risks, failure modes, unsupported assumptions and hidden operational costs.
- Review API contracts, data isolation, AI provenance, agent permissions and test plans.
- Deliver blocking issues, severity, evidence, reproduction steps where possible, and explicit conditions for approval.

A synthesis lead integrates artifacts and resolves inconsistencies, but cannot erase dissent. On consequential decisions, retain minority reports and request owner approval.

## 4. Debate protocol: first principles, not a model popularity contest

Each agent's initial submission must answer these questions independently:

1. What user problem and invariant does this decision serve?
2. What are the requirements and measurable acceptance conditions?
3. What are the relevant facts from the current repository?
4. What evidence from existing systems supports or contradicts the proposal?
5. What is the simplest viable solution?
6. What fails under concurrency, partial failure, malicious input, scale, export, deletion or provider outage?
7. What are the cost, privacy, licensing, security and maintenance implications?
8. What alternatives were considered and why were they rejected?
9. Which decisions are reversible, and which create lock-in?
10. What experiment could falsify the recommendation?

### Challenge round

- Show each agent the competing proposals only after independent submissions are recorded.
- Require each agent to identify the strongest argument against its own proposal.
- Ask reviewers to test assumptions with source inspection or a small reproducible experiment where practical.
- Do not use majority vote as a substitute for evidence.
- Resolve disagreements by checking requirements, running experiments, or preserving the uncertainty as an explicit owner decision.
- Record evidence quality and confidence; multiple agents repeating the same unsupported claim do not make it verified.

## 5. Existing systems: end-to-end teardown protocol

Study a focused set deeply before broadening. Start with:

- **Karakeep** — capture, automated metadata/tagging/summaries, full-text and semantic search, API/clients, rules, archival and AI integration.
- **Linkwarden** — preservation formats, reader/highlights/annotations, collections and permissions, background preservation, API, import/export and backups.
- **Readeck** — saved readable content, archive format, storage, search, reader, labels, highlights, export and operational simplicity.
- **Obsidian** — local Markdown vaults, links/metadata, graph and canvas mental models, plugin/URI integration and portability.
- **One additional graph/spatial knowledge tool** chosen after initial teardown, to avoid prematurely narrowing the comparison set.

These are research candidates, not endorsements or architectural choices.

### Inspect each system in seven layers

1. **Product behavior:** onboarding, capture, library, search, reader, annotations, collections, boards/graph if present, settings, errors and empty states.
2. **Domain model:** canonical entities, relationships, identity, metadata, ownership, deletion and derived data.
3. **Ingestion pipeline:** input adapters, fetching/extraction, normalization, archival, processing states, retries, deduplication and failure recovery.
4. **Backend/API:** authentication, authorization, endpoints, validation, transactions, pagination, rate limiting, background jobs and versioning.
5. **Search and AI:** lexical/semantic search, indexing, embeddings, model boundaries, source provenance, configuration, privacy and failure fallback.
6. **Data operations:** schema migrations, backups, restores, import/export fidelity, sync/conflict behavior, data retention and account deletion.
7. **Delivery and operations:** dependencies, deployment topology, resource usage, observability, tests, security controls, licensing and maintenance burden.

For each layer, inspect actual source/docs/tests when available. A README or landing page is a starting clue, not an end-to-end audit.

### Required artifacts per system

- A teardown document with source links and inspected revision/date.
- One or more traced user journeys with sequence diagrams or state transitions.
- Domain model and key schema/API observations.
- Background job and failure-handling notes.
- Import/export and portability test matrix.
- Security/privacy/licensing notes.
- Useful ideas for Atlas, anti-patterns to avoid, and features not worth copying.
- Unknowns and tests required to verify them.
- Confidence labels: Observed, Verified, Primary-source claim, Secondary-source claim, Inference, Hypothesis or Unknown.

## 6. Research scorecard

Score only after collecting evidence. Use 1–5 with a written rationale, not false precision.

| Dimension | Key question |
|---|---|
| Product fit | Does it solve Atlas's actual user jobs? |
| Data ownership | Is user data portable, exportable and recoverable? |
| Domain integrity | Can all views share canonical resource identity? |
| Ingestion reliability | Are retries, duplicates and partial failures handled? |
| Search quality | Can users rediscover resources from vague memory? |
| AI trust | Are outputs grounded, inspectable and evaluable? |
| Extensibility | Can adapters and integrations evolve without rewrites? |
| Security/privacy | Are isolation, secrets, untrusted content and deletion addressed? |
| Operations | Can a small team run, back up, monitor and debug it? |
| Cost/complexity | Does the benefit justify infrastructure and cognitive overhead? |
| License/maintenance | Can Atlas legally reuse ideas/code, and is upstream healthy? |

Do not calculate a single winner score until weights are agreed. A system may be a great source for one subsystem and a poor fit overall.

## 7. Coding-agent execution protocol

Before implementation:
- [ ] Owner-approved requirements and acceptance tests.
- [ ] Approved ADR or explicitly reversible experiment.
- [ ] Defined module/API contract and migration plan.
- [ ] Task broken into bounded units with file ownership and dependencies.
- [ ] Risk classification and required review level.

During implementation:
- [ ] Each implementer has an isolated branch/worktree and a named task.
- [ ] Agents do not concurrently modify the same files or silently change shared contracts.
- [ ] Agents commit small changes and report exact files and commands.
- [ ] API keys and other secrets are never passed into untrusted agent context or committed.
- [ ] Tool access, network access, write permissions, spend, time and step count are bounded.

At integration:
- [ ] Deterministic tests and CI run on the actual change.
- [ ] A different agent reviews requirements, correctness, security, data isolation and maintainability.
- [ ] Integration conflicts and deviations from contracts are explicitly resolved.
- [ ] Migration, rollback, observability and failure paths are reviewed.
- [ ] Owner approval is required before merge/release for high-risk changes.

Agent completion report must include: task and contract, model/harness/version if known, files changed, commands actually run, test results, evidence links, assumptions, remaining risks, cost if available, and whether the output is code, research or a hypothesis.

## 8. AI-DLC and orchestration decision

Evaluate AWS Labs AI-DLC Workflows as the first lifecycle candidate because it supports multiple coding-agent harnesses and structured stage/approval workflows. Separately evaluate Collaborative AI-DLC as a possible orchestration product only if live shared sessions, isolated remote execution and traceability justify the infrastructure and cost.

Do not conflate:
- **Methodology:** phases, artifacts, gates and roles.
- **Coding-agent harness:** a tool that lets a model inspect/edit/run code.
- **Orchestrator:** routes work and manages state, delegation and approvals.
- **Execution sandbox:** isolates code and tools.
- **Model API:** supplies inference and incurs model usage charges.

Pilot a bounded task first. Compare setup time, artifact quality, cost, review burden, isolation, portability and failure recovery against a lightweight repo-native workflow. Review infrastructure costs and permissions before deploying a multi-agent platform. Adopt only what measurably improves Atlas.

## 9. First sessions and gates

### Session A — Repository reality and task map
- Read repository instructions, tree, package files, tests, CI, current UI prototypes, architecture/ontology docs and open PRs.
- Reproduce the current build/test baseline where the environment allows it.
- Record implemented, mocked, broken and unverified behavior.
- Deliver a repo map and top unknowns. No architecture selection yet.

### Session B — Independent system teardowns
- Divide Karakeep, Linkwarden, Readeck and Obsidian across research roles.
- Trace at least one end-to-end journey and one failure/import/export path per system.
- Have a separate reviewer audit source quality and missing layers.
- Deliver comparative evidence, not just feature checklists.

### Session C — Cross-system synthesis and requirements
- Map Atlas user jobs to observed capabilities and gaps.
- Define MVP journeys and acceptance criteria.
- Identify requirements that drive data model/API/AI design.
- Owner approves MVP boundary before implementation.

### Session D — Backend architecture debate
- Produce at least two plausible backend designs and one deliberately simple baseline.
- Debate domain ownership, persistence, ingestion, jobs, search, sync/export and operations.
- Run small experiments for uncertain/high-impact assumptions.
- Deliver ADR candidates and an owner approval gate.

### Session E — AI architecture debate and paid API experiment
- Choose one narrow AI capability with a labeled evaluation set.
- Compare model/provider options on output quality, provenance, latency, price and privacy.
- Evaluate Jev only on a typed decision task with a rules baseline.
- Implement a small, budget-capped server-side proof after approval.

### Session F — AIDLC and agent workflow pilot
- Use one low-risk, bounded feature to compare AI-DLC and the repo-native process.
- Record actual agents/harnesses, costs, conflicts, review burden and test evidence.
- Decide whether to adopt, adapt or defer; do not deploy a costly orchestration platform by default.

### Session G — First end-to-end vertical slice
- Implement authenticated capture → durable resource storage → metadata/source provenance → search/retrieval → one useful AI capability → export.
- Verify user isolation, duplicate handling, provider failure, retries, cost limits and portability.
- Build only after requirements and architecture gates are approved.

## 10. Definition of done for research and decisions

Research is complete only when:
- The target user journey was inspected or the access limitation is documented.
- Relevant source code/docs/tests and version/revision are linked.
- At least one counterargument and one simpler alternative are considered.
- Critical claims are verified or explicitly marked unknown.
- Findings map to Atlas requirements and decisions.
- The reviewer checks coverage and provenance.
- The owner has approved consequential decisions.

Implementation is complete only when:
- Acceptance criteria are met.
- Tests actually run and results are recorded.
- Security/privacy, data isolation, migrations and failure paths are reviewed.
- AI quality and cost are evaluated when relevant.
- Known limitations and rollback/recovery are documented.
- No unsupported claims of verification remain.

## 11. Initial evidence seed (not a completed teardown)

- [Karakeep repository](https://github.com/karakeep-app/karakeep) and [official docs](https://docs.karakeep.app/): bookmark capture, archival, AI-assisted tagging/summarization, full-text/semantic search, API and clients. The repository identifies AGPL-3.0; check the exact license and implications before reusing code.
- [Linkwarden repository](https://github.com/linkwarden/linkwarden) and [official import/export docs](https://docs.linkwarden.app/usage/import-and-export): preservation formats, reader/highlights, collections, APIs and import/export. Its docs explicitly note import deduplication and backup limitations—important cases to test in Atlas.
- [Readeck repository](https://github.com/readeck/readeck) and [official project docs](https://readeck.org/en/): local archival, reader, highlights, full-text search and a comparatively simple server-rendered architecture. Confirm current source repository and license before deeper inspection.
- [Obsidian URI documentation](https://help.obsidian.md/Extending%2BObsidian/Obsidian%2BURI): one concrete integration surface for opening, creating and searching notes; this is not evidence that a full two-way sync protocol exists.
- [AWS Labs AI-DLC Workflows](https://github.com/awslabs/aidlc-workflows): lifecycle workflow candidate.
- [Collaborative AI-DLC sample](https://github.com/aws-samples/sample-collaborative-ai-dlc): early-preview multi-agent orchestration sample that deploys AWS infrastructure and can incur charges; evaluate only after a cost/security review.

These links are initial evidence pointers. They do not imply that Atlas has completed the teardowns, run the software, verified every feature, or approved an architecture.
