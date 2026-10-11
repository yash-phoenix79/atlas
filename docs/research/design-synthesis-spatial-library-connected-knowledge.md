# Atlas Design Synthesis: Spatial Library and Connected Knowledge

- **Status:** Research synthesis; proposed direction, not an approved visual design or implementation scope
- **Research date:** 2026-10-11
- **Input:** Owner's three rounds of design verdicts (40+ references) and explicit feedback on Heptabase and NotebookLM
- **Related:** [Product requirements registry](../product/requirements-use-case-registry.md) · [UI/UX handbook foundations](ui-ux-handbook-foundations.md) · [Competitive teardown protocol](ui-ux-deep-dive-09-competitive-teardowns.md) · [Experience strategy](ui-ux-deep-dive-10-experience-strategy.md)
- **Evidence limitation:** Ratings are direct owner preference signals. Product capabilities below are based on official product pages/docs; no full hands-on task teardown has yet been recorded. These findings do not validate usability for other users.

## 1. Decision context

The owner explicitly approved continuing research and singled out Heptabase's whiteboards, cards, and graph layers as "really good", asking that Atlas have them. The owner also wants NotebookLM-like understanding of how knowledge connects across resources. Both light and dark modes are required; Framer Motion is requested for purposeful animation.

This document translates those signals into testable product and design hypotheses. It does not authorize production UI implementation or settle the final visual direction.

## 2. Design-taste evidence from ratings

### Strong positive signals
- **Spatial thinking and connected knowledge:** Heptabase, Anytype, Obsidian, Napkin, NotebookLM, and Figma rated highly; the owner specifically praised Heptabase's whiteboards and graph layers.
- **Crafted interfaces and art direction:** Craft, Framer, and Vercel rated Great; Figma also rated Great.
- **Visual discovery and expressive content surfaces:** Pinterest, Spotify, Netflix, and Milanote rated Good.
- **Refined information presentation:** Craft rated Great; Stripe and Pitch rated Good.

### Negative signals
- Are.na, Eagle, Raycast, mymind, Superlist, Godly, Fabric and SiteInspire rated Bad. This suggests the owner does not want a generic or overly plain knowledge utility, nor undirected visual-gallery inspiration. These are preference observations, not proof that the products are objectively poor.
- Apple visionOS and highly immersive 3D were considered infeasible as direct implementation models; Bruno Simon was rated Bad. Avoid treating spectacle or full spatial-computing metaphors as the goal.
- Awwwards is potentially useful for the marketing landing page, but not necessarily the everyday application.

### Requirements already explicit
- Light and dark themes.
- Framer Motion for motion and transitions.
- Distinctive, high-craft application design.
- Whiteboards and graph-like exploration.
- Knowledge relationships across resources, with traceable evidence.
- The production UI approval gate remains mandatory.

## 3. Primary-source product signals

