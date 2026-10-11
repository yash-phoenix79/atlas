# Atlas Master Execution Roadmap

**Status:** proposed plan, not implementation authorization  
**Planning baseline:** 11 October 2026  
**Owner approval required:** architecture and MVP remain open. The light-first visual direction is approved, but this does not validate the product architecture.

## 1. Mission and product invariants

Atlas is a personal knowledge and research environment to capture useful resources, rediscover them, connect ideas, and turn evidence into understanding.

- **Library:** clean, compact, Pinterest-like visual discovery; search, filters, collections, and fast retrieval.
- **Whiteboard:** freeform spatial thinking plus structured organization.
- **Knowledge graph:** connected resources, meaningful relationships, visible clusters, navigation between local and global context.
- **Resource detail:** focused reading, annotations, source inspection, research workspace.
- **Capture/integrations:** universal capture, source adapters, Obsidian import/export, portability, explicit sync/conflict/deletion behavior.
- **Trust:** source provenance, honest AI output, clear persistence behavior, and user control over data.
- **Quality:** accessible and responsive workflows, not just attractive screenshots.

All modes must use one canonical resource identity and shared metadata. A resource must not become a duplicate merely because it appears in a collection, board, graph, or research dossier.

## 2. Operating rules

1. Research first; build to answer a question or validate a decision.
2. Prefer primary evidence: official docs, source code, release notes, issues, reproducible behavior, and user observation.
3. Label findings Observed, Verified, Primary-source claim, Secondary-source claim, Inference, Hypothesis, or Unknown.
4. Record alternatives, evidence for and against, cost, accessibility/privacy implications, reversibility, confidence, and owner approval for consequential decisions.
5. A non-working mock control cannot count as a user failure.
6. Never claim a test, audit, browser run, or user study passed unless it was actually performed; retain environment and results.
7. Reverse engineer only public or authorized surfaces. Respect licenses, terms, attribution, access controls, privacy, and rate limits. Never extract secrets or bypass authentication, paywalls, or technical protections.
8. Do not adopt every tool in the inspiration list. Select tools by task fit, output quality, accessibility, privacy, licensing, maintenance, cost, and portability.
9. Keep research/prototype work separate from production implementation approval.
10. Work in bounded sessions. A phase is complete only when its exit criteria are met.

## 3. Track map

| Track | Name | Purpose | Exit gate |
|---|---|---|---|
| T0 | Project control plane | Repository status, decision log, evidence register | One canonical roadmap and consistent approval records |
| T1 | Toolchain evaluation | Select minimal tools for design, code, motion, research, capture | Tool choices justified by real workflows |
| T2 | User jobs and product research | Define scenarios, priorities, success measures | Ranked jobs and testable hypotheses |
| T3 | Product/repository teardowns | Learn from mature products and open-source implementations | Evidence-backed comparison matrix |
| T4 | Agent skills and safe reverse engineering | Create repeatable, evidence-linked research workflows | Vetted skills and quality checks |
| T5 | Design system and UI experiments | Build genuinely distinct, coherent concepts | Browser-testable prototypes |
| T6 | Usability/accessibility/responsive validation | Find what works, not what looks good | Findings, fixes, architecture recommendation |
| T7 | MVP and architecture decision | Lock journeys, scope, requirements, and boundaries | Explicit owner-approved decision |
| T8 | Backend/data architecture research | Persistence, identity, search, sync, integrations | Data model, threat model, ADRs |
| T9 | AI-layer research | Use cases, retrieval, provenance, evaluation, privacy, cost | Measurable AI plan and quality thresholds |
| T10 | Production vertical slice | Implement and harden one end-to-end workflow | Agreed quality gates pass |

Discovery tracks may overlap, but approval gates cannot be skipped. Backend and AI research can start with bounded questions before MVP approval; production implementation cannot.

## 4. T0 — Project control plane

