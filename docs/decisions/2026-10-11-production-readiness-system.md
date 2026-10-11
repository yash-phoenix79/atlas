# Decision: Establish an Evidence-Driven Production Readiness System

- **Date:** 2026-10-11
- **Status:** Accepted as process baseline; implementation and verification remain incremental
- **Scope:** Atlas engineering process and documentation

## Context

Atlas needs a production-readiness approach beyond UI, security and backend implementation. A static list of best practices is insufficient: requirements need acceptance criteria, verification methods, evidence, release gates and an exception process. Technical research also needs a repeatable method to separate authoritative facts, vendor claims, inference and unknowns.

## Decision

1. Maintain a canonical production requirements registry with stable IDs and release-specific applicability.
2. Require evidence before marking a requirement Verified.
3. Use risk-based release gates for architecture lock, production data, friend onboarding and ongoing operation.
4. Use authoritative frameworks as references, not as claims of compliance or instructions to adopt every control.
5. Keep research methodology, source-quality rubric and curated engineering resources in the research hub.
6. Prefer small, reversible, automated controls and operational drills over unnecessary infrastructure or process theatre.
7. Treat AI research and coding tools as fallible; independently verify material claims and inspect skills/dependencies before adoption.
8. Keep security-specific controls canonical in the security program and link to them rather than duplicating them.

## Alternatives considered

- **One giant checklist:** rejected because it mixes requirements, evidence, implementation and operating procedure, making status hard to trust.
- **Adopt every control from multiple frameworks:** rejected because it creates duplication and unjustified scope for a small project.
- **Rely on AI-generated summaries and search snippets:** rejected because claims can be stale, unsupported or misapplied.
- **Use a checklist without evidence:** rejected because an item could be marked complete without demonstrating the required behavior.

## Consequences

- Requirements and evidence can be traced across releases.
- The registry and evidence need ongoing maintenance.
- Priorities must be reassessed when architecture, data sensitivity, exposure or user count changes.
- Documentation does not itself prove controls exist or pass.
- The selected stack and tool availability determine which automation can be adopted.

## Verification

This decision is recorded in the repository. It does not mean the application has been assessed, tools installed, or release gates passed. Review this decision after the first production architecture and CI pipeline are established.
