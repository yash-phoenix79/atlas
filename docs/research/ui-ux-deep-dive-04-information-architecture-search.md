# UI/UX Deep Dive 04 — Information Architecture, Search, and Retrieval

- **Status:** Research synthesis; Atlas-specific rules remain hypotheses until tested.
- **Research date:** 2026-10-11
- **Purpose:** Design a resource library that remains findable as it grows from dozens to thousands of items.
- **Evidence boundary:** This chapter synthesizes information architecture, search UX, and information-foraging concepts. It is not a benchmark of Atlas's future search implementation.

## 1. The real job of information architecture

Information architecture (IA) organizes content, labels, navigation, and relationships so people can understand what exists and find what they need. For a personal library, IA has two competing goals: help users create meaningful structure, and avoid requiring them to maintain a perfect structure before saving or retrieving anything.

A library that depends entirely on folders breaks when users don't remember where an item was filed. A library that depends entirely on search breaks when text extraction is unavailable, the query is vague, or users remember a visual cue rather than words. Atlas should combine several retrieval paths without requiring all users to use all of them.

## 2. Separate content, metadata, organization, and relationships

Treat these as different concepts in both the product model and UI:

- **Resource:** the saved URL/file/note and its stable identity.
- **Source provenance:** original URL, provider, author/publisher when known, capture time, and other provenance.
- **Derived representation:** extracted text, thumbnail, summary, OCR, transcript, or embedding.
- **User metadata:** title correction, tags, personal notes, status, and why it matters.
- **Collection membership:** user-defined groupings; one resource may belong to multiple collections.
- **Relationships:** links to other resources, ideas, skills, projects, or decisions.

Conflating these creates UX surprises. Removing a resource from a collection should not delete it. Re-running extraction should not overwrite user-authored notes. A generated summary should not become the canonical source title without explicit user choice.

**Atlas hypothesis:** keep a stable resource record and represent processing outputs and user organization as separate, inspectable concepts.

## 3. Taxonomy, tags, and collections are different tools

- **Collections** answer: “Which group do I want to browse together?” They can support curated projects, topics, reading lists, or temporary working sets.
- **Tags** answer: “Which attributes or topics describe this item?” Tags are useful across collections but can become noisy if uncontrolled.
- **Search** answers: “Can I find the item from the clues I currently remember?” It should not depend on a user having organized everything correctly.
- **Relationships** answer: “What is this connected to?” They can connect resources to concepts, decisions, skills, or projects, but creating links has a cost and should be worthwhile.

**Design rule:** do not force users to pick a collection or create tags before saving. Let them organize immediately or later. Provide defaults that preserve retrieval even when user organization is absent.

## 4. Design metadata around retrieval tasks

Metadata is valuable when it helps users distinguish, filter, trust, or act on a resource. More metadata is not inherently better.

Potential metadata: original and user-edited titles, canonical source URL/domain, resource type, author/publisher when reliable, capture date, tags/collections, extraction status, user notes, “why I saved this,” and content-specific fields such as duration/page count/repository owner when useful.

Classify fields by provenance: original/source-provided, user-authored, machine-extracted, or AI-generated. Show uncertainty and allow correction. Do not present inferred fields as verified facts.

## 5. Search is a retrieval system, not just a text box

A search experience has multiple stages: query formulation, interpretation, retrieval, ranking, result scanning, candidate inspection, and refinement. A search result is only useful if matching content is indexed, ranking is appropriate, the preview gives enough context, and the user can move through candidates without losing their place.

### Search fields to consider
- User-authored title and notes
- Original title and description
- Extracted page/document text where available
- Source, domain, author, resource type
- Tags and collection names
- User-provided “why saved” text

Do not claim full-text search for content that was not successfully extracted or indexed. Show whether a resource is searchable by title only, metadata, or full text when that distinction affects user expectations.

## 6. Filters and facets

Possible Atlas filters include resource type, collection, tag, source/domain, capture date range, processing status, favorite/archived state, and whether notes or extracted text exist.

Rules:
- Make active filters visible and easy to remove.
- Show counts only when accurate and useful.
- Avoid overwhelming users with every possible facet by default.
- Keep filters stable while opening and returning from results.
- Provide a clear empty-state recovery route.
- Make filter combinations understandable and resettable.

**Hypothesis:** common filters should be visible, while lower-frequency facets can be revealed progressively. Test this with realistic libraries rather than selecting filters from an imagined feature list.

## 7. Zero results and poor matches

“No results” is a high-friction moment. Help users understand whether the query is too narrow, the content is unindexed, or the resource may not exist.

Recovery options:
- Clear one or more filters.
- Search titles and metadata if full text is unavailable.
- Offer spelling/synonym suggestions only when confidence is adequate.
- Search within a broader scope.
- Show resources with partial matches.
- Explain if a resource's content is not indexed.
- Provide a route to add or recapture the missing resource.

Do not silently broaden the query in ways that make results feel arbitrary. Explain the adjustment or provide it as an option.

## 8. Ranking and relevance

