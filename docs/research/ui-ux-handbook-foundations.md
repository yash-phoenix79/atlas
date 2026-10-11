# Atlas UI/UX Handbook — Foundations

- **Status:** Research foundation; principles are not product-validated until tested against Atlas workflows.
- **Version:** 0.1
- **Research date:** 2026-10-11
- **Scope:** First-principles foundations, cognitive/interaction models, decision rules, and an Atlas-specific validation framework.
- **Companion documents:** [UI/UX research plan](ui-ux-research-plan.md), [research methodology](research-methodology.md), [competitor discovery dossier](competitor-discovery-dossier.md), [product requirements registry](../product/requirements-use-case-registry.md).
- **Important limitation:** This is a sourced desk-research synthesis. It is not a substitute for hands-on competitor testing or usability studies with representative users. Do not mark hypotheses as validated because they appear in this document.

## 1. Purpose and governing thesis

UI/UX is the design of the relationship between a person, their goal, and a system. The goal is not merely to make a screen attractive or a workflow short. A strong experience helps a person achieve the intended outcome accurately, confidently, efficiently, accessibly, and with appropriate control.

For Atlas, this yields a product-specific thesis:

> Atlas should feel like an inviting, tactile place to explore a personal knowledge collection, while behaving like a fast, predictable instrument for capturing, finding, understanding, and reusing information.

These two modes are complementary, not competing requirements. Immersion is valuable during exploration; speed and legibility dominate retrieval and focused work. Users should be able to move between the modes without learning different product logic.

### 1.1 Quality dimensions that must not be collapsed

Evaluate the following separately; excellence in one does not compensate for failure in another.

1. **Utility:** Does the product support a real user goal?
2. **Usability:** Can people understand and complete the task?
3. **Findability:** Can they locate information when needed?
4. **Accessibility:** Can people with different abilities and input modes use it?
5. **Desirability:** Does the experience have an appealing and coherent character?
6. **Trust and control:** Are actions, data handling, limitations, and consequences understandable?
7. **Reliability:** Does the interface accurately reflect what the system has and has not done?
8. **Performance:** Does it respond within a time appropriate to the task and communicate delays?
9. **Learnability:** Can a new user start successfully and a returning user resume efficiently?
10. **Ethical behavior:** Does the product help users achieve their goals rather than manipulate them into engagement?

## 2. A first-principles model of interaction

A person starts with a goal and an incomplete understanding of the system. The interface must help them choose an action, perform it, understand the resulting state, and judge whether the goal was achieved.

A useful simplified loop is:

1. **Goal:** What outcome do I want?
2. **Interpretation:** Where in this product can I do that?
3. **Action selection:** What should I do next?
4. **Execution:** Can I perform the action with my current device and abilities?
5. **System response:** What actually happened?
6. **Interpretation of response:** Can I tell what happened and what it means?
7. **Evaluation:** Did this move me toward my goal? If not, how do I recover?

A design can fail at every stage. A beautiful button may be hard to identify (interpretation); a tiny target may be hard to activate (execution); a silent asynchronous task may appear broken (response); a misleading success message may hide data loss (evaluation).

**Design implication:** For every critical workflow, document the user's goal, available actions, system states, feedback, failure paths, and recovery path—not just the happy-path screen.

## 3. Core principles and their mechanisms

### 3.1 Start with the user outcome

**Mechanism:** Features describe system capabilities; user goals describe the progress people seek. Designing around features can produce interfaces full of controls without a coherent task flow.

**Questions**
- What situation causes someone to open Atlas?
- What does success look like from their perspective?
- What do they currently do instead?
- What is the cost of failure or delay?
- How often does this task occur, and under what conditions?

**Atlas application:** “Display saved resources” is a feature. “Recover the article I saved months ago when I remember only its topic” is a job. The latter drives metadata, search, filters, preview content, and result ranking.

**Failure mode:** Assuming the product's feature inventory is a proxy for user value.

**Validation:** Give users a realistic task without explaining which feature to use. Observe completion, hesitation, workarounds, and errors.

### 3.2 Reduce avoidable cognitive work

**Mechanism:** People have limited attention and working-memory capacity. Interfaces impose costs through remembering, interpreting, comparing, deciding, and switching context. The goal is not to remove all thought; it is to spend thought on the user's task rather than on operating the software.

**Useful tactics**
- Keep labels and interaction rules consistent.
- Externalize useful state: show applied filters, selected collection, save status, and source.
- Group related information.
- Use sensible defaults and disclose advanced choices when needed.
- Avoid duplicating content or controls that compete for attention.
- Preserve context when opening details or returning to results.

