# Atlas Agent Systems Lab

**Status:** Evaluation plan only. No candidate below is claimed installed, executed, benchmarked, or adopted.  
**Owner:** Yash.  
**Last reviewed:** 11 October 2026.

## Purpose

Atlas will evaluate agent engineering systems as reusable capabilities—not collect frameworks for their own sake. The goal is to determine which combination measurably improves product reasoning, source-code reverse engineering, implementation quality, independent verification, security, and delivery speed without compromising privacy, portability, cost control, or human approval.

This lab covers both agent systems (harnesses, workflows, orchestration, skills, tools and evaluation) and a dedicated reverse-engineering agent that traces existing products and repositories end to end.

## Candidate landscape

Treat these as candidates to inspect, not recommendations to install wholesale.

| Candidate | Primary category / hypothesis | What to inspect | Main risks / evaluation questions |
|---|---|---|---|
| [Everything Claude Code (ECC)](https://github.com/affaan-m/everything-claude-code) | Harness optimization: agents, skills, rules, hooks, memory, security checks and research-first workflows | Minimal profile; test/review/security workflows; hook behavior; supported harnesses; update path | Overlapping rules/hooks, broad permissions, context overhead, plugin/version conflicts, unreviewed skill instructions |
| [Goose](https://github.com/aaif-goose/goose) | General-purpose open agent with CLI/desktop/API, MCP extensions, recipes and subagents | Extension/tool permission model, recipes, ACP interoperability, sandbox, audit trail, local-vs-remote execution | Extension trust, credentials, reproducibility, state management, extra harness overhead |
| [gstack](https://github.com/garrytan/gstack) | Product/engineering workflow skills: product framing, architecture review, design, code review, browser QA and release | Product review, plan reviews, code review/QA/security flows, browser setup, release permissions | Strong workflow assumptions, Claude Code/Bun dependencies, potentially broad browser/deploy access, duplicated reviews |
| AI Agency / agency-style agent teams | Specialist-agent composition and role-based delivery | **Resolve the exact project/repository first.** Inspect coordinator, role contracts, handoffs, state, tool permissions, memory, tests and failure recovery | “AI Agency” names multiple projects; do not install or cite a similarly named repository as if it were the intended one |
| Claude Code project subagents | Repo-native delegation with explicit role and file scope | Isolation of first submissions, tool restrictions, shared context, reproducibility and evidence artifacts | Same-harness correlated errors; project instruction files do not prove independent execution |
| Codex CLI / multi-agent delegation | Alternative coding harness and delegated tasks | Task isolation, approvals, worktrees, review quality, test execution and compatibility with portable skills | Provider/model differences, duplicate context/cost, permission boundaries |
| AWS Labs AI-DLC Workflows | Lifecycle stages and human approval gates across coding-agent harnesses | Artifact structure, supported harnesses, setup friction, stage transitions, rollback and evidence capture | Workflow ceremony, assumptions about repo layout, maintenance and compatibility |
| OpenHands | Agent runtime / software engineering tasks in controlled environments | Sandbox boundaries, repository execution, logs, reproducibility, browser/test integration | Runtime/container costs, setup burden, external access and secret isolation |
| OpenAI Agents SDK / other orchestration libraries | Programmatic agent workflows, tools, handoffs and tracing | Only if Atlas needs a product-level agent service; compare typed contracts, tracing, policy enforcement and eval integration | Premature custom orchestration before a product requirement exists |
| Agent Skills, MCP, ACP | Interoperability standards for methods and tool/agent connections | Portability of skill instructions, server/tool schemas, auth, trust and compatibility | Standards do not themselves make a tool safe; remote tools and skill content remain untrusted |
| Jev / typed decision systems | Specialized typed/probabilistic decisions rather than general coding | Compare a narrowly defined decision task against deterministic rules and a model baseline | Unnecessary abstraction if rules or ordinary structured model output already suffice |

**AI Agency naming note:** before evaluating this row, record the exact URL/repository the user intends. Do not guess which of several similarly named projects was meant.

## How to reverse engineer an agent system

The dedicated **Agent Systems Reverse Engineer** must inspect each candidate using the same protocol and publish an evidence-backed teardown. Do not infer internals from marketing claims.

### 1. Establish provenance and safe scope
- Record canonical repository/docs, maintainer, license, release/tag and commit inspected, date, dependencies, supported runtimes and maintenance signals.
- Read installation scripts and package lifecycle scripts before execution. Prefer source inspection and a disposable sandbox.
- Enumerate network calls, telemetry, filesystem access, shell/browser access, credential handling, external services, permissions and default approval behavior.
- Never provide production secrets or private Atlas data. Do not bypass authentication or access controls.

### 2. Trace a representative task end to end
For each system, follow one low-risk task from user request to verified artifact:
1. Input parsing and task planning.
2. Agent/role selection and delegation.
3. Context assembly, memory and retrieval.
4. Model/provider calls and tool schemas.
5. Tool permission checks and execution sandbox.
6. Intermediate state, handoffs, retries, cancellation and recovery.
7. Output/artifact creation, tests and independent review.
8. Logs, traces, cost accounting and final user-visible report.

Record the sequence with a diagram and cite source files or docs for each observed boundary. Mark runtime behavior as **Observed** only if actually reproduced. Mark code-reading conclusions as **Inference** unless a test confirms them.

### 3. Inspect implementation layers
- **Harness/runtime:** event loop, tool-call loop, context window handling, state and termination conditions.
- **Delegation:** role contracts, spawning, isolation, communication, aggregation and deadlock/failure handling.
- **Tools/extensions:** schemas, validation, authorization, network and filesystem capabilities, timeouts, retries and idempotency.
- **Memory/context:** what persists, what is summarized, provenance, stale information, cross-task leakage and deletion.
- **Safety:** prompt injection, untrusted repo/web content, secret leakage, command approval, sandbox escape assumptions and supply-chain risk.
- **Quality controls:** tests, evaluator design, independent review, reproducibility and regression detection.
- **Operations:** installation, updates, telemetry, logs, provider outages, rate limits, cost caps and rollback.
- **Portability:** model/provider coupling, standards support, skill format, exportability and lock-in.
- **License and reuse:** distinguish learning from behavior versus copying source, prompts, code or assets.

### 4. Required teardown artifact
Create a document under docs/research/agent-systems/ with:
- Scope, version/commit, license and access date.
- Architecture and task-sequence diagram.
- Component map and critical source paths.
- One happy-path trace and one failure/permission-boundary trace.
- What was source-inspected versus actually executed.
- Security, privacy, supply-chain and cost analysis.
- Strengths, weaknesses, likely Atlas use cases and anti-patterns.
- A minimal reproduction or benchmark, if safe and feasible.
- Open questions, confidence labels and reviewer findings.
- Recommendation: **adopt**, **adapt selected parts**, **defer**, or **reject**, with evidence.

## Shared benchmark: same tasks, same rubric

Run candidates on a small, fixed suite in a disposable branch/worktree with identical task inputs and acceptance tests. Do not compare a fully configured framework against an unconfigured harness and claim a fair result.

Initial tasks:
1. **Repository reality audit:** identify what is implemented, mocked, broken and unverified without editing app code.
2. **Reverse-engineering task:** trace a resource capture-to-export flow in one public, licensed repository.
3. **Small bug fix:** reproduce a test failure, implement the minimal fix, run tests and report limitations.
4. **Adversarial review:** find a seeded authorization/data-isolation flaw in a toy fixture; no real target exploitation.
5. **UI verification:** test a supplied local fixture for keyboard flow, responsive behavior and empty/error states.
6. **Research synthesis:** compare two architecture alternatives with citations, counterevidence and unresolved questions.

Score 1–5 with evidence, and report raw outcomes alongside scores:

| Dimension | Measure |
|---|---|
| Correctness | Acceptance tests passed; defects introduced |
| Evidence quality | Claims linked to source, paths, commands and outputs |
| Independent verification | Reviewer finds meaningful issues; false approvals/misses |
| Security | Permission adherence, injection resilience, secret handling, least privilege |
| Reproducibility | Same inputs yield inspectable, repeatable artifacts |
| Recovery | Behavior after tool/model/test failure, cancellation or timeout |
| Efficiency | Wall time, human review time, token/API cost and setup effort |
| Maintainability | Diff size/clarity, instruction sprawl, upgrade friction |
| Portability | Can the workflow move between harnesses without major rewrite? |
| Human control | Approval points, clear status, no unapproved external side effects |

Keep the task set small and versioned. Report failures and variance; do not publish a single winner score without task-level results. A faster result that misses security or correctness gates is a failure.

## Adoption strategy

### Stage A — Inspect before installing
1. Review canonical source, license, setup scripts, permissions, dependency and network behavior.
2. Map features to existing Atlas AGENTS.md, CLAUDE.md, agents and skills.
3. Identify overlap and conflicts; create a minimal component allowlist.
4. Install only after the source and install plan are reviewed.

### Stage B — One-system-at-a-time pilot
- Use a disposable branch/worktree and a bounded, non-destructive task.
- Capture baseline results with the existing repo-native workflow first.
- Add one candidate, repeat the same task suite, record differences, then remove/disable it and verify the baseline still works.
- Never stack ECC + gstack + Goose + an agency framework at once in the first experiment; otherwise attribution becomes impossible.

### Stage C — Compose only proven capabilities
Likely composition to test—not yet an approved design:
- **Lifecycle:** repo-native gates first; compare AI-DLC.
- **Workflow skills:** selectively compare ECC and gstack, avoid duplicate plan/review hooks.
- **Execution harness:** Claude Code or Goose for a specific use case; compare with Codex/OpenHands only on the same task.
- **Interoperability:** use portable Agent Skills/MCP/ACP where it provides a real compatibility benefit.
- **Reverse engineering:** a repo-specific role + teardown skill, backed by primary-source inspection and a skeptical independent verifier.
- **Orchestration:** do not build or deploy a custom orchestration service until measured needs exceed native subagents and simple task contracts.

## Reverse-engineering agent: operating contract

**Mission:** explain how a system works from authorized, inspectable evidence so Atlas can make sound product and architecture decisions. It is a researcher, not an autonomous installer or implementation agent.

**Inputs:** named target, research question, allowed sources, depth, time/budget limit and forbidden actions.

**Allowed by default:** public documentation/source inspection, read-only repository navigation, static analysis, local diagrams, tests in a disposable sandbox, and citations to inspected files.

**Requires explicit approval:** executing unknown setup scripts, installing dependencies, accessing external services, browser sessions with credentials, modifying the target repository, using paid APIs, uploading artifacts, opening PRs, or running destructive tests.

**Forbidden:** bypassing access controls, extracting secrets, using production/private user data without authorization, claiming source code was run when it was only read, or copying protected code into Atlas without a license review.

**Output schema:** target, version_or_commit, question, scope, sources_inspected, commands_run, observations, inferences, unknowns, threats_and_permissions, diagrams, reproduction_steps, recommendation, reviewer_challenges, confidence.

**Completion gate:** an independent reviewer checks whether the journey is genuinely end-to-end, evidence labels are correct, important layers are missing, licensing/security concerns are surfaced, and claims are reproducible. No architecture choice is approved automatically by this agent.

## Initial source list

- ECC: https://github.com/affaan-m/everything-claude-code
- Goose: https://github.com/aaif-goose/goose
- gstack: https://github.com/garrytan/gstack
- AWS Labs AI-DLC Workflows: https://github.com/awslabs/aidlc-workflows
- OpenHands: https://github.com/All-Hands-AI/OpenHands
- Agent Skills specification: https://agentskills.io/
- MCP: https://modelcontextprotocol.io/
- ACP: https://agentclientprotocol.com/
- OpenAI Agents SDK: https://github.com/openai/openai-agents-python
- OpenAI Codex: https://github.com/openai/codex

This list is not exhaustive. Extend it through evidence-led discovery, but preserve the rule: inspect → baseline → one controlled pilot → compare → decide. No candidate is adopted merely because it is popular or has many agents/skills.
