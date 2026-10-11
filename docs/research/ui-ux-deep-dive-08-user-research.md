# UI/UX Deep Dive 08 — User Research, Usability Testing, and Experimentation

- **Status:** Research protocol; no user study has been conducted as part of this document.
- **Research date:** 2026-10-11
- **Purpose:** Establish how Atlas design decisions will be investigated, tested, and revised.

## 1. Research exists to reduce decision uncertainty

A research activity is useful when it can change a decision, reveal a risk, or establish evidence. It is not complete because interviews occurred, survey responses were collected, or a report is long.

Start each study with the decision, assumptions, what evidence would change the decision, target users/context, method and rationale, recruitment constraints, tasks/questions, consent and data handling, analysis plan, limitations, and follow-up decision.

## 2. Match method to question

| Question | Useful method | What it cannot establish alone |
|---|---|---|
| What are people trying to accomplish? | Contextual inquiry/interviews | Frequency or population prevalence |
| Can users complete a flow? | Task-based usability test | Long-term retention |
| Which layout is easier for a task? | Comparative prototype study | Universal preference |
| How does an existing product behave? | Hands-on teardown with task script | Why its designers made every decision |
| What is used in production? | Privacy-aware analytics | User intent without qualitative context |
| Does a change improve a metric? | Controlled experiment when feasible | Why it changed without qualitative evidence |
| What failures are possible? | Failure-mode analysis and edge-case testing | Actual incidence without operational evidence |
| Is a design accessible? | Criterion mapping, automated and manual testing | Full conformance from one tool |

Do not use a survey to answer a behavior question if observing a task would be more informative. Do not run an A/B test when traffic is too small or the outcome is poorly defined.

## 3. Interviews: learn about real behavior, not feature wishes

Ask about recent concrete episodes:
- “Tell me about the last time you saved something useful.”
- “How did you find it again?”
- “What did you remember about it?”
- “What happened when the search failed?”
- “What did you do next?”
- “What made you trust or distrust the result?”

Probe for actions, context, workarounds, and consequences. Avoid leading prompts such as “Would you like an AI graph that connects all your resources?” Hypothetical enthusiasm is weaker evidence than observed behavior.

Record themes with evidence snippets, but don't turn one vivid anecdote into a universal requirement. Note contradictory cases and users with different workflows.

## 4. Task-based usability testing

Give a participant a realistic goal and allow them to choose how to accomplish it. Observe completion, hesitation, misunderstandings, errors/recovery, backtracking, expectations, and confidence.

Use neutral prompts. If intervention is required, record it because assistance changes the result. A participant saying “this is easy” doesn't override repeated errors.

### Atlas starter tasks
1. Capture a URL and explain what is saved versus still processing.
2. Find a resource from a vague topic/source memory.
3. Filter a mixed library and remove one active filter.
4. Open a resource, add a note, and return to the same results.
5. Recover from extraction failure.
6. Remove an item from a collection without deleting it.
7. Trace an AI claim to a source.
8. Export data and identify included content.
9. Complete a core task with keyboard only.
10. Complete a core task with reduced motion and touch input.

## 5. Prototype fidelity should match the question

- **Sketch/low fidelity:** information structure, flow, terminology, major layout.
- **Mid fidelity:** hierarchy, content density, navigation, interaction sequence.
- **High fidelity:** visual character, typography, motion, realistic cards, responsive states.
- **Functional prototype:** timing, focus, input behavior, state transitions, loading/error paths.

Do not spend days polishing a high-fidelity mockup before validating whether navigation and content model make sense. Conversely, a static image cannot validate hover physics, keyboard behavior, latency, or task flow.

For Atlas, create three visual directions using the same screen set and realistic content. First compare visual language and hierarchy, then prototype the most promising direction's interactions.

## 6. Avoid common research biases

