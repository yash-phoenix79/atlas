# Atlas Gamification & Learning-Loop Research Plan

- **Status:** In research; mechanics are hypotheses, not approved implementation scope
- **Parent:** [Product Requirements & Use-Case Registry](../product/requirements-use-case-registry.md)

## Product question
Can Atlas turn saved resources into manageable learning actions while preserving autonomy and avoiding guilt, streak anxiety, leaderboard pressure or reward farming? Optimize for learning/application—not time in app, number of saves or AI output volume.

## Evidence summary
Evidence does not justify adding points, badges or streaks and assuming learning improves.
- A 2025 review of 46 publications found possible engagement/motivation benefits, but learning outcomes remain unsettled: [Gamification in education and training review](https://link.springer.com/article/10.1007/s11159-024-10111-8).
- A 2024 meta-analysis of 35 interventions found a small overall positive effect on intrinsic motivation (g=0.257), with stronger effects on perceived autonomy/relatedness than competence: [Systematic review and meta-analysis](https://link.springer.com/article/10.1007/s11423-023-10337-7).
- A 2026 retrieval-practice study found points/progress feedback improved reported enjoyment/competence but did not improve learning behavior or delayed recall in that experiment: [Study](https://www.sciencedirect.com/science/article/abs/pii/S0747563225003097).
These are context-specific findings; they justify experiments, not blanket claims.

## Candidate mechanics

| Mechanic | Atlas idea | Risks / evaluation |
|---|---|---|
| User-chosen quests | “Process one article”, “review five concepts”, “apply one insight” | Keep optional; measure usefulness and burden |
| Goal-linked milestones | Progress tied to user goals/projects | Don't infer mastery from content consumed |
| Gentle streak/calendar | Track chosen meaningful actions; allow rest/pause/forgiveness | No shame or lost-progress punishment; measure autonomy |
| Retrieval-practice challenges | Source-grounded flashcards/questions with spaced review | Check question correctness and delayed recall |
| Mastery map | Confidence plus demonstrated recall/application | Avoid false precision; check calibration |
| Insight-to-project action | Mark an idea as tested/used/applied | Don't force every resource into a project |
| Weekly reflection | Opt-in recap of revisited resources, concepts and applied insights | Avoid vanity metrics; measure value and opt-outs |
| Shared challenge | Explicitly shared private learning goal | No public leaderboard by default; measure social comfort |

## Recommended first experiment: opt-in Learning Loop
1. User chooses a goal/project.
2. Atlas suggests one small action from their library: review, answer a question, write an insight or apply an idea.
3. User can accept, edit, skip or dismiss.
4. Completion is recorded; reflection is optional.
5. Optional weekly recap summarizes actual logged activity.
6. Reminders are configurable and easy to disable.

Don't rank people by library size, reading time, AI output count or streak length.

## Potential AI role
Suggest next actions from user-selected goals; draft source-linked recall questions; propose editable learning paths; summarize actual logged progress; suggest resource/project links. Suggestions must be traceable, editable and dismissible. AI must not fabricate progress, shame users or silently change goals.

## Success and guardrails
**Outcomes:** meaningful learning actions completed, delayed recall, insight applied to a real project/decision, source traceability.
**Guardrails:** pressure/guilt, distraction, notification fatigue, skip/dismiss/opt-out rates, AI question error rate, and app time rising without learning outcomes. Prototype qualitatively before persistent scoring; engagement correlation is not causal evidence.

## Research checklist
- [ ] Review self-determination theory, autonomy-supportive design, retrieval practice and spaced practice.
- [ ] Inspect Duolingo, Readwise, Anki and relevant learning products; distinguish observation from inference.
- [ ] Prototype a quest, source-grounded recall prompt and weekly reflection.
- [ ] Test usefulness, autonomy, confusion and pressure with a small group.
- [ ] Decide mechanics to opt-in, configure, defer or reject.
- [ ] Define outcome metrics before experiments.

## Exit criteria
Recommend a mechanic only if it addresses a defined pain, has a plausible learning mechanism, is measurable, offers opt-out/failure-safe behavior and avoids rewarding superficial activity. Core Atlas remains useful with gamification disabled.