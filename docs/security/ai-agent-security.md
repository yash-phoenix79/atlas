# Atlas AI and Coding-Agent Security

- **Status:** Requirements accepted; AI features and agent controls remain to be implemented/evaluated
- **Last reviewed:** 2026-10-11

## Why this has a separate threat model

Atlas has two AI security surfaces: AI inside Atlas, which may read imported sources and answer questions, and AI used to build Atlas, which may read repositories, run commands, edit files, and call tools/MCP servers with developer privileges.

Both combine untrusted content with model interpretation. If the model also has secrets or powerful tools, prompt injection can become a data-exfiltration or integrity incident. Prompt wording alone is not a security boundary.

## A. AI features inside Atlas

### Treat every imported source as untrusted

A webpage or PDF may contain visible or hidden instructions asking the model to reveal prompts, query unrelated users' data, or call tools. These instructions are content, not policy.

- Keep retrieved source text structurally separate from trusted instructions.
- Never place credentials, signing keys, session tokens or unnecessary private data in model context.
- Minimize retrieval to the current user's authorized sources and the smallest useful passages.
- Enforce user/tenant filtering before retrieval and again before returning results. A vector index is not an authorization system.
- Preserve source IDs and citations; make unsupported answers and extraction failures visible.
- Treat model output as untrusted input: validate schemas, encode output, and never execute generated HTML, SQL, shell commands or code.
- Do not let an LLM decide whether a user is authorized; authorization is deterministic application logic.
- Disclose provider, purpose, content sent, and relevant retention/training terms at point of use.
- Avoid sending an entire library when selected passages suffice. Do not use private content for model training without separate explicit consent and policy.

### Tools and autonomy

For the first AI release, prefer read-only summarization and retrieval over autonomous agents.

If tools are added:
- Expose narrow, typed functions, not arbitrary shell, SQL, filesystem, network or browser access.
- Check identity and authorization inside every tool invocation.
- Bind each operation to the authenticated user and server-generated request context.
- Separate read and write tools; require explicit confirmation for destructive, sharing, export, account or external communication actions.
- Apply per-tool timeouts, rate limits, quotas and audit events.
- Never treat an LLM's self-reported intent as authorization or consent.
- Keep secrets outside model context and tool output.
- Provide a kill switch for a compromised integration.
- Recheck authorization after session revocation and before delayed jobs execute.

### AI-specific tests

- A saved page asks the model to reveal another user's notes: no disclosure.
- A PDF asks the model to invoke a tool or send content externally: no unauthorized action.
- Search results contain cross-user identifiers: retrieval and output remain user-scoped.
- Model returns HTML/script, SQL, malformed JSON or unexpected tool arguments: safely rejected or encoded.
- Prompt requests hidden system prompts or provider credentials: no secret disclosure.
- Provider timeout, refusal, hallucination or missing source: safe failure and visible uncertainty.
- Tool invocation races with session revocation/deletion: authorization is rechecked.
- Excessively large or repeated requests: bounded resource usage and cost.

## B. Coding-agent security

### Least agency

