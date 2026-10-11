# UI/UX Research Plan and Agent-Ready Design Workflow

- **Status:** Planned; findings must be verified against current sources and experiments
- **Last updated:** 2026-10-11
- **Goal:** Develop a distinctive, highly usable Atlas interface and reviewable mockups before application implementation.

> **Tool directory:** Use [Design Engineer Toolkit](design-engineer-toolkit.md) as the curated workflow and candidate index for the supplied [Design Engineer Tools](https://designengineer.tools/) directory. The directory is not an adoption checklist; tool choices require a concrete task, license/security review, and evidence.

## Research outcomes

Research should produce:
1. A UI/UX principles brief translated into specific Atlas design rules.
2. A sourced UI reference board showing patterns worth borrowing and patterns to avoid.
3. A small evaluation of portable agent skills and design tools.
4. A design system proposal: typography, color, spacing, density, surfaces, icons, motion, responsive breakpoints, and states.
5. Two or three genuinely different visual directions.
6. A screen-flow prototype/mockup package for user review.
7. A reusable UI implementation/review checklist for coding agents.
8. A browser verification approach for responsive layouts, keyboard behavior, accessibility, and realistic data.

## Research workstreams

### A — Learn UX principles, not just aesthetics

Start with primary or high-signal material:
- Nielsen Norman Group: [10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) and [visibility of system status](https://www.nngroup.com/articles/visibility-system-status/).
- W3C: [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/).
- [Laws of UX](https://lawsofux.com/) as a memorable reference for cognitive and perception principles.
- The user's [hendurhance/ui-ux guide](https://github.com/hendurhance/ui-ux), which organizes learning resources by beginner, intermediate, and expert levels. Use it as an index and vet individual sources; do not read 2,000 lines end-to-end by default.

Evaluate a focused shortlist of books/resources:
- *Don't Make Me Think* — Steve Krug: usability, clarity, and reducing avoidable friction.
- *The Design of Everyday Things* — Don Norman: affordances, feedback, conceptual models, error prevention and recovery.
- *Refactoring UI* — Adam Wathan and Steve Schoger: practical visual hierarchy, spacing, typography, color, and component styling.
- *Designing Interfaces* — Jenifer Tidwell and colleagues: recurring interaction and UI patterns.
- *The Elements of Typographic Style* — Robert Bringhurst: typographic craft, if editorial reading becomes central.

Book selection is a working shortlist. Verify exact editions, availability, fit, and licensing before sourcing excerpts. We need actionable principles and experiments, not a giant reading backlog.

Translate principles into checks:
- Visible system status: users know when saving, parsing, exporting, or AI processing is happening.
- Recognition over recall: visible metadata, labels, recent items, source previews, and forgiving search.
- Consistency: one coherent vocabulary and interaction model across different media types.
- Error prevention and recovery: duplicate warnings, undo, retries, safe destructive actions.
- Progressive disclosure: expose power without showing every metadata field at once.
- Clear hierarchy: one dominant purpose per screen; use contrast, type, spacing, and layout intentionally.
- Accessible design: keyboard support, focus visibility, semantic structure, contrast, zoom and reduced-motion awareness.
- Content legibility: reading typography and long-form content must be treated as first-class UI.
- Trust: provenance and AI confidence/limitations should be visible where relevant.

### B — Inspect actual product interfaces

Use the product research plan to inspect Jeff, Karakeep, Linkwarden, Readeck, Obsidian, Zotero and selectively others. For each interface, capture:
- The user job and primary navigation.
- Information architecture and density.
- Search, filtering, sorting, and empty states.
- Resource cards, list rows, metadata hierarchy, and detail view.
- Capture and error states.
- Reading/annotation patterns, where present.
- Keyboard, responsive and accessibility behavior when testable.
- What to borrow, adapt, or avoid, and why.

Record evidence type, source, date, limitations, and confidence. Inspiration screenshots are references, not proof of usability.

### C — Evaluate agent-ready UI skills

Candidates for hands-on evaluation (do not install every skill):
- [Taste Skill](https://github.com/Leonxlnx/taste-skill) — strong visual-direction/taste workflow; documentation currently describes v2 as experimental, so pin/version and assess before adoption.
- [shadcn/ui Skills](https://ui.shadcn.com/docs/skills) — project-aware composition and correct use of installed components/patterns.
- [Frontend Design Skill by Junaid-PK](https://github.com/Junaid-PK/frontend-design-skill) — restrained SaaS UI design, hierarchy, copy, state completeness, responsive and accessibility considerations.
- [Frontend Agent Skills by hueyexe](https://github.com/hueyexe/frontend-agent-skills) — a multi-skill design/implementation approach; inspect individual scopes and overlap.
- [Frontend Design Pro](https://github.com/PGraeff/frontend-design-pro-agent-skill) — combined design, UI copy, accessibility, responsive and review concerns.
- [Frontend UI Engineering](https://github.com/lumpinif/frontend-ui-engineering) — maintainable frontend product engineering and review checks.
- Existing [gstack](https://github.com/garrytan/gstack) browser/design review workflows and previously shortlisted [Superpowers](https://github.com/obra/superpowers) should be assessed in the context of the whole engineering workflow, not assumed UI skills by themselves.

Evaluation criteria:
1. Compatible with the chosen coding agent(s) and project.
2. Clear, non-conflicting instructions and bounded scope.
3. Helps produce specific visual direction instead of generic templates.
4. Covers typography, spacing, hierarchy, copy, accessibility and non-happy paths.
5. Encourages simplification and avoids unnecessary components.
6. Provides reproducible review steps and useful artifacts.
7. License, maintenance, permissions, installation complexity and security risks.
8. Output quality on the same representative Atlas screen.

Experiment: give two or three candidates the same task and data set in separate branches/worktrees or clean test projects; one active writer per branch. Compare outputs with a fixed rubric and screenshots. Do not combine conflicting skills before seeing whether each independently helps.

### D — Design tools and component resources

Investigate tools by role; don't use every tool by default.

**Mockup/prototype authoring**
- [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/): official documentation describes reading design context and writing native canvas content from supported agent clients. Validate supported client, plan/seat limits, access and write capability before making it the assumed deliverable. If unavailable, use a standalone interactive prototype or static screen boards.
- Static reference boards or an interactive prototype if it gives faster review loops.
- A coded disposable prototype is allowed for design exploration only, but does not waive the user approval gate before the real application code.

**Implementation components**
- [shadcn/ui](https://ui.shadcn.com/) and its [skills](https://ui.shadcn.com/docs/skills) / [MCP documentation](https://ui.shadcn.com/docs/mcp): likely candidate for accessible, customizable primitives.
- Radix UI primitives where needed; avoid redundant abstraction layers.
- Tailwind CSS if it supports fast, consistent implementation.
- Lucide icons for a coherent icon vocabulary.
- Motion only where it communicates a meaningful state or transition.
- Explore React Bits and community registries as optional inspiration; review provenance, dependencies, license and quality before installing.
- Avoid uncurated copy/paste components and excessive animation.

**Browser validation**
- [Microsoft Playwright MCP](https://github.com/microsoft/playwright/tree/main): investigate for agent-driven browser actions and accessible snapshots.
- Normal Playwright tests and screenshot comparisons for deterministic regression coverage.
- Axe or equivalent accessibility checks plus manual keyboard walkthroughs; automated checks do not prove the interface is accessible.
- Test desktop and narrow viewports with long titles, missing covers, duplicate resources, broken links, large libraries, and partial imports.

**Potential UI inspiration sources**
- Actual applications under teardown; [Mobbin](https://mobbin.com/) for shipped app/site screens and flows if accessible; trusted design-system docs; well-crafted editorial/library/productivity interfaces. Track subscription/access constraints and cite individual references in our own board.
- Use Dribbble/Behance-style inspiration carefully: visual polish alone is not evidence of good interaction design.

### E — Establish the Atlas design system

Produce and review:
- Design direction and moodboard.
- Type scale and reading typography.
- Color tokens, contrast pairs, light/dark behavior.
- Spacing and layout grid.
- Density modes and grid/list patterns.
- Resource card and metadata hierarchy for book, article, PDF, video, social post, GitHub repo, and artifact.
- Buttons, menus, dialogs, inputs, filters, tabs, tooltips, status indicators.
- Empty, loading, error, retry, partial-success, undo, and destructive states.
- Responsive navigation and mobile capture/review behavior.
- Keyboard map, focus states, accessible names, and reduced-motion rules.

Favor a recognizable editorial identity with useful density. Do not assume that maximal minimalism, dark mode, gradients, glassmorphism, or a three-column card grid is automatically right.

## Mockup package and approval gate

Before production application code, present:

1. A concise product/UX design brief.
2. Two or three visual directions with rationale and trade-offs.
3. A reference board with annotated observations from real apps.
4. A proposed design token sheet and component patterns.
5. High-fidelity mockups of:
   - Home / Today
   - Mixed-media Library (grid and list)
   - Collection / shelf
   - Add resource and URL preview
   - Resource details / reading / notes
   - Search results
   - AI answer with visible citations and unsupported-content state
   - Settings/data portability
6. Important variants: empty library, missing cover, long title, extraction failure, duplicate URL, loading, and narrow viewport.
7. A representative journey: capture → browse → open → note → search → revisit.
8. A short review checklist and explicit list of open decisions.

The user reviews the design and requests changes. Revise until explicitly approved. No production application implementation until the chosen visual direction, core flow, MVP scope, and acceptance criteria are approved.

## Session template

- **Date / agent:** 
- **Question tested:**
- **Skill/tool version and license:**
- **Task prompt and representative data:**
- **Screenshots/artifacts:**
- **Usability/design rubric scores:**
- **Observed wins and regressions:**
- **Permissions/dependencies/security notes:**
- **Decision:** adopt / adapt / reject / defer
- **Next step:**
