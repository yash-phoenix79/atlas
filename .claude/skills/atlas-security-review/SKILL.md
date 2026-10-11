---
name: atlas-security-review
description: Threat-model and review Atlas changes involving identity, user data, imported content, AI, secrets, integrations or deployment.
---

# Atlas Security Review

1. Read AGENTS.md, the security program and AI/coding-agent security rules before reviewing sensitive changes.
2. Identify assets, trust boundaries, attackers, entry points, data flows and potential impact.
3. Check authentication and server-side authorization, tenant isolation, input validation, secrets, logging, rate limits and least privilege.
4. For URL/file ingestion, check SSRF, unsafe redirects, content-type/size limits, parser risks, untrusted instructions, resource exhaustion and safe network egress.
5. For AI, check prompt injection, tool permission boundaries, source attribution, data sent to providers, retention terms, budget exhaustion and external side effects.
6. For integrations/import/export, check path traversal, data leakage, conflict/deletion semantics and credential scope.
7. Require deterministic regression tests for material findings; AI review alone is not a security test.
8. Report severity, evidence, exploit preconditions, mitigation, test result and residual risk. Do not claim a scan or exploit test ran if it did not.
9. Do not weaken controls to obtain a green test suite. Request owner approval for privileged or destructive operations.