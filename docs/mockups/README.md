# Atlas Design Mockups

## Approved reference: Light-first Atlas UI

- [Open the approved light-first UI review prototype](./atlas-light-ui-final-review.html). This is the locked visual reference for the next implementation phase: pale surfaces, pastel resource accents, cobalt interaction color, content-led discovery, collections, spatial thinking and source-first research.
- Decision record: [2026-10-11 light-first design lock](../decisions/2026-10-11-light-first-design-lock.md).
- The reference remains a prototype with sample data and illustrative interactions, not production UI connected to a backend. Owner approval locks the visual direction; it does not imply that prototype behavior is implemented or tested.

The other artifacts below remain explorations and research references unless explicitly marked otherwise.

## Distinct design directions (new)

- [Open the three structurally different directions](./atlas-distinct-design-directions.html): Living Library (Pinterest-style visual discovery), Spatial Studio (freeform canvas as the primary workspace), and Research Observatory (source-first reading with evidence and graph context).
- These directions deliberately change information architecture and interaction model, not only the color palette. They share illustrative sample content so trade-offs can be compared.

## Visual System Lab

- [Open source file on GitHub](./atlas-visual-system-lab.html)
- [Previous three-direction exploration](./atlas-three-directions.html)
- [React Motion Lab](./motion-lab/README.md): isolated Vite + React prototype using the real `motion/react` package.
- Static contrast audit: run `node scripts/audit-atlas-visual-lab.mjs` from the repository root.

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
- The board supports pointer/touch pointer events and arrow-key movement with focus. This is still a concept implementation; production needs broader keyboard, screen-reader, undo, and touch-device verification.
- The standalone HTML uses CSS transitions and direct DOM interaction, not Motion for React. The separate React Motion Lab now demonstrates real `motion/react` layout and view transitions; its browser suite has been authored but must be run in an environment with installed dependencies and browsers.
- A deterministic static audit checks 30 core text-contrast pairs across three palettes and both themes. It does not check every component/state, non-text contrast, rendered images, or replace a complete WCAG review. Swatches remain hypotheses, not approved tokens.
- Browser tests are authored for the React lab, but no browser run, screen-reader audit, or visual-regression run is claimed as complete.

## Approval gate

The light-first visual direction is approved; see the decision record. Production implementation may proceed in that direction, while first-release scope, core journey acceptance criteria, accessibility, security, engineering review and tests remain required. Exploratory alternatives below are not independently approved visual directions.
