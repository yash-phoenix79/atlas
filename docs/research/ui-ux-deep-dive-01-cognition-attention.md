# UI/UX Deep Dive 01 — Human Cognition, Attention, and Decision-Making

- **Status:** Research synthesis; Atlas implications are hypotheses until tested.
- **Research date:** 2026-10-11
- **Purpose:** Explain the cognitive mechanisms behind interface clarity, visual search, choice, memory, and information retrieval.
- **Related:** [UI/UX Handbook — Foundations](ui-ux-handbook-foundations.md)
- **Scope note:** This is a design-oriented synthesis of published models and reviews, not a systematic review or new experiment. Claims are bounded by the source contexts below.

## 1. The central problem: interfaces compete for limited human resources

A user does not process every pixel, label, or control equally. Perception is selective; goals influence what a person looks for; prior experience shapes interpretation; and information must be selected and interpreted over time. Wolfe and Horowitz's review of visual search identifies multiple interacting influences, including stimulus salience, goal-directed feature guidance, scene meaning, search history, and the relative value of targets and distractors. That is a better model than the simplistic claim that users always look at the brightest or largest object.

**Design consequence:** The interface must help the user direct attention toward what matters for the current task, while avoiding competition from irrelevant decoration.

Source: Wolfe & Horowitz (2017), [Five factors that guide attention in visual search](https://www.nature.com/articles/s41562-017-0058).

## 2. Attention: bottom-up salience and top-down goals

### 2.1 Two useful forces

- **Bottom-up influence:** perceptual features such as contrast, motion, size, color, or visual uniqueness can attract attention.
- **Top-down influence:** current goals, expectations, learned patterns, and remembered target features guide attention.

These are not mutually exclusive mechanisms. Visual attention research describes interactions among goal-driven and stimulus-driven selection and the time course of search. Real-world scenes and familiarity further shape where a person looks.

Sources:
- Egeth & Yantis (1997), [Visual Attention: Control, Representation, and Time Course](https://www.annualreviews.org/content/journals/10.1146/annurev.psych.48.1.269).
- Wolfe & Horowitz (2017), [Five factors that guide attention in visual search](https://www.nature.com/articles/s41562-017-0058).
- Chan & Hayward (2013), [Visual search review](https://doi.org/10.1002/wcs.1235).

### 2.2 Why “make the important thing pop” is incomplete

Increasing salience can help one element stand out, but if every card, badge, animation, and button is visually loud, they compete. Salience is also task-dependent: a bright badge can attract attention but be irrelevant to a user trying to identify a particular book cover.

**Atlas hypothesis**
- The search field and primary capture affordance should be consistently discoverable.
- Resource titles and recognizable previews should carry the identity needed for scanning.
- Badges should represent meaningful distinctions (e.g., extraction failed), not decoration.
- Motion and glare should be local to the currently hovered/focused card, not run across the whole grid.
- High-salience status treatment should be reserved for important states, such as an import failure or unsaved change.

**Test:** Give users a search task in a grid with different salience distributions. Measure target-finding time, wrong openings, and subjective confidence. Do not infer success from eye-catching appearance.

### 2.3 Search is a process, not a glance

Visual search includes preparing a target representation, guiding attention toward likely candidates, selecting candidates, and identifying whether they match. The target may be described by a title fragment, type, color, author, topic, or contextual cue. More visual variety can help distinguish items, but inconsistent layouts can also make comparison harder.

**Atlas design implications**
- Preserve a few stable card landmarks: title, resource type/source, and a recognizable preview.
- Use resource-specific visual treatments only when they add useful identity.
- Do not rely solely on thumbnail color to distinguish resources; thumbnails can be absent, repetitive, or inaccessible.
- Support non-visual retrieval through text search, metadata, keyboard navigation, and accessible names.
- Keep search query and filters visible while browsing results.

**Evidence boundary:** Findings from visual search research support the importance of goal, salience, context, and history; they do not establish a universal optimal card layout or a fixed number of metadata fields.

## 3. Memory: recognition, recall, and external cognition

### 3.1 Recall asks the user to generate; recognition provides cues

Recall means retrieving information without the answer directly presented. Recognition means identifying a previously encountered item when cues are available. Interface design often makes recognition easier by showing labels, previews, sources, recent items, and current selections.

But recognition is not automatically easy: a generic thumbnail, ambiguous icon, or truncated title may be a weak cue. An interface may expose so many cues that they become noise.

**Atlas hypotheses**
- Preserve original title and canonical source alongside generated title/summary.
- Use previews that genuinely identify the content, not merely attractive stock imagery.
- Let users add personal notes and tags using their own vocabulary.
- Show applied filters and the current collection context.
- Provide recent and recently opened resources as secondary retrieval routes, not substitutes for search.

**Test:** Compare the success rate for “find the item I saved about X” with and without source/title/snippet cues. Include cases where generated metadata is wrong or unavailable.

### 3.2 Externalize memory without creating administrative work

Collections, tags, links, saved searches, and notes move some cognitive work from memory into the environment. However, every organizational scheme introduces maintenance cost: users must choose where an item belongs, remember the scheme, and update it over time.

**Design trade-off:** Organization should improve retrieval more than it costs to maintain.

For Atlas:
- Saving should not require choosing a perfect taxonomy.
- Users should be able to add structure later.
- Collections and tags should coexist with full-text search rather than be prerequisites for retrieval.
- Automatic tagging must be editable and must not silently rewrite user-authored labels.
- Connections between resources, concepts, skills, and projects should be useful without requiring users to build a graph manually for every item.

This is a product hypothesis to test against actual long-term use, not a claim that folders or tags are inherently bad.

## 4. Cognitive load: spend effort on the user's problem, not on the interface

The term “cognitive load” is used across several research traditions. Cognitive Load Theory was developed primarily in instructional and learning contexts; its categories should not be applied mechanically as if every interface decision could be scored with a universal cognitive-load number.

For product design, a practical distinction is:
- **Task complexity:** the difficulty inherent in the user's goal and content.
- **Interface-induced effort:** extra effort created by poor labels, inconsistent patterns, hidden state, unnecessary decisions, and avoidable context switching.
- **Learning effort:** effort invested in understanding a new system or acquiring a skill; this can be worthwhile when it pays off later.

The design objective is not to eliminate all effort. It is to reduce avoidable interface-induced effort while preserving the information and control needed to perform the task.

### Atlas examples

| Avoidable burden | Better design hypothesis |
|---|---|
| Remember which filters are active | Show active filters and provide easy removal |
| Choose a collection before saving every item | Save first, organize now or later |
| Guess whether parsing completed | Expose separate saved, extracted, and indexed states |
| Re-open many resources to compare them | Show useful source snippets and allow comparison |
| Re-enter a search after opening a result | Preserve query and result position |
| Learn a unique interaction for each media type | Keep core actions consistent while adapting previews |

**Caution:** A “clean” screen can still impose high cognitive effort if controls are hidden, terminology is cryptic, or users must remember state across screens.

## 5. Choice and Hick–Hyman law: a model, not a universal UI rule

Hick's law is a family of findings/models relating choice reaction time to the amount of information or uncertainty among alternatives under particular conditions. A 2017 review discusses its continuing influence as well as limitations, including stimulus-response compatibility, practice, large set sizes, and sequential dependencies.

Source: [Hick's law for choice reaction time: A review](https://pubmed.ncbi.nlm.nih.gov/28434379/).

### What the model can suggest

- Many equally prominent alternatives may slow simple choice.
- Grouping and meaningful categorization can reduce uncertainty.
- Familiarity and practice affect the choice process.
- The decision's meaning and consequences matter beyond raw option count.

### What it cannot justify

- “Every menu must have seven or fewer items.”
- “Fewer options always means better UX.”
- “Hide advanced actions because users have too many choices.”
- “A mathematical law predicts the task time for any modern interface.”

### Atlas application

The resource card should emphasize the most common action (open/view) and avoid presenting every capability simultaneously. Secondary actions can be grouped in a contextual menu, but the design must still make important actions discoverable and keyboard accessible.

**Experiment:** Compare (A) all actions displayed on every card, (B) primary action plus labelled secondary menu, and (C) primary action plus detail-page actions. Test both frequent and uncommon tasks. Measure completion, errors, and action discoverability; do not test only the easiest task.

## 6. Information foraging: people follow clues toward valuable information

Information Foraging Theory models information seeking using an analogy to foraging: people choose paths based partly on expected value and the cost of finding and consuming information. “Information scent” describes cues that help users estimate whether a path is likely to lead to the information they need.

Primary academic reference: Pirolli & Card (1999), *Information Foraging*, Psychological Review, DOI [10.1037/0033-295X.106.4.643](https://doi.org/10.1037/0033-295X.106.4.643). Further development: Pirolli (2007), [Information Foraging Theory: Adaptive Interaction with Information](https://academic.oup.com/book/7603).

### Atlas implications

A card, result snippet, collection label, or navigation item should provide enough meaningful information for the user to judge whether following it is worthwhile.

Useful cues may include:
- Accurate title and source identity
- A content-specific snippet
- Author or publication when known
- Resource type
- Personal note or why-it-was-saved context
- Clear labels for collections and related concepts

Weak cues include:
- Generic AI-generated descriptions that don't distinguish the source
- Decorative badges with no predictive value
- Vague labels such as “Explore” when the destination is unclear
- Thumbnails that are visually attractive but semantically unrelated

**Important balance:** More metadata can improve information scent but also increase visual noise. Use progressive disclosure and testing to find a useful amount for each resource type.

## 7. Fitts's law and motor interaction

Fitts's law models pointing movement time as a function of target distance and target width in a defined task. It is relevant to controls such as close buttons, menus, checkboxes, and touch targets, but it is not a complete accessibility standard or a universal formula for all interaction.

### Atlas hypotheses
- Frequently used actions should be easy to reach and target.
- Tiny icon-only actions should not be the sole way to perform important tasks.
- Controls near one another should not make destructive actions easy to trigger accidentally.
- Hover effects must not move a target in a way that makes it hard to click.
- Touch and keyboard paths need independent design and testing.

For concrete target-size requirements, consult [WCAG 2.2](https://www.w3.org/TR/WCAG22/) rather than relying on Fitts's law alone.

## 8. How these mechanisms combine in the Atlas library

Consider a user who remembers “a video about agent memory, maybe from YouTube, saved a few weeks ago.”

1. **Goal representation:** The user has a partial topic/source/time cue, not an exact title.
2. **Query support:** Search accepts imperfect natural wording and finds indexed titles, snippets, notes, and available extracted content.
3. **Result guidance:** Resource type, title, source, and snippet provide information scent.
4. **Visual scanning:** Stable card landmarks help compare candidates; visual salience doesn't overpower relevance.
5. **Recognition:** A recognizable thumbnail or personal note helps confirm the right item.
6. **State and control:** Opening a candidate does not destroy query/filter context.
7. **Evaluation:** The user can confirm the resource and follow the original source.

If this task fails, do not assume the problem is “bad search” alone. Diagnose each stage: was the content indexed, was the query understood, were results ranked appropriately, did cards carry useful cues, or did navigation lose context?

## 9. Research exercises and falsifiable hypotheses

Use these as formative experiments, not as predetermined answers.

### Experiment A — Visual richness vs. scan efficiency
- **Hypothesis:** A richer image-led card grid improves recognition for visual resources but may impair comparison for text-heavy resources.
- **Compare:** uniform cards; resource-adaptive cards; compact list view.
- **Tasks:** find a known video, article, PDF, and repository.
- **Measures:** success, time, errors, confidence, and preference after task completion.
- **Decision rule:** retain each view only if it offers a meaningful benefit for a defined task; don't force one layout to win every task.

### Experiment B — Metadata density
- **Hypothesis:** A compact set of high-signal metadata supports scanning better than either a title-only card or a card packed with metadata.
- **Compare:** title/preview/source; richer metadata; minimal title-only.
- **Tasks:** find by topic, source, and approximate date.
- **Measures:** target-finding time, wrong openings, and ability to distinguish similar items.
- **Risk:** the best density may differ by resource type and library size.

### Experiment C — Hover depth
- **Hypothesis:** restrained tilt and parallax increase perceived tactility without harming text legibility or target acquisition.
- **Compare:** static card; subtle tilt; stronger tilt/glare.
- **Tasks:** scan and open target resources, including small text-heavy cards.
- **Measures:** target success, accidental activation, performance, self-reported discomfort, and preference.
- **Accessibility:** repeat with keyboard focus, touch, and reduced motion.
- **Decision rule:** if it slows retrieval or causes discomfort, reduce or remove it regardless of aesthetic preference.

### Experiment D — Context preservation
- **Hypothesis:** returning to search with query, filters, and result position preserved reduces rework.
- **Compare:** state-preserving navigation vs. reset-on-return.
- **Tasks:** inspect several candidates, then choose the best match.
- **Measures:** task time, repeated actions, abandonment, and errors.
- **Decision rule:** preserve context unless evidence shows a clear competing need.

### Experiment E — Capture state clarity
- **Hypothesis:** separate statuses for saved, extracted, and indexed reduce false assumptions about data completeness.
- **Compare:** one generic success state vs. explicit staged state.
- **Tasks:** capture sources with success, partial success, and extraction failure.
- **Measures:** whether users can correctly explain what is saved and what remains to be done.
- **Decision rule:** no interface should imply that unavailable processing completed.

## 10. Evidence register and confidence

| Claim | Source/evidence | Confidence for general mechanism | Confidence for Atlas-specific recommendation |
|---|---|---|---|
| Visual search is guided by multiple interacting factors, not salience alone | Wolfe & Horowitz 2017; Egeth & Yantis 1997 | High | Medium; needs prototype test |
| Search can be affected by goals, memory, set size, and cues | Chan & Hayward 2013; Davis & Palmer 2004 | High | Medium |
| Hick's law is useful but has boundary conditions | Hick's law review, PubMed 2017 | High | Medium; exact interface outcome unknown |
| Information scent helps model navigation and information seeking | Pirolli & Card 1999; Pirolli 2007 | Established theoretical framework | Medium; test specific card cues |
| Fitts's law helps reason about pointing targets | Foundational HCI/motor-control literature; use WCAG for concrete requirements | High for bounded pointing tasks | Medium; test in actual layouts |
| Resource-adaptive cards will outperform uniform cards | Not yet tested for Atlas | Unknown | Low; explicitly an experiment |
| 3D tilt improves Atlas UX | Not yet tested for Atlas | Unknown | Low; explicitly an experiment |

## 11. Source list

Accessed 2026-10-11:
- Wolfe, J. M. & Horowitz, T. S. (2017). [Five factors that guide attention in visual search](https://www.nature.com/articles/s41562-017-0058). *Nature Human Behaviour*.
- Egeth, H. E. & Yantis, S. (1997). [Visual Attention: Control, Representation, and Time Course](https://www.annualreviews.org/content/journals/10.1146/annurev.psych.48.1.269). *Annual Review of Psychology*.
- Chan, L. K. H. & Hayward, W. G. (2013). [Visual search](https://doi.org/10.1002/wcs.1235). *WIREs Cognitive Science*.
- Davis, E. T. & Palmer, J. (2004). [Visual search and attention: an overview](https://pubmed.ncbi.nlm.nih.gov/15559104/). *Spatial Vision*.
- [Hick's law for choice reaction time: A review](https://pubmed.ncbi.nlm.nih.gov/28434379/). PubMed record, 2017.
- Pirolli, P. & Card, S. K. (1999). [Information Foraging](https://doi.org/10.1037/0033-295X.106.4.643). *Psychological Review*.
- Pirolli, P. (2007). [Information Foraging Theory: Adaptive Interaction with Information](https://academic.oup.com/book/7603). Oxford University Press.
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## 12. Open questions

- How large are Atlas users' libraries expected to become, and which retrieval cues do they reliably remember?
- Which resource types benefit from visual/masonry browsing versus a compact list?
- What is the minimum card metadata needed for reliable recognition?
- Does motion help people identify items, or merely increase perceived delight?
- Which search fields and extracted formats are reliable enough to expose as filters?
- How do novice and expert users differ in desired density and shortcuts?
- Which tasks should preserve context, and which should intentionally reset it?

Do not resolve these by preference alone. Use interviews to understand real behavior, prototypes to compare interaction models, and production telemetry (with privacy safeguards) to find where workflows break.
