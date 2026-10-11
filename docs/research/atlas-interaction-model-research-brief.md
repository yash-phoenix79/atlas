# Atlas interaction-model research brief

**Status:** evidence-informed design hypotheses, not final decisions.  
**Updated:** 2026-10-11

## First-principles framing

The product is not primarily a dashboard. It is a system for reducing the distance between *encountering something useful* and *being able to find, understand, connect, verify, and reuse it later*. The interaction model should be chosen per job while preserving one canonical resource identity.

## Patterns worth borrowing, with constraints

### 1. Visual discovery and masonry library
**Reference:** Pinterest visual search and visual discovery documentation: https://help.pinterest.com/en/article/use-visual-search-features and https://labs.pinterest.com/research-and-innovation/visual-understanding

**Useful principle:** imagery and visual similarity can be meaningful retrieval cues; content-first layouts can make browsing exploratory.

**Atlas hypothesis:** provide a masonry view for image-rich resources, but do not force all resources into image cards. Offer a compact list/table for metadata-heavy work, stable filters, and visible content-type/source cues. Image-only recognition must not be the only retrieval path.

**Risks to test:** uneven card heights can disrupt scanning; decorative thumbnails can overwhelm titles; keyboard and screen-reader order must match logical reading order; users may confuse a visual match with semantic correctness.

### 2. Spatial canvas and shared card identity
**Reference:** Heptabase fundamental elements and interface logic: https://wiki.heptabase.com/fundamental-elements and https://wiki.heptabase.com/user-interface-logic

**Useful principle:** a card can live in a shared library and be placed on multiple whiteboards. This supports one canonical item with multiple contexts.

**Atlas hypothesis:** boards contain references to canonical resources plus board-specific position, grouping and relationship metadata. Editing source metadata should not silently create divergent copies. User-created relationships must be distinguished from suggested relationships.

**Risks to test:** spatial canvases can be hard to navigate at scale, on touchscreens, and with keyboard-only input. Include search-to-add, outline/list mode, fit-to-content, undo, and non-drag movement controls. Do not make drag-and-drop the sole action path.

### 3. Knowledge graph
**Reference:** Obsidian graph, backlinks and canvas: https://obsidian.md/help/plugins/graph, https://obsidian.md/help/plugins/backlinks, https://obsidian.md/help/Plugins/Canvas

**Useful principle:** graph navigation reveals neighborhoods and relationships; backlinks offer a simpler, often more legible path to context than a full graph.

**Atlas hypothesis:** local graph and backlinks first; global graph is an optional exploratory view with filters and progressive disclosure. Every edge should have a type and provenance: user-authored, imported/observed, AI-suggested, or user-confirmed.

**Risks to test:** hairball graphs, unexplained edges, visual clutter, and false authority from inferred relationships. A graph must never be the only way to navigate connections.

### 4. Search as a first-class workflow
**Principle:** search should support vague recall, not require users to remember exact titles or folder paths.

**Atlas hypothesis:** combine title/content/source metadata, filters, and (when technically available) semantic retrieval. Show why a result matched in plain language; make the search query and active filters visible; support keyboard navigation, query refinement and no-result recovery. Search should work even when semantic indexing is unavailable, with honest degraded behavior.

**Risks to test:** false semantic matches, invisible ranking logic, stale index state, over-reliance on embeddings, and filters that are difficult to discover. Do not label a static prototype as real semantic search.

### 5. Reading and annotation
**Principle:** source content should remain primary; capture and annotation should not obscure the source or lose provenance.

**Atlas hypothesis:** a resource detail shell with source identity, content preview, annotations, collections, backlinks and actions. Use content-specific readers only where the format can be handled honestly. For external resources, make the canonical URL and source metadata easy to inspect.

**Risks to test:** overloaded sidebars, losing reading position, confusing extracted content with original content, and annotation controls that compete with the content.

### 6. AI research and visual synthesis
**Principle:** synthesis is valuable only when a user can inspect evidence and uncertainty.

**Atlas hypothesis:** source selection → outline → draft synthesis → claim/source inspection → revision/export. Claims link to supporting source passages where available. Conflicting evidence, weak support, missing sources and generated text must be distinguishable. The prototype uses labeled illustrative data only.

**Risks to test:** fabricated citations, citations that do not support a claim, hidden uncertainty, source-selection bias, privacy surprises, and generation states that appear stuck. Never imply that AI output is verified merely because citations are shown.

### 7. Portability, privacy and failure recovery
**Principle:** trust is an observable product behavior, not just a promise in onboarding.

**Atlas hypothesis:** explicit export scope and format, clear progress, recoverable partial failure, source URLs and metadata included, and an understandable account deletion/data retention path. Permission scopes are shown before connector authorization. Keep AI processing controls and retention policies visible.

**Risks to test:** exports that omit annotations/relationships, destructive actions without confirmation, ambiguous data deletion, hidden provider sharing, and silent capture failures.

## Accessibility baseline

Use WCAG 2.2 as a baseline, not as a substitute for testing: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/

- All core actions must be keyboard-operable with visible focus.
- Avoid drag-only actions; provide menu/buttons and keyboard alternatives.
- Focus order must be logical in dialogs, side panels, search results and boards.
- Respect reduced-motion settings; movement should communicate state or spatial continuity.
- Test contrast for text, controls, focus indicators and state markers.
- Do not encode source type, relationship type, or status with color alone.
- Check zoom/reflow, target sizes and touch gestures on narrow screens.
- Test screen-reader naming and announcements for dynamic state changes.
- Automated contrast or DOM checks are only partial evidence; manual keyboard and assistive-technology checks remain necessary.

## Evaluation protocol

1. Use the same seed library of mixed resources in every design direction.
2. Give participants realistic tasks without teaching the intended navigation.
3. Tasks: save a resource, recover it from vague memory, connect three resources on a board, verify a claim against sources, and export a collection.
4. Record success/failure, wrong turns, recovery, time, keyboard-only completion, and confidence.
5. Include desktop and narrow-screen runs, plus keyboard-only checks; add assistive-technology testing before calling the design accessible.
6. Keep findings tagged as observed, inferred, or still unknown.
7. Iterate on high-severity issues before choosing a direction.

## References
- Pinterest visual search: https://help.pinterest.com/en/article/use-visual-search-features
- Pinterest Labs visual understanding: https://labs.pinterest.com/research-and-innovation/visual-understanding
- Heptabase fundamental elements: https://wiki.heptabase.com/fundamental-elements
- Heptabase interface logic: https://wiki.heptabase.com/user-interface-logic
- Obsidian graph: https://obsidian.md/help/plugins/graph
- Obsidian backlinks: https://obsidian.md/help/plugins/backlinks
- Obsidian canvas: https://obsidian.md/help/Plugins/Canvas
- W3C WCAG 2.2: https://www.w3.org/WAI/standards-guidelines/wcag-new-in-22/