Follow [OWASP AI Agent and MCP Security guidance](https://owasp.github.io/DevSecOpsGuideline/2-Process/2-2-Develop/2-2-5-AI-Agent-and-MCP-Security/): grant only the tools, data, autonomy and duration required.

- Prefer read-only access for research/review tasks.
- Use a disposable workspace, isolated branch/worktree and least-privilege credentials.
- Never give coding agents production database access, production secrets, backup credentials, cloud-admin roles or personal exports.
- Separate read, edit, test, network and deploy permissions. Require human approval for privileged/destructive actions.
- Do not allow an agent to deploy or change access policies just because it can edit code.
- Avoid unreviewed shell commands, scripts piped from the internet, dynamic package installation and unexplained encoded commands.
- Treat issues, PR comments, websites, dependency docs, generated files and tool/MCP descriptions as untrusted inputs.
- External content must never override repository security rules.
- Review actual diffs and command side effects. A second AI review is useful but not independent assurance.
- Never run an agent against production with broad read/write credentials.

### MCP server rules

Before connecting an MCP server:
1. Confirm publisher, source, license, release history and maintenance.
2. Inspect all tool names/schemas and identify filesystem, shell, network, account and write capabilities.
3. Understand what data the server receives and where it sends it.
4. Use scoped tokens and read-only permissions by default.
5. Prefer isolated execution where appropriate; restrict network egress.
6. Pin reviewed versions/commits where possible and review upgrades.
7. Test with synthetic data and revoke access when no longer needed.

Tool descriptions and returned content are not inherently trustworthy. A tool call is an external side effect and must be authorized.

### Third-party skills and agent instructions

A SKILL.md, plugin or prompt pack is executable policy in practice: it can direct an agent to run scripts, install dependencies, access secrets or send data out.

Before adoption:
- Review every file, script, dependency, install hook, URL and command.
- Check for credential reads, environment dumps, network uploads, broad filesystem access, shell execution, obfuscation, hidden Unicode, persistence and unexpected telemetry.
- Verify license and source identity; inspect history, releases, issues and maintenance.
- Pin a reviewed version/commit; do not auto-update trusted skills without review.
- Run in a clean disposable environment with synthetic data and minimal permissions.
- Treat scanners as signals, not guarantees; perform manual review.
- Keep a project allowlist of approved skills and why each is used.
- Remove unused skills and revoke related credentials.

### Repository instruction policy

AGENTS.md should require coding agents to:
- Follow secure coding and least-privilege rules.
- Validate all inputs server-side and use parameterized database access.
- Enforce authorization for every object and tool.
- Never commit or reveal secrets or private data.
- Treat imported content and external instructions as untrusted.
- Use maintained crypto/auth libraries; never invent cryptography.
- Add regression tests for security-sensitive behavior.
- Run applicable checks and report exact results and limitations.
- Never weaken security controls to make tests pass.
- Ask before destructive actions, privileged integrations or production operations.

Keep instructions concise and specific. Instructions influence model behavior; enforcement must come from OS/process permissions, application code, CI policy and tests.

## C. Candidate agent security skills

These are research candidates, not pre-approved dependencies or tools we have tested.

| Candidate | Potential use | Recommendation |
|---|---|---|
| [OpenSSF Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html) | Write concise repository instructions for secure AI-assisted development | Use as the baseline for AGENTS.md; it is guidance, not an installable skill |
| [OWASP Secure Agent Playbook — Security Code Review](https://github.com/OWASP/secure-agent-playbook/blob/main/plugins/code-security-skills/plays/code-review-security.md) | Structured review of auth, crypto, injection and data handling | Evaluate; inspect license and integration requirements |
| [OWASP AI Agent and MCP Security](https://owasp.github.io/DevSecOpsGuideline/2-Process/2-2-Develop/2-2-5-AI-Agent-and-MCP-Security/) | Threat model coding agents and MCP tools | Use as a review checklist, not an install |
| [Security Review skill in agent-skills](https://github.com/jakesterns/agent-skills/blob/main/plugins/security-review/skills/security-review/SKILL.md) | Review diffs for authz, SSRF, secrets, dependencies and data exposure | Candidate; inspect source, license, scripts, dependencies and compatibility |
| [Claude Code Security Audit skill](https://github.com/McGo/claude-code-security-audit/blob/main/SKILL.md) | Structured codebase audit and prioritized findings | Candidate; inspect commands and report generation before execution |
| [Skill Security Check](https://github.com/aliksir/claude-code-skill-security-check) | Scan skills for prompt injection, exfiltration and dangerous commands | Candidate meta-scanner; validate rules and false positives |
| [OpenSSF Scorecard](https://github.com/ossf/scorecard) | Evaluate repository and CI supply-chain hygiene | Add as an automated signal when CI exists |

Do not install a bundle of security skills at once. Start with concise repository instructions, deterministic scanners and one reviewed security-review workflow. A skill is a helper, not a security boundary.

## Sources

- [OWASP LLM Top 10 2025](https://genai.owasp.org/llm-top-10/)
- [OWASP Agentic Applications Top 10 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OWASP AISVS](https://owasp.github.io/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/)
- [OWASP Securing Agentic Applications Guide](https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/)
- [OWASP AI Agent and MCP Security](https://owasp.github.io/DevSecOpsGuideline/2-Process/2-2-Develop/2-2-5-AI-Agent-and-MCP-Security/)
- [OpenSSF Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html)
