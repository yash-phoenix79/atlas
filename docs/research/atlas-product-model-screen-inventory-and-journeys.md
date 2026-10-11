# Atlas product model, screen inventory, and journey map

**Status:** Working design input — not approved  
**Updated:** 2026-10-11  
**Purpose:** Establish the product structure before designing additional screens.  
**Evidence labels:** Product behavior cited below is documented by primary sources. Atlas-specific conclusions are hypotheses to validate.

## 1. First-principles product definition

Atlas helps a person capture, retrieve, connect, understand, and reuse information from many kinds of resources. It is not primarily a folder manager, a notes editor, or an AI chat window.

### Core jobs

1. **Capture:** save a URL, PDF, video, repository, image, quote, note, or other supported resource with minimal interruption.
2. **Orient:** understand what is already in the library, what is new, and what deserves attention.
3. **Retrieve:** find an item by title, source, text, visual similarity, meaning, tag, project, or remembered context.
4. **Understand:** inspect a resource, extract useful passages, annotate it, and retain source context.
5. **Connect:** relate resources and ideas without duplicating the underlying items.
6. **Synthesize:** create a comparison, answer, map, brief, or learning path grounded in inspectable sources.
7. **Reuse and transport:** export resources and knowledge in durable formats; preserve ownership and portability.

### Product invariants (proposed)

- **One canonical resource; many views.** A resource can appear in multiple collections, whiteboards, search results, and research artifacts without becoming multiple unrelated records.
- **Views do not own resources.** Deleting a board placement must not delete the underlying resource. This follows a documented pattern in Heptabase's card library and whiteboards. Source: https://wiki.heptabase.com/fundamental-elements
- **Capture first, organize later.** A quick-save should not require the user to choose a folder or design a taxonomy.
- **Every derived claim has provenance.** AI summaries must link back to source passages; unsupported inferences and disagreements are marked.
- **Search is a first-class route, not a fallback.** Navigation, visual discovery, semantic retrieval, and filters complement each other.
- **Content leads the visual system.** Interface chrome stays restrained enough that saved images, covers, diagrams, and excerpts can carry their own visual character.
- **No critical action is gesture-only.** Canvas operations need keyboard-accessible alternatives and visible focus. WCAG guidance: https://www.w3.org/WAI/WCAG22/Techniques/general/G202
- **Private by default; explicit sharing.** Shared workspaces and public links require clear scope, status, and revocation behavior.
- **Portable data is a product capability.** Export and backup are discoverable, documented, and tested.
- **No false certainty.** A design prototype, generated summary, or AI-suggested relationship is never presented as a verified result without evidence.

## 2. Canonical information model

This is a conceptual model, not a final database schema.

- **Resource:** canonical saved item; type, canonical URL or file, title, source/author, content snapshot or extracted text where allowed, preview, metadata, timestamps, processing state, ownership, provenance.
- **Annotation:** highlight, quote, comment, timestamp, page reference, or personal note tied to a resource or a specific passage.
- **Collection:** curated, optionally ordered view of resource references; a resource may belong to many collections.
- **Board:** freeform spatial arrangement of references to resources, annotations, and board-native notes/shapes/connectors.
- **Concept:** a named idea or topic linked to resources and annotations.
- **Relationship:** typed edge between resources, concepts, annotations, and/or research artifacts; records who/what created it, confidence, evidence, and whether it is accepted, rejected, or pending.
- **Research artifact:** a synthesis, comparison, brief, learning path, or question; stores its scope, source set, cited passages, generated content, human edits, and revision history.
- **Saved view:** reusable query/filter/sort/group configuration; it must not create duplicate resources.
- **Import job:** queued/running/succeeded/failed state, source, progress, error details, retry, and recovery action.
- **User and access policy:** owner, private-by-default resources, explicit share grants, export and deletion controls, audit trail for consequential sharing actions.

### Relationship distinctions

Never visually conflate these:
1. **User-created link** — explicitly created by the user.
2. **Observed link** — grounded in an existing source or explicit URL/reference.
3. **AI-suggested relation** — a hypothesis with supporting passages and confidence.
4. **Confirmed relation** — accepted by the user or validated under a defined rule.

