# Atlas light-first design lock

**Decision date:** 2026-10-11  
**Decision owner:** Product owner  
**Status:** Approved design direction; implementation remains subject to product requirements and engineering review.

## Decision

Lock [Atlas Light UI Review](../mockups/atlas-light-ui-final-review.html) as the approved visual reference for the next implementation phase.

The approved direction is **light-first, content-led, calm and colorful without a heavy saturated canvas**:
- Pale paper-like background and white surfaces.
- Soft blue, lavender, mint, peach and yellow as restrained content/category surfaces.
- Cobalt as the primary interaction accent for navigation, focus and important actions.
- Dark, readable text; muted secondary text; subtle borders; generous spacing and rounded surfaces.
- Visual library and curated shelves for discovery; spatial boards and a knowledge graph for thinking; source-first research with explicit evidence provenance.
- Responsive layouts, visible keyboard focus and reduced-motion support as baseline requirements.

The selected reference is the HTML prototype linked above. Its colors and component patterns should be treated as the default visual language, not an instruction to copy prototype shortcuts or mock data into production.

## Why this direction

The user explicitly asked for light colors and approved this mock design. The visual language keeps reading surfaces quiet, lets colorful resources remain visible, uses pastel areas to distinguish modes, and reserves cobalt for actionable hierarchy. This is a product-owner decision based on the reviewed mock, **not** a claim of validated user-study superiority or completed accessibility certification.

## Implementation guardrails

- Preserve one canonical resource identity across Library, Collections, Boards, Graph and Research.
- Keep AI-suggested relationships and claims visibly distinguishable from user-confirmed facts; preserve source provenance.
- Keep privacy-by-default and portability visible in product requirements.
- Do not treat mock interactions as implemented features: real authentication, authorization, persistence, imports, semantic search, research retrieval, citations and export require production implementations and verification.
- Reuse the selected tokens/components instead of introducing a new palette or visual style without an explicit design decision.
- Maintain responsive behavior, keyboard access, focus visibility, semantic controls and reduced-motion support; verify these in the actual application.
- This approval locks the mock direction. It does not approve merging PR #12, waive code review, claim test completion, or freeze implementation details that must change for usability/accessibility.

## Review status

- [x] Owner approved the light-first mock direction.
- [x] Reference mock recorded in the repository.
- [ ] Run browser-based visual and interaction review in supported environments.
- [ ] Verify accessibility, contrast and responsive behavior in the implementation.
- [ ] Complete production architecture, security and data-model reviews.
- [ ] Define and validate first-release scope and journey acceptance criteria.
- [ ] Independent engineering review and required automated tests.

## Source of truth

- [Approved light-first mock](../mockups/atlas-light-ui-final-review.html)
- [Design mockup index](../mockups/README.md)
- [Design evaluation and remaining gates](../research/atlas-design-evaluation-and-decision-gates.md)
