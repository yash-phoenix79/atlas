# Atlas Motion Lab (React)

An isolated prototype for evaluating Motion for React. It is not connected to a backend and is not the production Atlas UI.

## Run locally

Requires a recent supported Node.js release.

```sh
cd docs/mockups/motion-lab
npm install
npx playwright install chromium
npm run dev
```

Open the local URL printed by Vite. For a production bundle check, run `npm run build`. For browser tests, run `npm run test:e2e`.

## What this prototype now addresses

- Uses the real `motion/react` package for layout transitions, view transitions, and draggable board cards.
- Uses `useReducedMotion` to suppress the main motion transitions when the operating system requests reduced motion.
- Includes keyboard arrow-key movement for board cards as an alternative to dragging.
- Supports three palette hypotheses, light/dark mode, visual grid/shelves/list layouts, and a source/notes/AI-provenance panel.
- Keeps all sample content explicitly illustrative.

## Known limits that are not fixed by a design prototype

- No backend, authentication, persistent storage, real extraction, or AI processing.
- Sample source text and relationships are not real citations and must not be interpreted as research evidence.
- The React lab is an interaction experiment, not a finished or approved design system.
- Automated browser tests are added as a repeatable suite, but must be executed in an environment with dependencies and Playwright's browser installed before results can be claimed.
- Drag/touch, keyboard, screen reader behavior, focus restoration, responsive layout, and reduced-motion handling still require actual browser and assistive-technology verification.
- The standalone HTML lab has a deterministic static contrast audit for core text pairs; it is not a complete WCAG audit of all states, non-text contrast, images, or actual rendered colors.
- The three directions have not undergone controlled usability tests. No color direction or production scope is approved.

## Decision gate

Use this lab to evaluate motion and interaction trade-offs, not to bypass the explicit owner approval gate for production UI.
