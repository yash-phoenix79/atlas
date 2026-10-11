# Atlas Mockup Evaluation Package: Three Visual Directions

- **Status:** Design exploration brief; no direction selected or approved yet
- **Date:** 2026-10-11
- **Purpose:** Compare three materially different Atlas visual directions using the same information architecture, representative data, and tasks before production UI work.
- **Canonical requirements:** [Screen inventory and visual design brief](screen-inventory-and-visual-design-brief.md) · [Design synthesis](design-synthesis-spatial-library-connected-knowledge.md) · [UI/UX research plan](ui-ux-research-plan.md)
- **Approval gate:** Only the owner can approve the chosen direction, core flow, and initial implementation scope.

## 1. Evaluation rules

The comparison must be fair and evidence-led:
- Use the same representative library data, screen sizes, and user tasks in all three directions.
- Show both light and dark themes for each direction.
- Include desktop and narrow mobile states.
- Show the same core screens: Home/Library, Semantic Search, Resource Detail/Reading + Research, Whiteboard, Knowledge Graph, AI Research/Synthesis, Collections/Bookshelf, and Insights.
- Include at least one empty/loading/failure/recovery state in each direction.
- Evaluate resource discovery and legibility before decorative effects.
- Treat visual concepts as proposals, not proof of usability. Run task-based checks before implementation.
- Typography and palette are tokens to test in context; they are not final decisions.
- Production application UI remains blocked until explicit owner approval.

## 2. Direction A — Living Library

### Design thesis
A beautiful, welcoming, highly browsable library. The first impression is visual discovery and personal curation; spatial thinking and research tools remain one click away rather than competing for attention.

### Visual language
- Editorial warmth with generous breathing room, layered cover art, restrained surfaces, and highly legible titles.
- Pinterest-inspired visual grid/masonry paired with Netflix-like horizontal shelves and a visual bookshelf collection mode.
- Candidate warm-light canvas with indigo/violet actions; dark theme uses carefully tuned charcoal surfaces and the same semantic roles, not a literal color inversion.
- Motion: gentle card lift, subtle perspective tilt as a limited experiment, and clear shelf-to-detail transitions.

### Signature Home composition
- Compact navigation rail with Library, Search, Boards, Graph, AI Research, Collections, Insights.
- Prominent semantic search field.
- One featured “Continue learning” item, then curated shelves such as Picked for You, Recently Added, Explore Topics, and Your Bookshelf.
- Cards emphasize title, media type, source/creator, and a useful progress/status signal. Avoid burying everything under cover art.

### Strengths to test
- Fast visual recognition and rediscovery.
- Emotional attachment to a growing collection.
- Natural browsing for books, videos, articles, courses, and mixed media.

### Risks to test
- Shelves can consume vertical space and become repetitive.
- Masonry layouts may weaken scan order and comparison.
- Personalization must not hide recently saved items or reduce user control.

## 3. Direction B — Visual Observatory

### Design thesis
A spatial knowledge instrument for people who want to explore how ideas relate. The library is still the canonical source, but boards, clusters, and evidence-backed connections are prominent.

### Visual language
- Precise, structured spatial layouts; subtle grids; crisp typography; carefully differentiated node types.
- A restrained dark-first option may help complex graph/canvas work, with a fully art-directed light theme for reading and everyday use.
- Color encodes entity/relationship categories sparingly and consistently; it never substitutes for labels, line styles, or status text.
- Motion explains spatial transitions, clustering, selection, and focus; avoid perpetual animation and spectacle-only 3D.

### Signature Home composition
- A clear “resume your thinking” board/cluster, recent resources, and current research question.
- Quick access to saved resources without forcing graph navigation for simple retrieval.
- Board cards reference canonical resources and preserve provenance.

### Strengths to test
- Seeing relationships, organizing complex topics, and moving from source to concept.
- Distinguishing user-confirmed knowledge from AI-suggested relationships.
- Spatial exploration of research questions and projects.

### Risks to test
- Can feel intimidating to people who simply want to save or find something.
- Graphs become noisy without clustering, focus controls, and list alternatives.
- Canvas interactions can be inaccessible or awkward on mobile unless alternatives are first-class.

## 4. Direction C — Curated Studio

### Design thesis
An editorial research desk that combines focused reading, notes, source-grounded AI synthesis, and curated collections. The product feels like a crafted studio for turning information into understanding.

### Visual language
- Strong typographic hierarchy, restrained color, deliberate whitespace, polished reading surfaces, and compact but clear metadata.
- Sans-serif interface typography with a reading face evaluated for long-form content.
- Sources, citations, notes, and AI outputs have distinct visual treatments.
- Motion is quiet and functional: panel transitions, focus changes, saved-state feedback, and inspectable citations.

### Signature Home composition
- “Return to your research” with active reading, saved questions, recent sources, and selected topic collections.
- A visible capture action and search field; visual shelves are present but more curated and less dominant than in Living Library.
- A compact path from question → source set → comparison/synthesis → notes/concepts.

