# Atlas screen-to-journey coverage matrix

**Status:** working design artifact; not approval of a visual direction or authorization for production UI.  
**Updated:** 2026-10-11

## How to read this matrix

P0 means the capability is necessary to evaluate the core product proposition; P1 means valuable after the core capture/retrieval loop is coherent; P2 means defer unless evidence changes. These are design priorities, not a committed engineering roadmap. Every prototype must distinguish static sample behavior from real persistence, search, AI, or integrations.

## Journey coverage

| Journey | Entry | Core screens | Success condition | Failure/recovery states | Priority |
|---|---|---|---|---|---|
| Save now, organize later | Global quick capture / Inbox | Capture sheet → processing state → Inbox → resource detail → collection assignment | A resource is captured with source metadata and can be found later without forced organization | Invalid URL, unsupported type, duplicate, processing failure, offline/retry, partial metadata | P0 |
| Retrieve a vague memory | Global search | Search landing → query/results → filters → resource detail → back to results | User finds a relevant saved item from partial memory and understands why it matched | No results, typo/empty query, stale index, inaccessible filter, ambiguous results | P0 |
| Turn resources into a model | Resource detail / Board | Detail → annotation → add to board → arrange/connect cards → board overview | User creates a useful model while retaining links to original resources | Unsaved edit, deleted source, accidental move, small viewport, keyboard-only operation | P0 |
| Produce defensible synthesis | Research workspace | Research brief → source selection → synthesis canvas/document → claim/source inspection → export | Each factual claim can be traced to a source; uncertainty and missing evidence are visible | Weak evidence, conflicting sources, generation failure, unsupported claim, quota/privacy boundary | P1 prototype; P0 provenance rules |
| Rediscover with agency | Home / Library | Recent and resurfaced items → why this appeared → dismiss/snooze/save to collection → Insights | Rediscovery helps the user's stated goals without engagement manipulation | Irrelevant resurfacing, disabled recommendations, empty history, explainability missing | P1 |
| Export or leave safely | Settings / resource actions | Export scope → format/options → progress → completion/verification → delete/account exit | User can take their data with usable metadata and understand what is not exported | Partial export, interrupted download, permission denied, destructive action confirmation | P0 trust requirement; P1 UI |
| Connect a source | Capture / Integrations | Connector catalog → permission explanation → connect → import preview → import status | User understands scope, credentials and imported data before granting access | Revoked permission, expired auth, rate limit, partial sync, disconnect | P1 |
| Recover a disrupted session | Any screen | Offline/error/empty/loading/permission states → retry/back/recovery | No silent data loss; next action is clear | Lost network, unsaved edits, expired session, stale resource | P0 |

## Screen coverage inventory