Tasks:
- [ ] Inventory current branches, open/merged PRs, prototypes, research docs, ADRs, scripts, and test infrastructure.
- [ ] Reconcile contradictory approval statements; identify the canonical decision record.
- [ ] Use consistent status labels: proposed, researching, prototype, needs validation, validated, approved, implemented, deferred, rejected.
- [ ] Maintain a decision log, evidence register, and session log.
- [ ] Separate completed work from assumptions and planned work.
- [ ] Record each session’s objective, artifacts changed, checks actually run, unresolved questions, and next action.

Deliverables: repository current-state inventory, decision/ADR index, evidence register, session template.

Exit: one source of truth; active tracks have a status, next action, and completion condition.

## 5. T1 — Toolchain evaluation

The supplied Design Engineer Tools list is a candidate pool, not a mandate to use everything.

### Inspiration and teardowns
Candidates: Awwwards, Cosmos, Mobbin, Layers, Pinterest, Godly, Saaspo, Minimal Gallery, Interface In Game, Game UI Database, Design Spells, Curated Design, SearchSystem, SEESAW, HUDS+GUIS, Supahero, Rebrand, Same Energy, Minimum, 60fps, loadmo.re.

- [ ] Define reference categories: library, reader, whiteboard, graph, capture, onboarding, search, responsive states, accessibility.
- [ ] Pick a small primary set for recurring study; use others only for targeted discovery.
- [ ] Record the exact screen/interaction and what it teaches Atlas.
- [ ] Do not copy distinctive visual expression, branding, or assets wholesale.

### AI coding and prototyping
Candidates: OpenAI Codex, Claude Code, Cursor, Windsurf, Cline, Zed, Bolt.new, v0 by Vercel, 21st.dev.

- [ ] Compare repository awareness, multi-file edits, test execution, browser workflows, context control, reviewability, privacy, cost, and Git integration.
- [ ] Run the same small, non-production task in at most two or three candidates.
- [ ] Measure correctness, reviewer corrections, test quality, iteration speed, and instruction adherence.
- [ ] Choose a primary coding agent/editor and at most one complementary tool.
- [ ] Define human review and prohibited autonomous actions, especially merging without explicit approval.

### Components and motion
Candidates: shadcn/ui, React Bits, Motion Primitives, 21st.dev, Fancy Components, Cursify, NumberFlow, Framer University Resources.

- [ ] Inventory required components: resource cards, search/command menu, filters, dialogs, reader, annotations, graph nodes/edges, evidence inspector, import states.
- [ ] Compare license, framework fit, accessibility, keyboard behavior, theme support, responsive behavior, dependency weight, maintenance, and customization.
- [ ] Separate inspiration from dependencies intended for production.

### Interface/design/prototyping
Candidates: Figma, Framer, Penpot, Paper, Rive, Stitch by Google Labs, tldraw, Excalidraw, FigJam, Miro, Muse.

- [ ] Choose a canonical source for tokens, flow diagrams, screen specs, and prototypes.
- [ ] Decide which tool handles static design, interactive prototype, spatial experiments, and architecture diagrams.
- [ ] Validate export formats and design-to-code handoff; avoid unsynchronized sources of truth.

### Utilities, typography, visuals, motion
Candidates: Color.review, OKLCH Color Picker, Easing Editor, Easing Functions, Easing Gradients, SVGOMG, RegExr, ui.camera, Fonts In Use, Fontshare, Best Free Fonts, UNCUT, Free Faces, Lottie Creator, Lottielab, Jitter, Cavalry, Theatre.js, Spline, ShaderToy, NodeToy, Unicorn.studio.

- [ ] Choose accessible contrast/color and font evaluation tools.
- [ ] Define motion principles and reduced-motion alternatives before adding decorative animation.
- [ ] Use complex 3D/visual tools only when a validated product job requires them.

### Capture, desktop, organization, research
Candidates: OBS Studio, Screen Studio, ShareX, DaVinci Resolve, LosslessCut, Raycast, Warp, Wispr Flow, LocalSend, Linear, Obsidian, AFFiNE, Are.na, Eagle, Trello, ChatGPT, Gemini, NotebookLM, Firefox, Brave, Zen, Arc.

- [ ] Select a reproducible screenshot/screen-recording workflow.
- [ ] Organize research notes, source links, tasks, decisions, and artifacts.
- [ ] Establish clean browser profiles for testing and cross-browser checks.
- [ ] Keep private or customer data out of unapproved AI services.

