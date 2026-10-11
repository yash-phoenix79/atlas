# Atlas Security-First Engineering Program

- **Status:** Accepted security requirements; controls are not yet implemented or verified
- **Last reviewed:** 2026-10-11

## Executive principle

Security is a product requirement and architectural constraint, not a launch checklist. Atlas cannot guarantee data will never be stolen or lost. It can reduce attack probability and impact, limit blast radius, detect failures, and make recovery demonstrably possible.

Use complementary references:
- [OWASP ASVS 5.0](https://github.com/OWASP/ASVS) as the application-control verification catalogue.
- [NIST SSDF SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) as the secure development lifecycle framework.
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) for recurring threat identification and mitigation.
- For AI features, add [OWASP AISVS](https://owasp.github.io/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/), [OWASP LLM Top 10 2025](https://genai.owasp.org/llm-top-10/), and [OWASP Agentic Applications Top 10 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).

These are reference frameworks, not certifications.

## Security objectives

1. **Confidentiality:** only authorized identities and explicitly permitted services can access private content.
2. **Integrity:** unauthorized actors cannot silently alter resources, notes, provenance, access rules, or backups.
3. **Availability and recovery:** failures, accidental deletion, ransomware, or infrastructure loss do not automatically become permanent data loss.
4. **Accountability:** security-relevant actions can be investigated without logging private content or credentials.
5. **Verifiability:** every material security claim has a test, configuration artifact, operational exercise, or review record.

## Assets to protect

- Original URLs, metadata, extracted page text, PDFs, files, thumbnails and transcripts.
- Private notes, highlights, annotations, tags, collections, search history and generated artifacts.
- Account identifiers, authentication/session material, invite tokens, recovery flows and API credentials.
- Database records, object storage, search indexes, embeddings, queues, caches, logs and temporary files.
- Backup archives, database snapshots, encryption keys, deployment credentials and CI/CD tokens.
- AI prompts, retrieved context, tool outputs, provider responses and model/API credentials.
- Source code, release artifacts, dependency lockfiles, build provenance and maintainer accounts.

## Threat actors and failure modes

- An unauthenticated remote attacker exploiting a web/API vulnerability.
- A legitimate user trying to access another user's data or escalate privileges.
- An attacker with a stolen password, session cookie, invite link or API key.
- A compromised dependency, GitHub Action, package maintainer, coding-agent skill or deployment workflow.
- A malicious or compromised source page/PDF attempting SSRF, parser exploitation, stored XSS, or indirect prompt injection.
- A compromised host, database, storage bucket, backup, CI runner or administrator account.
- A malicious, mistaken, or over-permissioned AI agent/tool.
- Accidental deletion, buggy migration, failed deploy, ransomware, provider outage, or silent backup failure.

## Trust boundaries to document

Before production readiness, maintain a data-flow diagram for:
1. Browser/mobile client and application/API.
2. Authentication/session service.
3. Application and database/search index.
4. Application/worker and object storage/temp processing.
5. Capture worker and arbitrary public URLs/source providers.
6. Application and external AI/extraction providers.
7. Workers, queues, caches and logs.
8. Production and CI/CD, deployment credentials, backups and restore environment.
9. Maintainer workstation and coding agents, MCP servers, skills and repository.

For each flow document identity, data sent, trust boundary, credentials, retention, network destinations and failure behavior.

## Non-negotiable controls

### Identity and authorization
- Use maintained authentication/session libraries; do not invent password hashing, session tokens or recovery cryptography.
- Resolve the acting user from a server-verified session. Never trust a client-supplied owner/user ID.
- Deny by default and authorize every request and object access, including nested resources and bulk operations.
- Scope database queries, storage keys, search results, exports, background jobs and AI retrieval to the authenticated principal.
- Test cross-user access with guessed IDs, bulk APIs, download URLs, async tasks and error paths.
- Consider database row-level security as defense in depth; it does not replace application authorization tests.
- Keep sharing disabled by default. Explicit sharing needs a separate model, revocation and tests.

### Web and API
- Validate inputs server-side with type and length limits; use parameterized queries and context-appropriate output encoding.
- Use framework protections against CSRF, XSS, injection, unsafe deserialization, open redirects and clickjacking. Add a restrictive Content Security Policy where compatible.
- Use secure cookie attributes (Secure, HttpOnly, appropriate SameSite), rotate sessions after authentication/privilege changes, enforce server-side expiry/revocation, and rate-limit login, recovery, invites, capture and expensive operations.
- Configure restrictive CORS; do not use wildcard origins with credentials.
- Avoid stack traces, secret values and private content in client errors.
- Bound request size, response size, timeouts, concurrency, pagination, parsing and model usage.

### Atlas-specific URL capture and SSRF
Atlas fetches user-supplied URLs server-side. This is a critical network trust boundary.
- Accept only explicitly supported schemes, normally HTTP/HTTPS; reject unexpected schemes such as file, gopher, ftp and data.
- Reject loopback, private, link-local, multicast, reserved, IPv4-mapped IPv6 and cloud metadata destinations. Validate IPv4 and IPv6.
- Prevent DNS rebinding/time-of-check-to-time-of-use gaps: connect only to a validated destination.
- Disable redirects by default. If needed, validate every redirect hop and destination.
- Apply egress rules so capture workers cannot reach internal admin services, databases, cloud metadata or private networks.
- Fetch and parse in a separate low-privilege worker with no production secrets or database-admin credentials.
- Set strict timeouts, byte/page limits, content-type checks, decompression limits, redirect limits and concurrency quotas.
- Never execute downloaded content. Render imported HTML as inert/sanitized content, not trusted application HTML.
- Treat document/media parsers as attack surface; use maintained libraries, resource limits and isolation.
- Preserve the saved URL if extraction fails.
- Reference: [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html).

### File and storage protection
- Generate storage object names server-side; never use a supplied filename as a path.
- Validate file size and actual content, not only extension or supplied Content-Type. Allowlist needed formats.
- Store uploads outside the web root/private bucket; require authorization for downloads and use short-lived signed URLs only when appropriate.
- Keep database and object storage private; use separate least-privilege credentials.
- Use TLS in transit and platform-supported encryption at rest for databases, disks, storage and backups.
- Keep keys separate from encrypted data where practical; document key rotation and recovery.
- Never invent cryptography.
- References: [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html), [Cryptographic Storage](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html), [Key Management](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html).

### Database, infrastructure and secrets
- Do not expose the database or object store directly to the public internet.
- Separate runtime, migration and administrative credentials; the runtime app must not be a database superuser.
- Apply least privilege to cloud IAM, CI tokens, storage, queues and secrets.
- Use minimal supported base images, non-root containers, read-only filesystems where feasible, dropped capabilities and restricted egress.
- Keep development, test, staging and production credentials/data separate.
- Redact resource content, tokens, cookies, prompts and authorization headers from logs.
- Never commit credentials, private keys, database dumps, production exports or real user files.
- Prefer short-lived CI credentials/OIDC where supported; rotate exposed credentials immediately.
- Lock dependencies, automate vulnerability alerts, review package ownership and transitive dependencies, pin third-party Actions to full commit SHAs, and keep workflow permissions minimal.
- Consider an SBOM and signed/provenanced releases as release automation matures.
- References: [GitHub secure use](https://docs.github.com/en/actions/reference/security/secure-use), [OpenSSF Scorecard](https://github.com/ossf/scorecard), [OSV-Scanner](https://github.com/google/osv-scanner).

## Data loss prevention and recovery

- Define recovery point objective (RPO) and recovery time objective (RTO) before hosting real users.
- Automate encrypted backups of the database, files and required recovery configuration; do not include plaintext secrets unnecessarily.
- Maintain an isolated/offline or immutable copy so a compromised production account cannot delete every backup.
- Separate backup credentials from production read/write credentials; monitor backup age and failures.
- Regularly restore into a clean isolated environment. Verify resource counts, file checksums, permissions, search rebuild and application usability.
- Test migrations and recovery plans; a database snapshot alone may not cover object storage.
- Define deletion timing for active systems and backups.
- Export metadata, notes and user-owned files where feasible, and verify exports are complete and user-scoped.
- Plan for ransomware, stolen credentials, accidental deletion, provider compromise and suspected exposure.
- Reference: [CISA StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide), which recommends offline encrypted backups and regular restoration/integrity tests.

## Encryption and operator boundary

TLS and encryption at rest are baseline controls, but do not stop an attacker who fully compromises the running application and its decryption capability. A privileged server operator may be able to read plaintext unless the architecture prevents it.

If stronger protection from the operator is required, evaluate client-side/end-to-end encryption separately. It affects extraction, full-text and semantic search, AI Q&A, previews, sharing, sync and recovery. Do not claim E2EE until its key lifecycle and limitations have been reviewed and tested.

## Release gates

### Before any production deployment
- Threat model and data-flow diagram reviewed.
- Secrets and production configuration checked.
- Authentication, authorization, input validation and session behavior tested.
- Dependency, secret, static-analysis and configuration scans run.
- TLS, cookies, CORS, CSP, database/network exposure and storage permissions reviewed.
- Logs/errors checked for sensitive leakage.
- Backup created and restoration test completed.

### Before inviting friends
- Automated two-user adversarial tests cover resources, notes, attachments, search, exports, jobs, invites and AI retrieval.
- Login/recovery/invite rate limits, session revocation and account deletion verified.
- SSRF tests cover IPv4/IPv6 private/metadata destinations, redirects, DNS rebinding defenses, timeouts and oversized responses.
- File-upload and parser limits verified.
- External provider data flows and retention/training terms documented.
- Export/deletion and backup-retention behavior tested.
- Clean restore drill passes.
- Security contact, incident response, known limitations and privacy explanation are published.
- No unresolved Critical/High findings without a documented, explicitly accepted exception. Default to fixing High findings before friends use the service.

### Ongoing
- Every PR: tests, review, secret/dependency checks and relevant static analysis.
- Regularly: dependency updates, credential review, backup restore, access review and security triage.
- After major changes: update threat model, data flows, tests and docs.
- After incidents: contain, preserve evidence, rotate credentials, restore safely, communicate appropriately and add regression tests.

## Risk register

| Risk | Primary mitigation | Evidence |
|---|---|---|
| Cross-user authorization flaw | Server-side object checks, tenant-scoped queries, optional RLS | Two-user adversarial integration tests |
| Account/session takeover | Maintained auth, secure cookies, limits, recovery and revocation | Auth/session tests and configuration review |
| SSRF through capture | Destination validation, redirect control, egress restrictions, isolated workers | Adversarial URL tests |
| Prompt injection/data leakage | Untrusted content handling, narrow retrieval, constrained tools | Synthetic hostile-source tests |
| XSS from extracted content | Inert/sanitized rendering, CSP, safe URL handling | Browser security tests |
| Malicious file/parser exploit | Limits, sandboxing, least privilege, patched parsers | Malformed-file corpus and isolation tests |
| Secret/dependency compromise | Secret scanning, locked deps, pinned Actions, least-privilege CI | CI results and review |
| Backup compromise/deletion | Isolated encrypted backups and restore drills | Restore logs and integrity checks |
| Provider/operator access | Minimize data, disclose flows, review providers, consider E2EE | Data inventory and provider review |
| DoS/cost abuse | Limits, quotas, timeouts, bounded queues | Abuse tests and alerts |

## Reference standards
- [OWASP ASVS 5.0](https://github.com/OWASP/ASVS)
- [OWASP API Security Top 10](https://api-security.owasp.org/editions/2023/en/0x11-t10/)
- [OWASP Web Security Testing Guide](https://owasp.github.io/www-project-web-security-testing-guide/)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
- [NIST SSDF SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20)
- [CISA Secure by Design](https://www.cisa.gov/securebydesign)
- [OWASP AISVS](https://owasp.github.io/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
- [OWASP LLM Top 10 2025](https://genai.owasp.org/llm-top-10/)
- [OWASP Agentic Applications Top 10 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)

These references guide prioritization. A checklist alone does not establish security.
