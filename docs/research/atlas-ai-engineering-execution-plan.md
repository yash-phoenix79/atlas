# Atlas AI Engineering Execution Plan

**Status:** proposed plan; not architecture approval or permission for production changes.  
**Planning baseline:** 11 October 2026.  
**Parent plan:** [Atlas Master Execution Roadmap](atlas-master-execution-roadmap.md).

## Objective

Move Atlas from UI exploration toward a working, testable, AI-native product. The immediate question is how to establish a reliable backend, integrate model capabilities, evaluate Jev for bounded decisions, and use coding agents through a repeatable AI development lifecycle without losing control of correctness, security, cost, or the repository.

## Non-negotiable constraints

- Inspect the current repository, AGENTS.md, dependency files, CI, and open PRs before choosing a stack or editing application code.
- Preserve the product principle: simple until evidence justifies complexity. Start with a modular application, not microservices by default.
- The database/application remains the source of truth. An LLM must not be required for basic CRUD, permissions, export, or integrity.
- Never put provider keys in browser code, committed files, prompts, screenshots, or issue comments. Use environment variables/secrets and a server-side API boundary.
- Every AI capability needs representative evaluation data, failure behavior, provenance policy, latency/cost measurements, and a way to disable it.
- Agents are not trusted authorities. Generated changes must pass deterministic checks and review; tests must actually run before being reported as passing.
- One active editor per branch. Parallelize only through separate branches/worktrees and explicit file ownership.
- Treat model/API pricing, Jev access, SDKs, and AIDLC releases as time-sensitive; verify official sources before setup.
- No autonomous production deploys, destructive migrations, account/billing changes, or external side effects without explicit human approval.

## Workstream map

| ID | Workstream | Main question | Exit artifact |
|---|---|---|---|
| E0 | Repository reconnaissance | What exists today, what works, and what is unverified? | Repo map, runnable baseline, dependency/CI inventory |
| E1 | Backend and data model | What is the smallest reliable end-to-end resource lifecycle? | Domain model, API contracts, ownership model, migration/test plan |
| E2 | AI gateway and first capability | How do we call a paid model safely and prove one user value? | Provider adapter, secret handling, usage telemetry, feature evaluation |
| E3 | Retrieval and ingestion | How do sources become searchable, attributable knowledge? | Ingestion pipeline, provenance, retrieval baseline, failure policy |
| E4 | Jev evaluation | Which bounded decisions benefit from Jev vs rules or an LLM? | Access check, benchmark, cost/latency/correctness comparison |
| E5 | Coding-agent workflow | How do agents work without conflicting edits or false confidence? | Agent roles, task contract, branch protocol, review gates |
| E6 | AIDLC integration | Which lifecycle workflow improves delivery with acceptable overhead? | AIDLC pilot, recorded friction/benefit, adopt/adapt decision |
| E7 | AI agency and runtime | What work may an agent do, under what constraints? | Capability matrix, approval boundaries, trace/state/retry design |
| E8 | Evaluation, observability and cost | Can we detect regressions, failures, and runaway spend? | Evals, traces, per-feature cost metrics, limits, kill switch |
| E9 | Vertical slice and hardening | Can one user journey work end-to-end under failure? | Demonstrated slice, test evidence, threat review, release decision |

## Sequenced sessions

### Session 1 — Establish facts before selecting technology

- [ ] Read AGENTS.md, README, repository tree, dependency manifests, environment examples, CI workflows, architecture docs, decisions and open PRs.
- [ ] Establish what can be installed, run, linted, tested, and built in the current environment. Record actual commands and outcomes.
- [ ] Separate implemented behavior from mock/local-only behavior, TODOs, and unverified claims.
- [ ] Inventory persistence, authentication, routing, capture, search, file handling, deployment and telemetry.
- [ ] Create a dependency/secret/security inventory; never print secret values.
- **Exit:** verified baseline and short list of unknowns. Do not choose a new stack merely because the repo is unfamiliar.

### Session 2 — Define the backend contract and first vertical slice

- [ ] Choose one narrow user journey, provisionally: capture a URL/resource → persist it to the authenticated user's account → view/edit metadata → retrieve it again.
- [ ] Define resource identity, ownership, timestamps, canonical URL, source metadata, processing status, and deletion/export semantics.
- [ ] Define API request/response schemas, validation, error shapes, pagination and authorization checks.
- [ ] Decide relational schema and migration approach based on the current stack and query needs.
- [ ] Write integration tests for ownership isolation, validation, persistence, duplicate/canonicalization behavior, and failure paths before broad implementation.
- [ ] Keep async ingestion behind a job boundary only if duration/retries justify it.
- **Exit:** reviewed contracts and tests for the chosen journey; architecture choice documented with alternatives and reversibility.

