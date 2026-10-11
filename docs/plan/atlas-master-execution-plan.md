# Atlas Master Execution Plan

**Status:** Canonical execution index; planning and discovery only.  
**Owner:** Yash.  
**Last updated:** 11 October 2026.  
**Execution tracker:** [Issue #15 — Atlas execution backlog](https://github.com/yash-phoenix79/atlas/issues/15).  
**Planning PR:** [PR #14](https://github.com/yash-phoenix79/atlas/pull/14).

## Purpose and source of truth

This document connects Atlas's existing detailed plans into one dependency-ordered delivery path. It does not duplicate every checklist. **Issue #15 tracks executable tasks, gaps, evidence and completion; this document preserves the durable sequence, gates and links.**

A plan is not proof of execution. Keep these statuses distinct:
- **Proposed:** suggested, not yet investigated or approved.
- **In progress:** work has actually started.
- **Verified:** acceptance evidence exists and has been reviewed.
- **Approved:** the owner explicitly accepted a consequential decision.
- **Implemented:** the behavior exists in the application.
- **Deferred / Rejected:** a documented decision, not an invisible omission.

Every task should have an ID, priority, dependencies, owner/agent, expected artifact, acceptance criteria, evidence, status, blocker and exit gate.

## Dependency-ordered roadmap

| Stage | Priority | Work | Required output / exit gate | Status at baseline |
|---|---|---|---|---|
| 0. Control plane | P0 | Reconcile repo status, links, backlog, evidence and decision records | Canonical plan/index and linked execution issue; status vocabulary is consistent | Planning docs exist; consolidation tracked in Issue #15 |
| 1. Repository reality audit | P0 | Inspect actual app, prototypes, manifests, scripts, CI, tests, deployment and PRs; run safe baseline checks | Commit `docs/research/repository-reality-audit.md` with evidence-backed inventory: implemented/mock/broken/planned/unverified; exact commands and actual results | Not yet verified |
| 2. Existing-system teardowns | P0 | Trace Karakeep, Linkwarden, Readeck and Obsidian end to end, including failure and export paths | Reviewed dossiers and evidence-linked comparison matrix | Planned; not complete |
| 3. Agent systems lab | P0 | Reverse-engineer ECC, Goose, gstack, the exact AI Agency project, and selected harness/workflow/standards candidates | Safe-source review, separate agent runs, controlled benchmark and adopt/adapt/defer/reject recommendation | Plan exists; no candidate run/benchmark claimed |
| 4. Requirements and MVP | P0 | Rank user jobs, select first journey, define non-goals, acceptance/evaluation criteria | Owner-approved MVP scope and measurable acceptance criteria | Not approved |
| 5. Backend/data architecture | P1, after requirements | Compare simple baseline and credible alternatives; define identity, ownership, lifecycle, API, migrations, recovery and threat model | Owner-approved ADRs/contracts and test plan | Not approved |
| 6. AI proof | P1, after capability definition and spending approval | Choose one source-grounded capability; evaluate providers, privacy, quality, latency, cost and failure behavior | Golden evaluation set, server-side proof, cost/safety evidence and adopt/defer decision | Not run; no purchase authorized |
| 7. First vertical slice | P1, after gates | Authenticated capture → durable user-scoped storage → retrieval → grounded AI with provenance → export | End-to-end acceptance tests, independent review and actual build/test/security evidence | Not authorized yet |
| 8. Product validation | P1, alongside approved prototype/product work | Task-based usability, accessibility, responsive and error/recovery testing | Observations, fixes and evidence-backed product decisions | Not verified |
| 9. Production readiness | P1, before release | CI/release gates, threat review, isolation, observability, restore drills, rollback, privacy/legal/cost review | Release decision record with residual risks and explicit owner approval | Not verified |

## Required execution contract

For every task in Issue #15:
1. State the question and user/product outcome.
2. Record dependencies, scope, non-goals and risk.
3. Identify the responsible person/agent and exact artifact.
4. Define acceptance criteria before execution.
5. Record sources, environment, commands actually run and outputs.
6. Label observations, primary-source claims, inference, hypotheses and unknowns.
7. Have a separate reviewer verify consequential findings and code.
8. Update status only when evidence supports it; preserve dissent and unresolved questions.
9. Require owner approval for MVP/architecture, paid billing, high-permission installs, merges, destructive operations and deployment.

## Agent systems and reverse-engineering boundary

Use [the Agent Systems Lab](../research/agent-systems-lab.md) for the candidate matrix, source/permission review, teardown template, benchmark and reverse-engineering agent contract. Do not stack several frameworks in the first pilot. Establish a repo-native baseline, test one candidate at a time, then compose only capabilities that improve measured outcomes. Resolve the exact AI Agency repository before evaluating it.

## Security and release invariants

- Treat imported content, websites, repository text, skills and tool output as untrusted.
- Do not expose production secrets or private user data to agents or unapproved providers.
- Basic CRUD, authorization, integrity and export must work independently of AI availability.
- Prove multi-user isolation server-side with regression tests.
- Keep user data portable; test import/export and backup restoration.
- Do not add queues, vector/graph databases, microservices or custom orchestration without evidence.
- Never claim an agent run, test, teardown, browser session, user study or benchmark occurred unless it actually did.
- A green test suite or completed checklist alone does not authorize a release.

## Canonical documents

- [Execution backlog and gap register — Issue #15](https://github.com/yash-phoenix79/atlas/issues/15)
- [Working-backwards plan](./atlas-working-backwards-plan.md)
- [Master product/research roadmap](../research/atlas-master-execution-roadmap.md)
- [AI engineering execution plan](../research/atlas-ai-engineering-execution-plan.md)
- [Multi-agent first-principles protocol](../research/multi-agent-first-principles-protocol.md)
- [Agent Systems Lab](../research/agent-systems-lab.md)
- [Requirements registry](../engineering/requirements-registry.md)
- [Production readiness](../engineering/production-readiness.md)
- [Security program](../security/security-program.md)
- [AI and coding-agent security](../security/ai-agent-security.md)

## Current verified snapshot — 11 October 2026

- PR #14 is open and unmerged on branch planning/atlas-master-roadmap.
- Planning docs and agent role/skill files exist on the branch.
- The repository runtime baseline, complete system teardowns, independent multi-agent runs, candidate benchmarks, user studies, MVP approval, production architecture and release readiness are not claimed complete.
- The next execution step is Stage 0 reconciliation followed by the repository reality audit. Do not jump to broad production implementation.

## Planning closeout and freeze — 11 October 2026

**Intent:** finish the planning layer today, then stop expanding documents and execute the dependency-ordered backlog. “Planning closed” means the next action, owner, artifact, acceptance gate and approval boundary are unambiguous; it does **not** mean the audit, research, implementation or release work is complete.

### Today's closeout checklist

- [ ] **Consistency pass:** reconcile README, AGENTS.md, CLAUDE.md, working-backwards plan, master roadmap, AI engineering plan, requirements registry, security guidance, production-readiness guidance and this plan. Resolve contradictions in the source documents; record genuine product/architecture unknowns as decisions, not guesses.
- [ ] **Requirement traceability:** map each accepted user job and product principle to requirement IDs, user journeys, acceptance criteria, evaluation evidence and a phase. Keep the visual bookshelf/library, flexible whiteboard, clustered knowledge graph, focused reader/research workspace, contextual AI, optional learning/gamification and portability in the requirements inventory; keep the UX uncluttered through progressive disclosure.
- [ ] **Execution-ready backlog:** every workstream has priority, dependency, owner/agent role, artifact path, acceptance criteria, verification method, status, blocker and exit gate. One issue remains the task tracker; do not create duplicate issue lists for the same work.
- [ ] **Research protocols:** confirm the repository-audit template, competitor teardown template, agent-system reverse-engineering template, benchmark scorecard and independent challenge/review process are linked from the execution backlog.
- [ ] **Agent/tooling decision boundary:** record candidate systems as unapproved until source/license/permissions/data-flow review and a controlled benchmark exist. Resolve the exact AI Agency repository with the owner before evaluating that candidate. Do not install the full candidate list.
- [ ] **Decision gates:** make explicit that MVP scope, architecture ADRs, paid providers, privileged installs, production implementation, merge, destructive operations and deployment require the appropriate owner approval.
- [ ] **Final freeze review:** verify links, task statuses, branch/PR/issue references, and that no document implies work is verified without evidence. Publish one closeout summary and identify the first executable task.

### Freeze rules after closeout

1. Do not add another planning document unless it answers a distinct decision or is a required evidence artifact.
2. Put durable methods and approved decisions in canonical docs; put tasks, blockers, evidence links and status in Issue #15.
3. Execute in dependency order: repository reality audit → existing-system teardowns and agent-system baseline/benchmark (parallel only where independent) → owner-approved requirements/MVP → architecture decisions → AI proof → approved vertical slice → product validation → production readiness.
4. Parallelize only independent tasks with separate file ownership. Collect independent first submissions before challenge/review; do not simulate separate agents in one session.
5. If a decision is blocked on owner input, record the options, evidence, trade-offs and exact question, then continue other unblocked work. Never silently decide for the owner.
6. Keep PR #14 open for review; do not merge it without explicit authorization. Keep Issue #15 open because it tracks the execution work.

### What “closed today” means

- **Can be closed today:** planning consistency, traceability, ownership/acceptance contracts, linked templates, dependency ordering, explicit approvals, and a frozen execution backlog—provided each checklist item is actually checked against the repository.
- **Cannot honestly be marked closed merely by planning:** runtime audit, competitor teardowns, real independent agent runs, benchmarks, user validation, approved MVP/architecture, implemented features, security/restore drills, or production release. Each needs its own evidence and/or owner approval.
- **First task after freeze:** complete and commit `docs/research/repository-reality-audit.md` with real repository inspection and actual safe baseline command results. Do not start broad implementation before this gate.