**Atlas application:** Search results should preserve the query and filters when a user opens a resource and returns. Users should not need to remember which filter combination produced an item.

**Counterexample:** Hiding all advanced controls can reduce visible complexity but make powerful features impossible to discover. Progressive disclosure must preserve discoverability.

**Validation:** Observe task errors, backtracking, repeated opening of the same items, and user requests for clarification. Do not use screen minimalism as a proxy for low cognitive load.

### 3.3 Make possibilities and next actions discoverable

**Mechanism:** People infer what is possible from visual cues, labels, conventions, and prior experience. An affordance is a possible action relationship; a signifier is a cue that communicates where/how to act. These are related but not interchangeable.

**Rules**
- Clickable elements should look and behave consistently.
- Use explicit labels for unfamiliar or high-consequence actions.
- Use familiar platform conventions unless a tested alternative clearly improves outcomes.
- Do not make hover the sole path to an important action.
- Keep keyboard focus and touch interaction equivalent to pointer interaction.

**Atlas application:** A resource card may have a clear primary action to open details and a restrained contextual menu for secondary actions. If “add to collection” appears only after mouse hover, touch and keyboard users need another equally discoverable route.

**Failure mode:** Relying on visual cleverness to communicate function.

**Validation:** First-time users should be able to identify the primary action without a tutorial. Test keyboard-only operation as well as pointer use.

### 3.4 Provide feedback and make state legible

**Mechanism:** Actions create expectations. Feedback lets the person compare the expected and actual result, maintain control, and decide what to do next.

**Required state design**
- Idle/ready
- In progress
- Success/complete
- Partial success
- Failure
- Retry or recovery
- Offline/permission/unsupported state where relevant

**Atlas application:** Capturing a URL should distinguish at least: resource record saved, metadata available, extraction pending, extraction complete, and extraction failed. These are separate facts. Do not show “Saved successfully” as though full extraction has also succeeded.

**Failure mode:** An interface that is visually polished in the success state but vague or absent during latency and failure.

**Validation:** Inject realistic delays, network failures, malformed URLs, unsupported sources, and extraction errors. Check that the user knows whether the original is safe, what failed, and what options remain.

### 3.5 Prevent errors; make recovery proportionate

**Mechanism:** People make slips, misunderstand labels, and operate under time pressure. Prevention is often cheaper than recovery, but excessive confirmation creates friction and habituation.

**Rules**
- Prevent invalid states when possible.
- Make destructive actions distinguishable from routine actions.
- Use undo for reversible changes.
- Confirm irreversible actions when the consequence warrants it.
- Explain what will be removed and from where.
- Preserve original user content when derived processing fails.

**Atlas application:** “Remove from collection” must not be confused with “delete resource.” Permanent deletion should state its scope and consequences. Export/restore should be tested, not merely described in the UI.

**Validation:** Test wrong-target selection, duplicate capture, accidental removal, cancellation, and recovery after interrupted operations.

### 3.6 Use hierarchy to support scanning

**Mechanism:** Users usually scan an interface before reading every word. Visual weight, alignment, grouping, typography, contrast, and spacing establish an order of attention.

**Rules**
- Give each screen a clear primary purpose.
- Establish a deliberate primary, secondary, and tertiary hierarchy.
- Use spacing and grouping to show relationships.
- Keep text readable at realistic viewport sizes.
- Use contrast to communicate importance, not just to decorate.
- Make visual consistency systematic rather than making every component identical.

**Atlas application:** Resource title and recognizable preview lead; source type and status are easy to identify; date and low-value metadata remain subordinate. A text-heavy PDF and an image-led inspiration item need different preview strategies inside the same visual system.

**Failure mode:** Dense cards with too many badges, equal-weight metadata, or oversized artwork that pushes the title out of view.

**Validation:** Run a short scanning task: ask a participant to locate a particular item or distinguish resource types. Observe what they notice without prompting.

### 3.7 Design for recognition and retrieval, not perfect memory

**Mechanism:** Recognition can be easier than recalling arbitrary labels or folder paths. Retrieval also depends on the clues people retain: topic, source, approximate date, visual appearance, author, or a fragment of text.

**Rules**
- Preserve original title, source URL, type, and meaningful metadata.
- Make full-text search and filters complementary rather than competing.
- Support imperfect queries and useful recovery from zero results.
- Keep the user's organization visible without making it the only route to content.
- Provide recognizable previews where reliable and useful.
- Let users correct metadata and add their own notes.

