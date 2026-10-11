# Atlas comparative usability test script and scorecard

**Status:** ready-to-use research protocol; no study has been conducted.  
**Purpose:** compare product architectures against user jobs, not aesthetics.  
**Prototype links:** [Connected journey](../mockups/atlas-connected-journey-prototype.html), [Architecture comparison lab](../mockups/atlas-architecture-comparison-lab.html).

## Study setup

- Use the same fictional seed library and identical task wording for every direction.
- Rotate architecture order between participants where feasible to reduce learning/order effects.
- Do not explain where controls are before a task. Read only the task prompt.
- Ask participants to think aloud, but do not coach. If they are stuck, record the stuck point before offering a neutral recovery prompt.
- The current HTML prototypes are illustrative and have incomplete behaviors. Treat this as a formative concept walkthrough until the evaluated interactions are actually implemented and tested.
- Recruit people who save and revisit mixed digital resources; include varied familiarity with visual boards and research tools. Document sample characteristics and avoid claiming statistical significance from a small formative sample.

## Warm-up

1. Tell me about the last time you saved something useful and could not find it later.
2. What clues did you remember: topic, image, source, where you saw it, or why it mattered?
3. When do you use folders/collections versus notes, boards, search, or documents?
4. What would make you trust or distrust a generated research synthesis?

Do not show the prototypes before the warm-up answers.

## Task cards

### Task 1 — Vague recall
**Prompt:** “You saved something about finding information when you don't remember the exact title. Find the most relevant item and tell me why you believe it is the right one.”

Observe:
- first action and whether the user understands the available search/browse paths;
- time to first plausible result and final selection;
- whether they inspect source/summary/match explanation;
- confidence from 1–5 and reason;
- any mistaken belief that local text matching is semantic retrieval.

### Task 2 — Capture without organizing
**Prompt:** “Save this resource so you can get back to it later. You don't know which collection it belongs in yet.”

Observe:
- whether capture is discoverable;
- required fields and friction;
- whether the interface allows deferring organization;
- feedback and error recovery;
- whether the user understands if the item is actually saved and whether it persists.

### Task 3 — Connect sources
**Prompt:** “Use the saved idea about vague memory, a source about context cues, and a design principle to create a model that explains the problem.”

Observe:
- how the user finds and brings resources into context;
- whether one canonical source can appear in more than one context;
- how relationship meaning is represented;
- keyboard/touch alternatives to dragging;
- undo/recovery and ability to open the source from the model.

### Task 4 — Verify a claim
**Prompt:** “The draft says a shared resource identity makes it possible to reuse an item across collections and boards. Decide whether the available evidence supports this claim.”

Observe:
- whether claim and source are distinguishable;
- whether user can inspect a supporting passage and its provenance;
- whether uncertainty or conflicting evidence is visible;
- whether user mistakes a citation label for proof;
- confidence in the verdict and what evidence they still need.

### Task 5 — Portability
**Prompt:** “You want to leave the tool. Find out what you could export and whether annotations and relationships would come with you.”

Observe:
- discoverability of export and privacy settings;
- understanding of scope, format and limitations;
- whether destructive/account actions are clearly separated;
- confidence about what is portable and what might be lost.

## Scorecard (one row per task per participant)

| Field | Values / recording guidance |
|---|---|
| Architecture | Living Library / Spatial Studio / Research Workbench |
| Task | 1–5 |
| Completion | Independent / with neutral prompt / not completed |
| Time | Seconds, when meaningfully comparable |
| Wrong turns | Count and short description |
| Recovery | Self-recovered / required prompt / abandoned |
| Keyboard-only | Pass / blocked / not tested |
| Responsive | Pass / issue / not tested; record viewport/device |
| Confidence | 1–5 after the task |
| Trust/provenance | Understood / partially understood / misunderstood |
| Quote/observation | Short verbatim or behavior, not an inference |
| Severity | Critical / high / medium / low |
| Follow-up | Prototype change or open question |

## Analysis rules

- Report raw counts and observations alongside any averages.
- Keep observed behavior separate from interpretation and design recommendations.
- Compare task completion, recovery, confidence and accessibility—not just preference.
- Treat time as diagnostic, not a universal objective: careful source verification may appropriately take longer than casual browsing.
- A failure caused by a missing prototype interaction is evidence of prototype incompleteness, not automatically evidence that the architecture is poor.
- Record task wording, order, browser, viewport, input method and any facilitator intervention.
- Keep negative and contradictory observations.
- Re-test high-severity fixes before recommending a direction.

## Stop / approval criteria

Do not select a direction if:
- one core journey is missing from that direction;
- users cannot identify the source behind a card or claim;
- keyboard-only use blocks a core task;
- error recovery creates ambiguity about whether work was saved;
- the design implies real semantic search, AI verification, or durable persistence where none exists;
- responsive behavior makes the primary job unusable.

A recommendation should include trade-offs and confidence. Final design and MVP selection remains an explicit owner decision.
