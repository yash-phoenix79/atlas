# Atlas Testing Strategy

- **Status:** Proposed; adapt after the runtime and framework are selected
- **Last reviewed:** 2026-10-11
- **Registry:** [Production requirements](requirements-registry.md)

## Purpose

Tests protect behavior, data integrity and change. Test depth should follow risk; a passing suite is evidence only for the behavior it actually exercises.

## Test layers

### Unit tests
Use fast tests for domain logic, validation, state transitions, normalization and policy decisions. Prefer meaningful assertions over testing private implementation details.

### Integration tests
Test boundaries that commonly fail in production: database constraints and transactions, storage operations, queue semantics, authentication integration, provider adapters and migrations. Use real services in disposable environments where mocks would hide important behavior.

### Contract tests
For external providers and internal APIs, verify request/response schemas, error mapping, compatibility assumptions, and behavior when a provider changes or returns malformed data. Contract tests do not replace testing against the real provider when feasible.

### End-to-end tests
Exercise the highest-value user journeys in a browser or deployed test environment:
1. Create/capture a resource.
2. Confirm it persists and is discoverable.
3. Open details and inspect metadata/provenance.
4. Edit and organize a resource, then remove it.
5. Export user-owned data.
6. Exercise failure/retry states.
7. Confirm user A cannot access user B's resources.

Keep the E2E suite small enough to be reliable and fast enough to run continuously.

### Non-functional tests
Add where architecture and risk justify them:
- load and soak tests for capacity and resource growth;
- fault injection for dependency failures, interrupted jobs and storage outages;
- fuzz/property-based tests for parsers, normalization and state invariants;
- accessibility and browser compatibility checks;
- security testing as defined by the security program;
- recovery drills for backup/restore and deployment rollback.

## Test data

- Prefer synthetic data with edge cases: large titles, unusual Unicode, invalid URLs, duplicates, missing metadata, oversized content, malformed provider responses and cross-user references.
- Never place production exports, secrets, access tokens, or private user content in source control or routine CI artifacts.
- Sanitize any data copied from production and document the sanitization.
- Make tests deterministic; isolate external APIs or use recorded fixtures for repeatability. A fixture does not prove current provider behavior.

## Failure-oriented cases

For each critical operation, ask:
- What if the client retries after a timeout but the server already committed?
- What if the process crashes between a database write and file write?
- What if the provider returns rate limiting, server errors, malformed content or an unexpected redirect?
- What if a background job runs twice or finishes out of order?
- What if connectivity fails halfway through?
- What if a migration fails after partially applying?
- What if the same request arrives concurrently?
- What if a user is authorized for a resource but not its attachment, export or derived text?

Turn relevant answers into regression tests.

## CI policy

The eventual CI pipeline should run applicable checks on each pull request:
- formatting/linting and static type checks where applicable;
- unit and integration tests;
- build and migration checks;
- dependency and secret checks;
- static security analysis for supported languages;
- targeted E2E checks for critical paths, as runtime permits.

Required checks should be explicit and non-flaky. Avoid silently ignoring failures. If a test is temporarily quarantined, record an owner, issue and expiry.

## Coverage and quality

Use coverage reports to find untested areas, especially domain logic and authorization branches. Do not impose an arbitrary coverage threshold as proof of quality. High coverage can still miss critical state transitions and failure modes.

Measure test value through requirements linked to tests, defects caught before release, regression recurrence, test stability/duration, and confidence in data integrity.

## Test evidence

For release-critical requirements, record the test name/command, environment, revision, outcome, date, and links to CI logs or reports. Mark a requirement Verified only when evidence corresponds to the current implementation.

## References

- [Google Testing Blog](https://testing.googleblog.com/)
- [Playwright CI](https://playwright.dev/docs/ci)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final)
