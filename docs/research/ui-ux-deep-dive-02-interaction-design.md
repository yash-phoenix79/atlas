# UI/UX Deep Dive 02 — Interaction Design, Feedback, and Error Recovery

- **Status:** Research synthesis; Atlas rules remain hypotheses until tested.
- **Research date:** 2026-10-11
- **Purpose:** Turn interaction design theory into concrete rules for controls, state transitions, feedback, reversibility, and error recovery.
- **Related:** [UI/UX Handbook — Foundations](ui-ux-handbook-foundations.md), [Deep Dive 01 — Cognition, Attention, and Decision-Making](ui-ux-deep-dive-01-cognition-attention.md).
- **Evidence limitation:** This is a source-backed synthesis, not a usability study of Atlas or a complete accessibility audit.

## 1. Interaction design is a contract

Every interactive element implicitly promises three things:

1. **Meaning:** what this control does.
2. **Consequence:** what will change if I activate it.
3. **Feedback:** how I can tell what happened.

A control fails when any part of the contract is ambiguous. A star icon may mean favorite, bookmark, rate, or mark important. A button that says “Save” might save a resource record, download a file, or persist a note. A spinner with no accompanying status may show motion but not explain what is happening.

A control's contract should be more explicit as consequences become more significant.

**Atlas design rule (provisional):** every primary action has a clear label or universally understood affordance, a defined outcome, an explicit state transition, and a recoverable failure path where feasible.

## 2. Affordances, signifiers, mapping, and constraints

These concepts are often conflated; they diagnose different problems.

- **Affordance:** a relationship between an actor and an environment that makes an action possible.
- **Signifier:** an observable cue that communicates where an action is possible or how to perform it.
- **Mapping:** the relationship between a control and the effect it produces.
- **Constraint:** a limit that prevents invalid or unsafe actions.
- **Feedback:** information about the result or current state after an action.

A UI can technically afford an action but fail to signify it. A drag handle might support reordering, but without a visible cue users may never discover it. A set of buttons can be visually clear but have poor mapping if their labels don't match the items they affect.

### Atlas examples

| Concept | Weak pattern | Better hypothesis |
|---|---|---|
| Signifier | Only a hover glow indicates a card is interactive | Clear open action and consistent card behavior |
| Mapping | A trash icon removes a resource from one collection, but deletes it everywhere | Separate “Remove from collection” and “Delete resource” actions |
| Constraint | User can submit an empty collection name and gets a vague error | Prevent submission or explain the missing field inline |
| Feedback | Clicking Save produces no visible change | Show saved state and announce it accessibly |
| Affordance | Drag-to-organize is the only path | Provide drag plus an explicit “Move to collection” action |

**Important:** signifiers must be accessible across input modes. Hover is not a universal interaction mode; keyboard focus and touch must have equivalent ways to discover and activate important behavior.

