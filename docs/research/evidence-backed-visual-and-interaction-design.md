# Atlas Evidence-Backed Visual and Interaction Design Research

**Status:** Research baseline / proposed decisions only  
**Last reviewed:** 2026-10-11  
**Owner approval:** Not yet approved for production UI  
**Purpose:** Make consequential visual and interaction choices traceable to user jobs, evidence, trade-offs, and test plans.

## Executive position

Atlas should be explored as a **living visual library that grows into a personal knowledge universe**: visual discovery for browsing, spatial surfaces for thinking, and a calm source-grounded studio for research. These are modes over the same canonical resources, not separate products or duplicated data models.

This is a direction to test, not an approved final design. Prior mockups did not make the proposed directions sufficiently distinct; their color palette was not validated, and the HTML prototype did not use Framer Motion. Do not treat those artifacts as production design.

### Principles that currently have the strongest support

1. **Preserve content identity.** Use source artwork, useful aspect ratios, titles, source type, and clear metadata to help users recognize resources. Do not impose a decorative UI frame that competes with the saved content.
2. **Match presentation to the job.** Masonry is for visual scanning; a compact list is better for dense metadata and batch operations; a canvas is for spatial arrangement; a readable source view is for research.
3. **One resource, many contexts.** Library, board, graph, and research views should reference the same canonical resource and retain its provenance.
4. **Make AI provenance visible.** Separate source text, user-authored notes, and generated interpretation. AI claims should link to the exact supporting excerpt or source; unsupported statements must not look cited.
5. **Motion communicates state and continuity.** Shared transitions, direct manipulation, and clear save/import feedback are candidates. Ambient motion, excessive parallax, and animation that delays work are not goals.
6. **Accessibility is a design constraint.** Meet the chosen WCAG 2.2 AA baseline where applicable; preserve keyboard operation, visible focus, reduced-motion behavior, text resizing, non-color status cues, and usable touch targets.
7. **Measure, don't rationalize after the fact.** State the hypothesis before the prototype; use the same realistic data and tasks across variants; record outcomes and limitations.

## Evidence model

Every important statement or decision must be labelled as one of:

- **Standard / requirement:** normative or adopted accessibility/security constraint.
- **Primary-source claim:** official product or framework documentation says this; not necessarily independently reproduced.
- **Observed:** directly reproduced in a named product, version, environment, and date.
- **Secondary evidence:** independent research or reporting; assess methodology and applicability.
- **Inference:** reasoned interpretation of evidence.
- **Hypothesis:** plausible but unvalidated design proposition.
- **Unknown:** evidence is incomplete, inaccessible, conflicting, or stale.

Official docs tell us what a product supports; they do not prove the feature is usable or best for Atlas. A competitor screenshot is a precedent, not evidence that copying it will work. Aesthetic judgments are legitimate but should be labelled as preference/hypothesis rather than scientific fact.

## 1. Color system: evaluate roles before picking hex codes

### The design problem

Atlas contains user-generated and externally sourced visual material. Strongly colored interface chrome can compete with book covers, thumbnails, screenshots, charts, diagrams, and artwork. Conversely, a completely neutral UI can feel generic and fail to give the product a memorable identity. The goal is a controlled visual hierarchy, not "use less color" as a universal rule.

### Three hypotheses to compare

| Direction | Surface and type character | Accent hypothesis | Intended mood | Principal risk |
|---|---|---|---|---|
| Warm editorial | Warm near-white, ink-like text, restrained dividers | Muted dark accent with a warm secondary highlight | Thoughtful, tactile, focused | Can resemble a conventional notes app; warmth may reduce perceived crispness |
| Expressive digital | Cool/neutral surfaces, sharp typography, crisp edges | Confident violet/blue used for primary actions and selected states | Inventive, precise, modern | Generic AI-SaaS appearance; accent creep |
| Organic studio | Natural neutral base, deep green/teal anchor, warm highlights | Deep botanical accent with restrained secondary colors | Personal, exploratory, grounded | Green can become arbitrary branding; color coding may be confused with semantics |

**Hypothesis to test first:** neutral interface foundations plus one distinctive brand accent; let resource artwork and carefully scoped collection/board colors supply much of the visual richness. This is not a final decision.

### Color token architecture

Avoid hardcoding raw hex values throughout components. Define semantic tokens for each theme, then map palettes to those roles.

