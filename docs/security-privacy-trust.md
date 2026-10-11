# Atlas Privacy, Security, and Trust Requirements

- **Status:** Proposed security baseline; must be reviewed before inviting external users
- **Last updated:** 2026-10-11
- **Purpose:** Turn privacy promises into design requirements, tests, and transparent user-facing explanations.

## Trust promise

Atlas should collect as little data as needed, keep each user's library private from other users, use external providers only for clearly disclosed purposes, and make export and deletion practical.

Do not claim "zero access", "end-to-end encrypted", "only you can see your data", or "military-grade security" unless the actual architecture and independent verification substantiate the specific claim.

## Threat model and honest boundaries

Distinguish these threat classes:
1. Other ordinary Atlas users trying to access someone else's records.
2. An unauthenticated attacker exploiting the application.
3. A compromised account or stolen session.
4. A compromised host, database, backup, or deployment credential.
5. The service operator or a privileged infrastructure administrator.
6. External AI, extraction, email, analytics, or hosting providers receiving data.
7. Untrusted imported content attempting prompt injection or other abuse.

Application authorization can prevent ordinary users from accessing one another's records. It does not automatically prevent a privileged host/database administrator from reading plaintext. Server-side encryption at rest helps protect stolen media/storage but does not stop the running server or privileged administrator from accessing decrypted data. Strong protection from the service operator requires a separate design such as carefully implemented client-side/end-to-end encryption; this complicates search, previews, sharing, and AI. Do not promise it unless designed and tested.

## Security-first engineering program

The detailed security program, tool choices, AI-agent controls, threat register, and verification gates are maintained in:

- [Security-first engineering program](security/security-program.md)
- [AI and coding-agent security](security/ai-agent-security.md)
- [Security tooling and verification pipeline](security/security-tooling.md)

These documents extend the requirements below. They are not evidence that controls have already been implemented or passed.

## Required baseline before inviting friends

### Identity and authorization
- Use a maintained authentication solution; do not implement password cryptography or session management from scratch.
- Require verified identity/contact channel where appropriate, secure sessions, rate limiting, and account recovery protections.
- Deny by default and authorize every request server-side.
- Scope every resource, collection, note, attachment, search result, export, and background job to its owner.
- Do not trust client-supplied user IDs; derive identity from the authenticated server-side session.
- Keep sharing disabled by default. Inviting someone to Atlas must never expose the inviter's library.
- Review authorization paths for direct object references, bulk actions, search, download links, exports, and asynchronous workers.

### Database and file isolation
- Include owner identifiers on all user-owned records and enforce ownership in query/service layers.
- Evaluate PostgreSQL row-level security as defense in depth; do not treat RLS as a substitute for correct application identity propagation and tests.
- Store uploaded files outside publicly enumerable paths; use authorized download endpoints or short-lived signed URLs.
- Avoid public bucket/container access. Apply least-privilege service credentials.
- Test cross-user read, update, delete, search, export, file access, and ID-guessing attacks.

### Data minimization and transparency
- Store only fields needed for the product.
- Keep original URLs and provenance where useful; avoid collecting contact lists, precise location, or unrelated telemetry.
- Do not sell data or use private library content for advertising.
- Avoid third-party analytics by default; if analytics are introduced, document the exact events and provide a clear choice.
- Explain what is stored, where it is stored, how long it is retained, who can access it, and what is sent to external providers.
- Never put private article text, document contents, access tokens, passwords, session IDs, or encryption keys in logs.
- Keep a concise public privacy notice and a security contact/process before wider use.

### Transport, storage, and secrets
- Use HTTPS/TLS for remote access.
- Encrypt storage and backups at rest using maintained platform capabilities and restrict access.
- Keep secrets out of Git, client bundles, logs, screenshots, and error messages; use environment-specific secret management.
- Apply least privilege to database, storage, CI, and deployment credentials.
- Keep production data out of development/test fixtures unless anonymized and explicitly authorized.
- Pin/update dependencies and run secret scanning and dependency/security checks.

### Backups, export, deletion, and incident response
- Provide a user-accessible export of metadata and personal notes in portable formats.
- Define whether original files and extracted content are included in export.
- Provide account/data deletion with clear treatment of backups, retention windows, and legal/operational exceptions.
- Automate encrypted backups, restrict their access, and periodically test restoration.
- Document how to rotate exposed secrets, revoke sessions, contain incidents, notify affected users, and restore service.
- Keep a record of security-relevant administrative actions without logging sensitive content.

### AI and content processing
- Make AI features opt-in or clearly disclosed at the point of use.
- Before sending content to a model or extraction provider, disclose which content and metadata will be sent and identify the provider.
- Verify provider retention/training policies instead of assuming requests are never retained or used for training.
- Do not send the entire library to a provider when a selected passage or limited retrieval context is sufficient.
- Separate AI-provider credentials by environment and minimize permissions.
- Treat imported web pages, PDFs, transcripts and other source text as untrusted data; never let embedded instructions override system or tool policies.
- Show source citations and make uncertainty visible; avoid sending private content to external services by default without clear disclosure.

## Required verification before inviting users

1. Write a data-flow diagram covering browser/mobile clients, application server, database, file storage, background workers, logs, backups, and external providers.
2. Create a data inventory: fields, purpose, location, retention, access, and deletion behavior.
3. Write automated authorization tests with at least two users and adversarial IDs.
4. Verify users cannot access another user's resources, attachments, notes, search results, exports, or processing jobs.
5. Test sign-up/invitation, account recovery, session revocation, and rate limiting.
6. Run dependency and secret scanning; review production configuration and access permissions.
7. Restore a backup in a clean environment and verify exports/deletions.
8. Manually review logging, errors, analytics, AI requests, and third-party network calls for leakage.
9. Document known limitations and get explicit approval before external friends use it.

Passing these checks reduces risk; it does not prove the application is perfectly secure. Repeat after meaningful changes.

## User-facing trust center

Provide a concise page in Settings explaining:
- What Atlas stores.
- Where data is hosted and who operates the server.
- Which data is sent to each external provider and for what purpose.
- Whether the operator could access plaintext.
- Export, deletion, and backup behavior.
- Sharing defaults and current limitations.
- How to report a security concern.

Use plain language and make claims match the implementation. Never imply that encryption at rest is end-to-end encryption.

## Deferred high-assurance option

Client-side/end-to-end encryption may be considered if user trust requirements justify it. Before adopting it, document consequences for full-text/semantic search, server-side extraction, thumbnails, AI Q&A, sharing, account recovery, multi-device sync, and lost keys. Do not build custom cryptography; use reviewed libraries and protocols with a threat model and specialist review.
