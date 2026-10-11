# Atlas Documentation

The project is in discovery. Add documents as findings and decisions become concrete. This index points to canonical documents; avoid duplicating the same information across multiple files.

## Project governance

- [Project governance and repository standards](project-governance.md): target open-source project contract, contributor workflow, status vocabulary, and friend-onboarding release gate.
- [Decisions](decisions/): dated product and architecture decisions, including the [privacy/trust baseline](decisions/2026-10-11-privacy-trust-baseline.md), [open-source project and design tooling baseline](decisions/2026-10-11-open-source-project-baseline.md), [security-first decision](decisions/2026-10-11-security-first.md), and [production-readiness system decision](decisions/2026-10-11-production-readiness-system.md).

## Product

- [Product vision](product-vision.md): intended users, problems, product principles, and desired outcomes.
- [Product Requirements & Use-Case Registry](product/requirements-use-case-registry.md): canonical requirement IDs, original vs new ideas, acceptance criteria, priorities and phase gates.
- [Product feature blueprint](product-feature-blueprint.md): proposed feature map, prioritization hypothesis, screen inventory, and pre-code mockup approval gate.
- [Requirements](requirements.md): MVP scope and observable acceptance criteria.
- [Competitive analysis](competitive-analysis.md): cross-product comparison with sources and confidence.

## Research and design

- [Research index and plan](research/README.md): sourced research, app teardowns, experiments, and observations.
- [Competitor discovery dossier](research/competitor-discovery-dossier.md): initial landscape review, differentiation hypotheses, MVP implications, and UI/UX principles.
- [AI workflow research plan](research/ai-workflow-research-plan.md): compare AI patterns per task using quality, privacy, safety, cost and latency.
- [Gamification & learning-loop research](research/gamification-learning-loop-plan.md): evidence-led, opt-in learning mechanics and outcome measures.
- [Research methodology](research/research-methodology.md): repeatable source-first workflow for technical and product research.
- [Source quality rubric](research/source-quality-rubric.md): source tiers, confidence, freshness, and evidence standards.
- [Production engineering resources](research/production-engineering-resources.md): curated standards, tools, AI-agent guidance, and operational references.
- [UI/UX research plan](research/ui-ux-research-plan.md): UX principles, agent-ready UI skill evaluation, mockup plan, and approval gate.
- [Design synthesis: spatial library and connected knowledge](research/design-synthesis-spatial-library-connected-knowledge.md): owner taste signals, Heptabase/NotebookLM patterns, proposed resource/board/relationship model, three visual directions, and validation plan. Proposal only; no visual direction approved yet.
- [Screen inventory and visual design brief](research/screen-inventory-and-visual-design-brief.md): owner-confirmed screen map, semantic search, whiteboards/graph, AI research, insights/gamification, candidate typography/colors, motion/accessibility principles, and explicit mockup approval gate.
- [UI/UX Handbook — Foundations](research/ui-ux-handbook-foundations.md): first-principles models, core interaction/visual/retrieval principles, Atlas design laws, evidence limits, and validation tasks.
- [UI/UX Deep Dive 01 — Cognition, Attention, and Decision-Making](research/ui-ux-deep-dive-01-cognition-attention.md): visual search, attention, memory, cognitive effort, choice, information scent, and falsifiable Atlas experiments.
- [UI/UX Deep Dive 02 — Interaction Design, Feedback, and Error Recovery](research/ui-ux-deep-dive-02-interaction-design.md): affordances, interaction contracts, state transitions, error recovery, reversibility, microinteractions, and accessible motion.
- [UI/UX Deep Dive 03 — Visual Perception, Hierarchy, Typography, and Composition](research/ui-ux-deep-dive-03-visual-design.md): Gestalt grouping, visual hierarchy, type, color, density, resource previews, and experiments for Atlas's visual language.
- [UI/UX Deep Dive 04 — Information Architecture, Search, and Retrieval](research/ui-ux-deep-dive-04-information-architecture-search.md): collections, tags, metadata, indexing status, filters, ranking, result design, and retrieval experiments.
- [UI/UX Deep Dive 05 — Accessibility, Responsive Design, and Inclusive Interaction](research/ui-ux-deep-dive-05-accessibility-responsive.md): WCAG 2.2, keyboard, screen readers, contrast, reflow, touch, reduced motion, and proposed tests.
- [UI/UX Deep Dive 06 — Motion, 3D Cards, and Immersive Interaction](research/ui-ux-deep-dive-06-motion-immersive-ui.md): card tilt/parallax, motion hierarchy, performance, comfort, and a comparative prototype experiment.
- [UI/UX Deep Dive 07 — Design Systems, Components, and Frontend Verification](research/ui-ux-deep-dive-07-design-systems.md): semantic tokens, component contracts, resource card architecture, state matrices, and testing layers.
- [UI/UX Deep Dive 08 — User Research, Usability Testing, and Experimentation](research/ui-ux-deep-dive-08-user-research.md): method selection, interviews, task testing, bias mitigation, metrics, and research governance.
- [UI/UX Deep Dive 09 — Competitive Teardowns and Pattern Reverse Engineering](research/ui-ux-deep-dive-09-competitive-teardowns.md): repeatable competitor task scripts, evidence labels, pattern extraction, and transferability criteria.
- [UI/UX Deep Dive 10 — Product Experience Strategy, Delight, Motivation, and Ethics](research/ui-ux-deep-dive-10-experience-strategy.md): immersive vs retrieval modes, ethical delight, AI agency, three visual directions, and approval gates.
- [UI/UX Deep Dive 11 — Product References for Atlas, Including Netflix](research/ui-ux-deep-dive-11-product-references-netflix.md): transferable patterns from leading apps and a dedicated Netflix teardown brief covering visual storytelling, shelves, personalization, personal hubs, responsive discovery, and Atlas-specific cautions.
- [Design Engineer Toolkit](research/design-engineer-toolkit.md): curated design-engineering workflow and tool adoption rubric.

## Engineering and production readiness

- [Production readiness](engineering/production-readiness.md): operating model, evidence standard, release gates, and exceptions.
- [Requirements registry](engineering/requirements-registry.md): canonical production-readiness checklist with stable IDs across product, data, testing, reliability, operations, accessibility, cost, AI and governance.
- [Testing strategy](engineering/testing-strategy.md): unit/integration/E2E layers, failure cases, test data and evidence.
- [Reliability and operations](engineering/reliability-and-operations.md): SLOs, failure behavior, telemetry, recovery, incident response and cost/capacity.

## Security and architecture

- [Security, privacy, and trust](security-privacy-trust.md): privacy threat model, security baseline, verification gates, and user-facing trust commitments.
- [Security-first engineering program](security/security-program.md): threat model, critical controls, recovery strategy, risk register, and release gates.
- [AI and coding-agent security](security/ai-agent-security.md): prompt injection, tool boundaries, MCP, coding-agent permissions, and candidate security skills.
- [Security tooling and verification pipeline](security/security-tooling.md): recommended scanners, CI gates, test layers, severity policy, and evidence requirements.
- [Architecture](architecture.md): proposed design, alternatives, trade-offs, and risks.

Avoid treating planned controls or candidate tools as implemented or verified until they have actually been tested.

- [Capture and integration strategy](research/capture-and-integration-strategy.md): universal capture entry points, source adapter matrix, Obsidian interoperability, portable ownership, security boundaries, and acceptance tests.