### Session 3 — Purchase and safely wire one model API

- [ ] Compare official API docs/pricing for OpenAI, Anthropic, and Google on the actual intended task; do not choose by headline token price alone.
- [ ] Create a separate project/key for Atlas experiments where available.
- [ ] Start with a small, explicitly chosen trial budget (suggested starting envelope: USD $10–20 total, not a recurring commitment).
- [ ] Configure a spend alert and the strongest available hard limit; verify the setting rather than assuming an alert is a cap.
- [ ] Keep the key server-side in a local environment variable/secret manager. Add .env.example with placeholders only; verify .env and logs are excluded.
- [ ] Implement one provider adapter behind an internal interface, with timeouts, bounded retries, rate-limit handling, request IDs and usage accounting.
- [ ] Log model ID, prompt/template version, token usage, latency, result status and estimated cost; redact user content and secrets where appropriate.
- [ ] Add deterministic fallback/disable behavior so provider outage does not break ordinary resource operations.
- **Initial AI use case:** summarize a saved resource with source metadata and an inspectable result. Do not start with an autonomous multi-tool agent.
- **Exit:** a real API request succeeds from the backend; secrets are not exposed; spend is visible; errors are tested; no provider is permanently locked in.

### Session 4 — Build the AI data path, not a generic chatbot

- [ ] Map ingestion stages: fetch/import → extract → normalize → persist raw/source metadata → derive chunks/embeddings if needed → index → mark completion/failure.
- [ ] Define idempotency, retry policy, timeout, content-size limits, content-type validation, and safe handling of untrusted documents/URLs.
- [ ] Preserve provenance from each generated claim or summary to its source and location where feasible.
- [ ] Evaluate lexical search first as a baseline; add embeddings/vector search only where retrieval tests show meaningful value.
- [ ] Design retrieval tests with relevant, irrelevant, ambiguous, and adversarial examples; measure recall/precision and citation support.
- [ ] Decide whether embeddings can be regenerated and how provider changes affect stored vectors.
- **Exit:** reproducible ingestion/retrieval test set and evidence that the chosen retrieval approach improves a real task.

### Session 5 — Evaluate Jev as a bounded decision component

- [ ] Verify access, official API endpoint, current terms, data handling, rate limits, model version and pricing directly with TypeSafe AI.
- [ ] Do not confuse Jev with a generative LLM: it is intended for typed decisions/probabilities, not writing summaries or explaining sources.
- [ ] Select one plausible decision task, such as resource-type classification, duplicate-candidate ranking, routing an ingestion job, or deciding whether a claim needs human review.
- [ ] Build a labeled test set with clear classes/rubric and edge cases; compare Jev against a simple rules baseline and the current LLM.
- [ ] Measure accuracy/calibration, abstention behavior, latency, retries, total task cost, and error impact. Schema-valid output is not proof of correctness.
- [ ] Keep final action in deterministic application code; use confidence thresholds and human review for consequential/ambiguous decisions.
- [ ] Store Jev behind the same internal decision interface as other strategies so it can be removed without redesign.
- **Exit:** adopt/defer/reject decision based on measured performance. Jev is optional, not a dependency for Atlas core functionality.

### Session 6 — Pilot AIDLC on one bounded feature

