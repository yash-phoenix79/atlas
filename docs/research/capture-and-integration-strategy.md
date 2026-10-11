# Atlas Capture and Integration Strategy

- **Status:** Proposed integration strategy; not implementation authorization
- **Research date:** 2026-10-11
- **Owner intent:** Atlas should capture valuable resources from external apps, interoperate with Obsidian and other knowledge tools, and preserve user control and portability.
- **Canonical requirements:** [Requirements registry](../product/requirements-use-case-registry.md), especially ATL-001–004, ATL-008, ATL-010–011, ATL-015, ATL-031–034.
- **Evidence limitation:** This is a product/architecture strategy, not a completed source-by-source feasibility audit. Current provider APIs, permissions, terms, and capabilities must be verified before implementation.

## 1. Product promise

Atlas should make capture easy without promising that every source can be fully extracted. The invariant is: **preserve the original reference or file when legally and technically possible, report exactly what was captured, and never disguise a failed extraction as success.**

The capture pipeline should distinguish:
- Original source reference or uploaded original.
- Metadata (title, creator, publication date, type, source domain).
- Extracted content (when available and permitted).
- Derived artifacts (thumbnail, transcript, parsed text, summary).
- User-owned notes, tags, collections and relationships.
- Processing state and provenance for each derived artifact.

Extraction may be unsupported, partial, blocked, rate-limited, or unavailable without authentication. In those cases the original URL/file should remain useful and retryable where appropriate.

## 2. Capture entry points

### First slice
1. Paste a URL.
2. Upload a file.
3. Edit metadata and choose collection/tags.
4. View status: saved, queued, partially processed, ready, unsupported, failed, retrying.
5. Open original source and export captured metadata.

### Next capture surfaces
- Android share sheet for links/text/files.
- Browser extension or browser-native capture.
- Quick capture panel and bookmarklet as a lower-cost fallback.
- Bulk import from browser bookmarks and common export formats.
- Source-specific adapters after usage evidence and feasibility checks.

Capture adapters should call a common ingestion contract rather than each building a separate resource model. Processing should be asynchronous, idempotent, retryable, observable, and bounded against malicious URLs/files.

## 3. Source adapter matrix to research

| Source family | Initial capture | Potential enrichment | Important limitations to verify |
|---|---|---|---|
| General web pages | URL, title if available, source domain | Readable text, metadata, thumbnail | Robots/terms, paywalls, dynamic pages, SSRF and redirect defense |
| PDFs and documents | Original upload or URL | Text, page references, metadata, thumbnails | Size/type validation, parser isolation, scanned/OCR limits |
| YouTube and video | URL and available metadata | Transcript, timestamps, thumbnail | API/auth availability, caption availability, creator rights and provider terms |
| X/social posts and threads | URL and user notes | Text/media/author metadata where permitted | API access, authentication, rate limits, changing platform rules; do not bypass controls |
| GitHub | Repository/issue/PR URL | README, metadata, selected docs/releases | API limits, private repository permissions, license and commit/version provenance |
| Books | ISBN/URL/manual entry and notes | Bibliographic metadata, personal notes | Do not assume access to copyrighted full text |
| Podcasts | Episode URL and metadata | Transcript when available and permitted | Feed/provider availability, transcript rights and API constraints |
| Images and other files | Upload or URL | Dimensions, OCR/metadata where appropriate | Malware scanning, file validation, privacy, storage limits |
| Courses and learning platforms | Course/lesson URL and personal notes | Metadata or permitted transcripts | Authentication, contractual restrictions, no circumvention |
| Notes and Markdown | Markdown/file import | Frontmatter, links, tags, attachments | Preserve user semantics and stable references |

A source family may have different support levels. UI should disclose the actual capability of each source rather than display a generic “fully supported” badge.

## 4. Obsidian interoperability

Obsidian interoperability is an explicit product requirement, but we should not begin with risky bidirectional synchronization.