- **Confirmation bias:** only looking for evidence supporting the preferred direction.
- **Leading questions:** prompting users to approve a feature.
- **Novelty bias:** overvaluing a prototype because it looks different.
- **Survivorship bias:** studying only successful users or happy paths.
- **Selection bias:** recruiting only friends or people resembling the builder.
- **Preference substitution:** asking what people like instead of measuring what they can do.
- **Overgeneralization:** treating a small formative study as a population estimate.
- **False precision:** scoring subjective design quality to decimals without a validated rubric.
- **Research theater:** collecting findings without a decision or implementation consequence.

Mitigate these by defining the decision and measures before the study, testing alternatives, including negative cases, separating observations from interpretation, and recording confidence.

## 7. Define metrics before the test

Useful metrics include task completion/partial completion, time to successful completion, critical errors, recovery success, abandonment, backtracking/repeated actions, assistance required, confidence that an action succeeded, correct understanding of privacy/processing state, accessibility blockers, and perceived comfort/satisfaction.

Averages can hide catastrophic failures. Report critical task failures separately, include sample/context, and distinguish observed behavior from self-report.

## 8. Comparative testing for Atlas

Change one major variable when feasible, keep content/task difficulty comparable, rotate or randomize order, use realistic and adverse cases, define the primary outcome before collecting data, record qualitative explanations, and report uncertainty.

Examples:
- Rich cards vs compact list for finding a repository.
- Uniform cards vs resource-specific previews.
- Static cards vs restrained 3D tilt.
- Visible filters vs progressive filter panel.
- Generic capture success vs staged truthful status.
- Collection-first organization vs save-now-organize-later.
- Different result snippet densities.

Do not declare a winner from preference alone when task performance differs.

## 9. Competitive teardown method

For each product, run the same tasks and record product/edition/platform/version/date, onboarding barriers, capture methods/failures, resource types, search and filters, resource detail/source provenance, collection/tag model, navigation/state preservation, keyboard/touch/accessibility observations, loading/empty/error/undo/deletion/export, performance and visual character, observed vs inferred evidence, and lessons that may not transfer.

A marketing page is evidence of a product claim, not proof of actual workflow. Label first-party claims separately from hands-on observations.

## 10. Ethics, privacy, and participant care

Explain purpose and obtain appropriate consent. Collect only necessary data. Avoid recording private resource content unless necessary and consented. Redact personal/sensitive information. State how recordings/notes are stored and deleted. Don't pressure participants to share private libraries. Offer alternatives for sensitive tasks. Do not claim anonymity if identity can be inferred.

## 11. From findings to decisions

Every finding should record observation, task/context, evidence source, interpretation, alternative explanations, confidence, user impact/severity, recommended change, and validation plan.

A decision record should state what changed and why. If evidence conflicts, preserve the disagreement and choose a reversible next step where possible.

## 12. Proposed research cadence

1. Discovery: identify high-risk assumptions and real workflows.
2. Concept validation: compare 2–3 directions with identical tasks/content.
3. Interaction validation: test capture, search, detail, recovery, keyboard/touch.
4. Implementation validation: browser, responsive, accessibility, performance.
5. Beta learning: monitor failures and feedback with privacy safeguards.
6. Iteration: prioritize by severity, frequency, impact, and effort.

Run the smallest study that can credibly inform the decision, but do not skip testing for high-consequence workflows.

## 13. Sources

- [GOV.UK — How user research improves service design](https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design).
- [GOV.UK — Moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing).
- [GOV.UK — Plan user research](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service).
- [Nielsen Norman Group — Usability testing](https://www.nngroup.com/articles/usability-testing-101/).
- [Nielsen Norman Group — User interviews](https://www.nngroup.com/articles/user-interviews/).
- Atlas [research methodology](research-methodology.md) and [source quality rubric](source-quality-rubric.md).

## Open questions
- Who are representative initial users beyond the project owner?
- Which tasks are release-critical?
- What consent and data-retention process will apply to prototype sessions?
- Which measures are primary for each design decision?
- What evidence would cause Atlas to reject the immersive direction?
