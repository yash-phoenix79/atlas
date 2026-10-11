# Atlas Project Governance and Repository Standards

- **Status:** Baseline accepted; implementation is incremental
- **Last updated:** 2026-10-11

## Purpose

Atlas is intended to become a maintainable, privacy-first open-source project. This document defines the target repository contract; it does not claim every file, workflow, or security control already exists.

## Principles

1. **Truthful status:** distinguish proposed, in-progress, implemented, and verified behavior. Never advertise a control or test that has not been checked.
2. **Small, coherent changes:** prefer focused pull requests and reversible decisions over broad rewrites.
3. **Documentation has a job:** write or update a document when it answers a real question, records a decision, or enables verification. Avoid empty placeholders and duplicate sources of truth.
4. **Research before irreversible choices:** verify current facts against primary sources, record uncertainty, and explain material trade-offs.
5. **Secure by default:** private data is private by default; server-side authorization is mandatory for multi-user behavior.
6. **Design is product quality:** no production UI implementation before the required mockup and scope approval gate.
7. **Portable user data:** document export, backup, deletion, and external-processing behavior.
8. **One active writer per branch:** agents must not edit the same branch concurrently. Use isolated branches/worktrees for parallel experiments.
9. **Test what matters:** prioritize authorization, capture failures, import/export, and data-lifecycle regression tests.
10. **No premature infrastructure:** adopt dependencies and services only when a clear requirement and evaluation justify them.

## Target repository contract

### Project root

- README.md: overview, current status, screenshots when approved, setup, tests, contribution and license links.
- LICENSE: chosen open-source license and required notices.
- CONTRIBUTING.md: contributor setup, branch/PR workflow, and quality expectations.
- CODE_OF_CONDUCT.md: collaboration expectations and reporting route.
- SECURITY.md: private vulnerability reporting, supported versions, and response expectations.
- SUPPORT.md: where to ask usage questions and request help.
- CHANGELOG.md: user-visible changes once releases begin.
- AGENTS.md: instructions for AI-assisted engineering and research.
- .gitignore, .editorconfig, and .env.example: safe local defaults; example configuration must contain no real secrets.

### GitHub project operations

- .github/ISSUE_TEMPLATE/: structured bug reports and feature requests.
- .github/PULL_REQUEST_TEMPLATE.md: problem, change, verification, risks, and UI screenshots where relevant.
- .github/workflows/ci.yml: formatting/linting, type checks, tests, and build checks once application code exists.
- .github/dependabot.yml: dependency update configuration after the stack is selected.
- Protect the default branch and require relevant checks before merging when repository settings support it.
- Never direct vulnerability reports into public issues.

### Documentation map

Keep the existing product vision, feature blueprint, competitive analysis, research plan, UI/UX plan, security/privacy baseline, and decision records. Add substantive documents as decisions become concrete:

- Product: personas/jobs, MVP scope and non-goals, roadmap, success measures.
- Architecture: overview, data model, capture pipeline, authorization, search, integrations.
- Design: principles, approved design system, accessibility, mockup approval record.
- Engineering: development setup, testing strategy, coding standards, observability.
- Operations: deployment, backup/restore, troubleshooting, incident response.
- Decisions: short, dated ADRs with context, decision, alternatives, consequences, and status.

Use docs/README.md as the index. Link to canonical documents rather than copying their contents.

## Pull request workflow

1. State the problem, scope, non-goals, and acceptance criteria.
2. Inspect current code, docs, and decisions before editing.
3. Make one coherent change with a descriptive commit/PR.
4. Add or update tests for changed behavior.
5. Run relevant checks and report exact outcomes, including checks not run.
6. Update user-facing and operational docs where needed.
7. Review for unrelated changes, secrets, generated files, accessibility regressions, and unsupported claims.
8. Record material product or architecture choices in an ADR.

For visual changes, include before/after screenshots at desktop and narrow viewports when the app can be run. Check keyboard behavior, focus, loading, empty, error, and partial-success states.

## Release and friend-onboarding gate

Do not invite friends to a hosted multi-user instance until there is evidence for:

- Server-side authorization and automated adversarial tests across two users.
- Session, invite, recovery, and revocation behavior.
- Export and account deletion, including documented backup retention.
- Encrypted backups and a successful restore drill.
- Review of logs, secrets, dependencies, extraction, and AI data flows.
- Deployment, recovery, and known-limitations documentation.
- Clear disclosure of hosting/operator access and external processors.

Passing this checklist reduces risk; it does not prove perfect security or replace expert review where warranted.

## License decision

The license is intentionally not selected here. Evaluate MIT and Apache-2.0 first against adoption, patent terms, attribution/notice requirements, dependency licenses, and intended future distribution. Choose a license before presenting the repository as ready for public reuse. Do not imply a license from repository wording alone.

## Status vocabulary

- **Proposed:** an idea, not committed to the MVP.
- **Accepted:** a product or engineering decision has been made.
- **In progress:** implementation or validation is underway.
- **Implemented:** code or process exists.
- **Verified:** the stated test/review was actually performed, with evidence.
- **Deferred / Rejected:** intentionally postponed or not selected, ideally with rationale.
