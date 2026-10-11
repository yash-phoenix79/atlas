# Atlas diagrams

**Status: review artifacts. Not approved production architecture.**

These self-contained HTML/SVG diagrams follow selected editorial and semantic conventions from [Diagram Design](../../vendor/diagram-design/UPSTREAM.md), pinned to commit `7a2e22170ee838e859d8142ba825d83f8b6375e6`.

## Review in this order
1. [Domain model](atlas-domain-model.html) — canonical Resource and linked contexts.
2. [Capture flow](atlas-capture-flow.html) — capture, processing, completion, and recoverable failure.
3. [Proposed system boundaries](atlas-system-boundaries.html) — responsibilities and trust boundaries; explicitly a hypothesis.
4. [Research synthesis sequence](atlas-research-sequence.html) — where source provenance and claim checks must sit.

Each diagram supports light/dark mode. Use the theme toggle in the top-right corner. Diagram colors are provisional neutral editorial tokens; the green used in earlier product mockups is not treated as an approved brand accent.

## Correctness contract
- One concrete question per diagram.
- Correct arrows, labels, and cardinality; no inferred production implementation.
- Conceptual model is not physical SQL schema.
- Proposed components are marked **PROPOSED**; unknown implementation choices remain open.
- Provenance distinguishes source-backed statements from generated drafts and user-confirmed claims.
- HTML diagram is a review aid, not a replacement for ADRs, migrations, API contracts, security review, or tested behavior.
