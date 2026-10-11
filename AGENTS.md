# Agent Working Agreements

These instructions apply to AI coding and research agents working in Atlas.

## Mission

Help build a high-quality personal AI bookshelf through evidence-led research, deliberate product decisions, and tested vertical slices. Do not optimize for lines of code or number of agents.

## Before acting

1. Read this file and the root README.
2. Inspect the current repository state, relevant documentation, branches, and existing decisions before proposing changes.
3. Identify the task's expected outcome and acceptance criteria. If missing, propose them in the plan rather than silently inventing broad scope.
4. For current product/library/framework facts, check primary documentation and record links and access dates when making research notes.
5. Clearly separate verified facts, source-reported claims, observations, assumptions, and recommendations.

## Research quality

- Prefer first-party product pages, official docs, source code, and reproducible observations.
- Cite sources inline in research notes. Record unknowns and contradictions.
- Do not claim that a local app, website, REA workflow, browser, test suite, or agent was run unless it actually was.
- When evaluating products, record what was observed, how it was tested, and what is inference.
- Check license terms for any code, skill, asset, dataset, or design reference proposed for reuse.

## Engineering principles

- Avoid implementation until the relevant product decision has evidence and an explicit rationale.
- Prefer the smallest architecture that satisfies the accepted requirements.
- Keep personal knowledge portable; make source-of-truth boundaries explicit.
- Do not introduce infrastructure (queues, caches, vector stores, graph databases, agent orchestration) without a clear need and evaluation plan.
- Use secure defaults. Never commit credentials, tokens, private content, personal data, or local environment files.
- Do not disable security controls or weaken tests just to get a passing result.
- Add tests for meaningful behavior and explain how to run them. Run relevant tests and report the actual result, including failures and anything not run.
- For UI changes, inspect the running application at realistic viewport sizes when tooling permits; check keyboard access, responsive behavior, loading/empty/error states, and visual consistency.

## Git and agent coordination

- Never have two agents editing the same branch at the same time.
- Commit coherent changes before handing a branch to another agent; alternatively, use isolated branches/worktrees and integrate deliberately.
- Keep commits focused and messages descriptive.
- Do not force-push, rewrite shared history, merge a pull request, delete files, or make destructive infrastructure/data changes without explicit user authorization.
- Do not overwrite existing work without inspecting it and explaining the reason.
- Review diffs before committing. Summarize changed files, validation performed, results, and remaining risks.

## Definition of done

A task is complete only when:
- The requested outcome and acceptance criteria are addressed.
- The diff has been reviewed.
- Relevant checks are run where possible, and actual results are reported.
- Documentation is updated where necessary.
- Remaining limitations, assumptions, and follow-up work are explicit.

## Communication style

Be concise but specific. Show the evidence and trade-offs behind material recommendations. Ask a question only when an ambiguity blocks safe progress; otherwise make a narrow, reversible assumption and state it.