| Token family | Example roles | Rule |
|---|---|---|
| Surfaces | canvas, elevated surface, card, overlay | Maintain separation without relying on shadows alone |
| Text | primary, secondary, muted, inverse | Each combination must meet its contrast target |
| Borders | subtle, strong, selected | Borders should not be the only way to identify critical states |
| Brand | primary, hover, pressed, soft surface | Reserve high salience for key actions and current focus |
| Focus | focus ring | Visible on every surface; independent of hover styling |
| Status | success, warning, error, info | Pair color with text/icon/shape; never encode meaning by color alone |
| Spatial categories | optional collection or concept hues | User-customizable and labelled; don't confuse categories with status |
| Visualization | graph node, edge, selected node, filtered node | Use a distinct, tested mapping and a legend where meanings are not obvious |

### Rules and evaluation

- Use WCAG contrast calculation on rendered text and controls, not by eyeballing swatches. For normal text, target at least 4.5:1; large text at least 3:1. Non-text UI boundaries and focus indicators have their own contrast requirements.
- Validate all semantic states in both light and dark themes. A palette that works on one surface may fail on another.
- Use text labels, icons, shapes, or patterns with status colors.
- Don't use brand color for every clickable object; preserve hierarchy between primary, secondary, tertiary, destructive, and selected actions.
- Avoid assuming that a darker theme is automatically better for graph/canvas work. Test both themes with real diagrams and long sessions.
- Resource images need image-specific treatments: preserve meaningful aspect ratios; use controlled cropping only when content can tolerate it; provide a neutral fallback for missing artwork; avoid color overlays that reduce thumbnail recognition.
- Use automated contrast checks where possible, then manually inspect focus, selected, disabled, error, loading, and empty states.

### Decision gate

Do not finalize a palette until we have (1) semantic tokens, (2) contrast results for both themes, (3) screenshots of representative screens and states, and (4) a comparison using identical content. Select based on readability, hierarchy, character, and content recognition—not preference for one attractive swatch.

## 2. Typography, spacing, density, and shape

### Typography hypotheses

Atlas has three different reading conditions: rapid scanning, short-form note taking, and sustained reading. One typographic scale may serve the product, but different contexts can use different measure, leading, and density.

- **UI typography:** prioritize legible controls, clear hierarchy, and consistent numerals/metadata. Use a distinctive family only if it remains readable at small sizes and renders reliably.
- **Reading typography:** optimize line length, line height, paragraph rhythm, code, quotes, and source excerpts. Avoid forcing a display font into long-form body copy.
- **Display typography:** use sparingly for collection names, editorial headings, or synthesis titles; it must not weaken information scent.
- **Type scale:** define tokens and test at browser zoom and enlarged text. Do not encode hierarchy only by weight or color.
- **Line length:** test comfortable reading widths rather than choosing a single fashionable value; source formats (code, tables, PDFs) need different treatment.

### Density hypotheses

- Masonry is suited to irregular visual content and browsing by recognition.
- A compact list/table-like view is suited to sorting, bulk selection, metadata inspection, and high-volume collections.
- Shelves create a sense of curated progression and make themed groups discoverable, but excessive horizontal rows can hide content and add scrolling.
- A canvas should prioritize spatial freedom and direct manipulation, with optional structured layouts, alignment tools, grouping, and navigation aids.
- Research view should reduce competing controls and keep source, notes, and citations legible.

Every view should preserve search, sort/filter, selection, and keyboard access in a coherent way. Avoid making the visual view the only way to use the library.

### Shape, shadows, and depth

Use shape and elevation to communicate grouping and interaction, not decoration alone. Test low-chrome cards against more tactile cards. Avoid excessive glass, blur, gradient, and shadow effects that make text and edges harder to read or reduce visual distinctiveness of resource artwork. For canvas objects, depth cues should be stable and not imply an interaction that does not exist.

## 3. Information architecture and screen jobs

### A. Discover: visual library

**Job:** identify, browse, rediscover, and organize resources with low friction.

- Pinterest-like masonry with resource-specific ratios and varied card heights.
- Netflix-like shelves for recently saved, in-progress, curated collections, and relevant recommendations.
- User-created boards and collections are first-class; avoid burying them behind metadata.
- Fast add, save state, source type, and useful contextual actions.
- Toggle to compact list for metadata-heavy work and batch operations.
- Filters and search should preserve the user's current context when practical.
- Empty states teach the first useful action; error states preserve retry and source URL.

