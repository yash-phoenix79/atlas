# Atlas Product Requirements & Use-Case Registry

- **Status:** Canonical working registry; proposed scope remains subject to owner review.
- **Last updated:** 2026-10-11
- **Related:** [Product vision](../product-vision.md) · [Feature blueprint](../product-feature-blueprint.md) · [Competitor dossier](../research/competitor-discovery-dossier.md) · [AI workflow research](../research/ai-workflow-research-plan.md) · [Gamification research](../research/gamification-learning-loop-plan.md)

## Status vocabulary
Proposed = candidate; Accepted = owner-approved requirement; In research = needs evidence; Ready = acceptance criteria/dependencies clear; Implemented = code exists; Verified = reproducible tests/evidence pass; Deferred/Rejected = rationale recorded. Documentation alone never means implemented or verified.

## Product hypothesis
Atlas is a beautiful, owner-controlled personal learning library that helps people collect resources, rediscover them, understand their ideas, connect them to goals/projects, and apply what they learn.

**Proposed north-star outcome:** successfully retrieve and apply a previously captured resource to a real question, decision or project. Do not optimize only for saves, time in app, streaks, or AI output volume.

## Canonical requirement registry

| ID | Origin | Requirement / pain point and use case | Priority | Acceptance criteria / evidence | Status |
|---|---|---|---|---|---|
| ATL-001 | Original | One library for books, articles, PDFs/files, videos, docs, social posts/threads/reels, GitHub, courses, podcasts, images, notes and artifacts | P0 core URL/file; specialized types phased | Type preserved or editable; unsupported extraction never blocks saving original | Accepted |
| ATL-002 | Original | Capture via paste/upload first; share sheet, browser capture, bulk import and integrations over time | P0 paste/upload; P1 others | Each pathway has explicit support and failure behavior | Accepted |
| ATL-003 | Original | Preserve original URL/file even when extraction fails | P0 | Original survives independently; clear queued/partial/ready/failed status; safe retry | Accepted |
| ATL-004 | Original | Extract and edit title, creator, source, dates, type, tags and collection | P0 | Provenance clear; user edits never silently overwritten | Accepted |
| ATL-005 | Original | Polished mixed-media library with grid/list, search, sort, filters, tags and collections | P0 | Core find/open tasks work; empty/no-results/missing-cover states are usable | Accepted |
| ATL-006 | Original | Resource detail with source, provenance, content and personal notes | P0 | Original, extracted content, user notes and AI output are distinct | Accepted |
| ATL-007 | Original | Beautiful, responsive, accessible UI; approve mockups before production UI coding | P0 gate | 2–3 directions and high-fidelity core/edge-state screens reviewed; explicit owner approval before production UI | Accepted |
| ATL-008 | Original | Control data, UI, features, integrations and future direction | P0 | Source of truth, dependencies, export formats and service boundaries documented | Accepted |
| ATL-009 | Original | Private-by-default invite-only access and strict per-user isolation | P0 before friends | Server-side authz for every record/file/search/export/job; adversarial two-user tests pass | Accepted |
| ATL-010 | Original | Export, backup, restore and deletion | P0 before friends | Export includes metadata/notes; backup separation and clean-environment restore verified | Accepted |
| ATL-011 | Original | Transparent privacy and external processing | P0 | Providers, data sent, retention and controls disclosed; no surprise AI processing | Accepted |
| ATL-012 | Original | AI summaries/explanations and library Q&A grounded in resources | P1 after reliable retrieval | Answers cite inspectable sources/passages and abstain when evidence is insufficient | Accepted |
| ATL-013 | Original | Compare sources and synthesize agreement/disagreement | P1 | Claims link to sources; conflicting evidence surfaced | Accepted |
| ATL-014 | Original | Intelligent organization suggestions | P1 | Editable, explainable, reversible; no silent reorganization | Accepted |
| ATL-015 | Original | Complement Obsidian/Markdown instead of replacing every knowledge tool | P1 | Test export/import, stable links and preservation fidelity | Accepted |
| ATL-016 | New hypothesis | Connect resources to ideas, skills, decisions, goals and projects; turn collection into application | P1 experiment | Prototype resource → insight → project flow; links trace back to sources | In research |
| ATL-017 | New request | Gamify meaningful processing, recall and application—not just collecting | P1 discovery | Test opt-in quests, milestones, retrieval practice, gentle streaks and reflections; measure learning and pressure | In research |
| ATL-018 | New request | Choose AI workflow per task rather than one universal agent | P0 research gate | Compare deterministic logic, structured calls, hybrid retrieval/RAG, reranking, bounded tools and human-approved flows | In research |
| ATL-019 | New hypothesis | Measurable retrieval quality and citations | P1 | Test set with expected sources; measure recall, citation support, unsupported claims, abstention, latency and cost | In research |
| ATL-020 | New hypothesis | Adaptive next actions based on explicit user goals and library | P1 | Optional, explainable, source-linked, dismissible suggestions; compare with static suggestions | In research |
| ATL-021 | New requirement | Gamification preserves autonomy and avoids manipulative engagement loops | P1 design constraint | Opt-in controls, pause/forgive missed days, no public leaderboard by default; reward meaningful outcomes | Accepted |
| ATL-022 | New hypothesis | Measure learning/application rather than vanity metrics | P1 experiment | Track recall, useful notes, source-grounded retrieval and applied outcomes; baseline before claims | In research |
| ATL-023 | Original | Secure URL ingestion, file handling and safe rendering | P0 | SSRF/redirect protections, size/type validation, parser isolation, sanitization and adversarial tests | Accepted |
| ATL-024 | Original | Protect AI from prompt injection and data leakage | Before AI access | Imported content treated as untrusted; tenant-scoped retrieval, typed least-privilege tools, no arbitrary shell/SQL | Accepted |
| ATL-025 | Original | Reliability and operations | P0 before friends | Define SLOs, telemetry, retries/idempotency, RPO/RTO, incident and rollback steps | Accepted |
| ATL-026 | Original | Accessible, responsive, recoverable interactions | P0 | Keyboard/focus, contrast, zoom, mobile, loading/error/duplicate/partial-success tests | Accepted |
| ATL-027 | New hypothesis | Validate differentiation and user jobs before expanding scope | P0 discovery gate | Hands-on teardowns and 5–8 user workflow interviews/task tests; record evidence and counterevidence | In research |
| ATL-028 | Owner feedback, Round 3 | Spatial whiteboards with movable cards, groups, connections, and nested topic exploration | P1 prototype; priority re-evaluate after design tests | Canonical resources can be placed on multiple boards without duplication; board state persists; move/connect/group/zoom/fit/undo/navigation work; mobile fallback and keyboard/accessibility behavior specified | Proposed |
| ATL-029 | Owner feedback, Round 3 | Cross-resource knowledge graph connecting resources, concepts, and ideas | P1 prototype | Filterable graph; edge types and origins are visible; graph nodes navigate to canonical resources; large/no-connection states and performance limits tested | Proposed |
| ATL-030 | Owner feedback, Round 3 | AI-suggested relationships across resources with inspectable evidence, inspired by NotebookLM source-grounded synthesis | P1 after reliable extraction/retrieval | Every evidence-backed suggestion links to supporting source passages where available; explicit/user-created and AI-suggested edges are visually distinct; accept/edit/reject/dismiss controls; abstain or disclose weak evidence; prompt-injection and tenant-isolation tests pass | Proposed |

