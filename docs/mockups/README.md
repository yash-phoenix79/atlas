# Atlas Design Mockups

These are exploratory artifacts, not production UI and not connected to a backend.

## Visual System Lab

- [Open source file on GitHub](./atlas-visual-system-lab.html)
- [Previous three-direction exploration](./atlas-three-directions.html)

GitHub's normal file viewer displays HTML source rather than rendering the page. To preview locally:

1. Open the HTML file on GitHub and download the raw file, or clone the repository.
2. Save `atlas-visual-system-lab.html` to your computer.
3. Open the file in a modern browser.

### What the lab demonstrates

- Switch between three palette hypotheses: Organic Studio, Expressive Digital, and Warm Editorial.
- Toggle light and dark themes.
- Switch between masonry, curated shelves, and a compact list.
- Filter and save sample resources.
- Explore a draggable board, undo a move, add a sample note, and apply a structured layout.
- Select nodes in an illustrative knowledge graph and inspect the relationship panel.
- Inspect a source-first research layout and sample citation behavior.

### Important limitations

- All resource content, graph relationships, citations, and statuses are illustrative.
- The prototype has no backend and persists no data.
- The board supports pointer dragging in this HTML experiment; production must also support keyboard and touch access, reliable undo, and tested spatial interaction.
- Motion here is implemented with CSS transitions and direct DOM interaction, **not Motion for React / Framer Motion**. This is deliberate for a self-contained file that opens locally. A separate React prototype is required to evaluate shared-element transitions and coordinated Motion behavior properly.
- Palette contrast has not yet been audited. Swatches and color names are hypotheses, not approved tokens.
- No browser automation, accessibility audit, or visual regression test is claimed as complete.

## Approval gate

These prototypes do not authorize production UI work. The owner must explicitly approve the visual direction, core flows, and initial scope after reviewing the evidence and test results.
