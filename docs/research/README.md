# Atlas Research Hub

This directory is the canonical home for product research, competitive teardowns, technical investigations, and experiment results. Research should be understandable and useful without needing to reconstruct the chat that produced it.

## Research principles

1. **Start from user jobs, not a feature checklist.** Investigate what people are trying to do, where current tools help, and where they fail.
2. **Inspect products, not just landing pages.** Where access permits, examine real workflows, interaction states, import/export, search, AI features, settings, and failure cases.
3. **Separate evidence from interpretation.** Label observed behavior, vendor/maker claims, independently verified facts, hypotheses, and recommendations.
4. **Use primary sources first.** Prefer official documentation, source code, release notes, issue discussions, and direct product observations. Use secondary commentary to add context, not to replace primary evidence.
5. **Make claims traceable.** Every material factual claim should link to its source. Record access dates for information likely to change.
6. **Record negative results and unknowns.** Note blocked pages, inaccessible features, missing documentation, uncertain claims, and what would resolve the uncertainty.
7. **Research the decision, not everything about a product.** Investigate details that could change our product scope, user experience, architecture, cost, security, or implementation choice.
8. **Respect legal and ethical boundaries.** Use public product surfaces and authorized access. Do not bypass authentication, access controls, paywalls, or technical protections. Check licenses before reusing code, skills, assets, or datasets.
9. **Keep the record durable.** Important research findings, decisions, and follow-ups belong in this repository—not only in chat history.
10. **Update rather than duplicate.** Each topic has one canonical document; cross-link other docs instead of copying whole sections.

## Evidence labels

Use these labels in research notes:

- **Observed** — directly seen or reproduced during this investigation. Include environment, steps, and date.
- **Primary-source claim** — stated by the product maker or in official documentation, but not independently reproduced.
- **Verified** — confirmed against a primary source or repeatable test; describe the verification.
- **Secondary-source claim** — reported by a third party; link the source and seek corroboration for important claims.
- **Inference** — interpretation derived from evidence.
- **Hypothesis** — a proposition to test.
- **Unknown** — evidence is missing, conflicting, inaccessible, or insufficient.

Do not call a claim “verified” merely because several articles repeat the same original claim.

## Source record format

For each important source, record:

| Field | What to capture |
|---|---|
| Source | Title and direct URL |
| Source type | Product, official docs, repository, issue, interview, independent review, etc. |
| Accessed | Date checked |
| Claim supported | The specific statement the source supports |
| Evidence label | One of the labels above |
| Confidence | High / medium / low, with a short rationale |
| Caveat | Version, plan, platform, access, or other limitation |

Citations should be near the claim they support. Prefer links to specific docs, files, releases, issues, or lines over generic homepages when possible.

## Research document conventions

- Use descriptive filenames, e.g. `jeff-product-teardown.md`, `karakeep-product-teardown.md`, `rea-evaluation.md`.
- Put a short scope, date, method, and limitations section at the top of every investigation.
- Record reproduction steps for meaningful observations.
- End each investigation with findings, implications for Atlas, unresolved questions, and recommended next action.
- Record important product/architecture decisions in `docs/decisions/` only after the evidence and trade-offs are reviewed.
- Research is not complete because a document exists; mark work as planned, in progress, blocked, or reviewed.

## Research status

See [research-plan.md](research-plan.md) for the sequence and [product-teardown-template.md](product-teardown-template.md) for the reusable format.