### Tool decision scorecard
Score serious candidates from 1–5 with evidence: task fit, output quality, accessibility, integration, reviewability, privacy, licensing, maintenance, cost/latency, portability, and lock-in.

Exit: a small justified stack, data/licensing risks reviewed, rejected options recorded. No tool is chosen only because it is popular.

## 6. T2 — User jobs and product research

- [ ] Define jobs without prescribing features: capture, retrieve, connect, read, synthesize, revisit, export.
- [ ] Define scenarios: quick capture, exploratory browsing, deliberate research, spatial synthesis, mobile review, migration/import.
- [ ] Define minimum resource metadata: URL, title, type, creator/source, captured date, tags, notes, annotations, relationships, provenance, content availability, processing status.
- [ ] Document failure cases: forgotten titles, duplicates, broken links, missing source context, import errors, sync conflicts, accidental deletion.
- [ ] Rank jobs by frequency, consequence, distinctiveness, and testability.
- [ ] Define measurable hypotheses for library, whiteboard, graph, reader, and capture.
- [ ] State MVP non-goals, privacy expectations, and assumptions requiring evidence.

Deliverables: ranked jobs, scenarios/journeys, acceptance criteria, assumption register.

Exit: every core feature maps to a user job and a measurable outcome.

## 7. T3 — Existing-project and competitor teardowns

Research product categories: visual libraries/bookmarks; spatial whiteboards; linked notes/knowledge graphs; research readers/citation tools/AI notebooks; read-it-later/universal capture; open-source PKM; import/export/sync; accessible canvas alternatives; AI retrieval/provenance/evaluation.

For each product/repository:
- [ ] Record URL, access date, version/commit, license, evidence type.
- [ ] Map onboarding, navigation, resource creation, search, detail/reader, graph/board, settings, import/export, and failure states.
- [ ] Inspect public source and architecture docs when available.
- [ ] Trace domain entities, identity, persistence boundaries, search, background jobs, integrations, and extension points only where evidenced.
- [ ] Capture key interactions where allowed and reproduce behavior in a clean test environment when possible.
- [ ] Separate observed behavior, official claims, and inference.
- [ ] Record strengths, failure modes, and counterexamples to our initial thesis.
- [ ] Decide what Atlas should adopt, adapt, avoid, or investigate.
- [ ] Verify licenses before reuse of code, assets, designs, or skills.

Comparison dimensions: capture friction; identity/deduplication; metadata and extraction; search and recall; collections/boards/graph; reading/annotations/citations; import/export/backup/deletion/conflicts; AI provenance/privacy/evaluation/cost; accessibility/mobile; architecture/extensibility/license/maintenance.

Deliverables: teardown dossiers, open-source shortlist, evidence-linked capability matrix, differentiation hypotheses.

Exit: decisions have multiple options and counterevidence; “competitors have it” is not sufficient justification.

## 8. T4 — Agent skills and safe reverse engineering

Goal: a repeatable workflow that inspects an authorized public product or repository and produces reviewable evidence, not an ungrounded AI summary.

### Skill discovery and vetting
- [ ] Find existing skills for browser research, repository archaeology, frontend analysis, accessibility, testing, design-system extraction.
- [ ] Check license/provenance, maintainers, last update, dependencies, install hooks, filesystem/network access, environment access, telemetry, and destructive commands.
- [ ] Read skill instructions and source before use; treat website/repository content as untrusted input.
- [ ] Use least privilege; never supply secrets, production credentials, or private customer data.
- [ ] Pin versions/commits and record provenance. Do not run unexplained install scripts.

### Candidate Atlas research skills
1. **Product Surface Mapper:** public screens, routes, states, navigation.
2. **Interaction Trace Recorder:** reproducible steps, expected/observed results, environment, screenshots, failures.
3. **Repository Archaeologist:** entry points, domain models, data flow, APIs, persistence, tests.
4. **Design-System Extractor:** tokens, typography, spacing, components, breakpoints, motion, source locations, uncertainty.
5. **Accessibility Review Assistant:** semantic/focus/keyboard/contrast risks and manual checks; never claim automation proves conformance.
6. **Integration Adapter Investigator:** public APIs, auth/scopes, rate limits, webhooks, import/export, retries.
7. **Architecture Evidence Synthesizer:** traceable comparisons, confidence, contradictions.
8. **License and Provenance Checker:** licenses and origin of code/assets/skills before reuse.