### Heptabase
- **Primary-source claim:** Heptabase describes whiteboards as an unlimited desktop for placing cards, and says cards belong to the Card Library rather than to a single whiteboard. The same card can appear on multiple whiteboards. This is a strong conceptual fit for a canonical resource that can be reused across contexts without duplication.
- **Primary-source claim:** Its official product page highlights whiteboards/cards, connected knowledge sources, and bidirectional links.
- **Implication for Atlas:** A Resource is canonical; boards contain placements/references to resources and notes, not duplicated resource records. A resource can participate in multiple boards while retaining one source of truth.
- Sources: [Heptabase product](https://signin.heptabase.com/); [Heptabase fundamental elements](https://wiki.heptabase.com/fundamental-elements); [Heptabase version-one overview](https://wiki.heptabase.com/version-one).
- Evidence label: Primary-source claim. Full hands-on teardown still required.

### NotebookLM
- **Primary-source claim:** Google's official material describes mind maps that visualize relationships among ideas, let users select concepts to explore summaries, and answer questions grounded in selected sources with citations to supporting passages.
- **Implication for Atlas:** Treat source-backed relationships and answer citations as a trust feature, not a decorative graph. A user must be able to inspect the source, evidence passage, and relationship rationale.
- Sources: [Google's NotebookLM mind-map announcement](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-studying-help/); [NotebookLM source-grounding and citations](https://blog.google/innovation-and-ai/technology/ai/notebooklm-google-ai/).
- Evidence label: Primary-source claim. Current product capabilities change; verify the actual UI during teardown.

### Interpretation
The compelling combination is not "copy Heptabase plus NotebookLM". It is a single resource system with three complementary modes:
1. **Library:** capture, browse, filter, and retrieve original resources.
2. **Canvas:** arrange resources and notes spatially to think through a topic.
3. **Connections:** inspect explicit and evidence-backed relationships across resources, ideas, and claims.

## 4. Proposed product model

### Canonical entities
- **Resource:** original URL/file and provenance, metadata, extracted text/artifacts, personal notes, processing status.
- **Concept/idea:** an editable user-owned idea or a clearly labelled AI-suggested concept, linked to evidence.
- **Relationship:** typed edge between resources/concepts, with origin (user, deterministic, or AI suggestion), supporting evidence, confidence where meaningful, and review status.
- **Board:** spatial workspace containing placements of canonical resources, concepts, and relationship annotations. A board does not own or duplicate its resources.
- **Board placement:** position/size/view-specific presentation of an existing entity on a particular board.
- **Evidence span:** source-specific citation into an extracted document/page/time range when supported; otherwise a coarser source-level citation with limitations disclosed.

This is a conceptual model to test, not a final database schema.

### Relationship states
1. **Explicit:** created or confirmed by the user.
2. **Evidence-backed suggestion:** AI proposes a relation and shows the source passages that support it; user can accept, reject, edit, or defer.
3. **Unreviewed suggestion:** surfaced as a candidate and visibly distinguished from confirmed knowledge.
4. **Rejected/dismissed:** retained only as appropriate for explainability and user control; never repeatedly forced into view.

Do not present an AI-inferred edge as established fact. Do not fabricate confidence percentages without calibration.

## 5. Interaction hypotheses to test

- **H1 — Reuse:** placing the same resource on two boards should preserve one canonical resource and show its board memberships.
- **H2 — Evidence-first connections:** selecting a graph edge should reveal why it exists and open its supporting source(s), not merely display a label.
- **H3 — Progressive complexity:** the library remains approachable; graph and canvas controls appear when relevant rather than overwhelming the home screen.
- **H4 — Spatial utility:** users can add, move, connect, group, search, zoom, fit-to-board, undo, and navigate by keyboard without fighting layout mechanics.
- **H5 — Visual craft:** resource cards have strong previews and restrained depth; motion communicates state changes and hierarchy rather than delaying routine actions.
- **H6 — Dual theme quality:** light and dark themes are intentionally art-directed with semantic tokens, legible evidence states, adequate contrast, and consistent resource imagery.
- **H7 — Motion accessibility:** Framer Motion is used for meaningful transitions, but reduced-motion settings, keyboard interaction, touch devices, and lower-powered hardware remain supported.

## 6. Candidate visual directions

All directions must use the same core screen set and feature model so they can be compared fairly.

### A. Spatial Atelier
- **Thesis:** a tactile, expressive thinking studio with a polished resource library and an expansive canvas.
- **Visual cues:** crafted surfaces, distinctive typography, subtle depth, carefully controlled color, spatial cards and connector lines.
- **Best test:** can a board feel delightful and manipulable without turning into a toy?
- **Risk:** over-design, too much visual chrome, hard-to-read dense boards.

### B. Editorial Intelligence
- **Thesis:** a refined research library where source material and evidence are first-class, with canvases available as a second mode.
- **Visual cues:** typography-led hierarchy, clear provenance, generous reading surfaces, rich but controlled cover imagery, crisp light/dark themes.
- **Best test:** can serious research feel premium without feeling sterile?
- **Risk:** may be too restrained relative to the owner's preference for distinctive visual personality.

### C. Living Knowledge Graph
- **Thesis:** a dynamic, visually rich environment where resources and concepts form a navigable network.
- **Visual cues:** layered graph views, clusters, meaningful connection states, subtle animated transitions, visual emphasis on relationships.
- **Best test:** does graph exploration help users find understanding and useful next steps?
- **Risk:** hairball graphs, unclear semantics, animation noise, and high implementation complexity.

These are hypotheses, not final selections. A hybrid is possible after comparative review, but should not be chosen before seeing comparable mockups.

## 7. Comparable mockup screen set

Each direction must include the same screens:
1. Library home with rich resource cards and grid/list switch.
2. Collection or topic view.
3. Search results, including no-results recovery.
4. Resource detail with provenance, notes, extracted content and linked concepts.
5. Whiteboard with existing resources, notes, groups, links, selection, and navigation controls.
6. Knowledge graph / concept map with explicit versus suggested edges.
7. AI answer or synthesis with inspectable citations and relationship evidence.
8. Capture flow including queued, partial, unsupported, failed and retry states.
9. Light and dark variants of representative screens.
10. Mobile library/detail plus a constrained mobile board/graph fallback.
11. Empty, loading, error, permission-denied and reduced-motion states.
12. Privacy/data controls where the user can inspect and manage stored content.

### Comparison rubric
Score each direction independently on:
- Distinctiveness and visual craft.
- Library browseability and retrieval speed.
- Board/graph comprehension and manipulation.
- Evidence/provenance clarity.
- Cognitive load and progressive disclosure.
- Light/dark quality.
- Accessibility, responsive behavior, and reduced motion.
- Feasibility and performance.
- Ability to support a cohesive future design system.

The owner's preference matters, but usability and engineering feasibility are separate gates.

## 8. Motion and visual behavior

- Use Framer Motion for state transitions, panel/dialog entry, card placement feedback, board navigation, and graph focus where motion clarifies causality.
- Prototype 3D tilt only on suitable pointer-driven cards; treat it as an experiment, not a universal interaction.
- Keep reading, search, and repeated workflows fast; never require a motion sequence to complete a task.
- Honor `prefers-reduced-motion`; provide keyboard-focus equivalents; avoid hover-only information; use static treatments on touch when hover has no equivalent.
- Animate relationships only when it helps explain a state or navigation event. Persistent animated edges are likely to distract.
- Validate frame performance, interaction latency, contrast, and keyboard behavior rather than relying on visual review alone.

## 9. Research plan and acceptance evidence

### Next teardown tasks
For Heptabase, Anytype, Obsidian, NotebookLM and Figma, record the actual interaction sequence, screenshots/notes where permitted, and observed behavior:
1. Add a resource and correct its metadata.
2. Reuse one resource in two contexts.
3. Create a note/concept and connect it to source material.
4. Find an existing resource by keyword and by remembered concept.
5. Inspect why two ideas are connected.
6. Follow a citation back to source evidence.
7. Recover from a failed/unsupported import or empty search.
8. Test keyboard and narrow viewport behavior where available.

Record evidence labels (Observed, Primary-source claim, Inference, Hypothesis, Unknown), access date, platform/version, and limitations. Do not claim hands-on observations before performing these tasks.

### Design validation
- Produce three comparable static/high-fidelity directions first.
- Include interaction prototypes for board placement, graph edge inspection, and light/dark switching where feasible.
- Test representative retrieval and connection-understanding tasks with the owner and, later, 5–8 target users if available.
- Capture task success, time/error, source-evidence comprehension, perceived visual quality, accessibility issues, and feasibility concerns.
- Do not begin production UI implementation until the owner explicitly approves the direction and initial scope.

## 10. Open questions
- Should the first board be user-created, automatically suggested from a collection, or both?
- Should the graph initially show resources, concepts, or a switchable entity filter?
- What minimum citation granularity is available for each source type (web, PDF, video, code repository)?
- How should inferred relations be reviewed, corrected, deleted, and regenerated?
- Should graph/board be desktop-first with mobile inspect/navigation, or should mobile support full editing?
- Which parts of the visual identity belong in the application versus the landing page?
- How should large graphs be clustered, filtered, and made understandable without hiding important relationships?

## 11. Immediate next action
Update the canonical requirement registry with explicit whiteboard, graph, and evidence-backed relationship requirements; then complete product teardowns and prepare three comparable mockup directions. Keep these as proposals until reviewed and approved.
