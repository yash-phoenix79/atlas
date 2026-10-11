# Atlas Product Vision

- **Status:** Draft — hypotheses to validate through research
- **Last updated:** 2026-10-11

## Vision

Build a beautiful, personal AI bookshelf that helps a person move from collecting resources to understanding ideas and applying what they learn.

Atlas should make it easy to discover, capture, organize, retrieve, connect, and use knowledge across books, articles, PDFs, videos, GitHub repositories, and personal notes.

## Initial operating model

Atlas is initially a **single-user, personal-first tool** for its owner—not a multi-user SaaS or startup. Prioritize owner-controlled data, a custom interface, reliable capture, portability, backups, and low maintenance. Prefer local-first or self-hosted deployment where practical, and avoid external services unless they deliver clear value and their privacy/cost trade-offs are explicit.

“Capture from any app” means supporting common pathways (share sheet, paste URL, file upload, browser capture, bulk import, and selected integrations) and gracefully saving originals when full extraction is blocked. It does not mean promising full content access from every platform.

## Problem hypothesis

People collect more useful material than they can reliably process. Resources become fragmented across bookmarks, files, reading apps, and notes. Search can find an item without helping the user recover the relevant idea, understand its source, connect it to other ideas, or apply it to a real project.

This is a hypothesis, not yet a proven user-research finding. Product teardowns and workflow tests must validate, narrow, or reject it.

## Intended knowledge flow

**Resource → understanding → concept/note → skill or decision → project/output**

Atlas should preserve links between these stages where useful, without forcing every resource through a heavy workflow.

## Initial product principles

1. **Personal tool first:** optimize for one trusted owner and avoid multi-user complexity unless requirements change.
2. **Owner-controlled data:** keep canonical records portable, support backups/deletion, and make external service use explicit.
3. **A bookshelf, not a dumping ground:** make discovery and deliberate use of resources feel inviting.
2. **Beautiful by default:** thoughtful typography, visual hierarchy, covers, whitespace, useful density, and polished interaction states.
3. **AI with provenance:** answers should identify supporting sources and distinguish source facts from synthesis.
4. **Personal and portable:** users should retain control of their notes and resource metadata.
5. **Complement existing tools:** investigate a clear relationship with Obsidian instead of recreating every note-taking feature.
6. **Support outcomes:** connect what is read to concepts, projects, and work produced.
7. **Small, coherent workflows:** prioritize complete journeys over a broad but shallow feature list.

## Questions research must answer

- Is the primary job collecting, reading, finding, asking questions, synthesizing, or applying knowledge?
- What should make Atlas meaningfully better than combining existing tools?
- Which resource types are essential for the first release?
- What does a user need to see to trust an AI answer?
- What data belongs in Atlas versus Obsidian?
- Which capabilities need to work locally, and which can rely on hosted services?
- What is the first workflow worth building and testing?

## Non-goals for now

These are provisional exclusions until research provides a reason to revisit them:

- Building a general-purpose autonomous agent platform.
- Supporting every media format in the first release.
- Introducing a graph database merely because knowledge has relationships.
- Running multiple autonomous agents in parallel without a demonstrated benefit.
- Replacing Obsidian as a general-purpose Markdown knowledge base.
- Committing to a specific model provider or paid AI dependency before evaluation.

## Success criteria

Define measurable MVP criteria only after the product and workflow research. Potential dimensions include capture success, retrieval relevance, time to find a useful source, citation quality, export completeness, usability, and cost per meaningful AI interaction.
