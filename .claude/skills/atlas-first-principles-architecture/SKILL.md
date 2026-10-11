---
name: atlas-first-principles-architecture
description: Derive and compare Atlas architecture proposals from product invariants, failure cases and evidence rather than framework preference.
---

# Atlas First-Principles Architecture

1. Read AGENTS.md, the locked working-backwards plan and relevant approved decisions.
2. List user jobs, invariants, constraints and measurable acceptance criteria.
3. Separate verified repository facts from assumptions and unknowns.
4. Design the simplest viable architecture before considering additional infrastructure.
5. Produce at least two credible options, including a simple baseline; compare complexity, reliability, security, portability, cost, operations and reversibility.
6. Trace writes, reads, authorization, retries, duplicate requests, partial failure, deletion/export, migrations, backup/restore and provider outage.
7. Define domain entities, API contracts, state transitions, trust boundaries and test cases.
8. State strongest counterargument and what experiment would falsify the preferred option.
9. Produce an ADR proposal, not an approved decision. Wait for owner approval before broad implementation.