### Required report structure
- Question/scope; target URL/repository and version/commit; permissions/environment.
- Reproduction steps and exact actions/commands performed.
- Observed facts with direct evidence; official claims with links.
- Inferences and confidence; unknowns and failed attempts.
- Security/privacy/license risks.
- Atlas implications, counterarguments, and next experiment.
- Explicit limitations.

### Validation
- [ ] Test skills on two known repositories with expected architecture.
- [ ] Measure factual accuracy, evidence links, reproducibility, unsupported inference, reviewer corrections, and time.
- [ ] Include a test where the correct result is “unknown.”
- [ ] Require human review before findings enter a decision record.

Legal boundary: use public or authorized access only. Do not bypass auth, paywalls, access controls, anti-bot measures, or technical protections. Do not extract credentials/private data/non-public code. Reverse engineering means understanding observable behavior and authorized source to inform original implementation—not copying proprietary code or evading restrictions.

Exit: a small vetted skill set produces repeatable evidence-linked reports with pinned versions and least privilege.

## 9. T5 — Design system and UI experiments

### Foundation
- [ ] Audit approved light-first reference and existing prototypes.
- [ ] Define semantic color tokens, contrast targets, typography, spacing, density, radii, elevation, focus, disabled, error, success, and loading states.
- [ ] Define responsive breakpoints from actual workflows.
- [ ] Define motion/easing tokens and reduced-motion behavior.
- [ ] Define iconography, resource-type cues, component states, and content rules.
- [ ] Separate visual inspiration from assets/dependencies intended for reuse.

### Three organizing models
Use the same resource dataset and task prompts for all variants.

**A. Visual Library**
- [ ] Compact and visual card views.
- [ ] Search, filters, sorting, collections, quick capture.
- [ ] Recognition cues and large-library behavior.
- [ ] Empty, no-results, loading, error, and duplicate states.

**B. Spatial Studio**
- [ ] Freeform and structured board modes.
- [ ] Cards reference canonical resources.
- [ ] Create, move, connect, group, zoom, undo, selection, outline/minimap.
- [ ] Keyboard and non-drag alternatives.
- [ ] Board-to-resource and board-to-graph navigation.

**C. Research Workbench**
- [ ] Source list, reader, notes/annotations, evidence inspector.
- [ ] Claim-to-source links, uncertainty labels, synthesis draft.
- [ ] Source provenance and export preview.
- [ ] Real traceable sample sources; never fabricate evidence.

### Cross-mode coherence
- [ ] Open the same resource from library, board, graph, and research.
- [ ] Keep metadata and annotations consistent.
- [ ] Define back navigation and restoration of query/filter/scroll state.
- [ ] Test deep links and browser history.
- [ ] Test import/error/recovery states.
- [ ] Label mocked capabilities and remove misleading controls.

Deliverables: token/component inventory, three browser-testable concepts, seed dataset, task script, interaction specs and limitations.

Exit: concepts differ in mental model, primary action, navigation, and workflow—not only style—and preserve shared resource identity.

## 10. T6 — Usability, accessibility, responsive validation

### Automated checks
- [ ] Run HTML/CSS/JS checks and unit tests where applicable.
- [ ] Run browser automation for primary journeys.
- [ ] Run accessibility automation (axe or equivalent) and record tool/version/results.
- [ ] Test supported viewports and themes.
- [ ] Add regression tests for discovered defects.

### Manual checks
- [ ] Keyboard-only journey for every primary task.
- [ ] Visible focus, logical order, no traps, correct focus return from dialogs.
- [ ] Screen-reader landmarks, names, announcements, and canvas/graph alternatives.
- [ ] Zoom/reflow, contrast, text scaling, reduced motion, target sizes.
- [ ] Touch behavior and mobile fallback for spatial interactions.
- [ ] Empty, error, offline, slow, duplicate, cancellation, and recovery paths.

