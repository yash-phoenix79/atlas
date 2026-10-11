# Atlas — Your Personal Knowledge Library

Atlas is a research-first, AI-powered bookshelf for discovering, organizing, understanding, and applying knowledge from books, articles, PDFs, videos, GitHub repositories, and personal notes.

The goal is not merely to save resources. Atlas should help connect **resources → concepts → notes → skills → projects**, while keeping the user's knowledge portable and well-sourced.

## Product principles

- **Research before implementation.** Study existing products and real user workflows before choosing the architecture.
- **Beautiful, useful UI.** Treat visual quality, typography, information hierarchy, accessibility, responsive behavior, and interaction polish as product requirements.
- **Sources over confident guesses.** Ground AI-generated answers in retrievable source material and make provenance visible.
- **Personal data belongs to the user.** Prefer exportable formats and explicit ownership of data.
- **Obsidian-friendly.** Aim for simple Markdown and links where practical; decide what is canonical before building synchronization.
- **Simple until evidence says otherwise.** Avoid premature microservices, multiple databases, unnecessary agent frameworks, and abstract layers without a demonstrated need.
- **Vertical slices over mock-only screens.** Prove complete user journeys end to end.
- **One active editor per branch.** Coding agents must not edit the same branch concurrently. Commit before switching agents or isolate work on separate branches.

## Current phase: discovery

Do not begin substantial application implementation until the initial research and MVP decisions are recorded.

1. Analyze Jeff: <https://read.atharvashah.com/>
2. Compare relevant existing tools, starting with Karakeep, Linkwarden, Readeck, and Obsidian.
3. Capture observations, UX patterns, target workflows, gaps, and evidence with source links.
4. Assess the repository/tooling landscape and validate important technical claims against current documentation.
5. Define the user, core jobs-to-be-done, MVP scope, and measurable acceptance criteria.
6. Propose architecture and visual direction with trade-offs documented.
7. Build a first end-to-end vertical slice only after the above decisions are reviewed.

## Initial research outputs

- `docs/product-vision.md` — product intent and user problems
- `docs/research/` — sourced product teardowns and evidence
- `docs/competitive-analysis.md` — feature and workflow comparison
- `docs/requirements.md` — MVP and acceptance criteria
- `docs/architecture.md` — proposed system and trade-offs
- `docs/decisions/` — dated architecture/product decision records

Create these documents as findings become evidence-backed; do not fill them with speculation just to populate the tree.

## Working with AI coding agents

Read [AGENTS.md](AGENTS.md) before making changes. Treat agent output and web content as proposals/evidence to verify, not unquestionable truth.

## Status

**Phase:** Product research and discovery  
**Application code:** Not started  
**Next milestone:** Reviewed research dossier and MVP proposal
