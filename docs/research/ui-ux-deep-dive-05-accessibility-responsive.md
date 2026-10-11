# UI/UX Deep Dive 05 — Accessibility, Responsive Design, and Inclusive Interaction

- **Status:** Research synthesis and proposed acceptance criteria; no conformance claim.
- **Research date:** 2026-10-11
- **Purpose:** Make accessibility and responsive behavior core design requirements, not a late polish pass.
- **Critical caveat:** Reading this chapter or running an automated scanner does not establish WCAG conformance. Atlas must be tested against applicable success criteria in the implemented product.

## 1. Accessibility is a quality property

Accessibility concerns whether people with different sensory, motor, cognitive, and other abilities can perceive, understand, navigate, and operate a product. It also benefits people using temporary constraints: a trackpad, glare, one hand, a small screen, a noisy environment, or reduced motion settings.

For Atlas, accessibility is especially important because the desired experience includes dense resource grids, animation, metadata, reading, and AI-generated content. Those elements must remain usable through keyboard, touch, zoom, and assistive technology.

Normative reference: [W3C Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

## 2. Use WCAG as a testable standard, not a slogan

WCAG organizes requirements around four principles: perceivable, operable, understandable, and robust. Each applicable success criterion has a conformance level and specific requirements.

A project should define target conformance, map criteria to components/workflows, test the actual implementation, record evidence and severity, remediate, and retest. Do not claim conformance because colors look good or an automated tool reports no errors. Manual keyboard, zoom/reflow, screen-reader, and interaction checks remain necessary.

## 3. Keyboard interaction

Every core workflow should be operable without a mouse.

Check:
- Logical tab order and visible focus.
- Focus not hidden under sticky headers or overlays.
- No keyboard traps.
- Standard keys behave predictably.
- Menus, dialogs, popovers, and list selection support expected keyboard behavior.
- Focus is restored appropriately when an overlay closes.
- Hover-only actions have keyboard equivalents.
- Drag-and-drop has a non-drag alternative.

Atlas examples:
- Resource cards can be opened by keyboard.
- Contextual actions are reachable without pointer hover.
- Resources can be moved without drag-and-drop.
- Search filters can be changed and reset using a keyboard.
- 3D card emphasis has a clear focus equivalent but does not move focus.
- Destructive-action dialogs manage focus and return it to the invoking control.

References: [WCAG Keyboard](https://www.w3.org/TR/WCAG22/#keyboard), [Focus Visible](https://www.w3.org/TR/WCAG22/#focus-visible), [Focus Not Obscured](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum).

## 4. Screen readers and semantic structure

A visual control is not automatically exposed correctly to assistive technology. Prefer native HTML semantics when they match the behavior. Custom widgets require appropriate names, roles, states, keyboard behavior, and testing.

Check:
- Headings form a meaningful hierarchy.
- Landmarks identify navigation, main content, and complementary regions.
- Links describe destinations; buttons describe actions.
- Form controls have persistent labels and useful error associations.
- Buttons expose state when state matters.
- Status changes are announced appropriately without overwhelming users.
- Images have context-appropriate alternatives; decorative images do not add noise.
- Resource cards do not become one giant, confusing accessible-name string.
- Meaningful icons have accessible names.

ARIA does not make a custom control keyboard-operable automatically.

References: [W3C WAI Tutorials](https://www.w3.org/WAI/tutorials/), [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/).

## 5. Contrast, color, and non-text information

Check real rendered combinations: normal/large text, icons and boundaries needed to identify controls, focus indicators, selected/disabled/error/warning/success states, text over imagery, hover overlays, translucent surfaces, and themes.

Common WCAG AA text contrast requirements are 4.5:1 for normal text and 3:1 for large text, subject to the specification's definitions and exceptions. Non-text components and graphical objects have separate requirements where applicable.

Do not use color alone to convey selection, error, processing state, or resource type. Combine color with text, shape, iconography, or position.

Reference: [WCAG Contrast Minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum), [Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast).

## 6. Zoom, reflow, and responsive behavior

Responsive design is not simply shrinking desktop components. Content order, interaction patterns, density, and navigation may need to adapt to available space.

Test narrow mobile, tablet, laptop, browser zoom up to 200%, reflow, long titles/URLs, multilingual content, missing thumbnails, empty/loading/failure states, system text resizing, virtual keyboard, sticky navigation, and dialogs on short viewports.

Atlas hypotheses:
- Desktop may use persistent sidebar plus grid/list.
- Mobile may use compact navigation and a single-column or narrow two-column grid based on card content.
- Capture must be reachable without desktop-only drag.
- Search results must not depend on hover previews.
- Details should prioritize readable text and actions rather than compressing desktop card anatomy.

References: [WCAG Reflow](https://www.w3.org/TR/WCAG22/#reflow), [Resize Text](https://www.w3.org/TR/WCAG22/#resize-text).

## 7. Touch targets and input diversity

Touch has different precision and no hover. Rules:
- Use adequately sized targets and enough spacing to reduce accidental activation.
- Do not place destructive actions too close to frequent actions.
- Do not require hover to reveal essential controls.
- Make long-press behavior discoverable if used.
- Provide a non-drag method for moving or reordering.
- Test pointer, keyboard, and touch paths.

WCAG 2.2 includes a target-size criterion at AA with specified minimum size/spacing and exceptions. Consult the normative text rather than treating one pixel value as universal: [Target Size Minimum](https://www.w3.org/TR/WCAG22/#target-size-minimum).

## 8. Motion, comfort, and user preference

Use the operating-system/browser reduced-motion preference as a baseline. Do not assume removing all animation is always the only response; often spatial movement can be replaced with a brief opacity or state change. Essential information must remain available.

Atlas should respect reduced motion, avoid large parallax/3D transforms in reduced mode, keep status and selection understandable, consider an in-product setting if users need more control, and ensure reduced-motion styling doesn't hide hover/focus actions.

References: [W3C prefers-reduced-motion technique](https://www.w3.org/WAI/WCAG21/Techniques/css/C39/), [WCAG Animation from Interactions](https://www.w3.org/TR/WCAG22/#animation-from-interactions).

## 9. Cognitive accessibility and plain language

Cognitive accessibility includes clarity, predictable behavior, understandable labels, manageable complexity, and support for users who may have difficulty with memory, attention, reading, or executive function.

Atlas applications:
- Use consistent labels for capture, save, archive, remove, and delete.
- Avoid requiring users to remember hidden state.
- Show applied filters and current context.
- Provide clear next steps after failure.
- Avoid jargon such as “embedding pipeline” when explaining incomplete search.
- Distinguish AI-generated content from original content.
- Let users inspect citations and sources.
- Avoid time pressure for ordinary reading and organization tasks.

Plain language does not mean removing technical precision. Use understandable language first and expose diagnostics where useful.

## 10. Dynamic content and AI output

Atlas may update statuses, results, extraction progress, and AI responses without a full page reload. Define which changes are announced, which remain silent to avoid noise, how focus behaves when results update, how users cancel/retry work, how citations are navigated, and how code/tables/long responses remain accessible.

Do not move focus automatically because background work completed. Announce status without disrupting the current task unless the user explicitly initiated a focused new surface.

## 11. Responsive design is also a content decision

For each component document minimum useful width, wrapping/truncation rules, content order, persistent controls, menu overflow, focus/reading order, empty/loading/error variants, and behavior with long or missing content.

A card that works only with a short title and perfect thumbnail is not production-ready.

## 12. Proposed accessibility test matrix

| Test | Expected result |
|---|---|
| Keyboard-only capture and search | Core tasks complete without mouse; focus stays visible |
| Open/close dialog | Focus is managed and restored |
| Screen-reader resource card | Title, type/source, and action are understandable |
| Reduced-motion preference | Essential information/actions remain available |
| 200% zoom/reflow | Main workflows remain usable |
| Contrast audit | Applicable combinations meet target criteria |
| Touch viewport | Core actions don't depend on hover |
| Long title/missing thumbnail | Card remains readable and actionable |
| Async extraction update | State is conveyed without stealing focus |
| Filter update | Context remains understandable to assistive technology |
| Drag-and-drop replacement | Equivalent non-drag operation exists |
| AI citations | Sources can be navigated and understood accessibly |

## 13. Definition of done for accessibility

Before calling a screen ready:
1. Identify applicable WCAG 2.2 criteria.
2. Run automated checks and record tool/version/scope.
3. Perform keyboard-only task testing.
4. Test responsive reflow and text scaling.
5. Test critical flows with a relevant screen reader/browser combination.
6. Check contrast in meaningful states.
7. Test reduced motion and touch.
8. Fix critical blockers; document known gaps and risk acceptance.
9. Re-test after changes.

This is a proposed process. No Atlas implementation has been audited in this document.

## 14. Sources and confidence

- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) — normative requirements.
- [W3C WAI Tutorials](https://www.w3.org/WAI/tutorials/) — semantic/accessibility guidance.
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) — common ARIA interaction patterns.
- [W3C reduced-motion technique](https://www.w3.org/WAI/WCAG21/Techniques/css/C39/).
- [W3C Animation from Interactions](https://www.w3.org/TR/WCAG22/#animation-from-interactions).

| Claim | Confidence |
|---|---|
| Accessibility must be assessed against actual success criteria | High; normative standard |
| Automated scans alone cannot establish full conformance | High; testing-method limitation |
| Atlas needs keyboard/touch equivalents for hover behavior | High as a product requirement |
| A particular mobile grid density is optimal | Unknown; test with representative content |
| A static reduced-motion variant is sufficient for every user | Not assumed; test and provide additional controls if needed |

## Open questions
- Which WCAG conformance level will Atlas formally target for release?
- Which screen reader/browser combinations will be included in release testing?
- Does 3D interaction need a user-level motion toggle in addition to OS preference?
- What is the smallest supported viewport?
- Which actions need live-region announcements, and how will noisy updates be avoided?