### Task comparison
Use identical prompts:
1. Find a saved item from vague memory.
2. Capture a resource without choosing a folder.
3. Connect three sources around a concept.
4. Inspect support for a claim and identify uncertainty.
5. Export saved resources and annotations.

Record independent completion, wrong turns, recovery, confidence, keyboard completion, comparable time, facilitator intervention, device/browser, and feedback. Separate preference from task success. Treat missing prototype behavior as a prototype defect, not automatically an architecture defect.

Exit: findings have severity/evidence/reproduction/owner/retest; critical blockers are fixed or explicitly accepted with alternatives; recommendation records evidence for and against each option and confidence; owner approves before locking MVP.

## 11. T7 — MVP and architecture decision

Resolve:
- [ ] Primary entry point: library, board, graph, research, or a tested combination.
- [ ] MVP journeys and acceptance criteria.
- [ ] Resource types and universal capture surfaces.
- [ ] Priority integrations.
- [ ] Search requirements and degraded behavior.
- [ ] Board/graph scope and keyboard/mobile alternatives.
- [ ] Reading, annotations, citations, provenance.
- [ ] Import/export, backup, deletion, portability.
- [ ] AI use cases in/out of MVP.
- [ ] Privacy, retention, consent, data processing.
- [ ] Explicit non-goals.

Required artifacts: MVP scope, ADR with alternatives/trade-offs/risks/reversibility, journey acceptance criteria, requirements, owner approval.

Exit: explicit approval is recorded; visual approval is not treated as architecture approval; MVP is narrow enough to deliver end to end.

## 12. T8 — Backend and data architecture research (later)

Research before selecting infrastructure:
- [ ] Canonical resource schema and stable IDs.
- [ ] User/account ownership and authorization boundaries.
- [ ] Resource content vs metadata vs annotations vs relationships.
- [ ] Import, deduplication, URL canonicalization, extraction.
- [ ] Persistence and migrations.
- [ ] Search options: lexical, metadata, full text, semantic/vector, hybrid; ranking and freshness.
- [ ] Background jobs, retries, idempotency, rate limits, status.
- [ ] Sync, conflict resolution, deletion propagation, restore, offline.
- [ ] Integration auth/scopes, secret storage, token revocation, provider limits.
- [ ] Observability, audit events, backups, recovery, incident response.
- [ ] Threat model, data minimization, tenant isolation, encryption, retention, deletion.
- [ ] Cost, latency, operational burden, scaling, exit strategy.

Deliverables: data/lifecycle diagrams, API contracts, threat model, privacy data-flow map, persistence/search/integration comparison, migration/backup/sync plan.

Exit: architecture satisfies approved journeys and non-functional requirements; privacy/security/failure behavior explicit; choices supported by workload and cost assumptions.

## 13. T9 — AI-layer research and evaluation (later)

Candidate capabilities:
- [ ] Resource classification and metadata suggestions.
- [ ] Semantic/hybrid search and vague-memory retrieval.
- [ ] Related-resource recommendations.
- [ ] Suggested graph relationships with user confirmation.
- [ ] Source-grounded Q&A/synthesis with claim-level citations.
- [ ] Reading/annotation assistance.
- [ ] Research workflows preserving provenance and uncertainty.
- [ ] Agents for importing, organizing, and preparing research.
- [ ] Personalization and memory boundaries.

Evaluate:
- [ ] Exact user job and non-AI baseline.
- [ ] Retrieval recall/precision and ranking quality.
- [ ] Citation correctness, claim support, abstention with weak evidence.
- [ ] Test data strategy without leaking private or restricted content.
- [ ] Quality vs latency/cost/provider reliability.
- [ ] What data reaches each provider.
- [ ] User ability to inspect/edit/disable/delete/export AI output.
- [ ] Prompt injection from imported sources.
- [ ] Cross-user data leakage and unintended context use.
- [ ] Fallback when models fail or are unavailable.