**Atlas application:** Someone may remember a YouTube thumbnail or that a GitHub repository was about “agent memory,” not the exact title. Search should use available extracted text and metadata while clearly indicating when content was not indexed.

**Failure mode:** A beautiful card grid that is enjoyable to browse but poor at recovering an item in a large library.

**Validation:** Test delayed retrieval with tasks using different memory cues: title fragment, topic, source, resource type, date, and visual memory.

### 3.8 Reduce choice cost without erasing capability

**Mechanism:** More visible choices can increase decision effort, but fewer choices can also hide useful capabilities and create extra navigation. The correct structure depends on frequency, consequence, familiarity, and task context.

**Rules**
- Identify the primary action for each context.
- Keep frequent actions close to the content they affect.
- Group related secondary actions.
- Use defaults for common cases and allow override.
- Avoid a permanent toolbar containing every possible action.
- Do not hide essential controls behind unexplained icons.

**Atlas application:** The library surface prioritizes capture, search, browse, and open. The detail surface can expose notes, source, export, collections, and AI-assisted actions. Destructive and privacy-sensitive actions should not be visually adjacent to routine actions without distinction.

**Failure mode:** “Minimalism” that creates mystery, or “power” that turns every card into a dashboard.

**Validation:** Measure completion and discoverability of both frequent and less frequent actions.

### 3.9 Make interaction costs explicit

**Mechanism:** Task cost includes clicks, pointer travel, waiting, typing, remembering, uncertainty, error recovery, and context switching. Click count alone is an inadequate metric.

**Rules**
- Optimize frequent workflows first.
- Avoid repeated data entry.
- Use paste, keyboard shortcuts, and batch operations where they solve real needs.
- Preserve context across navigation.
- Use asynchronous processing when it improves responsiveness, with honest status.
- Do not accelerate a destructive action at the expense of safety.

**Atlas application:** Paste a URL and create the resource record immediately; enrich it in the background. Provide an efficient keyboard path for frequent capture/search tasks, but do not require memorizing shortcuts.

**Validation:** Measure end-to-end task time, completion, errors, and recovery—not just the number of clicks.

### 3.10 Treat trust as an interaction property

**Mechanism:** Trust grows when behavior matches expectations and claims are verifiable. It is damaged by silent failure, surprising data use, ambiguous AI output, or false certainty.

**Rules**
- State what is saved, extracted, indexed, uploaded, or shared.
- Make external processing and privacy consequences understandable.
- Show provenance for AI-derived content.
- Separate system facts from guesses and recommendations.
- Keep user control over export, deletion, and sharing.
- Do not claim a backup or restore capability without tested evidence.

**Atlas application:** An AI answer should link back to the sources that support it and acknowledge gaps. A failed extraction must not imply that the original file is lost. A personal library should default to private access and clearly explain when content is sent to an external model.

**Validation:** Ask users to explain, in their own words, where their content is stored, who can access it, and what an AI action will do. Misunderstanding is a design defect even when a policy page technically discloses the answer.

## 4. Foundational models: appropriate use and limits

### 4.1 Norman's action cycle

Use the gulfs of execution and evaluation as diagnostic questions:
- **Execution:** Can the person determine what action will achieve their goal and how to perform it?
- **Evaluation:** Can they perceive and interpret the resulting system state?

This is a conceptual model, not a numeric usability score. Use it to locate design gaps, then validate them in task testing.

