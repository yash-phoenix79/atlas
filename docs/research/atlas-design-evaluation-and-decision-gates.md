# Atlas design evaluation and decision gates

**Status:** evaluation plan with initial source-level review. No participant study, browser automation, screen-reader session, or full WCAG audit is claimed by this document.  
**Updated:** 2026-10-11

## Decision status — read this before implementation

Atlas has two separate decision axes; do not conflate them:

- **Visual language:** approved as light-first/content-led, as recorded in [the light-first design lock](../decisions/2026-10-11-light-first-design-lock.md).
- **Primary interaction architecture and MVP scope:** **not yet approved by this gate**. The visual-library, spatial-canvas and research-workbench concepts remain alternatives to evaluate. The owner has not approved this comparison as evidence of user preference or usability.

The visual lock authorizes using the approved mock as a visual reference for future work. It does not by itself select the default workflow, authorize merging PR #12, waive implementation/security/accessibility gates, or turn mock interactions into real product functionality. Until the product owner explicitly approves the architecture and MVP scope, keep work on PR #13 within research/prototype scope. This clarifies any broader wording elsewhere in this document: architecture selection remains open.

## What exists now

- Product model and screen inventory: authored.
- Screen-to-journey coverage matrix: authored.
- Interaction-model research brief: authored.
- Connected multi-screen HTML prototype: authored.
- Light-first visual reference: approved by owner; not evidence of validated usability or accessibility.
- Architecture divergence lab: authored, with limited local illustrative interactions.
- Actual semantic search, backend persistence, authentication, import integrations and real AI: **not implemented by the prototypes**.

## Evaluation layers (keep claims separate)

| Layer | Method | What it can establish | Current status |
|---|---|---|---|
| Product/flow coverage | Compare screen inventory and journey matrix against prototype | Missing routes, incomplete paths, absent error states | Initial review only; not exhaustive |
| Static source inspection | Inspect HTML/CSS/JS structure and links | Obvious markup, navigation and behavior risks | Source artifacts inspected; a completed static check is not a browser test |
| Automated browser tests | Playwright across journeys, viewports and themes | Reproducible behavior and regressions within tested scope | Not run for the standalone architecture lab |
| Accessibility automation | Automated DOM/contrast checks | Some detectable violations | Not run for the architecture lab |
| Manual keyboard testing | Complete each journey without pointer | Focus order, operability, escape/recovery | Not run |
| Assistive technology | Screen reader and zoom/reflow tests | Naming, announcements, structure and practical usability | Not run |
| Responsive/touch testing | Real narrow viewport and touch device | Reflow, target sizes, board alternatives | CSS includes responsive rules; device behavior not verified |
| Heuristic review | Inspect against documented principles | Risks worth investigating | Initial hypotheses recorded below |
| Moderated task study | Representative users complete tasks without coaching | Observed usability issues and relative direction performance | Not run; requires participants |
| Production readiness | Security, data model, API, persistence, observability and tests | Operational readiness | Not assessed by these prototypes |

## Current honest interpretation of the architecture divergence lab

The artifact [atlas-architecture-divergence-lab.html](../mockups/atlas-architecture-divergence-lab.html) separates the default organizing models visually and structurally. It is a **concept comparison**, not yet a valid end-to-end usability benchmark. Its working and non-working areas must be stated plainly:

- The library's search matches visible sample text; it is not semantic retrieval. Quick capture modifies page memory only and is lost on refresh.
- The spatial sample has positioned cards and illustrative lines, but lacks true pan/zoom, movable cards, editable connectors, relationship semantics, and robust undo/recovery. Some controls explicitly announce limitations instead of performing the implied action.
- The research sample contains fabricated passages and claims for layout demonstration. They are not quotations from verified sources. Source import, claim verification and persistence do not work.
- Therefore the prototype can elicit reactions to default layout and mental model, but **must not be scored as if the missing workflows had succeeded or failed**. For a fair task test, either implement sufficient task-complete interactions in all three variants or limit questions to concept comprehension and preference, clearly reporting those narrower results.

## Initial heuristic risks to resolve before claiming validation

These are source/design review questions, not proven user failures:

1. **Interaction consistency:** controls that do not perform their apparent action must be disabled or labeled as illustrative before testing. Avoid promising connect/export/save where those capabilities are not implemented.
2. **Resource-detail navigation:** test whether back navigation preserves prior search query, filters and scroll position. The current demos do not guarantee this.
3. **Spatial board:** before evaluating task success, implement keyboard-accessible add, move, connect, undo and outline/list alternatives—or remove task-completion claims for spatial operations.
4. **Search honesty:** local text matching must not be mistaken for semantic retrieval; keep the limitation adjacent to the search control.
5. **Capture and durability:** newly captured records live in page memory and disappear on refresh. Disclose this and do not describe them as durably saved.
6. **Collection membership:** collection cards may be representative samples rather than persisted membership views. Do not evaluate membership fidelity until implemented.
7. **Research provenance:** the synthesis is labeled illustrative. Claim-level citations and source passage inspection are requirements for any functional research prototype.
8. **Responsive graph/canvas:** confirm content remains understandable at mobile widths and provide non-spatial alternatives.
9. **Motion:** verify all movement respects reduced-motion preferences in supported browsers.
10. **Theme and contrast:** no formal contrast, color-independence or focus-indicator audit has been run on the architecture lab.
11. **Semantics:** verify landmarks, heading hierarchy, accessible names, focus management and dynamic announcements with keyboard and screen reader.
12. **Persistence:** do not imply durable storage for annotations, settings or boards until a real persistence layer is connected.

## Comparative design architectures to prototype

Do not treat colors, fonts or border radius as separate product directions. The meaningful comparison is the organizing model.

### A. Visual discovery library
- **Primary metaphor:** editorial visual library / masonry.
- **Best at:** browsing by visual recognition, exploratory discovery and fast scanning.
- **Trade-off:** metadata-heavy work, dense reading and very large libraries can become noisy.
- **Must test:** locate a saved item from a visual cue, switch to a compact view, filter mixed resource types.

### B. Spatial thinking workspace
- **Primary metaphor:** an infinite canvas with canonical resource cards.
- **Best at:** externalizing models, grouping ideas and making relationships visible.
- **Trade-off:** navigation, keyboard/touch accessibility, and board sprawl.
- **Must test:** create a three-source model using both spatial controls and a non-drag alternative; open a source from a card. Do not claim these tasks pass in the current concept.

### C. Research workbench
- **Primary metaphor:** source pane + structured synthesis pane + claim-level evidence inspector.
- **Best at:** careful reading, comparing sources and producing defensible outputs.
- **Trade-off:** heavier cognitive load and weaker casual discovery.
- **Must test:** answer a question from selected sources, inspect support for a claim, and export with source links. Use real, traceable sources before testing evidence-verification behavior.

### Shared product constraint

These are alternative **primary interaction architectures**, not three separate apps. All should use the same resource identity, metadata, annotations, privacy model and portability contract. The eventual product may combine modes, but task performance should be evaluated before choosing its default entry point.

## Comparative task protocol

Use the same seed library (mixed articles, notes, code, course, diagram and PDF/video placeholders) and the same prompts for every direction:

1. “You saved something about recovering ideas when you do not remember the title. Find it.”
2. “Capture this new resource without choosing a folder.”
3. “Connect three sources that explain the problem and the design principle.”
4. “Inspect what supports this claim and identify any uncertainty.”
5. “Take your saved items and annotations with you.”

Record per participant and task: independent completion, time where comparable, wrong turns, recovery, keyboard-only completion, confidence in relevance and source support, qualitative confusion, device/browser, and facilitator intervention. A missing prototype interaction is a prototype defect, not automatically an architecture defect.

Use formative testing to discover issues, then iterate. Do not claim statistical superiority from a small sample. Record negative and contradictory observations. Accessibility testing is a separate gate from preference interviews.

## Decision record template

For each consequential decision, record:
- **Decision/question**
- **Options considered**
- **Evidence for / evidence against**
- **User job and invariant affected**
- **Accessibility and responsive implications**
- **Security/privacy/data implications**
- **Cost and implementation complexity**
- **Reversibility**
- **Confidence and unknowns**
- **Decision owner and date**
- **Approval status**

## Approval gate

Before treating architecture and MVP as locked, obtain explicit owner approval for:
1. Primary interaction architecture and visual identity (visual identity is approved; the architecture is open).
2. First-release resource types and capture paths.
3. Search behavior and fallback when semantic infrastructure is unavailable.
4. Board/graph scope for the first release.
5. AI processing, privacy and source-provenance requirements.
6. Export/portability contract.
7. MVP journey acceptance criteria.

Until these decisions are explicitly made, continue research and prototype iteration. Do not merge PR #13 on the assumption that architecture validation is complete.