Deliverables: ranked use-case matrix, evaluation dataset strategy, harness/threshold plan, provenance contract, privacy/threat/cost analysis, human-review/fallback behavior.

Exit: each capability has a measurable benefit and baseline; grounding, uncertainty, privacy, and failure behavior are defined.

## 14. T10 — Production vertical slice (only after approval)

- [ ] Choose one narrow high-value journey with acceptance criteria.
- [ ] Finalize design/behavior spec.
- [ ] Implement semantic, keyboard-accessible, responsive UI.
- [ ] Implement API and authorization boundaries.
- [ ] Implement persistence and migrations.
- [ ] Add validation, errors, loading, retries, and recovery.
- [ ] Add observability and privacy-safe diagnostics.
- [ ] Add unit/integration/browser tests.
- [ ] Add automated and manual accessibility checks.
- [ ] Run security and dependency/license review.
- [ ] Verify export/deletion behavior for the slice.
- [ ] Test failure paths and rollback/deployment plan.
- [ ] Obtain review and explicit approval before merge/release.

Exit: agreed acceptance criteria pass reproducibly; security/privacy/accessibility/observability gates pass; limitations and operational ownership documented.

## 15. Session-by-session sequence

| Session | Focus | Output | Stop condition |
|---|---|---|---|
| 1 | Project control plane | Current-state inventory, roadmap, decision log | Approval/status conflicts identified |
| 2 | Toolchain shortlist | Scorecard and small tool trial plan | Every candidate maps to a job |
| 3 | User jobs | Ranked jobs and measurable hypotheses | Product questions are testable |
| 4 | Teardown shortlist | Products/repos with URLs, versions, licenses | Scope small enough for deep research |
| 5 | First teardown batch | Two or three detailed reports | Facts separated from inference |
| 6 | Open-source architecture | Models/integrations/repo matrix | Candidates and risks understood |
| 7 | Skill vetting | Shortlist and permission model | No unreviewed skill execution |
| 8 | Research skill pilot | Repeatable evidence-linked teardown | Output quality checked against known facts |
| 9 | Design foundation | Tokens/component requirements/accessibility rules | Foundations explicit |
| 10 | Library concept | Testable library workflow | Core tasks work locally |
| 11 | Spatial concept | Testable board/graph workflow | Core operations and alternatives work |
| 12 | Research concept | Testable evidence workflow | Source provenance traceable |
| 13 | Validation | Automated results and manual checklist | Defects triaged |
| 14 | Comparative study | Findings and trade-off matrix | Recommendation with uncertainty |
| 15 | MVP decision | ADR, scope, acceptance criteria | Explicit owner approval |
| 16+ | Backend/AI and vertical slices | Based on approved MVP | Production gates enforced |

This is a sequence, not a deadline promise. Sessions may split; evidence may change the order. Do not try to complete all tracks in one day.

## 16. Session template

- **Session ID/date:**
- **Track/status:**
- **Decision/question and why it matters:**
- **Hypotheses:**
- **Inputs and source links:**
- **Planned actions / actions actually performed:**
- **Evidence and findings (fact vs inference):**
- **Trade-offs and counterevidence:**
- **Risks/unknowns:**
- **Artifacts changed:**
- **Checks run and results:**
- **Decision made or deferred:**
- **Approval required from:**
- **Next smallest useful action:**

## 17. Definition of done for planning

- [ ] User jobs and MVP journeys are ranked and measurable.
- [ ] Toolchain choices have evidence and licensing/data checks.
- [ ] Existing products and repositories are inspected with a repeatable protocol.
- [ ] Agent skills are vetted and output quality tested.
- [ ] UI concepts are meaningfully different and browser-testable.
- [ ] Automated checks, manual accessibility/responsive review, and task testing have recorded results.
- [ ] Trade-offs and unresolved uncertainties are explicit.
- [ ] MVP, data/privacy/security, integrations, and AI boundaries are documented.
- [ ] Owner explicitly approves architecture and MVP.
- [ ] Delivery plan has dependencies and acceptance criteria.

**Current state:** this roadmap is a planning artifact. It does not claim the tracks have been executed or the architecture validated.
