# UI/UX Deep Dive 09 — Competitive Teardowns and Pattern Reverse Engineering

- **Status:** Teardown protocol and candidate set; not a completed hands-on teardown.
- **Research date:** 2026-10-11
- **Purpose:** Learn from mature products without copying their visual skin or assuming that popular patterns are optimal for Atlas.
- **Related:** [Competitor discovery dossier](competitor-discovery-dossier.md), [UI/UX research plan](ui-ux-research-plan.md).

## 1. Reverse-engineer the problem solved, not just the screenshot

A screenshot shows a surface, not the system that produced it. Strong reverse engineering asks:
- Which user goal does this screen support?
- What information must be visible for that task?
- What state and navigation model lies behind it?
- What happens before and after the screenshot?
- What failure cases does the product handle?
- Which constraints (platform, business model, user segment, technical architecture) explain the pattern?
- Which elements are core to the product and which are visual styling?

Do not clone layout, branding, illustrations, or distinctive proprietary assets. Extract the underlying interaction pattern and create an original implementation that fits Atlas's goals and visual identity.

## 2. Separate evidence types

Use labels consistently:
- **Observed:** personally reproduced in a product, with platform/date and task notes.
- **First-party claim:** official documentation or product page states a capability.
- **Third-party report:** independent source describes behavior.
- **Inference:** interpretation of why a pattern exists.
- **Atlas hypothesis:** possible adaptation not yet tested.
- **Unknown:** not inspected or not verifiable.

Do not promote a marketing claim to “observed.” A product's missing documentation does not prove the capability is absent.

## 3. Candidate landscape and why each matters

This is a candidate research set, not a ranking.

| Product | Primary lens | Questions to investigate |
|---|---|---|
| Raindrop.io | Bookmark organization and retrieval | Search/filter behavior, collections/tags, grid/list modes, archive/export, broken links |
| Cosmos | Visual inspiration and discovery | Image-led capture, visual search, collections, exploration and browsing |
| Are.na | Flexible research collections | Heterogeneous blocks, channel organization, connections, content context |
| Eagle | Local visual asset library | High-volume visual browsing, metadata, folders/tags, offline behavior |
| Obsidian | Personal knowledge and linked notes | Link graph, local files, backlinks, navigation, extensibility trade-offs |
| Karakeep | Broad capture and rediscovery | Mixed content, import, text extraction, tagging, search, self-hosting |
| Linkwarden | Bookmark preservation and collaboration | Saved-page preservation, collections, sharing, access controls |
| Readeck | Read-it-later and reading | Reading experience, extraction quality, annotation, export |
| mymind | Low-friction personal saving | Automatic organization, metadata, visual presentation, explainability |
| Browser bookmarks / native share sheets | Capture baseline | Lowest-friction capture and platform conventions |

The prior [competitor discovery dossier](competitor-discovery-dossier.md) is an initial desk-research snapshot. It explicitly does not establish that these products were exhaustively tested.

## 4. Use identical task scripts

For each product, attempt as many of the following as the product supports:
1. Save a URL from the main app.
2. Save an image or file.
3. Locate a resource by a vague memory cue.
4. Filter by source/type/tag/collection.
5. Open a resource and return to the same results.
6. Add a note or annotation.
7. Handle an unsupported source or extraction failure.
8. Remove from a collection and compare with delete/archive.
9. Export data or understand portability.
10. Use keyboard navigation and inspect focus.
11. Use mobile capture/share if available.
12. Find privacy/data-handling and external AI disclosures.

Record unsupported tasks as “not applicable” only when the product truly lacks the concept; otherwise mark “not tested” or “blocked.”

## 5. What to record for each screen

- Task and starting state
- Product/version/platform/date
- Screen/route and viewport
- User-visible hierarchy
- Primary/secondary action
- Navigation and state preservation
- Labels, affordances, and feedback
- Content density and metadata
- Loading/empty/error/recovery behavior
- Keyboard/focus/touch behavior
- Responsive differences
- Performance or latency observed
- What worked and why it may work
- Friction and potential failure modes
- Evidence type and confidence
- Atlas adaptation hypothesis
- What should not be copied or transferred

Capture screenshots or notes only where permitted by the product's terms and applicable law. Avoid collecting private user content.

## 6. Compare jobs and trade-offs, not feature counts

