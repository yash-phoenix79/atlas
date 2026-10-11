# UI/UX Deep Dive 03 — Visual Perception, Hierarchy, Typography, and Composition

- **Status:** Research synthesis; Atlas-specific visual rules are hypotheses until tested.
- **Research date:** 2026-10-11
- **Purpose:** Explain how visual composition supports comprehension and emotional character, and turn those mechanisms into a practical direction for Atlas.
- **Related:** [UI/UX Handbook — Foundations](ui-ux-handbook-foundations.md), [Deep Dive 01 — Cognition, Attention, and Decision-Making](ui-ux-deep-dive-01-cognition-attention.md).
- **Evidence limitation:** The sources below provide expert guidance and standards. They do not prove one universally optimal layout, font, palette, or density.

## 1. Visual design is information architecture in perceptual form

Visual design does more than decorate content. It expresses what matters, what belongs together, what is interactive, what is different, and where attention should go. The layout is effectively a visible model of the product's information and actions.

Nielsen Norman Group's visual-design guidance discusses scale, hierarchy, balance, contrast, and Gestalt grouping as principles that affect both appeal and usability. Its later design review emphasizes grid alignment, typographic systems, intentional color, and consistency. These are expert design guidelines, not hard scientific laws for every context.

Sources:
- [5 Principles of Visual Design in UX](https://www.nngroup.com/articles/principles-visual-design/)
- [Good Visual Design, Explained](https://www.nngroup.com/articles/good-visual-design/)
- [Visual Hierarchy in UX](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)

**Atlas implication:** visual identity and task clarity must be designed together. A card layout is not good merely because it looks like a gallery; it must communicate resource identity, action, source, and status at a useful glance.

## 2. Visual hierarchy: define an order of attention

Hierarchy is created through the combined use of scale, contrast, position, grouping, typography, whitespace, and repetition. No single cue is always dominant; the context and surrounding elements affect its perceived importance.

### 2.1 A practical hierarchy model

For a typical Atlas library screen, a proposed hierarchy is:

1. **Orientation:** Where am I? Which collection/view is active?
2. **Primary task:** Search, capture, or browse.
3. **Content identity:** Resource title and recognizable preview.
4. **Useful context:** Source, resource type, relevant status, or personal annotation.
5. **Secondary metadata/actions:** Capture date, low-frequency controls, technical details.

This is not a universal template. A detail screen, search-results page, import workflow, or failure screen should have a hierarchy matched to its task.

### 2.2 The squint test—and its limits

A simple visual review is to blur or squint at a screen and ask whether the most important regions remain visually distinct. This can reveal competing focal points and poor grouping.

But it is a diagnostic heuristic, not a usability test. It cannot tell you whether the labels make sense, whether text is accessible, or whether the screen supports task completion.

### 2.3 Common hierarchy failures

- **Everything is emphasized:** multiple saturated colors, badges, bold text, and shadows compete.
- **The wrong element dominates:** a large thumbnail overwhelms the title or primary action.
- **Secondary text is too faint:** hierarchy is achieved by reducing contrast below a readable level.
- **The hierarchy is inconsistent:** equivalent actions appear in different places without a reason.
- **Hierarchy depends on color alone:** users may miss distinctions or perceive them differently.
- **Responsive collapse breaks grouping:** controls become detached from the content they affect.

**Atlas rule:** hierarchy should be created first with layout, grouping, and type; use color, borders, and effects as additional signals. Never sacrifice legibility to make metadata look secondary.

## 3. Gestalt grouping: proximity, similarity, common region, continuity

Gestalt principles describe tendencies in how people organize visual elements into groups. They are especially useful for interface layout because the perceived grouping affects how users interpret controls and content.

### 3.1 Proximity

Elements close together tend to be perceived as related; spacing can establish boundaries without adding visible boxes.

Atlas applications:
- Keep a resource title close to its preview and source identity.
- Place a field label close to its input.
- Separate card content from unrelated hover controls.
- Use spacing to distinguish global navigation, collection controls, and resource content.

Source: [NN/g — Proximity Principle](https://www.nngroup.com/articles/gestalt-proximity/).

### 3.2 Similarity

Elements that share color, shape, size, or other visual properties tend to be perceived as related.

Atlas applications:
- Use consistent visual semantics for interactive controls.
- Give status indicators stable meaning.
- Keep the same core card structure across resource types, while varying the preview content.
- Avoid using the same accent color for unrelated states such as “selected,” “failed,” and “AI generated” without additional cues.

Source: [NN/g — Similarity Principle](https://www.nngroup.com/articles/gestalt-similarity/).

### 3.3 Common region and boundaries

A background, border, or container can group elements. Containers are useful when they communicate real structure; too many boxes create a nested-card effect and weaken hierarchy.

Atlas applications:
- Use card surfaces for resource objects, not for every metadata cluster inside a card.
- Keep filter groups visibly distinct from result content.
- Use a modal only when the task requires focused attention; do not turn every detail action into a modal.

### 3.4 Continuity and alignment

Aligned edges and repeated grids help users infer structure and compare items. A coherent grid also makes the interface feel intentionally composed.

Atlas applications:
- Align card edges and content baselines where comparison matters.
- Use a predictable column system for library, detail, and settings screens.
- Allow masonry only where variable content height creates real value; otherwise, irregular heights can make row-by-row scanning and comparison harder.
- Ensure responsive rearrangement preserves semantic grouping, reading order, and keyboard order.

### 3.5 Gestalt principles are not commands

Perceptual grouping can conflict with semantic grouping. Two visually similar controls may be unrelated, and two nearby elements may not belong together. Use grouping cues to support the actual data and interaction model, not substitute for it.

## 4. Scale, balance, contrast, and whitespace

### Scale

Relative size communicates rank and creates rhythm. Use a deliberate type scale and component scale rather than arbitrary one-off values. But do not interpret “three sizes” as a strict universal limit; complex interfaces may need more levels if the hierarchy remains coherent.

### Balance

Balance concerns how visual weight is distributed. Symmetry can feel orderly; asymmetry can create energy and editorial character. Neither is inherently better.

Atlas hypothesis: the library can use editorial asymmetry in artwork and collection features while preserving predictable alignment for search, navigation, titles, and controls.

### Contrast

Contrast can distinguish levels and states. It includes more than color: size, weight, shape, texture, spacing, and motion can all create contrast.

For text and essential interface components, contrast must satisfy the applicable accessibility criteria. Do not create hierarchy by making important information barely visible.

Source: [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

### Whitespace

Whitespace is active structure. It separates groups, gives content room to breathe, and signals relative importance. Excessive spacing can also push key information below the fold or reduce useful content density.

Atlas hypothesis: use generous outer spacing and clear group boundaries, but keep enough resources visible for efficient browsing. Validate at realistic desktop and laptop viewport sizes instead of judging only a spacious presentation mockup.

## 5. Typography: legibility first, personality second

Typography affects reading, scanning, perceived personality, and the distinction between content roles.

### 5.1 Build a type system, not a collection of font choices

Specify semantic roles:
- Display/brand heading
- Page heading
- Section heading
- Resource title
- Body/reading text
- Metadata and caption
- UI label/control text
- Code or technical content

Each role needs documented font family, size, weight, line height, letter spacing where justified, and responsive behavior. Components should use semantic tokens instead of individually tuned values.

### 5.2 Editorial personality without sacrificing utility

A serif display face can contribute a bookish or editorial character; a highly legible sans-serif can support controls and dense metadata. This pairing is a possible art direction, not a rule. A well-designed single-family system can be just as strong.

Atlas should test:
- A distinctive display face for collection titles or editorial moments.
- A highly legible UI/body face for navigation, metadata, and controls.
- A restrained type scale with consistent weights.
- Clear distinction between content titles and interface labels.
- Robust fallback fonts and layout behavior if a web font fails.

### 5.3 Reading typography and line length

For long-form reading, line length, line height, paragraph spacing, and contrast affect comfort. Shorter lines can reduce the effort of tracking from one line to the next, but excessively narrow columns create too many line breaks. There is no single perfect line length for every font, screen, language, and user.

Atlas should offer a focused reading/detail view where source text, notes, and citations can be read without the visual density of the library grid.

### 5.4 Never use typography as the only state signal

Italic, weight, or color can help distinguish a status, but important state changes should also have textual or semantic cues. Code, URLs, dates, and long technical titles may need different wrapping behavior from prose.

Source: [NN/g — Good Visual Design, Explained](https://www.nngroup.com/articles/good-visual-design/).

## 6. Color: roles, semantics, and accessible contrast

Color is useful for identity, hierarchy, grouping, and state. A palette should be designed as a semantic system, not as a collection of attractive hex values.

### 6.1 Define roles before selecting shades

Typical roles:
- Page/background surface
- Raised/card surface
- Primary text
- Secondary text
- Borders/dividers
- Brand accent
- Interactive/focus state
- Success, warning, error, and informational status
- Selected state

The same color can look different against different surfaces. Test real combinations, including hover, focus, disabled, selected, and error states.

Material Web's documentation is an example of a role-based color-token system, with foreground tokens associated with surface roles: [Material Web color](https://github.com/material-components/material-web/blob/main/docs/theming/color.md). USWDS similarly documents semantic theme tokens: [USWDS theme color tokens](https://designsystem.digital.gov/design-tokens/color/theme-tokens/).

These are useful references, not a requirement to adopt either system wholesale.

### 6.2 Do not communicate meaning through color alone

Use a combination of text, iconography, shape, position, or pattern for important states. A red border alone may not tell users whether a field is invalid, a resource failed to process, or a destructive action is selected.

### 6.3 Contrast requirements are not aesthetic suggestions

Use WCAG 2.2 criteria applicable to the content and component. Test normal text, large text, non-text controls, focus indicators, and states. The common text contrast thresholds are 4.5:1 for normal text and 3:1 for large text under WCAG AA, subject to the specification's definitions and exceptions.

Do not treat a palette as accessible merely because its default foreground/background pair passes. Real UI states introduce other combinations.

## 7. Imagery and resource-card composition

Atlas is a library of heterogeneous things, so images and previews should help users recognize the content rather than merely decorate the grid.

### Proposed resource-adaptive preview rules

- **Video:** recognizable thumbnail, source identity, duration if reliably known.
- **Article:** title, publisher/source, useful excerpt or featured image where available.
- **PDF/document:** document cover or page preview when available, with a clear file-type cue.
- **Book:** cover, title, author, and reading/notes state if relevant.
- **GitHub repository:** repository identity, description/README excerpt, language or activity only when reliable and useful.
- **Image/inspiration:** large visual preview and source attribution.
- **Note:** readable first lines and an unambiguous note marker.
- **Unavailable preview:** graceful, attractive fallback based on resource type and title—not a misleading random image.

These are product hypotheses. The exact card anatomy should be tested for recognition, retrieval, and scanning.

### Thumbnail quality and trust

A generated or fetched thumbnail must not imply that it is the original source. Do not silently replace the source title with an AI-generated label. Preserve source identity and provide a clear path to the original. For image rights, attribution, and external-source terms, review licensing and applicable provider constraints before reuse.

## 8. Visual density: a core trade-off for libraries

Density is the amount of useful information visible in a given space. It affects both the feeling of abundance and the ability to scan.

- **Too sparse:** few resources visible, excessive scrolling, repeated empty space.
- **Too dense:** tiny text, weak grouping, difficult target selection, visual fatigue.
- **Adaptive density:** a rich visual grid for exploration and a compact list/table for text-heavy retrieval or bulk management.

Atlas should not force one view to satisfy every job. Provide a small set of intentional views if research shows each solves a distinct task:
1. **Visual grid:** exploratory browsing and image-led recognition.
2. **Compact list:** text-heavy resources and quick scanning.
3. **Focused detail/reader:** understanding, note-taking, and source inspection.

Avoid adding many view modes just because competitors have them. Each mode adds implementation, accessibility, and maintenance cost.

## 9. The role of 3D depth and visual effects

Depth cues can communicate elevation, focus, grouping, and physicality. In Atlas, subtle tilt, light response, and image parallax may reinforce the sense of browsing tangible objects.

However, visual effects also consume attention and can interfere with text, hit targets, motion comfort, and rendering performance.

### Provisional motion and depth design rules

- Resting cards remain fully readable and recognizable.
- Hover/focus changes reinforce the active object rather than rearrange the grid.
- Keep the card's hit target predictable; avoid pointer-following movement that causes hover flicker.
- Tilt should be bounded; test small amplitudes before increasing.
- Keep title and essential text stable where possible.
- Use glare as a subtle lighting cue, not an opaque layer over text.
- Apply effects only to active cards; avoid continuous animation across the grid.
- Keyboard focus receives equivalent emphasis; touch uses a static or tap-based interaction.
- Respect reduced-motion preferences.
- Test scrolling and interaction on lower-powered devices and large libraries.

No specific tilt angle, duration, or easing curve is declared optimal here. Those values must be selected and evaluated in the prototype.

## 10. An Atlas visual system proposal (not yet approved)

### Visual thesis: “a living editorial library”

A plausible direction combines:
- Calm neutral foundation with a distinctive but restrained accent palette.
- Editorial typography for collection identity, with highly legible interface typography.
- Rich, source-specific previews.
- Clear grid and alignment for efficient scanning.
- Warm material cues or subtle surface texture used sparingly.
- Depth and motion only on interaction.
- Consistent action semantics and accessible state styling.
- A compact alternative view for retrieval-heavy workflows.

This is a hypothesis to compare with genuinely different directions: a darker spatial observatory and a playful creative studio. Do not prematurely lock the design system around this concept.

### Design tokens to specify after direction testing

- Semantic colors and state palettes
- Type families, scales, weights, and line heights
- Spacing scale and layout grid
- Radii and border treatment
- Elevation/shadow system
- Icon size and stroke conventions
- Motion durations, easing, and reduced-motion variants
- Breakpoints and density rules
- Focus, hover, active, selected, disabled, loading, empty, and error states

Tokens should emerge from the chosen visual language and accessibility checks, not from arbitrary numbers selected before the design direction is evaluated.

## 11. Visual design review protocol

For each screen, review in this order:

1. **Squint/blur test:** is the intended hierarchy visible without reading every label?
2. **Content identity test:** can a person distinguish representative resource types and similar items?
3. **Grouping test:** do proximity, alignment, and surface boundaries communicate the intended relationships?
4. **Legibility test:** inspect text at realistic viewport sizes and browser zoom levels.
5. **Contrast test:** verify actual text and component states against WCAG criteria.
6. **Responsive test:** ensure grouping, order, and controls survive narrow widths.
7. **Keyboard test:** verify focus is visible and does not depend on hover styling.
8. **Motion test:** compare static, reduced-motion, and animated variants.
9. **Density test:** check how many resources can be scanned without reducing useful information to illegible noise.
10. **Task test:** ask users to find, compare, and open resources; aesthetics alone cannot validate usability.

## 12. Falsifiable Atlas experiments

### Experiment A — Card density
Compare rich cards, balanced cards, and compact cards using the same mixed resource set. Test recognition and search tasks; measure success, time, wrong openings, and confidence. Choose different densities by view/task if results support it.

### Experiment B — Serif display typography
Compare an editorial display face with a restrained sans-serif system. Ask users to locate collections and identify page hierarchy; separately measure readability and perceived product character. Do not let brand preference override legibility.

### Experiment C — Adaptive resource previews
Compare uniform generic cards with resource-adaptive previews. Test videos, PDFs, books, notes, articles, and repositories. Record where previews improve recognition and where they introduce inconsistency.

### Experiment D — Contrast hierarchy
Compare hierarchy created through spacing/scale and hierarchy created primarily through color. Check scanning accuracy and accessibility, including color-vision and reduced-contrast scenarios where possible.

### Experiment E — 3D motion
Compare static cards, subtle tilt, and stronger tilt/glare. Test target acquisition, reading, comfort, frame/scroll performance, keyboard focus, touch, and reduced motion. Do not choose a more animated version solely because participants say it looks cooler.

## 13. Evidence and confidence register

| Recommendation | Source/evidence | Confidence |
|---|---|---|
| Hierarchy, scale, contrast, balance, and grouping affect how a screen is perceived | NN/g visual-design guidance | High as expert design guidance |
| Proximity and similarity communicate relationships | NN/g Gestalt guidance | High for the general perceptual tendency |
| Color must be checked across real states, not only the base palette | WCAG and role-based design-system guidance | High |
| A serif display face will make Atlas more desirable | No Atlas user test | Low; hypothesis |
| Adaptive cards will outperform one universal card layout | No Atlas prototype test | Low; hypothesis |
| A particular whitespace or density ratio is optimal | No task-specific evidence | Unknown |
| 3D tilt increases retrieval performance | No Atlas experiment | Unknown |

## 14. Sources

Accessed 2026-10-11:
- Kelley Gordon, [5 Principles of Visual Design in UX](https://www.nngroup.com/articles/principles-visual-design/), Nielsen Norman Group, last reviewed 2026-09-01.
- Kelley Gordon, [Good Visual Design, Explained](https://www.nngroup.com/articles/good-visual-design/), Nielsen Norman Group.
- Kelley Gordon, [Visual Hierarchy in UX](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/), Nielsen Norman Group.
- Aurora Harley, [Proximity Principle in Visual Design](https://www.nngroup.com/articles/gestalt-proximity/), Nielsen Norman Group.
- Aurora Harley, [Similarity Principle in Visual Design](https://www.nngroup.com/articles/gestalt-similarity/), Nielsen Norman Group.
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- [Material Web color tokens](https://github.com/material-components/material-web/blob/main/docs/theming/color.md).
- [USWDS theme color tokens](https://designsystem.digital.gov/design-tokens/color/theme-tokens/).

## 15. Open questions

- Should Atlas's brand lean editorial, spatial/futuristic, or playful/creative?
- How much visual density supports long-term use with hundreds or thousands of resources?
- Which media types benefit from masonry and which need stable rows?
- Which fonts remain readable across code, URLs, multilingual titles, and small metadata?
- What amount of motion creates tactility without impairing retrieval?
- Which visual states need semantic colors, and which should use neutral styling?
- Which image sources, extraction methods, and thumbnail fallbacks are reliable and legally appropriate?

These questions should be resolved through competitor observation, design prototypes, accessibility checks, and task-based evaluation—not taste alone.
