# Atlas Screen Inventory and Visual Design Brief

- **Status:** Owner-confirmed product/design brief; screen inventory and experience principles are recorded. Specific typeface, palette values, and final visual direction remain candidates to validate in mockups.
- **Date:** 2026-10-11
- **Scope:** Product screen map, design principles, visual-system starting point, motion/accessibility rules, and design approval gate.
- **Related:** [Product feature blueprint](../product-feature-blueprint.md) · [Design synthesis](design-synthesis-spatial-library-connected-knowledge.md) · [UI/UX research plan](ui-ux-research-plan.md) · [Motion and immersive UI](ui-ux-deep-dive-06-motion-immersive-ui.md)

## 1. Product experience in one sentence

Atlas is a visually rich, personal-first resource library that combines Pinterest-like visual discovery, Netflix-like content shelves, bookshelf-style collections, flexible spatial whiteboards, a clustered knowledge graph, focused reading, and source-grounded AI research—without sacrificing retrieval, portability, privacy, accessibility, or clarity.

This brief records the owner's stated direction. It does **not** select a final mockup direction or authorize production UI implementation.

## 2. Confirmed experience requirements

- Pinterest-inspired visual library and visual resource cards.
- Netflix-inspired horizontal shelves/tabs and personalized sections, alongside a bookshelf/collection metaphor.
- Flexible whiteboards: both freeform spatial canvases and more structured, organized layouts.
- Clustered network knowledge graph for exploring connections across resources and concepts.
- Resource detail that supports both focused reading and a research workspace.
- AI research and visual synthesis that show citations and sources, compare sources, and surface agreement/disagreement.
- A dedicated Insights section.
- Optional gamification and learning journeys, rewarding meaningful learning rather than raw saves or compulsive engagement.
- Semantic search that ranks the whole library by meaning and intent, not only literal keyword matches. Example queries:
  - “slow-burn horror in a small town”
  - “a sci-fi classic about machines that think”
  - “five-star books that made me cry”
  - “how startups find their first users”
  - “articles about writing with AI”
  - “newsletters on AI agents”
  - “Pick my next read” and “Surprise me”
- Light and dark modes.
- Purposeful motion and an experiment with Framer Motion and subtle 3D card hover effects.
- High visual craft and a distinctive identity; avoid generic dashboard styling, clutter, and spectacle-only 3D.
- A resource is canonical and can appear in multiple collections, shelves, boards, and graph views without being duplicated.
- Source provenance and evidence must remain inspectable; AI-suggested relationships must be visibly distinguished from user-confirmed relationships.
- Capture, extraction, and AI states must be honest. Never imply that a source was extracted or understood when it was not.

## 3. Screen inventory

### Core product surfaces

1. **Home / Visual Library**
   - Pinterest-like masonry/grid of resource cards with strong covers, thumbnails, and media-type cues.
   - Netflix-like horizontal shelves such as Continue Learning, Recently Added, Picked for You, Explore Topics, and Return to This.
   - A bookshelf/collection presentation as an alternative view, not the only navigation model.
   - Grid/list density controls, filters, sorting, and obvious Add Resource action.
   - Avoid excessive shelves; sections should be configurable and useful.

2. **Semantic Search**
   - Natural-language query entry with example prompts, recent searches, and useful empty states.
   - Rank across the user's full library by semantic relevance, not merely exact word matches.
   - Explain useful matches through source type, topic, notes, or relevant passage where available.
   - Filters for media type, collection, date, author/source, read status, and processing status.
   - “Pick my next read” / “Surprise me” as optional discovery actions.
   - Distinguish semantic ranking from exact-match filters; show a helpful no-results state.

3. **Resource Detail / Reading and Research Workspace**
   - Focused reading mode with readable typography and low distraction.
   - Research workspace mode with notes, highlights, metadata, AI insights, citations, related resources, and concepts.
   - Keep the original URL/file, provenance, user-authored notes, extracted content, and AI-generated content distinguishable.
   - Show extraction/citation limitations instead of fabricating details.

4. **AI Research and Visual Synthesis**
   - Source-grounded answers with inline citations and a visible source list.
   - Compare sources; show agreement, disagreement, uncertainty, and gaps.
   - Generate structured outlines, concept maps, and visual summaries where supported.
   - Let users inspect the supporting source passage and navigate back to it.
   - Clear controls for source selection, regenerate, edit, copy/export, and report an issue.
   - AI is optional: the core library remains useful when AI is unavailable.

5. **Whiteboard / Spatial Canvas**
   - Freeform placement of resources, notes, concepts, and relationship annotations.
   - Move, resize, group, connect, zoom, pan, and rearrange items.
   - Also provide structured/organized layouts for users who do not want a completely open canvas.
   - Reuse canonical resources across boards; board placements are not duplicate resources.
   - Include keyboard-accessible operations and a non-canvas alternative for core content.

