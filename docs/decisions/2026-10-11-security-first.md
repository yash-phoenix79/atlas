# Decision: Security Is a First-Class Product Requirement

- **Date:** 2026-10-11
- **Status:** Accepted security policy; implementation and verification remain outstanding
- **Scope:** Product architecture, application, AI features, development agents, deployment, and friend onboarding

## Context

Atlas may contain private notes, saved resources, documents, work-related material, AI context, account credentials, and personal history. The application may fetch arbitrary URLs, parse uploaded files, call external providers, and eventually support multiple independent users. Coding agents and MCP servers also create a development-time supply-chain and data-exposure surface.

No single framework, scanner, encryption setting, or AI skill can guarantee that data will never be stolen or lost. A defensible program needs prevention, least privilege, layered detection, isolation, recovery and evidence.

## Decisions

1. Security is a first-class product and architecture requirement, not post-launch hardening.
2. Use OWASP ASVS as the core application-control verification catalogue, NIST SSDF as the secure development lifecycle reference, and OWASP AISVS/LLM/Agentic guidance for AI-specific verification.
3. Maintain a threat model and data-flow inventory as the architecture evolves.
4. Treat URL fetching/SSRF, multi-user authorization, file parsing, session compromise, backups, AI prompt injection, external providers, and coding-agent/MCP privileges as priority threat surfaces.
5. Use layered deterministic tools and tests. AI security skills may assist reviews but do not replace code review, authorization tests, scanners, or restore drills.
6. Use least-agency development agents: isolated workspaces, minimal permissions, no production secrets, reviewed skills/MCP servers, and human approval for privileged or destructive actions.
7. Keep AI retrieval user-scoped and read-only by default; enforce authorization outside the model. Imported content and model output are untrusted.
8. Treat encrypted backups and successful restore exercises as core security controls. Maintain an isolated/offline or immutable copy where the selected deployment permits it.
9. Before inviting friends, require documented authorization tests, SSRF and file-processing tests, secret/dependency/static-analysis checks, provider data-flow disclosure, export/deletion verification, and a clean restore drill.
10. Do not make unsupported claims such as zero risk, unbreakable security, or end-to-end encryption. Disclose the service-operator boundary and residual risks.

## Consequences

- The detailed canonical requirements live in docs/security/security-program.md, docs/security/ai-agent-security.md, and docs/security/security-tooling.md.
- AGENTS.md now directs coding agents to these security requirements before working on sensitive surfaces.
- Tool choices remain candidates until the selected stack and deployment make their fit clear.
- The security baseline is accepted, but no implementation or scan is implied by this record.
- High-severity issues affecting private data boundaries should block friend onboarding by default.

## References

- [OWASP ASVS](https://github.com/OWASP/ASVS)
- [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP AISVS](https://owasp.github.io/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
- [OWASP LLM Top 10 2025](https://genai.owasp.org/llm-top-10/)
- [OWASP Agentic Applications Top 10 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OpenSSF Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html)
- [CISA StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)