A feature matrix can reveal coverage but rarely explains experience quality. Compare:
- Capture effort and reliability
- Retrieval success from imperfect memory
- Content preservation and provenance
- Ease of organizing after capture
- Clarity of status and failure recovery
- Portability and export
- Visual delight vs density
- Accessibility and device support
- Trust and data-control model
- Maintenance burden for advanced features

One product may intentionally optimize for visual exploration, another for precise retrieval. Atlas may need both, but not necessarily every feature from either product.

## 7. Pattern extraction template

For each pattern, record:
- **Pattern name:** e.g. source-aware result card.
- **User problem:** what task/friction it addresses.
- **Mechanism:** why the pattern might help.
- **Observed evidence:** specific interaction and context.
- **Trade-offs:** density, discoverability, implementation cost, accessibility.
- **Transferability:** high/medium/low, with rationale.
- **Atlas proposal:** adapt, test, defer, or reject.
- **Validation:** task and success measure.
- **IP/brand boundary:** avoid copying distinctive visual assets or branding.

Example: “Masonry grid” is not a product strategy. Its possible benefit is allowing varied visual previews to occupy space efficiently; its cost may be harder row comparison and less predictable scan order. Test it against a uniform grid and list using actual resource-retrieval tasks.

## 8. Reverse-engineer visual character responsibly

Analyze:
- Typography roles and contrast
- Palette roles and semantic states
- Density and whitespace
- Grid and alignment
- Image crop and preview quality
- Surface/border/elevation logic
- Motion purpose and restraint
- Empty/loading/error state quality
- Brand voice and copy

Then abstract principles instead of reproducing exact combinations. “Editorial hierarchy with quiet metadata” is an abstract direction; duplicating a competitor's distinctive card composition, icons, colors, and copy is not.

## 9. Atlas's comparison scorecard

Use qualitative ratings with evidence notes rather than pseudo-precise decimals. A 1–5 scale may be used only with anchors:
- **1 — Fails the task:** severe friction or impossible workflow.
- **2 — Weak:** task possible with notable workarounds.
- **3 — Adequate:** works with some friction.
- **4 — Strong:** clear, efficient, resilient.
- **5 — Excellent:** especially effective for this task and context.
- **N/O — Not observed.**

Score each dimension separately: capture, retrieval, content fidelity, organization, state clarity, error recovery, accessibility, visual character, portability, privacy transparency. Add evidence and confidence to every rating. Do not average scores into a universal winner unless dimensions and weights are justified by user priorities.

## 10. First teardown priorities

Start with the workflows most relevant to Atlas's differentiation:
1. Save-now-organize-later capture.
2. Retrieval from vague topic/source memory.
3. Mixed media cards and alternate density modes.
4. Detail/source provenance and personal notes.
5. Failed extraction and missing previews.
6. Collection membership vs archive/delete.
7. Export and portability.
8. AI summary/Q&A citation behavior, where available.
9. Keyboard, touch, and reduced motion.
10. Privacy and external processing transparency.

## 11. Evidence and limitations

Candidate official starting points:
- [Raindrop.io](https://raindrop.io/)
- [Cosmos](https://www.cosmos.so/)
- [Are.na](https://www.are.na/)
- [Eagle](https://eagle.cool/)
- [Obsidian](https://obsidian.md/)
- [Karakeep documentation](https://docs.karakeep.app/)
- [Linkwarden](https://linkwarden.app/)
- [Readeck](https://readeck.org/)
- [mymind](https://mymind.com/)

Official pages are starting points, not independent verification of all capabilities. This chapter does not claim current hands-on test results. Access, plan, platform, and release differences must be recorded during the actual teardown.

## 12. Deliverables required before visual-direction approval

- At least five documented hands-on product teardowns, prioritized by relevance.
- Identical task scripts and evidence labels.
- Screenshot/reference board with source, date, viewport, and notes.
- Pattern library of transferable mechanisms and rejected patterns.
- A comparison matrix showing strengths, weaknesses, and unknowns.
- Explicit Atlas design hypotheses and validation plans.
- No direct copying of proprietary visual assets or distinctive branding.

## Open questions
- Which products can be tested without account/paywall barriers?
- Which capture flows require mobile devices or browser extensions?
- Which products provide export formats that can be inspected?
- How should evidence be captured and stored while respecting terms/privacy?
- Which patterns solve Atlas's unique goal of connecting saved resources to skills, ideas, decisions, and projects?
