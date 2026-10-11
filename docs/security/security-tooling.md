# Atlas Security Tooling and Verification Pipeline

- **Status:** Recommended tooling baseline; final tools depend on stack and deployment
- **Last reviewed:** 2026-10-11

## Tooling philosophy

No single scanner or AI agent can prove Atlas secure. Use complementary layers: prevention in code/configuration, deterministic scanners, tests for security properties, runtime monitoring and recovery drills. Tool output needs triage; a green dashboard is not proof of no vulnerabilities.

## Recommended tools

### Source code and dependencies

| Tool | Role | Recommendation |
|---|---|---|
| **GitHub CodeQL / code scanning** | Static analysis for supported languages | Enable where available; review findings and add custom queries only when justified |
| **Dependabot alerts/security updates** | Vulnerable dependency detection and upgrade PRs | Enable; review lockfile changes and test before merge |
| **Secret scanning/push protection** | Detect and block credential leaks | Enable available protections; a found credential must be revoked/rotated |
| **OSV-Scanner** | Match manifests/lockfiles and supported artifacts against OSV advisories | Add to CI after stack and lockfiles exist |
| **Semgrep** | Rule-based SAST and custom rules | Evaluate for framework-specific checks; avoid overlapping noisy rulesets |
| **Gitleaks** | Scan Git history/worktree for likely secrets | Useful local/CI supplement; deleting a leaked secret is not enough |
| **OpenSSF Scorecard** | Assess repository and workflow supply-chain practices | Add after CI and branch rules exist; scores are signals, not certification |

References: [GitHub security features](https://docs.github.com/en/code-security/getting-started/github-security-features), [GitHub Actions secure use](https://docs.github.com/en/actions/reference/security/secure-use), [OSV-Scanner](https://github.com/google/osv-scanner), [OpenSSF Scorecard](https://github.com/ossf/scorecard).

### Web and runtime testing

| Tool | Role | Recommendation |
|---|---|---|
| **OWASP ZAP** | DAST/proxy against a running app | Use in disposable staging with synthetic data; begin passive/baseline scans and plan authenticated testing |
| **Playwright** | Browser workflows and authorization regression tests | Use for critical journeys and cross-user isolation |
| **axe-core or equivalent** | Automated accessibility checks | Useful for accessibility, not a security scanner or complete proof |
| **Framework-native test runner** | Unit/integration tests | Test access policies, URL validation, upload limits, export/deletion and errors |
| **Fuzz/property tests** | Parser and boundary testing | Target URL parsing, metadata, file types, import formats and schema validation |

Only scan systems you own or have explicit permission to test. Keep DAST credentials synthetic and isolated.

### Container and infrastructure

Choose after architecture is known:
- **Trivy:** candidate for container, dependency, secret and infrastructure misconfiguration scanning.
- **Checkov:** candidate if infrastructure-as-code is adopted.
- Use hosting-native patching, IAM, network restrictions, storage policies and audit logs.
- Verify TLS and security headers on the deployed environment, not just local config.
- Use cloud posture tools only if the provider and deployment scale justify them.

Do not install every tool before there is a stack to scan. Choose a small set with non-overlapping coverage and named ownership.

### AI and agent security

- Use [OWASP AISVS](https://owasp.github.io/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/) as the AI-specific verification catalogue.
- Use [OWASP LLM Top 10 2025](https://genai.owasp.org/llm-top-10/) and [Agentic Applications Top 10 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) to seed test scenarios.
- Evaluate the [OWASP Secure Agent Playbook](https://github.com/OWASP/secure-agent-playbook) after checking its license and contents.
- Use a reviewed skill scanner for third-party agent skills, but do not trust scanner verdicts alone.
- Maintain synthetic hostile-page/PDF tests and verify no secrets, cross-user content or unauthorized tool actions result.

## CI pipeline

### Every pull request
1. Formatting, linting, type checks and unit tests.
2. Integration tests for authentication and object authorization.
3. Secret scan and dependency vulnerability scan.
4. Static analysis appropriate to language/framework.
5. Production build and migration validation.
6. Cross-user isolation tests for every touched data path.
7. Security tests for new upload, URL-fetch, import, AI or integration behavior.

### Default branch and scheduled
- Repeat dependency and secret scans.
- Run broader tests.
- Run OpenSSF Scorecard when supported.
- Review dependency and action updates.
- Run DAST baseline against controlled test deployment when available.
- Review advisories and overdue findings.

### Workflow hardening
- Read-only workflow token permissions by default; grant writes only to jobs that need them.
- Pin third-party Actions to full commit SHAs and review their source.
- Never expose secrets to workflows executing untrusted fork/PR code.
- Separate PR validation from release/publish jobs.
- Use short-lived OIDC credentials instead of long-lived cloud keys where supported.
- Avoid privileged self-hosted runners for untrusted PRs.
- Protect release workflows and signing credentials.
- Keep artifacts/logs free of private content and secrets.

Reference: [GitHub secure use reference](https://docs.github.com/en/actions/reference/security/secure-use).

## Severity and response

Use severity, exploitability, data sensitivity, exposure and blast radius. CVSS can inform prioritization but does not replace context.

- **Critical:** likely broad data compromise, production RCE or complete auth bypass. Stop release; contain and remediate.
- **High:** cross-user access, serious SSRF, account takeover, key/secret compromise or destructive data loss. Fix before inviting users unless a time-bounded exception is explicitly documented.
- **Medium:** meaningful weakness with limited impact. Assign owner/deadline; fix before release when sensitive data boundaries are involved.
- **Low/Informational:** hardening or low-impact issues; track and batch reasonably.

Never suppress a finding only because an AI reviewer calls it a false positive. Record evidence for accepted risk and revisit when architecture changes.

## Evidence required for a security claim

For each control, record:
- Requirement and threat addressed.
- Implementation/configuration location.
- Test or scan command and version.
- Result, date, environment and artifact.
- Exceptions, false positives and residual risk.
- Owner and next review date.

A scan not run is not a pass. A unit test does not prove production configuration. A dependency report does not prove application authorization.

## Sources
- [OWASP ASVS](https://github.com/OWASP/ASVS)
- [OWASP Web Security Testing Guide](https://owasp.github.io/www-project-web-security-testing-guide/)
- [GitHub security features](https://docs.github.com/en/code-security/getting-started/github-security-features)
- [GitHub secure use](https://docs.github.com/en/actions/reference/security/secure-use)
- [OSV-Scanner](https://github.com/google/osv-scanner)
- [OpenSSF Scorecard](https://github.com/ossf/scorecard)
- [OWASP ZAP](https://www.zaproxy.org/)
- [Trivy](https://trivy.dev/)
- [Semgrep](https://semgrep.dev/)
- [Gitleaks](https://github.com/gitleaks/gitleaks)