**Hypothesis:** a hybrid of masonry plus curated shelves is more expressive and useful than either a uniform grid or a row of shelves alone. **Risk:** multiple navigation paradigms may increase cognitive load. **Test:** tasks involving finding a known item, exploring an unfamiliar topic, adding to a collection, and doing bulk cleanup.

### B. Think: board/canvas

**Job:** externalize thought and compare or connect resources spatially.

- Support a freeform canvas and structured/section-based layouts as explicit modes or layout tools.
- Board objects may be resource references, excerpts, images, notes, groups, and connectors.
- Dragging must be reversible; provide undo/redo and keyboard alternatives for important actions.
- Connectors attach to objects and update as objects move.
- Provide overview/minimap or fit-to-content when the canvas becomes large.
- Provide zoom controls and a reliable reset/fit action; do not rely only on trackpad gestures.
- Distinguish object selection, text editing, panning, and multi-selection. Avoid gesture conflicts.
- Support grouping and alignment as optional assistance rather than forcing every user into a grid.
- A board should not silently duplicate or mutate the original resource.

**Hypothesis:** a freeform surface plus optional structure accommodates both divergent thinking and later organization. **Risk:** canvas complexity, accessibility, and performance. **Test:** build a board from 10 resources, create groups, connect two ideas, rearrange a cluster, undo a mistake, and complete the same task without a mouse.

### C. Connect: knowledge graph

**Job:** explore relationships among resources and concepts without losing orientation.

- Graph should be clustered and navigable, not a giant hairball.
- Progressive disclosure: show a useful local neighborhood first; expand clusters on demand.
- Selecting a node should reveal why it is present and what connects it to the selected node.
- Differentiate user-authored links from inferred/suggested links.
- Inferred relationships need evidence and confidence explanation; provide dismiss/accept controls.
- Use filtering, search-to-focus, neighborhood expansion, and a way back to the previous focus.
- Always offer a list or detail alternative for users who cannot use spatial visualization.

**Hypothesis:** clustered graph plus evidence-backed edge inspection is more actionable than an all-nodes-at-once graph. **Risk:** relationship ambiguity and performance at scale. **Test:** trace a concept to supporting resources, identify an inferred edge, reject a false relationship, and recover from a disorienting navigation state.

### D. Research: read and synthesize

**Job:** understand sources, take notes, compare evidence, and produce trustworthy synthesis.

- Keep source content, user notes, and AI output visually distinct.
- Make citations actionable and specific enough to verify the claim (source and excerpt/page/time range where available).
- Expose agreement, disagreement, and missing evidence across sources.
- Preserve original resource identity and provenance.
- Offer focused reading and a wider research workspace without losing notes or source context.
- Display extraction limitations honestly; don't fabricate missing source content or imply full extraction where only metadata was captured.
- AI failure, partial evidence, and unsupported claims need explicit states.

**Hypothesis:** a calm source-first detail view with an optional research workspace will support both concentration and synthesis. **Risk:** split-pane layouts can become cramped and AI UI can overwhelm the source. **Test:** answer a question from multiple sources, inspect a citation, compare conflicting claims, and return to the original resource.

## 4. Interaction and motion system

Use Motion for React (formerly Framer Motion) only where coordinated transitions or gestures improve understanding. CSS transitions remain appropriate for simple hover/focus changes. Canvas and graph movement may require specialized rendering/interaction libraries; don't use a UI animation library as a substitute for a robust canvas model.

| Pattern | Purpose | Proposed behavior | Failure mode to avoid |
|---|---|---|---|
| Card to detail | Preserve identity and context | Shared-element transition where it aids continuity | Long animation that delays access or distorts image/text |
| Masonry reflow | Explain layout changes after filtering/sorting | Brief layout animation; stable keys | Cascading motion across a large library |
| Save/import feedback | Confirm action state | Immediate state change plus clear status | Animation suggesting success before persistence is confirmed |
| Drag/drop | Direct manipulation | Object follows pointer; clear drop target; undo | Drag-only interaction without keyboard alternative |
| Canvas connectors | Preserve spatial relationships | Update endpoints as nodes move | Lag, jitter, connector crossing that obscures content |
| Graph focus | Maintain orientation | Focus/expand local cluster; de-emphasize unrelated nodes | Automatic camera motion or excessive zoom |
| Dialog/drawer | Maintain context | Small, predictable transition and clear close behavior | Disorienting slide direction or trapped focus |
| Hover affordance | Reveal secondary actions | Subtle lift or reveal on pointer devices | Essential actions only available on hover |
| Delight | Reinforce a meaningful milestone | Short, optional microfeedback | Confetti/ambient animation for routine actions |

