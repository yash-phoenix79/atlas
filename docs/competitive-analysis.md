# Atlas Competitive Analysis

- **Status:** Initial desk research recorded; hands-on teardowns and user validation remain open.
- **Last updated:** 2026-10-11
- **Canonical evidence dossier:** [Competitor Discovery Dossier](research/competitor-discovery-dossier.md)
- **Method:** Follow the evidence standards in [research/README.md](research/README.md) and the [product teardown template](research/product-teardown-template.md).

## Initial conclusion

The category already includes strong tools for bookmark management, archiving, reading/highlighting, research metadata, and AI-assisted retrieval. “Save everything” and “add AI chat” are not sufficient differentiators on their own.

Atlas's current differentiation hypothesis is a **personal learning library that connects saved resources to ideas, decisions, skills, and projects**, while preserving source provenance and portable data. This remains a hypothesis, not a validated market gap.

## Initial product implications

1. Treat reliable capture, user-correctable metadata, discoverability, and export as foundations.
2. Keep the original URL/file even when extraction fails; communicate partial success honestly.
3. Use a consistent visual language across books, articles, PDFs, videos, repositories, social posts, and notes.
4. Keep the core library useful without AI; AI answers should cite inspectable sources and disclose uncertainty.
5. Integrate with tools such as Obsidian where useful rather than rebuilding every note-taking workflow.
6. Make privacy, strict user isolation, export, and tested recovery part of product quality—not a future hardening sprint.
7. Prototype and test the end-to-end journey before choosing a framework or building production UI.

## Research status

| Product | Initial evidence status | Next action |
|---|---|---|
| Jeff — A Bookshelf You Can Ask | Public landing URL reachable, but page content was not readable through the inspection method | Manual browser inspection; record actual flows and limitations |
| Karakeep | First-party docs reviewed; features are primary-source claims, not independently tested | Test capture, search, export, and failure states |
| Linkwarden | First-party docs reviewed; features are primary-source claims, not independently tested | Test preservation, annotation, collections, export |
| Raindrop.io | First-party marketing/product page reviewed | Verify plan boundaries and test mixed-resource capture/search |
| Readwise Reader | First-party docs reviewed | Test mobile/browser capture, reading, highlights, export |
| Obsidian Web Clipper | First-party docs reviewed | Test templates, capture fidelity, Markdown output, handoff |
| Zotero | First-party docs reviewed | Test bibliographic capture, snapshots, annotations, export |
| Readeck | Official site returned 403 to the inspection method; no feature conclusions made | Manual browser inspection and official repository/license verification |

## Decision gate

Do not finalize the MVP, architecture, or visual direction solely from this desk research. Complete representative workflow tests and validate the differentiation hypothesis with real users. Then update the feature blueprint and requirements, prepare 2–3 visual directions and high-fidelity core screens, and obtain explicit approval before production UI coding.
