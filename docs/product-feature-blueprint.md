# Atlas Product Feature Blueprint

- **Status:** Proposed feature map — validate against product research before implementation
- **Last updated:** 2026-10-11
- **Purpose:** Define the product capabilities and reviewable screen concepts before committing to implementation.

## Product thesis

Atlas is a personal learning library for collecting, finding, understanding, connecting, and applying useful information across many media types. It should feel like a calm, editorial library rather than a generic analytics dashboard or an endless bookmark dump.

The intended flow is:

**Capture → enrich → organize → read/watch → understand → connect → apply**

The application should remain useful as a straightforward library even when AI is unavailable. AI must be grounded in the user's own resources, show sources, and never silently invent metadata or pretend extraction succeeded.

## Scope and ownership principles

- **Single-user v1:** no teams, sharing, billing, roles, or multi-tenant infrastructure unless a concrete requirement emerges.
- **Data ownership:** define canonical storage, export, backup/restore, deletion, and external AI/provider boundaries before production implementation.
- **Capture honesty:** a shareable URL should be saveable even if platform content cannot be extracted. Distinguish saved link, metadata extracted, content extracted, and fully processed states.
- **Low maintenance:** prefer one deployable application and proven dependencies. Do not add distributed services, a dedicated vector database, or an agent framework without measured need.
- **Mockup gate:** no production application code until the owner reviews and explicitly approves the main UI direction, core flow, and initial scope.

## Product requirements by journey

### 1. Capture and import

**Desired outcome:** Save a resource quickly, with as little manual metadata entry as possible.

Resource types to plan for:
- Books and book chapters
- Articles and blog posts
- General web links and documentation
- PDFs and other useful documents
- YouTube and other video links
- X/Twitter posts and threads
- Social links and reels from supported platforms
- GitHub repositories, issues, and technical discussions
- Courses, tutorials, podcasts, and other learning media
- User-created notes, summaries, artifacts, and project outputs

Core behaviors:
- A single, obvious **Add resource** action and paste-a-link flow.
- Metadata extraction with source URL, title, creator/author when available, publication date when available, media type, thumbnail/cover when available, and captured time.
- Manual correction and a clear indication of which fields are inferred, imported, or user-edited.
- Duplicate detection and a way to merge or dismiss duplicates.
- Visible states: queued, extracting, ready, partially imported, failed, and needs attention.
- A fallback to save the original URL and useful metadata even when a platform blocks content extraction.
- Bulk import/export to be evaluated, not presumed for the first usable version.

Important boundary: social platforms may restrict access, require login, change formats, or prohibit certain forms of scraping. The application should preserve user-provided links and avoid implying that every reel/thread can always be fully extracted.

### 2. Library and resource browsing

**Desired outcome:** Make a growing collection feel navigable and curated.

- All resources, recently added, recently opened, favorites/starred, archived, and user-defined collections.
- Filter by resource type, status, topic/tag, creator, source domain, added date, and reading/learning status where supported.
- Switch between visual cover/grid view and compact list view.
- Sort by recently added, title, creator, last opened, and manually chosen order where appropriate.
- Collection shelves such as Backend Engineering, AI Engineering, Finance, Health, and Personal Development, with user-controlled names.
- Helpful empty states, visible filter chips, reset filters, bulk selection, and undo for reversible actions.
- Optional progress and queue views without making the home screen a noisy productivity dashboard.

### 3. Universal search and retrieval

**Desired outcome:** Find a known item or recover an idea without remembering its exact title.

- One global search across titles, authors, URLs, tags, descriptions, extracted text, and user notes to the extent content is available.
- Type and collection filters with transparent sorting.
- Useful result previews showing why an item matched.
- Keyboard navigation and a command/search shortcut where practical.
- Later, semantic/hybrid search for queries such as “the article I saved about database replication trade-offs.”
- AI-generated answers must show source citations and let the user open the supporting resource or passage.
- Clear distinction between exact matches, semantic matches, and AI-generated synthesis.

### 4. Resource detail and reading workspace

**Desired outcome:** Every resource has a consistent, trustworthy place to inspect and work with it.

- Canonical title, media type, source, author/creator, dates, tags, collections, and original URL.
- Open original, mark status, favorite, edit metadata, archive, and delete/export actions.
- A normalized reader for formats whose extraction is legally and technically appropriate.
- For videos/social posts where full extraction is unavailable, show metadata and a reliable link-out instead of a broken fake player or empty transcript.
- Highlights, annotations, personal notes, and progress when the format supports them.
- Extraction/provenance details and clear states for content unavailable or only partially processed.
- Related resources and linked concepts, introduced only when relationships can be useful and explainable.

### 5. Notes, concepts, and knowledge flow

**Desired outcome:** Keep what the user learned connected to its sources and outcomes.

- Capture a personal takeaway from any resource.
- Create a concept or link to an existing concept.
- Connect concepts and resources to a project, question, decision, or skill goal.
- Preserve source links and passages so notes remain verifiable.
- Export notes and portable Markdown.
- Integrate with Obsidian deliberately, with a defined source of truth per entity; avoid fragile bidirectional sync of every field.
- A visual graph is optional and should follow useful relationship navigation, not drive the product by itself.

### 6. AI learning assistant

**Desired outcome:** Help the user understand the material in their library—not produce confident, untraceable answers.

Potential capabilities:
- Ask questions across selected resources or a collection.
- Summarize a resource or compare multiple sources.
- Explain a difficult idea at a chosen depth.
- Extract claims, key ideas, questions, and actionable takeaways.
- Generate a study guide or learning plan from selected materials.
- Surface disagreements or gaps among sources.
- Suggest relevant resources already in the user's library.