### Staged approach
1. **Markdown export:** export a resource or selected collection with title, source URL, notes, tags and stable Atlas ID.
2. **Markdown import:** ingest notes and folders, preserve frontmatter, tags, links, embeds and attachments to the extent tested.
3. **Round-trip validation:** import a representative vault, export it, and compare links, attachments, frontmatter, Unicode, folder paths, and notes.
4. **Optional vault integration:** only after testing real workflows and defining a conflict model. Start with an explicit user-selected folder or a documented one-way sync if that fits user needs.
5. **Careful bidirectional sync:** only if necessary, with preview, per-item conflict resolution, recoverable deletion/tombstones, version history, and a clear source-of-truth policy.

### Required decisions
- Is Atlas the source of truth for resources, or does a particular Markdown file remain authoritative?
- Does sync mean import/export on demand, one-way sync, or bidirectional sync?
- How are Obsidian wikilinks, block references, embeds, properties/frontmatter, aliases, and attachments represented?
- What happens when the same item is edited in both products?
- How are moves and deletes propagated? Can deletion be undone?
- How do users inspect the exact files Atlas will write before granting access?

**Safety invariant:** never silently overwrite or delete a user's vault. Make backups or versioned writes, preview destructive operations, and provide a recovery path.

## 5. Canonical resource and source-of-truth model

- One canonical Atlas resource ID per logical saved item.
- The same resource can appear in multiple collections, boards and graphs without duplicating the underlying original.
- Preserve original URL/file and provenance independently from extracted/AI-derived artifacts.
- Record import origin and external IDs when available.
- Separate user-authored notes from extracted source content and AI-generated material.
- Store sync cursors, checksums/version metadata and last successful operation where applicable.
- Treat external integration credentials as secrets; request least privilege, allow revocation, and avoid collecting credentials unless necessary.
- Do not send private content to external AI or processing providers without clear disclosure and user control.

## 6. Integration architecture principles

- Source adapters normalize input to a common capture contract.
- Durable job queue and idempotency prevent duplicate resources on retry.
- Separate original storage from rebuildable derived artifacts.
- Every job records status, timestamps, retryability, and a human-readable failure reason.
- Apply SSRF protections to remote URLs, including redirects and resolved IP ranges; block private/loopback/link-local destinations and revalidate redirect targets.
- Treat imported pages, files, repository content, transcripts and metadata as untrusted input.
- Enforce per-user authorization on API, storage, search, background jobs, exports and integration connections.
- Respect provider terms, copyright, rate limits and authenticated-access boundaries; do not bypass paywalls or technical restrictions.
- Keep an adapter capability registry with supported inputs, enrichment, limitations, terms, authentication, cost, and last verification date.

## 7. Acceptance tests

### Capture
- Duplicate URL and retry do not create accidental duplicate resources.
- A URL with blocked extraction remains saved with a clear status.
- Partial extraction shows what is missing.
- File validation and parser failures do not corrupt existing data.
- Redirects, private IP targets, oversized files, malformed files and prompt-injection content are handled safely.
- User edits to metadata are not silently overwritten by later extraction.

### Obsidian
- Markdown round-trip test covers frontmatter, Unicode, wikilinks, embeds, attachments, tags, aliases and relative paths.
- Import/export is idempotent or clearly explains when it is not.
- Conflicts are previewed and recoverable.
- Delete/move semantics are tested and never destructive without explicit confirmation.
- Revoke access and disconnect integration behavior are documented.

### Ownership and portability
- Export contains user metadata, notes, collections, tags, provenance, stable IDs and available originals.
- Restore into a clean environment is tested.
- Users can disconnect providers and revoke tokens.
- Integration failures do not lock users out of their own data.

## 8. Prioritization recommendation

**P0:** paste URL, file upload, original preservation, honest processing states, metadata correction, secure processing, portable export and tested backups/restore.

**P1:** Android share, browser capture, bulk bookmark/import flows, Markdown/Obsidian import-export, and the highest-value source-specific adapters selected from actual use.

**Later:** bidirectional Obsidian sync, broad provider integrations, APIs/MCP, and n8n workflows after permission, security, and maintenance costs are understood.

This order preserves the long-term integration vision without making the first release depend on every external provider working perfectly.
