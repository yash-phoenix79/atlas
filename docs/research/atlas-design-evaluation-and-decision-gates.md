# Atlas design evaluation and decision gates

**Status:** planned evaluation protocol plus initial heuristic review. No participant study, browser automation, screen-reader session, or full WCAG audit is claimed by this document.  
**Updated:** 2026-10-11

## What exists now

- Product model and screen inventory: authored.
- Screen-to-journey coverage matrix: authored.
- Interaction-model research brief: authored.
- Connected multi-screen HTML prototype: authored.
- Design direction approval: **not granted**.
- Production UI authorization: **not granted**.
- Actual semantic search, backend persistence, authentication, import integrations and real AI: **not implemented by the prototype**.

## Evaluation layers (keep claims separate)

| Layer | Method | What it can establish | Current status |
|---|---|---|---|
| Product/flow coverage | Compare screen inventory and journey matrix against prototype | Missing routes, incomplete paths, absent error states | Initial review only; not exhaustive |
| Static source inspection | Inspect HTML/CSS/JS structure and links | Obvious markup, navigation and behavior risks | Prototype authored; automated lint not run |
| Automated browser tests | Playwright across journeys, viewports and themes | Reproducible behavior and regressions within tested scope | Not run for this HTML artifact |
| Accessibility automation | Automated DOM/contrast checks | Some detectable violations | Not run for this HTML artifact |
| Manual keyboard testing | Complete each journey without pointer | Focus order, operability, escape/recovery | Not run |
| Assistive technology | Screen reader and zoom/reflow tests | Naming, announcements, structure and practical usability | Not run |
| Responsive/touch testing | Real narrow viewport and touch device | Reflow, target sizes, board alternatives | CSS includes responsive rules; device behavior not verified |
| Heuristic review | Inspect against documented principles | Risks worth investigating | Initial hypotheses recorded below |
| Moderated task study | Representative users complete tasks without coaching | Observed usability issues and relative direction performance | Not run; requires participants |
| Production readiness | Security, data model, API, persistence, observability and tests | Operational readiness | Out of scope until direction/MVP approval |

## Initial heuristic risks to resolve before claiming validation

These are code/design review questions, not proven user failures:

1. **Interaction consistency:** several prototype controls intentionally show an explanatory toast instead of implementing the full capability. Before any user study, label these as preview-only or implement enough behavior that participants are not misled.
2. **Resource-detail navigation:** test whether back navigation preserves the prior search query, filter and scroll position. The current demo does not guarantee this.
3. **Board interaction:** the canvas is illustrative, not a true editable spatial surface. The next prototype iteration should include keyboard-accessible add, move, connect, undo and outline/list alternatives—or clearly scope those interactions out of the evaluated task.
4. **Search honesty:** visible local text matching must not be mistaken for semantic retrieval. The UI copy states the limitation; preserve that disclosure.
5. **Capture and durability:** newly captured records live in page memory and disappear on refresh. This must be disclosed during evaluation.
6. **Collection membership:** collection cards are representative samples rather than fully persisted membership views. Do not evaluate membership fidelity until behavior is implemented.
7. **Research provenance:** the synthesis is labeled illustrative. Claim-level citations and source passage inspection are requirements for a later functional prototype.
8. **Responsive graph/canvas:** confirm content remains understandable at mobile widths; provide non-spatial alternatives.
9. **Motion:** navigation uses smooth scrolling unless reduced motion is requested. Verify all movement respects user preferences in supported browsers.
10. **Theme and contrast:** a theme toggle exists, but no formal contrast, color-independence or focus-indicator audit has been run on this prototype.
11. **Semantics:** verify landmarks, heading hierarchy, button labels, focus management and dynamic announcements with keyboard and screen reader.
12. **Persistence of annotation and settings:** prototype controls are illustrative; do not imply durable storage.

## Comparative design architectures to prototype

Do not treat colors, fonts or border radius as separate product directions. The meaningful comparison is the organizing model. A first interactive comparison artifact now exists at [atlas-architecture-comparison-lab.html](../mockups/atlas-architecture-comparison-lab.html). It is still an untested prototype; the presence of clickable flows does not establish usability.

### A. Visual discovery library
- **Primary metaphor:** editorial visual library / masonry.
- **Best at:** browsing by visual recognition, exploratory discovery and fast scanning.
- **Trade-off:** metadata-heavy work, dense reading and very large libraries can become noisy.
- **Must test:** locate a saved item from a visual cue, switch to a compact view, filter mixed resource types.

### B. Spatial thinking workspace
- **Primary metaphor:** an infinite canvas with canonical resource cards.
- **Best at:** externalizing models, grouping ideas and making relationships visible.
- **Trade-off:** navigation, keyboard/touch accessibility, and board sprawl.
- **Must test:** create a three-source model using both spatial controls and a non-drag alternative; find the source behind a card.

### C. Research workbench
- **Primary metaphor:** source pane + structured synthesis pane + claim-level evidence inspector.
- **Best at:** careful reading, comparing sources and producing defensible outputs.
- **Trade-off:** heavier cognitive load and weaker casual discovery.
- **Must test:** answer a question from selected sources, inspect support for a claim, and export with source links.

### Shared product constraint
These are alternative *primary interaction architectures*, not three separate apps. All should use the same resource identity, search index, metadata, annotations, privacy model and portability contract. The eventual product may combine modes, but their task performance should be evaluated before deciding which is the default entry point.

## Comparative task protocol

Use the same seed library (mixed articles, notes, code, course, diagram, PDF/video placeholders) and the same prompts for every direction:

1. “You saved something about recovering ideas when you do not remember the title. Find it.”
2. “Capture this new resource without choosing a folder.”
3. “Connect three sources that explain the problem and the design principle.”
4. “Inspect what supports this claim and identify any uncertainty.”
5. “Take your saved items and annotations with you.”

Record per participant and per task:
- success without assistance;
- time and wrong turns (where measurable);
- recovery after an error;
- ability to complete using keyboard only;
- confidence in result relevance and source support;
- qualitative confusion, frustration and unexpected affordances.

Use a small formative round to discover issues, then iterate. Do not claim statistical superiority from a tiny sample. Record who participated, device/browser, tasks, observations, limitations and changes. Test keyboard and assistive technology separately from general preference ratings.

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

Before production UI coding, obtain explicit approval for:
1. Primary design architecture and visual identity.
2. First-release resource types and capture paths.
3. Search behavior and fallback when semantic infrastructure is unavailable.
4. Board/graph scope for the first release.
5. AI processing, privacy and source-provenance requirements.
6. Export/portability contract.
7. MVP journey acceptance criteria.

Until then, continue research and prototype iteration only. Do not merge the draft PR or silently treat a design hypothesis as a decision.