A graph must expose the relation type and evidence; node proximity alone is not proof of a relationship.

## 3. Navigation model hypothesis

Use a persistent global shell, but let each workspace adopt its own interaction model. Proposed primary destinations:

- **Home** — resume, recent activity, and intentional rediscovery.
- **Library** — the complete resource collection with masonry, shelves, and compact list views.
- **Search** — cross-library keyword and semantic retrieval.
- **Collections** — curated shelves and saved views.
- **Boards** — freeform thinking spaces.
- **Graph** — concept and resource relationships.
- **Research** — source-grounded investigations and artifacts.
- **Inbox** — uncategorized captures and imports needing attention.

Global actions: quick capture, search, create note, keyboard command menu, help, account/privacy.

Do not force every primary destination to be equally prominent on mobile. Mobile prioritizes capture, search, reading, and inbox; spatial canvas controls adapt rather than shrink a desktop canvas into an unusable miniature.

## 4. Screen inventory

Screen names are logical routes. Some can be states of one route rather than separate pages.

### A. Entry and account
1. Welcome / product promise
2. Sign up
3. Sign in
4. Account recovery
5. First-run onboarding and privacy expectations
6. Import choices / browser capture setup
7. Empty-library state with sample actions that do not contaminate the real library

### B. Home and discovery
8. Home / resume where you left off
9. Recently saved
10. Recently viewed / recently annotated
11. Rediscovery / resurfaced resources with explanation of why shown
12. Discovery feed with opt-in controls and hide/dismiss actions
13. Collection spotlight / curated shelf
14. Activity timeline

### C. Library and organization
15. Library — visual masonry
16. Library — horizontal shelves
17. Library — dense list/table
18. Library — filtered and grouped results
19. Collection detail
20. Create/edit collection
21. Tags and concept index
22. Bulk selection and actions
23. Duplicates / canonical URL conflict resolution
24. Trash / restore / permanent deletion confirmation

### D. Capture and import
25. Quick-capture dialog
26. URL preview and save confirmation
27. File upload / drag-and-drop
28. Browser share/capture flow
29. Import queue with progress
30. Import processing detail
31. Unsupported resource / permission / extraction failure
32. Retry, replace file, or save metadata-only recovery
33. Bulk import mapping and conflict review

### E. Search and retrieval
34. Global search overlay / command palette
35. Search results — all resource types
36. Semantic results with matched concepts and snippets
37. Visual search / similar image or selected region (future capability; validate feasibility)
38. Search filters and advanced query
39. Search result preview / quick actions
40. Saved search / saved view
41. No results / spelling, scope, and filter recovery

### F. Resource and reading
42. Universal resource detail shell
43. Article reader
44. PDF reader with page navigation
45. Video page with transcript and timestamped notes
46. GitHub repository detail
47. Book/course/podcast detail variants as supported
48. Image viewer with crop/visual similarity entry point
49. Plain note editor
50. Highlight / quote annotation
51. Resource metadata and source provenance
52. Backlinks, related resources, and containing collections/boards
53. Resource processing / unavailable source state

### G. Thinking and relationships
54. Whiteboard index
55. Board canvas — empty state
56. Board canvas — populated freeform layout
57. Board selection / multi-select / alignment / grouping
58. Board side panel with canonical resource info
59. Board-native note and connector editing
60. Sub-board / nested topic exploration
61. Local knowledge graph around one resource/concept
62. Global clustered graph with filters and legend
63. Graph relationship detail / provenance inspector
64. AI-suggested links review: accept, reject, or defer
65. Keyboard and touch alternatives for canvas/graph operations

### H. Research and synthesis
66. Research home / investigations
67. New investigation: question, scope, and source selection
68. Source set review / inclusion and exclusion
69. Running investigation / progress and cancellation
70. Research results with cited claims
71. Evidence inspector with exact passage, source, page/time, and confidence
72. Contradiction and disagreement comparison
73. Knowledge-gap / unanswered-question view
74. Visual synthesis / evidence map
75. Editable research artifact
76. Export/share research artifact with citations
77. AI failure, insufficient evidence, or source-access limitation

