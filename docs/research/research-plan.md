# Atlas Research Plan

**Status:** Planned  
**Purpose:** Reduce product and architecture uncertainty before committing to implementation.  
**Last updated:** 2026-10-11

## Research questions

The research should answer:

1. What does a great personal bookshelf need to help the user accomplish beyond saving links?
2. Which existing workflows are already excellent, and which are fragmented or missing?
3. What should Atlas own versus delegate to existing tools such as Obsidian?
4. Which data must be portable, and what is the source of truth for each entity?
5. What AI capabilities create durable value, and which are novelty or unnecessary complexity?
6. What is the smallest end-to-end product slice that can test the core value proposition?
7. Which architecture is sufficient for the first release and still supports likely evolution?
8. What are the key security, privacy, copyright, cost, and operational risks?

## Workstreams

### W0 — Research setup and access validation

- [ ] Confirm product scope and initial target user/job.
- [ ] Confirm REA's current capabilities, installation instructions, license, and compatibility with the intended browser/product inspection workflow.
- [ ] Determine which products can be inspected without signing in and which require an account or are inaccessible.
- [ ] Establish a source log and capture method for screenshots, notes, and reproducible observations.
- [ ] Confirm current repository state and agent instructions before assigning implementation work.

**Output:** `rea-evaluation.md` and a reproducible research setup note.

### W1 — Product teardown: Jeff

Target: <https://read.atharvashah.com/>

- [ ] Record the public landing/onboarding experience and the product's stated promise.
- [ ] Inspect available discovery/search/browsing flows and representative result states.
- [ ] Investigate what content can be added, how sources are represented, and how the bookshelf is organized, where publicly accessible.
- [ ] Observe loading, empty, error, responsive, keyboard, and accessibility states where possible.
- [ ] Investigate AI answers, grounding, citations, relevance, latency, and cost only where these can be observed or supported by sources.
- [ ] Separate direct observations from maker-reported implementation claims.
- [ ] Record unknowns instead of assuming how hidden internals work.

**Output:** `jeff-product-teardown.md`.

### W2 — Existing product teardowns

Initial candidates:

- [ ] Karakeep — bookmarks, saved resources, tagging, full-text/semantic search, AI-assisted organization.
- [ ] Linkwarden — web preservation, collections, annotations, reading and collaboration.
- [ ] Readeck — read-it-later, readable article archiving, highlights and export.
- [ ] Obsidian — local Markdown knowledge base, backlinks, graph, plugins and portability.
- [ ] Zotero — source/reference management, metadata, annotations and citation workflows.

For each, investigate current features and architecture from official sources; do not rely on stale summaries. Add other candidates only when they offer a distinct workflow or could materially change a decision.

**Output:** one teardown per relevant product and a cross-product comparison.

### W3 — User workflow and opportunity synthesis

- [ ] Map the lifecycle: capture/import → process/read → organize → retrieve/ask → synthesize/note → apply/build → review.
- [ ] Identify friction, duplicate work, context loss, weak provenance, and gaps between resources and outcomes.
- [ ] Separate table-stakes features from differentiators.
- [ ] Rank opportunities by user value, frequency, confidence, implementation cost, and risk.
- [ ] State the core product hypothesis and how to falsify it.

**Output:** `../competitive-analysis.md` and proposed product principles/requirements.

### W4 — Technical and integration research

- [ ] Verify current stack, data model, deployment, licensing, and extension points for shortlisted open-source products.
- [ ] Evaluate Obsidian integration options and determine whether Markdown files, links, plugin APIs, REST, or MCP are appropriate.
- [ ] Compare relational metadata, full-text search, and optional semantic retrieval against concrete queries.
- [ ] Evaluate ingestion/extraction for URLs and PDFs; defer extra media types until justified.
- [ ] Examine authentication, data isolation, backups, deletion, export, secrets, and untrusted-document prompt injection.
- [ ] Estimate model/runtime cost and latency for only the AI workflows that survive product research.
- [ ] Compare build-versus-integrate options and check license compatibility before reuse.

**Output:** `../architecture.md`, supported by technical research notes and explicit alternatives.

### W5 — MVP definition and validation

- [ ] Define one primary user and one high-value workflow.
- [ ] Write measurable acceptance criteria for the first vertical slice.
- [ ] Include empty/loading/error states, source provenance, exportability, and privacy requirements.
- [ ] Identify what will explicitly not be built in v1.
- [ ] Define a lightweight evaluation set for retrieval/relevance and UI usability.
- [ ] Review the MVP and architecture before application implementation.

**Output:** `../requirements.md` and decision records under `../decisions/`.

## Comparison dimensions

Score only when evidence exists; use **Unknown** rather than guessing.

| Dimension | Questions |
|---|---|
| Capture | Which resource types can be saved? How many steps? |
| Metadata | Is title, author, cover, source, date, and content extracted reliably? |
| Organization | Tags, collections, shelves, filters, relationships? |
| Reading | Reader view, highlights, annotations, progress, notes? |
| Search | Keyword, filters, full-text, semantic, hybrid, ranking controls? |
| AI | Q&A, summaries, classification, citations, source grounding, feedback? |
| Knowledge flow | Can resources connect to notes, concepts, projects, and demonstrated skills? |
| Portability | Export formats, APIs, local-first behavior, lock-in? |
| UX quality | Visual hierarchy, navigation, responsiveness, accessibility, interaction polish? |
| Reliability | Errors, duplicate handling, broken links, backups, preservation? |
| Privacy/security | Data location, permissions, account boundaries, retention, deletion? |
| Technical fit | Stack, extensibility, operations, integrations, license, maintenance? |
| Cost | Hosting, external services, model calls, usage limits, operational burden? |

## Decision gate: do not start substantial implementation until

- The Jeff teardown and at least the most relevant alternative teardowns are reviewed.
- The core user workflow and product hypothesis are explicit.
- Competitive findings distinguish evidence from assumptions.
- The MVP has observable acceptance criteria and an explicit non-goals list.
- Architecture alternatives and source-of-truth boundaries are documented.
- The first vertical slice is selected and can be tested end to end.

## Research session log

Append one entry per meaningful session:

- **Date / researcher or agent:**
- **Question being investigated:**
- **Sources and method:**
- **Findings:**
- **Evidence quality / limitations:**
- **Decision affected:**
- **Next step:**
