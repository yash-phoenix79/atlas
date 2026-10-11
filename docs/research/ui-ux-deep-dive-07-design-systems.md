# UI/UX Deep Dive 07 — Design Systems, Components, and Frontend Verification

- **Status:** Proposed system architecture; no UI implementation approved.
- **Research date:** 2026-10-11
- **Purpose:** Turn visual and interaction principles into a coherent system that can be implemented, tested, and maintained.

## 1. Why a design system exists

A design system is more than a component library or a color palette. It is a shared set of principles, semantic tokens, components, interaction patterns, content rules, accessibility expectations, and governance that helps a product remain coherent as it grows.

For Atlas, the system must support many content types and multiple views while preserving common behavior. Without shared rules, each card, menu, and detail view slowly develops its own semantics, spacing, focus behavior, and failure states.

A system should reduce accidental variation without eliminating intentional variation.

## 2. Separate foundations, tokens, components, patterns, and templates

- **Foundations:** product principles, accessibility baseline, interaction semantics, content rules.
- **Tokens:** named values for color, typography, spacing, radius, elevation, motion, and breakpoints.
- **Components:** buttons, inputs, cards, badges/statuses, menus, dialogs, tabs, search controls.
- **Patterns:** capture flow, resource card anatomy, search/filter behavior, destructive confirmation, async status.
- **Templates:** library, collection, search results, resource detail, settings/data management.
- **Guidelines:** when to use each pattern, anti-patterns, and evidence behind the choice.

Avoid mixing raw style values throughout components. Semantic tokens allow a theme or visual direction to change without rewriting every component.

## 3. Semantic tokens before decorative values

A semantic token names a role, not merely a shade. Example roles:
- surface.canvas, surface.card, surface.raised
- text.primary, text.secondary, text.muted
- border.default, border.strong
- action.primary, action.primary.hover
- focus.ring
- status.success, status.warning, status.error
- spacing scale
- type.body, type.resource-title, type.page-title
- motion.feedback, motion.transition, motion.exploration
- radius.card, radius.control

Names are illustrative. Choose a token scheme that maps cleanly to the actual framework. Avoid tokens like “blue-7” in component code when the intent is “destructive” or “selected.”

## 4. Component contracts

Every shared component should document purpose, appropriate use, variants and sizes, required/optional content, interaction behavior, states, keyboard behavior and accessible semantics, responsive behavior, error/loading/empty behavior, motion/reduced-motion variants, content overflow rules, testing requirements, and examples/anti-examples.

A component is not complete because its default state looks good. The state matrix is part of its API.

## 5. Resource card architecture

Atlas cards should share a common semantic shell while supporting content-specific previews.

Common shell:
- Stable resource identity
- Preview slot
- Title
- Source/type identity
- Optional meaningful status
- Primary open behavior
- Contextual secondary actions
- Selection/focus state where supported

Type-specific preview:
- Video thumbnail
- Article excerpt/featured image
- PDF cover/page preview
- Book cover
- Repository identity/description
- Image preview
- Note excerpt
- Graceful unavailable-preview fallback

Do not put every metadata field into the common shell. Resource-specific details belong in the preview or detail view. Ensure actions don't move card geometry on hover and accessible names remain concise.

## 6. Component states as first-class artifacts

For every interactive component, design the applicable states: default, hover, focus-visible, active/pressed, selected, disabled, loading, success, error, empty/unavailable content, reduced motion, and narrow viewport.

Not every component needs every state. Document which apply and why. Never simulate a disabled state only with a pale color if the control remains active.

## 7. Patterns should encode product semantics

Examples:
- Capture is asynchronous, with separate persisted-resource and enrichment states.
- Search preserves query/filter context when opening and returning from results.
- Remove from collection is distinct from deletion.
- AI-generated text is distinguishable from original source material.
- Citations lead to underlying sources and expose uncertainty where appropriate.
- Export and restore have truthful completion semantics.
- Hover-only actions always have keyboard/touch equivalents.

