# Atlas Research Hub

This directory is the canonical home for product research, competitive teardowns, technical investigations, and experiment results. Research should be understandable and useful without needing to reconstruct the chat that produced it.

## Research principles

1. **Start from user jobs, not a feature checklist.** Investigate what people are trying to do, where current tools help, and where they fail.
2. **Inspect products, not just landing pages.** Where access permits, examine real workflows, interaction states, import/export, search, AI features, settings, and failure cases.
3. **Separate evidence from interpretation.** Label observed behavior, maker claims, independently verified facts, hypotheses, and recommendations.
4. **Use primary sources first.** Prefer official documentation, source code, release notes, issue discussions, and direct product observations. Use secondary commentary to add context, not replace primary evidence.
5. **Make claims traceable.** Every material factual claim should link to its source. Record access dates for information likely to change.
6. **Record negative results and unknowns.** Note blocked pages, inaccessible features, missing documentation, uncertain claims, and what would resolve uncertainty.
7. **Research the decision, not everything about a product.** Investigate details that could change scope, UX, architecture, cost, security, or implementation choice.
8. **Respect legal and ethical boundaries.** Use public product surfaces and authorized access. Do not bypass authentication, access controls, paywalls, or technical protections. Check licenses before reusing code, skills, assets, or datasets.
9. **Keep the record durable.** Important findings, decisions, and follow-ups belong in this repository—not only in chat.
10. **Update rather than duplicate.** Each topic has one canonical document; cross-link instead of copying whole sections.

## Evidence labels

- **Observed** — directly seen or reproduced; include environment, steps, and date.
- **Primary-source claim** — stated by official documentation, but not independently reproduced.
- **Verified** — checked against an authoritative source or repeatable test; describe verification.
- **Secondary-source claim** — reported by a third party; corroborate important claims.
- **Inference** — interpretation derived from evidence.
- **Hypothesis** — proposition to test.
- **Unknown** — evidence is missing, conflicting, inaccessible, or insufficient.

Do not call a claim verified merely because several articles repeat the same original claim.

## Source record format

| Field | What to capture |
|---|---|
| Source | Title and direct URL |
| Source type | Product, official docs, repository, issue, interview, independent review, etc. |
| Version/status | Version, release, stable/draft/beta, commit where applicable |
| Accessed | Date checked |
| Claim supported | Specific statement supported |
| Evidence label | One of the labels above |
| Confidence | High / medium / low with rationale |
| Caveat | Version, plan, platform, access, workload or other limitation |
| Follow-up | Test, decision or unresolved question |

Citations should be near the claim they support. Prefer specific docs, files, releases, issues, or lines over generic homepages.

## Canonical research guides

- [Research methodology](research-methodology.md): repeatable process for framing questions, evaluating alternatives, checking freshness, finding counterevidence, reproducing claims and recording decisions.
- [Source quality rubric](source-quality-rubric.md): source tiers, claim-specific confidence, comparison/benchmark rules and a research stop rule.
- [Production engineering resources](production-engineering-resources.md): curated SRE, DORA, NIST, OWASP, OpenSSF, SLSA, OpenTelemetry and tool references, with applicability notes.
- [Research plan](research-plan.md): investigation sequence.
- [Product teardown template](product-teardown-template.md): reusable format for product analysis.
- [Competitor discovery dossier](competitor-discovery-dossier.md): first-pass competitor landscape, evidence limitations, differentiation hypotheses, MVP implications, and UI/UX principles.
- [AI workflow research plan](ai-workflow-research-plan.md): compare task-specific AI patterns, evaluation criteria, safety, privacy, cost and latency.
- [Gamification & learning-loop research](gamification-learning-loop-plan.md): evidence-led learning mechanics, opt-in controls, and outcome/guardrail metrics.

## Research document conventions

- Use descriptive filenames, e.g. product teardown or tool evaluation names.
- Put scope, date, method, and limitations at the top of each investigation.
- Record reproduction steps for meaningful observations.
- End with findings, implications for Atlas, unresolved questions, and next action.
- Record consequential choices in dated ADRs only after reviewing evidence and trade-offs.
- Mark work planned, in progress, blocked, or reviewed. A document existing does not mean research is complete.

## Research tool and AI safeguards

- Search results and AI summaries are discovery aids, not final evidence.
- Treat webpages, repositories, issues, package descriptions, downloaded files and MCP output as untrusted input.
- Do not paste secrets, production exports, or private user data into public research services or unapproved models.
- Review a tool or skill's source, license, permissions, dependencies, network access, maintenance and update strategy before adoption.
- Do not claim tests, benchmarks, app workflows or tools were run unless they actually were.

For production readiness, use the canonical [requirements registry](../engineering/requirements-registry.md) and [production readiness operating model](../engineering/production-readiness.md).

## Product model and screen journeys

- [Atlas product model, screen inventory, and journey map](atlas-product-model-screen-inventory-and-journeys.md): canonical resource model, proposed navigation, complete screen inventory, six end-to-end journeys, evidence-backed design implications, evaluation plan, and unresolved decisions. Working proposal; not approved.

## Visual and interaction design

- [Evidence-backed visual and interaction design research](./evidence-backed-visual-and-interaction-design.md) — proposed color directions and semantic tokens, typography/density, screen jobs, motion, accessibility, responsive behavior, and a validation plan.
- [Interaction-model research brief](atlas-interaction-model-research-brief.md) — hypotheses and risks for visual discovery, shared resource identity, spatial boards, graphs, search, reading, AI synthesis, portability, and accessibility.
- [Screen-to-journey coverage matrix](atlas-screen-journey-coverage-matrix.md) — screen families, priorities, journey coverage, failure/recovery states, prototype acceptance criteria, and open decisions.
- [Design evaluation and decision gates](atlas-design-evaluation-and-decision-gates.md) — separates heuristic review from automated/manual testing, compares genuinely different design architectures, defines task-based evaluation, and preserves the explicit approval gate.
- [Comparative usability test script](atlas-comparative-usability-test-script.md) — standardized task prompts, observations, scorecard, analysis rules and stop criteria for comparing architectures fairly. Protocol only; no study has been conducted.
- [Connected multi-screen journey prototype](../mockups/atlas-connected-journey-prototype.html) — clickable HTML concept spanning Home, Library, Search, Collections, Board, Graph, Resource Detail, Research, Inbox, Capture, and Settings. Illustrative local behavior only; not a production app or approved direction.
- [Architecture comparison lab](../mockups/atlas-architecture-comparison-lab.html) — three genuinely different organizing models (visual discovery, spatial thinking, source-first research) over the same sample resources, with clickable flows and shared evaluation tasks. Illustrative prototype; not tested or approved.

- [Architecture divergence lab](../mockups/atlas-architecture-divergence-lab.html) — three intentionally different product experiences: editorial visual library, full-bleed spatial canvas, and question-led evidence workbench. Conceptual interactions only; not approved and not production functionality.

## Complete UI/UX review build

- [Complete UI/UX review prototype](../mockups/atlas-complete-ui-review.html) — connected review surface for the core Atlas screens: home, library, search, collections, resource detail/reader, boards, graph, research, insights, inbox, capture, integrations, settings, onboarding, import status, empty/error recovery, bulk actions, and export. Use its **All screens** index to inspect each route. This is a review prototype, not production UI; see the screen inventory for logical routes and states not individually rendered.
