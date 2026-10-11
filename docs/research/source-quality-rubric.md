# Atlas Research Source Quality Rubric

- **Status:** Accepted working method
- **Last reviewed:** 2026-10-11
- **Related:** [Research methodology](research-methodology.md)

## Purpose

Judge evidence for a specific claim, not award a permanent score to a website. An official source can be authoritative about its own API while biased about a competitor or unable to establish independent performance.

## Source tiers

### Tier A — Primary, authoritative evidence
Examples: official standards, vendor/framework documentation, versioned API docs, release notes, security advisories, source code, tests, direct product observation, reproducible experiments.

Best for: supported capabilities, required configuration, API semantics, current release status, exact implementation behavior.

Limitations: vendor docs may omit trade-offs; source code does not prove deployed configuration; direct observation may be environment-specific.

### Tier B — Independent technical evidence
Examples: carefully documented independent benchmarks, reputable technical analyses, incident postmortems, independent audits with scope and methodology.

Best for: comparative performance, operational experience, external validation, failure analysis.

Limitations: check workload, versions, sample size, funding/conflicts, reproducibility and date.

### Tier C — Maintainer and community discussion
Examples: GitHub issues/PRs/discussions, project forums, Stack Overflow, Reddit, conference talks, engineering blogs.

Best for: discovering edge cases, recurring pain points, migration experiences, known gaps and practical workarounds.

Limitations: anecdotes may be outdated or unrepresentative; comments may describe unreleased code or one configuration. Corroborate important claims.

### Tier D — Discovery-only material
Examples: search snippets, AI summaries without sources, marketing pages with no technical detail, scraped catalogs, anonymous claims without reproducible evidence.

Best for: discovering terminology and leads to investigate.

Not sufficient by itself for security claims, architecture decisions, compliance claims, performance comparisons, or assertions about current behavior.

## Claim-specific confidence

- **High:** directly supported by a current primary source or repeatable test, with conditions understood; critical claims have corroboration where appropriate.
- **Medium:** credible evidence exists but applicability, independent corroboration, or reproduction is incomplete.
- **Low:** mostly anecdotal, stale, ambiguous, promotional, or indirect evidence.

Confidence is about the specific claim, not the source's overall reputation.

## Evaluation dimensions

For consequential claims, assess:
1. Authority: is the publisher responsible for the system or standard?
2. Specificity: does the source support this exact claim?
3. Freshness: could version changes make it stale?
4. Applicability: does it match Atlas's runtime, deployment, workload, plan and threat model?
5. Methodology: can the claim be reproduced or its reasoning inspected?
6. Independence: is corroboration genuinely independent?
7. Conflict of interest: is the source selling the recommended option?
8. Completeness: are limitations, failure modes and counterevidence considered?
9. Traceability: can a reviewer find the exact section, commit, issue or test?
10. License and permission: can material/code/data/skill legally be reused as intended?

## Comparisons and benchmarks

- Define workload, dataset, versions, hardware, concurrency, cache state and measurement method.
- Prefer reproducible results over charts without methodology.
- Do not compare materially different conditions as if equivalent.
- Distinguish measured results from vendor claims and estimates.
- Record sample size, variance and limitations where available.
- Re-run tests on Atlas-relevant workloads before a high-cost or hard-to-reverse decision.

## Research stop rule

Research is sufficient when the decision criteria are answered well enough to make a reversible or explicitly risk-accepted choice; major alternatives and failure modes have been examined; material claims have adequate evidence; and remaining unknowns and validation steps are documented.

Do not research low-impact details merely to maximize link count. For high-impact or irreversible decisions, invest in stronger evidence, independent review and prototypes.

## Source review checklist

- [ ] Direct source opened; search snippet not used as final evidence.
- [ ] Version/date/status checked.
- [ ] Claim matches source wording and scope.
- [ ] Conditions and limitations recorded.
- [ ] Primary evidence used for consequential claims.
- [ ] Counterevidence or failure reports searched.
- [ ] Independent corroboration considered.
- [ ] License and reuse conditions checked where relevant.
- [ ] Evidence label and confidence rationale recorded.