### Motion constraints

- Respect the OS reduced-motion preference by default. For substantial transforms, parallax, zooming, and large spatial movement, prefer opacity or a near-static state when reduction is requested.
- Do not auto-play attention-grabbing movement. Motion must not be the only signal of status.
- Keep interactions interruptible and responsive; don't hold input hostage while animation finishes.
- Use stable keys and measure actual performance with large libraries and canvases.
- Provide pointer, keyboard, and touch equivalents for important interactions.
- Use perspective tilt only as a limited experiment. Test its effect on perceived quality and usability; never require tilt to reveal content.
- Establish duration/easing tokens only after testing. A consistent motion language matters more than arbitrary claims that a particular duration is universally correct.

## 5. Accessibility and responsive behavior

Adopt WCAG 2.2 AA as the project baseline where the success criteria apply. This is a design and testing baseline, not a claim of formal conformance or certification.

Checklist:
- Contrast: 4.5:1 normal text; 3:1 large text; relevant non-text components/focus contrast as specified by WCAG.
- Keyboard: all functionality, including search, view switching, board actions, graph exploration, dialogs, and menus, can be operated without a pointer.
- Focus: visible, unobscured where required, and not represented only by a subtle color change.
- Target size: meet WCAG 2.2 target-size criteria or documented exceptions; aim for comfortable targets beyond the minimum where feasible.
- Non-color cues: statuses, categories, and selected nodes also use labels, shapes, icons, or text.
- Reflow and zoom: no loss of essential content at narrow viewports or enlarged text; wide canvases can scroll/zoom without breaking the surrounding app.
- Screen readers: meaningful names and roles for resource cards, drag handles, graph nodes, canvas controls, citation links, and status changes.
- Reduced motion: test with OS preference enabled, not just a manual in-app toggle.
- Focus management: dialogs, drawers, menus, and route changes must have sensible focus placement and restoration.
- Errors: explain what happened, preserve user input, and offer recovery.
- Mobile: don't shrink desktop canvas controls. Rework gestures, menus, and navigation for touch; support external keyboard where applicable.
- Test with representative assistive technologies and real keyboard-only use; automated scans are necessary but insufficient.

## 6. Interaction design on mobile

- Library: one-column or adaptive masonry based on available width; ensure card actions do not depend on hover.
- Shelves: horizontal scrolling with visible affordance and reasonable focus/scroll behavior; don't make all primary content horizontal.
- Resource detail: keep the primary source readable; use tabs or collapsible panels for notes/citations if space is limited.
- Board: prioritize select, move, pan, zoom, add, and inspect; offer an object/action menu for fine controls and avoid gesture conflicts.
- Graph: begin from a selected concept or search result, show a manageable neighborhood, and provide list fallback.
- Research: avoid forcing multiple narrow panes; use source/notes/citations as switchable panels or a responsive stacked layout.
- Test on actual small viewport sizes and touch input; desktop responsive emulation alone is not enough.

## 7. Motion, canvas, and graph technical boundaries

- Motion for React is suited to React UI transitions, shared layout transitions, gestures, and stateful interface animation.
- CSS is appropriate for simple hover, focus, and short opacity changes.
- A canvas or graph library should own spatial transforms, hit testing, pan/zoom, node/edge rendering, and large-graph performance where needed.
- Keep semantic resource data and graph/board presentation state separate. Canvas coordinates should not become the only record of a resource's organization.
- Avoid animating every node in a large graph on every update. Prefer focused/local transitions and test with representative scale.
- Add a global reduced-motion policy and specific exceptions for canvas/graph interactions.
- Motion does not guarantee a good interaction. Validate direct manipulation, focus, undo, touch, and performance.

## 8. Prototype and validation plan

### Test setup

Use identical realistic sample data across alternatives: books, articles, YouTube videos, GitHub repositories, screenshots, PDFs, and notes. Include long titles, missing thumbnails, duplicate URLs, failed extraction, private/unsupported sources, very long metadata, and empty collections.