Reuse these patterns instead of reimplementing them independently on each screen.

## 8. Responsive rules are part of the system

For each component/pattern, define content order, wrapping/truncation, minimum width, action overflow, and behavior at supported breakpoints. Do not set breakpoints solely because a CSS framework offers defaults; use the content's actual failure points.

Test long titles, missing imagery, large text, and narrow windows. Responsive layouts should preserve semantic and keyboard order.

## 9. Visual regression is not visual validation

Screenshot comparisons can detect unintended changes in layout, spacing, and appearance. They cannot determine whether the design is understandable or usable. Combine visual regression with unit tests, integration tests, end-to-end task tests, accessibility checks, manual interaction review, performance checks, and user testing.

Use realistic fixtures: diverse resource types, long titles, broken previews, failed extraction, empty collections, huge collections, and multilingual content. Avoid snapshots made only from ideal placeholder data.

## 10. Frontend verification strategy

Proposed layered strategy:
1. Token checks: required semantic tokens exist and contrast pairs are documented.
2. Component tests: states, keyboard operation, callbacks, and errors.
3. Accessibility automation: catch detectable issues, but don't claim complete conformance.
4. Browser E2E: capture, search, filter, open, note, delete/restore, export.
5. Visual regression: critical screens across supported viewports/themes.
6. Performance testing: large grid, image loading, hover effects, scrolling.
7. Manual assistive-technology testing: critical workflows.
8. Task-based usability testing: representative users perform real tasks.

Every test must report what it covers and what it does not.

## 11. Governance: prevent design-system drift

For any new component or variant:
- State the user problem it solves.
- Check whether an existing pattern can be reused.
- Document the reason for a variant.
- Check keyboard, responsive, and reduced-motion behavior.
- Add realistic examples and tests.
- Record known limitations.
- Avoid adding a token for a one-off value without a repeatable semantic need.

Do not treat design-system completeness as an end in itself. Too many tokens, variants, and abstractions can increase complexity. The system should evolve in response to repeated real needs.

## 12. Atlas screen inventory for the first design system

Define patterns for global navigation, search input/results, filters and selected-filter chips, resource card/list row, resource-type preview, capture/paste flow, upload/import flow, processing status, resource detail/source action, notes/editor/autosave, collection picker, bulk selection, empty/loading/error states, dialogs/menus, AI answer/citation, export/restore, privacy/account settings, toast/status announcements, and keyboard shortcuts/help.

## 13. Definition of done

- Shared components have documented semantics and state coverage.
- Tokens use semantic roles and contrast is checked in actual combinations.
- Core patterns behave consistently across screens.
- Resource-type variations don't break common interactions.
- Responsive and reduced-motion variants exist where applicable.
- Critical flows have automated and manual coverage.
- Visual snapshots use realistic data and multiple viewports.
- A change to shared components triggers relevant regression tests.
- Known accessibility or browser gaps are recorded rather than hidden.

## 14. Sources and confidence

- [Material Design — Design Tokens](https://m3.material.io/foundations/design-tokens/overview) (conceptual reference; do not adopt blindly).
- [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/).
- [Storybook — UI component development](https://storybook.js.org/docs).
- [Playwright — Visual comparisons](https://playwright.dev/docs/test-snapshots).
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

| Recommendation | Confidence |
|---|---|
| Shared patterns reduce accidental inconsistency | High as design-system rationale |
| Component states need explicit testing | High as engineering/design practice |
| A particular token naming scheme is best | Unknown; depends on stack and team |
| Screenshot tests prove usability | False; snapshots cover appearance, not task success |

## Open questions
- Which frontend framework and component strategy will Atlas choose?
- Which visual directions require different tokens versus only theme-level changes?
- What are the supported browsers, viewport range, and performance budget?
- Which E2E and visual-regression tools fit the repository's eventual stack?
