# Atlas AI Workflow Research Plan

- **Status:** In research; no AI architecture or provider selected
- **Parent:** [Product Requirements & Use-Case Registry](../product/requirements-use-case-registry.md)

## Principle
Use the simplest workflow that meets the quality bar. Atlas must remain useful without AI. Deterministic code handles permissions, URL validation, deduplication and state transitions. Models are not authorization boundaries or sources of truth. Imported pages/files are untrusted data, not instructions.

## Jobs to evaluate
1. Normalize metadata; classify types; suggest tags/collections.
2. Summarize/explain one source.
3. Ask questions across the user's library.
4. Compare sources and surface disagreements.
5. Generate source-linked flashcards, quizzes and retrieval prompts.
6. Suggest next learning actions from explicit user goals.
7. Suggest links between resources, ideas and projects.
8. Draft study guides/syntheses with citations.
9. Support natural-language search when exact terms are forgotten.

## Candidate workflows

| Pattern | Candidate use | Trade-offs / tests |
|---|---|---|
| Deterministic rules/code | Validation, authz, dedupe, status transitions | Default when rules suffice; predictable tests |
| One model call with structured output | Metadata cleanup, tags, short summaries | Low orchestration cost; schema/provenance/abstention checks |
| Keyword/full-text search | Exact terms, titles, code symbols | Strong baseline; may miss conceptual phrasing |
| Embeddings/vector retrieval | Semantic similarity | Test false positives, privacy and indexing cost |
| Hybrid retrieval + reranking + grounded generation (RAG) | Library Q&A, comparison | Measure recall, citation support, unsupported claims, latency and cost |
| Query rewrite/multi-query | Vague/ambiguous questions | May improve recall; adds cost, latency and noise |
| Bounded typed-tool workflow | Multi-step research/study guide | Allowlisted tools, step/time budgets, traces and red-team tests |
| Human-approved plan/execute | Bulk organization, project links, study plans | Preview diffs, confirm, undo and audit |
| Background pipeline | OCR, chunking, indexing, summaries | Test retries, idempotency and dead-letter recovery |
| Local/small model | Private/lightweight tasks where feasible | Benchmark quality, hardware, throughput and license |
| Multi-agent orchestration | No default use case | Defer unless simpler workflows fail measurable tests |

## Evaluation protocol
Use synthetic or explicitly approved data, not private exports in unapproved providers. Create representative tasks with expected sources. Measure task success, usefulness, retrieval recall, citation support, factuality, unsupported claims, abstention, metadata accuracy, prompt-injection resistance, tenant isolation, median/tail latency, cost per successful task and recovery behavior. Establish baselines before comparison; avoid cherry-picked demos.

## Security/privacy constraints
- Application enforces authorization before retrieval/data access.
- Start with read-only AI tools; no arbitrary shell, SQL, filesystem or unrestricted network.
- Delimit untrusted content and test malicious instructions in pages/PDFs/repos.
- Typed allowlisted tools, user/resource scope, input limits and output validation outside model.
- Confirm before external writes, sharing, destructive/bulk changes or new-provider processing.
- Minimize context; disclose providers, data sent, retention and deletion.
- Every generated summary, claim, flashcard or guide links to source and distinguishes evidence from synthesis.

## Research checklist
- [ ] Build 10–20 library questions with expected source passages.
- [ ] Test missing, ambiguous and conflicting metadata.
- [ ] Add prompt-injection cases in pages, PDFs and repositories.
- [ ] Compare keyword/full-text with hybrid retrieval.
- [ ] Evaluate citations/abstention for Q&A and comparison.
- [ ] Test generated flashcards for source fidelity and answerability.
- [ ] Compare ingestion-time vs on-demand processing cost/latency.
- [ ] Test whether personalization beats explicit user-selected goals.
- [ ] Recommend per job: no AI, structured call, RAG, bounded tools or human-approved workflow.

## Initial hypotheses (not decisions)
Deterministic code for validation/authz; structured calls for optional metadata and first-pass summaries; hybrid retrieval/reranking for Q&A if benchmarks justify it; human approval for project links and bulk changes; no multi-agent system without demonstrated need.

## Sources
- [RAG for educational applications: systematic survey (2025)](https://doi.org/10.1016/J.CAEAI.2025.100417) — 51-study survey.
- [AI-empowered self-regulated learning review (2025)](https://www.nature.com/articles/s41539-025-00319-0).
- [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) and [OWASP Agentic Applications Top 10 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).

## Exit criteria
Every AI job has a workflow recommendation, reason simpler alternatives are insufficient (if applicable), evaluation evidence/experiment plan, privacy/cost/latency implications and explicit deferrals. This plan alone does not authorize implementation.