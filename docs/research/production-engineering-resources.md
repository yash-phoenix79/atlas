# Production Engineering: Standards, Tools, and Research Sources

- **Status:** Curated starting point; candidates have not necessarily been installed or evaluated against Atlas
- **Last reviewed:** 2026-10-11
- **Purpose:** Source-backed references for turning production readiness into requirements, tests, CI gates and operational evidence
- **Process:** [Research methodology](research-methodology.md) and [source quality rubric](source-quality-rubric.md)

## How to use this guide

Do not copy every framework into Atlas or adopt every tool listed. Start from product risks and required outcomes, use these sources to define candidate controls, then test applicability against the chosen stack. A link is not a claim of compliance, certification, tool installation, or successful verification.

## Production readiness and reliability

### Google SRE Launch Coordination Checklist
https://sre.google/sre-book/launch-checklist/

Use for launch reviews covering architecture, traffic/capacity estimates, dependencies, reliability, failure behavior and readiness. The page describes Google's original launch checklist from circa 2005, abridged; treat it as foundational, not a complete modern standard.

### Google SRE Workbook
https://sre.google/workbook/

Use for practical SRE implementation, monitoring, SLOs, alerting, incident response and operating services. Adapt scale to a small application.

### DORA Continuous Delivery
https://dora.dev/capabilities/continuous-delivery/

Use for repeatable delivery, testability, deployment capability and reducing risky batch releases. Improve delivery capability rather than gaming a scorecard.

### OpenTelemetry
https://opentelemetry.io/docs/
https://opentelemetry.io/docs/concepts/observability-primer/

Use for vendor-neutral instrumentation conventions for traces, metrics and logs. Instrument meaningful workflows and dependencies; choose a telemetry backend only when there is a concrete need.

## Secure development and application security

### NIST Secure Software Development Framework (SSDF) SP 800-218 v1.1
https://csrc.nist.gov/pubs/sp/800/218/final

Use for integrating security into requirements, development, verification and release. The linked page is the final v1.1 publication (February 2022). Check NIST's project page for future revisions or drafts before describing a newer version as final.

### OWASP Application Security Verification Standard (ASVS)
https://github.com/OWASP/ASVS

Use for testable application-security requirements. Pin the version used by a review; do not silently mix versions.

### OWASP Web Security Testing Guide
https://owasp.org/www-project-web-security-testing-guide/

Use for structured web application testing. Select test cases that match Atlas's functionality and threat model.

### OpenSSF secure software guides
https://best.openssf.org/
https://openssf.org/resources/guides/

Use for secure development, open-source dependency evaluation, repository security, and security-focused AI code assistant instructions.

## AI application and agent security

### OWASP Top 10 for Agentic Applications 2026
https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/

Use for threat discovery for agents that plan, call tools and act. The resource page is dated December 9, 2025 and labels the list for 2026.

### OWASP AI Security Verification Standard (AISVS)
https://owasp.github.io/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/

Use for testable AI-system security requirements. Verify current release/version and applicability before turning requirements into gates.

### OWASP GenAI Security Project
https://genai.owasp.org/

Use for evolving guidance on LLM and generative-AI application risks. Verify release status and date for version-specific claims.

### OpenSSF Security-Focused Guide for AI Code Assistant Instructions
https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html

Use for concise, actionable project instructions that steer coding assistants toward secure practices. This improves instructions but cannot guarantee generated code is secure.

## Software supply chain and repository hygiene

### SLSA v1.2 (approved specification)
https://slsa.dev/spec/v1.2/

Use for incremental build/source supply-chain integrity and provenance. Distinguish the approved versioned specification from the moving draft on the project's main branch.

### OpenSSF Scorecard
https://github.com/ossf/scorecard
https://openssf.org/scorecard/

Use for automated signals about open-source project security practices. Treat scores as triage signals, not proof of safety or quality.

### GitHub Actions secure use
https://docs.github.com/en/actions/reference/security/secure-use

Use for workflow permissions, third-party action trust, token handling and secure CI design. Use least privilege and review/pin external actions where appropriate.

### GitHub Code Search
https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax

Use to locate implementation patterns, tests and usage examples. Inspect maintenance, license, CI, release history and tests before borrowing code.

## Candidate tools by purpose

These are candidates, not an installed or approved stack. Confirm current maintenance, license, language support, privacy implications, plan limits and fit before adoption.

| Purpose | Candidate | Use / caveat |
|---|---|---|
| CI | GitHub Actions | Run relevant checks; restrict token permissions and isolate untrusted PR workflows from privileged release workflows |
| Static analysis | CodeQL | Language and plan support vary; tune rules and triage findings |
| Dependency alerts/updates | Dependabot | Review updates and test compatibility; automated PRs still need review |
| Dependency scanning | OSV-Scanner | Match dependency manifests/lockfiles to known advisories |
| Secret detection | GitHub secret scanning/push protection, Gitleaks | Availability varies; rotate exposed secrets rather than merely deleting a line |
| Rule-based code analysis | Semgrep | Review rules, false positives and coverage gaps |
| Browser tests | Playwright | Critical journeys, supported browser matrix and regression testing |
| Dynamic web testing | OWASP ZAP | Use only on systems and environments you are authorized to test |
| Container/config scanning | Trivy | Relevant when Atlas builds/deploys containers or has supported scanned artifacts |
| Supply-chain posture | OpenSSF Scorecard | Repository-practice signal, not a security certification |
| Observability instrumentation | OpenTelemetry | Instrumentation framework, not itself a hosted dashboard or alerting service |

Tool references:
- GitHub Actions security: https://docs.github.com/en/actions/reference/security/secure-use
- Playwright CI: https://playwright.dev/docs/ci
- OSV-Scanner: https://github.com/google/osv-scanner
- Gitleaks: https://github.com/gitleaks/gitleaks
- Semgrep: https://semgrep.dev/docs/
- OWASP ZAP: https://www.zaproxy.org/
- Trivy: https://trivy.dev/
- OpenSSF Scorecard: https://github.com/ossf/scorecard

## Research tools and method

Use a layered workflow:
1. Official docs/specifications for supported behavior and requirements.
2. Source code, tests, changelogs, advisories and maintainer issue/PR discussions.
3. Reproducible experiments and benchmarks with explicit workloads.
4. Independent reviews and postmortems.
5. Community discussions to discover edge cases, with corroboration.

Do not cite search snippets or unsourced AI summaries as final evidence. Use the [source quality rubric](source-quality-rubric.md) to record freshness, applicability, confidence and limitations.

## Evaluating a dependency, tool, or agent skill

Before adoption, check exact source/provenance; license and redistribution terms; maintenance and supported versions; dependency tree; permissions, shell scripts, network/file/credential access; telemetry/data sharing; tests, CI and security policy; operating cost; migration cost; lock-in; and removal path.

For agent skills/MCP tools, treat them like executable dependencies. Review source and scripts before running; use least privilege, isolated branches/environments, synthetic data, and human approval for privileged/destructive actions. Never grant an agent production secrets or production-data access merely to make research easier.

## Source freshness notes

- Standards and tools change; re-check versions, status and plan limitations at adoption time.
- NIST SSDF v1.1 is the linked final publication; track NIST for updates.
- SLSA v1.2 is linked as the approved version; the repository's moving main branch may contain draft material.
- OWASP Top 10/AISVS pages may evolve; record exact version and publication date in research findings.
- Candidate tool inclusion does not mean it was installed, configured, run, benchmarked, or found effective for Atlas.