Trust requirements:
- Cite relevant sources and passages when available.
- Separate extracted source content, model-generated summary, and user-authored notes.
- Show when content could not be accessed or a claim is weakly supported.
- Allow opening the cited source and correcting bad AI output.
- Treat source content as untrusted input; resist prompt injection embedded in saved content.
- Make model use, cost, latency, and privacy implications measurable before committing to broad AI features.

### 7. Artifacts and application

**Desired outcome:** Connect learning to concrete outputs.

- Link a resource or concept to an artifact such as a code repository, project, design, note, plan, document, or decision.
- Record why the artifact was created and which sources influenced it.
- Link projects to relevant resources, concepts, and skills.
- Later, show a “what I learned / what I made” trail.
- Do not build project management, task management, or a generic second brain unless research demonstrates the need.

### 8. Personalization and polish

- Calm, editorial visual language with strong typography, deliberate whitespace, thoughtful cover/thumbnail usage, and a controlled color system.
- Responsive layouts for desktop first and practical mobile capture/review.
- Light/dark theme considered during design, not bolted on at the end.
- Accessible keyboard use, visible focus, semantic structure, contrast, and reduced-motion support.
- Loading, empty, error, partial-success, and retry states are first-class design work.
- Preferences for default view, sorting, theme, and reading status.
- No forced onboarding tour; teach features in context.

### 9. Privacy, portability, and reliability

- User-scoped data and isolation between users if/when multi-user deployment exists.
- Explicit storage and retention policies for source files, extracted text, embeddings, and AI requests.
- Backups, deletion, and a tested export path.
- Secrets kept out of source control and logs.
- Derived search indexes and embeddings should be rebuildable from canonical data.
- Graceful failure when a provider or extractor is unavailable.
- Source URL and imported/capture date retained for provenance.
- License and platform terms checked before integrating third-party code or extracting content.

## Initial prioritization hypothesis

This is a proposed starting point, not a final scope decision.

### P0 — first usable vertical slice
1. Add a URL or manually create a resource.
2. Save and edit canonical metadata, resource type, status, tags, and collection.
3. Browse the library in a polished grid/list.
4. Search metadata and filter by type/collection/status.
5. Open a resource detail page with original source and provenance.
6. Handle loading, empty, duplicate, and extraction-failure states.
7. Export the library and personal notes in a documented, portable format.

### P1 — after the first slice proves useful
- Browser/share-sheet capture workflow.
- Reliable article/PDF extraction and reader view.
- Highlights and personal notes.
- Full-text search.
- Obsidian integration with a clear source-of-truth contract.
- Video/social metadata normalization where platform constraints permit.
- AI summaries/Q&A with citations and a small evaluation set.

### P2 — defer until evidence justifies it
- Semantic and hybrid search with reranking.
- Automatic concept discovery and resource relationship suggestions.
- Multi-source synthesis, generated study guides, and project/skill maps.
- Advanced reading analytics, recommendation systems, visual graphs, collaboration, and multi-user sharing.
- Deep integrations with every social/video platform or complex agent workflows.

## Proposed screen inventory for design review

The pre-code mockup package should include:

1. **Home / Today:** recent resources, continue learning, quick capture, and a small number of relevant next actions.
2. **Library:** all resources, grid/list switch, search, filter/sort bar, collections, bulk actions.
3. **Collection / Shelf:** a focused view of a learning topic with its saved resources.
4. **Add resource:** paste URL/manual entry, preview metadata, duplicate warning, extraction progress/failure.
5. **Resource detail:** metadata, original source, extracted content state, personal notes, tags, related resources.
6. **Reader / annotation view:** comfortable typography, highlights, source location, note-taking (may be a separate state of resource detail).
7. **Universal search:** keyword results, filters, matching explanation, later semantic answer states.
8. **Ask your library:** source-grounded answer with citations, selected sources, uncertainty and failure states.
9. **Concept / project connection:** a focused view of source → idea/note → artifact links, subject to validation.
10. **Settings / data portability:** theme, import/export, storage/privacy and integration status.

Mockups should also show representative empty, loading, error, and narrow-screen states for the primary workflows; not every screen needs its own polished marketing-style mockup.

## Mockup approval gate

Before application code:
- Present two or three meaningfully different visual directions, not minor palette variations.
- Include a reference board, design rationale, and key design principles.
- Create reviewable high-fidelity screen mockups for the primary workflows, populated with realistic mixed-media examples.
- Make navigation, interaction states, responsive behavior, typography, spacing, and component patterns visible.
- Walk through capture → library → resource detail/notes → search, plus at least one error/partial-extraction state.
- Record feedback and revise the chosen direction.
- Obtain explicit user approval of the chosen direction and first-slice scope.

Mockups can be created as a Figma file, a standalone interactive prototype, or static screen boards. The choice should be made after checking tool availability and what makes iteration easiest. A coded prototype may be used strictly as a disposable design artifact, but it is not the application implementation; product code remains gated on approval.

## Open product decisions

- Is Atlas desktop-first with mobile capture, or should mobile reading be co-equal?
- Should the default home be an editorial library, a “continue learning” workspace, or a hybrid?
- Which media types must be fully readable inside Atlas versus linked out?
- Is Obsidian the canonical home for personal notes, or just one integration target?
- Which sources and formats are supported in v1 based on actual capture reliability and terms?
- Does the first AI feature materially improve a recurring workflow enough to justify its cost and complexity?
