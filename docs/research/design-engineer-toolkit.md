# Design Engineer Toolkit for Atlas

- **Status:** Curated working guide; tools are candidates, not automatically approved dependencies
- **Last updated:** 2026-10-11
- **Source index:** [Design Engineer Tools](https://designengineer.tools/)

## Operating rule

This directory is a discovery index, not a shopping list. Do not install, subscribe to, or learn every tool. Select the smallest set that creates the strongest design feedback loop. Before adoption, check current availability, pricing, permissions, license, data handling, maintenance, and compatibility.

Keep three things separate:
- **Inspiration:** examples that inform design decisions, not proof that a pattern is usable.
- **Design source of truth:** approved mockups, tokens, flows, and component rules.
- **Implementation and verification:** code, browser behavior, automated tests, and accessibility review.

No production application UI work starts until the user explicitly approves the Atlas mockup package and MVP scope.

## Recommended workflow

### 1. Research real interfaces with a question

**First shortlist**
- **Mobbin:** inspect real product screens and end-to-end flows, if access is available.
- **Godly, Saaspo, Minimal Gallery, Curated Design, Awwwards, Layers, Supahero:** explore visual direction and web craftsmanship selectively.
- **Cosmos, Pinterest, Same Energy, SearchSystem, SEESAW, SOOT SPIRAL, Rebrand:** gather and cluster references when useful.
- **60fps and Design Spells:** look for interaction and motion references.
- **Game UI Database, Interface In Game, HUDS+GUIS:** selective inspiration for unusual interactions or information density; do not let game aesthetics dictate a knowledge-library interface.
- **loadmo.re and Minimum:** inspect when examples address the screen under study.

For each reference, record its link/screenshot, date, user job, pattern observed, why it might help, what could fail for Atlas, and evidence type. Prefer shipped interfaces for behavior and curated galleries for visual inspiration. Do not collect references without a decision they inform.

Questions to guide browsing:
- How do mixed-media libraries stay legible without every card feeling identical?
- How do reading, metadata, annotations, and provenance coexist?
- How are saved, processing, partially extracted, failed, and retryable resources distinguished?
- How can dense search/filtering feel powerful without making browsing feel like an admin dashboard?
- How can privacy, export, and external AI processing be understandable?

### 2. Make the design artifact before implementation

- **Figma:** first candidate for the canonical design file, subject to access and workflow fit.
- **Penpot:** alternative to evaluate when open-source tooling or self-hosting matters.
- **Stitch by Google Labs:** candidate for rapid concepts; generated output remains exploratory until reviewed against the canonical design.
- **Framer:** useful for publishing or interaction experiments when needed, not automatically the product source of truth.
- **Paper and Rive:** specialist options, not baseline requirements.

Review package:
1. Concise design brief and annotated reference board.
2. Two or three distinct directions, not merely color variations.
3. Type, color, spacing, density, surface, icon, and motion tokens.
4. High-fidelity screens: Home/Today, Library grid/list, collection, capture/URL preview, resource detail/reader/notes, search, cited AI answer, privacy/export settings.
5. Empty, loading, duplicate, missing-cover, extraction-failure, partial-success, long-title, and narrow-viewport variants.
6. Capture → browse → open → annotate → search → revisit flow.
7. Explicit approval checklist and open decisions.

Static screen boards are acceptable if interactive prototyping would add overhead without answering a real question.

### 3. Use AI coding tools as controlled experiments

Candidates: **Claude Code, OpenAI Codex, Cursor, Cline, Windsurf, Zed, Bolt.new, and v0 by Vercel**. They overlap; Atlas does not need all of them.

- Choose one primary implementation agent/editor for a task. Revisit the choice based on evidence.
- Compare alternatives using the same brief, representative data, and acceptance criteria in isolated branches/worktrees.
- Never allow two agents to write to the same branch concurrently.
- Bolt.new and v0 are prototyping/generation candidates, not permission to bypass the approved design, security review, or tests.
- Review diffs, dependencies, permissions, and generated code. Agent confidence is not evidence of correctness.
- ChatGPT may support product reasoning, research synthesis, and review; use the selected coding agent for bounded implementation tasks.

Adopt a tool only when a representative task shows value in visual quality, correctness, accessibility, maintainability, reviewability, and setup cost.

### 4. Prefer one coherent component foundation

**Likely candidates**
- **shadcn/ui:** customizable component foundation and candidate for agent-aware composition.
- **21st.dev, Component Gallery, Fancy Components, Cursify:** discover ideas; review source, license, dependencies, accessibility, and maintenance before reuse.
- **React Bits and Motion Primitives:** optional inspiration for animation or distinctive interactions.
- **NumberFlow:** consider for meaningful numeric transitions, not decoration.
- **Framer University Resources:** learn techniques when relevant.

Do not combine multiple component libraries without a clear gap. Favor a consistent foundation, accessible primitives, restrained motion, and a small set of custom Atlas components. Avoid unreviewed copy/paste components.

### 5. Validate the real interface

Use **Playwright** (and Playwright MCP if it improves agent workflows) for repeatable browser tests and screenshots. Pair automation with keyboard walkthroughs and accessibility checks. A screenshot alone does not prove functionality or accessibility.

Minimum review matrix:
- Desktop and narrow viewport.
- Mouse and keyboard navigation, focus, dialogs, menus, and forms.
- Reduced-motion preference and readable contrast.
- Long titles, missing thumbnails, mixed source types, empty results, duplicate capture, partial extraction, retry, and network failure.
- Realistic populated library and empty states.
- Privacy boundaries: no cross-user resource, search result, file, note, export, or AI context leakage.

### 6. Use utilities to answer a specific question

- **Color.review and OKLCH Color Picker:** compare colors and build deliberate tokens; verify contrast independently.
- **Easing Editor, Easing Functions, Easing Gradients:** tune motion only when it clarifies state or hierarchy.
- **SVGOMG:** optimize SVG assets before committing them.
- **RegExr:** develop/test regular expressions for a concrete parsing task; do not substitute regex for a robust URL/content parser.
- **Ray.so:** create shareable code visuals for docs when useful.
- **ui.camera:** investigate when its current capabilities solve a specific capture/reference task.

### 7. Treat specialist tools as optional

- **Desktop productivity:** Claude Cowork, Deskflow, Granola, LocalSend, Raycast, Warp, Wispr Flow.
- **Video and capture:** DaVinci Resolve, LosslessCut, NVIDIA ShadowPlay, OBS Studio, OpenCut, Parsec, Recordly, Screen Studio, ShareX.
- **Whiteboards:** Excalidraw, FigJam, Miro, Muse, tldraw.
- **Organization/knowledge:** AFFiNE, Are.na, Eagle, Linear, Obsidian, Trello.
- **Fonts:** Best Free Fonts, Fonts In Use, Fontshare, Free Faces, UNCUT. Check font license, language coverage, legibility, and performance.
- **Visual/shader tools:** Bitspace, cables, Nodes, NodeToy, ShaderToy, TouchDesigner, Unicorn.studio.
- **Motion:** Cavalry, Jitter, Lottie Creator, Lottielab, Theatre.js.
- **Audio:** ElevenLabs, FMOD, Splice.
- **Volumetric/3D:** Depthkit, KIRI Engine, Luma AI, Polycam, RealityScan, SuperSplat Editor, Bezi, Blender, Houdini, Spline, Womp, gltfjsx, gltfpack, Needle Viewer.
- **Digital fashion:** CLO, Marvelous Designer, Style3D.
- **Research assistants:** ChatGPT, Google Gemini, NotebookLM. Verify claims and protect private data.
- **Browsers:** Arc, Brave, Firefox, Zen. Include a Chromium-based browser and an alternative engine in compatibility testing where practical.
- **Emoji:** MakeEmoji.

These are optional workflow tools, not Atlas runtime dependencies. Video tools may help record demos and bug reproductions; whiteboards can map flows; organization tools can support personal planning. Keep GitHub and committed docs as the project source of truth. 3D, volumetric, fashion, audio, and shader tools are out of current scope unless a specific product requirement emerges.

## Supplied directory map

This is a categorized map of the supplied Design Engineer Tools list, not a claim that each tool has been tested or endorsed.

| Category | Candidates | Intended use |
|---|---|---|
| Inspiration | 60fps, Awwwards, Cosmos, Curated Design, Design Spells, Godly, Layers, Minimal Gallery, Minimum, Mobbin, Pinterest, Rebrand, Saaspo, Same Energy, SearchSystem, SEESAW, SOOT SPIRAL, Supahero, loadmo.re | Reference research and visual comparison |
| Game/specialized UI | Game UI Database, HUDS+GUIS, Interface In Game | Selective interaction and density inspiration |
| AI coding/prototyping | Bolt.new, Claude Code, Cline, Cursor, OpenAI Codex, v0 by Vercel, Windsurf, Zed | Controlled prototyping and implementation comparison |
| Components | 21st.dev, Component Gallery, Cursify, Fancy Components, Framer University Resources, Motion Primitives, NumberFlow, React Bits, shadcn/ui | Component discovery and reviewed reuse |
| Web utilities | Color.review, Easing Editor, Easing Functions, Easing Gradients, OKLCH Color Picker, Ray.so, RegExr, SVGOMG, ui.camera | Specific color, motion, asset, regex, or capture tasks |
| Desktop utilities | Claude Cowork, Deskflow, Granola, LocalSend, Raycast, Warp, Wispr Flow | Optional developer workflow |
| Video/capture | DaVinci Resolve, LosslessCut, NVIDIA ShadowPlay, OBS Studio, OpenCut, Parsec, Recordly, Screen Studio, ShareX | Demos, recordings, and bug reproduction |
| Whiteboards | Excalidraw, FigJam, Miro, Muse, tldraw | Flows, concepts, architecture |
| Organization | AFFiNE, Are.na, Eagle, Linear, Obsidian, Trello | Optional planning/reference workflows |
| Fonts | Best Free Fonts, Fonts In Use, Fontshare, Free Faces, UNCUT | Typography research and licensed font selection |
| Visual/shader | Bitspace, cables, Nodes, NodeToy, ShaderToy, TouchDesigner, Unicorn.studio | Experimental visuals only if justified |
| Interface/prototyping | Figma, Framer, Paper, Penpot, Rive, Stitch by Google Labs | Design source, prototype, specialist interaction |
| Motion | Cavalry, Jitter, Lottie Creator, Lottielab, Theatre.js | Optional motion assets |
| Audio | ElevenLabs, FMOD, Splice | Not in the Atlas baseline |
| Volumetric/3D | Depthkit, KIRI Engine, Luma AI, Polycam, RealityScan, SuperSplat Editor, Bezi, Blender, Houdini, Spline, Womp, gltfjsx, gltfpack, Needle Viewer | Defer absent a product requirement |
| Digital fashion | CLO, Marvelous Designer, Style3D | Out of current scope |
| Research | ChatGPT, Google Gemini, NotebookLM | Research synthesis with verification |
| Browsers | Arc, Brave, Firefox, Zen | Personal workflow and browser checks |
| Emoji | MakeEmoji | Optional asset creation |

## Tool adoption scorecard

Score candidates from 1–5 and record evidence:
1. **Task fit:** solves a real Atlas problem.
2. **Output quality:** improves the same representative screen/workflow.
3. **Accessibility and state coverage:** supports keyboard, responsive layout, and failure states.
4. **Control and portability:** outputs can be reviewed, edited, versioned, and moved.
5. **Integration cost:** setup, subscription, context overhead, and friction.
6. **Trust:** license clarity, maintenance, permissions, privacy, and dependency safety.

Reject or defer tools that add more complexity than value.

## Initial shortlist to evaluate—not a final stack decision

- Research: Mobbin where accessible, a few visual galleries, and primary product documentation.
- Design: Figma as first candidate; Penpot as alternative.
- Implementation: one selected coding agent at a time.
- Components: shadcn/ui as first candidate; custom Atlas styling and reviewed additions.
- Validation: Playwright, accessibility checks, manual keyboard review, and desktop/narrow screenshots.
- Project knowledge: GitHub issues, PRs, and committed docs as canonical history; Obsidian may support personal thinking but does not replace repository decisions.

All choices remain subject to access, license, security, cost, and hands-on evaluation. This is a shortlist and process, not evidence that the tools have been installed or benchmarked.