6. **Knowledge Graph**
   - Clustered graph of resources and concepts, with controls for focus, filtering, zoom, and neighborhood exploration.
   - Alternative list/table or focused-neighborhood view for dense graphs and accessibility.
   - Inspect each relationship: who/what created it, whether it is confirmed or suggested, and what evidence supports it.
   - Never render an AI inference as confirmed fact. Avoid fabricated confidence percentages.

7. **Collections and Bookshelf**
   - Visual shelves and curated collections, including user-created collections.
   - Collections can contain the same canonical resource without copying it.
   - Support tags, pinned collections, nested/linked organization only when it improves retrieval.
   - Collections, boards, and graph clusters are different views/structures—not competing sources of truth.

8. **Insights**
   - Useful summaries of recurring interests, learning progress, reading patterns, revisited material, and potential knowledge gaps.
   - Every insight should be explainable and dismissible; avoid pretending correlation is causation.
   - Prefer actionable insights over vanity analytics.

9. **Gamification and Learning Journey**
   - Optional milestones, challenges, review/recall practice, and badges for meaningful learning or application.
   - No streak pressure, shame, or engagement-maximizing mechanics by default.
   - Let users disable gamification without losing core features or data.

10. **Capture, Imports, and Integrations**
    - Paste URL and upload as the first capture paths.
    - Later: Android share sheet, browser extension/bookmarklet, bulk bookmark import, and source-specific adapters.
    - Plan adapters for articles, PDFs/documents, YouTube/video, GitHub, X/social, books, podcasts, images, courses, and other artifacts subject to lawful access and technical feasibility.
    - Make saved-link, metadata-extracted, content-extracted, partial, unsupported, queued, failed, and retrying states visible as applicable.
    - Obsidian/Markdown import/export with round-trip fidelity tests; no silent destructive vault writes or ambiguous sync conflicts.

### Cross-cutting and supporting surfaces

11. **Mobile Experience**
    - Fast capture/share, semantic search, reading, notes, and AI answers.
    - Touch-friendly boards/graph exploration; preserve useful alternatives when spatial interfaces are constrained.
    - Responsive card layouts and no hover-only critical information.

12. **Account, Preferences, Privacy, and Data**
    - Sign-in and invite-only onboarding when the shared deployment is ready.
    - Light/dark theme, motion preferences, accessibility preferences, and optional gamification controls.
    - Data export, backup/recovery status, deletion controls, privacy/provider settings, and integration permissions.
    - Server-enforced per-user isolation; no cross-user access by default.

13. **System and recovery states**
    - First-run/empty library, empty collection, no search results, loading/skeleton, offline/network failure, unsupported source, extraction partial/failure, retry, duplicate, expired authorization, AI unavailable, export/import progress, and recoverable error states.
    - Provide useful next actions and preserve user input when an operation fails.

## 4. Information architecture and reusable entities

- **Resource:** canonical original URL/file, provenance, metadata, extraction artifacts, user notes, and processing status.
- **Collection/Shelf:** curated grouping and presentation of canonical resources.
- **Concept:** user-authored or clearly labelled AI-suggested idea.
- **Relationship:** typed link with origin, review status, and supporting evidence when available.
- **Board:** workspace containing placements of canonical resources, concepts, and annotations.
- **Board placement:** view-specific position/size/layout; not a copy of the underlying resource.
- **Evidence span:** citation to a page, passage, timestamp, or source-level location depending on what the adapter actually supports.

User notes, source content, and AI outputs must be kept distinguishable. AI-suggested relationships should have explicit states such as suggested, accepted, rejected, or deferred.

## 5. Visual system: starting tokens to test

These are **candidate values**, not a final brand decision. Validate contrast, semantic use, real resource covers, both themes, and the three mockup directions before locking implementation tokens.

### Typography candidates

- **UI/body starting candidate:** Inter — neutral, legible, and suitable for dense library/search interfaces.
- **Heading alternative to compare:** Plus Jakarta Sans — warmer and more expressive for a crafted editorial feel.
- **Long-form reading:** test a readable serif option against a sans-serif reading face; prioritize sustained reading comfort, clear hierarchy, and good multilingual coverage.
- Keep a restrained type scale, comfortable line lengths, clear metadata hierarchy, and tabular numerals where metrics matter.
- Do not lock a font based on taste alone; compare at real sizes on resource cards, search results, reading pages, and mobile screens.

### Color candidates