- [ ] Evaluate the official AWS Labs [AI-DLC Workflows](https://github.com/awslabs/aidlc-workflows) project against Atlas' repo, instructions, coding-agent harness and approval gates.
- [ ] Read installation instructions and security implications before executing an installer or allowing repository-wide changes.
- [ ] Run the smallest appropriate workflow for a non-destructive feature or planning-only task.
- [ ] Compare generated artifacts, time, review burden, duplicated documentation, context retention, test evidence and human control against our existing lightweight workflow.
- [ ] Keep our existing AGENTS.md, tests and PR policy authoritative where a tool's defaults conflict.
- [ ] Adopt the smallest useful subset; do not install every workflow/profile or accept all generated docs by default.
- **Exit:** evidence-backed decision to adopt, adapt or defer AIDLC, with a documented working example.

### Session 7 — Define coding-agent roles and coordination

Start with distinct responsibilities, not a swarm of agents editing the same code.

| Role | Allowed work | Must not do |
|---|---|---|
| Lead/planner | Read repo, define task, identify files/contracts, assign owners | Mark work complete without evidence |
| Implementer | Edit assigned files on an isolated branch/worktree, run focused checks | Change unrelated contracts or merge itself |
| Test/evaluation agent | Create independent test cases and inspect coverage gaps | Rewrite implementation to make its own tests pass without disclosure |
| Reviewer | Inspect diff against requirements, security and maintainability | Trust implementer claims without inspecting evidence |
| Research agent | Inspect public docs/repos and cite exact sources/versions/licenses | Copy proprietary code or bypass access controls |
| Release gate | Verify CI, migrations, configuration, risk and rollback | Deploy or perform destructive actions without approval |

- [ ] Write a task contract: goal, non-goals, owned files, input/output contract, tests, constraints, and completion evidence.
- [ ] Use one branch/worktree per concurrent implementer; establish file ownership and merge order before parallel work.
- [ ] Require each agent to report files changed, commands run, test outcomes, unresolved assumptions and token/cost estimate.
- [ ] Use a fresh-context reviewer for consequential changes.
- [ ] Start with two roles in practice (implementer + independent reviewer); add parallel agents only when the task is separable and measured coordination overhead is worthwhile.
- **Exit:** repeatable, low-conflict task-to-PR process.

### Session 8 — AI agency, durable work and permissions

- [ ] Distinguish model, harness, tools, execution sandbox, durable orchestration/state, and external services.
- [ ] Define explicit capabilities: read-only research, repo read, branch edits, test execution, network access, secret access, PR creation, merge, deploy, external side effects.
- [ ] Default to least privilege. Give untrusted code/document content no authority to alter system instructions or request secrets.
- [ ] Require human approval for merge, production deploy, destructive data changes, purchases, sending messages, and irreversible actions.
- [ ] Add bounded step counts, timeouts, token/spend budgets, idempotency keys, cancellation and retry ceilings.
- [ ] Persist task state and tool-call audit records if jobs must survive restarts; do not add a durable workflow engine before a real long-running use case exists.
- [ ] Consider sandboxes (for example, OpenHands or a managed isolated runtime) only when agent execution needs stronger isolation than a local coding tool provides.
- **Exit:** permission matrix and failure/approval tests for any workflow allowed to take actions.

### Session 9 — Quality, observability and economics

- [ ] Build a small golden dataset for summary quality, source attribution, retrieval, classification and abstention.
- [ ] Track quality, latency, retries, failure rate and cost per successful task—not just tokens per request.
- [ ] Add regression evaluations to CI where deterministic and affordable; separate flaky/model-dependent checks from blocking unit tests.
- [ ] Test malformed model output, provider timeout, rate limiting, duplicate jobs, unavailable source, prompt injection, permission denial and exhausted budget.
- [ ] Add per-feature usage caps, alerting and a global kill switch for model-backed functionality.
- [ ] Review data retention, provider data-use terms and whether sensitive source content is sent to external models.
- **Exit:** release decision based on test and cost evidence, not a successful demo alone.

## Initial API purchasing recommendation

Start with one provider and a small experiment, not a multi-provider abstraction framework or a fleet of agents.

1. Compare official OpenAI, Anthropic and Google docs for the intended workload and your payment/access constraints.
2. Prefer a low-cost model for extraction/classification and reserve a stronger model for tasks where evaluation shows the difference matters.
3. Use a separate Atlas project/key and configure spend controls before wiring it into code.
4. Start with a total USD $10–20 trial envelope. Treat this as a suggested experiment budget; confirm card/payment acceptance and account-specific billing controls in the provider console.
5. Keep provider/model selection in configuration. Do not route to multiple models until a benchmark demonstrates the value.
6. Never commit API keys or paste them into an agent prompt, issue, PR, browser bundle or repository file.

Primary sources to verify immediately before setup:
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
- [OpenAI spend limits](https://developers.openai.com/api/docs/guides/spend-limits)
- [Anthropic API billing](https://support.claude.com/en/articles/8977456-how-do-i-pay-for-my-claude-api-usage)
- [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [AWS Labs AI-DLC Workflows](https://github.com/awslabs/aidlc-workflows)

## Decision gates

Do not treat the following as already decided:

- Final backend framework, database, hosting and job system.
- Whether embeddings/vector search are needed for MVP.
- First production AI feature and default provider/model.
- Whether Jev materially improves a bounded Atlas decision.
- Whether AIDLC overhead is justified for this repo.
- Whether to build custom agent orchestration or use a harness/runtime.
- Whether multi-agent parallelism improves throughput after review/rework cost.

Every decision record should state: problem, options, evidence, counterevidence, cost, security/privacy implications, reversibility, confidence, decision owner and revisit trigger.

## First concrete milestone

**Prove one complete resource journey with one AI capability:** authenticated capture → durable persistence → inspectable source metadata → server-side model call → stored result with provenance → tests for ownership, provider failure and budget handling.

This milestone is intentionally small. It validates the backend, paid API integration, observability and AI value together before investing in graph intelligence, autonomous agents or complex orchestration.