### I. Insights and learning
78. Learning / activity overview
79. Knowledge gap suggestions
80. Learning path from saved resources
81. Progress and review queue
82. Resource revisit reminder settings
83. Personal insights with transparent explanation of how generated

### J. Settings, portability, privacy
84. Profile and preferences
85. Appearance: light/dark/system, density, motion preferences
86. Capture and connected services
87. Import data
88. Export library and research artifacts
89. Backup status and restore instructions (if backup feature exists)
90. Privacy, sharing, sessions, and access control
91. Data retention and account deletion
92. Keyboard shortcuts and accessibility help
93. Notifications and rediscovery controls

### K. Global states and responsive variants
These are required for all relevant routes, not optional polish:
- Loading / skeleton
- Empty / first use
- No results
- Partial data / unavailable source
- Error / retry
- Offline / queued operation
- Success / undo
- Permission denied / session expired
- Destructive confirmation / restore
- Keyboard focus and screen-reader names
- Reduced-motion behavior
- Mobile navigation, bottom sheets, compact resource previews, and canvas alternatives
- Dark-mode contrast and content that has its own colors

This is a broad inventory, not a commitment to ship 93 independent pages in the MVP. The MVP subset must be selected after journey and feasibility analysis.

## 5. End-to-end journeys

### Journey 1 — Save now, organize later
1. User shares a URL or file to Atlas.
2. Capture UI identifies source/type and offers a title/preview.
3. User saves in one clear action; collection selection is optional.
4. Import job shows honest status and can run asynchronously.
5. If extraction fails, preserve the original URL/file metadata and explain what is unavailable.
6. Resource appears in Inbox/Library with processing status.
7. User can retry, annotate, or organize later.

**Success criteria:** minimal interruption; no silent data loss; recoverable failures; clear distinction between saved and fully processed.

### Journey 2 — Find something remembered vaguely
1. User searches in natural language or partial keywords.
2. Results can be refined by type, date, source, collection, and content.
3. Each result explains relevance with matching text/concept.
4. Preview opens without losing query context.
5. User opens the resource, copies a passage, or adds it to a board/research set.
6. Back returns to the same query and scroll position.

**Success criteria:** useful retrieval without remembering exact titles; understandable ranking; preserved context.

### Journey 3 — Turn a pile of resources into a model
1. User selects resources from search/library.
2. Adds references to a board; canonical items remain unchanged.
3. Arranges, clusters, annotates, and connects items.
4. Optional AI suggests a cluster or relationship, each labelled as a suggestion.
5. User inspects evidence, accepts/rejects links, and saves the board.
6. The same resources remain accessible in their other collections and views.

**Success criteria:** flexible spatial thinking without duplication or hidden side effects; keyboard alternatives; understandable provenance.

### Journey 4 — Produce a defensible synthesis
1. User states a research question and scope.
2. Atlas previews the candidate source set and allows exclusions.
3. System retrieves source passages and reports coverage/limitations.
4. Results separate supported claims, conflicting evidence, and hypotheses.
5. Clicking a citation opens the exact source passage/page/timestamp.
6. User edits the artifact and exports it with citations.
7. The research artifact retains its source manifest and revision history.

**Success criteria:** traceability, inspectable evidence, explicit uncertainty, useful export, and no fabricated citations.

### Journey 5 — Rediscover without feeling manipulated
1. Home surfaces a small number of older items.
2. Each item explains why it resurfaced (related resource, time-based review, unfinished note, or user-defined goal).
3. User can save, snooze, dismiss, or disable the reason.
4. Feedback changes future resurfacing.
5. The user can inspect and control rediscovery settings.

**Success criteria:** useful return visits, user agency, no opaque engagement-maximizing loop.

### Journey 6 — Export and leave safely
1. User opens Export from settings.
2. Chooses resources, annotations, relationships, boards, and research artifacts.
3. UI explains format coverage and limitations before export.
4. Export runs with progress and a clear completion state.
5. User can verify the archive and read restore/import instructions.
6. Deletion and sharing revocation remain distinct actions with explicit confirmation.

**Success criteria:** user understands what is included; export is verifiable; portability is not a vague promise.

## 6. Research evidence and design implications

