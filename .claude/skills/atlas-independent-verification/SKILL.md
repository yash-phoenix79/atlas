---
name: atlas-independent-verification
description: Independently verify an Atlas change against acceptance criteria, tests, security and actual runtime evidence.
---

# Atlas Independent Verification

1. Read the task contract, requirements and diff; do not rely on the implementer's summary alone.
2. Map each acceptance criterion to a concrete check and expected result.
3. Inspect changed files, callers, error paths, authorization and migration implications.
4. Run relevant deterministic checks if the environment permits; record exact commands and actual results.
5. Check failure, empty, retry, duplicate, concurrency and permission-denial cases as relevant.
6. For AI changes, inspect provenance, evaluation evidence, budget controls and provider-failure behavior.
7. For UI changes, check responsive behavior, keyboard access and loading/error states where tooling permits.
8. Report pass/fail/not-run separately, with evidence and residual risks. Do not mark unrun checks as passing.