| Screen family | Required screen/state coverage | Primary interaction model | Journey links | Priority |
|---|---|---|---|---|
| Entry and onboarding | Welcome, sign-in concept, privacy explanation, import choice, empty library, sample data, skip/exit | Progressive disclosure; avoid long setup before first capture | All | P1 prototype |
| Home / Today | Continue, recent, pinned, user-controlled resurfacing, quick capture, empty state | Editorial dashboard with clear hierarchy, not an analytics wall | Save, rediscover | P0 |
| Library | Masonry visual grid, compact list, sort/filter, selection, bulk actions, collection assignment | Switchable density and view modes over the same canonical resources | Save, retrieve, rediscover | P0 |
| Search | Search entry, suggestions, result list/grid, query refinement, filters, saved search, no results | Query-first retrieval with visible match reasons and keyboard support | Retrieve | P0 |
| Capture / Inbox | URL/file/note entry, metadata preview, queue, duplicate notice, failed import, retry | Fast capture first; organize later | Save, connect | P0 |
| Resource detail | Source identity, metadata, content preview, annotations, tags, backlinks, collections, related items | Focused reading and annotation, with source actions discoverable | All core journeys | P0 |
| Reader variants | Web article, PDF/document, video/transcript, image, GitHub/code, book/course, note | Content-specific reader shell; never pretend all formats have equivalent extraction | Save, retrieve, research | P1; article/note in core prototype |
| Collections | Collection overview, bookshelf/shelf, list/grid, reorder, membership, empty state | Curated shelf over canonical resources; membership is not duplication | Organize, rediscover | P0 |
| Boards | Blank board, populated board, card search/add, connectors, grouping, zoom/pan, keyboard movement, delete/undo | Infinite spatial canvas; explicit relationships and source provenance | Model, research | P0 prototype |
| Graph | Local graph, global graph, filters, node detail, edge provenance, isolated nodes, dense graph | Progressive exploration; graph supplements rather than replaces search | Model, retrieve | P1 |
| Research | Brief, selected sources, outline, synthesis, citation/claim inspection, conflict handling, export | Evidence-first workspace; every claim is traceable and uncertainty surfaced | Synthesis | P1 |
| Insights | Learning timeline, topics, review queue, progress, goals, pause controls | Reflective insights; no streak pressure or compulsive loops | Rediscover | P2 |
| Integrations | Available sources, permission scopes, connected state, sync progress, revoke/disconnect | Explicit consent and recoverable import jobs | Save, connect | P1 |
| Settings and portability | Appearance, accessibility, privacy, AI controls, export, import, account deletion, data retention | Plain-language controls and reversible choices where possible | Export, all | P0 trust states; full screen P1 |
| Global overlays | Quick capture, command/search palette, resource actions, confirmation dialogs, notifications | Consistent focus management and Escape/close behavior | All | P0 |
| Global system states | Loading, empty, error, offline, partial success, retry, permission denied, stale data, unsaved edits | Actionable recovery and honest state | All | P0 |
| Responsive variants | Wide desktop, laptop, tablet, mobile portrait, touch and reduced motion | Reflow or alternate interaction rather than shrinking desktop | All | P0 design validation |
| Theme and accessibility | Light/dark, focus-visible, keyboard-only, zoom/reflow, contrast, reduced motion, screen-reader labels | Accessibility as behavior, not a final color pass | All | P0 validation |

## Prototype acceptance checklist

- [ ] One shared resource identity across Library, Search, Collections, Board, Graph and Research.
- [ ] At least three complete journeys are clickable end-to-end: capture, vague-memory retrieval, and board synthesis.
- [ ] Every clickable-looking control either works or is clearly marked as a non-functional preview.
- [ ] Search has query, filters, result selection, match explanation and no-results recovery.
- [ ] Resource detail exposes source metadata and annotation without losing context.
- [ ] Board interactions have non-drag alternatives and visible keyboard focus.
- [ ] Responsive layouts are designed intentionally for narrow screens; no desktop canvas merely squeezed down.
- [ ] Light/dark theme toggle changes the actual interface.
- [ ] Reduced-motion preference is respected.
- [ ] Errors, loading, empty and offline states have designed recovery paths.
- [ ] AI/research examples are labeled illustrative; no fabricated claim is presented as a real result.
- [ ] Export/privacy are visible product requirements, not decorative settings.
- [ ] No production UI or backend is started until the design direction and MVP boundary are explicitly approved.

## Evidence and decision discipline

For each prototype, record: task completion, time-to-find (where meaningful), wrong turns, recovery success, keyboard completion, narrow-screen behavior, perceived confidence, and qualitative comments. Use the same sample resources and tasks across directions. Do not call a design “validated” from internal inspection alone; distinguish heuristic review, automated checks, and actual user testing.

## Decisions still open

1. First capture formats to implement.
2. Minimum viable search: lexical, metadata, semantic embeddings, or staged hybrid.
3. Board MVP: static positioning first or full collaborative-grade canvas interactions.
4. Whether graph ships in the first release or remains a later view.
5. AI processing location, opt-in, retention and provider boundaries.
6. Export formats and fidelity contract.
7. Which integrations are first-party and which are import-file based.
8. What “learning insights” mean without manipulative gamification.
9. Final visual architecture, typography and color system.