| Token / use | Candidate | Intended role |
|---|---|---|
| Primary action | `#4F46E5` indigo | Main actions and selected controls |
| AI / expressive accent | `#8B5CF6` violet | AI affordances and selected highlights; never the only signal |
| Links / focus accent | `#38BDF8` sky | Links and focus treatment, after contrast testing |
| Success | `#34D399` emerald | Successful states, with text/icon label |
| Warning | `#FBBF24` amber | Warnings, with text/icon label |
| Error | `#F87171` coral-red | Error states, with text/icon label |
| Light canvas | `#FAFAF9` | Warm neutral background candidate |
| Light border/surface | `#E7E5E4` | Subtle dividers and surface separation |
| Dark surface | `#1E293B` | Elevated dark surfaces |
| Dark canvas | `#0B1120` | Deep dark background candidate |

Rules:
- Build separate, art-directed light and dark themes; do not merely invert colors.
- Use semantic design tokens for background, surface, border, text, muted text, primary, focus, success, warning, and danger.
- Resource artwork/cover colors may provide variety; controls and typography must remain legible above them.
- Verify WCAG 2.2 AA contrast for text and interactive states, visible keyboard focus, and non-color-only status communication.
- Avoid applying every accent everywhere. Use color to communicate hierarchy and state, not decoration alone.

## 6. Interaction and motion principles

- Use Framer Motion only where it clarifies state, spatial continuity, hierarchy, or feedback.
- Prototype subtle 3D tilt/parallax on resource cards as an experiment, not a mandatory effect on every card.
- Keep motion short, interruptible, performant, and consistent; avoid motion that delays basic navigation or reading.
- Respect reduced-motion settings. Provide equivalent focus/press states for keyboard and touch users; no critical affordance may depend on hover.
- Use progressive disclosure for advanced controls. Keep core actions discoverable and recoverable.
- Every asynchronous action needs clear progress, success, partial success, failure, and retry behavior as appropriate.
- Motion must not obscure resource titles, metadata, citations, focus indicators, or status.

## 7. Design laws

1. **Retrieval first:** a beautiful library that cannot find the right item is a failure.
2. **Visual richness without clutter:** make resources recognizable while preserving scanning speed and information hierarchy.
3. **One canonical resource, many views:** shelves, collections, boards, search, and graph views must not create conflicting copies.
4. **Evidence over AI confidence theatre:** show citations, provenance, uncertainty, and relationship status.
5. **User control and reversibility:** edits, organization, integrations, imports, and deletion must have understandable consequences and recovery paths.
6. **Useful without AI:** capture, browse, read, organize, and export must not depend on AI availability.
7. **Delight without coercion:** gamification and motion remain purposeful and optional.
8. **Accessible by default:** keyboard, screen-reader, touch, responsive, contrast, and reduced-motion support are acceptance criteria.
9. **Private by default:** user data and processing remain scoped to the authenticated owner on the server.
10. **Portable by design:** keep originals, provenance, notes, and metadata exportable in documented formats.

## 8. Mockup and implementation gate

Before production UI coding:
1. Produce **three materially different, comparable mockup directions**: **Living Library**, **Visual Observatory**, and **Curated Studio**. They must show the same core journeys and screen states so they can be compared fairly.
2. Include high-fidelity screens for Library/Home, Semantic Search, Resource Detail/Reading + Research, Whiteboard, Knowledge Graph, AI Research/Synthesis, Collections/Bookshelf, and Insights. Include at least mobile, empty/loading, and failure/recovery examples.
3. Compare them against the owner's recorded preferences and measurable usability criteria; explain trade-offs rather than choosing based on decoration alone.
4. Show typography and color tokens in context, in both light and dark themes. Include reduced-motion behavior and keyboard/touch equivalents for 3D interactions.
5. Obtain the owner's explicit approval of the chosen visual direction, core flow, and initial implementation scope.
6. Only then start production UI implementation. This document and any generated concept image do not constitute that approval.

## 9. Validation checklist

- [ ] Three comparable directions use the same content and core tasks.
- [ ] Semantic search retrieves intent-based examples from a mixed-media library.
- [ ] A resource appears on multiple shelves/boards without duplicate records.
- [ ] Graph edges disclose whether they are confirmed or suggested and expose evidence.
- [ ] AI comparisons cite sources and distinguish agreement from disagreement.
- [ ] Light and dark themes pass contrast and state-visibility checks.
- [ ] Reduced-motion, keyboard, touch, and responsive alternatives work.
- [ ] Capture/extraction/AI failures are honest, actionable, and recoverable.
- [ ] Gamification can be disabled.
- [ ] Export and recovery workflows preserve originals, metadata, notes, and provenance.
- [ ] No production UI implementation begins before explicit owner approval.