### Tasks

1. Save a resource and understand whether it was captured successfully.
2. Find a known resource from a vague memory rather than an exact title.
3. Discover something useful in a topic with no predefined collection.
4. Add resources to a curated collection and reorder them.
5. Build a freeform board and then apply a structured layout.
6. Connect two ideas and inspect why the suggested relationship exists.
7. Ask a research question, inspect source evidence, and find a disagreement.
8. Complete core tasks with keyboard only, touch input, and reduced motion enabled.
9. Recover from a failed import, mistaken drag, or dismissed item.

### Measures

- Task completion rate and time to completion.
- Misclicks, backtracking, and requests for help.
- Resource recognition and correct retrieval.
- Capture comprehension: can the user distinguish saved, processing, partial, failed, and unsupported?
- Evidence verification: can the user navigate from an AI claim to its source?
- Accessibility blockers and reduced-motion defects.
- Subjective ratings for visual appeal, clarity, trust, and desire to return.
- Performance and layout stability with large collections.

Don't invent numerical acceptance thresholds after seeing results. Set them before each test based on task importance and baseline. If testing only with the product owner, label the outcome as preference feedback, not usability validation.

### Variant protocol

1. Compare three genuinely distinct art directions with the same information architecture and sample data.
2. First test static hierarchy and content recognition; then test interaction and motion.
3. Change one major variable at a time when possible; record confounds when it isn't.
4. Keep a record of what was changed and why, including rejected variants.
5. Re-test the leading direction on mobile, keyboard-only, reduced-motion, and dark mode.
6. Production UI remains blocked until the owner approves direction, core flows, and initial scope.

## 9. Decision log (initial)

| ID | Decision | Status | Rationale / evidence | Main risk | Next validation |
|---|---|---|---|---|---|
| VIS-001 | Treat color as semantic tokens, not scattered hex values | Proposed baseline | Supports consistent themes, state handling, and systematic contrast checking | Token system may be overengineered early | Implement a small semantic token set and validate representative states |
| VIS-002 | Compare warm editorial, expressive digital, and organic studio | Proposed | Distinct hypotheses for personality; current palette was unvalidated | Variants can differ in too many variables | Hold layout/content constant in first comparison |
| VIS-003 | Preserve resource artwork and useful aspect ratios in visual discovery | Hypothesis | Visual recognition is a core job; external artwork carries semantic information | Cropping can hide important content; irregular masonry complicates scanning | Test resource identification and browsing tasks |
| VIS-004 | Offer masonry plus compact list | Proposed | Browsing and bulk/metadata work are different jobs | View switching can fragment mental models | Test task success across both views |
| VIS-005 | Make shelves curated, not the only navigation | Proposed | Shelves support discovery but can hide content horizontally | Too many shelves increase scroll | Compare shelves with a direct collection index |
| VIS-006 | Support freeform and structured boards | Hypothesis | Balances divergent thinking and organization | Complex interaction model and accessibility cost | Prototype board tasks, undo, keyboard alternatives |
| VIS-007 | Cluster graph and expose evidence for inferred edges | Proposed | Reduces visual overload and makes relationships inspectable | Clusters can hide unexpected connections | Test local exploration and false-edge rejection |
| VIS-008 | Separate source, user notes, and AI synthesis visually | Proposed baseline | Prevents provenance confusion | Overly heavy labeling can clutter reading | Test citation inspection and source recall |
| VIS-009 | Use Motion for React for shared transitions and stateful UI motion | Proposed implementation direction | Official docs support layout/shared-element animation | Animation complexity/performance; not all motion belongs in React | Prototype one card-to-detail transition and measure reduced-motion behavior |
| VIS-010 | Respect reduced motion, keyboard, and non-color cues | Required baseline | W3C/Apple/Motion guidance; accessibility must not depend on aesthetic preference | Automated checks can miss real barriers | Manual test matrix plus automated scans |
| VIS-011 | Keep the visual prototype separate from production UI | Active constraint | No design direction approved; exploration should not commit production architecture | Prototype can be mistaken for production | Label prototype, document dependencies, keep production gate explicit |

## 10. Source register

Accessed 2026-10-11. Official docs are primary-source claims unless otherwise noted; they do not independently establish usability.

### Accessibility and standards

