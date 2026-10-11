---
name: atlas-ai-evaluation
description: Design a grounded, measurable and cost-aware evaluation for an Atlas AI or retrieval capability.
---

# Atlas AI Evaluation

1. Start with a user task and an explicit success criterion; do not start with a model.
2. Create a small representative golden set including normal, ambiguous, irrelevant and adversarial cases.
3. Establish a deterministic or simpler baseline before comparing models.
4. Define task-specific quality metrics, source support/provenance, abstention, latency, retries and cost per successful task.
5. Compare model/provider versions on identical inputs; cite current official docs/pricing and record access date.
6. Test malformed outputs, timeouts, rate limits, provider outages, prompt injection, exhausted budgets and sensitive-data boundaries.
7. Keep credentials server-side; redact logs and add usage tracking, bounded retries and a kill switch.
8. Treat Jev as a candidate only for typed decision tasks; compare it against rules and an LLM on labeled examples.
9. Report results, limitations, uncertainty and adopt/defer/reject recommendation. Never fabricate benchmark results.