### Strengths to test
- Sustained reading, careful source comparison, and evidence inspection.
- Low distraction and a clear sense of progression from material to understanding.
- Trustworthy AI workflows with citations and visible uncertainty.

### Risks to test
- May feel too restrained or text-heavy for visual discovery.
- Less immediate delight when opening a mixed-media collection.
- Needs deliberate visual treatment for video, book, image, and course resources so they do not all become plain rows.

## 5. Shared core task script

Run the same tasks in all directions, using the same seed library:

1. **Save a resource:** add a URL, correct the title if needed, choose a collection, and understand the capture status.
2. **Find by intent:** search “how startups find their first users” and choose a relevant result from mixed media.
3. **Resume reading:** reopen an unfinished resource, find a highlight/note, and inspect related resources.
4. **Compare sources:** ask a question, inspect the answer's citations, and identify where two sources disagree.
5. **Think spatially:** place the same canonical resource on a board, group it with concepts, and inspect a related graph edge.
6. **Organize:** add a resource to a bookshelf/collection without duplicating the underlying resource.
7. **Recover:** handle a failed extraction and retry or continue with the saved original URL.
8. **Use mobile:** capture a shared link, find a saved item, and read or inspect a citation without hover-only controls.

## 6. Shared mockup set required for each direction

- Home / Visual Library: mixed-media covers, shelves, quick capture, and recent items.
- Semantic Search: natural-language query, suggestions, filters, result explanations, and no-results state.
- Resource Detail: focused reading and research workspace, notes, highlights, metadata, and related items.
- AI Research: source selection, answer, citations, source comparison, disagreement, and visual synthesis.
- Whiteboard: both freeform and structured layouts; accessible alternative for spatial manipulation.
- Knowledge Graph: clustered view plus focused-neighborhood/list fallback; inspectable edge evidence.
- Collections / Bookshelf: multiple visual shelves and grid/list option.
- Insights: explainable learning patterns and useful next actions; no shame-based metrics.
- System states: empty library, loading, partial/unsupported extraction, failure/retry, AI unavailable, and export/import progress.
- Responsive samples: desktop, tablet, and narrow mobile.
- Theme samples: light and dark.
- Motion samples: default and reduced motion; keyboard/touch equivalents for every hover experiment.

## 7. Decision rubric

Score each direction from 1 (weak) to 5 (strong), with a short reason and screenshot evidence. A score is a discussion aid, not an automatic winner.

| Criterion | Weight | What a 5 looks like |
|---|---:|---|
| Retrieval clarity | 20% | Users can quickly locate a relevant resource and understand why it matches |
| Resource visual recognition | 12% | Media types and titles are recognizable without sacrificing scan speed |
| Reading and research comfort | 12% | Long-form reading, notes, and citations remain clear and focused |
| Spatial thinking | 12% | Whiteboards and graph relationships are understandable and controllable |
| AI evidence and trust | 12% | Citations, uncertainty, disagreement, and suggestion status are easy to inspect |
| Coherence and craft | 10% | The interface feels distinctive, consistent, and intentionally composed |
| Accessibility and responsive behavior | 10% | Keyboard, touch, reduced motion, contrast, and small screens are supported |
| Capture/recovery clarity | 7% | Users understand what was saved, extracted, failed, and what to do next |
| Delight without distraction | 5% | Motion and personalization feel useful, not coercive or noisy |

Do not allow visual polish to compensate for failed retrieval, inaccessible interactions, untrustworthy AI, or unclear failure states.

## 8. Design system questions to resolve in mockups

### Typography
- Compare Inter for interface/body with Plus Jakarta Sans for headings.
- Test a readable serif or a high-legibility sans-serif for long-form reading.
- Compare actual title lengths, metadata, graph labels, citations, and mobile sizes—not font specimen sheets alone.

### Color
Candidate starting values from the design brief:
- Indigo `#4F46E5` for primary actions.
- Violet `#8B5CF6` for selected AI/highlight accents.
- Sky `#38BDF8` for links/focus only after contrast validation.
- Emerald `#34D399`, amber `#FBBF24`, and coral `#F87171` for semantic states with text/icon labels.
- Warm light neutral `#FAFAF9`, subtle border `#E7E5E4`, dark surface `#1E293B`, and dark canvas `#0B1120`.

These are candidates. Check WCAG 2.2 AA contrast, focus visibility, semantic color use, and real resource artwork in both themes before finalizing.

### Motion
- Framer Motion is a candidate for purposeful transitions.
- Subtle 3D tilt/parallax is an experiment, not a global card behavior.
- Respect reduced motion and never hide essential content behind hover.
- Test performance on a realistic resource count and a mid-range mobile device before adoption.

## 9. Evidence and approval record

Before choosing a direction, record:
- Screens and states reviewed.
- Tasks attempted and where users hesitated or failed.
- Rubric scores with reasons and screenshots.
- Accessibility/reduced-motion observations.
- Remaining risks, unresolved trade-offs, and follow-up experiments.
- Owner decision: **not yet recorded**.

Only after explicit owner approval should the chosen direction and core flow become an implementation decision. No application UI should be considered approved merely because a concept board exists.