Source: Don Norman, *The Design of Everyday Things* and [jnd.org](https://jnd.org/).

## 3. Model interactions as state transitions

Do not design only the appearance of a button. Define the states of the component or workflow and which transitions are valid.

A useful interaction specification records:
- Current state
- Trigger/action
- Preconditions
- System effect
- User-visible feedback
- Failure transition
- Cancellation/undo behavior
- Accessibility announcement and focus behavior

### Example: capture a resource

Possible states:
- idle
- submitting
- saved_processing
- ready
- partial_success
- failed_to_save
- retrying

Possible transitions:
- idle → submitting: user pastes a valid URL and activates Capture.
- submitting → saved_processing: the original URL/resource record is durably persisted; enrichment is still pending.
- saved_processing → ready: required metadata/extraction work completes.
- saved_processing → partial_success: resource exists but optional enrichment fails or is unsupported.
- submitting → failed_to_save: the system cannot confirm that the resource record was persisted.
- partial_success → retrying → ready: a retry succeeds.

The labels and transitions are product proposals; engineering must define the exact persistence guarantee and failure semantics. The UI must not claim “saved” before the system can support that claim.

### Example: note autosave

States might include editing, saving, saved, save_failed, and conflict. Avoid a vague “Saved” indicator that remains visible while unsaved edits are pending. If the product supports offline edits, represent local persistence and server synchronization as distinct states.

**Design rule:** if the system has distinct internal states that matter to the user, the interface should not collapse them into a misleading single status.

## 4. Feedback timing and specificity

Nielsen Norman Group's visibility-of-system-status heuristic emphasizes timely, appropriate feedback. Its practical implication is not “show a spinner for everything”; feedback should fit the action, duration, and uncertainty. See [Visibility of System Status](https://www.nngroup.com/articles/visibility-system-status/) and [10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

### Choose feedback by the kind of action

- **Immediate, reversible UI change:** show the changed state directly.
- **Short operation:** avoid unnecessary elaborate progress UI, but make completion perceivable.
- **Long operation:** show a progress indicator or staged status with enough information to orient the user.
- **Background work:** let the user continue working and provide a durable status indicator.
- **Uncertain operation:** state what is known and what cannot yet be confirmed.
- **Failure:** explain the consequence, preserve recoverable work, and give a relevant next action.

### Atlas capture example

Poor: “Success!”

Better:
- “Resource saved.”
- “Preview and text extraction are still processing.”
- Later: “Text indexed” or “Text extraction unavailable for this source.”

If persistence itself failed, do not show “Resource saved.” If the original was saved but an optional preview failed, do not label the whole operation as a total failure.

### Avoid misleading progress

Do not display fabricated percentages, artificial step completion, or an animation that implies real work is progressing when the system cannot measure it. If progress is indeterminate, say what the system is doing or simply show a truthful busy state.

**Validation:** test with slow, failed, interrupted, and repeated requests. Users should be able to explain what has completed and what remains.

## 5. Errors: prevent, explain, recover

NN/G's error-prevention heuristic distinguishes prevention from recovery. A useful practical taxonomy is:

- **Slip:** the user's intention was reasonable, but the wrong action was executed (e.g., clicking Delete instead of Remove).
- **Mistake:** the user's understanding or plan was wrong (e.g., assuming “archive” deletes an item).
- **System failure:** the intended action could not be completed due to network, server, permission, or processing failure.
- **Data conflict:** concurrent or offline changes disagree.
- **Unsupported input:** a source, file, format, or URL cannot be processed as requested.

These categories are useful design lenses, not mutually exclusive formal classifications.

### Error message anatomy

For meaningful failures, communicate:
1. **What happened:** plain-language description.
2. **Impact:** what was or was not changed.
3. **Recovery:** retry, edit, restore, choose another option, or continue with partial functionality.
4. **Context:** identify the affected item where practical.
5. **Support information:** a safe error/reference identifier if troubleshooting needs it, without exposing secrets or internals.

Poor: “Error 500.”

Better: “We couldn't extract text from this PDF. The original file is still in your library. Retry extraction or open the PDF and add a note manually.”

That wording is appropriate only if the system has verified the original is preserved; otherwise the interface must state the uncertainty honestly.

### Prioritize by impact

A broken decorative animation is not equivalent to a failed export or a misleading deletion. Triage errors by severity, frequency, recoverability, and impact on user trust. Prevent high-cost errors first.

## 6. Reversibility and user control

Undo is valuable because it reduces the perceived cost of acting. But not every action can be undone, and pretending otherwise is dangerous.

### A practical action policy

| Action class | Examples | Recommended UX |
|---|---|---|
| Reversible and low-risk | Add tag, reorder items, add to collection | Direct action with clear feedback; undo when practical |
| Reversible but consequential | Bulk move, change many tags | Preview scope, show affected count, offer undo or review |
| Destructive but recoverable | Move to trash, remove a note with version history | State the consequence; provide a recovery window if supported |
| Irreversible/high consequence | Permanently delete, destroy an export or account | Explicit confirmation with scope; do not rely on color or icon alone |
| External disclosure | Send selected content to an external AI service or share a collection | Clear destination and scope, explicit consent where required, privacy-aware defaults |

Confirmation dialogs are not a substitute for safe defaults. If every low-risk action asks “Are you sure?”, users learn to dismiss confirmations without reading them.

### Atlas-specific distinction

- **Remove from collection:** changes membership, not the resource's existence.
- **Archive:** changes visibility/organization but preserves the item.
- **Move to trash:** a recoverable deletion state if supported.
- **Permanently delete:** removes the resource and clearly identified associated data.
- **Export:** creates a copy; it does not prove that restore will work.

The exact semantics must be consistent across cards, detail pages, bulk actions, keyboard shortcuts, and APIs.

## 7. Consistency, standards, and meaningful variation

Consistency reduces relearning when the same concept behaves the same way. But uniform appearance should not force dissimilar content into an unsuitable pattern.

Separate:
- **Semantic consistency:** the same label/action means the same thing everywhere.
- **Behavioral consistency:** equivalent controls behave predictably.
- **Visual consistency:** typography, spacing, states, and surfaces follow the design system.
- **Content-specific variation:** the preview and information density adapt to the resource's nature.

Atlas should preserve semantic and behavioral consistency while allowing an article, video, PDF, book, image, note, and repository to have distinct content previews.

Example: “Open” should have a stable meaning. The preview may adapt, but a card should not sometimes open an in-app detail page and sometimes navigate externally without a clear convention or cue.

Source: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

## 8. Microinteractions: a complete feedback loop

A microinteraction is a small, bounded interaction around a trigger, rules, feedback, and often a mode or repeated cycle. It is not simply a small animation. A favorite toggle, copy confirmation, save status, and drag-and-drop reorder can all be microinteractions.

For every microinteraction, specify:
- Trigger: pointer, keyboard, touch, system event, or completion.
- Rule: what state change is allowed.
- Feedback: visual, textual, auditory, or haptic where appropriate.
- Duration: enough to perceive, not enough to delay work.
- Persistence: whether the state survives navigation/reload.
- Reversal: how to undo or change it.
- Accessibility: focus, name, role, value, announcements, reduced motion.
- Failure: what happens if the state change cannot be saved.

### Atlas example: favorite/bookmark toggle

A good interaction should:
- Have a clear accessible name that reflects the action/state.
- Change its visible state immediately only if optimistic UI is safe and rollback is handled.
- Indicate whether the state is actually persisted.
- Be operable by keyboard and touch.
- Avoid relying only on color or a tiny icon change.
- Remain consistent across library cards and resource details.

Source: [Nielsen Norman Group — Microinteractions](https://www.nngroup.com/articles/microinteractions/).

## 9. Motion must not break the interaction contract

Atlas wants a tactile 3D library. The motion system must preserve the user's ability to aim, read, focus, and activate controls.

### Rules for card tilt/parallax

- The card's interactive hit area must remain predictable as it tilts.
- The card must not move away from the pointer in a way that causes hover flicker.
- Avoid strong perspective that makes text difficult to read.
- Animate only the active/keyboard-focused card, not every visible card.
- Use a stable, readable resting state.
- Use keyboard focus to reveal equivalent emphasis/actions.
- Touch must not depend on hover.
- Respect reduced-motion preferences; use a static or much quieter alternative.
- Avoid effects that create layout shifts or degrade scrolling.
- Test on lower-powered hardware and realistic collection sizes.

**Hypothesis:** subtle tilt may improve tactile delight. **Unknown:** whether it improves recognition, retrieval speed, or long-term satisfaction for Atlas users. It should be judged by comparative testing, not by how impressive the effect looks in a short demo.

For accessibility requirements, use the normative [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the [W3C guidance on visible keyboard focus](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible/). The AAA focus-appearance criterion is stronger than the AA focus-visible requirement; do not confuse them.

## 10. Accessibility is part of interaction correctness

A control is not correctly implemented merely because it responds to a mouse click.

For each interactive component, verify:
- Keyboard reachability and operability.
- Visible focus state that is not obscured.
- Correct accessible name, role, and state.
- Meaningful order of focus.
- Status changes announced appropriately to assistive technology.
- Touch/pointer target usability.
- No essential hover-only functionality.
- No focus trap except where a modal interaction properly requires managed focus.
- Modal dialogs close appropriately and return focus to the invoking control.
- Motion and visual effects do not hide content or cause disorientation.

Useful normative and explanatory sources:
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Understanding Focus Visible (2.4.7, AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible/)
- [Understanding Focus Appearance (2.4.13, AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance/)
- [Understanding Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum/)

A visual inspection cannot establish WCAG conformance. Automated tools help detect some problems, but keyboard, screen-reader, zoom/reflow, and manual criterion checks are still required.

## 11. Atlas interaction contracts to write before implementation

At minimum, specify the following components and workflows:

1. Capture from pasted URL.
2. File upload/import.
3. Background extraction and indexing.
4. Retry/cancel processing.
5. Resource card open and contextual actions.
6. Add/remove from collection.
7. Edit title and metadata.
8. Add/edit/delete note.
9. Search, filter, clear filter, and return from detail.
10. Bulk selection and bulk action.
11. AI summary/question and source citations.
12. Export and restore.
13. Delete/trash/restore/permanent deletion.
14. Authentication, session expiry, and permission failure.
15. Keyboard navigation, dialogs, menus, and reduced-motion mode.

For each, document states, triggers, persistence semantics, feedback, accessibility behavior, and error recovery. This becomes an implementation and test contract.

## 12. Interaction test matrix

| Test scenario | Expected outcome |
|---|---|
| Double-click capture | No unintended duplicate unless duplication is an explicit user action; outcome is understandable |
| Network failure during capture | No false success; uncertainty and retry behavior are clear |
| Metadata failure after resource persistence | Original resource remains available; partial success is communicated accurately |
| Extraction retry | Status transitions are visible; repeated retry does not create duplicate resources |
| Undo after moving to collection | Prior membership is restored and confirmation is visible |
| Remove vs delete | Scope and consequences remain unambiguous |
| Keyboard-only operation | Every core action is reachable and operable with visible focus |
| Modal opens/closes | Focus is managed correctly and returns to the invoking context |
| Reduced motion enabled | Essential content and controls remain available without spatial animation |
| Search result opened and returned | Query, filters, and useful result context are preserved |
| AI provider timeout | No fabricated answer or success state; retry/fallback is explicit |
| Export interrupted | The user can determine whether a complete export exists; partial files are not misrepresented |

These are proposed tests, not executed results.

## 13. Research and confidence register

| Recommendation | Evidence | Confidence |
|---|---|---|
| Keep system status visible and timely | NN/G heuristic and examples | High for general guidance |
| Prevent high-cost errors before relying on messages | NN/G error-prevention heuristic | High for general guidance |
| Use undo and clear exits where appropriate | NN/G user-control heuristic | High for general guidance |
| Define component states and failure paths before implementation | Engineering/design practice derived from state-based interaction modeling | High as a method; details depend on system |
| Make saved/extracted/indexed separate when they are separate system facts | Atlas's proposed data semantics | High if system architecture preserves these distinctions |
| Use the same card action semantics across media types | Atlas consistency hypothesis | Medium; test with mixed content |
| Subtle 3D tilt increases delight without harming retrieval | Not yet tested | Low; hypothesis only |
| Particular animation durations or easing curves are optimal | No Atlas-specific test | Unknown |

## 14. Sources

Accessed 2026-10-11:
- Nielsen, J. [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/), NN/g, reviewed 2024.
- Harley, A. [Visibility of System Status](https://www.nngroup.com/articles/visibility-system-status/), NN/g.
- [Microinteractions in User Experience](https://www.nngroup.com/articles/microinteractions/), NN/g.
- Norman, D. A. *The Design of Everyday Things*; [jnd.org](https://jnd.org/).
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- [Understanding Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible/), W3C WAI.
- [Understanding Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance/), W3C WAI.
- [Understanding Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum/), W3C WAI.

## 15. Open questions for the next chapters

- Which resource actions are frequent enough to merit direct card controls?
- What exact semantics should archive, remove, trash, and delete have?
- Which capture states are meaningful to users and which are implementation noise?
- Which actions should be optimistic, and which require confirmed persistence before success feedback?
- How can tilt and parallax be implemented without hover instability, text distortion, or touch/keyboard gaps?
- Which accessibility checks can be automated in CI, and which require manual evaluation?
