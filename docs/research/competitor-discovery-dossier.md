# Atlas Competitor Discovery Dossier

- **Status:** Initial desk research; not a completed hands-on usability teardown
- **Research date:** 2026-10-11
- **Branch:** `research/competitor-discovery-dossier`
- **Purpose:** Establish an evidence-labelled view of the landscape and a testable product hypothesis before UI mockups or application implementation.

## Executive summary

The market already has strong tools for saving links, archiving webpages, reading and annotating, organizing research, and AI-assisted search. Atlas should not compete on the vague promise to “save everything” or on adding a chatbot to a bookmark manager.

The most promising hypothesis is a **personal learning library that connects resources to the ideas, decisions, skills, and projects they inform**—while preserving source provenance and making original material portable. This is a hypothesis to validate with real workflows, not a proven market gap.

The initial release should establish a trustworthy resource foundation first: capture an original URL or file, classify it, let the user correct metadata, find it again, add a note, and export it. AI answers, semantic search, deep integrations, and broad platform-specific extraction should wait until the core library and its provenance model work reliably.

## Evidence standard and limitations

This is a first-pass review of official product pages and documentation available on 2026-10-11. It is **not** a hands-on product teardown: authenticated flows, mobile share sheets, actual extraction success rates, latency, pricing at checkout, accessibility behavior, and failure recovery were not systematically tested. Capabilities below are labelled as first-party claims, not independent verification. A blank or unknown cell must not be read as a missing feature.

The Jeff product landing page was reachable but returned no readable page content through the inspection method used. Readeck's official site returned HTTP 403 to the inspection method. Those products require a separate manual/browser inspection before drawing conclusions.

## Landscape overview

| Product | Strongest apparent job | Evidence from first-party sources | What Atlas should learn | What remains unknown |
|---|---|---|---|---|
| **Jeff — A Bookshelf You Can Ask** | Ask questions across a personal bookshelf | Public landing URL: https://read.atharvashah.com/ (page content not readable in this pass) | Treat bookshelf-level discovery and source-grounded questions as a hypothesis worth evaluating | Capture, supported types, citation quality, onboarding, pricing, data/privacy model, and reliability all need inspection |
| **Karakeep** | Save and rediscover a broad set of web resources | Docs describe links, notes, images/PDFs, lists, full-text and semantic search, AI tagging/summaries, OCR, browser/mobile capture, highlights, full-page archiving, APIs, RSS, and importers: https://docs.karakeep.app/ and https://github.com/karakeep-app/karakeep | Broad capture, multiple retrieval modes, portable APIs, and explicit processing features are already table stakes for a serious “save everything” tool | Real-world extraction coverage, search quality, operational burden, and the quality of source-grounded Q&A were not tested |
| **Linkwarden** | Preserve webpages and share/annotate collections | Docs describe self-hosting, page preservation in multiple formats, reader view, highlights/annotations, collections, tags, and collaboration: https://docs.linkwarden.app/ | Preservation and clear collection/tag semantics are valuable; original URL alone may not protect against link rot | Capture fidelity, restore/export workflows, and exact per-plan limits need verification |
| **Raindrop.io** | Polished cross-device bookmark manager | Official site describes collections, tags/filters, duplicate and broken-link detection, multiple views, highlights, full-text search across pages/PDFs/YouTube, web archives, cloud backups, sharing, and import/export: https://raindrop.io/ | Strong visual organization, multiple views, fast capture, and portability set a high baseline | Verify which capabilities are free/paid and test search/capture across representative URLs |
| **Readwise Reader** | Read, highlight, and review articles and mixed reading material | Docs describe articles, newsletters, EPUBs, PDFs, videos, tweets, browser extension, mobile share sheet, uploads, RSS, annotations, and AI reading assistance: https://docs.readwise.io/reader/docs and https://docs.readwise.io/reader/docs/saving-content | Capture is only the start: reading, highlighting, and returning to saved material are a connected workflow | Current pricing, export completeness, privacy trade-offs, and platform-specific capture limits need hands-on validation |
| **Obsidian + Web Clipper** | Own a local Markdown knowledge base and turn web content into notes | Official docs describe local vault capture, templates, metadata, highlights, reader mode, and customizable page extraction: https://obsidian.md/help/web-clipper and https://obsidian.md/help/web-clipper/capture | A portable Markdown handoff is more attractive than forcing Atlas to replace a mature personal knowledge base | Cross-device sync choices, setup friction, and how much structure a casual user will maintain need user testing |
| **Zotero** | Collect and manage research sources with bibliographic fidelity | Official docs describe item types, bibliographic metadata, collections, tags, advanced search, web capture, snapshots, and citation workflows: https://www.zotero.org/about and https://www.zotero.org/support/quick_start_guide | Preserve author/title/source/date metadata and use structured types where they materially help | It is not a general-purpose visual bookshelf; the exact overlap with Atlas depends on research-heavy use cases |
| **Readeck** | Read-it-later and durable article reading | Official site https://readeck.org/ was blocked (403) in this pass; no capability claims are made here | Keep it on the shortlist because read-it-later is a distinct workflow worth comparing | All product capability and license/architecture claims remain unverified |