Source: Don Norman, [jnd.org](https://jnd.org/); *The Design of Everyday Things*.

### 4.2 Nielsen's usability heuristics

The ten heuristics—visibility of system status, match between system and real world, user control and freedom, consistency and standards, error prevention, recognition rather than recall, flexibility and efficiency, aesthetic/minimalist design, error recovery, and help/documentation—are useful for expert inspection.

They are **heuristics**, not a guarantee of usability. A screen can pass a heuristic checklist and still fail a real user's task.

Source: [Nielsen Norman Group — 10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

### 4.3 Fitts's law

Fitts's law models pointing time as a function of target distance and target width under specified conditions. It helps reason about target size and placement, especially for frequent controls. It does not justify making every control enormous or ignoring screen density, accessibility, and target competition.

Atlas hypothesis: capture, search, close, and primary resource actions should be easy to target at common desktop and touch viewport sizes. Verify against WCAG target-size criteria and real-device testing rather than choosing dimensions from Fitts's law alone.

### 4.4 Hick–Hyman law

This model relates choice reaction time to the information/uncertainty among alternatives under experimental assumptions. It is not a universal equation for interface complexity: choices differ in familiarity, grouping, consequences, and user intent.

Atlas hypothesis: separate the primary action from contextual secondary actions. Test whether users can find less-frequent actions rather than assuming fewer visible controls are always better.

### 4.5 Gestalt grouping

Proximity, similarity, continuity, common region, and related perceptual principles help explain how users infer relationships. Use them to establish hierarchy and group controls, but do not let visual grouping contradict semantic or keyboard order.

Atlas hypothesis: use consistent card anatomy and clear collection grouping while allowing resource-specific previews. Validate with scanning tasks and accessibility inspection.

### 4.6 Recognition over recall

Showing titles, sources, applied filters, and previous context reduces memory demands. But displaying every possible clue creates clutter. The task is to surface the most useful recognition cues at the right moment.

Atlas hypothesis: show a compact, high-signal set of card metadata; offer richer metadata on the detail page and through filters/search.

## 5. Atlas-specific design laws (provisional)

These are proposed product rules, not yet empirically validated.

1. **Retrieval before spectacle:** a user must be able to find a resource efficiently without interacting with animation.
2. **Original before derivative:** summaries, extracted text, and thumbnails never silently replace the original URL or file.
3. **Truthful status:** capture, extraction, indexing, AI generation, export, and backup are distinct states.
4. **Progressive capability:** common actions are obvious; advanced power is contextual and discoverable.
5. **One system, many resource types:** articles, PDFs, books, videos, repositories, images, and notes may have different previews but consistent navigation and action semantics.
6. **Motion is optional:** no essential information or action depends on hover, parallax, or animation.
7. **Private by default:** sharing and external AI processing are explicit, understandable choices.
8. **Reversibility where possible:** routine organization is recoverable; permanent deletion is explicit.
9. **Source provenance travels with knowledge:** AI answers and derived notes retain links to supporting sources.
10. **Portable knowledge:** users can export original resources and user-created notes in a documented, usable format.
11. **Calm interface, expansive capability:** keep the main surface uncluttered without sacrificing advanced workflows.
12. **Evidence beats taste:** retain a design decision when it has a clear rationale and performs well in tests; revise it when evidence contradicts it.

## 6. The design decision record

For every consequential UI decision, record:

- **Decision question:** What are we choosing?
- **User/task context:** Which user and workflow does it affect?
- **Options:** Include at least one plausible alternative.
- **Evidence:** Source links, observation, prototype result, or explicit absence of evidence.
- **Trade-offs:** Usability, accessibility, visual character, performance, implementation cost, privacy, and reliability.
- **Decision and rationale:** What we choose and why.
- **Confidence:** High / medium / low, with reason.
- **Validation plan:** What result would change our mind?
- **Status:** Hypothesis / tested / accepted / superseded.

Avoid false precision. A subjective 4.7/5 design score without a defined rubric and reliable evaluation is not evidence.

## 7. How to validate the interface

### 7.1 Use task-based usability testing

Use representative participants and realistic tasks. Ask them to think aloud where appropriate, but prioritize observing what they do. Do not lead them to the intended control or treat stated preference as task success.

Initial Atlas tasks:
1. Capture an article URL and determine whether the original is safely saved.
2. Import a PDF whose text extraction fails; recover and understand the status.
3. Find a resource from a vague memory of its topic and source.
4. Narrow a large library with filters and understand which filters are active.
5. Open a resource, add a note, and return to the same search context.
6. Ask an AI question and trace a claim back to a supporting source.
7. Remove a resource from one collection without deleting it globally.
8. Export the library and explain what is included.
9. Use the library with keyboard only.
10. Use the interface with reduced motion enabled and on a touch viewport.

GOV.UK guidance recommends planning research around questions, using representative users, and iterating rather than treating research as a one-time event. Moderated testing commonly uses think-aloud observation to reveal comprehension and interaction problems:
- [User research introduction](https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design)
- [Moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing)
- [Planning user research](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service)

### 7.2 Measure more than task time

Track:
- Task completion and partial completion
- Critical errors and recovery success
- Time to successful completion
- Abandonment and backtracking
- Help required
- Confidence that the action succeeded
- Correct understanding of privacy and data state
- Keyboard and assistive-technology blockers
- Performance and animation discomfort where relevant

Use qualitative findings to explain why a metric changes. Small formative studies identify issues; they do not establish population-wide statistical claims.

### 7.3 Set initial gates, then calibrate

Before testing, define critical tasks and severity. A reasonable initial release gate is:
- No unresolved critical blocker in capture, retrieval, data deletion, export, or permission flows.
- Every tested participant can understand whether an original resource is saved, even if enrichment fails.
- No essential action requires hover or animation.
- Keyboard users can navigate, activate, and recover from the main workflows.
- Search results preserve context when opening and returning from a resource.
- The interface does not claim AI provenance or processing success it cannot demonstrate.

These are proposed acceptance criteria. Pilot them and adjust only with documented rationale; do not present them as existing test results.

## 8. Accessibility and motion baseline

Use the normative [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/) as a baseline, including keyboard operation, visible focus, contrast, reflow, target size, and accessible name/role/value requirements applicable to the implementation. WCAG conformance requires criterion-by-criterion evaluation; this handbook is not a conformance claim.

For Atlas motion:
- Default to restrained effects that preserve legibility.
- Do not use motion to conceal latency or imply fake progress.
- Ensure hover content is available by keyboard and touch.
- Respect operating-system reduced-motion preferences.
- Provide a static alternative to 3D tilt and parallax.
- Test low-power hardware and large collections; effects must not cause scroll jank.
- Avoid motion that causes focus loss or changes hit targets unexpectedly.

Useful sources:
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C Understanding WCAG](https://www.w3.org/WAI/WCAG22/Understanding/)
- [W3C reduced-motion technique](https://www.w3.org/WAI/WCAG21/Techniques/css/C39)

## 9. Research source register

Access date for this research pass: **2026-10-11**.

| Source | Source type | Appropriate use | Limitations |
|---|---|---|---|
| [Nielsen Norman Group — 10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) | Expert synthesis | Heuristic evaluation and common failure categories | Not a substitute for user testing or an exhaustive theory of UX |
| [Don Norman / jnd.org](https://jnd.org/) | Author's primary site | Conceptual models and human-centered design ideas | Individual claims may require the underlying book/paper for depth |
| [GOV.UK — user research introduction](https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design) | Public-sector research guidance | Research planning, inclusion, iteration, outcome focus | Context is public services; adapt rather than copy blindly |
| [GOV.UK — moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) | Research method guidance | Task observation and think-aloud sessions | Method must match question; not every study needs moderation |
| [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Normative standard | Accessibility conformance criteria | Compliance requires actual testing; a checklist alone is insufficient |
| [Baymard — product lists and filtering](https://baymard.com/research/ecommerce-product-lists) | Specialized UX research vendor | Hypotheses about scanning, filters, and result lists | E-commerce context; underlying premium research may not be fully public |
| [Baymard — search UX](https://baymard.com/research/ecommerce-search) | Specialized UX research vendor | Search suggestions, result layout, zero-results and filtering patterns | Transfer findings cautiously to a personal knowledge library |

### Evidence note

This chapter combines established guidance with product-specific hypotheses. It does not claim to have experimentally verified Atlas design choices, performed a hands-on competitor usability teardown, run accessibility tooling, or interviewed users. Those remain planned research tasks.

## 10. Next research chapters

1. **Interaction design deep dive:** action cycle, signifiers, affordances, mappings, constraints, state machines, error prevention and recovery.
2. **Visual perception and art direction:** Gestalt grouping, hierarchy, typography, color, whitespace, image composition, density, and coherent visual identity.
3. **Information architecture and retrieval:** taxonomy, metadata, full-text search, facets, query recovery, collections, and knowledge relationships.
4. **Immersive UI and motion:** tilt mechanics, parallax, transition continuity, reduced motion, rendering performance, and tactile feedback.
5. **Accessibility and responsive design:** WCAG mapping, keyboard flows, touch, screen readers, reflow, and assistive technology testing.
6. **Design systems and frontend verification:** tokens, components, states, responsive rules, browser testing, and visual regression.
7. **Competitive product teardowns:** hands-on task scripts for Raindrop, Cosmos, Are.na, Eagle, Obsidian, Karakeep, Linkwarden, Readeck, and selected visual-first tools.
8. **Research and evaluation:** interview protocols, prototype studies, task metrics, prioritization, experiment design, and decision records.
9. **Atlas visual directions:** three distinct mockup directions and consistent screen/state comparisons, followed by explicit owner approval before production UI coding.

## Definition of done for this handbook

- [x] First-principles model and core principles documented.
- [x] Established frameworks distinguished from Atlas hypotheses.
- [x] Research and accessibility sources linked.
- [x] Validation tasks and provisional release gates specified.
- [ ] Each research chapter completed to the same depth.
- [ ] Competitor observations reproduced and recorded.
- [ ] Atlas design laws validated with prototype tests.
- [ ] Visual directions and interaction prototypes reviewed by the owner.