| ATL-031 | Owner reaffirmation, Oct 2026 | Universal capture entry points: paste URL, upload, Android share sheet, browser extension, quick capture, and bulk import | P0 paste/upload; P1 share/browser/bulk | Capture preserves original URL/file and provenance; pathways show supported types, extraction status, duplicate handling, retry, and honest failure states; no source-specific parser is assumed universal | Proposed |
| ATL-032 | Owner request, Oct 2026 | Obsidian interoperability, including Markdown import/export and a carefully scoped vault integration | P1 research/prototype | Round-trip test for Markdown, frontmatter, wikilinks, embeds, attachments, tags and stable identifiers; sync direction and source of truth are explicit; conflict/deletion behavior is previewable and recoverable; no silent destructive writes | Proposed |
| ATL-033 | Owner request, Oct 2026 | Source-specific adapters for articles, YouTube/video, PDFs, GitHub, X/social posts/threads, books, podcasts, images, courses, documents and other artifacts | P0 general URL/file preservation; specialized adapters phased by demand and lawful access | Adapter capability matrix documents capture method, supported metadata/content, auth/API constraints, rights/terms, extraction fidelity, rate limits and failure behavior; unsupported sources remain saveable as links/files when possible | Proposed |
| ATL-034 | Owner request, Oct 2026 | Portable ownership and integration escape hatches: bulk import/export, Markdown/JSON metadata export, original-file export, and later APIs/MCP/automation hooks | P0 export of core user data; P1 bulk connectors; later API/MCP | Export is documented and tested; includes originals when available, metadata, notes, tags, collections, provenance and stable IDs; users can inspect export contents before leaving; integrations use least privilege and revocable credentials | Proposed |

## Phase gates

**A — Discovery:** reconcile original requirements; test competitor workflows and target-user jobs; compare AI workflows and gamification; owner reviews P0 and non-goals.

**B — Design:** 2–3 visual directions and high-fidelity Library, Capture, Search, Detail, AI citations and optional learning-loop screens; include empty/loading/failure/partial-success/mobile/accessibility/privacy states. No production UI coding before explicit approval.

**C — First vertical slice:** auth, URL/file capture, metadata correction, browse/search, notes, export, strict user isolation and demonstrated backup restore. AI/gamification are not prerequisites for proving the core library.

**D — AI/gamification:** evaluation sets, citation checks, cost/latency limits, privacy disclosures and safe failures; opt-in mechanics measured against learning outcomes and adverse incentives.

**E — Invite friends:** verify isolation, deletion/export, monitoring, incident response, backup and restore; Critical/High risks require explicit documented acceptance.

## Open decisions
Exact P0 types/PDF extraction; full-text retention and rights; self-hosted versus managed; encryption/search/AI trade-offs; whether idea/project links enter P0; gamification defaults; local versus external AI; provider/budget; social-platform support boundaries.

## Change control
Every new item gets a stable ID, origin, pain/use case, acceptance criteria, priority, evidence, dependencies, risks and status. Research findings do not silently expand approved implementation scope.