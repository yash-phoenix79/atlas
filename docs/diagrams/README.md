# Atlas diagrams

**Status: review artifacts. Not approved production architecture.**

The diagram authoring skill is pinned as a git submodule at `.agents/skills/diagram-design`. Its exact upstream commit and MIT license are recorded in [the dependency lock note](../../vendor/diagram-design/UPSTREAM.md). Selected upstream references are vendored at that exact revision for quick, reproducible access.

## Review in this order
1. [Core library domain model](atlas-domain-model.html) — canonical Resource, explicit collection membership, annotations, boards, placements, and import jobs.
2. [Research evidence model](atlas-research-evidence-model.html) — research artifacts, source locators, claims, claim/source joins, and separate verification state.
3. [Capture flow](atlas-capture-flow.html) — capture, processing, success, retry, and defer states.
4. [Proposed system boundaries](atlas-system-boundaries.html) — responsibility and trust boundaries; a hypothesis, not deployed infrastructure.
5. [Research synthesis sequence](atlas-research-sequence.html) — sources and verification stay on the path to a user-reviewed draft.

Each diagram supports light/dark mode. Use the theme toggle in the top-right corner. Visual tokens are provisional neutral graphite/ivory with restrained terracotta accent and steel-blue interaction links. Green used in earlier mockups was not an approved brand decision.

## Correctness contract
- One concrete question per diagram.
- Edges have correct direction and labels; relationships that are many-to-many use explicit join entities.
- Conceptual domain models are not physical SQL schemas.
- Proposed components are marked as proposals; unknown implementation details remain open.
- Source evidence, generated drafts, successful locator checks, and human confirmation are different states.
- SVG is semantic and labeled, not color-only. Diagrams include mobile overflow behavior and a light/dark theme switch.
- These review artifacts do not replace ADRs, migrations, API contracts, security review, or tested behavior.