Ranking is a product decision, not a neutral implementation detail. Exact title matches, source matches, recency, personal annotations, and semantic similarity can compete. The appropriate ranking depends on the task.

A conservative starting approach:
- Prioritize strong lexical matches in title and source metadata.
- Use available full-text matches with visible snippets.
- Treat semantic similarity as an additional retrieval path, not an unquestioned replacement for exact matches.
- Consider recency as a tie-breaker rather than letting new items always outrank strong matches.
- Explain query scope and active filters.
- Evaluate relevance with a curated query set and human judgments before claiming quality.

Potential evaluation metrics include success@k and reciprocal rank, but metrics do not replace observing whether people actually find the intended item.

## 9. Browse and search complement each other

Browsing supports serendipity and memory cues; search supports directed retrieval. Atlas should make it easy to switch modes:
- Search from any library/collection context.
- Browse collections without losing global search access.
- Return from a detail view to the previous result context.
- Use a visual grid for exploration and a compact list for comparison.
- Show related resources only when the relationship is grounded and useful.

Avoid making the homepage a giant dashboard of charts or AI suggestions that displaces the library itself.

## 10. Search result design

A result should quickly answer: What is this? Why did it match? Is it the item I remember? What can I do next?

Proposed result structure:
1. Title
2. Source/type identity
3. Matched excerpt or personal note when available
4. Useful preview
5. Relevant date or collection cue
6. Clearly discoverable open action
7. Optional contextual actions

Highlight matched terms carefully; excessive highlights make results noisy. Snippets must come from the actual source or user notes and should not imply that generated prose is a direct quote.

## 11. Growth and scale

Design and test with realistic library sizes:
- Empty library
- 20 resources
- Hundreds or thousands of resources
- Many similar items
- Missing thumbnails
- Unsupported sources
- Failed extraction
- Duplicate captures
- Mixed resource types
- Long and multilingual titles

Pagination, infinite scroll, virtualization, and server-side filtering have different trade-offs. UX should preserve keyboard access, scroll context, stable selection, and useful loading feedback regardless of implementation.

## 12. Atlas information-architecture hypothesis

Candidate top-level model:
- **Library:** all saved resources.
- **Collections:** intentional groupings.
- **Search:** global retrieval with visible scope.
- **Recent:** recent captures/opens as a secondary shortcut.
- **Inbox/Needs attention:** only if a meaningful state requires action.
- **Ideas/Projects/Skills:** potential later relationship layer, not necessarily MVP navigation.
- **Settings and data controls:** privacy, export, backup/restore status, and account management.

Do not finalize navigation until user tasks and product scope are tested. Too many top-level destinations create conceptual overhead.

## 13. Experiments

- **Retrieval cues:** assign tasks based on title fragments, topic, source, date, thumbnail, and personal notes; record success, time, and wrong openings.
- **Collection dependence:** compare pre-organized workflows with global search plus optional collections; measure capture friction and delayed retrieval.
- **Filter discoverability:** compare a few visible filters with a larger progressive panel.
- **Result snippets:** compare title-only, title-plus-source, and title-plus-source-plus-excerpt results.
- **Search-state preservation:** compare preserved vs reset query/filter/scroll context after inspecting candidates.
- **Duplicate handling:** capture the same URL twice and a URL with tracking parameters; test warning, merge, keep, and ignore options.

## 14. Acceptance criteria (proposed)

- Capture does not require complete organization.
- Resources with failed extraction remain findable by available metadata and original URL.
- Active filters are visible and removable.
- Opening a result preserves useful search context when returning.
- Result snippets are traceable to source or user-authored text.
- Duplicate handling never silently deletes or merges user data.
- Search status communicates when content was not indexed.
- The same resource remains identifiable across collection and global library views.
- Users can find representative items through more than one appropriate route when one clue is unavailable.

## 15. Sources and confidence

- Rosenfeld, Morville & Arango, *Information Architecture for the Web and Beyond*: [O'Reilly](https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/).
- Pirolli & Card (1999), [Information Foraging](https://doi.org/10.1037/0033-295X.106.4.643).
- NN/g, [Search UX](https://www.nngroup.com/articles/search-visible-and-simple/).
- NN/g, [Faceted Search](https://www.nngroup.com/articles/faceted-search/).
- W3C, [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

| Recommendation | Confidence |
|---|---|
| Keep search and organization complementary | High as design rationale; exact IA needs testing |
| Preserve source, user metadata, and derived output separately | High for provenance and trust |
| Expose extraction/indexing status when it affects searchability | High if these are real system states |
| Specific ranking weights will be optimal | Unknown until evaluated |
| Proposed top-level navigation is optimal | Low until user tasks and scope are validated |

## Open questions
- Which retrieval clues do Atlas users remember most often?
- How should duplicates be defined across canonical URLs, tracking parameters, and file uploads?
- Which content fields can be extracted reliably and legally?
- Which facets are useful often enough to appear by default?
- How should semantic search communicate uncertainty and coexist with exact matching?