## Cross-product findings

### Capabilities that look like table stakes

These recur across multiple first-party product descriptions and should not be treated as differentiation by themselves:

1. **Fast capture:** paste a URL; eventually browser extension and mobile share sheet.
2. **A stable original reference:** preserve the submitted URL or file even when extraction fails.
3. **Editable metadata:** title, source, type, creator, date, tags, and collection.
4. **Multiple ways to browse:** at least list and card/grid views, sorting, filters, and saved/recent views.
5. **Search beyond titles:** begin with metadata and reliable full-text indexing where legally and technically available.
6. **Portability:** a documented export path and transparent data ownership.
7. **Visible processing state:** distinguish saved, queued, partially processed, failed, and ready.
8. **Source-preserving reading and notes:** do not lose the relationship between a saved item and a user's interpretation of it.

### Differentiation hypotheses to test

| Hypothesis | Why it may matter | Evidence/confidence | Cheapest validation |
|---|---|---|---|
| **Resources connect to outcomes**: link a saved item to a concept, decision, skill, or project | A library is more useful if it helps turn reading into applied knowledge, not just storage | Plausible product hypothesis; low confidence until tested | Ask 5–8 target users to show how they use a resource in a real project and where that connection currently gets lost |
| **A consistent visual bookshelf across media** | Books, PDFs, repositories, articles, videos, and social posts have different metadata but should feel like one coherent library | Mixed-media capture is claimed by competitors; the quality of a unified experience is unverified | Prototype a library containing 20 realistic mixed resources and run find/open/add-note tasks |
| **Trustworthy capture, with honest partial success** | A failed extractor should never cause the original item to disappear or falsely claim full import | Strong reliability principle; not a market-uniqueness claim | Test 30 representative URLs/files; measure save success, metadata quality, extraction status accuracy, and recovery |
| **Personal retrieval with provenance** | Users should be able to ask a question and inspect the exact source passages behind an answer | Several tools offer AI/search, but quality and citation behavior were not benchmarked here | Create 10 questions with known answers; measure source correctness, unsupported claims, and retrieval misses |
| **Own the library, integrate for deep notes** | Atlas can provide a simpler capture/retrieval front door while exporting or linking to Obsidian rather than rebuilding a complete graph editor | Fits Atlas's portability principle; requires user validation | Compare native notes with Markdown export and a simple Obsidian handoff in a prototype |
| **Private by default and easy to recover** | A personal knowledge store becomes high-trust infrastructure; privacy, export, and recovery are product features | Requirement grounded in Atlas's stated goals, not competitor weakness evidence | Test user-scoped access, full export, and a documented restore drill before inviting others |

Do not claim Atlas has a unique moat until these hypotheses survive user testing and competitor verification.

## Recommended initial scope

### P0 — The first complete, testable slice

1. **Authentication and strict user isolation** from the first multi-user-capable data model; invite-only deployment.
2. **Capture a URL or upload a file** with a reliable fallback that stores the original even if extraction fails.
3. **One canonical resource record** with type, original URL/file, title, author/creator if known, source, dates, tags, collection, user notes, and capture/processing state.
4. **Manual metadata correction** and explicit distinction between user-entered and extracted values.
5. **Library browsing** with search, filters, sort, and list/grid views.
6. **Resource detail** with source/provenance, file or original link, notes, tags, and processing status.
7. **Export and recovery foundation**: documented machine-readable export, backup policy, and a tested restore process before friend onboarding.
8. **Accessible, responsive core screens** and meaningful empty/loading/error/duplicate/partial-success states.

This slice is intentionally not a complete reading platform. It tests whether Atlas is a library the owner will repeatedly use and trust.

### P1 — Only after P0 is useful and reliable

- Browser extension/mobile share pathway.
- Article/PDF extraction and a reader with highlights.
- Better full-text indexing with transparent per-source support.
- Markdown export and an Obsidian handoff.
- AI-generated summaries and Q&A with inspectable citations, opt-in external processing, and per-user retrieval boundaries.

### P2 — Defer until evidence justifies the cost

- Semantic/vector search if lexical/full-text retrieval is insufficient.
- Knowledge graph visualization, automated concept linking, study plans, spaced repetition.
- Collaboration and shared collections.
- Platform-specific extraction for every social network, reel, or video service.
- Multiple agents, microservices, and dedicated vector infrastructure.

## UI/UX principles for the mockup phase

These principles should become reviewable design rules, not aesthetic adjectives:

- **Library-first, not dashboard-first.** The home screen should make it obvious how to capture and rediscover resources; avoid KPI tiles that do not help a learning workflow.
- **Mixed-media cards with stable hierarchy.** Type-specific cover/thumbnail and metadata may vary, but title, source, resource type, saved date, and user organization should be predictable.
- **Fast capture with progressive disclosure.** Pasting a URL should be the primary action. Show advanced metadata only when useful.
- **Never hide failure.** Show whether an item is saved, extracting, partially processed, or failed, and provide retry/manual-edit actions. This follows the usability principle of visibility of system status: https://www.nngroup.com/articles/visibility-system-status/
- **Recognition over memory.** Make source/domain, type, tags, collections, and recent activity visible enough that users need not remember how they filed an item.
- **Search is a primary workflow.** Prototype empty, successful, no-results, filtered, and indexing-incomplete states.
- **Readable detail view.** Keep the original source, metadata, notes, extracted text/highlights, and provenance distinguishable.
- **Accessible interactions by design.** Keyboard navigation, visible focus, semantic structure, sufficient contrast, zoom, and reduced-motion behavior should be reviewed against WCAG 2.2: https://www.w3.org/TR/WCAG22/
- **AI must show its work.** Answers need source links and supporting passages; distinguish retrieved facts from synthesis and disclose when no adequate source was found.
- **Design realistic edge cases.** Missing thumbnail, inaccessible URL, duplicate, deleted source, malformed file, long title, no metadata, private content, extraction timeout, and narrow viewport.
- **Evaluate tasks, not taste alone.** Ask users to capture a resource, find an old item, correct metadata, connect it to a project, and export it. Record completion, errors, time, and confusion.

### UI research references

- Nielsen Norman Group, [10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — interaction feedback, user control, consistency, error prevention, recognition, and recovery.
- W3C, [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/) — accessibility baseline.
- Obsidian, [Web Clipper capture](https://obsidian.md/help/web-clipper/capture) — inspect templates and metadata extraction.
- User-supplied [hendurhance/ui-ux guide](https://github.com/hendurhance/ui-ux) — use as a curated index, not as an instruction to consume every linked resource.
- [Karakeep docs](https://docs.karakeep.app/), [Linkwarden docs](https://docs.linkwarden.app/), [Raindrop.io](https://raindrop.io/), [Readwise Reader docs](https://docs.readwise.io/reader/docs), [Zotero docs](https://www.zotero.org/support/quick_start_guide) — compare real flows and verify all plan-specific details before deciding.

## Decisions not yet made

Do **not** lock these based on desk research alone:

- Framework, database, hosting, auth provider, or deployment topology.
- Whether Atlas stores extracted full text by default and how retention/copyright constraints are handled.
- Whether external AI providers receive user content; default should be no surprise processing.
- Encryption model and implications for search, AI, sync, and recovery.
- Exact resource-type taxonomy and which types receive first-class fields.
- Whether native notes should stay minimal or grow into a knowledge graph.
- Product visual direction, design tokens, and final screen layouts.

## Next research actions

1. Manually inspect Jeff and Readeck in a normal browser; document access limits and observed states.
2. Perform reproducible capture/search/export tasks in Karakeep, Linkwarden, Raindrop, Readwise Reader, Obsidian Clipper, and Zotero.
3. Run 5–8 workflow interviews or lightweight task tests using real saved material.
4. Convert findings into a ranked requirement list with value, confidence, cost, and risk.
5. Prepare 2–3 visual directions, then high-fidelity mockups for Library, Add Resource, Resource Detail, Search, and edge states.
6. Obtain explicit approval of scope and visual direction before production UI coding.

## Source log

- Karakeep documentation: https://docs.karakeep.app/ — first-party product claims; accessed 2026-10-11.
- Karakeep repository: https://github.com/karakeep-app/karakeep — first-party project description; accessed 2026-10-11.
- Linkwarden documentation: https://docs.linkwarden.app/ — first-party product claims; accessed 2026-10-11.
- Linkwarden overview: https://docs.linkwarden.app/usage/overview — first-party taxonomy/collection claims; accessed 2026-10-11.
- Raindrop.io: https://raindrop.io/ — first-party product claims; accessed 2026-10-11.
- Readwise Reader documentation: https://docs.readwise.io/reader/docs — first-party product claims; accessed 2026-10-11.
- Readwise Reader saving content: https://docs.readwise.io/reader/docs/saving-content — first-party capture claims; accessed 2026-10-11.
- Obsidian Web Clipper: https://obsidian.md/help/web-clipper and https://obsidian.md/help/web-clipper/capture — first-party documentation; accessed 2026-10-11.
- Zotero About: https://www.zotero.org/about — first-party product description; accessed 2026-10-11.
- Zotero Quick Start: https://www.zotero.org/support/quick_start_guide — first-party documentation; accessed 2026-10-11.
- Jeff: https://read.atharvashah.com/ — landing page reachable but no readable page content in this inspection pass; accessed 2026-10-11.
- Readeck: https://readeck.org/en/ — returned HTTP 403 to the inspection method; no product capability claims made; accessed 2026-10-11.
- Nielsen Norman Group: https://www.nngroup.com/articles/ten-usability-heuristics/ and https://www.nngroup.com/articles/visibility-system-status/ — usability guidance; accessed 2026-10-11.
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/ — accessibility standard; accessed 2026-10-11.
- hendurance/ui-ux: https://github.com/hendurhance/ui-ux — user-supplied learning index; accessed 2026-10-11.