1. W3C, **Web Content Accessibility Guidelines (WCAG) 2.2** — https://www.w3.org/TR/WCAG22/  
   Supports normative accessibility requirements, including contrast, keyboard access, focus appearance, reflow, and target size.
2. W3C WAI, **What's New in WCAG 2.2** — https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/  
   Explains changes including focus appearance and target size.
3. W3C WAI, **Understanding Success Criterion 2.4.13: Focus Appearance** — https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html  
   Provides rationale and details for focus indicator area and contrast.
4. Apple, **Human Interface Guidelines: Motion** — https://developer.apple.com/design/human-interface-guidelines/motion/  
   Primary-source guidance: motion should be purposeful, optional, and consistent with gesture expectations.
5. Apple, **Human Interface Guidelines: Accessibility** — https://developer.apple.com/design/human-interface-guidelines/accessibility/  
   Primary-source guidance for assistive technology, comfort, and reduced-motion behavior.

### Motion implementation

6. Motion for React, **Accessibility** — https://motion.dev/docs/react-accessibility  
   Official implementation guidance for reduced motion; recommends replacing large transforms with opacity and disabling parallax where appropriate.
7. Motion for React, **useReducedMotion** — https://motion.dev/docs/react-use-reduced-motion  
   API behavior for responding to OS reduced-motion preferences.
8. Motion for React, **Layout animations** — https://motion.dev/docs/react-layout-animations  
   Official docs for layout and shared-element transitions via `layout` and `layoutId`.
9. Motion for React, **Motion component** — https://motion.dev/docs/react-motion-component  
   Official API for animation, variants, gestures, and layout.

### Product precedent (requires hands-on task-based validation)

10. Pinterest — https://www.pinterest.com/  
    Product precedent for visual discovery, collections, and image-led browsing. Its presence is not proof masonry is optimal for all Atlas tasks.
11. Heptabase — https://heptabase.com/  
    Product precedent for card-based spatial thinking and visual knowledge work.
12. Obsidian — https://obsidian.md/  
    Product precedent for local knowledge, Markdown-oriented workflows, and linked notes.
13. Craft — https://www.craft.do/  
    Product precedent for polished document-first workflows and visual hierarchy.
14. Figma — https://www.figma.com/  
    Product precedent for collaborative canvas and direct manipulation.
15. Framer — https://www.framer.com/  
    Product precedent for interaction polish and motion-rich web interfaces.
16. NotebookLM — https://notebooklm.google.com/  
    Product precedent for source-grounded research workflows; evaluate source traceability directly rather than relying on marketing claims.

### Limitations of this research

- Official documentation and product homepages are not a substitute for full, hands-on product teardown or independent user research.
- No controlled usability test has been run for Atlas's design variants as of this document.
- A deterministic static token audit now checks 30 core text pairs across three palettes and light/dark themes; all 30 currently pass the 4.5:1 target. This is not a full WCAG audit: focus/disabled/hover states, non-text contrast, artwork, actual rendered colors, zoom/reflow, and assistive-technology behavior still need verification.
- Performance, touch behavior, keyboard access, and reduced-motion behavior must be verified in an actual interactive prototype.
- Product-specific claims about current features should be rechecked during implementation because products change.

## Exit criteria before design approval

- [ ] Three visually distinct directions with the same core tasks and content.
- [x] Core text token pairs audited across three palettes and both themes (30/30 pass in static check); full component/state and non-text contrast audit remains open.
- [ ] Typography and density compared in library, board, graph, and reading contexts.
- [ ] Pinterest-like masonry and curated shelves tested against a compact list.
- [ ] Freeform and structured board interactions demonstrated.
- [ ] Graph exploration includes relationship evidence and a non-graph alternative.
- [ ] AI synthesis visually distinguishes claims, citations, notes, and uncertainty.
- [x] Isolated React prototype uses `motion/react` for layout and view transitions; CSS handles simple presentation. Canvas/graph-library choice remains open because this prototype is not a production architecture decision.
- [ ] Reduced-motion and keyboard paths are represented in the prototype; touch-device, screen-reader, responsive, loading, empty, error, and partial-extraction states still need browser/manual validation.
- [x] Known limitations and available static-audit results are documented; no controlled usability study or browser test run is claimed.
- [ ] Owner explicitly approves direction, core flow, and initial scope before production UI work.