### Visual discovery
Pinterest documents image/region-based search and refinement, including searching a selected part of an image: https://help.pinterest.com/en/article/use-visual-search-features and its visual-understanding research: https://labs.pinterest.com/research-and-innovation/visual-understanding.

**Implication for Atlas:** visual discovery is more than masonry. Potential future experiments include image/diagram retrieval and visually related saved items. These capabilities require actual retrieval quality tests; a visual UI alone does not create them.

### Spatial thinking
Heptabase describes whiteboards as an unlimited thinking surface where cards belong to a shared Card Library and can appear on multiple whiteboards: https://wiki.heptabase.com/fundamental-elements. Its UI logic documents an Inbox, Journal, Whiteboard, Card Library, tag database, and contextual right sidebar: https://wiki.heptabase.com/user-interface-logic.

**Implication for Atlas:** separate canonical resource storage from board placement; keep contextual source information available while thinking.

### Knowledge graph
Obsidian documents graph nodes, links, hover highlighting, click-through, keyboard movement, filters, and local graph views: https://obsidian.md/help/plugins/graph. It also documents canvas file/card handling and backlinks: https://obsidian.md/help/Plugins/Canvas and https://obsidian.md/help/plugins/backlinks.

**Implication for Atlas:** graph must support filtering, local context, keyboard navigation, and opening the underlying item. Avoid a graph that is merely decorative.

### Accessibility
W3C WCAG 2.2 includes keyboard operation and focus visibility guidance: https://www.w3.org/WAI/WCAG22/Techniques/general/G202 and https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/.

**Implication for Atlas:** all core flows must be keyboard operable, focus must remain visible and unobscured, and canvas/graph gestures need alternatives. A color audit alone is not an accessibility audit.

### Evidence limitations
These are documented product patterns and design implications, not proof that copying them will improve Atlas outcomes. We have not yet conducted a comparative usability study or verified the best interaction model for Atlas's actual users.

## 7. Proposed evaluation plan

Use identical tasks and the same sample resources across alternative prototypes. Observe completion, errors, recovery, and user confidence rather than asking only which design looks best.

| Task | Primary measures |
|---|---|
| Save a resource from a URL | Time, interruptions, missing metadata, error recovery |
| Find an old item from a vague memory | Success, time, query refinements, relevance confidence |
| Build a board from 5 resources | Time, accidental duplication, relation clarity, keyboard/touch usability |
| Verify an AI claim | Time to source passage, citation accuracy, uncertainty comprehension |
| Revisit a resurfaced resource | Relevance, user agency, dismiss/snooze usage |
| Export a collection with annotations | Completeness, format clarity, ability to verify output |

Run accessibility and responsive checks alongside task tests. Record what fails, not just what looks successful.

## 8. Open decisions — not to silently assume

1. **Capture MVP:** which input paths are essential for the first usable version?
2. **Resource scope:** which types get rich native readers versus a universal detail shell?
3. **Search MVP:** keyword + metadata first, semantic retrieval in initial release or later?
4. **AI:** local/private vs remote processing, source access limits, and cost/latency boundaries.
5. **Boards:** freeform canvas in MVP or after library/search foundations?
6. **Graph:** manual links first, automatic extraction later, or both?
7. **Portability:** minimum export formats and round-trip guarantees.
8. **Collaboration:** private single-user first, with invitation-based sharing later (current hypothesis).
9. **Gamification:** opt-in learning feedback only; do not optimize for compulsive engagement.
10. **Visual identity:** not selected until the architecture and screen prototypes can be evaluated in context.

## 9. Immediate next steps

1. Convert this inventory into a screen-to-journey coverage matrix and define the smallest coherent MVP.
2. Research and compare interaction patterns for Library, Search, Resource Detail/Reader, Board, Graph, and Research.
3. Produce a connected multi-screen HTML prototype covering the core journeys; do not create another set of alternate homepages.
4. Apply a consistent accessibility and typography baseline, then test distinct workspace layouts within it.
5. Record prototype findings and unresolved decisions before requesting explicit approval.

**Approval gate:** this document is a working proposal. It does not approve a visual direction, commit to all listed screens, or authorize production UI changes.
