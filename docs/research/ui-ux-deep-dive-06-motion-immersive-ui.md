# UI/UX Deep Dive 06 — Motion, 3D Cards, and Immersive Interaction

- **Status:** Design hypothesis and test plan; no Atlas animation has been validated.
- **Research date:** 2026-10-11
- **Purpose:** Define how Atlas can feel tactile and immersive without sacrificing retrieval, accessibility, legibility, or performance.

## 1. Motion is communication, not decoration by default

Motion can explain continuity, acknowledge an action, reveal hierarchy, communicate spatial relationships, and direct attention. It can also distract, delay, disorient, cause discomfort, and make interfaces harder to operate.

Ask: what does the motion communicate, what user goal does it support, is its meaning still available without motion, does it preserve control/readability/performance, and what evidence would justify keeping it?

Sources: [NN/g — Animation in UX](https://www.nngroup.com/articles/animation-purpose-ux/), [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## 2. Define a motion vocabulary

- **Feedback:** small change confirms a toggle, save, copy, or selection.
- **Transition:** a view changes while preserving spatial/contextual continuity.
- **Emphasis:** a selected or hovered resource gains subtle prominence.
- **Progress:** a real task communicates pending or advancing work.
- **Exploration:** card depth/tilt makes browsing feel tactile.
- **Ambient motion:** decorative movement not directly caused by a user action.

Ambient motion is the lowest priority and highest scrutiny category. Do not animate the whole library merely to make it feel alive.

## 3. Proposed card interaction

**Resting:** card is fully readable and recognizable; image/title/type/source/status are stable; no continuous movement is required.

**Hover/focus:** subtle elevation; bounded tilt if enabled; restrained image parallax; soft light response that does not cover text; secondary actions become discoverable without shifting card geometry; keyboard focus gets equivalent emphasis.

**Open:** clicking opens the resource or deliberate detail transition. The transition should clarify continuity, not delay the user.

**Exit:** motion settles without hover flicker. Pointer leave, focus move, or reduced-motion mode behaves predictably. Card returns to stable layout without persistent shift.

This is a candidate interaction contract, not an approved specification.

## 4. 3D tilt mechanics and failure modes

A typical tilt card maps pointer position to bounded perspective rotation. Glare can derive from the same position; image parallax may use a smaller transform than the card. Effects should share a coherent coordinate system and stable resting state.

Failure modes:
- Over-rotation makes text hard to read.
- Hover flicker makes the card hard to target.
- Hit-target drift moves controls away from the pointer.
- Glare obscures content or reduces contrast.
- Too many cards animate at once.
- Effects degrade scrolling or pointer response.
- Touch has no sensible equivalent.
- Focus doesn't expose equivalent information/actions.
- Reduced-motion preference is ignored.

Safeguards:
- Bound rotation and translation.
- Keep text more stable than imagery.
- Avoid layout-affecting animation for hover emphasis.
- Limit effects to active/focused card.
- Keep hit regions stable.
- Measure performance in the browser.
- Provide static, keyboard, and touch equivalents.
- Treat angle/duration/easing as test parameters, not universal best values.

## 5. Motion hierarchy and budgets

If every event has a dramatic transition, the product loses emphasis and feels slower. Proposed priority:
1. Essential state feedback, clear and immediate.
2. Small interaction response confirming focus/selection.
3. View transition where continuity helps.
4. Optional exploratory effect such as card tilt.
5. Ambient decoration only if it passes usability and comfort tests.

Set budgets for duration, distance, scale, blur, simultaneous animated elements, and reduced-motion behavior after prototype testing rather than inventing universal values.

## 6. Reduced motion and user control

Use the operating-system/browser reduced-motion preference as baseline. Often spatial movement can be replaced with brief opacity or state change, but essential information must remain available.

Atlas should respect reduced motion, avoid large parallax/3D transforms in reduced mode, preserve status feedback, consider an in-product setting if needed, and test actual browser behavior.

Source: [W3C prefers-reduced-motion technique](https://www.w3.org/WAI/WCAG21/Techniques/css/C39/).

## 7. Performance and rendering

Test:
- Large library grid with many cards
- Rapid pointer movement across cards
- Scrolling while hover effects activate
- High-DPI and lower-powered hardware
- Window resize and responsive reflow
- Browser zoom
- Reduced-motion preference
- Keyboard/focus changes
- Missing, slow, or failed images

Prefer effects that avoid repeated layout recalculation. Use browser performance tooling and frame traces rather than assuming transforms are always cheap. Optimize images and avoid unbounded shadows/filters on hundreds of cards.

## 8. Delight versus task performance

Evaluate separately:
- **Task effectiveness:** can users find/open the intended resource?
- **Efficiency:** how long and how many errors?
- **Perceived delight:** did it feel satisfying?
- **Comfort/accessibility:** distraction, discomfort, or barriers?

Do not average these into a score that hides serious failures. Delight cannot compensate for inaccessible controls or worse retrieval.

## 9. Prototype experiment

Compare using the same cards, content, viewport, and tasks:
- A: static card with strong visual design.
- B: restrained tilt/elevation/parallax.
- C: stronger tilt plus more visible glare.

Tasks: find an article by title, find a video from a thumbnail cue, compare repositories, open a secondary action, navigate with keyboard, use touch, and repeat with reduced motion.

Record success, time, wrong activations, comfort, preference, and frame/scroll performance. Rotate order to reduce learning effects. Use observation to explain metrics.

**Decision rule:** reject or reduce an effect if it causes meaningful retrieval regression, target errors, accessibility gaps, or performance degradation—even if it looks impressive.

## 10. Atlas motion design checklist

- [ ] Resting state is beautiful and complete.
- [ ] Motion has a defined purpose.
- [ ] Animation doesn't cover or distort text.
- [ ] Pointer doesn't cause hover flicker.
- [ ] Hit targets remain predictable.
- [ ] Keyboard focus has equivalent feedback.
- [ ] Touch doesn't depend on hover.
- [ ] Reduced-motion mode is complete and tested.
- [ ] No essential meaning is encoded only in animation.
- [ ] Large grids remain responsive.
- [ ] Loading/failure states are truthful.
- [ ] Effects don't create layout shifts.
- [ ] Effect passes task-based comparison against a static alternative.

## 11. Sources and confidence

- [NN/g — Animation in UX](https://www.nngroup.com/articles/animation-purpose-ux/).
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- [W3C reduced-motion technique](https://www.w3.org/WAI/WCAG21/Techniques/css/C39/).
- [SmoothUI tilt card reference](https://smoothui.dev/docs/tilt-card) — implementation inspiration, not evidence of UX benefit.
- [GodUI tilt card reference](https://www.godui.dev/components/tilt-card) — implementation inspiration, not evidence of UX benefit.

| Claim | Confidence |
|---|---|
| Motion should serve a communicative/task purpose and preserve control | High as design guidance |
| Reduced-motion preference should be respected | High; accessibility practice |
| Subtle tilt makes Atlas more delightful | Unknown until tested |
| Tilt improves search speed or recognition | Unknown |
| Specific rotation/duration/easing values are optimal | Unknown; benchmark and test |

## Open questions
- Is tilt appropriate for all resource types or only visual/exploration views?
- Should users have a motion intensity setting?
- Which hover effects remain stable with transformed hit areas?
- What performance budget is acceptable on supported devices?
- Does animation increase long-term satisfaction or only short-term novelty?
