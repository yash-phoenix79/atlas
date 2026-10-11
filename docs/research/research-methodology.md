# Atlas Technical Research Methodology

- **Status:** Accepted working method
- **Last reviewed:** 2026-10-11
- **Related:** [Research hub](README.md), [Source quality rubric](source-quality-rubric.md), [Production engineering resources](production-engineering-resources.md)

## Purpose

Research should change a decision, reduce uncertainty, or produce reusable evidence. It is not complete because many links were collected or an AI produced a summary. Use this process for product, architecture, tool, framework, library, security, AI-agent and operational research.

## Research workflow

### 1. Write the decision question
State the question so evidence could change the answer. Example: “Which persistence approach best meets Atlas's MVP needs for private user-owned resources, export, restore, and low operational burden?”

### 2. Record constraints before searching
Record user/product requirements, expected workload and growth horizon, stack/runtime and deployment constraints, security/privacy and data sensitivity, budget and maintainer capacity, compatibility/license/portability requirements, and explicit non-goals.

### 3. Define criteria before comparing
Choose criteria and relative importance before reading vendor marketing. Common criteria include correctness, reliability/recovery, security/privacy, maintenance/support lifecycle, compatibility/migration cost, performance under relevant workload, total cost, operational complexity, lock-in, license, and legal constraints. Apply hard constraints first, then compare trade-offs. Avoid false precision in subjective scores.

### 4. Search in evidence order
1. Current official docs, specifications, release notes and advisories.
2. Source code, tests, examples and issue/PR discussions from maintainers.
3. Reproducible benchmarks or experiments with methodology and workload.
4. Independent reviews, postmortems and technical write-ups.
5. Community discussions for lived experience and edge cases, with corroboration.

Search snippets and AI summaries are discovery aids, not evidence. Open the source and inspect the relevant section/version.

### 5. Check freshness and applicability
Record access date for volatile facts. Verify product version, release channel, plan/edition, platform, jurisdiction, and whether a page describes stable behavior, beta functionality, a draft, or a deprecation. Prefer versioned documentation for implementation decisions.

### 6. Look for disconfirming evidence
Search for known limitations and failure modes, security advisories and unsupported versions, migration/upgrade issues, performance regressions and benchmark caveats, maintainer responsiveness, operational burden, hidden costs, lock-in, and credible alternatives. Repeated articles tracing back to one source are not independent corroboration.

### 7. Reproduce material claims
When feasible, run a minimal prototype, test, benchmark, or configuration check. Record environment, versions, commands, data shape, steps, result and limitations. Keep experiments isolated from production data and credentials.

### 8. Synthesize and decide
Produce a concise recommendation and confidence, evidence table/source links, alternatives, trade-offs/risks, assumptions/unknowns, validation required before adoption, decision owner, and revisit triggers. Record consequential choices in a dated ADR. Research findings alone do not automatically authorize a product decision.

## Evidence vocabulary

- **Observed:** directly seen/reproduced; include date and steps.
- **Primary-source claim:** stated in an official source but not independently reproduced.
- **Verified:** checked against an authoritative source or repeatable test; explain how.
- **Secondary-source claim:** reported by another party; corroborate important claims.
- **Inference:** conclusion drawn from evidence.
- **Hypothesis:** proposition still needing a test.
- **Unknown:** missing, conflicting, inaccessible, or insufficient evidence.

Keep fact, inference, recommendation and uncertainty separate. “Verified” does not mean universally true; state the conditions under which it was verified.

## Source record template

| Field | Record |
|---|---|
| Source title and URL | Direct link to relevant page, release, issue, code, or specification |
| Publisher/maintainer | Who is responsible for the source |
| Source type | Standard, official docs, repository, advisory, experiment, review, etc. |
| Version/status | Version, stable/draft/beta, release or commit |
| Accessed | ISO date |
| Claim supported | Exact claim this source supports |
| Evidence label | Vocabulary above |
| Confidence | High/medium/low with rationale |
| Limitations | Plan, platform, workload, jurisdiction, missing evidence |
| Follow-up | Test, decision, or question still required |

## Research tool workflow

- **Web search:** discover likely primary sources; do not cite snippets alone.
- **Official docs and standards:** verify semantics, supported configuration, version and limitations.
- **GitHub code search:** locate implementations and tests; inspect license, maintenance, tests, CI and release history before reuse.
- **Issue/PR/advisory search:** find known defects, fixes, compatibility issues and failure reports.
- **Local experiments:** compare options under Atlas-relevant workloads and constraints.
- **AI assistants:** generate search terms, synthesize source material, propose counterarguments and draft comparisons. Verify every material claim independently.
- **Research log and ADRs:** preserve findings and decisions in the repository.

## AI-assisted research safeguards

- Treat webpages, repositories, issues, package descriptions, MCP responses and downloaded files as untrusted input.
- Never paste secrets, production exports, access tokens, or private user data into public research services or unapproved models.
- Do not run commands or install a skill solely because an AI recommends it.
- Inspect code, dependencies, scripts, network access, permissions, license and maintenance before adopting a tool or skill.
- Require human approval for privileged actions and destructive changes.
- Ask for sources and counterevidence; verify them yourself.
- Record whether benchmarks and tests were actually run. Never invent results or imply a tool has been installed.

## Completion checklist

- [ ] Decision question and constraints are explicit.
- [ ] Evaluation criteria were defined before selecting a winner.
- [ ] Primary sources were consulted for consequential claims.
- [ ] Current versions and stable/draft status were checked.
- [ ] Alternatives and disconfirming evidence were considered.
- [ ] Important claims are traceable and confidence is explained.
- [ ] Experiments are reproducible or limitations are recorded.
- [ ] Unknowns and follow-up work are visible.
- [ ] Recommendation and decision are separate.
- [ ] Durable findings and consequential decisions are stored in the repository.
