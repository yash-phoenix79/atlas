# Decision: Privacy and Trust Baseline

- **Date:** 2026-10-11
- **Status:** Accepted product principle; implementation details remain subject to architecture review
- **Scope:** Initial friend-ready release

## Context

Atlas is personal-first but may be used by invited friends. It may store private reading lists, notes, files, saved links, extracted content, and AI-generated artifacts. Users need understandable and testable privacy boundaries before they entrust the application with personal data.

## Decision

Atlas will be **private by default, personal-first, and designed for independent user libraries**.

1. Every user's resources, collections, notes, files, search results, exports, and background jobs must be isolated and authorized server-side.
2. Inviting a friend must never grant access to the inviter's library. Sharing is disabled unless and until an explicit sharing model is designed.
3. Collect only data needed to provide the service; avoid advertising trackers and never sell private library data.
4. Disclose what is stored, where it is hosted, who operates the infrastructure, and which external providers receive data.
5. Treat AI and extraction processing as explicit data flows; minimize what is sent and verify provider retention/training policies.
6. Support practical data export, account deletion, encrypted backups, and tested restoration.
7. Avoid unsupported privacy/security claims. Application-level isolation and encryption at rest do not by themselves prevent a privileged server operator from accessing plaintext.
8. Do not claim end-to-end encryption unless a reviewed client-side encryption design is implemented and its limitations are documented.
9. Treat the pre-invitation security checklist in ../security-privacy-trust.md as a release gate, not as optional polish.
10. No friends are invited until required isolation, export/deletion, backup/restore, and configuration checks have been performed and known limitations disclosed.

## Consequences

- User identity and ownership boundaries must be reflected in the data model from the start.
- Automated tests must verify cross-user isolation, including files, search, exports, and asynchronous processing.
- Deployment, logs, secrets, backups, and third-party integrations are part of the threat model.
- Stronger protection from the service operator, such as end-to-end encryption, remains a separate decision because it changes search, extraction, AI, sharing, and recovery.

## Canonical references

- [Privacy, security, and trust requirements](../security-privacy-trust.md)
- [Product vision](../product-vision.md)
- [Product feature blueprint](../product-feature-blueprint.md)
