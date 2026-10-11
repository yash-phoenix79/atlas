# Open-Source Project Baseline and Design Tooling

- **Date:** 2026-10-11
- **Status:** Accepted as a process baseline; specific technology and license choices remain open

## Context

Atlas is intended to grow from a personal-first product into a maintainable open-source project that may eventually be used by friends. The repository needs contributor-facing standards, verifiable engineering practices, a clear documentation map, and a deliberate design workflow. A broad design-engineering directory was supplied as a source of candidates, but adopting every tool would create unnecessary cost and complexity.

## Decisions

1. Treat Atlas as a proper open-source project, with a clear README, license, contribution guide, code of conduct, security reporting instructions, support guidance, change history, GitHub templates, and CI as the codebase matures.
2. Use docs/project-governance.md as the canonical project process baseline and docs/README.md as the documentation index.
3. Preserve existing product, research, UI/UX, privacy, and decision documents; expand them only when a document resolves a real question or enables verification.
4. Curate the supplied Design Engineer Tools directory in docs/research/design-engineer-toolkit.md. Entries are candidates, not endorsements or verified evaluations.
5. Use a question-driven workflow: reference research → annotated design brief → multiple distinct mockup directions → design tokens and core flows → explicit user approval → production UI implementation.
6. Use a small, coherent component foundation and one active coding agent per branch. Compare tools using the same representative task, with isolated branches or worktrees.
7. Validate the implementation with browser checks, accessibility review, responsive states, realistic content, and tests. Attractive screenshots or generated code are not proof of quality.
8. Maintain privacy by default and require the documented security release gate before friends use a hosted multi-user instance.
9. Do not select a software license, app framework, database, hosting provider, or design platform solely by this decision. Evaluate and record each choice when evidence and project needs justify it.

## Consequences

- Atlas has a defined target repository contract and a focused design-tool workflow.
- The initial tool shortlist is Figma (with Penpot as an alternative), one selected coding agent, shadcn/ui as a component candidate, and Playwright plus accessibility/manual checks for validation.
- This is not a claim that these tools have been installed, benchmarked, or selected as final dependencies.
- Production application coding remains blocked until the mockup direction, core flow, and MVP scope are explicitly approved.
- Add governance files incrementally; do not create empty placeholders merely to make the repository tree look complete.

## References

- [Design Engineer Tools](https://designengineer.tools/)
- [Atlas UI/UX Research Plan](../research/ui-ux-research-plan.md)
- [Atlas Design Engineer Toolkit](../research/design-engineer-toolkit.md)
- [Atlas Security, Privacy, and Trust Baseline](../security-privacy-trust.md)
